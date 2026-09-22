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
import { getCategoryTheme } from "@/lib/data";

interface SlideData {
  id: string;
  badge: string;
  titleOrange: string;
  titleNavy?: string;
  tagline: string;
  description: string;
  image: string;
  category: string;
}

const slideData: SlideData[] = [
  {
    id: "01",
    badge: "TRUSTED MEDICAL EQUIPMENT MANUFACTURER",
    titleOrange: "WARD FURNITURE",
    tagline: "Designed for Everyday Patient Care",
    description:
      "Practical and durable furniture solutions designed for patient comfort, hygiene, and efficient hospital wards.",
    image: "/images/Home Page/HeroSection/Ward Furniture.webp",
    category: "Ward Furniture",
  },
  {
    id: "02",
    badge: "TRUSTED MEDICAL EQUIPMENT MANUFACTURER",
    titleOrange: "ICU & CRITICAL CARE",
    tagline: "Built for Critical Care Environments",
    description:
      "Reliable equipment and furniture engineered to support intensive care, patient safety, and clinical efficiency.",
    image: "/images/Home Page/HeroSection/ICU & Critical Care.webp",
    category: "ICU & Critical Care",
  },
  {
    id: "03",
    badge: "TRUSTED MEDICAL EQUIPMENT MANUFACTURER",
    titleOrange: "EMERGENCY & PATIENT TRANSFER",
    tagline: "Ready When Every Second Matters",
    description:
      "Dependable transfer and emergency solutions designed for smooth patient movement and quick response.",
    image: "/images/Home Page/HeroSection/Emergency & Patient Transfer.webp",
    category: "Emergency & Patient Transfer",
  },
  {
    id: "04",
    badge: "TRUSTED MEDICAL EQUIPMENT MANUFACTURER",
    titleOrange: "LABOUR & MATERNITY",
    tagline: "Comfort for Every Stage of Care",
    description:
      "Purpose-built maternity solutions designed to support mothers, caregivers, and healthcare professionals.",
    image: "/images/Home Page/HeroSection/Labour & Maternity.webp",
    category: "Labour & Maternity",
  },
  {
    id: "05",
    badge: "TRUSTED MEDICAL EQUIPMENT MANUFACTURER",
    titleOrange: "EXAMINATION & CONSULTATION",
    tagline: "Designed for Confident Clinical Care",
    description:
      "Functional examination and consultation furniture created for comfort, accessibility, and efficient clinical workflows.",
    image: "/images/Home Page/HeroSection/Examination & Consultation.webp",
    category: "Examination & Consultation",
  },
  {
    id: "06",
    badge: "TRUSTED MEDICAL EQUIPMENT MANUFACTURER",
    titleOrange: "OT EQUIPMENT",
    tagline: "Precision for the Operating Room",
    description:
      "Reliable operating theatre solutions engineered to support sterile environments, surgical procedures, and clinical efficiency.",
    image: "/images/Home Page/HeroSection/OT Equipment.webp",
    category: "OT Equipment",
  },
  {
    id: "07",
    badge: "TRUSTED MEDICAL EQUIPMENT MANUFACTURER",
    titleOrange: "HOMECARE",
    tagline: "Bringing Quality Care Home",
    description:
      "Reliable homecare equipment for recovery, mobility, and everyday care available for sale and rent.",
    image: "/images/Home Page/HeroSection/HomeCare.webp",
    category: "Home Care",
  },
];

const CATEGORY_TITLE_COLORS: Record<string, string> = {
  "Labour & Maternity": "#E05A85",           // Interchanged: darker vibrant rose pink for top
  "Home Care": "#E86D24",
};

const CATEGORY_TAGLINE_COLORS: Record<string, string> = {
  "Ward Furniture": "#78BECD",               // Matches respective Ward Furniture cyan #78BECD
  "ICU & Critical Care": "#0284C7",          // Match with first line color
  "Emergency & Patient Transfer": "#795548", // Softer warm mocha brown
  "Labour & Maternity": "#E05A85",           // Matches vibrant rose pink of first line
  "Examination & Consultation": "#525252",   // Lighter slate graphite
  "OT Equipment": "#104272",                 // Match with first line color
  "Medical Trolleys": "#68D391",             // Lighter sage green
  "Stainless Steel Furniture & Ward Accessories": "#E05A85",
  "Accessories": "#0D9488",
  "General Furniture": "#8D6E63",
  "Home Care": "#0B3C83",
};

export function Hero() {
  const { openInquiryModal } = useInquiryModal();
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const thumbnailRef = useRef<HTMLDivElement | null>(null);

  const thumbnailsData = [...slideData];
  const [slideIndex, setSlideIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [isInitial, setIsInitial] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const timeLeftRef = useRef<number>(6000);
  const startTimeRef = useRef<number>(Date.now());
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Reset the time left when the slide index changes
  useEffect(() => {
    timeLeftRef.current = 6000;
  }, [slideIndex]);

  // Handle auto slide with accurate pause/resume
  useEffect(() => {
    const startTimer = (time: number) => {
      startTimeRef.current = Date.now();
      timeoutRef.current = setTimeout(() => {
        moveSlider("next");
      }, time);
    };

    if (isHovered) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        const passed = Date.now() - startTimeRef.current;
        timeLeftRef.current = Math.max(0, timeLeftRef.current - passed);
      }
    } else {
      startTimer(timeLeftRef.current);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [slideIndex, isHovered]);

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
      // Append all items before the clicked index to the end
      for (let k = 0; k < targetDomIndex; k++) {
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
  const activeTheme = getCategoryTheme(activeItem.category);
  const titleColor = CATEGORY_TITLE_COLORS[activeItem.category] || activeTheme.bg;
  const taglineColor = CATEGORY_TAGLINE_COLORS[activeItem.category] || activeTheme.bg;

  return (
    <section 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`hero-section ${isInitial ? "initial-load" : ""} relative w-full h-[90vh] md:h-[91.5vh] overflow-hidden bg-[#f7f5ef] text-slate-900`}
    >
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
          animation: initialFadeInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
        }
        html.preloader-done .hero-section.initial-load .hero-title {
          animation: initialFadeInLeft 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
        }
        html.preloader-done .hero-section.initial-load .hero-description {
          animation: initialFadeInLeft 1.0s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
        }
        html.preloader-done .hero-section.initial-load .hero-buttons {
          animation: initialFadeInLeft 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
        }

        /* Staggered entrance animations for preview thumbnails */
        html.preloader-done .hero-section.initial-load .thumbnail .item:nth-child(1) {
          animation: initialSlideInRight 1.0s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
        }
        html.preloader-done .hero-section.initial-load .thumbnail .item:nth-child(2) {
          animation: initialSlideInRight 1.0s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both;
        }
        html.preloader-done .hero-section.initial-load .thumbnail .item:nth-child(3) {
          animation: initialSlideInRight 1.0s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both;
        }
        html.preloader-done .hero-section.initial-load .thumbnail .item:nth-child(4) {
          animation: initialSlideInRight 1.0s cubic-bezier(0.16, 1, 0.3, 1) 0.75s both;
        }
        html.preloader-done .hero-section.initial-load .thumbnail .item:nth-child(5) {
          animation: initialSlideInRight 1.0s cubic-bezier(0.16, 1, 0.3, 1) 0.9s both;
        }
        html.preloader-done .hero-section.initial-load .thumbnail .item:nth-child(6) {
          animation: initialSlideInRight 1.0s cubic-bezier(0.16, 1, 0.3, 1) 1.05s both;
        }

        /* Slow zoom-in background image */
        html.preloader-done .hero-section.initial-load .slider .list .item:nth-child(1) img {
          animation: initialZoomIn 2.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes initialFadeInLeft {
          from { opacity: 0; transform: translate3d(-30px, 0, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        @keyframes initialZoomIn {
          from { opacity: 0; transform: scale(1.08) translateZ(0); }
          to   { opacity: 1; transform: scale(1) translateZ(0); }
        }

        @keyframes initialSlideInRight {
          from { opacity: 0; transform: translate3d(80px, 0, 0) scale(0.96); }
          to   { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
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
        .slider .list .item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: right;
          transform: translateZ(0);
          backface-visibility: hidden;
          will-change: opacity, transform;
        }
        .slider .list .item:nth-child(1) { z-index: 1; }

        /* Hardware-Accelerated Mobile Slide Animations (No layout thrashing) */
        @media (max-width: 767px) {
          .slider.next .list .item:nth-child(1) img,
          .slider.prev .list .item:nth-child(1) img {
            animation: mobileSlideIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) 1 forwards;
          }
          @keyframes mobileSlideIn {
            from { opacity: 0; transform: scale(1.04) translateZ(0); }
            to   { opacity: 1; transform: scale(1) translateZ(0); }
          }
        }

        /* Desktop Media Query (min-width: 1024px) */
        @media (min-width: 1024px) {
          .slider.next .list .item:nth-child(1) img {
            width: 13.5vw; height: 14vh; position: absolute; bottom: 13vh; left: 48vw; right: auto; border-radius: 0.9vw;
            animation: showImage 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1 forwards;
          }
          @keyframes showImage {
            from { bottom: 13vh; left: 48vw; right: auto; width: 13.5vw; height: 14vh; border-radius: 0.9vw; }
            to { bottom: 0; left: 0; right: auto; width: 100%; height: 100%; border-radius: 0; }
          }
          .slider.prev .list .item:nth-child(2) img {
            animation: outFrame 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1 forwards;
            position: absolute; bottom: 0; left: 0; right: auto;
          }
          @keyframes outFrame { to { width: 13.5vw; height: 14vh; bottom: 13vh; left: 48vw; right: auto; border-radius: 0.9vw; } }
        }

        /* Tablet Media Query (min-width: 768px and max-width: 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .slider.next .list .item:nth-child(1) img {
            width: 22vw; height: 11vh; position: absolute; bottom: 11vh; left: 45vw; right: auto; border-radius: 10px;
            animation: showImageTablet 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1 forwards;
          }
          @keyframes showImageTablet {
            from { bottom: 11vh; left: 45vw; right: auto; width: 22vw; height: 11vh; border-radius: 10px; }
            to { bottom: 0; left: 0; right: auto; width: 100%; height: 100%; border-radius: 0; }
          }
          .slider.prev .list .item:nth-child(2) img {
            animation: outFrameTablet 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1 forwards;
            position: absolute; bottom: 0; left: 0; right: auto;
          }
          @keyframes outFrameTablet { to { width: 22vw; height: 11vh; bottom: 11vh; left: 45vw; right: auto; border-radius: 10px; } }
        }
        @media (min-width: 1024px) and (max-height: 720px) {
          .thumbnail {
            bottom: 14vh !important;
          }
          .nextPrevArrows {
            bottom: calc(14vh + 14vh + 18px) !important;
          }
          .slider.next .list .item:nth-child(1) img {
            bottom: 14vh !important;
            animation: showImageShortHeight 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1 forwards;
          }
          .slider.prev .list .item:nth-child(2) img {
            animation: outFrameShortHeight 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1 forwards;
          }
          @keyframes showImageShortHeight {
            from { bottom: 14vh; left: 48vw; right: auto; width: 13.5vw; height: 14vh; border-radius: 0.9vw; }
            to { bottom: 0; left: 0; right: auto; width: 100%; height: 100%; border-radius: 0; }
          }
          @keyframes outFrameShortHeight {
            to { width: 13.5vw; height: 14vh; bottom: 14vh; left: 48vw; right: auto; border-radius: 0.9vw; }
          }
        }
        .slider.next .nextPrevArrows button, .slider.prev .nextPrevArrows button { pointer-events: none; }
        
        .line-reveal {
          opacity: 0;
          transform: translate3d(0, 18px, 0);
          animation: lineIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .line-exit {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          animation: lineOut 0.25s cubic-bezier(0.7, 0, 0.84, 0) forwards;
        }
        @keyframes lineIn {
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes lineOut {
          to {
            opacity: 0;
            transform: translate3d(0, -14px, 0);
          }
        }
        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }

        /* Thumbnail smooth transitions */
        .thumbnail .item {
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
          user-select: none;
          outline: none;
          transform: translateZ(0);
          backface-visibility: hidden;
          will-change: transform, opacity;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                      border-color 0.25s ease,
                      opacity 0.3s ease;
        }
        .thumbnail .item:focus {
          outline: none;
        }
        .thumbnail .item:focus-visible {
          outline: 2px solid #E86D24;
          outline-offset: 2px;
        }
        /* Entering thumbnail */
        .slider.next .thumbnail .item:last-child {
          animation: thumbEnterRight 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .slider.prev .thumbnail .item:first-child {
          animation: thumbEnterLeft 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        /* Exiting thumbnail */
        .slider.next .thumbnail .item:nth-child(2) {
          animation: thumbShift 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .slider.prev .thumbnail .item:nth-last-child(2) {
          animation: thumbShift 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes thumbEnterRight {
          from { opacity: 0; transform: translate3d(40px, 0, 0) scale(0.94); }
          to   { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
        }
        @keyframes thumbEnterLeft {
          from { opacity: 0; transform: translate3d(-40px, 0, 0) scale(0.94); }
          to   { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
        }
        @keyframes thumbShift {
          from { opacity: 0.6; transform: translate3d(-8px, 0, 0) scale(0.98); }
          to   { opacity: 1;   transform: translate3d(0, 0, 0) scale(1); }
        }

        /* Main background image cross-fade on slide change */
        .slider .list .item:nth-child(1) {
          z-index: 1;
          transition: opacity 0.4s ease;
        }
        .slider.next .list .item:nth-child(1),
        .slider.prev .list .item:nth-child(1) {
          animation: bgFadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes bgFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
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
              {/* Soft light backdrop gradient without CPU-intensive backdrop-blur */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/95 to-transparent w-full md:w-[58%]" />
            </div>
          ))}
        </div>

        {/* Dedicated Staggered Text Content Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center h-full">
          <div className="w-full px-[5vw] md:px-[4vw] pb-[12vh] md:pb-[14vh]">
            <div 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-full md:max-w-[54vw] lg:max-w-[45vw] flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 pointer-events-auto"
            >
              {/* Line 1: Badge with Trusted Logo & Bottom Orange Accent Line */}
              <div
                className={`hero-badge flex flex-col items-start gap-2 w-fit ${isTextVisible ? "line-reveal" : "line-exit"}`}
                style={{ animationDelay: isTextVisible ? "0.1s" : "0s" }}
              >
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm lg:text-[1.1vw] font-bold tracking-wider text-[#0C3D6C] uppercase">
                  <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[1.2vw] lg:h-[1.2vw] flex-shrink-0">
                    <Image
                      src="/images/Home Page/sectionIcons/trustedMedical.webp"
                      alt="Trusted Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>{activeItem.badge}</span>
                </div>
                {/* Dynamic Category Color Underline Accent Line */}
                <div
                  className="w-1/2 h-[3px] sm:h-[4px] rounded-full transition-colors duration-500"
                  style={{ backgroundColor: titleColor }}
                />
              </div>

              {/* Line 2: Title & Tagline */}
              <div
                className={`hero-title flex flex-col gap-2 sm:gap-2.5 md:gap-3 ${isTextVisible ? "line-reveal" : "line-exit"}`}
                style={{ animationDelay: isTextVisible ? "0.25s" : "0.05s" }}
              >
                <h1 
                  className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.2vw] font-Montserrat font-extrabold tracking-wider uppercase leading-[1.08] font-heading transition-colors duration-500"
                  style={{ color: titleColor }}
                >
                  {activeItem.titleOrange}
                </h1>
                {activeItem.tagline && (
                  <h2 
                    className="text-base sm:text-xl md:text-2xl lg:text-[2.1vw] font-Montserrat font-semibold tracking-wider leading-snug transition-colors duration-500"
                    style={{ color: taglineColor }}
                  >
                    {activeItem.tagline}
                  </h2>
                )}
                {activeItem.titleNavy && (
                  <span className="text-[#0B2545] block text-xl sm:text-3xl md:text-4xl lg:text-[3.1vw] font-inter">
                    {activeItem.titleNavy}
                  </span>
                )}
              </div>

              {/* Line 3: Description */}
              <p
                className={`hero-description text-xs sm:text-sm md:text-base lg:text-[1.05vw] text-slate-700 font-medium leading-relaxed md:leading-[1.7] max-w-[85vw] md:max-w-[48vw] lg:max-w-[40vw] ${isTextVisible ? "line-reveal" : "line-exit"}`}
                style={{ animationDelay: isTextVisible ? "0.4s" : "0.1s" }}
              >
                {activeItem.description}
              </p>

              {/* Line 4: Action Buttons (Request a Quote on Left, Explore Products on Right matching the frames) */}
              <div
                className={`hero-buttons flex flex-wrap gap-3 sm:gap-4 md:gap-[1vw] pt-2 md:pt-3 ${isTextVisible ? "line-reveal" : "line-exit"}`}
                style={{ animationDelay: isTextVisible ? "0.55s" : "0.15s" }}
              >
                <button
                  onClick={() => openInquiryModal({
                    name: activeItem.titleOrange + (activeItem.tagline ? " - " + activeItem.tagline : ""),
                    category: activeItem.category,
                    image: activeItem.image,
                    isGeneral: true
                  })}
                  className="bg-[#0B2545] hover:bg-[#134074] text-white font-bold text-xs sm:text-sm lg:text-[0.85vw] px-4 sm:px-6 lg:px-[1.4vw] py-2.5 sm:py-3 lg:py-[1.3vh] rounded-md uppercase shadow-md hover:shadow-lg transition-all flex items-center gap-2 lg:gap-[0.5vw]"
                >
                  REQUEST A QUOTE{" "}
                  <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-[1vw] lg:h-[1vw] rotate-45 hero-button-arrow-rotated" />
                </button>

                <Link href={`/products?category=${encodeURIComponent(activeItem.category)}`}>
                  <button 
                    className="font-bold text-xs sm:text-sm lg:text-[0.85vw] px-4 sm:px-6 lg:px-[1.4vw] py-2.5 sm:py-3 lg:py-[1.3vh] rounded-md uppercase shadow-md hover:shadow-lg hover:brightness-105 transition-all flex items-center gap-2 lg:gap-[0.5vw]"
                    style={{
                      backgroundColor: activeTheme.bg,
                      color: activeTheme.text,
                      boxShadow: `0 4px 14px ${activeTheme.bg}40`,
                    }}
                  >
                    EXPLORE PRODUCTS{" "}
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-[1vw] lg:h-[1vw] hero-button-arrow" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Top of Preview Container: Left & Right Navigation Buttons (Single Glass Container at Right End) */}
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="nextPrevArrows absolute z-30 bottom-[calc(11vh+9.5vh+18px)] md:bottom-[calc(11vh+11vh+18px)] lg:bottom-[calc(13vh+14vh+20px)] right-2 md:right-4 flex items-center gap-1.5 p-1.5 rounded-full bg-white/70 hover:bg-white/85 backdrop-blur-xl border border-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all pointer-events-auto"
        >
          <button
            onClick={() => moveSlider("prev")}
            aria-label="Previous Slide"
            className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/80 hover:bg-[#E86D24] text-slate-800 hover:text-white backdrop-blur-sm border border-slate-200/60 shadow-xs flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5 md:w-4 md:h-4 stroke-[2.5] -translate-x-[1px]" />
          </button>
          <button
            onClick={() => moveSlider("next")}
            aria-label="Next Slide"
            className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/80 hover:bg-[#E86D24] text-slate-800 hover:text-white backdrop-blur-sm border border-slate-200/60 shadow-xs flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
          >
            <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 stroke-[2.5] translate-x-[1px]" />
          </button>
        </div>

        <div
          ref={thumbnailRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="thumbnail absolute z-20 bottom-[11vh] md:bottom-[11vh] lg:bottom-[13vh] left-[35vw] md:left-[45vw] lg:left-[48vw] right-0 flex items-center gap-[2.5vw] md:gap-[1vw] lg:gap-[0.7vw] overflow-x-auto max-w-full py-3 px-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {thumbnailsData.map((item) => {
            const isCurrent = item.id === slideData[currentSlide].id;
            const itemTheme = getCategoryTheme(item.category);
            const itemColor = CATEGORY_TITLE_COLORS[item.category] || itemTheme.bg;
            return (
              <div
                key={item.id}
                data-id={item.id}
                onClick={() => handleThumbnailClick(item.id)}
                className={`item group relative cursor-pointer flex-shrink-0 w-[42vw] sm:w-[32vw] md:w-[20vw] lg:w-[13.5vw] min-w-[155px] md:min-w-[170px] lg:min-w-[190px] h-[9.5vh] md:h-[11vh] lg:h-[14vh] min-h-[70px] md:min-h-[90px] lg:min-h-[110px] rounded-lg md:rounded-[0.9vw] overflow-hidden border shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] bg-white will-change-transform select-none outline-none ${
                  isCurrent
                    ? "shadow-xl scale-[1.02]"
                    : "border-white/80 hover:shadow-xl opacity-90 hover:opacity-100"
                }`}
                style={
                  isCurrent
                    ? {
                        borderColor: itemColor,
                        boxShadow: `0 0 0 2.5px ${itemColor}, 0 20px 25px -5px rgba(0, 0, 0, 0.25)`,
                      }
                    : undefined
                }
              >
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover"
                />

                {/* Bottom Category Label */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent px-2.5 py-2 sm:px-3 sm:py-2.5 md:px-[0.75vw] md:py-[0.65vw] flex flex-col justify-end pointer-events-none">
                  <h4
                    className={`text-[2.8vw] sm:text-[2vw] md:text-[0.82vw] lg:text-[0.78vw] leading-tight transition-colors line-clamp-1 text-white ${
                      isCurrent
                        ? "font-extrabold"
                        : "font-bold group-hover:text-slate-200"
                    }`}
                  >
                    {item.category}
                  </h4>
                </div>

                {/* Autoplay loading bar on the selected background preview card */}
                {isCurrent && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/40 z-30 overflow-hidden">
                    <div
                      key={slideIndex}
                      className="h-full rounded-r-full shadow-sm"
                      style={{
                        backgroundColor: itemColor,
                        animation: "progressFill 6s linear forwards",
                        animationPlayState: isHovered ? "paused" : "running",
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

