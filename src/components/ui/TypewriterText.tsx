"use client";

import React, { useState, useEffect, useRef } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  step?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypewriterText({
  text,
  delay = 50,
  speed = 25,
  step = 1,
  className = "",
  onComplete,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        } else if (entry.boundingClientRect.top > window.innerHeight) {
          setStarted(false);
          setDisplayedText("");
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const timer = setTimeout(() => {
      let index = 0;
      let currentText = "";
      const interval = setInterval(() => {
        if (index < text.length) {
          currentText += text.substring(index, index + step);
          setDisplayedText(currentText);
          index += step;
          if (index >= text.length) {
            clearInterval(interval);
            onCompleteRef.current?.();
          }
        } else {
          clearInterval(interval);
          onCompleteRef.current?.();
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [started, text, speed, delay, step]);

  return (
    <span ref={elementRef} className={className}>
      {displayedText}
    </span>
  );
}

