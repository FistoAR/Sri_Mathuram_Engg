'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ThumbnailSliderProps {
  images: string[];
  productName: string;
  onSelectImage?: (img: string) => void;
}

export function ThumbnailSlider({ images, productName, onSelectImage }: ThumbnailSliderProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto slide left smoothly every 3 seconds unless hovered
  useEffect(() => {
    if (isPaused || images.length <= 1) return;

    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  // Scroll to selected thumbnail smoothly
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const child = container.children[selectedIndex] as HTMLElement;
      if (child) {
        container.scrollTo({
          left: child.offsetLeft - (container.clientWidth - child.clientWidth) / 2,
          behavior: 'smooth',
        });
      }
    }
  }, [selectedIndex]);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleSelect = (idx: number, img: string) => {
    setSelectedIndex(idx);
    if (onSelectImage) onSelectImage(img);
  };

  return (
    <div
      className="relative group w-full  bg-slate-50 p-[0.6vw] rounded-[1vw] border border-slate-200 shadow-xs"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left Navigation Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-[0.4vw] top-1/2 -translate-y-1/2 z-20 w-[2vw] h-[2vw] min-w-[28px] min-h-[28px] rounded-full bg-slate-900/80 text-white flex items-center justify-center shadow-md hover:bg-orange-500 hover:scale-110 active:scale-95 transition-all duration-300 opacity-90 group-hover:opacity-100"
        title="Previous Sample Image"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px] stroke-[2.5]" />
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-[0.4vw] top-1/2 -translate-y-1/2 z-20 w-[2vw] h-[2vw] min-w-[28px] min-h-[28px] rounded-full bg-slate-900/80 text-white flex items-center justify-center shadow-md hover:bg-orange-500 hover:scale-110 active:scale-95 transition-all duration-300 opacity-90 group-hover:opacity-100"
        title="Next Sample Image"
        aria-label="Next Image"
      >
        <ChevronRight className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px] stroke-[2.5]" />
      </button>

      {/* 3-Column Visible Thumbnail Slider Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-[0.6vw] overflow-x-auto scroll-smooth py-[0.2vh] px-[2.2vw] items-center [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => handleSelect(idx, img)}
            className={`relative flex-shrink-0 w-[calc((100%-1.2vw)/3)] aspect-[16/11] rounded-[0.6vw] overflow-hidden cursor-pointer transition-all duration-300 border-2 ${
              selectedIndex === idx
                ? 'border-orange-500 ring-2 ring-orange-500/20 shadow-md scale-102 bg-white'
                : 'border-slate-200/80 hover:border-orange-300 bg-white/80'
            }`}
          >
            <Image
              src={img}
              alt={`${productName} Sample ${idx + 1}`}
              fill
              sizes="25vw"
              className="object-contain p-[0.4vw] hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
