'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const IMAGES_TO_PRELOAD = [
  '/images/logo.webp',
  '/images/Home Page/OurStory.webp',
  '/images/Home Page/trusted.webp',
  '/images/Home Page/BannerIcons/ProductManufature.webp',
  '/images/Home Page/BannerIcons/bedsDelivered.webp',
  '/images/Home Page/BannerIcons/projectCompleted.webp',
  '/images/Home Page/BannerIcons/yearOfExperience.webp',
  '/images/Home Page/sectionIcons/trustedbyHealthCare.webp',
  '/images/Home Page/sectionIcons/ourProduct.webp',
  '/images/Home Page/sectionIcons/ourStory.webp',
  '/images/Home Page/sectionIcons/trustCertificate.webp',
  '/images/Home Page/sectionIcons/OurClients.webp',
  '/images/Home Page/sectionIcons/howWeBuild.webp',
  '/images/Home Page/sectionIcons/trustedMedical.webp',
];

export function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [particles, setParticles] = useState<{ id: number; left: string; size: string; delay: string; duration: string; color: string }[]>([]);

  useEffect(() => {
    setMounted(true);

    let hasSeen = false;
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        hasSeen = !!sessionStorage.getItem('hasSeenPreloader');
      }
    } catch (e) {
      console.warn('sessionStorage is not accessible:', e);
    }

    if (hasSeen) {
      setProgress(100);
      setIsDone(true);
      setShouldRender(false);
      document.documentElement.classList.add('preloader-done');
      document.documentElement.classList.remove('preloader-active');
      return;
    }

    // Generate particles client-side using direct rgba colors to prevent Tailwind purging
    const generatedParticles = Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      left: `${(i * 7) % 95 + 2}%`,
      size: `${((i * 5) % 10) + 6}px`,
      delay: `${(i * 0.3) % 5}s`,
      duration: `${((i * 3) % 8) + 8}s`,
      color: i % 3 === 0 ? 'rgba(249, 115, 22, 0.15)' : i % 3 === 1 ? 'rgba(14, 165, 233, 0.15)' : 'rgba(245, 158, 11, 0.12)',
    }));
    setParticles(generatedParticles);

    // Disable scroll during preloading
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    let loadedCount = 0;
    const totalImages = IMAGES_TO_PRELOAD.length;
    let imagesLoaded = false;

    // Load images in background with handlers bound BEFORE source to avoid cache misses
    IMAGES_TO_PRELOAD.forEach((src) => {
      const img = new window.Image();
      const handleImageLoad = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          imagesLoaded = true;
        }
      };
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad;
      img.src = src;
    });

    // Smoothly increment progress
    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      let increment = 0;
      if (imagesLoaded) {
        increment = 5; // fast finish
      } else if (currentProgress < 75) {
        increment = Math.floor(Math.random() * 2) + 2; // smooth steady climb
      } else if (currentProgress < 92) {
        increment = 1; // slowing down to wait for assets
      } else {
        increment = 0; // cap at 92% until loaded
      }

      currentProgress = Math.min(currentProgress + increment, imagesLoaded ? 100 : 92);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(progressInterval);
        try {
          if (typeof window !== 'undefined' && window.sessionStorage) {
            sessionStorage.setItem('hasSeenPreloader', 'true');
          }
        } catch (e) {
          console.warn('Failed to save preloader status to sessionStorage:', e);
        }
        setTimeout(() => {
          setIsDone(true);
        }, 150);
      }
    }, 15); // ~60fps tick rate

    // Safety fallback: force load completion after 1200ms
    const fallbackTimeout = setTimeout(() => {
      imagesLoaded = true;
    }, 1200);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fallbackTimeout);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (isDone) {
      // Re-enable scroll when loading is complete
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.documentElement.classList.add('preloader-done');
      document.documentElement.classList.remove('preloader-active');
      
      // Delay unmounting for fadeout animation
      const fadeTimeout = setTimeout(() => {
        setShouldRender(false);
      }, 500);

      return () => clearTimeout(fadeTimeout);
    }
  }, [isDone]);

  if (!shouldRender) return null;

  return (
    <div
      className={`preloader-wrapper fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ease-in-out ${
        isDone ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Immediately hide scrollbar before JS mounts to prevent flashing */}
      {shouldRender && (
        <style dangerouslySetInnerHTML={{ __html: `
          html, body {
            overflow: hidden !important;
            height: 100% !important;
          }
        `}} />
      )}

      {/* Inline Styles for custom premium background animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-blob-1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.35; }
          50% { transform: translate(60px, -80px) scale(1.2); opacity: 0.55; }
        }
        @keyframes float-blob-2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.25; }
          50% { transform: translate(-80px, 60px) scale(0.9); opacity: 0.4; }
        }
        @keyframes rise {
          0% { transform: translateY(110vh); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-10vh); opacity: 0; }
        }
        @keyframes wobble {
          0%, 100% { margin-left: 0px; }
          50% { margin-left: 20px; }
        }
        @keyframes shine {
          0% { transform: translateX(-150%) skewX(-25deg); }
          100% { transform: translateX(250%) skewX(-25deg); }
        }
        .animate-blob-1 {
          animation: float-blob-1 12s ease-in-out infinite;
        }
        .animate-blob-2 {
          animation: float-blob-2 15s ease-in-out infinite;
        }
        .animate-shine {
          animation: shine 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}} />

      {/* Premium Decorated Light Background */}
      {/* Base Light Slate gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-white to-orange-50/30 z-0" />
      
      {/* Futuristic Light Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none z-[1]"
        style={{
          backgroundImage: `radial-gradient(circle, #f97316 1px, transparent 1px), linear-gradient(to right, #00000008 1px, transparent 1px), linear-gradient(to bottom, #00000008 1px, transparent 1px)`,
          backgroundSize: '24px 24px, 48px 48px, 48px 48px',
        }}
      />

      {/* Floating Animated Glow Blob 1 (Orange/Amber - Top Right) */}
      <div className="absolute -top-12 -right-12 w-[550px] h-[550px] bg-orange-300/40 rounded-full blur-[120px] pointer-events-none animate-blob-1 z-[2]" />
      
      {/* Floating Animated Glow Blob 2 (Blue/Slate - Bottom Left) */}
      <div className="absolute -bottom-12 -left-12 w-[600px] h-[600px] bg-sky-300/40 rounded-full blur-[140px] pointer-events-none animate-blob-2 z-[2]" />

      {/* Silver Shade / Sweep Animation Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[3] opacity-60">
        <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-slate-200/50 to-transparent animate-shine" />
      </div>

      {/* Active Running Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[4]">
        {mounted && particles.map((p) => (
          <div
            key={p.id}
            className="absolute bottom-0 rounded-full"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              animationName: 'rise, wobble',
              animationDuration: `${p.duration}, 5s`,
              animationTimingFunction: 'linear, ease-in-out',
              animationIterationCount: 'infinite, infinite',
              animationDelay: `${p.delay}, ${p.delay}`,
            }}
          />
        ))}
      </div>
      
      {/* Soft light radial focus mask */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,#ffffff_98%)] opacity-60 z-[5]" />

      <div className="relative z-10 flex flex-col items-center max-w-xs w-full px-6 text-center">
        {/* Brand Logo Wrapper with circular progress svg */}
        <div className="relative w-36 h-36 flex flex-col items-center justify-center rounded-full bg-white border border-slate-100 shadow-xl backdrop-blur-sm pt-2">
          {/* Subtle pulse glow background */}
          <div className="absolute inset-0 rounded-full bg-orange-500/5 blur-xl animate-pulse" />
          
          {/* Subtle outer rotating dashed border */}
          <div className="absolute -inset-3 rounded-full border border-dashed border-orange-200/50 animate-[spin_20s_linear_infinite] pointer-events-none" />

          {/* SVG Circular Progress Track */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 144 144">
            {/* Background track circle */}
            <circle
              cx="72"
              cy="72"
              r="66"
              className="stroke-slate-100 fill-none"
              strokeWidth="3.5"
            />
            {/* Dynamic foreground progress circle */}
            <circle
              cx="72"
              cy="72"
              r="66"
              className="stroke-orange-500 fill-none transition-all duration-300 ease-out"
              strokeWidth="3.5"
              strokeDasharray={(2 * Math.PI * 66).toFixed(2)}
              strokeDashoffset={(2 * Math.PI * 66 * (1 - progress / 100)).toFixed(2)}
              strokeLinecap="round"
            />
          </svg>

          <Image
            src="/images/logo.webp"
            alt="Logo"
            width={74}
            height={74}
            priority
            className="object-contain relative z-10 select-none pointer-events-none mb-1"
          />

          {/* Progress Text Inside Circle */}
          <span className="text-sm font-bold font-mono tracking-wider text-orange-500 relative z-10">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
