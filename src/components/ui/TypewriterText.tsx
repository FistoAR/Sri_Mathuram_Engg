"use client";

import React, { useState, useEffect, useRef } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  step?: number;
  className?: string;
  onComplete?: () => void;
  onReset?: () => void;
  showCursor?: boolean;
}

export function TypewriterText({
  text,
  delay = 80,
  speed = 40,
  step = 1,
  className = "",
  onComplete,
  onReset,
  showCursor = false,
}: TypewriterTextProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const onCompleteRef = useRef(onComplete);
  const onResetRef = useRef(onReset);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    onResetRef.current = onReset;
  }, [onReset]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          // Replay on scroll: reset when out of view
          setIsInView(false);
          setVisibleCount(0);
          setIsCompleted(false);
          onResetRef.current?.();
        }
      },
      { threshold: 0.1 },
    );

    const el = elementRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isInView) {
      setVisibleCount(0);
      setIsCompleted(false);
      return;
    }

    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setVisibleCount((prev) => {
          const next = prev + step;
          if (next >= text.length) {
            clearInterval(intervalId);
            setIsCompleted(true);
            onCompleteRef.current?.();
            return text.length;
          }
          return next;
        });
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [isInView, text, speed, delay, step]);

  // Split into words to prevent mid-word line breaks
  const words = text.split(" ");
  let runningCharCount = 0;

  return (
    <span
      ref={elementRef}
      className={`inline-flex flex-wrap items-baseline tracking-normal ${className}`}
      style={{ willChange: "transform, opacity" }}
    >
      {words.map((word, wordIdx) => {
        const wordChars = Array.from(word);
        const wordStartIndex = runningCharCount;
        runningCharCount +=
          wordChars.length + (wordIdx < words.length - 1 ? 1 : 0);

        return (
          <React.Fragment key={wordIdx}>
            {/* Word unit: guarantees the word never breaks across lines in the middle */}
            <span className="inline-block whitespace-nowrap">
              {wordChars.map((char, charIdx) => {
                const charIndex = wordStartIndex + charIdx;
                const isVisible = charIndex < visibleCount;
                return (
                  <span
                    key={charIdx}
                    className={`inline-block transition-all duration-300 ease-out transform will-change-transform ${
                      isVisible
                        ? "opacity-100 translate-y-0 scale-100 filter-none"
                        : "opacity-0 translate-y-2 scale-95 blur-[2px]"
                    }`}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
            {wordIdx < words.length - 1 && (
              <span className="inline-block whitespace-pre"> </span>
            )}
          </React.Fragment>
        );
      })}
      {showCursor && !isCompleted && (
        <span className="inline-block ml-0.5 w-[2px] h-[1em] bg-[#E86D24] animate-pulse align-middle" />
      )}
    </span>
  );
}
