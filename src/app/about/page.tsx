"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Gem, ShieldCheck, Sparkles, Shield, Smile, Eye, Users, RefreshCw } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FAFBFC] min-h-screen montserrat-page  space-y-24">
      {/* 1. HERO BANNER */}
      <section className="relative w-full min-h-[92vh] lg:h-[92vh] lg:min-h-[700px] bg-[#0F2D4A] px-[3vw] py-3 lg:py-16 overflow-hidden flex justify-center">
        {/* Background Image (No Overlay) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ContactPage/HeroBanner.webp"
            alt="Healthcare Spaces"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <FadeIn
          className="relative z-10 w-full mx-auto"
          direction="up"
          duration={0.8}
        >
          {/* Subheading: ABOUT US (Left-aligned) */}
          <div className="flex justify-start mb-6 md:mb-12">
            <div className="inline-flex items-center gap-4 text-white font-bold text-2xl uppercase">
              <span className="relative w-7 h-7 flex-shrink-0">
                <Image
                  src="/images/AboutAs/aboutAs.webp"
                  alt="About Icon"
                  fill
                  className="object-contain"
                />
              </span>
              <span className="relative pb-1">
                ABOUT US
                <span className="absolute left-0 bottom-0 w-1/2 h-[3.5px] bg-[#E86D24] rounded-full" />
              </span>
            </div>
          </div>

          {/* Centered Contents */}
          <div className="text-center w-full flex flex-col justify-center gap-6 md:gap-10 py-14">
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mx-auto flex flex-col gap-3 md:gap-5">
              <span>EVERY HOSPITAL WE SERVE</span>
              <span>BECOMES PART OF OUR STORY</span>
            </h1>

            {/* Description */}
            <div className="text-white text-md md:text-lg leading-relaxed mx-auto space-y-2 font-medium max-w-7xl">
              <p className="text-white">
                Since 1997, Sri Mathurams Medical Engineering has been helping
                hospitals build better
                <br className="hidden md:inline" />
                healthcare environments through dependable hospital furniture,
                advanced manufacturing, and
                <br className="hidden md:inline" />
                customer-focused solutions. Every product we manufacture
                reflects our passion for quality and
                <br className="hidden md:inline" />
                our commitment to supporting better patient care.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link href="#who-we-are">
                <button className="bg-[#E86D24] hover:bg-[#EE7D22] text-white font-semibold text-base sm:text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2.5">
                  Explore Our Journey
                  <span className="relative w-5 h-5 flex-shrink-0">
                    <Image
                      src="/images/AboutAs/arrow1.webp"
                      alt="Arrow Right"
                      fill
                      className="object-contain"
                    />
                  </span>
                </button>
              </Link>

              <Link href="#capabilities">
                <button className="bg-white hover:bg-slate-50 text-[#104272] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2.5  border border-slate-100">
                  View Manufacturing Facility
                  <span className="relative w-5 h-5 flex-shrink-0">
                    <Image
                      src="/images/AboutAs/arrow2.webp"
                      alt="Arrow Navigation"
                      fill
                      className="object-contain"
                    />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </FadeIn>

        
      </section>

      {/* 2. WHO WE ARE / OUR COMPANY STORY SECTION */}
      <section
        id="who-we-are"
        className="w-full relative z-20 bg-cover bg-center bg-no-repeat lg:h-[70vh] lg:min-h-[650px] lg:py-0 flex items-center !mt-0"
        style={{ backgroundImage: "url('/images/AboutAs/section2/aboutbg.webp')" }}
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between w-full px-[4vw]">
          {/* Left Column: Image wrapper */}
          <FadeIn className=" relative" direction="left" delay={0.1}>
            <div className="relative aspect-[3/4] w-full lg:h-[70vh] z-10">
              <Image
                src="/images/AboutAs/section2/about.webp"
                alt="Sri Mathurams Facility Building"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-contain object-center lg:object-left"
              />
            </div>
          </FadeIn>

          {/* Right Column: Text Information */}
          <FadeIn
            className="w-full  space-y-14 mt-2 lg:mt-0"
            direction="right"
            delay={0.2}
          >
            {/* Tagline aligned to the right */}
            <div className="flex justify-end">
              <div className="inline-flex items-center gap-2 text-[#0B2545] font-semibold text-lg uppercase">
                <span className="relative w-6 h-6 flex-shrink-0">
                  <Image
                    src="/images/AboutAs/aboutAs.webp"
                    alt="Story Icon"
                    fill
                    className="object-contain"
                  />
                </span>
                <span className="relative pb-1">
                  OUR COMPANY STORY
                  <span className="absolute left-0 bottom-0 w-1/2 h-[3px] bg-[#E86D24] rounded-full" />
                </span>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0B2545] tracking-wider">
                Building Healthcare Infrastructure Since 1997
              </h2>
              
              <p className="text-slate-600 text-md sm:text-lg leading-relaxed font-medium font-inter">
                Healthcare is built on trust and for more than 29 years, Sri Mathurams Medical Engineering has earned that trust by manufacturing hospital furniture and medical equipment that combines quality, durability, functionality, and value.
              </p>
              <p className="text-slate-600 text-md sm:text-lg leading-relaxed font-medium font-inter">
                Founded in 1997 , the company began with a simple vision: to strengthen healthcare infrastructure by manufacturing dependable hospital furniture that supports doctors, caregivers, and patients alike.
              </p>
              <p className="text-slate-600 text-md sm:text-lg leading-relaxed font-medium font-inter">
                What started as a small manufacturing unit has grown into one of South India's trusted hospital furniture manufacturers, supplying hospitals, medical colleges, clinics, healthcare institutions, distributors, and individual customers across India.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. KEY STATS GRID SECTION (OUR MILESTONES) */}
      <section
        id="milestones"
        className="w-full relative z-20 bg-cover bg-center bg-no-repeat pt-20 pb-8 px-[4vw] min-h-[90vh] flex flex-col justify-between !mt-0"
        style={{ backgroundImage: "url('/images/AboutAs/section3/section3bg.webp')" }}
      >
        <FadeIn className="w-full h-full flex flex-col justify-between" direction="up" delay={0.1}>
          {/* Tagline aligned to the left */}
          <div className="flex justify-start mb-6">
            <div className="inline-flex items-center gap-4 text-[#0B2545] font-semibold text-xl uppercase">
              <span className="relative w-7 h-7 flex-shrink-0">
                <Image
                  src="/images/AboutAs/aboutAs.webp"
                  alt="Milestone Icon"
                  fill
                  className="object-contain"
                  style={{ filter: "brightness(0) saturate(100%) invert(39%) sepia(87%) saturate(1478%) hue-rotate(346deg) brightness(97%) contrast(90%)" }}
                />
              </span>
              <span className="relative pb-1">
                OUR MILESTONES
                <span className="absolute left-0 bottom-0 w-1/2 h-[3px] bg-[#E86D24] rounded-full" />
              </span>
            </div>
          </div>

          {/* Desktop Floating/Staggered Canvas */}
          <div className="hidden lg:block relative w-full h-[520px] mx-auto">
            {/* Card 1: Orange Infrastructure bubble */}
            <div className="absolute left-[13%] top-[25%] w-[190px] h-[190px] bg-[#E86D24] text-white flex flex-col justify-center items-center rounded-[3.5rem] shadow-xl p-4 text-center z-10">
              <div className="relative w-20 h-20 mb-3">
                <Image
                  src="/images/AboutAs/section3/infrastructure.webp"
                  alt="Infrastructure"
                  fill
                  className="object-contain filter brightness-0 invert"
                />
              </div>
              <span className="text-[11px] font-medium tracking-wider ">ADVANCED MANUFACTURING INFRASTRUCTURE</span>
            </div>

            {/* Card 2: White note card */}
            <div className="absolute left-[22%] -top-[5%] w-[190px] text-justify bg-white rounded-[1rem] p-4 shadow-lg border border-slate-100/60 z-30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs">i</span>
              </div>
              <p className="text-slate-600 text-xs font-medium leading-relaxed font-inter">
                Nearly three decades of experience in designing and manufacturing reliable hospital furniture, with a strong commitment to quality and customer satisfaction.
              </p>
            </div>

            {/* Card 3: 1,000 Hospital Beds */}
            <div
              className="absolute left-[25%] top-[55%] w-[190px] rounded-[3.5rem] p-6 py-[40px] shadow-lg border border-slate-100/60 text-center z-30"
              style={{ background: "linear-gradient(135deg, #ffffff 65%, #f7fbfbd7 65%)" }}
            >
              <span className="text-3xl font-bold text-gray-600 block">1,000</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-3 leading-snug">Hospital Beds Delivered in a Single Month</span>
            </div>

            {/* Card 4: 4,000+ Served */}
            <div
              className="absolute left-[35%] top-[23%] w-[190px] rounded-[3.5rem] py-[50px] p-6 shadow-lg border border-slate-100/60 text-center z-20"
              style={{ background: "linear-gradient(135deg, #ffffff 65%, #f7fbfbd7 65%)" }}
            >
              <span className="text-3xl font-bold text-gray-600 block">4,000+</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-3 leading-snug">Healthcare Institutions Served</span>
            </div>

            {/* Small blue floating dot square */}
            <div className="absolute left-[42%] top-[58%] w-6 h-6 bg-[#0353A4] rounded-lg shadow-sm z-20" />

            {/* Card 5: Gear Icon card */}
            <div className="absolute left-[53%] top-[43%] w-[120px] h-[120px] bg-white rounded-[2.5rem] shadow-lg border border-slate-100/60 flex items-center justify-center p-6 z-10">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/AboutAs/section3/settings.webp"
                  alt="Settings"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Card 6: Blue 29+ Card */}
            <div
              className="absolute left-[59%] top-[18%] w-[210px] h-[210px] text-white flex flex-col justify-center items-center rounded-[4rem] shadow-xl p-6 text-center z-20"
              style={{ background: "linear-gradient(135deg, #0353A4 65%, rgba(9, 98, 194, 0.95)5%)" }}
            >
              <span className="text-5xl font-bold block">29+</span>
              <span className="text-[11px] text-slate-200 font-semibold uppercase tracking-wider block mt-2 leading-snug">Years of Manufacturing Excellence</span>
            </div>

            {/* Small orange floating dot square */}
            <div className="absolute left-[81%] top-[10%] w-6 h-6 bg-[#E86D24] rounded-lg shadow-sm z-20" />

            {/* Card 7: Spanner Icon card */}
            <div className="absolute left-[78%] top-[24%] w-[110px] h-[110px] bg-white rounded-[2.5rem] shadow-lg border border-slate-100/60 flex items-center justify-center p-6 z-20">
              <div className="relative w-14 h-14">
                <Image
                  src="/images/AboutAs/section3/spanner.webp"
                  alt="Spanner"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Card 8: 30,000+ Products */}
            <div
              className="absolute left-[73%] top-[58%] w-[190px] rounded-[3rem] p-6 py-[40px] shadow-lg border border-slate-100/60 text-center z-20"
              style={{ background: "linear-gradient(135deg, #ffffff 65%, #F4F6F8 65%)" }}
            >
              <span className="text-3xl font-bold text-gray-600 block">30,000+</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-3 leading-snug">Products Manufactured Every Year</span>
            </div>
          </div>

          {/* Mobile/Tablet Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:hidden mt-8">
            {/* Card 1 */}
            <div className="bg-[#E86D24] text-white flex flex-col justify-center items-center rounded-3xl p-6 text-center shadow-lg col-span-1">
              <div className="relative w-12 h-12 mb-3 mx-auto">
                <Image src="/images/AboutAs/section3/infrastructure.webp" alt="Infrastructure" fill className="object-contain filter brightness-0 invert" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider leading-snug">Advanced Manufacturing Infrastructure</span>
            </div>

            {/* Card 2 Note */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100/60 col-span-2 md:col-span-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs">i</span>
              </div>
              <p className="text-slate-600 text-xs font-medium leading-relaxed font-inter text-justify">
                Nearly three decades of experience in designing and manufacturing reliable hospital furniture, with a strong commitment to quality and customer satisfaction.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="rounded-3xl p-6 shadow-lg border border-slate-100/60 text-center col-span-1 flex flex-col justify-center min-h-[140px]"
              style={{ background: "linear-gradient(135deg, #ffffff 65%, #f7fbfbd7 65%)" }}
            >
              <span className="text-3xl font-bold text-gray-600 block">1,000</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-2">Hospital Beds Delivered in a Single Month</span>
            </div>

            {/* Card 4 */}
            <div
              className="rounded-3xl p-6 shadow-lg border border-slate-100/60 text-center col-span-1 flex flex-col justify-center min-h-[140px]"
              style={{ background: "linear-gradient(135deg, #ffffff 65%, #f7fbfbd7 65%)" }}
            >
              <span className="text-3xl font-bold text-gray-600 block">4,000+</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-2">Healthcare Institutions Served</span>
            </div>

            {/* Card 6 */}
            <div
              className="text-white flex flex-col justify-center items-center rounded-3xl p-6 text-center shadow-lg col-span-2 md:col-span-1 min-h-[140px]"
              style={{ background: "linear-gradient(135deg, #0353A4 65%, rgba(9, 98, 194, 0.95) 65%)" }}
            >
              <span className="text-3xl font-bold block">29+</span>
              <span className="text-[10px] text-slate-200 font-semibold uppercase tracking-wider block mt-1">Years of Manufacturing Excellence</span>
            </div>

            {/* Card 8 */}
            <div
              className="rounded-3xl p-6 shadow-lg border border-slate-100/60 text-center col-span-2 md:col-span-1 flex flex-col justify-center min-h-[140px]"
              style={{ background: "linear-gradient(135deg, #ffffff 65%, #f7fbfbd7 65%)" }}
            >
              <span className="text-3xl font-bold text-gray-600 block">30,000+</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-2">Products Manufactured Every Year</span>
            </div>
          </div>

          {/* Bottom Title Headline */}
          <div className="text-center mt-12">
            <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-500 tracking-widest uppercase font-montserrat">
              A Journey Built On Trust, Innovation  <br /> & Manufacturing Excellence
            </h3>
          </div>
        </FadeIn>
      </section>

      {/* 4. OUR FOUNDATION SECTION */}
      <section className="w-full px-[4vw] space-y-12 !mt-10">
        <div className="flex justify-start">
          <div className="inline-flex items-center gap-4 text-[#0B2545] font-bold text-xl uppercase tracking-wider">
            <span className="relative w-7 h-7 flex-shrink-0">
              <Image
                src="/images/AboutAs/aboutAs.webp"
                alt="Vision & Mission Icon"
                fill
                className="object-contain"
              />
            </span>
            <span className="relative pb-1">
              OUR VISION & MISSION
              <span className="absolute left-0 bottom-0 w-12 h-[3.5px] bg-[#E86D24] rounded-full" />
            </span>
          </div>
        </div>

        <FadeIn
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          direction="up"
          delay={0.1}
        >
          {/* Card 1: Vision */}
          <div className="bg-[#F5ECE5]/80 rounded-3xl overflow-hidden shadow-md flex flex-col hover:shadow-lg transition-all duration-300">
            {/* Header Image */}
            <div className="relative h-[150px] w-full">
              <Image
                src="/images/AboutAs/section4/card1bg.webp"
                alt="Our Vision"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
              <div className="absolute bottom-4 right-6 text-right">
                <h3 className="text-white text-2xl font-extrabold tracking-wider uppercase font-montserrat">
                  OUR VISION
                </h3>
              </div>
            </div>

            {/* Content Area */}
            <div className="relative p-8 flex-grow flex flex-col justify-between min-h-[300px]">
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-[3px] border-l-[3px] border-[#E86D24]" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-[3px] border-r-[3px] border-[#E86D24]" />

              <div className="space-y-4 pt-4 pb-4">
                <h4 className="text-lg font-bold text-[#0B2545] leading-snug font-montserrat">
                  A Stronger Future for Healthcare Infrastructure
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify font-medium font-inter">
                  We envision a future where healthcare institutions have access to dependable, thoughtfully engineered, and accessible hospital furniture solutions that support better patient care.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify font-medium font-inter">
                  Our ambition is to grow from a trusted manufacturing partner into a broader healthcare engineering organization, continuously improving products, processes, technology, and service.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Mission */}
          <div className="bg-[#DFE5EB]/80 rounded-3xl overflow-hidden shadow-md flex flex-col hover:shadow-lg transition-all duration-300">
            {/* Header Image */}
            <div className="relative h-[150px] w-full">
              <Image
                src="/images/AboutAs/section4/card2bg.webp"
                alt="Our Mission"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
              <div className="absolute bottom-4 right-6 text-right">
                <h3 className="text-white text-2xl font-extrabold tracking-wider uppercase font-montserrat">
                  OUR MISSION
                </h3>
              </div>
            </div>

            {/* Content Area */}
            <div className="relative p-8 flex-grow flex flex-col justify-between min-h-[300px]">
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-[3px] border-l-[3px] border-[#E86D24]" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-[3px] border-r-[3px] border-[#E86D24]" />

              <div className="space-y-4 pt-4 pb-4">
                <h4 className="text-lg font-bold text-[#0B2545] leading-snug font-montserrat">
                  Engineering Better Healthcare Experiences
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify font-medium font-inter">
                  Our mission is to manufacture reliable healthcare products by bringing together:
                </p>
                <div className="text-slate-700 text-[10px] sm:text-xs font-semibold text-center border-y border-slate-300/40 py-2.5 my-2 font-inter leading-relaxed bg-white/40 rounded-xl px-2">
                  Advanced Technology + Skilled Manufacturing + Quality Processes + Practical Design + Customer Understanding
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify font-medium font-inter">
                  We aim to create products that make everyday healthcare environments more functional, efficient, safe, and comfortable for patients and caregivers.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Core */}
          <div className="bg-[#DFE6E1]/80 rounded-3xl overflow-hidden shadow-md flex flex-col hover:shadow-lg transition-all duration-300">
            {/* Header Image */}
            <div className="relative h-[150px] w-full">
              <Image
                src="/images/AboutAs/section4/card3bg.webp"
                alt="Our Core"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
              <div className="absolute bottom-4 right-6 text-right">
                <h3 className="text-white text-2xl font-extrabold tracking-wider uppercase font-montserrat">
                  OUR CORE
                </h3>
              </div>
            </div>

            {/* Content Area */}
            <div className="relative p-8 flex-grow flex flex-col justify-between min-h-[300px]">
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-[3px] border-l-[3px] border-[#E86D24]" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-[3px] border-r-[3px] border-[#E86D24]" />

              <div className="space-y-4 pt-4 pb-4">
                <h4 className="text-lg font-bold text-[#0B2545] leading-snug font-montserrat">
                  The principles that guide how we design, manufacture, serve, and grow.
                </h4>
                
                <div className="grid grid-cols-2 gap-y-6 pt-2">
                  {[
                    { label: "Quality", icon: Gem },
                    { label: "Customer Satisfaction", icon: Smile },
                    { label: "Integrity", icon: ShieldCheck },
                    { label: "Transparency", icon: Eye },
                    { label: "Innovation", icon: Sparkles },
                    { label: "Teamwork", icon: Users },
                    { label: "Reliability", icon: Shield },
                    { label: "Continuous Improvement", icon: RefreshCw },
                  ].map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2 text-slate-700">
                        <IconComponent className="w-4 h-4 text-emerald-800 flex-shrink-0" />
                        <span className="text-[11px] sm:text-sm font-semibold font-inter">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 5. TIMELINE / CONTINUOUS PROGRESS SECTION */}
      <section 
        className="w-full px-[4vw] py-16 relative bg-cover bg-center bg-no-repeat !mt-10"
        style={{ backgroundImage: "url('/images/AboutAs/section5/bgframe.webp')" }}
      >
        <div className="flex flex-col lg:flex-row gap-12 items-stretch w-full h-full relative z-10">
          {/* Left Column: Heading */}
          <FadeIn className="w-full lg:w-[40%] flex flex-col justify-start space-y-6" direction="left" delay={0.1}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-4 text-[#0B2545] font-bold text-xl uppercase tracking-wider">
                <span className="relative w-7 h-7 flex-shrink-0">
                  <Image
                    src="/images/AboutAs/aboutAs.webp"
                    alt="Journey Icon"
                    fill
                    className="object-contain"
                  />
                </span>
                <span className="relative pb-1">
                  OUR JOURNEY
                  <span className="absolute left-0 bottom-0 w-1/2 h-[3px] bg-[#E86D24] rounded-full" />
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] leading-tight font-montserrat">
                Nearly Three Decades of <br /> Continuous Progress
              </h2>
            </div>
            <p className="text-slate-600 text-base leading-relaxed font-medium font-inter text-justify">
              From a small beginning in 1997 to becoming a trusted name in healthcare furniture — our journey is built on quality, innovation, and unwavering commitment.
            </p>
          </FadeIn>

          {/* Middle & Right Column wrapper (Timeline list) */}
          <FadeIn className="w-full lg:w-[60%] h-full relative flex flex-col justify-center" direction="right" delay={0.2}>
            {/* Clean spacing timeline container */}
            <div className="w-full space-y-12 relative py-4">
              {/* Central timeline line - starts at first icon and ends at last icon */}
              <div className="absolute left-[28px] top-[8.3%] bottom-[8.3%] w-[2px] bg-orange-200">
                {/* Orange Dots placed exactly halfway between icons */}
                {[15, 35, 55, 75, 95].map((percentage, i) => (
                  <div 
                    key={i} 
                    className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#E86D24] border-2 border-white shadow-sm"
                    style={{top: `${percentage}%`, transform: 'translate(-50%, -50%)' }}
                  />
                ))}
              </div>
              {[
                {
                  subtitle: "1997 — The Beginning",
                  title: "The Beginning",
                  desc: "Mathurams begins its journey with a vision to manufacture dependable hospital furniture for the growing healthcare sector.",
                  icon: "/images/AboutAs/section5/Icons/solar_flag-bold.svg",
                  img: "/images/AboutAs/section5/progressImages/image.webp"
                },
                {
                  subtitle: "Early Growth",
                  title: "Growing Stronger",
                  desc: "Expanded manufacturing capabilities and developed a wider range of hospital furniture to serve different healthcare environments.",
                  icon: "/images/AboutAs/section5/Icons/Simplification.svg",
                  img: "/images/AboutAs/section5/progressImages/image (1).webp"
                },
                {
                  subtitle: "Technology & Process Expansion",
                  title: "Stronger Through Technology",
                  desc: "Introduced advanced fabrication, welding, finishing, and production technologies to improve precision and consistency.",
                  icon: "/images/AboutAs/section5/Icons/Simplification (1).svg",
                  img: "/images/AboutAs/section5/progressImages/image (2).webp"
                },
                {
                  subtitle: "Product Portfolio Expansion",
                  title: "More Solutions. Greater Impact.",
                  desc: "Developed a comprehensive range covering patient care, ward, emergency, mobility, and hospital utility requirements.",
                  icon: "/images/AboutAs/section5/Icons/Simplification (2).svg",
                  img: "/images/AboutAs/section5/progressImages/image (3).webp"
                },
                {
                  subtitle: "Today",
                  title: "Serving Healthcare, Across India",
                  desc: "Serving healthcare institutions across India with standard products, customized solutions, manufacturing expertise, and dependable support.",
                  icon: "/images/AboutAs/section5/Icons/Simplification (3).svg",
                  img: "/images/AboutAs/section5/progressImages/image (4).webp"
                },
                {
                  subtitle: "The Next Chapter",
                  title: "Building the Future",
                  desc: "Continuing to invest in technology, automation, product development, and capabilities for future healthcare requirements.",
                  icon: "/images/AboutAs/section5/Icons/Simplification (4).svg",
                  img: "/images/AboutAs/section5/progressImages/image (5).webp"
                }
              ].map((item, idx) => (
                <div key={idx} className="relative pl-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                  {/* Timeline icon circle */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white border-2 border-orange-200 flex items-center justify-center shadow-md z-10">
                    <span className="relative w-7 h-7">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </span>
                  </div>

                  {/* Left part: text content */}
                  <div className="flex-1 space-y-1.5">
                    <span className="text-[12.5px] font-semibold text-[#E86D24] uppercase tracking-wide">
                      {item.subtitle}
                    </span>
                    <h3 className="text-base sm:text-2xl font-semibold text-[#0B2545] font-montserrat">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-[13px] lg:text-sm leading-relaxed font-medium font-inter text-justify">
                      {item.desc}
                    </p>
                  </div>

                  {/* Right part: horizontal rectangle image card */}
                  <div className="flex-shrink-0">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={240}
                      height={150}
                      className="w-auto h-20 md:h-28 lg:h-32 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. WHERE DESIGN MEETS MANUFACTURING (CAPABILITIES) */}
      <section id="capabilities" className="w-full px-[4vw] space-y-8 !mt-16">
        {/* Section Header */}
        <div className="flex justify-start">
          <div className="inline-flex items-center gap-4 text-[#0B2545] font-bold text-xl uppercase tracking-wider">
            <span className="relative w-7 h-7 flex-shrink-0">
              <Image
                src="/images/AboutAs/aboutAs.webp"
                alt="Engineered Icon"
                fill
                className="object-contain"
              />
            </span>
            <span className="relative pb-1">
              ENGINEERED UNDER ONE ROOF
              <span className="absolute left-0 bottom-0 w-12 h-[3.5px] bg-[#E86D24] rounded-full" />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Welder Photo */}
          <FadeIn className="lg:col-span-5" direction="left" delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[3/4] w-full max-h-[600px] bg-slate-100 border border-slate-200">
              <Image
                src="/images/AboutAs/section6/leftImage.webp"
                alt="Welders and Steel Fabrication"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Right Column: Capabilities grid */}
          <FadeIn
            className="lg:col-span-7 space-y-6"
            direction="right"
            delay={0.2}
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2545] leading-tight font-montserrat">
                Where Design <span className="text-[#E86D24]">Meets Manufacturing</span>
              </h2>
              <div className="space-y-3 text-slate-600 text-sm leading-relaxed font-medium font-inter text-justify">
                <p>
                  Our manufacturing facility brings multiple production processes together under one roof, allowing us to maintain better control over quality, precision, and production timelines.
                </p>
                <p>
                  From raw material processing to fabrication, finishing, assembly, and final inspection, every stage is carefully coordinated by our production and quality teams.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-4">
              {[
                {
                  title: "Precision Fabrication",
                  desc: "CNC laser cutting, CNC bending, press brake operations, hydraulic pressing, and pipe processing.",
                  icon: "/images/AboutAs/section6/Icons/Simplification.svg"
                },
                {
                  title: "Advanced Welding",
                  desc: "MIG, TIG, laser, and robotic welding processes for consistent and durable joints.",
                  icon: "/images/AboutAs/section6/Icons/Simplification (1).svg"
                },
                {
                  title: "Surface Finishing",
                  desc: "Grinding, buffing, electroplating, and in-house powder coating for reliable surface protection.",
                  icon: "/images/AboutAs/section6/Icons/Simplification (2).svg"
                },
                {
                  title: "Assembly & Upholstery",
                  desc: "Dedicated processes for product assembly, upholstery, finishing, and final preparation.",
                  icon: "/images/AboutAs/section6/Icons/Simplification (3).svg"
                },
                {
                  title: "Packing & Dispatch",
                  desc: "Systematic packing and handling to ensure products reach customers safely and ready for use.",
                  icon: "/images/AboutAs/section6/Icons/Simplification (4).svg"
                },
                {
                  title: "Quality Inspection",
                  desc: "Products undergo final quality checks to ensure they meet defined standards before packing, dispatch, and delivery.",
                  icon: "/images/AboutAs/section6/Icons/Simplification (5).svg"
                }
              ].map((cap, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ">
                    <div className="relative w-12 h-12">
                      <Image
                        src={cap.icon}
                        alt={cap.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-[#0B2545] text-base font-montserrat">
                      {cap.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium font-inter text-justify">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Shared bg-black container wrapper for Sections 7 & 8 to eliminate sub-pixel spacing leaks from parent space-y layout */}
      <div className="w-full bg-black flex flex-col !mt-20">
        {/* 7. THE PRINCIPLES BEHIND MATHURAMS (DARK BANNER GRID) */}
        <section 
          className="w-full relative px-[4vw] py-20 bg-cover bg-center bg-no-repeat overflow-hidden min-h-[85vh] flex flex-col justify-between bg-black !mt-0"
          style={{ backgroundImage: "url('/images/AboutAs/section7/bgImage.webp')" }}
        >
          {/* Dark overlays to blend image horizontally and vertically into Section 8 theme */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-black/85 z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 via-85% to-black z-0" />

          <div className="relative z-10 w-full space-y-16">
            {/* Header & Titles */}
            <FadeIn className="max-w-3xl space-y-6" direction="left" delay={0.1}>
              <div className="inline-flex items-center gap-4 text-white font-bold text-xl uppercase tracking-wider">
                <span className="relative w-8 h-8 flex-shrink-0">
                  <Image
                    src="/images/AboutAs/aboutAs.webp"
                    alt="Quality Principles Icon"
                    fill
                    className="object-contain"
                  />
                </span>
                <span className="relative pb-1">
                  HOW WE BUILD QUALITY
                  <span className="absolute left-0 bottom-0 w-12 h-[3.5px] bg-[#E86D24] rounded-full" />
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-semibold text-white leading-tight font-montserrat">
                The Principles Behind Mathurams
              </h2>
              <div className="text-white text-md md:text-lg leading-relaxed mx-auto space-y-2 font-medium max-w-7xl">
                <p className="text-slate-300 font-inter text-sm sm:text-base leading-relaxed text-left max-w-2xl">
                  Built on a foundation of precision engineering, state-of-the-art technology, and rigorous quality control. We adhere to the highest international standards in every component we manufacture.
                </p>
              </div>
            </FadeIn>

            {/* Principles Cards Grid (4 Columns) */}
            <FadeIn className="w-full" direction="up" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Advanced Technology",
                    desc: "Leveraging state-of-the-art CNC machinery and automated systems to deliver unmatched manufacturing accuracy and components.",
                    img: "/images/AboutAs/section7/Cards/Rectangle.webp"
                  },
                  {
                    title: "Quality Materials",
                    desc: "Sourcing only premium-grade metals, polymers, and raw materials, verified through strict testing before entering production.",
                    img: "/images/AboutAs/section7/Cards/Rectangle 74 (1).webp"
                  },
                  {
                    title: "Expert Craftsmanship",
                    desc: "Our highly trained engineers and artisans bring decades of collective experience, supervising every stage of production.",
                    img: "/images/AboutAs/section7/Cards/Rectangle 74 (2).webp"
                  },
                  {
                    title: "Rigorous Inspection",
                    desc: "Every single component undergoes strict multi-point checks and coordinate measurements to ensure flawless performance.",
                    img: "/images/AboutAs/section7/Cards/Rectangle 74 (3).webp"
                  }
                ].map((card, idx) => (
                  <div 
                    key={idx}
                    className="group relative flex flex-col items-center bg-[#071321]/60 hover:bg-[#091a2e]/85 border border-[#162a42] hover:border-sky-500/30 rounded-3xl p-6 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-sky-950/20 h-full text-center"
                  >
                    {/* Quality Seal Icon Badge */}
                    <div className="relative w-10 h-10 mb-4 flex-shrink-0">
                      <Image
                        src="/images/AboutAs/section7/QualityIcon.webp"
                        alt="Quality Badge Icon"
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Title & Desc Container */}
                    <div className="flex-1 flex flex-col justify-start space-y-2 mb-4">
                      <h4 className="text-lg font-bold text-white font-montserrat">
                        {card.title}
                      </h4>
                      <p className="text-slate-300 text-[11.5px] leading-relaxed font-medium font-inter text-center px-1">
                        {card.desc}
                      </p>
                    </div>

                    {/* Card Bottom Illustration Image */}
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mt-auto flex-shrink-0">
                      <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 8. SKILLED HANDS BEHIND EVERY PRODUCT (TEAM WORKFLOW) */}
        <section className="w-full relative h-auto overflow-hidden bg-black !mt-0">
          {/* Header (Top-left) - absolute on top of the image */}
          <FadeIn direction="down" delay={0.1} className="absolute top-0 left-0 z-10 w-full px-[4vw] pt-12 md:pt-16 flex justify-between items-start">
            <div className="inline-flex items-center gap-4 text-white font-bold text-xl uppercase tracking-wider">
              <span className="relative w-7 h-7 flex-shrink-0">
                <Image
                  src="/images/AboutAs/aboutAs.webp"
                  alt="Our People Icon"
                  fill
                  className="object-contain"
                />
              </span>
              <span className="relative pb-1">
                OUR PEOPLE
                <span className="absolute left-0 bottom-0 w-1/2 h-[3.5px] bg-[#E86D24] rounded-full" />
              </span>
            </div>

            {/* Outline Text on Top-Right */}
            <div 
              className="text-right hidden sm:block text-2xl md:text-3xl lg:text-4xl font-bold font-montserrat tracking-wide uppercase select-none"
              style={{ 
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.45)", 
                color: "transparent",
                WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.15) 100%)",
                maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.15) 100%)"
              }}
            >
              One Team. <br /> One Standard.
            </div>
          </FadeIn>

          {/* The SVG Image inline - defines the height of the section naturally */}
          <FadeIn direction="up" delay={0.2} duration={0.8} className="w-full h-auto z-0 block">
            <img
              src="/images/AboutAs/section8/image.svg"
              alt="Our People and Operations Diagram"
              className="w-full h-auto block"
            />
          </FadeIn>
        </section>
      </div>

      {/* 9. COMPLETE SOLUTION BOTTOM CTA BANNER */}
      <section className="w-full px-[3vw] py-16 !mt-0">
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
            <div className="relative inline-flex items-center gap-2 text-[13px] font-bold text-white uppercase pb-2 w-max">
              <svg
                className="w-5 h-5 text-[#E86D24]"
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
              <span className="absolute left-0 bottom-0 w-16 h-[3px] bg-[#E86D24] rounded-full" />
            </div>

            {/* Main Title */}
            <h2 className="text-2xl md:text-4xl font-semibold text-white leading-tight mt-4 ">
              Looking for Complete
              <br />
              Hospital Furniture Solutions?
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
              <Link href="/contact#enquiry-form">
                <button className="bg-[#E86D24] hover:bg-[#EE7D22] text-white font-bold text-xs px-5 py-3.5 rounded-xl uppercase shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2">
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
              </Link>

              <a href="tel:+919176212345">
                <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white/60 hover:border-white font-bold text-xs px-5 py-3 rounded-xl uppercase transition-all inline-flex items-center gap-2">
                  <Image
                    src="/images/ContactPage/call.webp"
                    alt="Call Icon"
                    width={18}
                    height={18}
                    className="object-contain "
                  />
                  Contact Sales
                </button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
