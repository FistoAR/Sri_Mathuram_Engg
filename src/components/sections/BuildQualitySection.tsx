"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { PenTool, Hammer, Paintbrush, Settings, ClipboardCheck, Package } from "lucide-react";
import { TypewriterText } from "@/components/ui/TypewriterText";

function getStepIcon(index: number, colorClass: string = "text-white") {
  const sizeClass = `w-5 h-5 ${colorClass}`;
  switch (index) {
    case 0: return <PenTool className={sizeClass} />;
    case 1: return <Hammer className={sizeClass} />;
    case 2: return <Paintbrush className={sizeClass} />;
    case 3: return <Settings className={sizeClass} />;
    case 4: return <ClipboardCheck className={sizeClass} />;
    case 5: return <Package className={sizeClass} />;
    default: return <Settings className={sizeClass} />;
  }
}


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

  const currentStep = stepsData[activeStep];

  return (
    <section ref={sectionRef} className="relative w-full bg-[#f8fafc] py-[8vh] sm:py-[8vh] px-[4vw] overflow-hidden">
      {/* Inner Container */}
      <div className="w-full flex  justify-center">
        
        {/* Blueprint background watermark */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0b2545_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="w-full mx-auto relative z-10 flex flex-col gap-6">
          {/* Top Row: Tagline */}
          <div className="flex items-end justify-between w-full pb-4">
            {/* Tagline */}
            <FadeIn direction="up" delay={0.1}>
              <div className="flex flex-col items-start gap-1.5">
                <div className="inline-flex items-center gap-2 text-lg sm:text-xl font-bold tracking-widest text-[#0B2545] uppercase">
                  <div className="relative w-7 h-7 flex-shrink-0">
                    <Image
                      src="/images/Home Page/sectionIcons/howWeBuild.webp"
                      alt="Build Quality Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <TypewriterText text="HOW WE BUILD QUALITY" />
                </div>
                <div className="w-14 h-[4px] bg-[#E86D24] rounded-full" />
              </div>
            </FadeIn>
          </div>

          {/* Content Row: Title/Description on Left & Accordion on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 pt-2 items-center">
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-4 space-y-6 flex flex-col justify-start">
              {/* Main Title */}
              <FadeIn direction="up" delay={0.15}>
                <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-bold text-[#0C3D6C] tracking-wider font-montserrat" style={{ lineHeight: "1.2" }}>
                  Precision Manufacturing at Every Step
                </h2>
              </FadeIn>

              {/* Description */}
              <FadeIn direction="up" delay={0.2}>
                <p className="text-md sm:text-lg text-slate-800 leading-relaxed font-normal" style={{lineHeight:"1.8"}}>
                  Every product is manufactured through a carefully controlled process using advanced machinery, skilled craftsmanship, and rigorous quality standards. From concept to delivery, we ensure every piece meets the expectations of modern healthcare facilities.
                </p>
              </FadeIn>
            </div>

            {/* Right Column: Dynamic Expandable Accordion */}
            <FadeIn direction="left" delay={0.2} className="lg:col-span-8 relative flex flex-col justify-center w-full">
              {/* Top Right STEP-XX Watermark (placed here to overlap behind the curved top of the image cards) */}
              <div className="absolute -top-[72px] right-10 pointer-events-none select-none z-0">
                <span className="text-6xl sm:text-7xl lg:text-8xl font-normal text-slate-500/20 tracking-wider font-mono">
                  {currentStep.stepNumber}
                </span>
              </div>
 
            {/* Interactive Accordion Cards Flex Row (Desktop only) */}
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="hidden lg:flex items-center gap-3 w-full h-[450px]"
            >
              {stepsData.map((step, idx) => {
                const isExpanded = idx === activeStep;
 
                return (
                  <div
                    key={step.id}
                    onMouseEnter={() => setActiveStep(idx)}
                    className={`relative h-full rounded-3xl overflow-hidden cursor-pointer shadow-lg ${
                      isExpanded
                        ? "flex-grow-[5] min-w-[280px]"
                        : "flex-grow-[1] min-w-[70px] opacity-80 hover:opacity-100"
                    }`}
                    style={{ transition: 'all 1000ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                  >
                    {/* Background Image */}
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className={`object-cover transition-transform duration-[1000ms] ${isExpanded ? 'scale-105' : 'scale-100'}`}
                      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                    />
 
                    {/* Dark Bottom Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
 
                    {/* Card Footer Content when Expanded / Collapsed */}
                    {isExpanded ? (
                      <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex items-end gap-3.5 text-white z-10">
                        {/* Selected Circular SVG Icon */}
                        <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center">
                          <svg
                            viewBox="0 0 100 100"
                            className="absolute -inset-[2px] w-[calc(100%+4px)] h-[calc(100%+4px)] rotate-[170deg] z-0 pointer-events-none"
                          >
                            <circle
                              cx="50"
                              cy="50"
                              r="44"
                              fill="transparent"
                              stroke="#FFFFFF"
                              strokeWidth="8"
                              strokeLinecap="round"
                              strokeDasharray="45 276"
                              strokeDashoffset={102}
                              className="transition-all duration-[800ms] ease-in-out"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="44"
                              fill="transparent"
                              stroke="#E86D24"
                              strokeWidth="8"
                              strokeLinecap="round"
                              strokeDasharray="205 276"
                              strokeDashoffset={0}
                              className="transition-all duration-[800ms] ease-in-out"
                            />
                          </svg>
                          <div className="relative w-[34px] h-[34px] rounded-full flex items-center justify-center transition-all duration-500 z-10 bg-[#E86D24]">
                            {getStepIcon(idx)}
                          </div>
                        </div>
                        <div className="space-y-1 max-w-[85%]">
                          <h3 className="text-base sm:text-xl font-bold leading-tight text-white drop-shadow-md">{step.title}</h3>
                          <p className="text-xs sm:text-sm text-white/90 leading-snug drop-shadow">{step.description}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute bottom-5 inset-x-0 flex flex-col items-center justify-center text-white z-10">
                        {/* Unselected Circular SVG Icon */}
                        <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
                          <svg
                            viewBox="0 0 100 100"
                            className="absolute -inset-[2px] w-[calc(100%+4px)] h-[calc(100%+4px)] rotate-[170deg] z-0 pointer-events-none"
                          >
                            <circle
                              cx="50"
                              cy="50"
                              r="44"
                              fill="transparent"
                              stroke="#FFFFFF"
                              strokeWidth="8"
                              strokeLinecap="round"
                              strokeDasharray="205 276"
                              strokeDashoffset={0}
                              className="transition-all duration-[800ms] ease-in-out "
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="44"
                              fill="transparent"
                              stroke="#E86D24"
                              strokeWidth="8"
                              strokeLinecap="round"
                              strokeDasharray="45 276"
                              strokeDashoffset={102}
                              className="transition-all duration-[800ms] ease-in-out"
                            />
                          </svg>
                          <div className="relative w-[28px] h-[28px] rounded-full flex items-center justify-center transition-all duration-500 z-10 bg-white">
                            {getStepIcon(idx, "text-[#0B3B60]")}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile/Tablet Vertical Stacked Steps (visible only on mobile/tablet) */}
            <div className="lg:hidden flex flex-col gap-5 w-full mt-4">
              {stepsData.map((step, idx) => {
                return (
                  <FadeIn
                    key={step.id}
                    direction="up"
                    delay={0.05 * idx}
                    className="w-full"
                  >
                    <div
                      className="relative w-full rounded-3xl overflow-hidden shadow-lg bg-white border border-slate-100/80 p-5 flex flex-col sm:flex-row gap-5 items-center"
                    >
                      {/* Content Section */}
                      <div className="flex-1 flex gap-4 items-start w-full">
                        {/* Step Icon with circular arc indicator */}
                        <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center">
                          <svg
                            viewBox="0 0 100 100"
                            className="absolute -inset-[2px] w-[calc(100%+4px)] h-[calc(100%+4px)] rotate-[170deg] z-0 pointer-events-none"
                          >
                            <circle
                              cx="50"
                              cy="50"
                              r="44"
                              fill="transparent"
                              stroke="#0B3B60"
                              strokeWidth="8"
                              strokeLinecap="round"
                              strokeDasharray="205 276"
                              strokeDashoffset={0}
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="44"
                              fill="transparent"
                              stroke="#E86D24"
                              strokeWidth="8"
                              strokeLinecap="round"
                              strokeDasharray="45 276"
                              strokeDashoffset={102}
                            />
                          </svg>
                          <div className="relative w-[34px] h-[34px] rounded-full flex items-center justify-center bg-[#E86D24]">
                            {getStepIcon(idx)}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-black text-[#E86D24] uppercase tracking-wider">{step.stepNumber}</span>
                            <h3 className="text-base font-extrabold text-[#0B2545]">{step.title}</h3>
                          </div>
                          <p className="text-xs text-slate-500 font-semibold leading-relaxed">{step.description}</p>
                        </div>
                      </div>

                      {/* Step Image */}
                      <div className="relative w-full sm:w-[180px] h-[120px] rounded-2xl overflow-hidden bg-slate-50 flex-shrink-0 shadow-inner">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 180px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);
}
