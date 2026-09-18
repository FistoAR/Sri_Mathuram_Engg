"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { TypewriterText } from "@/components/ui/TypewriterText";

const PRIMARY_CLIENTS = [
  {
    name: "Vinayaka Mission's Research Foundation",
    logo: "/images/Home Page/ClientLogos/Primary/Vinayaka mission 1.webp",
  },
  {
    name: "Vinayaka Mission's Kirupananda Variyar Medical College & Hospitals",
    logo: "/images/Home Page/ClientLogos/Primary/Vinayaka mission 2.webp",
  },
  {
    name: "Benzy Hospital",
    logo: "/images/Home Page/ClientLogos/Primary/2) Benzy Hospital.webp",
  },
  {
    name: "One Health Hospital",
    logo: "/images/Home Page/ClientLogos/Primary/3) One Health Hospital.webp",
  },
  {
    name: "Ortho One Orthopaedic Speciality Centre",
    logo: "/images/Home Page/ClientLogos/Primary/4) Ortho One.webp",
  },
  {
    name: "Melmaruvathur Adhiparasakthi Institute of Medical Sciences & Research",
    logo: "/images/Home Page/ClientLogos/Primary/5) Adhiparasakthi medical college.webp",
  },
  {
    name: "DSU Hospital - Dayananda Sagar University",
    logo: "/images/Home Page/ClientLogos/Primary/6) DSU Hospital.webp",
  },
  {
    name: "BRJ Orthopaedic Centre & MAK Hospital",
    logo: "/images/Home Page/ClientLogos/Primary/7) BRJ Ortho.webp",
  },
  {
    name: "Aathira Hospital",
    logo: "/images/Home Page/ClientLogos/Primary/8) Aathira Hospital.webp",
  },
  {
    name: "SSS Hospital",
    logo: "/images/Home Page/ClientLogos/Primary/9) SSS Hospital.webp",
  },
  {
    name: "Scudder Memorial Hospital",
    logo: "/images/Home Page/ClientLogos/Primary/10) Scudder Memorial.webp",
  },
];

const SECONDARY_ROW_1 = [
  {
    name: "Aishwaryam Speciality Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/Aishwaryam Speciality Hospital.webp",
  },
  {
    name: "Amaravathi Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/Amaravathi Hospital.webp",
  },
  {
    name: "AMC Super Speciality Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/AMC Super Speciality Hospital.webp",
  },
  {
    name: "AMCH, Salem (Annapoorana Medical College & Hospital)",
    logo: "/images/Home Page/ClientLogos/Secondary/AMCH, Salem (Annapoorana Medical College & Hospital).webp",
  },
  {
    name: "Anbu Multispeciality Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/Anbu Multispeciality Hospital.webp",
  },
  {
    name: "ANIVIK",
    logo: "/images/Home Page/ClientLogos/Secondary/ANIVIK.webp",
  },
  {
    name: "ANP Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/ANP Hospital.webp",
  },
  {
    name: "Assetz",
    logo: "/images/Home Page/ClientLogos/Secondary/Assetz.webp",
  },
  {
    name: "Avera Heart Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/Avera Heart Hospital.webp",
  },
  {
    name: "AVM Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/AVM Hospital.webp",
  },
  {
    name: "Christian Fellowship Hospital Oddanchatram",
    logo: "/images/Home Page/ClientLogos/Secondary/Christian Fellowship Hospital Oddanchatram.webp",
  },
  {
    name: "Clemens - A Name for Quality",
    logo: "/images/Home Page/ClientLogos/Secondary/Clemens - A Name for Quality.webp",
  },
  {
    name: "Coimbatore Kidney Centre & Specialty Hospitals",
    logo: "/images/Home Page/ClientLogos/Secondary/Coimbatore Kidney Centre & Specialty Hospitals.webp",
  },
  {
    name: "CTS Speciality Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/CTS Speciality Hospital.webp",
  },
  {
    name: "Cyril Ortho Foundation",
    logo: "/images/Home Page/ClientLogos/Secondary/Cyril Ortho Foundation.webp",
  },
  {
    name: "Dr. TVS Multispeciality Hospital Thanjavur",
    logo: "/images/Home Page/ClientLogos/Secondary/Dr. TVS Multispeciality Hospital Thanjavur.webp",
  },
  {
    name: "DSK Hospitale",
    logo: "/images/Home Page/ClientLogos/Secondary/DSK Hospitale.webp",
  },
  {
    name: "Durai Gastro Care Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/Durai Gastro Care Hospital.webp",
  },
  {
    name: "Getwell Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/Getwell Hospital.webp",
  },
  {
    name: "Grand World Elder Care",
    logo: "/images/Home Page/ClientLogos/Secondary/Grand World Elder Care.webp",
  },
  {
    name: "Karur Gastro Foundation",
    logo: "/images/Home Page/ClientLogos/Secondary/Karur Gastro Foundation.webp",
  },
  {
    name: "Kasthuri Chowdappa Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/Kasthuri Chowdappa Hospital.webp",
  },
  {
    name: "Kavan Hospital Multispeciality",
    logo: "/images/Home Page/ClientLogos/Secondary/Kavan Hospital Multispeciality.webp",
  },
  {
    name: "KR Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/KR Hospital.webp",
  },
  {
    name: "Leo Ortho Care Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/Leo Ortho Care Hospital.webp",
  },
  {
    name: "Mirakle Integrated Health Centre",
    logo: "/images/Home Page/ClientLogos/Secondary/Mirakle Integrated Health Centre.webp",
  },
];

const SECONDARY_ROW_2 = [
  {
    name: "MK Multi Speciality Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/MK Multi Speciality Hospital.webp",
  },
  {
    name: "Nishanth Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/Nishanth Hospital.webp",
  },
  {
    name: "PKDAS Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/PKDAS Hospital.webp",
  },
  {
    name: "Priya's Thulir Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/Priya's Thulir Hospital.webp",
  },
  {
    name: "Priyam Multi-Speciality Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/Priyam Multi-Speciality Hospital.webp",
  },
  {
    name: "Pugazhini Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/Pugazhini Hospital.webp",
  },
  {
    name: "Rajeshwari Hospitals",
    logo: "/images/Home Page/ClientLogos/Secondary/Rajeshwari Hospitals.webp",
  },
  {
    name: "RCP Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/RCP Hospital.webp",
  },
  {
    name: "Royal Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/Royal Hospital.webp",
  },
  {
    name: "Sanskriti Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/Sanskriti Hospital.webp",
  },
  {
    name: "SarvamCare Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/SarvamCare Hospital.webp",
  },
  {
    name: "Shifa Hospitals",
    logo: "/images/Home Page/ClientLogos/Secondary/Shifa Hospitals.webp",
  },
  {
    name: "Silverline Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/Silverline Hospital.webp",
  },
  {
    name: "Sri Chakra Super Speciality Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/Sri Chakra Super Speciality Hospital.webp",
  },
  {
    name: "Sri Lakshmi Krishna Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/Sri Lakshmi Krishna Hospital.webp",
  },
  {
    name: "St. Peter's Medical College, Hospital & Research Institute",
    logo: "/images/Home Page/ClientLogos/Secondary/St. Peter's Medical College, Hospital & Research Institute.webp",
  },
  {
    name: "St. Xavier's Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/St. Xavier's Hospital.webp",
  },
  {
    name: "SUGAJEEVAN Speciality Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/SUGAJEEVAN Speciality Hospital.webp",
  },
  {
    name: "SUPA Hospital Mettupalayam",
    logo: "/images/Home Page/ClientLogos/Secondary/SUPA Hospital Mettupalayam.webp",
  },
  {
    name: "Swamy Vivekanandha Medical College Hospital & Research Institute",
    logo: "/images/Home Page/ClientLogos/Secondary/Swamy Vivekanandha Medical College Hospital & Research Institute.webp",
  },
  {
    name: "TGLC - Tiruppur Gastrocare & Laparoscopic Centre",
    logo: "/images/Home Page/ClientLogos/Secondary/TGLC - Tiruppur Gastrocare & Laparoscopic Centre.webp",
  },
  {
    name: "Thirumala Speciality Clinic",
    logo: "/images/Home Page/ClientLogos/Secondary/Thirumala Speciality Clinic.webp",
  },
  {
    name: "Thirusenthilaandavar Multi Speciality Hospital",
    logo: "/images/Home Page/ClientLogos/Secondary/Thirusenthilaandavar Multi Speciality Hospital.webp",
  },
  {
    name: "Thulir Multi Speciality Hospital Thiruvarur",
    logo: "/images/Home Page/ClientLogos/Secondary/Thulir Multi Speciality Hospital Thiruvarur.webp",
  },
  {
    name: "Vijay Super Speciality Hospital & Cancer Centre",
    logo: "/images/Home Page/ClientLogos/Secondary/Vijay Super Speciality Hospital & Cancer Centre.webp",
  },
];

const SECTOR_CARDS = [
  {
    id: "govt-hospitals",
    title: "GOVERNMENT HOSPITALS",
    desc: "ICU Beds, Ward Furniture & Stretchers",
    icon: (
      <svg className="w-7 h-7 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="21" x2="21" y2="21" />
        <line x1="4" y1="10" x2="20" y2="10" />
        <polygon points="12 3 2 10 22 10 12 3" />
        <line x1="6" y1="10" x2="6" y2="21" />
        <line x1="10" y1="10" x2="10" y2="21" />
        <line x1="14" y1="10" x2="14" y2="21" />
        <line x1="18" y1="10" x2="18" y2="21" />
      </svg>
    ),
  },
  {
    id: "private-hospitals",
    title: "PRIVATE HOSPITALS",
    desc: "Electric ICU Beds & Deluxe Room Sets",
    icon: (
      <svg className="w-7 h-7 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
        <line x1="12" y1="8" x2="12" y2="16" strokeWidth="2.2" />
        <line x1="8" y1="12" x2="16" y2="12" strokeWidth="2.2" />
      </svg>
    ),
  },
  {
    id: "medical-colleges",
    title: "MEDICAL COLLEGES",
    desc: "Anatomy Tables & Lab Setup",
    icon: (
      <svg className="w-7 h-7 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    id: "clinics",
    title: "CLINICS",
    desc: "Examination Couches & Wheelchairs",
    icon: (
      <svg className="w-7 h-7 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
        <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
        <circle cx="20" cy="10" r="2" />
      </svg>
    ),
  },
  {
    id: "home-care",
    title: "HOME CARE",
    desc: "Recliner Beds & Walking Aids",
    icon: (
      <svg className="w-7 h-7 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M12 11v6" strokeWidth="2" />
        <path d="M9 14h6" strokeWidth="2" />
      </svg>
    ),
  },
];

const sectorContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const sectorCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 20,
    },
  },
};

export function ClientsSection() {
  const sectorCardsRef = useRef<HTMLDivElement>(null);
  const isSectorInView = useInView(sectorCardsRef, { once: false, amount: 0.2 });

  const row1Items = [...SECONDARY_ROW_1, ...SECONDARY_ROW_1];
  const row2Items = [
    ...PRIMARY_CLIENTS,
    ...PRIMARY_CLIENTS,
    ...PRIMARY_CLIENTS,
    ...PRIMARY_CLIENTS,
  ];
  const primaryItems = row2Items;
  const row3Items = [...SECONDARY_ROW_2, ...SECONDARY_ROW_2];

  return (
    <section className="w-full py-16 sm:py-20 relative bg-white border-t border-b border-slate-100">
      <div className="w-full space-y-6 sm:space-y-8">
        {/* Top Tagline & Header */}
        <div className="px-[4vw]">
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
          <FadeIn
            direction="up"
            delay={0.15}
            className="text-center space-y-2 mt-4"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              <TypewriterText text="Trusted by Healthcare Across India" speed={35} delay={150} />
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-medium">
              We are proud to be a preferred manufacturing partner for premier
              government hospitals, private institutions, medical colleges, and
              specialty clinics.
            </p>
          </FadeIn>

          {/* 5 Client Sector Cards with Staggered Scroll Animation */}
          <motion.div
            ref={sectorCardsRef}
            variants={sectorContainerVariants}
            initial="hidden"
            animate={isSectorInView ? "visible" : "hidden"}
            className="pt-6 pb-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 max-w-6xl mx-auto"
          >
            {SECTOR_CARDS.map((card, idx) => (
              <motion.div
                key={card.id}
                variants={sectorCardVariants}
                className={`h-full ${idx === 4 ? "col-span-2 sm:col-span-1" : ""}`}
              >
                <div className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-[#E86D24]/60 shadow-xs hover:shadow-xl transition-all duration-300 p-5 flex flex-col items-center justify-between text-center select-none hover:-translate-y-1.5 overflow-hidden cursor-default min-h-[160px] h-full">
                  {/* Icon Medallion */}
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-slate-50 group-hover:bg-[#0B2545] border border-slate-100 group-hover:border-[#0B2545] text-[#0C3D6C] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-inner group-hover:shadow-md group-hover:scale-105">
                    {card.icon}
                  </div>

                  {/* Title & Manufacturer Products Subtitle */}
                  <div className="mt-3 space-y-1 w-full">
                    <span className="text-xs sm:text-sm font-black text-[#0B2545] group-hover:text-[#E86D24] transition-colors tracking-wide block leading-tight">
                      {card.title}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight">
                      {card.desc}
                    </span>
                  </div>

                  {/* Animated Accent Underline */}
                  <div className="w-6 h-[2px] bg-slate-300 rounded-full group-hover:bg-[#E86D24] group-hover:w-12 transition-all duration-300 mt-2" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 3-Row Infinite Marquee Area */}
        <div className="relative w-full space-y-3 sm:space-y-4 pt-2">
          {/* Left & Right Gradient Shadows for seamless edge fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 md:w-44 bg-gradient-to-r from-white via-white/90 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 md:w-44 bg-gradient-to-l from-white via-white/90 to-transparent z-20" />

          {/* ROW 1: Secondary Clients (Moving to RIGHT - Slower Speed) */}
          <div className="clients-marquee-row flex overflow-visible select-none py-3">
            <div className="flex shrink-0 gap-4 sm:gap-5 animate-marquee-right">
              {row1Items.map((item, idx) => (
                <div
                  key={`r1-${idx}`}
                  title={item.name}
                  className="relative w-[200px] sm:w-[240px] md:w-[265px] h-[78px] sm:h-[88px] md:h-[96px] bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#E86D24]/60 transition-all duration-300 px-3.5 sm:px-5 py-2 sm:py-2.5 flex items-center justify-center shrink-0 group/card cursor-pointer"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      fill
                      sizes="265px"
                      className="object-contain filter transition-transform duration-300 group-hover/card:scale-105"
                    />
                  </div>

                  {/* Hover Tooltip */}
                  <div className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover/card:opacity-100 group-hover/card:-top-10 transition-all duration-200 z-50 whitespace-nowrap bg-slate-900/95 text-white text-[11px] sm:text-xs font-medium px-3 py-1 rounded-md shadow-xl border border-slate-700/60 backdrop-blur-xs flex items-center gap-1.5 max-w-[280px] sm:max-w-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E86D24] shrink-0" />
                    <span className="truncate">{item.name}</span>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-slate-900/95" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2: Primary Clients (Center Row - Moving to LEFT - Faster Speed) */}
          <div className="clients-marquee-row flex overflow-visible select-none py-3">
            <div className="flex shrink-0 gap-4 sm:gap-6 animate-marquee-left">
              {primaryItems.map((item, idx) => (
                <div
                  key={`r2-${idx}`}
                  title={item.name}
                  className="relative w-[300px] sm:w-[380px] md:w-[420px] h-[92px] sm:h-[105px] md:h-[115px] bg-gradient-to-b from-white to-slate-50/90 rounded-xl sm:rounded-2xl border-2 border-slate-200/90 hover:border-[#E86D24] shadow-sm hover:shadow-xl transition-all duration-300 px-3 sm:px-4 py-2 flex items-center justify-center shrink-0 group/card cursor-pointer"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      fill
                      sizes="420px"
                      className="object-contain filter transition-transform duration-300 group-hover/card:scale-105"
                    />
                  </div>

                  {/* Hover Tooltip */}
                  <div className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover/card:opacity-100 group-hover/card:-top-10 transition-all duration-200 z-50 whitespace-nowrap bg-slate-900/95 text-white text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-md shadow-xl border border-slate-700/60 backdrop-blur-xs flex items-center gap-1.5 max-w-[320px] sm:max-w-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E86D24] shrink-0" />
                    <span className="truncate">{item.name}</span>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-slate-900/95" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 3: Secondary Clients (Moving to RIGHT - Slower Speed) */}
          <div className="clients-marquee-row flex overflow-visible select-none py-3">
            <div className="flex shrink-0 gap-4 sm:gap-5 animate-marquee-right-alt">
              {row3Items.map((item, idx) => (
                <div
                  key={`r3-${idx}`}
                  title={item.name}
                  className="relative w-[200px] sm:w-[240px] md:w-[265px] h-[78px] sm:h-[88px] md:h-[96px] bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#E86D24]/60 transition-all duration-300 px-3.5 sm:px-5 py-2 sm:py-2.5 flex items-center justify-center shrink-0 group/card cursor-pointer"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      fill
                      sizes="265px"
                      className="object-contain filter transition-transform duration-300 group-hover/card:scale-105"
                    />
                  </div>

                  {/* Hover Tooltip */}
                  <div className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover/card:opacity-100 group-hover/card:-top-10 transition-all duration-200 z-50 whitespace-nowrap bg-slate-900/95 text-white text-[11px] sm:text-xs font-medium px-3 py-1 rounded-md shadow-xl border border-slate-700/60 backdrop-blur-xs flex items-center gap-1.5 max-w-[280px] sm:max-w-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E86D24] shrink-0" />
                    <span className="truncate">{item.name}</span>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-slate-900/95" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .clients-marquee-row:hover .animate-marquee-left,
        .clients-marquee-row:hover .animate-marquee-right,
        .clients-marquee-row:hover .animate-marquee-right-alt {
          animation-play-state: paused;
        }

        /* Smooth, relaxed marquee speeds */
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: scrollLeft 55s linear infinite;
        }

        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: scrollRight 45s linear infinite;
        }

        .animate-marquee-right-alt {
          display: flex;
          width: max-content;
          animation: scrollRight 50s linear infinite;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </section>
  );
}
