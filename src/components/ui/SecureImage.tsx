"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Matching decryption key sequence
const SCRAMBLE_KEY = [
  0x53, 0x4d, 0x45, 0x32, 0x30, 0x32, 0x36, 0xaa, 0xbb, 0xcc,
];

// Global in-memory blob cache so each image is only fetched & decrypted once
const memoryBlobCache = new Map<string, string>();
const pendingPromises = new Map<string, Promise<string>>();

// Encode file path to opaque base64url token to hide paths from Network tab
function encodeToToken(str: string): string {
  try {
    return btoa(unescape(encodeURIComponent(str)))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  } catch (e) {
    return btoa(str);
  }
}

function fetchAndDecryptImage(src: string): Promise<string> {
  if (memoryBlobCache.has(src)) {
    return Promise.resolve(memoryBlobCache.get(src)!);
  }

  if (pendingPromises.has(src)) {
    return pendingPromises.get(src)!;
  }

  const promise = (async () => {
    try {
      const token = encodeToToken(src);
      const res = await fetch(`/api/assets/secure?t=${token}`, {
        headers: {
          "x-shield-auth": "app-internal",
        },
      });
      if (!res.ok) throw new Error("Failed to load secure asset");

      const arrayBuffer = await res.arrayBuffer();
      const uint8 = new Uint8Array(arrayBuffer);

      // De-scramble the buffer
      for (let i = 0; i < uint8.length; i++) {
        uint8[i] = uint8[i] ^ SCRAMBLE_KEY[i % SCRAMBLE_KEY.length];
      }

      // Determine mime type from extension
      const ext = src.split(".").pop()?.toLowerCase() || "webp";
      const mime =
        ext === "png"
          ? "image/png"
          : ext === "jpg" || ext === "jpeg"
            ? "image/jpeg"
            : "image/webp";

      const blob = new Blob([uint8], { type: mime });
      const blobUrl = URL.createObjectURL(blob);
      memoryBlobCache.set(src, blobUrl);
      return blobUrl;
    } catch (err) {
      // Return empty or fallback
      return src;
    } finally {
      pendingPromises.delete(src);
    }
  })();

  pendingPromises.set(src, promise);
  return promise;
}

interface SecureImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

export function SecureImage({
  src,
  alt,
  fill = false,
  width,
  height,
  sizes,
  priority = false,
  className = "",
}: SecureImageProps) {
  const [decryptedSrc, setDecryptedSrc] = useState<string>(() => {
    return memoryBlobCache.get(src) || "";
  });

  useEffect(() => {
    let isMounted = true;
    if (memoryBlobCache.has(src)) {
      setDecryptedSrc(memoryBlobCache.get(src)!);
      return;
    }

    fetchAndDecryptImage(src).then((url) => {
      if (isMounted) {
        setDecryptedSrc(url);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [src]);

  return (
    <div
      data-secure-img="true"
      className={`relative w-full h-full select-none overflow-hidden ${
        fill ? "absolute inset-0" : ""
      }`}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      {decryptedSrc ? (
        // Render from in-memory decrypted blob (invisible to Network Img filter)
        <Image
          src={decryptedSrc}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          sizes={sizes}
          priority={priority}
          unoptimized={true}
          draggable={false}
          className={`pointer-events-none select-none transition-all duration-300 ${className}`}
        />
      ) : (
        // Skeleton loader while decrypting stream
        <div className="absolute inset-0 bg-slate-100 animate-pulse rounded-lg" />
      )}

      {/* Invisible overlay shield protecting image element from inspect and right-click */}
      <div
        className="absolute inset-0 z-20 pointer-events-none select-none"
        aria-hidden="true"
      />
    </div>
  );
}
