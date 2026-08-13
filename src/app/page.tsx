'use client';

import React, { useState } from "react";
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
  Users,
  Factory,
  Sparkles,
  Building2,
  Bed,
  ShoppingBag,
  Activity,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export default function HomePage() {
  // Define categories for left and right sidebar lists
  const leftCategories = [
    { name: "Dressing Trolleys", iconIndex: 0, img: "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp" },
    { name: "Over Bed Tables", iconIndex: 1, img: "/images/Product Assets/HospitalBedsideLocker/extra-10410435.webp" },
    { name: "Bedside Lockers", iconIndex: 2, img: "/images/Product Assets/HospitalBedsideLocker/extra-10410436.webp" },
    { name: "Wheelchairs", iconIndex: 3, img: "/images/Product Assets/Stretchers/Plain-Stretcher.webp" },
    { name: "Attender Cots", iconIndex: 4, img: "/images/Product Assets/Beds/Attender-Cot-Bed.webp" },
    { name: "Examination Couches", iconIndex: 5, img: "/images/Product Assets/Beds/Hospital-Examination-Couch-Bed.webp" },
    { name: "Stainless Steel Furniture", iconIndex: 0, img: "/images/Product Assets/SurgicalSink/OT-Surgical-Scrub-Sink.webp" },
    { name: "Ward Furniture", iconIndex: 1, img: "/images/Product Assets/Beds/Two-Tier-Cot-Bed.webp" },
    { name: "Custom Hospital Furniture", iconIndex: 2, img: "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp" },
    { name: "ICU Beds (Manual)", iconIndex: 3, img: "/images/Product Assets/ICU CotBed/ICU-Cot.webp" }
  ];

  const rightCategories = [
    { name: "ICU Beds", iconIndex: 0, img: "/images/Product Assets/ICU CotBed/-Remote-ICU-Cot.webp" },
    { name: "Fowler Cots", iconIndex: 1, img: "/images/Product Assets/Beds/Hospital-Fowler-Cot-Bed.webp" },
    { name: "Semi Fowler Cots", iconIndex: 2, img: "/images/Product Assets/Beds/Hospital-Fowler-Cot-Bed.webp" },
    { name: "Plain Cots", iconIndex: 3, img: "/images/Product Assets/Beds/Plain-Examination-Bed.webp" },
    { name: "Labour Cots", iconIndex: 4, img: "/images/Product Assets/Beds/Labour-Table-Hydraulic-Bed.webp" },
    { name: "Stretcher Trolleys", iconIndex: 5, img: "/images/Product Assets/Stretchers/Plain-Stretcher.webp" },
    { name: "Transfer Trolleys", iconIndex: 0, img: "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp" },
    { name: "Crash Carts", iconIndex: 1, img: "/images/Product Assets/HospitalTrolley/Hospital-Crash-Cart-Trolley.webp" },
    { name: "Instrument Trolleys", iconIndex: 2, img: "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp" },
    { name: "Drug Trolleys", iconIndex: 3, img: "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp" }
  ];

  const [activeCategory, setActiveCategory] = useState("ICU Beds");

  // Get active image based on active category
  const activeItem = [...leftCategories, ...rightCategories].find(c => c.name === activeCategory);
  const activeProductImage = activeItem ? activeItem.img : "/images/Product Assets/ICU CotBed/-Remote-ICU-Cot.webp";

  // Helper to load webp icon dynamically
  const getIconSrc = (idx: number, active: boolean) => {
    const folder = active ? 'openIcons' : 'closeIcons';
    if (idx === 0) {
      return `/images/Home Page/HowWeBuild/${folder}/Group.webp`;
    }
    return `/images/Home Page/HowWeBuild/${folder}/Group (${idx}).webp`;
  };

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
          <FadeIn direction="up" delay={0.1} className="px-[6vw]">
            <div className="w-full rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#E86D24] via-[#EE7D22] to-[#FF9B00] shadow-2xl py-4 sm:py-5 px-6 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center text-white border border-white/30 backdrop-blur-md">
              {/* Stat 1 */}
              <div className="flex items-center gap-3 sm:gap-4 lg:border-r border-white/20 pr-0 lg:pr-4">
                <div className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 flex-shrink-0">
                  <Image
                    src="/images/Home Page/BannerIcons/yearOfExperience.webp"
                    alt="29+ Years of Experience"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl md:text-3xl font-black leading-none tracking-tight font-heading">
                    29+
                  </span>
                  <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-white/95 mt-1 leading-tight">
                    YEARS OF
                    <br />
                    EXPERIENCE
                  </span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3 sm:gap-4 lg:border-r border-white/20 pr-0 lg:pr-4">
                <div className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 flex-shrink-0">
                  <Image
                    src="/images/Home Page/BannerIcons/projectCompleted.webp"
                    alt="4,000+ Projects Completed"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl md:text-3xl font-black leading-none tracking-tight font-heading">
                    4,000+
                  </span>
                  <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-white/95 mt-1 leading-tight">
                    PROJECTS
                    <br />
                    COMPLETED
                  </span>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-3 sm:gap-4 lg:border-r border-white/20 pr-0 lg:pr-4">
                <div className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 flex-shrink-0">
                  <Image
                    src="/images/Home Page/BannerIcons/ProductManufature.webp"
                    alt="30,000+ Products Manufactured"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl md:text-3xl font-black leading-none tracking-tight font-heading">
                    30,000+
                  </span>
                  <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-white/95 mt-1 leading-tight">
                    PRODUCTS
                    <br />
                    MANUFACTURED
                  </span>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 flex-shrink-0">
                  <Image
                    src="/images/Home Page/BannerIcons/bedsDelivered.webp"
                    alt="1,000+ Beds Delivered"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl md:text-3xl font-black leading-none tracking-tight font-heading">
                    1,000
                  </span>
                  <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-white/95 mt-1 leading-tight">
                    BEDS DELIVERED
                    <br />
                    IN A SINGLE MONTH
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 2. WHY SRI MATHURAMS SECTION */}
      <section className="w-full px-[6vw] pt-[4vh] sm:pt-[8vh] pb-[6vh] relative overflow-visible bg-[#f7f5ef]">
        {/* Doodle Background Pattern - Extended to cover behind stats banner */}
        <div
          className="absolute -top-32 inset-x-0 bottom-0 opacity-1 mix-blend-multiply pointer-events-none bg-repeat bg-center z-0"
          style={{
            backgroundImage: `url('/images/Home Page/doodle.webp')`,
            backgroundSize: "350px",
          }}
        />

        <div className="mx-[2vw] relative z-10 space-y-[4vh]">
          {/* Top Tagline Badge - Left Aligned with trusted icon & accent line */}
          <FadeIn
            direction="up"
            delay={0.1}
            className="flex flex-col items-start gap-1.5"
          >
            <div className="inline-flex items-center gap-2 text-lg sm:text-xl font-bold tracking-wider text-[#0B2545] uppercase">
              <div className="relative w-7 h-7 flex-shrink-0">
                <Image
                  src="/images/Home Page/trusted.webp"
                  alt="Trusted Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span>TRUSTED BY HEALTHCARE PROFESSIONALS SINCE 1997</span>
            </div>
            {/* Dark Navy accent line under badge */}
            <div className="w-28 h-[4px] bg-[#0B2545] rounded-full" />
          </FadeIn>

          {/* Header Title & Subtitle */}
          <FadeIn direction="up" delay={0.15} className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B2545] ">
              WHY SRI MATHURAMS ?
            </h2>
            <p className="  text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              For more than two decades, healthcare institutions have{" "}
              <span className="font-semibold text-slate-900">
                relied on our products for quality, reliability, and consistent
                performance.
              </span>
            </p>
          </FadeIn>

          {/* Interactive Interlocking Diamond Cards Layout */}
          <div className="py-4 px-2 max-w-7xl mx-auto flex justify-center items-center overflow-x-auto">
            <div className="relative w-[1040px] h-[430px] min-w-[1040px] my-4">
              {/* Card 1: Superior Manufacturing Quality (Lower Row 1) */}
              <div className="absolute left-[0px] top-[150px] z-10">
                <FadeIn direction="up" delay={0.2}>
                  <div className="w-[185px] h-[185px] bg-white border-[3px] border-[#f7f5ef] rotate-45  flex items-center justify-center p-3 text-center transition-transform hover:scale-105">
                    <div className="-rotate-45 flex flex-col items-center justify-center space-y-1.5 max-w-[135px]">
                      <div className="text-orange-500 mb-0.5">
                        <svg
                          className="w-7 h-7 stroke-[1.5]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 3h12l4 6-10 12L2 9l4-6z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-[11.5px] font-bold text-[#0B2545] leading-tight">
                        Superior
                        <br />
                        Manufacturing Quality
                      </h3>
                      <p className="text-[9px] text-slate-500 leading-snug font-medium">
                        Manufactured using high-grade materials to ensure
                        durability, safety, and long-lasting performance.
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Card 2: Advanced Manufacturing Facility (Upper Row 1 - Orange) */}
              <div className="absolute left-[137px] top-[13px] z-20">
                <FadeIn direction="up" delay={0.25}>
                  <div className="w-[185px] h-[185px] bg-[#E86D24] text-white border-[3px] border-[#f7f5ef] rotate-45 shadow-2xl flex items-center justify-center p-3 text-center transition-transform hover:scale-105">
                    <div className="-rotate-45 flex flex-col items-center justify-center space-y-1.5 max-w-[135px]">
                      <div className="text-white mb-0.5">
                        <svg
                          className="w-7 h-7 stroke-[1.5]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5"
                          />
                        </svg>
                      </div>
                      <h3 className="text-[11.5px] font-bold text-white leading-tight">
                        Advanced
                        <br />
                        Manufacturing Facility
                      </h3>
                      <p className="text-[9px] text-white/90 leading-snug font-medium">
                        Equipped with modern machinery and efficient production
                        processes for consistent product quality.
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Card 3: Certified Quality Standards (Lower Row 2) */}
              <div className="absolute left-[276px] top-[150px] z-10">
                <FadeIn direction="up" delay={0.3}>
                  <div className="w-[185px] h-[185px] bg-white border-[3px] border-[#f7f5ef] rotate-45  flex items-center justify-center p-3 text-center transition-transform hover:scale-105">
                    <div className="-rotate-45 flex flex-col items-center justify-center space-y-1.5 max-w-[135px]">
                      <div className="text-orange-500 mb-0.5">
                        <svg
                          className="w-7 h-7 stroke-[1.5]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-[11.5px] font-bold text-[#0B2545] leading-tight">
                        Certified Quality
                        <br />
                        Standards
                      </h3>
                      <p className="text-[9px] text-slate-500 leading-snug font-medium">
                        Every product undergoes stringent quality inspections to
                        meet industry standards and customer expectations.
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Card 4: Timely Delivery (Upper Row 2) */}
              <div className="absolute left-[415px] top-[13px] z-20">
                <FadeIn direction="up" delay={0.35}>
                  <div className="w-[185px] h-[185px] bg-white border-[3px] border-[#f7f5ef] rotate-45  flex items-center justify-center p-3 text-center transition-transform hover:scale-105">
                    <div className="-rotate-45 flex flex-col items-center justify-center space-y-1.5 max-w-[135px]">
                      <div className="text-orange-500 mb-0.5">
                        <svg
                          className="w-7 h-7 stroke-[1.5]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0C.677 5.572.25 6.052.25 6.62v9.88"
                          />
                        </svg>
                      </div>
                      <h3 className="text-[11.5px] font-bold text-[#0B2545] leading-tight">
                        Timely Delivery
                      </h3>
                      <p className="text-[9px] text-slate-500 leading-snug font-medium">
                        Reliable production planning and logistics ensure
                        on-time delivery across Tamil Nadu.
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Card 5: Dedicated Customer Support (Lower Row 3 - Navy) */}
              <div className="absolute left-[555px] top-[152px] z-20">
                <FadeIn direction="up" delay={0.4}>
                  <div className="w-[185px] h-[185px] bg-[#0B3B60] text-white border-[3px] border-[#f7f5ef] rotate-45 shadow-2xl flex items-center justify-center p-3 text-center transition-transform hover:scale-105">
                    <div className="-rotate-45 flex flex-col items-center justify-center space-y-1.5 max-w-[135px]">
                      <div className="text-white mb-0.5">
                        <svg
                          className="w-7 h-7 stroke-[1.5]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-[11.5px] font-bold text-white leading-tight">
                        Dedicated Customer
                        <br />
                        Support
                      </h3>
                      <p className="text-[9px] text-slate-200 leading-snug font-medium">
                        Our experienced team provides prompt assistance before,
                        during, and after every purchase.
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Card 6: 25+ Years of Industry Experience (Upper Row 3) */}
              <div className="absolute left-[698px] top-[16px] z-10">
                <FadeIn direction="up" delay={0.45}>
                  <div className="w-[185px] h-[185px] bg-white border-[3px] border-[#f7f5ef] rotate-45  flex items-center justify-center p-3 text-center transition-transform hover:scale-105">
                    <div className="-rotate-45 flex flex-col items-center justify-center space-y-1.5 max-w-[135px]">
                      <div className="text-orange-500 mb-0.5">
                        <svg
                          className="w-7 h-7 stroke-[1.5]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-6.75A1.125 1.125 0 019 15.375V18.75m9 0h-9"
                          />
                        </svg>
                      </div>
                      <h3 className="text-[11.5px] font-bold text-[#0B2545] leading-tight">
                        25+ Years of Industry
                        <br />
                        Experience
                      </h3>
                      <p className="text-[9px] text-slate-500 leading-snug font-medium">
                        Over two decades of manufacturing expertise trusted by
                        hospitals, clinics, laboratories, and healthcare
                        institutions.
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Card 7: 3000+ Product Manufactured Every Year (Lower Row 4) */}
              <div className="absolute left-[838px] top-[154px] z-10">
                <FadeIn direction="up" delay={0.5}>
                  <div className="w-[185px] h-[185px] bg-white border-[3px] border-[#f7f5ef] rotate-45  flex items-center justify-center p-3 text-center transition-transform hover:scale-105">
                    <div className="-rotate-45 flex flex-col items-center justify-center space-y-1.5 max-w-[135px]">
                      <div className="text-orange-500 mb-0.5">
                        <svg
                          className="w-7 h-7 stroke-[1.5]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                          />
                        </svg>
                      </div>
                      <h3 className="text-[11.5px] font-bold text-[#0B2545] leading-tight">
                        3000+ Product
                        <br />
                        Manufactured Every Year
                      </h3>
                      <p className="text-[9px] text-slate-500 leading-snug font-medium">
                        Ensuring consistent quality, reliable supply, and timely
                        delivery for healthcare institutions across India.
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCT CATEGORIES SECTION */}
      <section className="w-full px-[4vw] py-16 bg-[#FAFBFC] relative">
        <div className="mx-[2vw] space-y-[4vh]">
          {/* Top Sub-tagline Badge - Left Aligned with orange icon & accent line */}
          <FadeIn
            direction="up"
            delay={0.1}
            className="flex flex-col items-start gap-1.5"
          >
            <div className="inline-flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-wider text-[#0B2545] uppercase">
              <span className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/images/AboutAs/aboutAs.webp"
                  alt="Products Icon"
                  fill
                  className="object-contain"
                />
              </span>
              <span>OUR PRODUCTS</span>
            </div>
            {/* Orange underline accent line */}
            <div className="w-20 h-[4px] bg-[#E86D24] rounded-full" />
          </FadeIn>

          {/* Header Title & Description */}
          <FadeIn direction="up" delay={0.15} className="text-center space-y-3">
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#E86D24] tracking-tight uppercase leading-tight font-montserrat">
              Complete <br />
              <span className="text-[#0B2545]">Hospital Furniture Solutions</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-md max-w-4xl mx-auto leading-relaxed font-medium">
              We manufacture a comprehensive range of hospital furniture designed for modern healthcare facilities, combining durability, safety, functionality, and ergonomic design.
            </p>
          </FadeIn>

          {/* Interactive Grid Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
            
            {/* Left Column: 10 Categories */}
            <div className="lg:col-span-3 space-y-3 order-2 lg:order-1">
              {leftCategories.map((cat) => {
                const isActive = activeCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`w-full flex items-center justify-end gap-3 text-right group transition-all duration-300 py-1 px-3 rounded-2xl ${
                      isActive 
                        ? 'text-[#E86D24] font-bold' 
                        : 'text-slate-700 hover:text-[#0B3B60] font-semibold'
                    }`}
                  >
                    <span className="text-xs sm:text-[13px] font-montserrat tracking-wide">{cat.name}</span>
                    <div className="relative w-9 h-9 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={getIconSrc(cat.iconIndex, isActive)}
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Center Column: Interactive Image Frame */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2">
              {/* Outer container with relative positioning and padding for borders */}
              <div className="relative w-full aspect-[4/3] max-w-xl">
                {/* Top-Left Blue Border Bracket (Offset outside the container) */}
                <div className="absolute -top-3 -left-3 w-[45%] h-[45%] border-t-[5px] border-l-[5px] border-[#0B3B60] rounded-tl-[2.8rem] pointer-events-none z-0" />
                
                {/* Bottom-Right Orange Border Bracket (Offset outside the container) */}
                <div className="absolute -bottom-3 -right-3 w-[45%] h-[45%] border-b-[5px] border-r-[5px] border-[#E86D24] rounded-br-[2.8rem] pointer-events-none z-0" />

                {/* Main White Frame Container */}
                <div className="relative w-full h-full rounded-[2.5rem] bg-white shadow-2xl border border-slate-100 p-3 z-10">
                  {/* Inner Image with custom rounded corners matching mockup */}
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-50/60 border border-slate-100">
                    <Image
                      src={activeProductImage}
                      alt={activeCategory}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain p-6 transition-all duration-500 transform hover:scale-103"
                    />
                    
                    {/* View Details Button overlay */}
                    <Link href="/products" className="absolute bottom-6 right-6 z-20">
                      <button className="bg-[#E86D24] hover:bg-[#d65e1c] text-white font-bold text-sm sm:text-base px-6 py-3 rounded-2xl shadow-lg transition-all flex items-center gap-2">
                        <span>View</span>
                        <ArrowRight className="w-4.5 h-4.5" />
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Explore Range Button attached to the bottom left of the container */}
                <Link href="/products" className="absolute -bottom-6 left-6 z-20">
                  <button className="bg-[#0B3B60] hover:bg-[#051c30] text-white font-extrabold text-[10px] sm:text-xs px-6 py-3 rounded-b-2xl shadow-md transition-all flex items-center gap-2 tracking-wider">
                    <span>EXPLORE COMPLETE PRODUCT RANGE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column: 10 Categories */}
            <div className="lg:col-span-3 space-y-3 order-3">
              {rightCategories.map((cat) => {
                const isActive = activeCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`w-full flex items-center justify-start gap-3 text-left group transition-all duration-300 py-1 px-3 rounded-2xl ${
                      isActive 
                        ? 'text-[#E86D24] font-bold' 
                        : 'text-slate-700 hover:text-[#0B3B60] font-semibold'
                    }`}
                  >
                    <div className="relative w-9 h-9 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={getIconSrc(cat.iconIndex, isActive)}
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold font-montserrat tracking-wide">{cat.name}</span>
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 4. OUR STORY / ABOUT US SECTION */}
      <section className="w-full relative overflow-hidden bg-gradient-to-r from-slate-50 via-blue-50/40 to-slate-50">
        {/* Our Story Background Doodle */}
        <div 
          className="absolute inset-0 opacity-1 mix-blend-multiply pointer-events-none bg-cover bg-right-top z-0"
          style={{ backgroundImage: `url('/images/Home Page/ourStoryDoodle.webp')` }}
        />
        <div className=" relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Column: Image Container (Flex 1) */}
          <div className="flex-1 w-full relative">
            <FadeIn direction="right" delay={0.1} className="max-w-2xl mx-auto lg:mx-0">
              <div className="relative w-full overflow-hidden">
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

          {/* Right Column: Content (Flex 1 with Top-Right Badge) */}
          <div className="flex-1 w-full relative text-left space-y-5 lg:space-y-6">
            
            {/* Top Badge: OUR STORY (Positioned Absolute Top Right - Shifted slightly left) */}
            <div className="absolute top-0 right-6 sm:right-10 lg:right-12 flex flex-col items-end gap-1">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-[#0B2545] uppercase">
                <svg className="w-4 h-4 text-orange-500 fill-orange-500" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                <span>OUR STORY</span>
              </div>
              <div className="w-14 h-[3px] bg-[#E86D24] rounded-full" />
            </div>

            {/* Title */}
            <FadeIn direction="up" delay={0.15}>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#0B2545] leading-[1.18] tracking-tight max-w-xl">
                Building Healthcare Infrastructure Since 1997
              </h2>
            </FadeIn>

            {/* Description Paragraph with Bold Terms */}
            <FadeIn
              direction="up"
              delay={0.2}
              className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-xl"
            >
              <p>
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
                . Today, we proudly serve hospitals, clinics, medical colleges,
                and healthcare institutions with{" "}
                <strong className="text-slate-900 font-semibold">
                  trusted healthcare solutions built to last
                </strong>
                .
              </p>
            </FadeIn>

            {/* CTA Button */}
            <FadeIn direction="up" delay={0.25} className="pt-2 flex justify-start">
              <Link href="/about">
                <button className="bg-[#0B3B60] hover:bg-[#062454] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full uppercase shadow-md hover:shadow-lg transition-all flex items-center gap-2 group">
                  <span>READ OUR STORY</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. TRUST & CERTIFICATIONS SECTION */}
      <section className="w-full px-[3vw] py-[8vh] relative overflow-hidden bg-slate-50/70 border-t border-b border-slate-200/80">
        {/* Soft background medical/hexagonal pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0b2545_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-[4vh]">
          {/* Top Tagline */}
          <FadeIn
            direction="up"
            delay={0.1}
            className="flex items-center justify-center"
          >
            <div className="inline-flex items-center gap-1.5 text-lg font-bold tracking-widest text-slate-700 uppercase border-b-2 border-orange-500 pb-1">
              <Award className="w-4 h-4 text-orange-500" />
              <span>TRUST & CERTIFICATIONS</span>
            </div>
          </FadeIn>

          {/* Section Header */}
          <FadeIn direction="up" delay={0.15} className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2545] tracking-tight">
              Certified Quality. Trusted by Thousands.
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-medium">
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
                <span className="text-xs font-black text-[#0B2545] block">
                  ISO 9001
                </span>
                <span className="text-[10px] text-slate-500 font-medium leading-tight block mt-0.5">
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
                <span className="text-xs font-black text-[#0B2545] block">
                  ISO 13485
                </span>
                <span className="text-[10px] text-slate-500 font-medium leading-tight block mt-0.5">
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
                <span className="text-xs font-black text-[#0B2545] block">
                  ZED
                </span>
                <span className="text-[10px] text-slate-500 font-medium leading-tight block mt-0.5">
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
                <span className="text-xs font-black text-[#0B2545] block">
                  MSME
                </span>
                <span className="text-[10px] text-slate-500 font-medium leading-tight block mt-0.5">
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
                <span className="text-xs font-black text-[#0B2545] block">
                  NSIC
                </span>
                <span className="text-[10px] text-slate-500 font-medium leading-tight block mt-0.5">
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
                <span className="text-xs font-black text-[#0B2545] block">
                  MAKE IN INDIA
                </span>
                <span className="text-[10px] text-slate-500 font-medium leading-tight block mt-0.5">
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
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <Image
                  src="/images/Home Page/certificates/assocham.webp"
                  alt="ASSOCHAM Member Certificate"
                  fill
                  className="object-contain p-1 group-hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <span className="text-xs font-black text-[#0B2545] block">
                  ASSOCHAM
                </span>
                <span className="text-[10px] text-slate-500 font-medium leading-tight block mt-0.5">
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
      <section className="w-full px-[3vw] py-[8vh] relative overflow-hidden bg-white border-t border-b border-slate-100">
        <div className="max-w-6xl mx-auto space-y-[4vh]">
          {/* Top Tagline */}
          <FadeIn
            direction="up"
            delay={0.1}
            className="flex items-center justify-center"
          >
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-slate-700 uppercase border-b-2 border-orange-500 pb-1">
              <Users className="w-4 h-4 text-orange-500" />
              <span>OUR CLIENTS</span>
            </div>
          </FadeIn>

          {/* Section Title & Subtitle */}
          <FadeIn direction="up" delay={0.15} className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2545] tracking-tight">
              Trusted by Healthcare Institutions Across Tamil Nadu
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-medium">
              We are proud to be a preferred partner for hospitals, clinics, and
              healthcare institutions.
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
                <h3 className="text-xs font-bold text-[#0B2545] uppercase tracking-wider">
                  GOVERNMENT
                  <br />
                  HOSPITALS
                </h3>
                <div className="w-4 h-0.5 bg-slate-300 mx-auto rounded-full group-hover:bg-orange-500 transition-colors" />
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
                <h3 className="text-xs font-bold text-[#0B2545] uppercase tracking-wider">
                  PRIVATE
                  <br />
                  HOSPITALS
                </h3>
                <div className="w-4 h-0.5 bg-slate-300 mx-auto rounded-full group-hover:bg-orange-500 transition-colors" />
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
                <h3 className="text-xs font-bold text-[#0B2545] uppercase tracking-wider">
                  MEDICAL
                  <br />
                  COLLEGES
                </h3>
                <div className="w-4 h-0.5 bg-slate-300 mx-auto rounded-full group-hover:bg-orange-500 transition-colors" />
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
                <h3 className="text-xs font-bold text-[#0B2545] uppercase tracking-wider">
                  CLINICS
                </h3>
                <div className="w-4 h-0.5 bg-slate-300 mx-auto rounded-full group-hover:bg-orange-500 transition-colors" />
              </div>
            </FadeIn>

            {/* Card 5: Healthcare Institutions */}
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
                <h3 className="text-xs font-bold text-[#0B2545] uppercase tracking-wider">
                  HEALTHCARE
                  <br />
                  INSTITUTIONS
                </h3>
                <div className="w-4 h-0.5 bg-slate-300 mx-auto rounded-full group-hover:bg-orange-500 transition-colors" />
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
              <div className="w-8 h-8 rounded-full border-2 border-[#0B2545] flex items-center justify-center text-[10px] font-black text-[#0B2545]">
                KMC
              </div>
              <span className="text-[10px] font-black text-[#0B2545] leading-tight">
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
                <span className="text-sm font-black text-[#0B2545] tracking-tight">
                  Apollo
                </span>
                <span className="text-[9px] font-bold text-slate-500 block">
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

            {/* Logo 4: SRM Institute */}
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
      <section className="relative rounded-[2rem] overflow-hidden bg-[#102F4E] shadow-xl mx-[3vw] mt-8 mb-6 border border-slate-700/40 min-h-[300px] lg:h-[340px] flex items-center">
        {/* Background Operation Theatre Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=90"
            alt="Operation Theatre Hospital Furniture"
            fill
            sizes="100vw"
            className="object-cover object-right filter brightness-75 contrast-125"
          />
          {/* Dark Navy Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2D4A] via-[#0F2D4A]/95 to-transparent w-full lg:w-[75%]" />
        </div>

        <div className="relative z-10 w-full px-8 lg:px-12 py-8 lg:py-10 flex flex-col justify-center">
          {/* Left Text Content */}
          <div className="space-y-4 max-w-xl text-left">
            {/* Top Sub-tagline */}
            <FadeIn direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-wider text-white uppercase border-b-2 border-[#E86D24] pb-1">
                <svg
                  className="w-3.5 h-3.5 text-[#E86D24]"
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
                <span>COMPLETE SOLUTION FOR EVERY HEALTHCARE NEEDS</span>
              </div>
            </FadeIn>

            {/* Main Headline */}
            <FadeIn direction="up" delay={0.15}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-white leading-tight tracking-tight whitespace-nowrap">
                Looking for Complete
                <br />
                Hospital Furniture Solutions?
              </h2>
            </FadeIn>

            {/* Description */}
            <FadeIn direction="up" delay={0.2}>
              <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed max-w-lg">
                We manufacture reliable and durable hospital furniture{" "}
                <span className="font-bold text-white">
                  tailored to your healthcare requirements.
                </span>
              </p>
            </FadeIn>

            {/* Buttons Row */}
            <FadeIn
              direction="up"
              delay={0.25}
              className="flex flex-wrap gap-3 pt-1"
            >
              <Link href="/contact">
                <button className="bg-[#E86D24] hover:bg-[#EE7D22] text-white font-bold text-xs px-5 py-3 rounded-xl uppercase shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 tracking-wider">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>REQUEST A QUOTE</span>
                </button>
              </Link>

              <Link href="/contact">
                <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white/80 font-bold text-xs px-5 py-3 rounded-xl uppercase transition-all inline-flex items-center gap-2 tracking-wider">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1.1 1.1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>CONTACT SALES</span>
                </button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
