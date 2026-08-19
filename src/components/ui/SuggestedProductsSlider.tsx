'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from '@/components/ui/ProductCard';
import { MedicalProduct } from '@/lib/data';

interface SuggestedProductsSliderProps {
  products: MedicalProduct[];
}

export function SuggestedProductsSlider({ products }: SuggestedProductsSliderProps) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate items to ensure infinite seamless scrolling loop
  const displayProducts = [...products, ...products, ...products];

  // Smooth frame-by-frame continuous scrolling towards left
  useEffect(() => {
    let animationFrameId: number;

    const scroll = () => {
      if (!isPaused && containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        // If reached halfway (the duplicated set boundary), reset position back silently
        const maxScroll = (scrollWidth - clientWidth) / 2;
        if (scrollLeft >= maxScroll) {
          containerRef.current.scrollLeft = 0;
        } else {
          containerRef.current.scrollLeft += 1.2; // Smooth continuous leftward movement
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const handlePrev = () => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.clientWidth / 5;
      containerRef.current.scrollBy({ left: -cardWidth * 2, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.clientWidth / 5;
      containerRef.current.scrollBy({ left: cardWidth * 2, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`relative group/slider w-full ${isPaused ? 'is-paused' : ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left Navigation Arrow */}
      <button
        onClick={handlePrev}
        aria-label="Previous products"
        className="absolute left-[-1.2vw] top-1/2 -translate-y-1/2 z-20 w-[2.2vw] h-[2.2vw] min-w-[32px] min-h-[32px] rounded-full bg-slate-900/90 text-white flex items-center justify-center shadow-lg hover:bg-orange-500 hover:scale-110 active:scale-95 transition-all duration-300 opacity-90 group-hover/slider:opacity-100 border border-white/20"
      >
        <ChevronLeft className="w-[1.2vw] h-[1.2vw] min-w-[16px] min-h-[16px]" />
      </button>

      {/* Slider Track */}
      <div
        ref={containerRef}
        className="flex gap-[1vw] overflow-hidden py-[1vh] px-[0.2vw]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {displayProducts.map((p, idx) => (
          <div key={`${p.id}-${idx}`} className="w-[calc(25%-0.8vw)] min-w-[270px] flex-shrink-0">
            <ProductCard product={p} index={idx} hideDetails={true} />
          </div>
        ))}
      </div>

      {/* Right Navigation Arrow */}
      <button
        onClick={handleNext}
        aria-label="Next products"
        className="absolute right-[-1.2vw] top-1/2 -translate-y-1/2 z-20 w-[2.2vw] h-[2.2vw] min-w-[32px] min-h-[32px] rounded-full bg-slate-900/90 text-white flex items-center justify-center shadow-lg hover:bg-orange-500 hover:scale-110 active:scale-95 transition-all duration-300 opacity-90 group-hover/slider:opacity-100 border border-white/20"
      >
        <ChevronRight className="w-[1.2vw] h-[1.2vw] min-w-[16px] min-h-[16px]" />
      </button>
    </div>
  );
}
