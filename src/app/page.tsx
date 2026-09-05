"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { BuildQualitySection } from "@/components/sections/BuildQualitySection";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
import {
  Award,
  CheckCircle2,
  ShieldCheck,
  HeartPulse,
  Truck,
  Headphones,
  Wrench,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Users2,
  Factory,
  Sparkles,
  Building2,
  Bed,
  ShoppingBag,
  Activity,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { useInquiryModal } from "@/components/ui/InquiryModalContext";
import { TypewriterText } from "@/components/ui/TypewriterText";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  delay?: number;
}

function AnimatedCounter({
  value,
  duration = 1500,
  delay = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;

    if (document.documentElement.classList.contains("preloader-done")) {
      setPreloaderDone(true);
      return;
    }

    const observer = new MutationObserver(() => {
      if (document.documentElement.classList.contains("preloader-done")) {
        setPreloaderDone(true);
        observer.disconnect();
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!preloaderDone) return;

    const timer = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [preloaderDone, delay]);

  useEffect(() => {
    if (!started) return;

    const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
    if (isNaN(numericValue)) {
      return;
    }

    let start = 0;
    const end = numericValue;
    const startTime = performance.now();
    let animationFrameId: number;

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // cubic ease-out

      const currentCount = Math.floor(easeProgress * (end - start) + start);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrameId);
  }, [started, value, duration]);

  const displayVal = started ? count : 0;
  const suffix = value.replace(/[0-9,]/g, "");

  return (
    <span>
      {displayVal.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function HomePage() {
  const { openInquiryModal } = useInquiryModal();
  // Define categories for left and right sidebar lists
  const leftCategories = [
    {
      name: "ICU Beds",
      iconIndex: 0,
      img: "/images/Home Page/ourProducts/products/ICU Beds.webp",
    },
    {
      name: "Fowler Cots",
      iconIndex: 1,
      img: "/images/Home Page/ourProducts/products/Fowler Cots.webp",
    },
    {
      name: "Semi Fowler Cots",
      iconIndex: 2,
      img: "/images/Home Page/ourProducts/products/Semi Fowler Cots.webp",
    },
    {
      name: "Plain Cots",
      iconIndex: 3,
      img: "/images/Home Page/ourProducts/products/Plain Cots.webp",
    },
    {
      name: "Labour Cots",
      iconIndex: 4,
      img: "/images/Home Page/ourProducts/products/Labour Cots.webp",
    },
    {
      name: "Stretcher Trolleys",
      iconIndex: 5,
      img: "/images/Home Page/ourProducts/products/Stretcher Trolleys.webp",
    },
    {
      name: "Transfer Trolleys",
      iconIndex: 0,
      img: "/images/Home Page/ourProducts/products/Transfer Trolleys.webp",
    },
    {
      name: "Crash Carts",
      iconIndex: 1,
      img: "/images/Home Page/ourProducts/products/Crash Carts.webp",
    },
    {
      name: "Instrument Trolleys",
      iconIndex: 2,
      img: "/images/Home Page/ourProducts/products/Instrument Trolleys.webp",
    },
    {
      name: "Drug Trolleys",
      iconIndex: 3,
      img: "/images/Home Page/ourProducts/products/Drug Trolleys.webp",
    },
  ];

  const rightCategories = [
    {
      name: "Dressing Trolleys",
      iconIndex: 0,
      img: "/images/Home Page/ourProducts/products/Dressing Trolleys.webp",
    },
    {
      name: "Over Bed Tables",
      iconIndex: 1,
      img: "/images/Home Page/ourProducts/products/Over Bed Tables.webp",
    },
    {
      name: "Bedside Lockers",
      iconIndex: 2,
      img: "/images/Home Page/ourProducts/products/Bedside Lockers.webp",
    },
    {
      name: "Wheelchairs",
      iconIndex: 3,
      img: "/images/Home Page/ourProducts/products/Wheelchairs.webp",
    },
    {
      name: "Attender Cots",
      iconIndex: 4,
      img: "/images/Home Page/ourProducts/products/Frame 728.webp",
    },
    {
      name: "Examination Couches",
      iconIndex: 5,
      img: "/images/Home Page/ourProducts/products/Examination Couches.webp",
    },
    {
      name: "Stainless Steel Furniture",
      iconIndex: 0,
      img: "/images/Home Page/ourProducts/products/Stainless Steel Furniture.webp",
    },
    {
      name: "Ward Furniture",
      iconIndex: 1,
      img: "/images/Home Page/ourProducts/products/Ward Furniture.webp",
    },
    {
      name: "Custom Hospital Furniture",
      iconIndex: 2,
      img: "/images/Home Page/ourProducts/products/Custom Hospital Furniture.webp",
    },
    {
      name: "ICU Beds (Manual)",
      iconIndex: 3,
      img: "/images/Home Page/ourProducts/products/ICU Beds-1.webp",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("ICU Beds");
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const [whyTitleTyped, setWhyTitleTyped] = useState(false);
  const [storyTitleTyped, setStoryTitleTyped] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isSectionVisible || isAutoPlayPaused) return;

    const interval = setInterval(() => {
      setActiveCategory((prev) => {
        const allNames = [
          ...leftCategories.map((c) => c.name),
          ...rightCategories.map((c) => c.name),
        ];
        const currentIndex = allNames.indexOf(prev);
        const nextIndex = (currentIndex + 1) % allNames.length;
        return allNames[nextIndex];
      });
    }, 2800);

    return () => clearInterval(interval);
  }, [isSectionVisible, isAutoPlayPaused, leftCategories, rightCategories]);

  // Get dynamic category icon mapping
  const getCategoryIcon = (name: string) => {
    switch (name) {
      case "Dressing Trolleys":
        return "/images/Home Page/ourProducts/dressing trolly 1.webp";
      case "Over Bed Tables":
        return "/images/Home Page/ourProducts/over bed trolly 1.webp";
      case "Bedside Lockers":
        return "/images/Home Page/ourProducts/bed side 1.webp";
      case "Wheelchairs":
        return "/images/Home Page/ourProducts/weel schair 1.webp";
      case "Attender Cots":
        return "/images/Home Page/ourProducts/Attender Cots 1.webp";
      case "Examination Couches":
        return "/images/Home Page/ourProducts/image 47_layerstyle.webp";
      case "Stainless Steel Furniture":
        return "/images/Home Page/ourProducts/silver 1.webp";
      case "Ward Furniture":
        return "/images/Home Page/ourProducts/ward 1.webp";
      case "Custom Hospital Furniture":
        return "/images/Home Page/ourProducts/custome 1.webp";
      case "ICU Beds (Manual)":
        return "/images/Home Page/ourProducts/icu 1.webp";
      case "ICU Beds":
        return "/images/Home Page/ourProducts/icu 1.webp";
      case "Fowler Cots":
        return "/images/Home Page/ourProducts/flower 1.webp";
      case "Semi Fowler Cots":
        return "/images/Home Page/ourProducts/semi flower 1.webp";
      case "Plain Cots":
        return "/images/Home Page/ourProducts/silver 1.webp";
      case "Labour Cots":
        return "/images/Home Page/ourProducts/labour 1.webp";
      case "Stretcher Trolleys":
        return "/images/Home Page/ourProducts/strecture trolly 1.webp";
      case "Transfer Trolleys":
        return "/images/Home Page/ourProducts/transfer trolly 1.webp";
      case "Crash Carts":
        return "/images/Home Page/ourProducts/srash cart 1.webp";
      case "Instrument Trolleys":
        return "/images/Home Page/ourProducts/instrument trolly 1.webp";
      case "Drug Trolleys":
        return "/images/Home Page/ourProducts/drug troly 1.webp";
      default:
        return "/images/Home Page/ourProducts/icu 1.webp";
    }
  };

  const allProductCategories = [...leftCategories, ...rightCategories];
  const showcaseFrames = Array.from(new Set(allProductCategories.map((c) => c.img)));

  // Get active image based on active category from ourProducts/products folder
  const getCenterImageForCategory = (name: string) => {
    const matched = allProductCategories.find((c) => c.name === name);
    return matched?.img || "/images/Home Page/ourProducts/products/ICU Beds.webp";
  };

  const activeProductImage = getCenterImageForCategory(activeCategory);

  // Select 1 representative product per category to keep home page clean & curated
  const categoryHighlights = CATEGORIES.map((cat) => {
    const matchedProduct =
      PRODUCTS.find((p) => p.category === cat.name) || PRODUCTS[0];
    return {
      category: cat,
      product: matchedProduct,
    };
  });
  return (
    <div className="bg-[#f7f5ef]">
      <div className="relative">
        <Hero />

        {/* STATS BANNER (Overlaps 50% Hero Image & 50% Section Below) */}
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-30 -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-24">
          <style>{`
            html:not(.preloader-done) .home-stat-item {
              opacity: 0;
              pointer-events: none;
            }
            html.preloader-done .home-stat-item {
              animation: statSlideIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
            }
            html.preloader-done .home-stat-item:nth-child(1) { animation-delay: 0.5s; }
            html.preloader-done .home-stat-item:nth-child(2) { animation-delay: 0.65s; }
            html.preloader-done .home-stat-item:nth-child(3) { animation-delay: 0.8s; }
            html.preloader-done .home-stat-item:nth-child(4) { animation-delay: 0.95s; }

            @keyframes statSlideIn {
              from { opacity: 0; transform: translateX(60px) scale(0.95); filter: blur(4px); }
              to { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
            }

            @media (min-width: 1024px) and (max-height: 720px) {
              .home-stats-banner-container {
                padding-top: 0.85rem !important;
                padding-bottom: 0.85rem !important;
                padding-left: 2rem !important;
                padding-right: 2rem !important;
              }
              .home-stat-item {
                gap: 0.75rem !important;
              }
              .home-stat-item .relative {
                width: 2.25rem !important;
                height: 2.25rem !important;
              }
              .home-stat-item span.font-black,
              .home-stat-item span.font-extrabold,
              .home-stat-number {
                font-size: 2rem !important;
              }
              .home-stat-item span.text-[9px] {
                font-size: 8px !important;
                margin-top: 1px !important;
              }
            }
          `}</style>
          <FadeIn direction="up" delay={0.1} className="px-[4vw]">
            <div className="home-stats-banner-container w-full rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0B2545] via-[#134074] to-[#0B2545] shadow-2xl py-6 lg:py-6 px-4 sm:px-8 lg:px-6 xl:px-10 2xl:px-12 grid grid-cols-2 lg:grid-cols-4 items-center gap-y-6 lg:gap-y-0 border border-white/20 backdrop-blur-md">
              {/* Stat 1 */}
              <div className="home-stat-item flex flex-col items-center justify-center border-r border-white/20 px-2 sm:px-4 lg:px-4 xl:px-6 w-full">
                <div className="flex flex-col items-center text-center max-w-full">
                  <span className="home-stat-number text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black leading-none tracking-tight font-heading mb-2 text-orange-400 whitespace-nowrap text-center">
                    <AnimatedCounter value="2 Decades +" delay={500} />
                  </span>
                  <div className="flex items-center justify-center gap-2.5 sm:gap-3 text-left">
                    <div className="relative w-9 h-9 flex-shrink-0">
                      <Image
                        src="/images/Home Page/BannerIcons/yearOfExperience.webp"
                        alt="29+ Years of Experience"
                        fill
                        className="object-contain filter brightness-0 invert"
                      />
                    </div>
                    <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-white leading-tight max-w-[100px] break-words">
                      YEARS OF EXPERIENCE
                    </span>
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="home-stat-item flex flex-col items-center justify-center lg:border-r border-white/20 px-2 sm:px-4 lg:px-4 xl:px-6 w-full">
                <div className="flex flex-col items-center text-center max-w-full">
                  <span className="home-stat-number text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black leading-none tracking-tight font-heading mb-2 text-orange-400 whitespace-nowrap text-center">
                    <AnimatedCounter value="7,000+" delay={650} />
                  </span>
                  <div className="flex items-center justify-center gap-2.5 sm:gap-3 text-left">
                    <div className="relative w-9 h-9 flex-shrink-0">
                      <Image
                        src="/images/Home Page/BannerIcons/projectCompleted.webp"
                        alt="7,000+ Projects Completed"
                        fill
                        className="object-contain filter brightness-0 invert"
                      />
                    </div>
                    <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-white leading-tight max-w-[100px] break-words">
                      PROJECTS COMPLETED
                    </span>
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="home-stat-item flex flex-col items-center justify-center border-r border-white/20 px-2 sm:px-4 lg:px-4 xl:px-6 w-full">
                <div className="flex flex-col items-center text-center max-w-full">
                  <span className="home-stat-number text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black leading-none tracking-tight font-heading mb-2 text-orange-400 whitespace-nowrap text-center">
                    <AnimatedCounter value="30,000+" delay={800} />
                  </span>
                  <div className="flex items-center justify-center gap-2.5 sm:gap-3 text-left">
                    <div className="relative w-9 h-9 flex-shrink-0">
                      <Image
                        src="/images/Home Page/BannerIcons/ProductManufature.webp"
                        alt="30,000+ Products Manufactured"
                        fill
                        className="object-contain filter brightness-0 invert"
                      />
                    </div>
                    <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-white leading-tight max-w-[115px] break-words">
                      PRODUCTS MANUFACTURED
                    </span>
                  </div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="home-stat-item flex flex-col items-center justify-center px-2 sm:px-4 lg:px-4 xl:px-6 w-full">
                <div className="flex flex-col items-center text-center max-w-full">
                  <span className="home-stat-number text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black leading-none tracking-tight font-heading mb-2 text-orange-400 whitespace-nowrap text-center">
                    <AnimatedCounter value="1,000" delay={950} />
                  </span>
                  <div className="flex items-center justify-center gap-2.5 sm:gap-3 text-left">
                    <div className="relative w-9 h-9 flex-shrink-0">
                      <Image
                        src="/images/Home Page/BannerIcons/bedsDelivered.webp"
                        alt="1,000+ Beds Delivered"
                        fill
                        className="object-contain filter brightness-0 invert"
                      />
                    </div>
                    <span className="text-[9px] sm:text-xs font-medium tracking-wider text-white leading-tight max-w-[155px] break-words">
                      BEDS DELIVERED IN A SINGLE MONTH
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 2. WHY SRI MATHURAMS SECTION */}
      <section className="w-full px-[4vw] pt-[4vh] sm:pt-[8vh] pb-[6vh] relative overflow-visible bg-[#f7f5ef]">
        {/* Doodle Background Pattern - Extended to cover behind stats banner */}
        <div
          className="absolute -top-32 inset-x-0 bottom-0 opacity-1 mix-blend-multiply pointer-events-none bg-repeat bg-center z-0"
          style={{
            backgroundImage: `url('/images/Home Page/doodle.webp')`,
            backgroundSize: "350px",
          }}
        />

        <div className="relative z-10 space-y-[4vh]">
          {/* Top Tagline Badge - Left Aligned with trusted icon & accent line */}
          <FadeIn direction="up" delay={0.1} className="flex flex-col items-start gap-1.5 w-fit">
            <div className="inline-flex items-center gap-4 text-lg sm:text-xl font-bold tracking-wide text-[#0C3D6C] uppercase">
              <div className="relative w-6 h-6 flex-shrink-0">
                <Image
                  src="/images/Home Page/sectionIcons/trustedbyHealthCare.webp"
                  alt="Trusted Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <TypewriterText text="TRUSTED BY HEALTHCARE PROFESSIONALS SINCE 1997" />
            </div>
            {/* Dark Navy accent line under badge */}
            <div className="w-1/2 h-[4px] bg-[#E86D24] rounded-full" />
          </FadeIn>

          {/* Header Title & Subtitle */}
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] min-h-[44px] flex items-center justify-center">
              <TypewriterText
                text="WHY SRI MATHURAMS ?"
                speed={50}
                delay={150}
                onComplete={() => setWhyTitleTyped(true)}
              />
            </h2>
            <div className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed space-y-1">
              <p
                className={`transition-all duration-700 ease-out transform ${
                  whyTitleTyped
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3 pointer-events-none"
                }`}
                style={{ transitionDelay: whyTitleTyped ? "150ms" : "0ms" }}
              >
                For more than two decades, healthcare has{" "}
                <span className="font-semibold text-slate-900">
                  relied on our products
                </span>
              </p>
              <p
                className={`transition-all duration-700 ease-out transform ${
                  whyTitleTyped
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3 pointer-events-none"
                }`}
                style={{ transitionDelay: whyTitleTyped ? "500ms" : "0ms" }}
              >
                <span className="font-semibold text-slate-900">
                  for quality, reliability, and consistent performance.
                </span>
              </p>
            </div>
          </div>

          {/* Interactive Interlocking Diamond Cards Layout (Desktop Only) */}
          <div className="hidden lg:flex justify-center items-center py-8 px-4 w-full mx-auto overflow-hidden">
            <style>{`
              .why-card-container .why-card {
                transform: rotate(45deg) scale(1);
                transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
              }

              @keyframes diamondRipple {
                0%, 100% {
                  transform: rotate(45deg) scale(1);
                  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.07);
                }
                30% {
                  transform: rotate(45deg) scale(1.055);
                  box-shadow: 0 18px 30px -6px rgba(11, 37, 69, 0.22), 0 0 16px rgba(232, 109, 36, 0.18);
                }
                60% {
                  transform: rotate(45deg) scale(1.01);
                }
              }

              .why-card-container .why-card-1 .why-card { animation: diamondRipple 3.2s ease-in-out infinite 0.0s; }
              .why-card-container .why-card-2 .why-card { animation: diamondRipple 3.2s ease-in-out infinite 0.4s; }
              .why-card-container .why-card-3 .why-card { animation: diamondRipple 3.2s ease-in-out infinite 0.8s; }
              .why-card-container .why-card-4 .why-card { animation: diamondRipple 3.2s ease-in-out infinite 1.2s; }
              .why-card-container .why-card-5 .why-card { animation: diamondRipple 3.2s ease-in-out infinite 1.6s; }
              .why-card-container .why-card-6 .why-card { animation: diamondRipple 3.2s ease-in-out infinite 2.0s; }
              .why-card-container .why-card-7 .why-card { animation: diamondRipple 3.2s ease-in-out infinite 2.4s; }
              .why-card-container .why-card-8 .why-card { animation: diamondRipple 3.2s ease-in-out infinite 2.8s; }

              /* Bring hovered card forward and pause its animation while scaling up */
              .why-card-container .why-wave-card:hover {
                z-index: 80 !important;
              }

              .why-card-container .why-wave-card:hover .why-card {
                animation-play-state: paused !important;
                transform: rotate(45deg) scale(1.09) !important;
                box-shadow: 0 22px 35px -8px rgba(11, 37, 69, 0.28), 0 0 18px rgba(232, 109, 36, 0.25) !important;
              }

              @media (min-width: 1024px) and (max-width: 1140px) {
                .why-card-scale-wrapper {
                  transform: scale(0.72);
                  transform-origin: center center;
                  margin-top: -65px;
                  margin-bottom: -65px;
                }
              }
              @media (min-width: 1141px) and (max-width: 1279px) {
                .why-card-scale-wrapper {
                  transform: scale(0.80);
                  transform-origin: center center;
                  margin-top: -45px;
                  margin-bottom: -45px;
                }
              }
              @media (min-width: 1280px) and (max-width: 1379px) {
                .why-card-scale-wrapper {
                  transform: scale(0.90);
                  transform-origin: center center;
                  margin-top: -25px;
                  margin-bottom: -25px;
                }
              }
              @media (min-width: 1600px) {
                .why-card-scale-wrapper {
                  transform: scale(1.16);
                  transform-origin: center center;
                  margin-top: 35px;
                  margin-bottom: 35px;
                }
              }
            `}</style>
            <div className="why-card-scale-wrapper">
              <div className="why-card-container relative w-[1320px] h-[460px] min-w-[1320px] my-4">
                {/* Card 1: Superior Manufacturing Quality (Lower Row 1) */}
                <div className="absolute left-[60px] top-[178px] z-10 hover:z-50 why-wave-card why-card-1">
                  <FadeIn direction="down" duration={1.2} delay={0.15}>
                    <div className="why-card w-[195px] h-[195px] bg-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-2 text-center cursor-pointer shadow-md hover:shadow-2xl">
                      <div className="-rotate-45 flex flex-col items-center justify-center space-y-1 max-w-[148px]">
                        <div className="relative w-10 h-10 mb-0.5 flex-shrink-0">
                          <Image
                            src="/images/Home Page/whySectionIcons/material-symbols-light_diamond-outline-rounded.webp"
                            alt="Superior Manufacturing Quality"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <h3 className="text-[12px] font-extrabold text-[#0B2545] leading-normal uppercase">
                          Superior
                          <br />
                          Manufacturing Quality
                        </h3>
                        <p className="text-[10px] text-slate-600 leading-normal font-normal">
                          Manufactured using high-grade materials to ensure
                          durability, safety, and long-lasting performance.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                {/* Card 2: Excellent value for money (Upper Row 1 - Orange) */}
                <div className="absolute left-[200px] top-[33px] z-20 hover:z-50 why-wave-card why-card-2">
                  <FadeIn direction="down" duration={1.2} delay={0.3}>
                    <div className="why-card w-[195px] h-[195px] bg-[#E86D24] text-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-2 text-center cursor-pointer shadow-lg hover:shadow-2xl">
                      <div className="-rotate-45 flex flex-col items-center justify-center space-y-1 max-w-[148px]">
                        <div className="relative w-10 h-10 mb-0.5 flex-shrink-0">
                          <Image
                            src="/images/Home Page/whySectionIcons/Simplification.webp"
                            alt="Excellent value for money"
                            fill
                            className="object-contain filter brightness-0 invert"
                          />
                        </div>
                        <h3 className="text-[12px] font-extrabold text-white leading-normal uppercase">
                          Excellent value for
                          <br />
                          money
                        </h3>
                        <p className="text-[10px] text-white/90 leading-normal font-normal">
                          Durable products designed to deliver long-term value
                          without unnecessary cost.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                {/* Card 3: Reliable after-sales service (Lower Row 2) */}
                <div className="absolute left-[340px] top-[178px] z-10 hover:z-50 why-wave-card why-card-3">
                  <FadeIn direction="down" duration={1.2} delay={0.45}>
                    <div className="why-card w-[195px] h-[195px] bg-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-2 text-center cursor-pointer shadow-md hover:shadow-2xl">
                      <div className="-rotate-45 flex flex-col items-center justify-center space-y-1 max-w-[148px]">
                        <div className="relative w-10 h-10 mb-0.5 flex-shrink-0">
                          <Image
                            src="/images/Home Page/whySectionIcons/image 19.webp"
                            alt="Reliable after-sales service"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <h3 className="text-[12px] font-extrabold text-[#0B2545] leading-normal uppercase">
                          Reliable after-
                          <br />
                          sales service
                        </h3>
                        <p className="text-[10px] text-slate-600 leading-normal font-normal">
                          Our team remains available to assist with product and
                          service requirements.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                {/* Card 4: Customized product solutions (Upper Row 2) */}
                <div className="absolute left-[480px] top-[33px] z-20 hover:z-50 why-wave-card why-card-4">
                  <FadeIn direction="down" duration={1.2} delay={0.6}>
                    <div className="why-card w-[195px] h-[195px] bg-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-2 text-center cursor-pointer shadow-md hover:shadow-2xl">
                      <div className="-rotate-45 flex flex-col items-center justify-center space-y-1 max-w-[148px]">
                        <div className="relative w-10 h-10 mb-0.5 flex-shrink-0">
                          <Image
                            src="/images/Home Page/whySectionIcons/Simplification (1).webp"
                            alt="Customized product solutions"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <h3 className="text-[12px] font-extrabold text-[#0B2545] leading-normal uppercase">
                          Customized product
                          <br />
                          solutions
                        </h3>
                        <p className="text-[10px] text-slate-600 leading-normal font-normal">
                          Product configurations can be adapted to meet specific
                          healthcare requirements.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                {/* Card 5: Timely Delivery (Lower Row 3 - Navy Blue) */}
                <div className="absolute left-[620px] top-[178px] z-20 hover:z-50 why-wave-card why-card-5">
                  <FadeIn direction="down" duration={1.2} delay={0.75}>
                    <div className="why-card w-[195px] h-[195px] bg-[#0B3B60] text-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-2 text-center cursor-pointer shadow-2xl hover:shadow-2xl">
                      <div className="-rotate-45 flex flex-col items-center justify-center space-y-1 max-w-[148px]">
                        <div className="relative w-10 h-10 mb-0.5 flex-shrink-0">
                          <Image
                            src="/images/Home Page/whySectionIcons/Simplification (2).webp"
                            alt="Timely Delivery"
                            fill
                            className="object-contain filter brightness-0 invert"
                          />
                        </div>
                        <h3 className="text-[12px] font-extrabold text-white leading-normal uppercase">
                          Timely Delivery
                        </h3>
                        <p className="text-[10px] text-slate-200/90 leading-normal font-normal">
                          Efficient production and coordination help us meet
                          project timelines.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                {/* Card 6: Strong technical support (Upper Row 3) */}
                <div className="absolute left-[760px] top-[33px] z-10 hover:z-50 why-wave-card why-card-6">
                  <FadeIn direction="down" duration={1.2} delay={0.9}>
                    <div className="why-card w-[195px] h-[195px] bg-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-2 text-center cursor-pointer shadow-md hover:shadow-2xl">
                      <div className="-rotate-45 flex flex-col items-center justify-center space-y-1 max-w-[148px]">
                        <div className="relative w-10 h-10 mb-0.5 flex-shrink-0">
                          <Image
                            src="/images/Home Page/whySectionIcons/Simplification (3).webp"
                            alt="Strong technical support"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <h3 className="text-[12px] font-extrabold text-[#0B2545] leading-normal uppercase">
                          Strong technical
                          <br />
                          support
                        </h3>
                        <p className="text-[10px] text-slate-600 leading-normal font-normal">
                          Our team provides practical guidance for product
                          selection and requirements.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                {/* Card 7: Long-Lasting Products (Lower Row 4) */}
                <div className="absolute left-[900px] top-[178px] z-10 hover:z-50 why-wave-card why-card-7">
                  <FadeIn direction="down" duration={1.2} delay={1.05}>
                    <div className="why-card w-[195px] h-[195px] bg-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-2 text-center cursor-pointer shadow-md hover:shadow-2xl">
                      <div className="-rotate-45 flex flex-col items-center justify-center space-y-1 max-w-[148px]">
                        <div className="relative w-10 h-10 mb-0.5 flex-shrink-0">
                          <Image
                            src="/images/Home Page/whySectionIcons/Simplification (4).webp"
                            alt="Long-Lasting Products"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <h3 className="text-[12px] font-extrabold text-[#0B2545] leading-normal uppercase">
                          Long-Lasting Products
                        </h3>
                        <p className="text-[10px] text-slate-600 leading-normal font-normal">
                          Robust construction helps products withstand demanding
                          hospital environments.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                {/* Card 8: Transparent and customer-focused service (Upper Row 4) */}
                <div className="absolute left-[1040px] top-[33px] z-20 hover:z-50 why-wave-card why-card-8">
                  <FadeIn direction="down" duration={1.2} delay={1.2}>
                    <div className="why-card w-[195px] h-[195px] bg-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-2 text-center cursor-pointer shadow-md hover:shadow-2xl">
                      <div className="-rotate-45 flex flex-col items-center justify-center space-y-1 max-w-[148px]">
                        <div className="relative w-10 h-10 mb-0.5 flex-shrink-0">
                          <Image
                            src="/images/Home Page/whySectionIcons/Simplification (5).webp"
                            alt="Transparent and customer-focused service"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <h3 className="text-[12px] font-extrabold text-[#0B2545] leading-normal uppercase">
                          Transparent and
                          <br />
                          customer-focused service
                        </h3>
                        <p className="text-[10px] text-slate-600 leading-normal font-normal">
                          We focus on building transparent, dependable
                          relationships that last.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>

          {/* Tablet Grid Layout (Two by Two, Rotated Diamond Shapes) */}
          <div className="hidden sm:grid lg:hidden grid-cols-2 gap-x-12 gap-y-24 justify-items-center justify-center py-16 w-full max-w-4xl mx-auto px-4">
            {/* Card 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="w-[190px] h-[190px] rotate-45 bg-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-3 text-center cursor-pointer shadow-md hover:shadow-xl transition-all">
                <div className="-rotate-45 flex flex-col items-center justify-center space-y-1.5 max-w-[135px]">
                  <div className="relative w-10 h-10 mb-1 flex-shrink-0">
                    <Image
                      src="/images/Home Page/whySectionIcons/material-symbols-light_diamond-outline-rounded.webp"
                      alt="Superior Manufacturing Quality"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[12px] font-extrabold text-[#0B2545] leading-tight uppercase">
                    Superior
                    <br />
                    Manufacturing Quality
                  </h3>
                  <p className="text-[9.5px] text-slate-500 leading-snug font-normal">
                    Manufactured using high-grade materials to ensure
                    durability, safety, and performance.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn direction="up" delay={0.15}>
              <div className="w-[190px] h-[190px] rotate-45 bg-[#E86D24] text-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-3 text-center cursor-pointer shadow-xl hover:shadow-2xl transition-all">
                <div className="-rotate-45 flex flex-col items-center justify-center space-y-1.5 max-w-[135px]">
                  <div className="relative w-10 h-10 mb-1 flex-shrink-0">
                    <Image
                      src="/images/Home Page/whySectionIcons/Simplification.webp"
                      alt="Excellent value for money"
                      fill
                      className="object-contain filter brightness-0 invert"
                    />
                  </div>
                  <h3 className="text-[12px] font-extrabold text-white leading-tight">
                    Excellent value for
                    <br />
                    money
                  </h3>
                  <p className="text-[9.5px] text-white/80 leading-snug font-normal">
                    Durable products designed to deliver long-term value without
                    unnecessary cost.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="w-[190px] h-[190px] rotate-45 bg-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-3 text-center cursor-pointer shadow-md hover:shadow-xl transition-all">
                <div className="-rotate-45 flex flex-col items-center justify-center space-y-1.5 max-w-[135px]">
                  <div className="relative w-10 h-10 mb-1 flex-shrink-0">
                    <Image
                      src="/images/Home Page/whySectionIcons/image 19.webp"
                      alt="Reliable after-sales service"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[12px] font-extrabold text-[#0B2545] leading-tight">
                    Reliable after-
                    <br />
                    sales service
                  </h3>
                  <p className="text-[9.5px] text-slate-500 leading-snug font-normal">
                    Our team remains available to assist with product and
                    service requirements.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Card 4 */}
            <FadeIn direction="up" delay={0.25}>
              <div className="w-[190px] h-[190px] rotate-45 bg-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-3 text-center cursor-pointer shadow-md hover:shadow-xl transition-all">
                <div className="-rotate-45 flex flex-col items-center justify-center space-y-1.5 max-w-[135px]">
                  <div className="relative w-10 h-10 mb-1 flex-shrink-0">
                    <Image
                      src="/images/Home Page/whySectionIcons/Simplification (1).webp"
                      alt="Customized product solutions"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[12px] font-extrabold text-[#0B2545] leading-tight">
                    Customized product
                    <br />
                    solutions
                  </h3>
                  <p className="text-[9.5px] text-slate-500 leading-snug font-normal">
                    Product configurations can be adapted to meet specific
                    healthcare requirements.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Card 5 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="w-[190px] h-[190px] rotate-45 bg-[#0B3B60] text-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-3 text-center cursor-pointer shadow-xl hover:shadow-2xl transition-all">
                <div className="-rotate-45 flex flex-col items-center justify-center space-y-1.5 max-w-[135px]">
                  <div className="relative w-10 h-10 mb-1 flex-shrink-0">
                    <Image
                      src="/images/Home Page/whySectionIcons/Simplification (2).webp"
                      alt="Timely Delivery"
                      fill
                      className="object-contain filter brightness-0 invert"
                    />
                  </div>
                  <h3 className="text-[12px] font-extrabold text-white leading-tight">
                    Timely Delivery
                  </h3>
                  <p className="text-[9.5px] text-slate-200/90 leading-snug font-normal">
                    Efficient production and coordination help us meet project
                    timelines.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Card 6 */}
            <FadeIn direction="up" delay={0.35}>
              <div className="w-[190px] h-[190px] rotate-45 bg-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-3 text-center cursor-pointer shadow-md hover:shadow-xl transition-all">
                <div className="-rotate-45 flex flex-col items-center justify-center space-y-1.5 max-w-[135px]">
                  <div className="relative w-10 h-10 mb-1 flex-shrink-0">
                    <Image
                      src="/images/Home Page/whySectionIcons/Simplification (3).webp"
                      alt="Strong technical support"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[12px] font-extrabold text-[#0B2545] leading-tight">
                    Strong technical
                    <br />
                    support
                  </h3>
                  <p className="text-[9.5px] text-slate-500 leading-snug font-normal">
                    Our team provides practical guidance for product selection
                    and requirements.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Card 7 */}
            <FadeIn direction="up" delay={0.4}>
              <div className="w-[190px] h-[190px] rotate-45 bg-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-3 text-center cursor-pointer shadow-md hover:shadow-xl transition-all">
                <div className="-rotate-45 flex flex-col items-center justify-center space-y-1.5 max-w-[135px]">
                  <div className="relative w-10 h-10 mb-1 flex-shrink-0">
                    <Image
                      src="/images/Home Page/whySectionIcons/Simplification (4).webp"
                      alt="Long-Lasting Products"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[12px] font-extrabold text-[#0B2545] leading-tight">
                    Long-Lasting Products
                  </h3>
                  <p className="text-[9.5px] text-slate-500 leading-snug font-normal">
                    Robust construction helps products withstand demanding
                    hospital environments.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Card 8 */}
            <FadeIn direction="up" delay={0.45}>
              <div className="w-[190px] h-[190px] rotate-45 bg-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-3 text-center cursor-pointer shadow-md hover:shadow-xl transition-all">
                <div className="-rotate-45 flex flex-col items-center justify-center space-y-1.5 max-w-[135px]">
                  <div className="relative w-10 h-10 mb-1 flex-shrink-0">
                    <Image
                      src="/images/Home Page/whySectionIcons/Simplification (5).webp"
                      alt="Transparent and customer-focused service"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[12px] font-extrabold text-[#0B2545] leading-tight">
                    Transparent &
                    <br />
                    Customer Service
                  </h3>
                  <p className="text-[9.5px] text-slate-500 leading-snug font-normal">
                    We focus on building transparent, dependable relationships
                    that last.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Mobile Overlapping Layout (Stacked with Negative Margins and Staggered Animations) */}
          <div className="flex flex-col items-center py-12 space-y-[25px] sm:hidden w-full px-4">
            {/* Card 1 */}
            <FadeIn direction="up" delay={0.05} className="relative z-10">
              <div className="w-[190px] h-[190px] rotate-45 bg-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-3 text-center cursor-pointer shadow-md hover:shadow-xl transition-all">
                <div className="-rotate-45 flex flex-col items-center justify-center space-y-1.5 max-w-[135px]">
                  <div className="relative w-10 h-10 mb-1 flex-shrink-0">
                    <Image
                      src="/images/Home Page/whySectionIcons/material-symbols-light_diamond-outline-rounded.webp"
                      alt="Superior Manufacturing Quality"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[12px] font-extrabold text-[#0B2545] leading-tight">
                    Superior
                    <br />
                    Manufacturing Quality
                  </h3>
                  <p className="text-[9.5px] text-slate-500 leading-snug font-normal">
                    Manufactured using high-grade materials to ensure
                    durability, safety, and performance.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn direction="up" delay={0.05} className="relative z-20">
              <div className="w-[190px] h-[190px] rotate-45 bg-[#E86D24] text-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-3 text-center cursor-pointer shadow-xl hover:shadow-2xl transition-all">
                <div className="-rotate-45 flex flex-col items-center justify-center space-y-1.5 max-w-[135px]">
                  <div className="relative w-10 h-10 mb-1 flex-shrink-0">
                    <Image
                      src="/images/Home Page/whySectionIcons/Simplification.webp"
                      alt="Excellent value for money"
                      fill
                      className="object-contain filter brightness-0 invert"
                    />
                  </div>
                  <h3 className="text-[12px] font-extrabold text-white leading-tight">
                    Excellent value for
                    <br />
                    money
                  </h3>
                  <p className="text-[9.5px] text-white/80 leading-snug font-normal">
                    Durable products designed to deliver long-term value without
                    unnecessary cost.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn direction="up" delay={0.05} className="relative z-30">
              <div className="w-[190px] h-[190px] rotate-45 bg-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-3 text-center cursor-pointer shadow-md hover:shadow-xl transition-all">
                <div className="-rotate-45 flex flex-col items-center justify-center space-y-1.5 max-w-[135px]">
                  <div className="relative w-10 h-10 mb-1 flex-shrink-0">
                    <Image
                      src="/images/Home Page/whySectionIcons/image 19.webp"
                      alt="Reliable after-sales service"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[12px] font-extrabold text-[#0B2545] leading-tight">
                    Reliable after-
                    <br />
                    sales service
                  </h3>
                  <p className="text-[9.5px] text-slate-500 leading-snug font-normal">
                    Our team remains available to assist with product and
                    service requirements.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Card 4 */}
            <FadeIn direction="up" delay={0.05} className="relative z-40">
              <div className="w-[190px] h-[190px] rotate-45 bg-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-3 text-center cursor-pointer shadow-md hover:shadow-xl transition-all">
                <div className="-rotate-45 flex flex-col items-center justify-center space-y-1.5 max-w-[135px]">
                  <div className="relative w-10 h-10 mb-1 flex-shrink-0">
                    <Image
                      src="/images/Home Page/whySectionIcons/Simplification (1).webp"
                      alt="Customized product solutions"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[12px] font-extrabold text-[#0B2545] leading-tight">
                    Customized product
                    <br />
                    solutions
                  </h3>
                  <p className="text-[9.5px] text-slate-500 leading-snug font-normal">
                    Product configurations can be adapted to meet specific
                    healthcare requirements.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Card 5 */}
            <FadeIn direction="up" delay={0.05} className="relative z-50">
              <div className="w-[190px] h-[190px] rotate-45 bg-[#0B3B60] text-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-3 text-center cursor-pointer shadow-xl hover:shadow-2xl transition-all">
                <div className="-rotate-45 flex flex-col items-center justify-center space-y-1.5 max-w-[135px]">
                  <div className="relative w-10 h-10 mb-1 flex-shrink-0">
                    <Image
                      src="/images/Home Page/whySectionIcons/Simplification (2).webp"
                      alt="Timely Delivery"
                      fill
                      className="object-contain filter brightness-0 invert"
                    />
                  </div>
                  <h3 className="text-[12px] font-extrabold text-white leading-tight">
                    Timely Delivery
                  </h3>
                  <p className="text-[9.5px] text-slate-200/90 leading-snug font-normal">
                    Efficient production and coordination help us meet project
                    timelines.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Card 6 */}
            <FadeIn direction="up" delay={0.05} className="relative z-[60]">
              <div className="w-[190px] h-[190px] rotate-45 bg-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-3 text-center cursor-pointer shadow-md hover:shadow-xl transition-all">
                <div className="-rotate-45 flex flex-col items-center justify-center space-y-1.5 max-w-[135px]">
                  <div className="relative w-10 h-10 mb-1 flex-shrink-0">
                    <Image
                      src="/images/Home Page/whySectionIcons/Simplification (3).webp"
                      alt="Strong technical support"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[12px] font-extrabold text-[#0B2545] leading-tight">
                    Strong technical
                    <br />
                    support
                  </h3>
                  <p className="text-[9.5px] text-slate-500 leading-snug font-normal">
                    Our team provides practical guidance for product selection
                    and requirements.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Card 7 */}
            <FadeIn direction="up" delay={0.05} className="relative z-[70]">
              <div className="w-[190px] h-[190px] rotate-45 bg-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-3 text-center cursor-pointer shadow-md hover:shadow-xl transition-all">
                <div className="-rotate-45 flex flex-col items-center justify-center space-y-1.5 max-w-[135px]">
                  <div className="relative w-10 h-10 mb-1 flex-shrink-0">
                    <Image
                      src="/images/Home Page/whySectionIcons/Simplification (4).webp"
                      alt="Long-Lasting Products"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[12px] font-extrabold text-[#0B2545] leading-tight">
                    Long-Lasting Products
                  </h3>
                  <p className="text-[9.5px] text-slate-500 leading-snug font-normal">
                    Robust construction helps products withstand demanding
                    hospital environments.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Card 8 */}
            <FadeIn direction="up" delay={0.05} className="relative z-[80]">
              <div className="w-[190px] h-[190px] rotate-45 bg-white border-[3px] border-[#f7f5ef] flex items-center justify-center p-3 text-center cursor-pointer shadow-md hover:shadow-xl transition-all">
                <div className="-rotate-45 flex flex-col items-center justify-center space-y-1.5 max-w-[135px]">
                  <div className="relative w-10 h-10 mb-1 flex-shrink-0">
                    <Image
                      src="/images/Home Page/whySectionIcons/Simplification (5).webp"
                      alt="Transparent and customer-focused service"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[12px] font-extrabold text-[#0B2545] leading-tight">
                    Transparent &
                    <br />
                    Customer Service
                  </h3>
                  <p className="text-[9.5px] text-slate-500 leading-snug font-normal">
                    We focus on building transparent, dependable relationships
                    that last.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCT CATEGORIES SECTION */}
      <section
        ref={sectionRef}
        className="w-full px-[4vw] py-16 bg-[#FAFBFC] relative"
      >
        <div className="space-y-[4vh]">
          {/* Top Sub-tagline Badge - Left Aligned with orange icon, accent line, and mobile hamburger */}
          <div className="flex items-center justify-between w-full">
            <FadeIn
              direction="up"
              delay={0.1}
              className="flex flex-col items-start gap-1.5 w-fit"
            >
              <div className="inline-flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-wider text-[#0C3D6C] uppercase">
                <span className="relative w-7 h-7 flex-shrink-0">
                  <Image
                    src="/images/Home Page/sectionIcons/ourProduct.webp"
                    alt="Products Icon"
                    fill
                    className="object-contain"
                  />
                </span>
                <TypewriterText text="OUR PRODUCTS" />
              </div>
              {/* Orange underline accent line */}
              <div className="w-1/2 h-[4px] bg-[#E86D24] rounded-full" />
            </FadeIn>

            {/* Hamburger Button for Mobile Categories Panel */}
            <button
              onClick={() => setIsSidePanelOpen(true)}
              className="lg:hidden p-2.5 rounded-xl bg-white shadow-md border border-slate-100 text-[#0B3B60] hover:text-[#E86D24] transition-all flex items-center justify-center"
              aria-label="Toggle Categories Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Header Title & Description */}
          <FadeIn direction="up" delay={0.15} className="text-center space-y-3">
            <h2 className="text-4xl sm:text-5xl font-normal text-[#E86D24] tracking-wider ">
              Complete Hospital Furniture Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-md max-w-4xl mx-auto leading-relaxed font-medium">
              We manufacture a comprehensive range of hospital furniture
              designed for modern healthcare facilities, combining durability,
              safety, functionality, and ergonomic design.
            </p>
          </FadeIn>

          {/* Interactive Flex Showcase */}
          <div
            onMouseLeave={() => setIsAutoPlayPaused(false)}
            className="flex flex-col lg:flex-row gap-8 items-center pt-8 justify-between"
          >
            {/* Left Column: 10 Categories */}
            <div className="hidden lg:block w-full lg:w-[30%] order-2 lg:order-1 flex-shrink-0">
              {leftCategories.map((cat, idx) => {
                const isActive = activeCategory === cat.name;
                return (
                  <FadeIn
                    key={cat.name}
                    direction="right"
                    delay={0.05 * idx}
                    className="w-full flex justify-end"
                  >
                    <button
                      onClick={() => setActiveCategory(cat.name)}
                      onMouseEnter={() => {
                        setActiveCategory(cat.name);
                        setIsAutoPlayPaused(true);
                      }}
                      onMouseLeave={() => setIsAutoPlayPaused(false)}
                      className={`w-fit max-w-max flex items-center justify-end gap-4 text-right group py-1.5 px-3 rounded-2xl cursor-pointer ${
                        isActive
                          ? "text-[#E86D24] font-bold transition-colors duration-300"
                          : "text-slate-700 hover:text-[#E86D24] font-semibold"
                      }`}
                    >
                      <span
                        className={`inline-block text-sm sm:text-[15px] font-montserrat tracking-wide transition-transform duration-300 origin-right ${
                          isActive ? "scale-105" : ""
                        }`}
                      >
                        {cat.name}
                      </span>
                      <div
                        className={`relative w-10 h-10 flex-shrink-0 flex items-center justify-center transition-transform duration-300 ${
                          isActive ? "scale-110" : ""
                        }`}
                      >
                        <svg
                          viewBox="0 0 100 100"
                          className="absolute -inset-[2px] w-[calc(100%+4px)] h-[calc(100%+4px)] rotate-[170deg] z-0 pointer-events-none"
                        >
                          {/* Blue base segment */}
                          <circle
                            cx="50"
                            cy="50"
                            r="44"
                            fill="transparent"
                            stroke="#0B3B60"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray={isActive ? "45 276" : "205 276"}
                            strokeDashoffset={isActive ? 102 : 0}
                            className={
                              isActive
                                ? "transition-all duration-700 ease-in-out"
                                : "transition-none"
                            }
                          />
                          {/* Orange overlay segment */}
                          <circle
                            cx="50"
                            cy="50"
                            r="44"
                            fill="transparent"
                            stroke="#E86D24"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray={isActive ? "205 276" : "45 276"}
                            strokeDashoffset={isActive ? 0 : 102}
                            className={
                              isActive
                                ? "transition-all duration-700 ease-in-out"
                                : "transition-none"
                            }
                          />
                        </svg>
                        <div
                          className={`relative w-[29px] h-[29px] rounded-full flex items-center justify-center z-10 ${
                            isActive
                              ? "bg-[#E86D24] transition-all duration-500"
                              : "bg-[#0B3B60]"
                          }`}
                        >
                          <div className="relative w-[20px] h-[20px]">
                            <Image
                              src={getCategoryIcon(cat.name)}
                              alt=""
                              fill
                              className="object-contain filter brightness-0 invert"
                            />
                          </div>
                        </div>
                      </div>
                    </button>
                  </FadeIn>
                );
              })}
            </div>

            {/* Center Column: Interactive Image Frame */}
            <FadeIn
              direction="up"
              delay={0.2}
              className="w-full lg:w-[40%] flex flex-col items-center justify-center order-1 lg:order-2 flex-shrink-0"
            >
              {/* Outer container with relative positioning and padding for borders */}
              <div
                onMouseEnter={() => setIsAutoPlayPaused(true)}
                onMouseLeave={() => setIsAutoPlayPaused(false)}
                className="relative w-full aspect-square max-w-[440px] sm:max-w-[480px] lg:max-w-[480px] xl:max-w-[530px]"
              >
                {/* Top-Left Blue Border Bracket (Offset outside the container) */}
                <div className="absolute -top-3 -left-3 w-[45%] h-[45%] border-t-[5px] border-l-[5px] border-[#0B3B60] rounded-tl-[2.8rem] pointer-events-none z-0" />

                {/* Bottom-Right Orange Border Bracket (Offset outside the container) */}
                <div className="absolute -bottom-3 -right-3 w-[45%] h-[45%] border-b-[5px] border-r-[5px] border-[#E86D24] rounded-br-[2.8rem] pointer-events-none z-0" />

                {/* Main White Frame Container */}
                <div className="relative w-full h-full rounded-[2.5rem] bg-white shadow-2xl border border-slate-100 p-2 z-10">
                  {/* Inner Image with custom rounded corners matching mockup */}
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-900 border border-slate-100">
                    {/* Persistent image stack - zero blink during transition */}
                    {showcaseFrames.map((imgSrc) => {
                      const isCurrent = activeProductImage === imgSrc;
                      return (
                        <div
                          key={imgSrc}
                          className={`absolute inset-0 transition-all duration-700 ease-out transform ${
                            isCurrent
                              ? "opacity-100 translate-x-0 scale-100 z-10 pointer-events-auto"
                              : "opacity-0 translate-x-10 scale-102 z-0 pointer-events-none"
                          }`}
                        >
                          <Image
                            src={imgSrc}
                            alt=""
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                          />
                        </div>
                      );
                    })}

                    {/* View Details Button overlay */}
                    <Link
                      href="/products"
                      className="absolute bottom-6 right-6 z-20"
                    >
                      <button className="bg-[#E86D24] hover:bg-[#d65e1c] text-white font-bold text-sm sm:text-base px-6 py-3 rounded-2xl shadow-lg transition-all flex items-center gap-2">
                        <span>View</span>
                        <ArrowRight className="w-4.5 h-4.5 animate-arrow-linear" />
                      </button>
                    </Link>
                  </div>
                </div>

                <style>{`
                  @keyframes arrowSlideLinear {
                    0% {
                      transform: translateX(0);
                    }
                    50% {
                      transform: translateX(6px);
                    }
                    100% {
                      transform: translateX(0);
                    }
                  }
                  .animate-arrow-linear {
                    animation: arrowSlideLinear 1.6s infinite ease-in-out;
                  }
                `}</style>

                {/* Explore Range Button attached to the bottom left of the container */}
                <Link
                  href="/products"
                  className="absolute -bottom-10 left-6 z-0"
                >
                  <button className="relative z-30 bg-[#0B3B60] hover:bg-[#051c30] text-white font-extrabold text-[10px] sm:text-xs px-6 pb-3 pt-4 rounded-b-2xl shadow-md transition-all flex items-center gap-2 tracking-wider">
                    <span>EXPLORE COMPLETE PRODUCT RANGE</span>
                    <ArrowRight className="w-3.5 h-3.5 animate-arrow-linear" />
                  </button>
                </Link>
              </div>
            </FadeIn>

            {/* Right Column: 10 Categories */}
            <div className="hidden lg:block w-full lg:w-[30%] order-3 flex-shrink-0">
              {rightCategories.map((cat, idx) => {
                const isActive = activeCategory === cat.name;
                return (
                  <FadeIn
                    key={cat.name}
                    direction="left"
                    delay={0.05 * idx}
                    className="w-full flex justify-start"
                  >
                    <button
                      onClick={() => setActiveCategory(cat.name)}
                      onMouseEnter={() => {
                        setActiveCategory(cat.name);
                        setIsAutoPlayPaused(true);
                      }}
                      onMouseLeave={() => setIsAutoPlayPaused(false)}
                      className={`w-fit max-w-max flex items-center justify-start gap-4 text-left group py-1.5 px-3 rounded-2xl cursor-pointer ${
                        isActive
                          ? "text-[#E86D24] font-bold transition-colors duration-300"
                          : "text-slate-700 hover:text-[#E86D24] font-semibold"
                      }`}
                    >
                      <div
                        className={`relative w-10 h-10 flex-shrink-0 flex items-center justify-center transition-transform duration-300 ${
                          isActive ? "scale-110" : ""
                        }`}
                      >
                        <svg
                          viewBox="0 0 100 100"
                          className="absolute -inset-[2px] w-[calc(100%+4px)] h-[calc(100%+4px)] rotate-[170deg] z-0 pointer-events-none"
                        >
                          {/* Blue base segment */}
                          <circle
                            cx="50"
                            cy="50"
                            r="44"
                            fill="transparent"
                            stroke="#0B3B60"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray={isActive ? "45 276" : "205 276"}
                            strokeDashoffset={isActive ? 102 : 0}
                            className={
                              isActive
                                ? "transition-all duration-700 ease-in-out"
                                : "transition-none"
                            }
                          />
                          {/* Orange overlay segment */}
                          <circle
                            cx="50"
                            cy="50"
                            r="44"
                            fill="transparent"
                            stroke="#E86D24"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray={isActive ? "205 276" : "45 276"}
                            strokeDashoffset={isActive ? 0 : 102}
                            className={
                              isActive
                                ? "transition-all duration-700 ease-in-out"
                                : "transition-none"
                            }
                          />
                        </svg>
                        <div
                          className={`relative w-[29px] h-[29px] rounded-full flex items-center justify-center z-10 ${
                            isActive
                              ? "bg-[#E86D24] transition-all duration-500"
                              : "bg-[#0B3B60]"
                          }`}
                        >
                          <div className="relative w-[20px] h-[20px]">
                            <Image
                              src={getCategoryIcon(cat.name)}
                              alt=""
                              fill
                              className="object-contain filter brightness-0 invert"
                            />
                          </div>
                        </div>
                      </div>
                      <span
                        className={`inline-block text-sm sm:text-[15px] font-semibold font-montserrat tracking-wide transition-transform duration-300 origin-left ${
                          isActive ? "scale-105" : ""
                        }`}
                      >
                        {cat.name}
                      </span>
                    </button>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR STORY / ABOUT US SECTION */}
      <section className="w-full relative overflow-hidden bg-white">
        {/* Our Story Background Doodle */}
        <div
          className="absolute inset-0 opacity-1 mix-blend-multiply pointer-events-none bg-cover bg-right-top z-0"
          style={{
            backgroundImage: `url('/images/Home Page/ourStoryDoodle.webp')`,
          }}
        />
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center pl-0 pr-0 gap-10 lg:gap-16 xl:gap-20 py-0">
          {/* Left Column: Image Container (Flex 1) */}
          <div className="flex-[45%] w-full relative">
            {/* Top Badge: OUR STORY (Overlay on image top left) */}
            <div className="absolute top-4 left-[4vw] lg:top-8 flex flex-col items-start gap-1 z-20 w-fit">
              <div className="inline-flex items-center gap-2 text-lg sm:text-xl font-bold tracking-wider text-white uppercase">
                <div className="relative w-6 h-6 flex-shrink-0 filter brightness-0 invert">
                  <Image
                    src="/images/Home Page/sectionIcons/ourStory.webp"
                    alt="Our Story Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <TypewriterText text="OUR STORY" />
              </div>
              <div className="w-1/2 h-[4px] bg-[#E86D24] rounded-full" />
            </div>

            <FadeIn
              direction="right"
              delay={0.1}
              className="w-full mx-auto lg:mx-0"
            >
              <div className="relative w-full overflow-hidden rounded-none shadow-none">
                <Image
                  src="/images/Home Page/OurStory.webp"
                  alt="Sri Mathurams Medical Engineering Facility"
                  width={800}
                  height={400}
                  className="w-full h-auto object-contain block"
                  priority
                />
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Content (Flex 1) */}
          <div className="w-full lg:w-[55%] lg:flex-[55%] relative text-left space-y-5 sm:space-y-6 px-6 sm:px-10 lg:px-0 lg:pr-[4vw] py-8 sm:py-10 lg:py-8">
            {/* Title */}
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.4rem] xl:text-[3.9rem] font-extrabold text-[#0B2545] tracking-tight sm:tracking-normal lg:tracking-wider pt-0 lg:pt-8 font-montserrat"
              style={{ lineHeight: "1.25" }}
            >
              <TypewriterText
                text="Building Healthcare Infrastructure Since 1997"
                speed={24}
                delay={100}
                onComplete={() => setStoryTitleTyped(true)}
              />
            </h2>

            {/* Description Paragraph with Bold Terms - Line by Line Fade in */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-xl font-inter">
              <p
                className={`transition-all duration-700 ease-out transform ${
                  storyTitleTyped
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3 pointer-events-none"
                }`}
                style={{
                  lineHeight: "1.8",
                  transitionDelay: storyTitleTyped ? "150ms" : "0ms",
                }}
              >
                For over{" "}
                <strong className="text-slate-900 font-semibold">
                  29 years
                </strong>
                ,{" "}
                <strong className="text-slate-900 font-semibold">
                  Sri Mathurams Medical Engineering
                </strong>{" "}
                has been manufacturing reliable hospital furniture and medical
                equipment that combine{" "}
                <strong className="text-slate-900 font-semibold">
                  quality, durability, and functionality
                </strong>
                .
              </p>
              <p
                className={`transition-all duration-700 ease-out transform ${
                  storyTitleTyped
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3 pointer-events-none"
                }`}
                style={{
                  lineHeight: "1.8",
                  transitionDelay: storyTitleTyped ? "450ms" : "0ms",
                }}
              >
                Today, we proudly serve hospitals, clinics, medical colleges,
                and healthcare with{" "}
                <strong className="text-slate-900 font-semibold">
                  trusted healthcare solutions built to last
                </strong>
                .
              </p>
            </div>

            {/* CTA Button */}
            <div
              className={`pt-2 flex justify-start transition-all duration-700 ease-out transform ${
                storyTitleTyped
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3 pointer-events-none"
              }`}
              style={{
                transitionDelay: storyTitleTyped ? "750ms" : "0ms",
              }}
            >
              <Link href="/about">
                <button className="bg-[#0B3B60] hover:bg-[#062454] text-white font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg uppercase shadow-md hover:shadow-lg transition-all flex items-center gap-2 group">
                  <span>READ OUR STORY</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRUST & CERTIFICATIONS SECTION */}
      <section className="w-full px-[4vw] py-[8vh] relative overflow-hidden bg-slate-50 ">
        {/* Soft background medical/hexagonal pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0b2545_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className=" relative z-10 space-y-[4vh]">
          {/* Top Tagline */}
          <FadeIn
            direction="up"
            delay={0.1}
            className="flex flex-col justify-center"
          >
            <div className="flex flex-col items-start gap-1.5 w-fit">
              <div className="inline-flex items-center gap-2 text-lg sm:text-xl font-bold tracking-widest text-[#0C3D6C] uppercase">
                <div className="relative w-7 h-7 flex-shrink-0">
                  <Image
                    src="/images/Home Page/sectionIcons/trustCertificate.webp"
                    alt="Trust & Certifications Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <TypewriterText text="TRUST & CERTIFICATIONS" />
              </div>
              <div className="w-1/2 h-[4px] bg-[#E86D24] rounded-full" />
            </div>
          </FadeIn>

          {/* Section Header */}
          <FadeIn direction="up" delay={0.15} className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Certified Quality. Trusted by Thousands.
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto font-medium">
              Our certifications reflect our commitment to quality, safety, and
              excellence in every product we manufacture.
            </p>
          </FadeIn>

          {/* 7 Certification Cards Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 pt-4">
            {/* Cert 1: ISO 9001 */}
            <FadeIn
              direction="up"
              delay={0.1}
              className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-between space-y-3 group"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <Image
                  src="/images/Home Page/certificates/ISO1.webp"
                  alt="ISO 9001 Certificate"
                  fill
                  className="object-contain p-1 group-hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <span className="text-md font-black text-[#0B2545] block">
                  ISO 9001
                </span>
                <span className="text-[12px] text-slate-500 font-medium leading-tight block mt-0.5">
                  Quality Management
                </span>
              </div>
            </FadeIn>

            {/* Cert 2: ISO 13485 */}
            <FadeIn
              direction="up"
              delay={0.15}
              className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-between space-y-3 group"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <Image
                  src="/images/Home Page/certificates/ISO2.webp"
                  alt="ISO 13485 Certificate"
                  fill
                  className="object-contain p-1 group-hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <span className="text-md font-black text-[#0B2545] block">
                  ISO 13485
                </span>
                <span className="text-[12px] text-slate-500 font-medium leading-tight block mt-0.5">
                  Medical Quality
                </span>
              </div>
            </FadeIn>

            {/* Cert 3: ZED */}
            <FadeIn
              direction="up"
              delay={0.2}
              className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-between space-y-3 group"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <Image
                  src="/images/Home Page/certificates/Zed.webp"
                  alt="ZED Certificate"
                  fill
                  className="object-contain p-1 group-hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <span className="text-md font-black text-[#0B2545] block">
                  ZED
                </span>
                <span className="text-[12px] text-slate-500 font-medium leading-tight block mt-0.5">
                  Zero Defect
                </span>
              </div>
            </FadeIn>

            {/* Cert 4: MSME */}
            <FadeIn
              direction="up"
              delay={0.25}
              className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-between space-y-3 group"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <Image
                  src="/images/Home Page/certificates/msme.webp"
                  alt="MSME Certificate"
                  fill
                  className="object-contain p-1 group-hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <span className="text-md font-black text-[#0B2545] block">
                  MSME
                </span>
                <span className="text-[12px] text-slate-500 font-medium leading-tight block mt-0.5">
                  Registered
                </span>
              </div>
            </FadeIn>

            {/* Cert 5: NSIC */}
            <FadeIn
              direction="up"
              delay={0.3}
              className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-between space-y-3 group"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <Image
                  src="/images/Home Page/certificates/nsic.webp"
                  alt="NSIC Certificate"
                  fill
                  className="object-contain p-1 group-hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <span className="text-md font-black text-[#0B2545] block">
                  NSIC
                </span>
                <span className="text-[12px] text-slate-500 font-medium leading-tight block mt-0.5">
                  Registered
                </span>
              </div>
            </FadeIn>

            {/* Cert 6: MAKE IN INDIA */}
            <FadeIn
              direction="up"
              delay={0.35}
              className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-between space-y-3 group"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <Image
                  src="/images/Home Page/certificates/MakeInIndia.webp"
                  alt="Make in India Certificate"
                  fill
                  className="object-contain p-1 group-hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <span className="text-md font-black text-[#0B2545] block">
                  MAKE IN INDIA
                </span>
                <span className="text-[12px] text-slate-500 font-medium leading-tight block mt-0.5">
                  Proudly Indian
                </span>
              </div>
            </FadeIn>

            {/* Cert 7: ASSOCHAM */}
            <FadeIn
              direction="up"
              delay={0.4}
              className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-between space-y-3 group"
            >
              <div className="relative w-18 h-18 sm:w-24 sm:h-24 flex items-center justify-center">
                <Image
                  src="/images/Home Page/certificates/assocham.webp"
                  alt="ASSOCHAM Member Certificate"
                  fill
                  className="object-contain p-1 group-hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <span className="text-md font-black text-[#0B2545] block">
                  ASSOCHAM
                </span>
                <span className="text-[12px] text-slate-500 font-medium leading-tight block mt-1">
                  Member
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. HOW WE BUILD QUALITY (SCROLL-PINNED ACCORDION) SECTION */}
      <BuildQualitySection />

      {/* 7. OUR CLIENTS SECTION */}
      <section className="w-full px-[4vw] py-[8vh] relative overflow-hidden bg-white border-t border-b border-slate-100">
        <div className="w-full mx-auto space-y-[4vh]">
          {/* Top Tagline */}
          <FadeIn
            direction="up"
            delay={0.1}
            className="flex flex-col items-start"
          >
            <div className="flex flex-col items-start gap-1.5 pb-2 w-fit">
              <div className="inline-flex items-center gap-2 text-lg sm:text-xl font-bold tracking-widest text-[#0C3D6C] uppercase">
                <div className="relative w-7 h-7 flex-shrink-0">
                  <Image
                    src="/images/Home Page/sectionIcons/OurClients.webp"
                    alt="Our Clients Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <TypewriterText text="OUR CLIENTS" />
              </div>
              <div className="w-1/2 h-[4px] bg-[#E86D24] rounded-full" />
            </div>
          </FadeIn>

          {/* Section Title & Subtitle */}
          <FadeIn direction="up" delay={0.15} className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Trusted by Healthcare Across Tamil Nadu
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-medium">
              We are proud to be a preferred partner for hospitals, clinics, and
              healthcare.
            </p>
          </FadeIn>

          {/* Top Row: 5 Client Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-2">
            {/* Card 1: Government Hospitals */}
            <FadeIn
              direction="up"
              delay={0.1}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-between space-y-4 group"
            >
              <div className="w-14 h-14 flex items-center justify-center text-[#0B2545]">
                <svg
                  className="w-12 h-12 stroke-[1.5]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5h-15V21"
                  />
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#0B2545] uppercase tracking-wider">
                  GOVERNMENT
                  <br />
                  HOSPITALS
                </h3>
                <div className="w-12 h-1 bg-slate-500 mx-auto rounded-full group-hover:bg-orange-500 transition-colors" />
              </div>
            </FadeIn>

            {/* Card 2: Private Hospitals */}
            <FadeIn
              direction="up"
              delay={0.15}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-between space-y-4 group"
            >
              <div className="w-14 h-14 flex items-center justify-center text-[#0284C7]">
                <div className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-lg">
                  +
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#0B2545] uppercase tracking-wider">
                  PRIVATE
                  <br />
                  HOSPITALS
                </h3>
                <div className="w-12 h-1 bg-slate-500 mx-auto rounded-full group-hover:bg-orange-500 transition-colors" />
              </div>
            </FadeIn>

            {/* Card 3: Medical Colleges */}
            <FadeIn
              direction="up"
              delay={0.2}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-between space-y-4 group"
            >
              <div className="w-14 h-14 flex items-center justify-center text-[#0B2545]">
                <svg
                  className="w-12 h-12 stroke-[1.5]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147L12 14.6l7.74-4.453a1.5 1.5 0 000-2.594L12 3.1 4.26 7.553a1.5 1.5 0 000 2.594zM12 20.9l-6.85-3.94v-3.95L12 17l6.85-3.94v3.95L12 20.9z"
                  />
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#0B2545] uppercase tracking-wider">
                  MEDICAL
                  <br />
                  COLLEGES
                </h3>
                <div className="w-12 h-1 bg-slate-500 mx-auto rounded-full group-hover:bg-orange-500 transition-colors" />
              </div>
            </FadeIn>

            {/* Card 4: Clinics */}
            <FadeIn
              direction="up"
              delay={0.25}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-between space-y-4 group"
            >
              <div className="w-14 h-14 flex items-center justify-center text-teal-600">
                <div className="w-10 h-10 rounded-xl bg-teal-500 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  +
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#0B2545] uppercase tracking-wider">
                  CLINICS
                </h3>
                <div className="w-12 h-1 bg-slate-500 mx-auto rounded-full group-hover:bg-orange-500 transition-colors" />
              </div>
            </FadeIn>

            {/* Card 5: Healthcare */}
            <FadeIn
              direction="up"
              delay={0.3}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-between space-y-4 group"
            >
              <div className="w-14 h-14 flex items-center justify-center text-[#0B2545]">
                <svg
                  className="w-12 h-12 stroke-[1.5]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#0B2545] uppercase tracking-wider">
                  HEALTHCARE
                </h3>
                <div className="w-12 h-1 bg-slate-500 mx-auto rounded-full group-hover:bg-orange-500 transition-colors" />
              </div>
            </FadeIn>
          </div>

          {/* Bottom Row: Client Brand Logos Bar */}
          <div className="pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {/* Logo 1: Kilpauk Medical College */}
            <FadeIn
              direction="up"
              delay={0.1}
              className="flex items-center justify-center gap-2 p-2 opacity-85 hover:opacity-100 transition-opacity"
            >
              <div className="w-10 h-10 rounded-full border-2 border-[#0B2545] flex items-center justify-center text-[10px] font-black text-[#0B2545]">
                KMC
              </div>
              <span className="text-[12px] font-black text-[#0B2545] leading-tight">
                GOVERNMENT KILPAUK
                <br />
                MEDICAL COLLEGE
              </span>
            </FadeIn>

            {/* Logo 2: Apollo Hospitals */}
            <FadeIn
              direction="up"
              delay={0.15}
              className="flex items-center justify-center p-2 opacity-85 hover:opacity-100 transition-opacity"
            >
              <div className="flex items-center gap-1">
                <span className="text-lg font-black text-amber-500">A</span>
                <span className="text-base font-black text-[#0B2545] tracking-tight">
                  Apollo
                </span>
                <span className="text-[11px] font-bold text-slate-500 block">
                  Hospitals
                </span>
              </div>
            </FadeIn>

            {/* Logo 3: Kauvery Hospital */}
            <FadeIn
              direction="up"
              delay={0.2}
              className="flex items-center justify-center p-2 opacity-85 hover:opacity-100 transition-opacity"
            >
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
                <span className="text-sm font-black text-[#8B0000] tracking-tight">
                  kauvery
                </span>
                <span className="text-[9px] font-semibold text-slate-500">
                  hospital
                </span>
              </div>
            </FadeIn>

            {/* Logo 4: SRM */}
            <FadeIn
              direction="up"
              delay={0.25}
              className="flex items-center justify-center p-2 opacity-85 hover:opacity-100 transition-opacity"
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full border border-blue-900 flex items-center justify-center text-[8px] font-bold text-blue-900">
                  SRM
                </div>
                <span className="text-sm font-black text-[#0B2545] tracking-wider">
                  SRM
                </span>
              </div>
            </FadeIn>

            {/* Logo 5: MIOT International */}
            <FadeIn
              direction="up"
              delay={0.3}
              className="flex items-center justify-center p-2 opacity-85 hover:opacity-100 transition-opacity"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-base font-black text-[#0B2545] tracking-tighter">
                  miot
                </span>
                <span className="text-[9px] font-bold text-amber-500 uppercase">
                  International
                </span>
              </div>
            </FadeIn>

            {/* Logo 6: Chettinad Health City */}
            <FadeIn
              direction="up"
              delay={0.35}
              className="flex items-center justify-center p-2 opacity-85 hover:opacity-100 transition-opacity"
            >
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 bg-teal-500 rotate-45 rounded-sm" />
                <span className="text-xs font-black text-[#0B2545]">
                  Chettinad
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <section className="w-full px-[4vw] py-16 !mt-0">
        <div className="relative rounded-3xl overflow-hidden bg-[#102F4E] shadow-xl border border-slate-700/40 min-h-[280px] flex items-center">
          {/* Background Hospital Beds Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=90"
              alt="Operation Theatre Hospital Furniture"
              fill
              sizes="100vw"
              className="object-cover object-right filter brightness-50 contrast-125"
            />
            {/* Dark Navy Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F2D4A] via-[#0F2D4A]/95 to-transparent w-full lg:w-[75%]" />
          </div>

          <FadeIn
            className="relative z-10 w-full px-8 md:px-12 py-10 flex flex-col justify-center"
            direction="up"
            delay={0.1}
            duration={0.8}
          >
            {/* Tagline */}
            <div className="relative self-start w-fit inline-flex items-center gap-3 pb-2.5">
              <svg
                className="w-8 h-8 sm:w-[34px] sm:h-[34px] lg:w-5 lg:h-5 text-[#E86D24] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
              <div className="flex flex-col lg:flex-row lg:items-center gap-0.5 lg:gap-2 text-xs sm:text-sm lg:text-[13px] font-bold text-white uppercase tracking-wider leading-tight">
                <span>COMPLETE SOLUTION</span>
                <span>FOR EVERY HEALTHCARE NEEDS</span>
              </div>
              <span className="absolute left-0 bottom-0 w-1/2 h-[3px] bg-[#E86D24] rounded-full" />
            </div>

            {/* Main Title */}
            <h2 className="text-2xl md:text-4xl font-semibold text-white leading-tight mt-4 ">
              Looking for Complete Hospital <br className="hidden sm:inline" />{" "}
              Furniture Solutions?
            </h2>

            {/* Description */}
            <p className="text-slate-200 text-md sm:text-md mt-3 font-medium">
              We manufacture reliable and durable hospital furniture <br />
              <span className="font-bold text-white">
                tailored to your healthcare requirements.
              </span>
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button
                onClick={() =>
                  openInquiryModal({
                    name: "Complete Hospital Furniture Solutions Inquiry",
                    category: "Hospital Furniture",
                    image:
                      "/images/Product Assets/productsImage/MF01 – Plain Bedside Locker.webp",
                    isGeneral: true,
                  })
                }
                className="bg-[#E86D24] hover:bg-[#EE7D22] text-white font-bold text-xs px-5 py-3.5 rounded-xl uppercase shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                <span className="relative w-6 h-6 flex-shrink-0">
                  <Image
                    src="/images/ContactPage/quoat 1.webp"
                    alt="Quote Icon"
                    fill
                    className="object-contain filter invert"
                  />
                </span>
                Request a Quote
              </button>

              <Link href="/contact">
                <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white/60 hover:border-white font-bold text-xs px-5 py-3 rounded-xl uppercase transition-all inline-flex items-center gap-2 cursor-pointer">
                  <Image
                    src="/images/ContactPage/call.webp"
                    alt="Call Icon"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                  Contact Sales
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
      {/* Mobile Side Drawer for Categories */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 ${
          isSidePanelOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop Overlay */}
        <div
          onClick={() => setIsSidePanelOpen(false)}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
        {/* Drawer Body (Slide from Right) */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-[80%] max-w-[320px] bg-white shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out z-10 ${
            isSidePanelOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-lg font-bold text-[#0B2545]">
                Product Categories
              </h3>
              <button
                onClick={() => setIsSidePanelOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            {/* Scrollable Categories List */}
            <div className="flex-1 overflow-y-auto py-4 pr-1 space-y-1.5 scrollbar-thin">
              {[...leftCategories, ...rightCategories].map((cat) => {
                const isActive = activeCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    onClick={() => {
                      setActiveCategory(cat.name);
                      setIsSidePanelOpen(false);
                    }}
                    className={`w-full flex items-center justify-between gap-3 text-left transition-all duration-300 py-2.5 px-4 rounded-xl text-sm font-semibold border ${
                      isActive
                        ? "text-[#E86D24] bg-orange-50/50 border-orange-100 font-bold"
                        : "text-slate-700 hover:bg-slate-50 border-transparent hover:text-[#0B3B60]"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`lucide lucide-chevron-right transition-transform ${isActive ? "text-[#E86D24] translate-x-0.5" : "text-slate-400"}`}
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
