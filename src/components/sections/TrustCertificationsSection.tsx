"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { ShieldCheck } from "lucide-react";

interface Certificate {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: "iso-9001",
    num: "01",
    title: "ISO 9001",
    subtitle: "Quality Management",
    tag: "Quality Standard",
    image: "/images/Home Page/certificates/ISO1.webp",
  },
  {
    id: "iso-13485",
    num: "02",
    title: "ISO 13485",
    subtitle: "Medical Quality",
    tag: "Medical Safety",
    image: "/images/Home Page/certificates/ISO2.webp",
  },
  {
    id: "zed",
    num: "03",
    title: "ZED",
    subtitle: "Zero Defect",
    tag: "Zero Defect",
    image: "/images/Home Page/certificates/Zed.webp",
  },
  {
    id: "msme",
    num: "04",
    title: "MSME",
    subtitle: "Registered",
    tag: "Govt. Recognized",
    image: "/images/Home Page/certificates/msme.webp",
  },
  {
    id: "nsic",
    num: "05",
    title: "NSIC",
    subtitle: "Registered",
    tag: "Govt. Verified",
    image: "/images/Home Page/certificates/nsic.webp",
  },
  {
    id: "make-in-india",
    num: "06",
    title: "MAKE IN INDIA",
    subtitle: "Proudly Indian",
    tag: "100% In-House",
    image: "/images/Home Page/certificates/MakeInIndia.webp",
  },
  {
    id: "assocham",
    num: "07",
    title: "ASSOCHAM",
    subtitle: "Member",
    tag: "Apex Council",
    image: "/images/Home Page/certificates/assocham.webp",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.92,
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

export default function TrustCertificationsSection() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardsRef, { once: false, amount: 0.2 });

  return (
    <section className="w-full px-[4vw] py-[8vh] relative overflow-hidden bg-slate-50">
      {/* Soft background medical/hexagonal pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0b2545_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative z-10 space-y-[4vh]">
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

        {/* Interactive 7-Card Deck with Scroll-Triggered Fade-In Stagger */}
        <motion.div
          ref={cardsRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 pt-2"
        >
          {CERTIFICATES.map((cert) => {
            return (
              <motion.div
                key={cert.id}
                variants={cardVariants}
                className="h-full"
              >
                <div
                  className="group relative h-full rounded-2xl p-4 bg-white border border-slate-200/90 hover:border-[#E86D24]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between text-center select-none hover:-translate-y-2 overflow-hidden cursor-default"
                >
                  {/* Top Bar inside Card: Number + Shield */}
                  <div className="w-full flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-[#E86D24] transition-colors">
                      {cert.num}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-slate-300 group-hover:text-[#E86D24] transition-colors" />
                  </div>

                  {/* Logo Container with Elevation */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center p-2 rounded-xl bg-slate-50/60 group-hover:bg-white group-hover:shadow-md transition-all duration-300 my-1">
                    <Image
                      src={cert.image}
                      alt={`${cert.title} Certificate`}
                      fill
                      className="object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mt-2 w-full">
                    <span className="text-sm sm:text-base font-extrabold text-[#0B2545] group-hover:text-[#0C3D6C] block transition-colors leading-tight">
                      {cert.title}
                    </span>
                    <span className="text-[11px] sm:text-[12px] text-slate-500 font-medium leading-tight block mt-0.5 truncate">
                      {cert.subtitle}
                    </span>
                  </div>

                  {/* Interactive Micro Badge / Tag */}
                  <div className="mt-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-600 group-hover:bg-[#0B2545] group-hover:text-white transition-all duration-300 w-full truncate">
                    {cert.tag}
                  </div>

                  {/* Hover Accent Underline */}
                  <div className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#0C3D6C] to-[#E86D24] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
