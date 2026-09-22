"use client";

import { useEffect } from "react";

export function SecurityGuard() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Helper to flash blank screen during capture events
    const triggerBlankShield = () => {
      document.body.classList.add("screen-protect-active");
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText("");
        }
      } catch (e) {}

      setTimeout(() => {
        document.body.classList.remove("screen-protect-active");
      }, 1200);
    };

    // 1. Prevent Right-Click Context Menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // 2. Prevent Drag and Drop of Images and Content
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "IMG" ||
        target.tagName === "CANVAS" ||
        target.tagName === "A" ||
        target.closest("img") ||
        target.closest("canvas")
      ) {
        e.preventDefault();
        return false;
      }
    };

    // 3. Prevent DevTools, Save, and Screenshot Hotkeys
    const handleKeyDown = (e: KeyboardEvent) => {
      // PrintScreen key (Windows)
      if (e.key === "PrintScreen" || e.keyCode === 44) {
        triggerBlankShield();
        e.preventDefault();
        return false;
      }

      // F12 (DevTools)
      if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
        return false;
      }

      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;

      // Print: Ctrl+P / Cmd+P
      if (cmdOrCtrl && (e.key === "p" || e.key === "P")) {
        triggerBlankShield();
        e.preventDefault();
        return false;
      }

      // Mac Screenshot combinations (Cmd + Shift + 3, 4, 5)
      if (isMac && e.metaKey && e.shiftKey) {
        if (["3", "4", "5"].includes(e.key)) {
          triggerBlankShield();
        }
      }

      // Windows Snipping Tool (Win + Shift + S)
      if (
        e.shiftKey &&
        (e.key === "s" || e.key === "S") &&
        (e.metaKey || e.ctrlKey)
      ) {
        triggerBlankShield();
      }

      if (cmdOrCtrl) {
        // Save Page: Ctrl+S / Cmd+S
        if (e.key === "s" || e.key === "S") {
          e.preventDefault();
          return false;
        }

        // View Source: Ctrl+U / Cmd+U
        if (e.key === "u" || e.key === "U") {
          e.preventDefault();
          return false;
        }

        // Inspect / DevTools: Ctrl+Shift+I / Cmd+Option+I
        if (
          (e.shiftKey &&
            (e.key === "i" ||
              e.key === "I" ||
              e.key === "c" ||
              e.key === "C" ||
              e.key === "j" ||
              e.key === "J")) ||
          (isMac &&
            e.altKey &&
            (e.key === "i" ||
              e.key === "I" ||
              e.key === "j" ||
              e.key === "J" ||
              e.key === "c" ||
              e.key === "C"))
        ) {
          e.preventDefault();
          return false;
        }
      }
    };

    // 4. Wipe clipboard on keyup if PrintScreen was pressed
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen" || e.keyCode === 44) {
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText("");
          }
        } catch (e) {}
      }
    };

    // 5. Focus-Loss / Snipping Tool Detection
    // When a screenshot tool or selector takes focus, blank the images
    const handleWindowBlur = () => {
      document.body.classList.add("screen-protect-active");
    };

    const handleWindowFocus = () => {
      document.body.classList.remove("screen-protect-active");
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        document.body.classList.add("screen-protect-active");
      } else {
        document.body.classList.remove("screen-protect-active");
      }
    };

    // Attach Listeners
    document.addEventListener("contextmenu", handleContextMenu, {
      capture: true,
    });
    document.addEventListener("dragstart", handleDragStart, { capture: true });
    document.addEventListener("keydown", handleKeyDown, { capture: true });
    document.addEventListener("keyup", handleKeyUp, { capture: true });
    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("focus", handleWindowFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Clean Up
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu, {
        capture: true,
      });
      document.removeEventListener("dragstart", handleDragStart, {
        capture: true,
      });
      document.removeEventListener("keydown", handleKeyDown, { capture: true });
      document.removeEventListener("keyup", handleKeyUp, { capture: true });
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("focus", handleWindowFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
}
