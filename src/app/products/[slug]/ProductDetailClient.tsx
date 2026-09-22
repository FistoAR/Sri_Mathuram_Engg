"use client";

// Recompile trigger
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Star,
  CheckCircle,
  FileText,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  Settings,
  ShieldCheck,
  Wrench,
  HeartPulse,
  Award,
  Clock,
  Menu,
  Bed,
  AlertTriangle,
  ZoomIn,
} from "lucide-react";
import { MedicalProduct, PRODUCTS, CATEGORIES } from "@/lib/data";
import { useInquiryModal } from "@/components/ui/InquiryModalContext";
import { ProductCard } from "@/components/ui/ProductCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProductBottomBanner } from "@/components/products/ProductBottomBanner";
import { SecureImage } from "@/components/ui/SecureImage";

const getFunctionIconPath = (funcTitle: string): string => {
  const lower = funcTitle.toLowerCase();

  if (lower.includes("reverse trendelenburg")) {
    return "/images/ProductDetails/Functions/Reverse Trendelenburg.svg";
  }
  if (lower.includes("trendelenburg")) {
    return "/images/ProductDetails/Functions/Trendelenburg.svg";
  }
  if (lower.includes("crutch") || lower.includes("lithotomy")) {
    return "/images/ProductDetails/Functions/Adjustable Knee Crutches.svg";
  }
  if (lower.includes("head rise") || lower.includes("head raise")) {
    return "/images/ProductDetails/Functions/Head Raise .svg";
  }
  if (lower.includes("knee") || lower.includes("leg rise") || lower.includes("leg raise")) {
    return "/images/ProductDetails/Functions/KneeLeg Raise.svg";
  }
  if (lower.includes("retractable leg")) {
    return "/images/ProductDetails/Functions/Retractable Leg Section.svg";
  }
  if (lower.includes("height") || lower.includes("hi-lo")) {
    return "/images/ProductDetails/Functions/Height Adjustment.svg";
  }
  if (lower.includes("transfer") || lower.includes("shifter")) {
    return "/images/ProductDetails/Functions/Patient Transfer.svg";
  }

  return "/images/ProductDetails/Functions/Backrest Rise.svg";
};

interface ProductDetailClientProps {
  product: MedicalProduct;
  relatedProducts: MedicalProduct[];
}

export function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const { openInquiryModal } = useInquiryModal();
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const [isSliderHovered, setIsSliderHovered] = React.useState(false);
  const [isTemporarilyPaused, setIsTemporarilyPaused] = React.useState(false);
  const pauseTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const duplicatedProducts = React.useMemo(() => {
    if (relatedProducts.length === 0) return [];
    // Repeat the array to guarantee enough content for a seamless infinite loop
    return [...relatedProducts, ...relatedProducts, ...relatedProducts];
  }, [relatedProducts]);

  React.useEffect(() => {
    if (isSliderHovered || isTemporarilyPaused || !sliderRef.current || relatedProducts.length <= 1) return;

    let animationFrameId: number;
    const el = sliderRef.current;

    const step = () => {
      if (el) {
        el.scrollLeft += 0.8; // Slow, ultra-smooth continuous motion
        const originalWidth = el.scrollWidth / 3;
        if (el.scrollLeft >= originalWidth) {
          el.scrollLeft -= originalWidth;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isSliderHovered, isTemporarilyPaused, relatedProducts]);

  const handleScroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      // Temporarily pause auto-scroll marquee
      setIsTemporarilyPaused(true);
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
      pauseTimeoutRef.current = setTimeout(() => {
        setIsTemporarilyPaused(false);
      }, 5000); // Resume auto-scroll after 5 seconds

      const scrollAmount = 300;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Handle Image Gallery Slider State
  const images = React.useMemo(() => {
    if (product.gallery && product.gallery.length > 0) {
      return [product.image, ...product.gallery];
    }
    return [product.image];
  }, [product]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset active image index when product changes
  React.useEffect(() => {
    setActiveImageIndex(0);
  }, [product.id, product.slug]);

  // Ultra-Smooth Magnifier + Wheel Scroll Zoom (Flipkart / Amazon style)
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomScaleDisplay, setZoomScaleDisplay] = useState(2.2);
  const imageContainerRef = React.useRef<HTMLDivElement>(null);
  const zoomTargetRef = React.useRef<HTMLDivElement>(null);
  const zoomStateRef = React.useRef({ x: 50, y: 50, scale: 1.0, isZoomed: false });

  // Native non-passive wheel listener for smooth scroll zooming on desktop
  React.useEffect(() => {
    const container = imageContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const isOverControls = !!(e.target as HTMLElement)?.closest?.('[data-no-zoom="true"]');
      if (isOverControls) return;

      e.preventDefault();
      const delta = -e.deltaY * 0.0035;
      const newScale = Math.min(5.0, Math.max(1.0, zoomStateRef.current.scale + delta));
      zoomStateRef.current.scale = newScale;
      zoomStateRef.current.isZoomed = newScale > 1.05;
      setIsZoomed(newScale > 1.05);
      setZoomScaleDisplay(Math.round(newScale * 10) / 10);

      if (zoomTargetRef.current) {
        zoomTargetRef.current.style.transform = `scale(${newScale})`;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // Mobile Touch Gestures: Pinch to Zoom, Double Tap, and Drag to Pan
  React.useEffect(() => {
    const container = imageContainerRef.current;
    if (!container) return;

    let initialDist = 0;
    let initialScale = 1;
    let initialMidX = 50;
    let initialMidY = 50;
    let lastTapTime = 0;
    let touchStartX = 0;
    let touchStartY = 0;
    let currentPanX = 0;
    let currentPanY = 0;
    let initialPanX = 0;
    let initialPanY = 0;

    const getDistance = (t1: Touch, t2: Touch) => {
      return Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
    };

    const getMidpoint = (t1: Touch, t2: Touch) => {
      return {
        x: (t1.clientX + t2.clientX) / 2,
        y: (t1.clientY + t2.clientY) / 2,
      };
    };

    const applyTransform = (scale: number, panX = 0, panY = 0, originX = 50, originY = 50, smooth = false) => {
      if (!zoomTargetRef.current) return;
      zoomStateRef.current.scale = scale;
      const isCurrentlyZoomed = scale > 1.05;
      zoomStateRef.current.isZoomed = isCurrentlyZoomed;
      setIsZoomed(isCurrentlyZoomed);
      setZoomScaleDisplay(Math.round(scale * 10) / 10);

      zoomTargetRef.current.style.transition = smooth ? "transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)" : "none";
      zoomTargetRef.current.style.transformOrigin = `${originX}% ${originY}%`;
      zoomTargetRef.current.style.transform = `scale(${scale}) translate(${panX / scale}px, ${panY / scale}px)`;
    };

    const handleTouchStart = (e: TouchEvent) => {
      const isOverControls = !!(e.target as HTMLElement)?.closest?.('[data-no-zoom="true"]');
      if (isOverControls) return;

      if (e.touches.length === 2) {
        // Pinch start with 2 fingers
        e.preventDefault();
        initialDist = getDistance(e.touches[0], e.touches[1]);
        initialScale = zoomStateRef.current.scale;
        const rect = container.getBoundingClientRect();
        const mid = getMidpoint(e.touches[0], e.touches[1]);
        initialMidX = Math.max(0, Math.min(100, ((mid.x - rect.left) / rect.width) * 100));
        initialMidY = Math.max(0, Math.min(100, ((mid.y - rect.top) / rect.height) * 100));
      } else if (e.touches.length === 1) {
        const now = Date.now();
        const rect = container.getBoundingClientRect();
        const tapX = Math.max(0, Math.min(100, ((e.touches[0].clientX - rect.left) / rect.width) * 100));
        const tapY = Math.max(0, Math.min(100, ((e.touches[0].clientY - rect.top) / rect.height) * 100));

        // Double tap detection (< 300ms)
        if (now - lastTapTime < 300) {
          e.preventDefault();
          if (zoomStateRef.current.scale > 1.1) {
            // Zoom out back to 1.0
            currentPanX = 0;
            currentPanY = 0;
            applyTransform(1, 0, 0, 50, 50, true);
          } else {
            // Zoom in to 2.5x at double-tap location
            currentPanX = 0;
            currentPanY = 0;
            applyTransform(2.5, 0, 0, tapX, tapY, true);
          }
          lastTapTime = 0;
          return;
        }
        lastTapTime = now;

        // 1 finger touch: prepare pan if zoomed
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        initialPanX = currentPanX;
        initialPanY = currentPanY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      const isOverControls = !!(e.target as HTMLElement)?.closest?.('[data-no-zoom="true"]');
      if (isOverControls) return;

      if (e.touches.length === 2 && initialDist > 0) {
        // Pinch zoom in action
        e.preventDefault();
        const dist = getDistance(e.touches[0], e.touches[1]);
        const scaleFactor = dist / initialDist;
        const newScale = Math.min(5.0, Math.max(0.9, initialScale * scaleFactor));
        applyTransform(newScale, currentPanX, currentPanY, initialMidX, initialMidY, false);
      } else if (e.touches.length === 1 && zoomStateRef.current.scale > 1.05) {
        // Panning across zoomed image
        e.preventDefault();
        const deltaX = e.touches[0].clientX - touchStartX;
        const deltaY = e.touches[0].clientY - touchStartY;
        currentPanX = initialPanX + deltaX;
        currentPanY = initialPanY + deltaY;
        applyTransform(zoomStateRef.current.scale, currentPanX, currentPanY, initialMidX, initialMidY, false);
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (e.touches.length === 0) {
        if (zoomStateRef.current.scale < 1.05) {
          // Snap smoothly back to normal scale
          currentPanX = 0;
          currentPanY = 0;
          applyTransform(1, 0, 0, 50, 50, true);
        }
      } else if (e.touches.length === 1) {
        // Continue panning seamlessly with remaining finger
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        initialPanX = currentPanX;
        initialPanY = currentPanY;
      }
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd, { passive: false });
    container.addEventListener("touchcancel", handleTouchEnd, { passive: false });

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current || !zoomTargetRef.current) return;

    const isOverControls = !!(e.target as HTMLElement)?.closest?.('[data-no-zoom="true"]');
    if (isOverControls) {
      zoomTargetRef.current.style.transform = "scale(1)";
      zoomTargetRef.current.style.transformOrigin = "50% 50%";
      if (isZoomed) setIsZoomed(false);
      return;
    }

    if (!isZoomed) setIsZoomed(true);

    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));

    zoomStateRef.current.x = x;
    zoomStateRef.current.y = y;

    // Direct hardware-accelerated style update without triggering React re-renders
    zoomTargetRef.current.style.transition = "none";
    zoomTargetRef.current.style.transformOrigin = `${x}% ${y}%`;
    zoomTargetRef.current.style.transform = `scale(${Math.max(2.2, zoomStateRef.current.scale)})`;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const isOverControls = !!(e.target as HTMLElement)?.closest?.('[data-no-zoom="true"]');
    if (isOverControls) {
      if (zoomTargetRef.current) zoomTargetRef.current.style.transform = "scale(1)";
      setIsZoomed(false);
      return;
    }

    setIsZoomed(true);
    zoomStateRef.current.isZoomed = true;
    if (!imageContainerRef.current || !zoomTargetRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    zoomStateRef.current.x = x;
    zoomStateRef.current.y = y;
    zoomStateRef.current.scale = 2.2;
    setZoomScaleDisplay(2.2);
    zoomTargetRef.current.style.transition = "none";
    zoomTargetRef.current.style.transformOrigin = `${x}% ${y}%`;
    zoomTargetRef.current.style.transform = `scale(${zoomStateRef.current.scale})`;
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
    zoomStateRef.current.isZoomed = false;
    zoomStateRef.current.scale = 1.0;
    setZoomScaleDisplay(2.2);
    if (zoomTargetRef.current) {
      zoomTargetRef.current.style.transition = "transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)";
      zoomTargetRef.current.style.transform = "scale(1)";
      zoomTargetRef.current.style.transformOrigin = "50% 50%";
    }
  };

  // Automatically switch to the next image every 4 seconds if multiple images exist (pause when user is hovering/zooming)
  React.useEffect(() => {
    if (images.length <= 1 || isZoomed) return;
    const timer = setInterval(() => {
      setActiveImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1,
      );
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length, isZoomed]);

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Technical specs table
  const specList = React.useMemo(() => {
    if (product.specifications && Object.keys(product.specifications).length > 0) {
      return Object.entries(product.specifications);
    }
    return [];
  }, [product]);

  // Config options table
  const configs = React.useMemo(() => {
    if (product.detailedSpec && Object.keys(product.detailedSpec).length > 0) {
      return Object.entries(product.detailedSpec).map(([key, val]) => ({
        component: key,
        options: val,
      }));
    }
    return [];
  }, [product]);

  // Key features mapping
  const features =
    product.features && product.features.length > 0
      ? product.features
      : [];

  // Sidebar Categories calculation
  const categoryList = ["All Products", ...CATEGORIES.map((cat) => cat.name)];
  const categoryCounts = {
    "All Products": PRODUCTS.length,
  } as Record<string, number>;
  CATEGORIES.forEach((cat) => {
    categoryCounts[cat.name] = PRODUCTS.filter(
      (p) => p.category === cat.name,
    ).length;
  });

  const parsedGalleryItems = React.useMemo(() => {
    if (!product.galleryLabels || product.galleryLabels.length === 0) {
      return product.modelNumber ? [{ code: product.modelNumber, spec: "" }] : [];
    }
    return product.galleryLabels.map((lbl) => {
      const dashMatch = lbl.match(/^([A-Za-z0-9\s]+?)\s*-\s*(.+)$/);
      if (dashMatch) {
        const code = dashMatch[1].trim();
        let spec = dashMatch[2].trim();
        spec = spec.replace(/\s*\((Primary|Secondary)\)\s*$/i, "").trim();
        return { code, spec };
      }
      const parenMatch = lbl.match(/^([A-Za-z0-9\s]+?)\s*\((.+)\)$/);
      if (parenMatch) {
        const code = parenMatch[1].trim();
        let spec = parenMatch[2].trim();
        spec = spec.replace(/\s*\((Primary|Secondary)\)\s*$/i, "").trim();
        return { code, spec };
      }
      return { code: lbl.trim(), spec: "" };
    });
  }, [product.galleryLabels, product.modelNumber]);

  const uniqueModelCodes = React.useMemo(() => {
    const codes = parsedGalleryItems.map((item) => item.code).filter(Boolean);
    return Array.from(new Set(codes));
  }, [parsedGalleryItems]);

  const hasMultipleProductCodes = uniqueModelCodes.length > 1;
  const activeGalleryItem = parsedGalleryItems[activeImageIndex] || parsedGalleryItems[0];
  const activeSpec = hasMultipleProductCodes ? (activeGalleryItem?.spec || "") : "";

  return (
    <main 
      data-lenis-prevent
      className="flex-1 w-full max-w-full min-w-0 lg:h-[calc(100vh-140px)] lg:overflow-y-auto px-1 sm:px-2 lg:px-2 lg:pr-6 relative"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {/* Main Grid Container: Gallery & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 items-start py-2 w-full max-w-full">
        {/* Left Side: Product Gallery */}
        <FadeIn direction="left" duration={0.6} className="w-full max-w-full lg:sticky lg:top-2">
          <div className="w-full max-w-full min-w-0">
            <div
              ref={imageContainerRef}
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] max-h-[460px] overflow-hidden flex items-center justify-center group bg-white rounded-2xl border border-slate-200 shadow-sm cursor-crosshair select-none"
            >
              {/* Back Button inside the image card at top-left */}
              <Link
                href={`/products?category=${encodeURIComponent(product.category)}`}
                scroll={false}
                data-no-zoom="true"
                onMouseEnter={() => {
                  if (zoomTargetRef.current) zoomTargetRef.current.style.transform = "scale(1)";
                  setIsZoomed(false);
                }}
                className="absolute top-3.5 left-3.5 z-30 inline-flex items-center gap-1.5 bg-[#0B3C83] hover:bg-[#092D62] text-white px-3.5 py-1.5 rounded-full shadow-md hover:shadow-lg active:scale-95 transition-all duration-300 group/btn"
              >
                <ArrowLeft className="w-4 h-4 stroke-[2.5] text-white group-hover/btn:-translate-x-0.5 transition-transform" />
                <span className="text-xs font-bold font-montserrat">Back</span>
              </Link>

              {/* Active Image Indicator / Counter at top-right */}
              {images.length > 1 && (
                <div 
                  data-no-zoom="true"
                  onMouseEnter={() => {
                    if (zoomTargetRef.current) zoomTargetRef.current.style.transform = "scale(1)";
                    setIsZoomed(false);
                  }}
                  className="absolute top-3.5 right-3.5 z-30 bg-slate-900/70 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider shadow-sm border border-white/10"
                >
                  {activeImageIndex + 1} / {images.length}
                </div>
              )}

              {/* Zoom hint badge */}
              <div
                className={`absolute bottom-3.5 right-3.5 z-20 pointer-events-none flex items-center gap-1.5 bg-slate-900/70 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide shadow-sm transition-all duration-300 ${
                  isZoomed ? "opacity-90 bg-slate-900/85 text-orange-300 border border-orange-500/30" : "opacity-80"
                }`}
              >
                <ZoomIn className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>
                  {isZoomed ? (
                    <>
                      <span className="sm:hidden">{zoomScaleDisplay}x • Double tap to reset</span>
                      <span className="hidden sm:inline">{zoomScaleDisplay}x (Scroll to adjust)</span>
                    </>
                  ) : (
                    <>
                      <span className="sm:hidden">Pinch / double tap to zoom</span>
                      <span className="hidden sm:inline">Hover to zoom • Scroll to adjust</span>
                    </>
                  )}
                </span>
              </div>

              {/* Magnifier Scalable Product Image Box */}
              <div
                ref={zoomTargetRef}
                className="relative w-full h-full pointer-events-none transition-transform duration-75 ease-out will-change-transform"
                style={{
                  transformOrigin: "50% 50%",
                  transform: "scale(1)",
                }}
              >
                <SecureImage
                  src={images[activeImageIndex] || product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-4 sm:p-6"
                />
              </div>

              {/* Nav Arrows (Only if multiple images) */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    data-no-zoom="true"
                    onMouseEnter={() => {
                      if (zoomTargetRef.current) zoomTargetRef.current.style.transform = "scale(1)";
                      setIsZoomed(false);
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevImage();
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-900 transition-colors active:scale-95 z-30 p-2 bg-white/80 hover:bg-white rounded-full shadow-md cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ArrowLeft className="w-6 h-6 stroke-[2]" />
                  </button>
                  <button
                    type="button"
                    data-no-zoom="true"
                    onMouseEnter={() => {
                      if (zoomTargetRef.current) zoomTargetRef.current.style.transform = "scale(1)";
                      setIsZoomed(false);
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextImage();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-900 transition-colors active:scale-95 z-30 p-2 bg-white/80 hover:bg-white rounded-full shadow-md cursor-pointer"
                    aria-label="Next image"
                  >
                    <ArrowRight className="w-6 h-6 stroke-[2]" />
                  </button>

                  {/* Carousel Indicator Dots */}
                  <div 
                    data-no-zoom="true"
                    onMouseEnter={() => {
                      if (zoomTargetRef.current) zoomTargetRef.current.style.transform = "scale(1)";
                      setIsZoomed(false);
                    }}
                    className="absolute bottom-3.5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-slate-900/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-sm"
                  >
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        data-no-zoom="true"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex(idx);
                        }}
                        className={`transition-all duration-300 rounded-full cursor-pointer ${
                          idx === activeImageIndex
                            ? "w-5 h-2 bg-[#E87325]"
                            : "w-2 h-2 bg-white/60 hover:bg-white"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </FadeIn>

        {/* Right Side: Product Details & Actions */}
        <FadeIn direction="right" duration={0.6} delay={0.15} className="w-full max-w-full min-w-0">
          <div className="flex flex-col justify-between h-full space-y-6 w-full max-w-full min-w-0 lg:pr-4">
            <div className="space-y-6 w-full max-w-full">
              <div className="space-y-4 w-full max-w-full">
                <div className="space-y-1.5 text-left">
                  <div className="inline-flex items-center gap-2 text-base font-black tracking-wider text-[#0B3C83] uppercase font-montserrat">
                    <Bed className="w-4 h-4 text-[#E87325] stroke-[2.5]" />
                    <span>{product.category}</span>
                  </div>
                  <div className="w-16 h-[3px] bg-[#E87325] rounded-full" />
                </div>
                
                <h1 className="text-2xl md:text-[2rem] lg:text-[2.25rem] font-bold text-[#0B3C83] font-montserrat tracking-tight leading-tight break-words">
                  {product.name}
                  {activeSpec && (
                    <span className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-500 ml-2 font-montserrat inline-block">
                      ({activeSpec})
                    </span>
                  )}
                </h1>

                {/* Product Code Tag: Multi-Code if distinct codes exist, Single Code otherwise */}
                {hasMultipleProductCodes ? (
                  <div className="flex flex-wrap items-center pt-0.5 max-w-full">
                    <div className="inline-flex flex-wrap items-stretch rounded-md border border-slate-200 bg-white overflow-hidden shadow-2xs text-xs font-mono max-w-full">
                      <span className="bg-white text-slate-500 px-2.5 py-1 text-[10px] font-bold font-sans tracking-widest uppercase flex items-center border-r border-slate-200 shrink-0">
                        PRODUCT CODE
                      </span>
                      {parsedGalleryItems.map((item, idx) => {
                        const isActive = idx === activeImageIndex;
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              if (images.length > 1) {
                                setActiveImageIndex(idx);
                              }
                            }}
                            className={`px-3 py-1 font-bold tracking-wider text-xs flex items-center transition-all ${
                              idx > 0 ? "border-l border-slate-200" : ""
                            } ${
                              images.length > 1 ? "cursor-pointer" : "cursor-default"
                            } ${
                              isActive
                                ? "bg-[#0B3C83] text-white shadow-xs font-extrabold"
                                : "bg-white text-slate-500 hover:bg-slate-50 hover:text-[#0B3C83]"
                            }`}
                            title={item.spec ? `${item.code} (${item.spec})` : item.code}
                          >
                            {item.code}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  (product.modelNumber || uniqueModelCodes[0]) && (
                    <div className="flex items-center pt-0.5 max-w-full">
                      <div className="inline-flex items-stretch rounded-md border border-slate-200 bg-white overflow-hidden shadow-2xs text-xs font-mono max-w-full">
                        <span className="bg-[#0B3C83] text-white px-2.5 py-1 text-[10px] font-bold font-sans tracking-widest uppercase flex items-center shrink-0">
                          PRODUCT CODE
                        </span>
                        <span className="px-3 py-1 font-bold text-[#0B3C83] tracking-wider text-xs bg-slate-50 flex items-center border-l border-slate-200">
                          {product.modelNumber || uniqueModelCodes[0]}
                        </span>
                      </div>
                    </div>
                  )
                )}

                {product.needsDetails && (
                  <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 border border-amber-200/80 px-3.5 py-1.5 rounded-lg font-bold text-xs uppercase tracking-wider my-2 font-montserrat w-fit">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0" />
                    <span>Specifications Under Update</span>
                  </div>
                )}
              </div>

              {/* Product Overview Description */}
              <div className="space-y-3 w-full max-w-full">
                <span className="text-sm font-bold text-[#E87325] uppercase tracking-wider block">
                  Product Overview
                </span>
                <div className="space-y-4 text-slate-600 text-sm sm:text-base md:text-[15px] leading-relaxed max-w-full break-words font-medium">
                  {product.description ? (
                    product.description.split('\n').filter(p => p.trim() !== "").map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))
                  ) : (
                    <>
                      <p>
                        The Mathurams {product.name} is engineered to provide superior
                        patient care. Manufactured using premium materials, it offers
                        exceptional durability, smooth operation, and long-lasting performance
                        in demanding healthcare environments.
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Functions Section inside Right Column */}
              {product.functions && product.functions.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-slate-100 font-montserrat w-full max-w-full">
                  <div className="space-y-1 text-left">
                    <div className="flex items-center gap-2">
                      <Settings className="w-4 h-4 text-[#E87325] stroke-[2.5]" />
                      <span className="text-xs md:text-sm font-black text-[#092347] uppercase tracking-wider">
                        FUNCTIONS
                      </span>
                    </div>
                    <div className="w-12 h-[2.5px] bg-[#E87325] rounded-full" />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 items-start pt-1 w-full">
                    {product.functions.map((funcStr, idx) => {
                      const parts = funcStr.split("—").map((p) => p.trim());
                      const titlePart = parts[0] || funcStr;
                      const valuePart = parts[1] || "";
                      const cleanTitle = titlePart.replace(/^[①②③④⑤⑥⑦⑧\d\s\.\-]+/, "").trim();
                      const iconPath = getFunctionIconPath(cleanTitle);

                      return (
                        <div key={idx} className="flex flex-col items-center text-center group/func min-w-0">
                          {/* SVG Function Illustration Image */}
                          <div className="relative w-full h-14 sm:h-16 flex items-center justify-center overflow-hidden">
                            <Image
                              src={iconPath}
                              alt={cleanTitle}
                              fill
                              className="object-contain p-0.5 group-hover/func:scale-105 transition-transform duration-300"
                            />
                          </div>

                          {/* Small Orange Divider Line */}
                          <div className="w-4 h-[2px] bg-[#E87325] rounded-full my-1 shrink-0" />

                          {/* Function Text Below Line */}
                          <div className="text-center w-full px-0.5">
                            <p className="text-[10px] sm:text-[11px] text-slate-600 font-medium leading-tight">
                              {cleanTitle}
                            </p>
                            {valuePart && (
                              <p className="font-medium text-[#092347] text-[10px] sm:text-[11px] mt-0.5 leading-tight">
                                {valuePart}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Action buttons row */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100 w-full max-w-full">
              <button
                onClick={() => openInquiryModal(product)}
                className="w-full sm:flex-1 bg-[#0B3C83] hover:bg-[#092D62] text-white py-3.5 px-4 rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 uppercase tracking-wider"
              >
                <FileText className="w-4 h-4 text-white shrink-0" />
                <span>REQUEST A QUOTE</span>
              </button>
              <a
                href="https://wa.me/919842212345"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 block"
              >
                <button className="w-full bg-[#25D366] hover:bg-[#1ebd59] text-white py-3.5 px-4 rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 uppercase tracking-wider">
                  <svg
                    className="w-4 h-4 fill-white shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WHATSAPP ENQUIRY</span>
                </button>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Key Features Section */}
      {features.length > 0 && (
        <div className="space-y-6 pt-8 border-t border-slate-100 font-montserrat w-full max-w-full">
          <FadeIn direction="up" duration={0.6}>
            <div className="space-y-2 text-left">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2.5">
                <div className="relative w-5 h-5 shrink-0">
                  <Image
                    src="/images/ProductDetails/keyFeatures.webp"
                    alt="star icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm md:text-base font-black text-[#092347] uppercase tracking-wider">
                  KEY FEATURES
                </span>
              </div>
              <div className="w-16 h-[3px] bg-[#E87325] rounded-full" />
            </div>
            <p className="text-slate-700 text-sm md:text-base font-medium leading-relaxed max-w-2xl">
              Purpose-built features designed for patient comfort, caregiver
              convenience, and dependable hospital use.
            </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
            {features.map((item, idx) => {
              return (
                <FadeIn key={idx} direction="up" delay={idx * 0.04} duration={0.4}>
                  <div
                    className="group/card flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs hover:shadow-md hover:-translate-y-0.5 hover:border-[#E87325]/30 transition-all duration-300 min-h-[72px] text-left"
                  >
                    <span className="w-2.5 h-2.5 rotate-45 rounded-[1px] bg-[#E87325] shrink-0 group-hover/card:scale-125 transition-transform duration-300" />
                    <div className="flex-1 min-w-0 text-left">
                      <p className="text-[#092347] text-xs md:text-sm font-medium leading-snug">
                        {item}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      )}

      {/* Specifications & Configurations Section */}
      {(specList.length > 0 || configs.length > 0) && (
        <div className={`grid grid-cols-1 ${configs.length > 0 && specList.length > 0 ? "lg:grid-cols-2" : "lg:grid-cols-1 max-w-4xl"} gap-6 sm:gap-8 pt-8 border-t border-slate-100 font-montserrat pb-8 w-full max-w-full`}>
          {/* Technical Specifications */}
          {specList.length > 0 && (
            <FadeIn direction="up" duration={0.6} delay={0.05} className="h-full w-full max-w-full min-w-0">
              <div className="flex flex-col h-full space-y-4 w-full max-w-full">
                <div className="space-y-2 text-left shrink-0">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#E87325] stroke-[2.5]" />
                      <span className="text-sm md:text-base font-black text-[#092347] uppercase tracking-wider">
                        TECHNICAL SPECIFICATIONS
                      </span>
                    </div>
                    <div className="w-16 h-[3px] bg-[#E87325] rounded-full" />
                  </div>
                  <p className="text-slate-700 text-xs md:text-[16px] font-medium leading-relaxed">
                    Detailed engineering specifications for reliable performance,
                    safety, and long-term durability.
                  </p>
                </div>

                <div className="flex-1 border border-slate-200 rounded-2xl overflow-hidden shadow-2xs w-full">
                  <div className="w-full overflow-x-auto">
                    <table className="w-full border-collapse min-w-full">
                      <thead>
                        <tr className="bg-[#092347] text-white">
                          <th className="py-3 px-4 sm:py-4 sm:px-6 text-left text-xs font-black tracking-wider uppercase border-r border-white/20 w-[35%] sm:w-[30%]">
                            Specification
                          </th>
                          <th className="py-3 px-4 sm:py-4 sm:px-6 text-left text-xs font-black tracking-wider uppercase">
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {specList.map(([key, val]) => (
                          <tr
                            key={key}
                            className="border-b border-slate-200 last:border-b-0 even:bg-blue-50 hover:bg-blue-50/50 transition-colors"
                          >
                            <td className="py-2.5 px-4 sm:py-3.5 sm:px-6 text-[#092347] font-bold text-xs md:text-sm border-r border-slate-200/80">
                              {key}
                            </td>
                            <td className="py-2.5 px-4 sm:py-3.5 sm:px-6 text-slate-600 font-medium text-xs md:text-sm">
                              {val}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Configurations Options */}
          {configs.length > 0 && (
            <FadeIn direction="up" duration={0.6} delay={0.15} className="h-full w-full max-w-full min-w-0">
              <div className="flex flex-col h-full space-y-4 w-full max-w-full">
                <div className="space-y-2 text-left shrink-0">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <Settings className="w-5 h-5 text-[#E87325] stroke-[2.5]" />
                      <span className="text-sm md:text-base font-black text-[#092347] uppercase tracking-wider">
                        CONFIGURATIONS OPTIONS
                      </span>
                    </div>
                    <div className="w-16 h-[3px] bg-[#E87325] rounded-full" />
                  </div>
                  <p className="text-slate-700 text-xs md:text-[16px] font-medium leading-relaxed">
                    Flexible component, finish, and accessory options to meet diverse
                    healthcare requirements.
                  </p>
                </div>

                <div className="flex-1 border border-slate-200 rounded-2xl overflow-hidden shadow-2xs w-full">
                  <div className="w-full overflow-x-auto">
                    <table className="w-full border-collapse min-w-full">
                      <thead>
                        <tr className="bg-[#092347] text-white">
                          <th className="py-3 px-4 sm:py-5 sm:px-8 text-left text-xs font-black tracking-wider uppercase border-r border-white/20 w-[35%] sm:w-[28%]">
                            Component
                          </th>
                          <th className="py-3 px-4 sm:py-5 sm:px-8 text-left text-xs font-black tracking-wider uppercase">
                            Available Options
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {configs.map((cfg, idx) => (
                          <tr
                            key={idx}
                            className="border-b border-slate-200 last:border-b-0 even:bg-blue-50 hover:bg-blue-50/50 transition-colors"
                          >
                            <td className="py-2.5 px-4 sm:py-5 sm:px-8 text-[#092347] font-bold text-xs md:text-sm border-r border-slate-200/80">
                              {cfg.component}
                            </td>
                            <td className="py-2.5 px-4 sm:py-5 sm:px-8 text-slate-600 font-medium text-xs md:text-sm">
                              {cfg.options}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      )}

      {/* Customization Callout Banner */}
      {product.customizationNote && (
        <FadeIn direction="up" duration={0.5} className="pb-6">
          <div className="flex items-center gap-3.5 bg-gradient-to-r from-amber-50/90 via-amber-50/50 to-orange-50/60 border border-amber-200/90 text-[#092347] px-5 py-4 rounded-2xl shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-[#E87325]/10 border border-[#E87325]/25 flex items-center justify-center shrink-0 shadow-2xs">
              <Settings className="w-5 h-5 text-[#E87325] stroke-[2.5]" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#E87325] block leading-tight">
                Customization Option Available
              </span>
              <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5 leading-snug">
                {product.customizationNote}
              </p>
            </div>
          </div>
        </FadeIn>
      )}

      {/* Related Products Section */}
      <div className="space-y-6 pt-8 border-t border-slate-100 font-montserrat pb-8">
        <FadeIn direction="up" duration={0.6}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="space-y-2 text-left">
              <h2 className="text-[#E87325] text-2xl md:text-3xl font-black tracking-tight">
                Related Products
              </h2>
              <p className="text-slate-500 text-sm font-semibold leading-relaxed">
                Explore premium hospital furniture and medical equipment under this category.
              </p>
            </div>
            
            {/* Carousel Navigation Buttons */}
            {relatedProducts.length > 0 && (
              <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 pb-1">
                <button
                  onClick={() => handleScroll("left")}
                  className="bg-white border border-slate-200 hover:border-[#E87325] text-slate-700 hover:text-[#E87325] w-9 h-9 rounded-full shadow-2xs hover:shadow-sm flex items-center justify-center transition-all active:scale-90"
                  title="Scroll Left"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                </button>
                <button
                  onClick={() => handleScroll("right")}
                  className="bg-white border border-slate-200 hover:border-[#E87325] text-slate-700 hover:text-[#E87325] w-9 h-9 rounded-full shadow-2xs hover:shadow-sm flex items-center justify-center transition-all active:scale-90"
                  title="Scroll Right"
                >
                  <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>
            )}
          </div>
        </FadeIn>

        {/* Smooth Scrolling Carousel */}
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsSliderHovered(true)}
          onMouseLeave={() => setIsSliderHovered(false)}
          onWheel={(e) => {
            // Always let vertical scroll pass through to the page
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
              window.scrollBy({ top: e.deltaY, behavior: "auto" });
            }
          }}
          className="flex gap-6 overflow-x-auto py-2 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full"
        >
          {duplicatedProducts.map((p, idx) => (
            <div key={`${p.id}-dup-${idx}`} className="w-[280px] shrink-0 h-full">
              <div className="group/related bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md hover:-translate-y-1 hover:border-[#E87325]/30 transition-all duration-300 flex flex-col justify-between p-3.5 cursor-pointer h-[400px]">
                <div className="relative aspect-[1.3/1] w-full bg-white rounded-xl overflow-hidden mb-3.5 border border-slate-100">
                  <SecureImage
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="240px"
                    className="object-cover transition-transform duration-500 group-hover/related:scale-105"
                  />
                </div>
                <div className="space-y-1.5 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="text-[#092347] font-black text-sm md:text-base leading-tight whitespace-normal break-words">
                      {p.name}
                    </h3>
                    <p className="text-slate-500 text-[11px] font-medium leading-normal line-clamp-3">
                      {p.description || "Designed for patient comfort, safety, and efficient caregiving with a durable and ergonomic structure."}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 pt-3 border-t border-slate-100 mt-3.5 w-full">
                    <Link href={`/products/${p.slug}`} scroll={false} className="w-full">
                      <button className="w-full border border-[#0B3C83] text-[#0B3C83] hover:bg-[#0B3C83]/5 rounded-lg py-2 px-1 text-[10px] md:text-xs font-bold transition-all text-center whitespace-nowrap">
                        View Details
                      </button>
                    </Link>
                    <button
                      onClick={() => openInquiryModal(p)}
                      className="w-full bg-[#E87325] hover:bg-[#D0621B] text-white rounded-lg py-2 px-1 text-[10px] md:text-xs font-bold transition-all text-center flex items-center justify-center gap-1 active:scale-95 whitespace-nowrap"
                    >
                      <span>Send Enquiry</span>
                      <ChevronRight className="w-3 h-3 text-white shrink-0" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reliable Bottom SVG Banner Section */}
      <FadeIn direction="up" duration={0.7} delay={0.2}>
        <div
          className="mt-10 mb-8 sm:mt-12 sm:mb-10"
          onWheel={(e) => {
            // Always pass scroll through to the page so the user can reach the footer
            window.scrollBy({ top: e.deltaY, behavior: "auto" });
          }}
        >
          {/* Desktop & Tablet View (Exact SVG Banner with native button scaling and zero misalignment) */}
          <ProductBottomBanner
            onQuoteClick={() => openInquiryModal(product)}
            className="hidden sm:block"
          />

          {/* Mobile View (< 640px) - Responsive & Touch-Friendly (Banner does not scale on hover) */}
          <div className="sm:hidden relative rounded-2xl bg-[#04254B] overflow-hidden p-6 shadow-xl border border-blue-950/50 font-montserrat">
            {/* SVG Background - Static on hover (No zoom) */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/ProductDetails/bottomBanner.svg"
                alt="Healthcare Equipment Banner"
                fill
                sizes="100vw"
                className="object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#04254B]/95 via-[#04254B]/85 to-[#04254B]/95" />
            </div>

            {/* Mobile Text Contents with AOS */}
            <div className="relative z-10 space-y-3.5 text-left">
              {/* Top Title */}
              <FadeIn direction="up" delay={0.15}>
                <h2 className="text-white text-lg font-black tracking-tight leading-snug">
                  Looking for a Reliable {product.category} For Your Healthcare Facility?
                </h2>
              </FadeIn>

              {/* Below lines fade in one by one */}
              <FadeIn direction="up" delay={0.25}>
                <p className="text-slate-300 text-xs font-medium leading-relaxed">
                  Our team of specialists is ready to assist you with product selection, customization options, pricing, and project requirements.
                </p>
              </FadeIn>

              {/* Mobile Interactive Buttons: One from left, one from right, only buttons scale on hover */}
              <div className="flex flex-col gap-2.5 pt-2">
                <FadeIn direction="left" delay={0.35}>
                  <button
                    onClick={() => openInquiryModal(product)}
                    className="w-full bg-[#E87325] hover:bg-[#D0621B] text-white py-3 px-5 rounded-xl font-bold text-xs shadow-md transition-transform duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <FileText className="w-4 h-4 text-white" />
                    REQUEST A QUOTE
                  </button>
                </FadeIn>
                <FadeIn direction="right" delay={0.35}>
                  <a
                    href="https://wa.me/919842212345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full border border-white/60 hover:bg-white/10 text-white py-3 px-5 rounded-xl font-bold text-xs transition-transform duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wider text-center"
                  >
                    <svg className="w-4 h-4 fill-white shrink-0 mr-2 inline" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WHATSAPP ENQUIRY
                  </a>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
