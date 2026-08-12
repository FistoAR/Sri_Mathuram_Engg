"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FAFBFC] min-h-screen montserrat-page  space-y-24">
      {/* 1. HERO BANNER */}
      <section className="relative w-full min-h-[90vh] lg:h-[90vh] lg:min-h-[700px] bg-[#0F2D4A] px-[3vw] py-12 lg:py-0 overflow-hidden flex items-center justify-center">
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
            <div className="inline-flex items-center gap-2 text-white font-bold text-xl uppercase">
              <span className="relative w-6 h-6 flex-shrink-0">
                <Image
                  src="/images/AboutAs/aboutAs.webp"
                  alt="About Icon"
                  fill
                  className="object-contain"
                />
              </span>
              <span className="relative pb-1">
                ABOUT US
                <span className="absolute left-0 bottom-0 w-1/2 h-[2.5px] bg-[#E86D24] rounded-full" />
              </span>
            </div>
          </div>

          {/* Centered Contents */}
          <div className="text-center w-full flex flex-col justify-center items-center gap-6 md:gap-10 py-6">
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mx-auto flex flex-col gap-3 md:gap-5">
              <span>EVERY HOSPITAL WE SERVE</span>
              <span>BECOMES PART OF OUR STORY</span>
            </h1>

            {/* Description */}
            <div className="text-white text-md md:text-lg leading-relaxed mx-auto space-y-2 font-medium max-w-4xl">
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
                  <span className="relative w-4 h-4 flex-shrink-0">
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
                  <span className="relative w-4 h-4 flex-shrink-0">
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
        className="w-full relative z-20 bg-cover bg-center bg-no-repeat py-12 md:py-16 lg:h-[90vh] lg:min-h-[700px] lg:py-0 flex items-center !mt-0"
        style={{ backgroundImage: "url('/images/AboutAs/section2/aboutbg.webp')" }}
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between w-full px-[4vw]">
          {/* Left Column: Image wrapper */}
          <FadeIn className="w-full lg:w-[30%] relative" direction="left" delay={0.1}>
            <div className="relative aspect-[3/4] w-full lg:w-auto lg:h-[54vh] z-10">
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
            className="w-full lg:w-[65%] space-y-6 mt-8 lg:mt-0"
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
                    style={{ filter: "brightness(0) saturate(100%) invert(39%) saturate(1478%) hue-rotate(346deg) brightness(97%) contrast(90%)" }}
                  />
                </span>
                <span className="relative pb-1">
                  OUR COMPANY STORY
                  <span className="absolute left-0 bottom-0 w-1/2 h-[3px] bg-[#E86D24] rounded-full" />
                </span>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-5xl sm:text-6xl font-extrabold text-[#0B2545] tracking-wider">
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
        className="w-full relative z-20 bg-cover bg-center bg-no-repeat py-20 px-[4vw] min-h-[90vh] flex flex-col justify-between !mt-0"
        style={{ backgroundImage: "url('/images/AboutAs/section3/section3bg.webp')" }}
      >
        <FadeIn className="w-full h-full flex flex-col justify-between" direction="up" delay={0.1}>
          {/* Tagline aligned to the left */}
          <div className="flex justify-start mb-6">
            <div className="inline-flex items-center gap-2 text-[#0B2545] font-semibold text-lg uppercase">
              <span className="relative w-6 h-6 flex-shrink-0">
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
      <section className="w-full px-[8vw] space-y-12">
        <FadeIn
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          direction="up"
          delay={0.1}
        >
          {/* Card 1: Vision */}
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-8 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center">
                <Image
                  src="/images/ContactPage/quoat 1.webp"
                  alt="Vision"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-extrabold text-[#0B2545] tracking-wide uppercase border-b border-slate-100 pb-2">
                OUR VISION
              </h3>
              <h4 className="text-[#E86D24] font-bold text-md leading-snug">
                To lead in medical hardware innovation.
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed font-medium font-inter">
                To be the most trusted and preferred partner for hospital
                furniture globally, recognized for engineering excellence and
                quality.
              </p>
            </div>
          </div>

          {/* Card 2: Mission */}
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-8 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                <Image
                  src="/images/ContactPage/quoat 1.webp"
                  alt="Mission"
                  width={24}
                  height={24}
                  className="object-contain filter hue-rotate-180"
                />
              </div>
              <h3 className="text-xl font-extrabold text-[#0B2545] tracking-wide uppercase border-b border-slate-100 pb-2">
                OUR MISSION
              </h3>
              <h4 className="text-[#E86D24] font-bold text-md leading-snug">
                To manufacture excellence for healthcare.
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed font-medium font-inter">
                To design and produce medical hardware that ensures patient
                safety, enhances clinical productivity, and delivers long-term
                durability.
              </p>
            </div>
          </div>

          {/* Card 3: Core Values */}
          <div className="bg-[#0B2545] text-white rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-[#E86D24] tracking-wide uppercase border-b border-white/10 pb-2">
                OUR CORES
              </h3>
              <h4 className="text-white font-bold text-md leading-snug">
                The values that drive us everyday.
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Quality First",
                  "Innovation",
                  "Integrity",
                  "Customer Focus",
                  "Collaboration",
                ].map((value, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-slate-200 text-sm font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E86D24]" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 5. TIMELINE / CONTINUOUS PROGRESS SECTION */}
      <section className="w-full px-[8vw] space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading and faint drawing */}
          <FadeIn
            className="lg:col-span-4 space-y-6"
            direction="left"
            delay={0.1}
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-[#E86D24] font-bold text-xs uppercase">
                <span className="relative pb-1">
                  OUR HISTORY
                  <span className="absolute left-0 bottom-0 w-1/2 h-[2px] bg-[#E86D24] rounded-full" />
                </span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#0B2545] leading-tight">
                Nearly Three Decades of Continuous Progress
              </h2>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed font-medium font-inter">
              Since our humble beginnings in 1997, Sri Mathurams has steadily
              expanded its facilities, upgraded technologies, and diversified
              products to meet the evolving needs of global healthcare.
            </p>
          </FadeIn>

          {/* Right Column: Timeline Steps */}
          <FadeIn
            className="lg:col-span-8 space-y-8 pl-6 border-l-2 border-slate-200 relative"
            direction="right"
            delay={0.2}
          >
            {[
              {
                year: "1997",
                title: "Established & Began Operations",
                desc: "Started in Guindy, Chennai with a focus on standard ward accessories.",
              },
              {
                year: "2004",
                title: "Facility Expansion",
                desc: "Moved to a larger manufacturing base and introduced automated tube-bending setups.",
              },
              {
                year: "2011",
                title: "Technological Upgrade",
                desc: "Introduced robot-assisted welding protocols and anti-corrosion coating lines.",
              },
              {
                year: "2018",
                title: "Product Portfolio Diversification",
                desc: "Launched customized ICU beds and specialized hydraulic OT tables.",
              },
              {
                year: "2022",
                title: "Pan-India Logistics & Exports",
                desc: "Expanded services globally, logistics networks covering clinical setup setups.",
              },
              {
                year: "Present",
                title: "Next-Gen Smart Furniture",
                desc: "Designing advanced IoT-enabled clinical beds and layout integration profiles.",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative pl-6 space-y-1">
                {/* Timeline Dot Indicator */}
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#E86D24] border-4 border-white shadow-sm" />
                <div className="flex items-center gap-2">
                  <span className="text-sm font-extrabold text-[#E86D24] bg-orange-50 px-2 py-0.5 rounded-md border border-orange-100">
                    {item.year}
                  </span>
                  <h4 className="font-bold text-[#0B2545] text-base">
                    {item.title}
                  </h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-medium font-inter">
                  {item.desc}
                </p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* 6. WHERE DESIGN MEETS MANUFACTURING (CAPABILITIES) */}
      <section id="capabilities" className="w-full px-[8vw] space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Welder Photo */}
          <FadeIn className="lg:col-span-5" direction="left" delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[420px] bg-slate-100 border border-slate-200 card-orange-accent-border">
              <Image
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
                alt="Welders and Steel Fabrication"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
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
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-[#E86D24] font-bold text-xs uppercase">
                <span className="relative pb-1">
                  OUR CAPABILITIES
                  <span className="absolute left-0 bottom-0 w-1/2 h-[2px] bg-[#E86D24] rounded-full" />
                </span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#0B2545] leading-tight">
                Where Design Meets Manufacturing
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                {
                  title: "Mechanical Design",
                  desc: "Advanced R&D utilizing CAD/CAM modeling to optimize ergonomics.",
                },
                {
                  title: "Precision Fabrication",
                  desc: "High accuracy CNC cutting and bending for reliable parts.",
                },
                {
                  title: "Welding & Assembly",
                  desc: "Robust robot-assisted welding protocols ensuring long lifecycle.",
                },
                {
                  title: "Powder Coating & Finish",
                  desc: "Multi-stage anti-corrosion treatments for layout hygiene.",
                },
                {
                  title: "Quality Inspection",
                  desc: "100% load testing and finish compliance tracking.",
                },
                {
                  title: "Logistics & Delivery",
                  desc: "Dedicated dispatch for safe setup and placement layouts.",
                },
              ].map((cap, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-6 h-6 rounded bg-orange-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#E86D24] text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B2545] text-base">
                      {cap.title}
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed font-medium mt-0.5">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. THE PRINCIPLES BEHIND MATHURAMS (DARK BANNER GRID) */}
      <section className="w-full px-[8vw]">
        <FadeIn
          className="bg-[#0F2D4A] rounded-3xl p-8 md:p-12 text-white space-y-12 shadow-xl border border-slate-700/40 relative overflow-hidden"
          direction="up"
          delay={0.1}
        >
          {/* Overlay glow */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Heading */}
          <div className="max-w-2xl space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 text-[#E86D24] font-bold text-xs uppercase">
              <span className="relative pb-1">
                LEADERSHIP / VALUES
                <span className="absolute left-0 bottom-0 w-1/2 h-[2px] bg-[#E86D24] rounded-full" />
              </span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight">
              The Principles Behind Mathurams
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed font-medium font-inter">
              Our success is defined by the values we practice every day. Here
              are the core pillars that guide our team and production lines.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {[
              {
                title: "Quality Focus",
                desc: "Uncompromising focus on material grade and assembly checks.",
              },
              {
                title: "Safety Assured",
                desc: "Design configurations built to prevent layout accidents.",
              },
              {
                title: "Innovation Led",
                desc: "Constant updates to product designs and functionality.",
              },
              {
                title: "Durability Standard",
                desc: "Products engineered to withstand high load and usage cycles.",
              },
              {
                title: "Customer Trust",
                desc: "Building long-term relationships through transparent support.",
              },
              {
                title: "Expert Team",
                desc: "Highly trained technicians and engineers operating facilities.",
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="bg-navy-950/40 border border-white/5 rounded-2xl p-6 space-y-2 hover:border-white/15 transition-all"
              >
                <span className="text-[#E86D24] text-xs font-extrabold tracking-wider uppercase block">
                  0{idx + 1}. {pillar.title}
                </span>
                <p className="text-slate-300 text-xs leading-relaxed font-medium font-inter">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* 8. SKILLED HANDS BEHIND EVERY PRODUCT (TEAM WORKFLOW) */}
      <section className="w-full px-[8vw] space-y-12">
        <FadeIn
          className="text-center space-y-4 max-w-3xl mx-auto"
          direction="up"
          delay={0.1}
        >
          <div className="inline-flex items-center gap-2 text-[#E86D24] font-bold text-xs uppercase">
            <span className="relative pb-1">
              OUR TEAM
              <span className="absolute left-0 bottom-0 w-1/2 h-[2px] bg-[#E86D24] rounded-full" />
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#0B2545] leading-tight">
            Skilled Hands Behind Every Product
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed font-medium font-inter">
            Our dedicated workforce combines technical expertise with a
            commitment to quality to manufacture furniture that meets
            international standards.
          </p>
        </FadeIn>

        {/* Circular workflow arc path layout visualization */}
        <FadeIn
          className="relative max-w-4xl mx-auto py-12 flex flex-wrap justify-center gap-8 items-center"
          direction="up"
          delay={0.2}
        >
          {[
            {
              role: "Production Manager",
              name: "Ensures seamless fabrication workflow",
            },
            {
              role: "Design Lead",
              name: "Engineers layout customization plans",
            },
            {
              role: "Quality Control",
              name: "Performs load stress validation tests",
            },
            {
              role: "Welding Specialist",
              name: "Maintains durable joints and finish",
            },
            {
              role: "Assembly Expert",
              name: "Integrates electronics and actuators",
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 text-center space-y-2 hover:shadow-md transition-all duration-300 w-44"
            >
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-[#0B2545] font-extrabold border border-slate-200">
                {idx + 1}
              </div>
              <h4 className="font-bold text-[#0B2545] text-sm leading-tight">
                {member.role}
              </h4>
              <p className="text-slate-400 text-[10px] leading-tight font-medium font-inter">
                {member.name}
              </p>
            </div>
          ))}
        </FadeIn>
      </section>

      {/* 9. COMPLETE SOLUTION BOTTOM CTA BANNER */}
      <section className="w-full px-[3vw]">
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
