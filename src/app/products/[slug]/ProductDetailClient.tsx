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
} from "lucide-react";
import { MedicalProduct, PRODUCTS, CATEGORIES } from "@/lib/data";
import { useInquiryModal } from "@/components/ui/InquiryModalContext";
import { ProductCard } from "@/components/ui/ProductCard";
import { FadeIn } from "@/components/ui/FadeIn";

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

  // Handle Image Slider State
  const images = [
    product.image,
    ...(product.gallery || []),
    product.image,
    product.image,
    product.image,
    product.image,
  ].slice(0, 6); // Fallback to ensure we have enough thumbnails

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Dynamic specification variants based on category or fallback
  const variants = React.useMemo(() => {
    if (product.specificationVariants && product.specificationVariants.length > 0) {
      return product.specificationVariants.map((v) => v.name);
    }
    return [];
  }, [product]);

  const [selectedVariant, setSelectedVariant] = useState(
    variants[0] || "Standard Configuration",
  );

  React.useEffect(() => {
    setSelectedVariant(variants[0] || "Standard Configuration");
  }, [variants]);

  // Automatically switch to the next image every 4 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1,
      );
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

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
    if (product.needsDetails) {
      return [["Status", "NEED TO ADD DETAILS"]];
    }
    return [
      ["Overall Dimension", "Standard Hospital Specification"],
      ["Material", "Mild Steel (MS) / Stainless Steel (SS)"],
      ["Finish", "Epoxy Powder Coating / SS Finish"],
    ];
  }, [product]);

  // Config options table
  const configs = React.useMemo(() => {
    if (product.detailedSpec && Object.keys(product.detailedSpec).length > 0) {
      return Object.entries(product.detailedSpec).map(([key, val]) => ({
        component: key,
        options: val,
      }));
    }
    if (product.needsDetails) {
      return [{ component: "Status", options: "NEED TO ADD DETAILS" }];
    }
    return [
      {
        component: "Material & Finish",
        options: "MS / SS with Epoxy Powder Coating",
      },
      {
        component: "Customisation",
        options: "Size and mounting can be customized as per requirement",
      },
    ];
  }, [product]);

  // Key features mapping
  const features =
    product.features && product.features.length > 0
      ? product.features
      : [
          "Precision crank system for smooth patient adjustment.",
          "Robust powder coated mild steel or stainless steel structure.",
          "Modular ABS head and foot boards for easy sterilisation.",
          "Collapsible side rails to ensure patient safety and security.",
          "Smooth rolling heavy duty castors with diagonal brake system.",
          "Designed and tested for high loading hospital environments.",
        ];

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

  return (
    <main 
      className="flex-1 min-w-0 lg:h-[calc(100vh-140px)] lg:overflow-y-auto pr-2 relative"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {/* Main Grid Container: Gallery & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch py-2">
        {/* Left Side: Product Gallery */}
        <FadeIn direction="left" duration={0.6} className="h-full">
          <div className="flex flex-col justify-between space-y-4 h-full min-w-0">
          <div className="pt-1">
            <Link
              href={`/products?category=${encodeURIComponent(product.category)}`}
              scroll={false}
              className="w-8 h-8 rounded-full bg-[#E86D24] flex items-center justify-center shadow-md shadow-orange-500/20 hover:bg-orange-600 hover:shadow-lg active:scale-95 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Silver running shine beam effect */}
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none animate-silver-shine" />
              
              <ChevronLeft className="relative z-10 w-5 h-5 text-white bg-white/20 group-hover:bg-white group-hover:text-[#E86D24] rounded-full p-[2px] transition-all duration-300 group-hover:-translate-x-0.5" />
            </Link>
          </div>

          <div className="relative flex-1 min-h-[300px] lg:min-h-0 w-full overflow-hidden flex items-center justify-center group">
            <Image
              src={images[activeImageIndex]}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-4 transition-transform duration-300"
            />

            {/* Nav Arrows */}
            <button
              onClick={handlePrevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-800 transition-colors active:scale-95 z-10 p-2"
            >
              <ArrowLeft className="w-7 h-7 stroke-[1.5]" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-800 transition-colors active:scale-95 z-10 p-2"
            >
              <ArrowRight className="w-7 h-7 stroke-[1.5]" />
            </button>
          </div>

          {/* Thumbnail row */}
          <div className="flex gap-2.5 justify-between py-1 h-[76px] shrink-0">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative flex-1 h-full rounded-xl border-2 overflow-hidden bg-white shrink-0 transition-all ${
                  idx === activeImageIndex
                    ? "border-[#E87325] scale-[1.02] shadow-sm"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.name} thumbnail ${idx + 1}`}
                  fill
                  sizes="120px"
                  className="object-contain p-1"
                />
              </button>
            ))}
          </div>
        </div>
        </FadeIn>

        {/* Right Side: Product Details & Actions */}
        <FadeIn direction="right" duration={0.6} delay={0.15}>
          <div className="flex flex-col justify-between h-full space-y-6 min-w-0">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-1.5 text-left">
                <div className="inline-flex items-center gap-2 text-base font-black tracking-wider text-[#0B3C83] uppercase font-montserrat">
                  <Bed className="w-4 h-4 text-[#E87325] stroke-[2.5]" />
                  <span>{product.category}</span>
                </div>
                <div className="w-16 h-[3px] bg-[#E87325] rounded-full" />
              </div>
              <h1 className="text-2xl md:text-[2rem] lg:text-[2.25rem] font-semibold text-[#0B3C83]  font-montserrat">
                {product.name}
              </h1>
              {product.needsDetails && (
                <div className="bg-red-50/90 border border-red-200/90 rounded-2xl p-4 md:p-5 shadow-xs my-3.5 font-montserrat flex flex-col gap-3 text-left transition-all">
                  {/* Tag at Top */}
                  <div className="inline-flex items-center gap-1.5 bg-red-600 text-white font-black text-xs px-3 py-1.5 rounded-lg tracking-wider uppercase shrink-0 shadow-sm shadow-red-600/20 w-fit">
                    <AlertTriangle className="w-4 h-4 text-white stroke-[2.5]" />
                    <span>INTIMATION ALERT</span>
                  </div>
                  {/* Contents Below */}
                  <div className="space-y-1 text-left">
                    <p className="font-extrabold text-sm md:text-[15px] text-red-950 tracking-wide uppercase">
                      NEED TO ADD DETAILS
                    </p>
                    <p className="text-xs md:text-sm text-red-700/90 font-semibold leading-relaxed">
                      Technical specifications & model details for this item are pending documentation.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Variant Selector Pills */}
            {variants.length > 0 && (
              <div className="space-y-2">
                <span className="text-sm font-bold text-[#E87325] uppercase tracking-wider block">
                  Specification Variant
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {variants.map((variant) => {
                    const isActive = selectedVariant === variant;
                    return (
                      <button
                        key={variant}
                        onClick={() => setSelectedVariant(variant)}
                        className={`px-4 py-2.5 rounded-xl text-sm font-bold border transition-all flex items-center gap-1.5 ${
                          isActive
                            ? "bg-white border-slate-800 text-slate-800 shadow-sm"
                            : "bg-white border-slate-200 text-slate-400 hover:border-slate-300"
                        }`}
                      >
                        <span>{variant}</span>
                        <span
                          className={`text-[11px] ${isActive ? "text-slate-600" : "text-slate-300"}`}
                        >
                          ⓘ
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}



            {/* Product Overview Description */}
            <div className="space-y-3">
              <span className="text-sm font-bold text-[#E87325] uppercase tracking-wider block">
                Product Overview
              </span>
              <div className="space-y-5 text-slate-600 text-base md:text-[15px] leading-relaxed max-w-2xl font-medium">
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
          </div>

          {/* Action buttons row */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100">
            <button
              onClick={() => openInquiryModal(product)}
              className="flex-1 bg-[#0B3C83] hover:bg-[#092D62] text-white py-3.5 px-6 rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 uppercase"
            >
              <FileText className="w-4 h-4 text-white" />
              REQUEST A QUOTE
            </button>
            <a
              href="https://wa.me/919842212345"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <button className="w-full bg-[#25D366] hover:bg-[#1ebd59] text-white py-3.5 px-6 rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 uppercase">
                <svg
                  className="w-4 h-4 fill-white shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WHATSAPP ENQUIRY
              </button>
            </a>
          </div>
        </div>
      </FadeIn>
    </div>

      {/* Functions Section */}
      {product.functions && product.functions.length > 0 && (
        <div className="space-y-6 pt-8 border-t border-slate-100 font-montserrat">
          <FadeIn direction="up" duration={0.6}>
            <div className="space-y-2 text-left">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2.5">
                  <Settings className="w-5 h-5 text-[#E87325] stroke-[2.5]" />
                  <span className="text-sm md:text-base font-black text-[#092347] uppercase tracking-wider">
                    FUNCTIONS
                  </span>
                </div>
                <div className="w-16 h-[3px] bg-[#E87325] rounded-full" />
              </div>
              <p className="text-slate-500 text-sm md:text-base font-semibold leading-relaxed max-w-2xl">
                Multi-positional motorized and manual functions engineered for precise patient positioning.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {product.functions.map((funcStr, idx) => {
              const parts = funcStr.split("—").map((p) => p.trim());
              const titlePart = parts[0] || funcStr;
              const valuePart = parts[1] || "";
              const numberMatch = titlePart.match(/^[①②③④⑤⑥⑦⑧\d]+/);
              const numberSymbol = numberMatch ? numberMatch[0] : `${idx + 1}`;
              const cleanTitle = titlePart.replace(/^[①②③④⑤⑥⑦⑧\d\s\.\-]+/, "").trim();

              return (
                <FadeIn key={idx} direction="up" delay={idx * 0.04} duration={0.4}>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs hover:shadow-md hover:-translate-y-0.5 hover:border-[#0B3C83]/30 transition-all duration-300 flex flex-col justify-between h-full min-h-[96px] text-left">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="w-7 h-7 bg-[#0B3C83]/10 text-[#0B3C83] rounded-full flex items-center justify-center font-black text-xs shrink-0">
                        {numberSymbol}
                      </span>
                      <span className="text-[11px] font-bold text-[#E87325] bg-orange-50 px-2 py-0.5 rounded-md uppercase tracking-wide shrink-0">
                        Function
                      </span>
                    </div>
                    <div>
                      <p className="text-[#092347] font-extrabold text-sm md:text-[15px] leading-tight">
                        {cleanTitle}
                      </p>
                      {valuePart && (
                        <p className="text-slate-600 font-semibold text-xs md:text-sm mt-1 bg-slate-50 border border-slate-100 px-2 py-1 rounded-md inline-block">
                          {valuePart}
                        </p>
                      )}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      )}

      {/* Key Features Section */}
      <div className="space-y-6 pt-8 border-t border-slate-100 font-montserrat">
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
          <p className="text-slate-500 text-sm md:text-base font-semibold leading-relaxed max-w-2xl">
            Purpose-built features designed for patient comfort, caregiver
            convenience, and dependable hospital use.
          </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((item, idx) => {
            const featureIcons = [
              "/images/ProductDetails/image 86.webp",
              "/images/ProductDetails/image 87.webp",
              "/images/ProductDetails/image 88.webp",
              "/images/ProductDetails/image 89.webp",
              "/images/ProductDetails/image 90.webp",
              "/images/ProductDetails/image 91.webp",
              "/images/ProductDetails/image 92.webp",
              "/images/ProductDetails/image 93.webp",
              "/images/ProductDetails/image 94.webp",
              "/images/ProductDetails/image 95.webp",
              "/images/ProductDetails/image 96.webp",
              "/images/ProductDetails/image 97.webp",
              "/images/ProductDetails/image 98.webp",
              "/images/ProductDetails/image 99.webp"
            ];
            const iconSrc = featureIcons[idx % featureIcons.length];
            return (
              <FadeIn key={idx} direction="up" delay={idx * 0.04} duration={0.4}>
                <div
                  className="group/card flex items-center gap-3.5 bg-white p-3.5 md:p-4 rounded-xl border border-slate-200 shadow-2xs hover:shadow-md hover:-translate-y-1 hover:border-[#E87325]/30 transition-all duration-300 min-h-[84px] cursor-pointer"
                >
                  <div className="relative w-12 h-10 shrink-0 overflow-hidden">
                    <Image
                      src={iconSrc}
                      alt={item}
                      fill
                      className="object-contain transition-transform duration-300 group-hover/card:scale-110"
                    />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <p className="text-[#092347] text-xs md:text-sm font-bold leading-snug">
                      {item}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>

      {/* Specifications & Configurations Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-slate-100 font-montserrat pb-8">
        {/* Technical Specifications */}
        <FadeIn direction="up" duration={0.6} delay={0.05} className="h-full">
          <div className="flex flex-col h-full space-y-4">
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
              <p className="text-slate-500 text-xs md:text-[13px] font-semibold leading-relaxed">
                Detailed engineering specifications for reliable performance,
                safety, and long-term durability.
              </p>
            </div>

            <div className="flex-1 border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
              <table className="w-full h-full border-collapse">
                <thead>
                  <tr className="bg-[#092347] text-white">
                    <th className="py-4 px-6 text-left text-xs font-black tracking-wider uppercase border-r border-white/20 w-[30%]">
                      Specification
                    </th>
                    <th className="py-4 px-6 text-left text-xs font-black tracking-wider uppercase">
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
                      <td className="py-3.5 px-6 text-[#092347] font-bold text-xs md:text-sm border-r border-slate-200/80">
                        {key}
                      </td>
                      <td className="py-3.5 px-6 text-slate-600 font-medium text-xs md:text-sm">
                        {val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        {/* Configurations Options */}
        <FadeIn direction="up" duration={0.6} delay={0.15} className="h-full">
          <div className="flex flex-col h-full space-y-4">
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
              <p className="text-slate-500 text-xs md:text-[13px] font-semibold leading-relaxed">
                Flexible component, finish, and accessory options to meet diverse
                healthcare requirements.
              </p>
            </div>

            <div className="flex-1 border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
              <table className="w-full h-full border-collapse">
                <thead>
                  <tr className="bg-[#092347] text-white">
                    <th className="py-5 px-8 text-left text-xs font-black tracking-wider uppercase border-r border-white/20 w-[28%]">
                      Component
                    </th>
                    <th className="py-5 px-8 text-left text-xs font-black tracking-wider uppercase">
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
                      <td className="py-5 px-8 text-[#092347] font-bold text-xs md:text-sm border-r border-slate-200/80">
                        {cfg.component}
                      </td>
                      <td className="py-5 px-8 text-slate-600 font-medium text-xs md:text-sm">
                        {cfg.options}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Reliable Bottom Banner Section */}
      <FadeIn direction="up" duration={0.6} delay={0.25}>
        <div className="relative rounded-2xl bg-[#092347] overflow-hidden p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md mt-8 border border-blue-950/60 font-montserrat">
          {/* Banner Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/ProductDetails/bottomBanner.webp"
              alt="bottom banner background"
              fill
              sizes="100vw"
              className="object-cover opacity-25"
            />
            {/* Overlay to ensure readability */}
            <div className="absolute inset-0 bg-[#092347]/50" />
          </div>

          <div className="relative z-10 space-y-2 text-center md:text-left flex-1">
            <h2 className="text-white text-xl md:text-2xl lg:text-[26px] font-extrabold tracking-tight leading-snug">
              Looking for a Reliable {product.category} For Your Healthcare
              Facility?
            </h2>
            <p className="text-slate-200 text-xs md:text-sm font-medium leading-relaxed max-w-[550px] mx-auto md:mx-0">
              Our team is ready to assist you with product selection,
              customization, pricing, and project requirements.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap gap-4 shrink-0 justify-center">
            <button
              onClick={() => openInquiryModal(product)}
              className="bg-[#E87325] hover:bg-[#D0621B] text-white py-3.5 px-6 rounded-xl font-bold text-xs shadow-md transition-all active:scale-95 flex items-center gap-2 uppercase tracking-wide"
            >
              <FileText className="w-4 h-4 text-white" />
              REQUEST A QUOTE
            </button>
            <a
              href="https://wa.me/919842212345"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/60 hover:bg-white/10 text-white py-3.5 px-6 rounded-xl font-bold text-xs transition-all flex items-center gap-2 uppercase tracking-wide"
            >
              <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WHATSAPP ENQUIRY
            </a>
          </div>
        </div>
      </FadeIn>

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
          className="flex gap-6 overflow-x-auto py-2 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full"
        >
          {duplicatedProducts.map((p, idx) => (
            <div key={`${p.id}-dup-${idx}`} className="w-[280px] shrink-0 h-full">
              <div className="group/related bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md hover:-translate-y-1 hover:border-[#E87325]/30 transition-all duration-300 flex flex-col justify-between p-3.5 cursor-pointer h-[400px]">
                <div className="relative aspect-[1.3/1] w-full bg-slate-50/50 rounded-xl overflow-hidden mb-3.5">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="240px"
                    className="object-contain p-2 transition-transform duration-500 group-hover/related:scale-105"
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
    </main>
  );
}
