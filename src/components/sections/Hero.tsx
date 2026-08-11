"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Send,
} from "lucide-react";

interface SlideData {
  id: string;
  badge: string;
  titleOrange: string;
  titleNavy: string;
  description: string;
  image: string;
  category: string;
}

const slideData: SlideData[] = [
  {
    id: "01",
    badge: "TRUSTED MEDICAL EQUIPMENT MANUFACTURER",
    titleOrange: "BUILDING HEALTHCARE",
    titleNavy: "INFRASTRUCTURE SINCE - 1997",
    description:
      "For over 29 years, Sri Mathurams Medical Engineering has been manufacturing high-quality hospital furniture and institutions across India.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=2000&q=90",
    category: "ICU & Hospital Beds",
  },
  {
    id: "02",
    badge: "PREMIUM STAINLESS STEEL SOLUTIONS",
    titleOrange: "STAINLESS STEEL",
    titleNavy: "HOSPITAL FURNITURE & EQUIPMENT",
    description:
      "Precision engineered SS 304 grade hospital furniture including Mayo tables, crash carts, instrument trolleys, and scrub sinks built for rigorous clinical environments.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=2000&q=90",
    category: "Stainless Steel Furniture",
  },
  {
    id: "03",
    badge: "ADVANCED OPERATION THEATRE SETUP",
    titleOrange: "OPERATION THEATRE",
    titleNavy: "TABLES & SHADOWLESS LIGHTS",
    description:
      "State-of-the-art hydraulic and electric OT tables designed for multi-specialty surgical setups with maximum ergonomic flexibility and clinical safety.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=90",
    category: "Operation Theatre Equipment",
  },
  {
    id: "04",
    badge: "PATIENT CARE & ERGONOMIC COMFORT",
    titleOrange: "PATIENT TRANSFER",
    titleNavy: "STRETCHERS & WARD FURNITURE",
    description:
      "Ergonomically designed patient transport stretchers, wheel chairs, bedside lockers, and overbed tables for seamless hospital operations.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=90",
    category: "Patient Transport & Ward",
  },
  {
    id: "05",
    badge: "CUSTOMIZED MEDICAL WARD UNITS",
    titleOrange: "PEDIATRIC & WARD",
    titleNavy: "SPECIALTY CARE BEDS",
    description:
      "Modular ward solutions, pediatric cots, delivery tables, and attendant beds crafted with robust powder-coated antibacterial materials.",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=2000&q=90",
    category: "Specialty Ward Furniture",
  },
  {
    id: "06",
    badge: "INSPECTION & QUALITY GUARANTEED",
    titleOrange: "STERILIZATION &",
    titleNavy: "INSPECTION SOLUTIONS",
    description:
      "High-standard autoclaves, linen trolleys, waste bin stands, and IV poles built to withstand rigorous everyday hospital usage with high durability.",
    image:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=2000&q=90",
    category: "Sterilization & Utilities",
  },
];

export function Hero() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const thumbnailRef = useRef<HTMLDivElement | null>(null);

  const thumbnailsData = [...slideData.slice(1), slideData[0]];
  const [slideIndex, setSlideIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlider("next");
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const isAnimating = useRef(false);

  const moveSlider = (direction: "next" | "prev") => {
    if (
      !sliderRef.current ||
      !listRef.current ||
      !thumbnailRef.current ||
      isAnimating.current
    )
      return;
    isAnimating.current = true;

    const slider = sliderRef.current;
    const sliderList = listRef.current;
    const thumbnail = thumbnailRef.current;

    const sliderItems = sliderList.querySelectorAll(".item");
    const thumbnailItems = thumbnail.querySelectorAll(".item");

    if (sliderItems.length === 0 || thumbnailItems.length === 0) return;

    // Start text exit animation
    setIsTextVisible(false);

    setTimeout(() => {
      if (direction === "next") {
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add("next");
        setCurrentSlide((prev) => (prev + 1) % slideData.length);
      } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add("prev");
        setCurrentSlide(
          (prev) => (prev - 1 + slideData.length) % slideData.length,
        );
      }

      setSlideIndex((prev) => prev + 1);
      setIsTextVisible(true);

      setTimeout(() => {
        slider.classList.remove("next");
        slider.classList.remove("prev");
        isAnimating.current = false;
      }, 900);
    }, 300);
  };

  const activeItem = slideData[currentSlide];

  return (
    <section className="relative w-full min-h-[90vh] md:h-[91.5vh] overflow-hidden bg-[#f7f5ef] text-slate-900 select-none">
      <style>{`
        .slider { height: 100%; width: 100%; overflow: hidden; position: relative; }
        .slider .list .item { width: 100%; height: 100%; position: absolute; inset: 0 0 0 0; }
        .slider .list .item img { width: 100%; height: 100%; object-fit: cover; object-position: right; }
        .slider .list .item:nth-child(1) { z-index: 1; }
        .slider.next .list .item:nth-child(1) img {
          width: 13vw; height: 18vh; position: absolute; bottom: 13vh; left: 55vw; border-radius: 1.2vw;
          animation: showImage 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1 forwards;
        }
        @keyframes showImage {
          from { bottom: 13vh; left: 55vw; width: 13vw; height: 18vh; border-radius: 1.2vw; }
          to { bottom: 0; left: 0; width: 100%; height: 100%; border-radius: 0; }
        }
        .slider.next .thumbnail { animation: effectNext 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1 forwards; }
        @keyframes effectNext { from { transform: translateX(13vw); } }
        .slider.next .thumbnail .item:nth-last-child(1) { overflow: hidden; animation: showThumbnail 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1 forwards; }
        @keyframes showThumbnail { from { width: 0; opacity: 0; } }
        .slider.prev .list .item:nth-child(2) { z-index: 2; }
        .slider.prev .list .item:nth-child(2) img {
          animation: outFrame 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1 forwards;
          position: absolute; bottom: 0; left: 0;
        }
        @keyframes outFrame { to { width: 13vw; height: 18vh; bottom: 22vh; left: 55vw; border-radius: 1.2vw; } }
        .slider.prev .thumbnail .item:nth-child(1) { overflow: hidden; opacity: 0; animation: showThumbnail 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1 forwards; }
        .slider.next .nextPrevArrows button, .slider.prev .nextPrevArrows button { pointer-events: none; }
        
        .line-reveal {
          opacity: 0;
          transform: translateY(25px);
          filter: blur(6px);
          animation: lineIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .line-exit {
          opacity: 1;
          transform: translateY(0px);
          animation: lineOut 0.3s cubic-bezier(0.7, 0, 0.84, 0) forwards;
        }
        @keyframes lineIn {
          to {
            opacity: 1;
            transform: translateY(0px);
            filter: blur(0px);
          }
        }
        @keyframes lineOut {
          to {
            opacity: 0;
            transform: translateY(-20px);
            filter: blur(6px);
          }
        }
        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      <div ref={sliderRef} className="slider">
        {/* Main Slider Background Images List */}
        <div ref={listRef} className="list">
          {slideData.map((item) => (
            <div key={item.id} className="item" data-id={item.id}>
              <img
                src={item.image}
                alt={item.category}
                className="opacity-40 md:opacity-100"
              />
              {/* Soft light backdrop gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-100/95 to-slate-100/10 w-full md:w-[65%]" />
            </div>
          ))}
        </div>

        {/* Dedicated Staggered Text Content Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-start pt-[2vh] h-full">
          <div className="w-full px-[5vw] md:px-[4vw] pb-[12vh] md:pb-[14vh] pt-[4vh]">
            <div className="w-full lg:max-w-[45vw] space-y-[2vh] md:space-y-[3vh] pointer-events-auto">
              {/* Line 1: Badge with Trusted Logo & Bottom Orange Accent Line */}
              <div
                className={`hero-badge flex flex-col items-start gap-1.5 ${isTextVisible ? "line-reveal" : "line-exit"}`}
                style={{ animationDelay: isTextVisible ? "0.1s" : "0s" }}
              >
                <div className="inline-flex items-center gap-2 text-[3.2vw] sm:text-[2vw] md:text-[1.5vw] font-bold tracking-wider text-[#0B2545] uppercase">
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                    <Image
                      src="/images/Home Page/trusted.webp"
                      alt="Trusted Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>{activeItem.badge}</span>
                </div>
                {/* Orange underline accent line */}
                <div className="w-14 sm:w-16 h-[3px] bg-[#E86D24] rounded-full" />
              </div>

              {/* Line 2: Title */}
              <h1
                className={`hero-title text-[6.5vw] sm:text-[5.5vw] md:text-[3.1vw] font-bold text-navy-950 font-heading ${isTextVisible ? "line-reveal" : "line-exit"}`}
                style={{ animationDelay: isTextVisible ? "0.25s" : "0.05s" }}
              >
                <span className="text-orange-500 block">
                  {activeItem.titleOrange}
                </span>
                <span className="text-slate-900 block mt-[0.2vh]">
                  {activeItem.titleNavy}
                </span>
              </h1>

              <div className="space-y-[1.8vh]">
                {/* Line 3: Description */}
                <p
                  className={`hero-description text-[3.8vw] sm:text-[2.6vw] md:text-[1.1vw] text-slate-700 font-medium leading-relaxed max-w-[90vw] md:max-w-[38vw] ${isTextVisible ? "line-reveal" : "line-exit"}`}
                  style={{ animationDelay: isTextVisible ? "0.4s" : "0.1s" }}
                >
                  {activeItem.description}
                </p>

                {/* Line 4: Action Buttons */}
                <div
                  className={`hero-buttons flex flex-wrap gap-[2.5vw] md:gap-[1vw] pt-[1.5vh] ${isTextVisible ? "line-reveal" : "line-exit"}`}
                  style={{ animationDelay: isTextVisible ? "0.55s" : "0.15s" }}
                >
                  <Link href="/products">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-[3.5vw] sm:text-[2.2vw] md:text-[0.85vw] px-[5vw] sm:px-[3.5vw] md:px-[1.4vw] py-[1.8vh] md:py-[1.3vh] rounded-xl sm:rounded-full uppercase shadow-md hover:shadow-lg transition-all flex items-center gap-[1.5vw] md:gap-[0.5vw]">
                      EXPLORE PRODUCTS{" "}
                      <ArrowRight className="w-[4vw] sm:w-[2.5vw] md:w-[1vw] h-[4vw] sm:h-[2.5vw] md:h-[1vw]" />
                    </button>
                  </Link>

                  <Link href="/contact">
                    <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-[3.5vw] sm:text-[2.2vw] md:text-[0.85vw] px-[5vw] sm:px-[3.5vw] md:px-[1.4vw] py-[1.8vh] md:py-[1.3vh] rounded-xl sm:rounded-full uppercase shadow-md hover:shadow-lg transition-all flex items-center gap-[1.5vw] md:gap-[0.5vw]">
                      REQUEST A QUOTE{" "}
                      <Send className="w-[4vw] sm:w-[2.5vw] md:w-[1vw] h-[4vw] sm:h-[2.5vw] md:h-[1vw] rotate-45" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={thumbnailRef}
          className="thumbnail absolute z-20 bottom-[13vh] md:bottom-[15vh] left-[52vw] flex items-center gap-[2vw] md:gap-[0.8vw] overflow-hidden max-w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {thumbnailsData.map((item) => (
            <div
              key={item.id}
              className="item group relative cursor-pointer flex-shrink-0 w-[42vw] sm:w-[28vw] md:w-[13vw] h-[22vh] md:h-[18vh] min-h-[140px] rounded-[1.2vw] overflow-hidden border border-white/80 shadow-xl transition-transform duration-300 hover:scale-105 hover:border-orange-500 bg-white"
            >
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-[1.5vw] md:p-[0.8vw] flex flex-col justify-end">
                <h4 className="text-[3.2vw] sm:text-[2.2vw] md:text-[0.85vw] font-bold text-white leading-tight line-clamp-2 group-hover:text-orange-300 transition-colors">
                  {item.category}
                </h4>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute z-20 bottom-[38vh] md:bottom-[35vh] right-[1vw] flex items-center gap-[2vw] md:gap-[0.8vw] bg-black/40 backdrop-blur-md px-[4vw] sm:px-[2.5vw] md:px-[1.2vw] py-[1.2vh] rounded-full border border-white/20 text-white shadow-xl flex-shrink-0">
          <button
            onClick={() => moveSlider("prev")}
            className="p-[1vw] sm:p-[0.5vw] md:p-[0.3vw] rounded-full hover:bg-white/20 transition-colors"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-[5vw] sm:w-[3vw] md:w-[1.2vw] h-[5vw] sm:h-[3vw] md:h-[1.2vw]" />
          </button>
          <div className="w-[20vw] sm:w-[15vw] md:w-[8vw] h-[0.5vh] bg-white/30 rounded-full overflow-hidden relative">
            <div
              key={slideIndex}
              className="h-full bg-white rounded-full origin-left"
              style={{ animation: "progressFill 4s linear forwards" }}
            />
          </div>
          <button
            onClick={() => moveSlider("next")}
            className="p-[1vw] sm:p-[0.5vw] md:p-[0.3vw] rounded-full hover:bg-white/20 transition-colors"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-[5vw] sm:w-[3vw] md:w-[1.2vw] h-[5vw] sm:h-[3vw] md:h-[1.2vw]" />
          </button>
        </div>
      </div>
    </section>
  );
}
