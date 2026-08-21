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
import { useInquiryModal } from "@/components/ui/InquiryModalContext";

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
  const { openInquiryModal } = useInquiryModal();
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const thumbnailRef = useRef<HTMLDivElement | null>(null);

  const thumbnailsData = [...slideData.slice(1), slideData[0]];
  const [slideIndex, setSlideIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlider("next");
    }, 4000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  const isAnimating = useRef(false);

  const moveSlider = (direction: "next" | "prev") => {
    if (isInitial) {
      setIsInitial(false);
    }
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

  const handleThumbnailClick = (clickedId: string) => {
    if (
      !sliderRef.current ||
      !listRef.current ||
      !thumbnailRef.current ||
      isAnimating.current
    )
      return;

    const targetIndex = slideData.findIndex((s) => s.id === clickedId);
    if (targetIndex === -1 || targetIndex === currentSlide) return;

    if (isInitial) {
      setIsInitial(false);
    }
    isAnimating.current = true;

    const slider = sliderRef.current;
    const sliderList = listRef.current;
    const thumbnail = thumbnailRef.current;

    const sliderItems = Array.from(sliderList.querySelectorAll(".item"));
    const thumbnailItems = Array.from(thumbnail.querySelectorAll(".item"));

    let targetDomIndex = -1;
    for (let k = 0; k < thumbnailItems.length; k++) {
      if ((thumbnailItems[k] as HTMLElement).getAttribute("data-id") === clickedId) {
        targetDomIndex = k;
        break;
      }
    }

    if (targetDomIndex === -1) {
      isAnimating.current = false;
      return;
    }

    setIsTextVisible(false);

    setTimeout(() => {
      // Append all items before and including the clicked index to the end
      for (let k = 0; k <= targetDomIndex; k++) {
        sliderList.appendChild(sliderItems[k]);
        thumbnail.appendChild(thumbnailItems[k]);
      }

      slider.classList.add("next");
      setCurrentSlide(targetIndex);
      setSlideIndex((prev) => prev + 1);
      setIsTextVisible(true);

      setTimeout(() => {
        slider.classList.remove("next");
        isAnimating.current = false;
      }, 900);
    }, 300);
  };

  const activeItem = slideData[currentSlide];

  return (
    <section className={`hero-section ${isInitial ? "initial-load" : ""} relative w-full h-[90vh] md:h-[91.5vh] overflow-hidden bg-[#f7f5ef] text-slate-900 select-none`}>
      <style>{`
        .hero-section.initial-load {
          opacity: 0;
          transition: opacity 1.5s ease-out;
        }
        html.preloader-done .hero-section.initial-load {
          opacity: 1;
        }

        /* Initial states (Hidden before preloader is done) */
        html:not(.preloader-done) .hero-section.initial-load .hero-badge,
        html:not(.preloader-done) .hero-section.initial-load .hero-title,
        html:not(.preloader-done) .hero-section.initial-load .hero-description,
        html:not(.preloader-done) .hero-section.initial-load .hero-buttons,
        html:not(.preloader-done) .hero-section.initial-load .thumbnail .item,
        html:not(.preloader-done) .hero-section.initial-load .slider .list .item img {
          opacity: 0;
          pointer-events: none;
        }

        /* Staggered entrance animations for left side text */
        html.preloader-done .hero-section.initial-load .hero-badge {
          animation: initialFadeInLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
        }
        html.preloader-done .hero-section.initial-load .hero-title {
          animation: initialFadeInLeft 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both;
        }
        html.preloader-done .hero-section.initial-load .hero-description {
          animation: initialFadeInLeft 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
        }
        html.preloader-done .hero-section.initial-load .hero-buttons {
          animation: initialFadeInLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.55s both;
        }

        /* Staggered entrance animations for preview thumbnails */
        html.preloader-done .hero-section.initial-load .thumbnail .item:nth-child(1) {
          animation: initialSlideInRight 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
        }
        html.preloader-done .hero-section.initial-load .thumbnail .item:nth-child(2) {
          animation: initialSlideInRight 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both;
        }
        html.preloader-done .hero-section.initial-load .thumbnail .item:nth-child(3) {
          animation: initialSlideInRight 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both;
        }
        html.preloader-done .hero-section.initial-load .thumbnail .item:nth-child(4) {
          animation: initialSlideInRight 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1.0s both;
        }
        html.preloader-done .hero-section.initial-load .thumbnail .item:nth-child(5) {
          animation: initialSlideInRight 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1.2s both;
        }
        html.preloader-done .hero-section.initial-load .thumbnail .item:nth-child(6) {
          animation: initialSlideInRight 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1.4s both;
        }

        /* Slow zoom-in background image */
        html.preloader-done .hero-section.initial-load .slider .list .item:nth-child(1) img {
          animation: initialZoomIn 2.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes initialFadeInLeft {
          from { opacity: 0; transform: translateX(-40px); filter: blur(4px); }
          to { opacity: 1; transform: translateX(0); filter: blur(0); }
        }

        @keyframes initialZoomIn {
          from { opacity: 0; transform: scale(1.12); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes initialSlideInRight {
          from { opacity: 0; transform: translateX(150px) scale(0.95); filter: blur(4px); }
          to { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
        }

        .hero-button-arrow {
          animation: arrowMove 1.2s ease-in-out infinite;
        }
        .hero-button-arrow-rotated {
          animation: arrowMoveRotated 1.2s ease-in-out infinite;
        }

        @keyframes arrowMove {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }

        @keyframes arrowMoveRotated {
          0%, 100% { transform: rotate(45deg) translate(0, 0); }
          50% { transform: rotate(45deg) translate(4px, -4px); }
        }

        .slider { height: 100%; width: 100%; overflow: hidden; position: relative; }
        .slider .list .item { width: 100%; height: 100%; position: absolute; inset: 0 0 0 0; }
        .slider .list .item img { width: 100%; height: 100%; object-fit: cover; object-position: right; }
        .slider .list .item:nth-child(1) { z-index: 1; }
        /* Mobile Slide Animations */
        .slider.next .list .item:nth-child(1) img {
          width: 36vw; height: 11vh; position: absolute; bottom: 11vh; left: 35vw; right: auto; border-radius: 12px;
          animation: showImageMobile 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1 forwards;
        }
        @keyframes showImageMobile {
          from { bottom: 11vh; left: 35vw; right: auto; width: 36vw; height: 11vh; border-radius: 12px; }
          to { bottom: 0; right: 0; left: 0; width: 100%; height: 100%; border-radius: 0; }
        }
        .slider.prev .list .item:nth-child(2) img {
          animation: outFrameMobile 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1 forwards;
          position: absolute; bottom: 0; left: 35vw; right: auto;
        }
        @keyframes outFrameMobile { to { width: 36vw; height: 11vh; bottom: 11vh; left: 35vw; right: auto; border-radius: 12px; } }

        /* Desktop Media Query (min-width: 768px) */
        @media (min-width: 768px) {
          .slider.next .list .item:nth-child(1) img {
            width: 13vw; height: 18vh; position: absolute; bottom: 15vh; left: 52vw; right: auto; border-radius: 1.2vw;
            animation: showImage 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1 forwards;
          }
          @keyframes showImage {
            from { bottom: 15vh; left: 52vw; right: auto; width: 13vw; height: 18vh; border-radius: 1.2vw; }
            to { bottom: 0; left: 0; right: auto; width: 100%; height: 100%; border-radius: 0; }
          }
          .slider.prev .list .item:nth-child(2) img {
            animation: outFrame 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1 forwards;
            position: absolute; bottom: 0; left: 0; right: auto;
          }
          @keyframes outFrame { to { width: 13vw; height: 18vh; bottom: 15vh; left: 52vw; right: auto; border-radius: 1.2vw; } }
        }
        @media (min-width: 1024px) and (max-height: 720px) {
          .thumbnail {
            bottom: 18vh !important;
          }
          .slider.next .list .item:nth-child(1) img {
            bottom: 18vh !important;
            animation: showImageShortHeight 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1 forwards;
          }
          .slider.prev .list .item:nth-child(2) img {
            animation: outFrameShortHeight 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1 forwards;
          }
          @keyframes showImageShortHeight {
            from { bottom: 18vh; left: 52vw; right: auto; width: 13vw; height: 18vh; border-radius: 1.2vw; }
            to { bottom: 0; left: 0; right: auto; width: 100%; height: 100%; border-radius: 0; }
          }
          @keyframes outFrameShortHeight {
            to { width: 13vw; height: 18vh; bottom: 18vh; left: 52vw; right: auto; border-radius: 1.2vw; }
          }
        }
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
            <div className="w-full lg:max-w-[45vw] space-y-[3vh] md:space-y-[2vh] pointer-events-auto">
              {/* Line 1: Badge with Trusted Logo & Bottom Orange Accent Line */}
              <div
                className={`hero-badge flex flex-col items-start gap-1.5 ${isTextVisible ? "line-reveal" : "line-exit"}`}
                style={{ animationDelay: isTextVisible ? "0.1s" : "0s" }}
              >
                <div className="inline-flex items-center gap-2 text-[3.2vw] sm:text-[1.8vw] md:text-[1vw] font-bold tracking-wider text-[#0C3D6C] uppercase">
                  <div className="relative w-4 h-4 sm:w-6 sm:h-6 flex-shrink-0">
                    <Image
                      src="/images/Home Page/sectionIcons/trustedMedical.webp"
                      alt="Trusted Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>{activeItem.badge}</span>
                </div>
                {/* Orange underline accent line */}
                <div className="w-14 sm:w-16 h-[4px] bg-[#E86D24] rounded-full" />
              </div>

              {/* Line 2: Title */}
              <h1
                className={`hero-title text-[6.5vw] sm:text-[5.5vw] md:text-[3.1vw] font-bold text-navy-950 font-heading ${isTextVisible ? "line-reveal" : "line-exit"}`}
                style={{ animationDelay: isTextVisible ? "0.25s" : "0.05s" }}
              >
                <span className="text-orange-500 block">
                  {activeItem.titleOrange}
                </span>
                <span className="text-[#0B2545] block mt-[0.2vh]">
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
                      <ArrowRight className="w-[4vw] sm:w-[2.5vw] md:w-[1vw] h-[4vw] sm:h-[2.5vw] md:h-[1vw] hero-button-arrow" />
                    </button>
                  </Link>

                  <button
                    onClick={() => openInquiryModal({
                      name: activeItem.titleOrange + " " + activeItem.titleNavy,
                      category: activeItem.category,
                      image: activeItem.image,
                      isGeneral: true
                    })}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-[3.5vw] sm:text-[2.2vw] md:text-[0.85vw] px-[5vw] sm:px-[3.5vw] md:px-[1.4vw] py-[1.8vh] md:py-[1.3vh] rounded-xl sm:rounded-full uppercase shadow-md hover:shadow-lg transition-all flex items-center gap-[1.5vw] md:gap-[0.5vw]"
                  >
                    REQUEST A QUOTE{" "}
                    <Send className="w-[4vw] sm:w-[2.5vw] md:w-[1vw] h-[4vw] sm:h-[2.5vw] md:h-[1vw] rotate-45 hero-button-arrow-rotated" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={thumbnailRef}
          className="thumbnail absolute z-20 bottom-[11vh] md:bottom-[15vh] left-[35vw] md:left-[52vw] right-0 flex items-center gap-[3vw] md:gap-[0.8vw] overflow-x-auto max-w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {thumbnailsData.map((item, index) => (
            <div
              key={item.id}
              data-id={item.id}
              onClick={() => handleThumbnailClick(item.id)}
              className="item group relative cursor-pointer flex-shrink-0 w-[36vw] sm:w-[28vw] md:w-[13vw] h-[11vh] md:h-[18vh] min-h-[80px] md:min-h-[140px] rounded-xl md:rounded-[1.2vw] overflow-hidden border border-white/80 shadow-xl transition-transform duration-300 hover:scale-105 hover:border-orange-500 bg-white"
            >
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-[2vw] md:p-[0.8vw] flex flex-col justify-end">
                <h4 className="text-[2.8vw] sm:text-[2.2vw] md:text-[0.85vw] font-bold text-white leading-tight line-clamp-2 group-hover:text-orange-300 transition-colors">
                  {item.category}
                </h4>
              </div>
              {/* Autoplay loading bar on the next preview card */}
              {item.id === slideData[(currentSlide + 1) % slideData.length].id && (
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/40 z-30 overflow-hidden">
                  <div
                    key={slideIndex}
                    className="h-full bg-orange-500 rounded-r-full"
                    style={{ animation: "progressFill 4s linear forwards" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

