"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

interface StepItem {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  image: string;
}

const stepsData: StepItem[] = [
  {
    id: "step-1",
    stepNumber: "STEP-01",
    title: "Product Design",
    description: "Every product begins with a functional design focused on safety, durability, and healthcare requirements.",
    image: "/images/Home Page/HowWeBuild/Frame.webp",
  },
  {
    id: "step-2",
    stepNumber: "STEP-02",
    title: "Precision Fabrication",
    description: "High-grade stainless steel and mild steel are laser-cut and welded for structural rigidity.",
    image: "/images/Home Page/HowWeBuild/Frame (1).webp",
  },
  {
    id: "step-3",
    stepNumber: "STEP-03",
    title: "Powder Coating",
    description: "Multi-stage pre-treatment and anti-bacterial powder coating for long-lasting corrosion resistance.",
    image: "/images/Home Page/HowWeBuild/Frame (2).webp",
  },
  {
    id: "step-4",
    stepNumber: "STEP-04",
    title: "Assembly & Fitting",
    description: "Expert assembly of hydraulic mechanisms, castors, and ergonomic components by trained engineers.",
    image: "/images/Home Page/HowWeBuild/Frame (3).webp",
  },
  {
    id: "step-5",
    stepNumber: "STEP-05",
    title: "Quality Inspection",
    description: "Rigorous load testing, safety checks, and ISO compliance verification before final approval.",
    image: "/images/Home Page/HowWeBuild/Frame (4).webp",
  },
  {
    id: "step-6",
    stepNumber: "STEP-06",
    title: "Packaging & Delivery",
    description: "Protective multi-layer packaging and dedicated logistics setup for safe on-time dispatch.",
    image: "/images/Home Page/HowWeBuild/Frame (5).webp",
  },
];

export function BuildQualitySection() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // 2-second Auto Play Timer (pauses when hovered)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stepsData.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [isHovered]);

  // Scroll pinning & step switching handler
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || isHovered) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Check scroll progress inside the section
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const scrolledRatio = Math.abs(rect.top) / (sectionHeight - windowHeight);
        const index = Math.min(
          stepsData.length - 1,
          Math.floor(scrolledRatio * stepsData.length)
        );
        setActiveStep(index);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHovered]);

  const currentStep = stepsData[activeStep];

  return (
    <section ref={sectionRef} className="relative w-full h-[300vh] bg-[#f8fafc]">
      {/* Sticky Inner Container pinned during scroll */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-[4vw] py-[4vh] overflow-hidden">
        
        {/* Blueprint background watermark */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0b2545_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-4 xl:col-span-4 space-y-8 pr-0 lg:pr-2">
            
            {/* Top Tagline */}
            <FadeIn direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-1.5 text-lg font-bold tracking-widest text-slate-700 uppercase border-b-2 border-orange-500 pb-1">
                <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                <span>HOW WE BUILD QUALITY</span>
              </div>
            </FadeIn>

            {/* Main Title */}
            <FadeIn direction="up" delay={0.15}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2545] leading-[1.15] tracking-tight">
                Precision Manufacturing at Every Step
              </h2>
            </FadeIn>

            {/* Description */}
            <FadeIn direction="up" delay={0.2}>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Every product is manufactured through a carefully controlled process using advanced machinery, skilled craftsmanship, and rigorous quality standards. From concept to delivery, we ensure every piece meets the expectations of modern healthcare facilities.
              </p>
            </FadeIn>

          </div>

          {/* Right Column: Dynamic Expandable Accordion & STEP watermark */}
          <div className="lg:col-span-8 xl:col-span-8 relative flex flex-col justify-center">
            
            {/* Top Right STEP-XX Watermark */}
            <div className="absolute -top-12 right-4 pointer-events-none select-none">
              <span className="text-6xl sm:text-7xl font-black text-slate-300/40 tracking-wider font-mono">
                {currentStep.stepNumber}
              </span>
            </div>

            {/* Interactive Accordion Cards Flex Row */}
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex items-center gap-3 w-full h-[450px] sm:h-[480px]"
            >
              {stepsData.map((step, idx) => {
                const isExpanded = idx === activeStep;

                return (
                  <div
                    key={step.id}
                    onMouseEnter={() => setActiveStep(idx)}
                    className={`relative h-full rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out shadow-lg ${
                      isExpanded
                        ? "flex-grow-[4] sm:flex-grow-[5] min-w-[280px]"
                        : "flex-grow-[1] min-w-[55px] sm:min-w-[70px] opacity-80 hover:opacity-100"
                    }`}
                  >
                    {/* Background Image */}
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700"
                    />

                    {/* Dark Bottom Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                    {/* Card Footer Content when Expanded / Collapsed */}
                    {isExpanded ? (
                      <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex items-end gap-3.5 text-white z-10">
                        {/* Opened Card Icon (openIcons folder) */}
                        <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0">
                          <Image
                            src={idx === 0 ? "/images/Home Page/HowWeBuild/openIcons/Group.webp" : `/images/Home Page/HowWeBuild/openIcons/Group (${idx}).webp`}
                            alt={step.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="space-y-1 max-w-[85%]">
                          <h3 className="text-base sm:text-xl font-bold leading-tight text-white drop-shadow-md">{step.title}</h3>
                          <p className="text-xs sm:text-sm text-white/90 leading-snug drop-shadow">{step.description}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute bottom-5 inset-x-0 flex flex-col items-center justify-center text-white z-10">
                        {/* Collapsed Card Icon (closeIcons folder) */}
                        <div className="relative w-10 h-10 sm:w-11 sm:h-11">
                          <Image
                            src={idx === 0 ? "/images/Home Page/HowWeBuild/closeIcons/Group.webp" : `/images/Home Page/HowWeBuild/closeIcons/Group (${idx}).webp`}
                            alt={step.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
