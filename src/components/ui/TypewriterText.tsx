"use client";

import React, { useState, useEffect, useRef } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  step?: number;
  className?: string;
}

export function TypewriterText({
  text,
  delay = 50,
  speed = 30,
  step = 1,
  className = "",
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

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
      let currentText = "";
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          currentText += text.substring(index, index + step);
          setDisplayedText(currentText);
          index += step;
        } else {
          clearInterval(interval);
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

