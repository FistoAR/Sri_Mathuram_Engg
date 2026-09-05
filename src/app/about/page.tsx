"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Gem, ShieldCheck, Sparkles, Shield, Smile, Eye, Users, RefreshCw } from "lucide-react";
import { useInquiryModal } from "@/components/ui/InquiryModalContext";
import { TypewriterText } from "@/components/ui/TypewriterText";

export default function AboutPage() {
  const { openInquiryModal } = useInquiryModal();
  const canvasRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const nx = (x / rect.width) * 2 - 1;
      const ny = (y / rect.height) * 2 - 1;

      canvas.style.setProperty('--mx', nx.toFixed(3));
      canvas.style.setProperty('--my', ny.toFixed(3));
    };

    const onMouseLeave = () => {
      canvas.style.setProperty('--mx', '0');
      canvas.style.setProperty('--my', '0');
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);
    return () => {
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div className="w-full bg-[#FAFBFC] min-h-screen montserrat-page  space-y-24">
      {/* 1. HERO BANNER */}
      <section className="relative w-full min-h-[92vh] lg:h-[92vh] lg:min-h-[700px] bg-[#0F2D4A] px-[3vw] py-3 lg:py-16 overflow-hidden flex justify-center" style={{overflowX:'hidden'}}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ContactPage/HeroBanner.webp"
            alt="Healthcare Spaces"
            fill priority sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 w-full mx-auto flex flex-col justify-start">
          {/* Label — fades up */}
          <div className="flex justify-start mb-6 md:mb-12 ab-label">
            <div className="inline-flex items-center gap-4 text-white font-bold text-2xl uppercase">
              <span className="relative w-7 h-7 flex-shrink-0">
                <Image src="/images/AboutAs/sectionIcons/aboutAs.webp" alt="About Icon" fill className="object-contain" />
              </span>
              <span className="relative pb-1">
                <TypewriterText text="ABOUT US" />
                <span className="absolute left-0 bottom-0 w-1/2 h-[3.5px] bg-[#E86D24] rounded-full" />
              </span>
            </div>
          </div>

          {/* Title — each line reveals left→right (clip-path typing) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mx-auto text-center flex flex-col gap-3 md:gap-5">
            <span className="ab-line ab-line-1">EVERY HOSPITAL WE SERVE</span>
            <span className="ab-line ab-line-2">BECOMES PART OF OUR STORY</span>
          </h1>

          {/* Description — each line fades in white one by one */}
          <div className="text-white text-md md:text-lg leading-relaxed mx-auto space-y-1.5 font-medium max-w-7xl text-center mt-8">
            {[
              "Since 1997, Sri Mathurams Medical Engineering has been helping hospitals build better",
              "healthcare environments through dependable hospital furniture, advanced manufacturing, and",
              "customer-focused solutions. Every product we manufacture reflects our passion for quality and",
              "our commitment to supporting better patient care.",
            ].map((line, i) => (
              <p
                key={i}
                className="text-white ab-desc-line"
                style={{ animationDelay: `${1.4 + i * 0.22}s` }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Buttons — left from left, right from right */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8 mt-2">
            <Link href="#who-we-are" className="ab-btn-left group">
              <button className="relative overflow-hidden bg-[#E86D24] text-white font-semibold text-base sm:text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center gap-2.5">
                {/* Glossy Sweep Shine */}
                <span className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-[150%] group-hover:animate-[abShine_0.75s_ease-in-out]" />
                <span>Explore Our Journey</span>
                <span className="relative w-5 h-5 flex-shrink-0 group-hover:translate-x-1.5 transition-transform duration-300">
                  <Image src="/images/AboutAs/arrow1.webp" alt="Arrow Right" fill className="object-contain" />
                </span>
              </button>
            </Link>
            <Link href="#capabilities" className="ab-btn-right group">
              <button className="relative overflow-hidden bg-white text-[#104272] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center gap-2.5 border border-[#104272]/20">
                {/* Background sliding fill */}
                <span className="absolute inset-0 bg-[#104272] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                {/* Content Overlay */}
                <span className="relative z-10 flex items-center gap-2.5 group-hover:text-white transition-colors duration-300">
                  <span>View Manufacturing Facility</span>
                  <span className="relative w-5 h-5 flex-shrink-0 group-hover:translate-x-1.5 transition-transform duration-300">
                    <Image
                      src="/images/AboutAs/arrow2.webp"
                      alt="Arrow Navigation"
                      fill
                      className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    />
                  </span>
                </span>
              </button>
            </Link>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
/* Label fades up */
          .ab-label {
            opacity: 0;
            transform: translateY(-16px);
            animation: abLabelIn 0.5s ease 0.1s forwards;
          }
          @keyframes abLabelIn {
            from { opacity:0; transform:translateY(-16px); }
            to   { opacity:1; transform:none; }
          }

          /* Title lines — clip-path reveal left→right */
          .ab-line {
            display: block;
            clip-path: inset(0 100% 0 0);
          }
          .ab-line-1 { animation: abReveal 0.48s linear 0.25s forwards; }
          .ab-line-2 { animation: abReveal 0.55s linear 0.76s forwards; }
          @keyframes abReveal {
            from { clip-path: inset(0 100% 0 0); }
            to   { clip-path: inset(0 0% 0 0); }
          }

          /* Description lines — each fades in white */
          .ab-desc-line {
            opacity: 0;
            transform: translateY(8px);
            animation: abDescIn 0.5s ease forwards;
          }
          @keyframes abDescIn {
            from { opacity:0; transform:translateY(8px); }
            to   { opacity:1; transform:none; }
          }

          /* Buttons — directional slide */
          .ab-btn-left  { opacity:0; transform:translateX(-40px); animation:abBtnL 0.55s cubic-bezier(.22,1,.36,1) 2.35s forwards; }
          .ab-btn-right { opacity:0; transform:translateX( 40px); animation:abBtnR 0.55s cubic-bezier(.22,1,.36,1) 2.5s  forwards; }
          @keyframes abBtnL { from{opacity:0;transform:translateX(-40px)} to{opacity:1;transform:none} }
          @keyframes abBtnR { from{opacity:0;transform:translateX( 40px)} to{opacity:1;transform:none} }

          /* Button glossy shine sweep keyframes */
          @keyframes abShine {
            0% { transform: translateX(-150%) skewX(-12deg); }
            100% { transform: translateX(250%) skewX(-12deg); }
          }
` }} />
      </section>

      {/* 2. WHO WE ARE / OUR COMPANY STORY SECTION */}
      <section
        id="who-we-are"
        className="w-full relative z-20 bg-white py-12 lg:py-16 flex flex-col justify-center !mt-0"
      >
        {/* Tagline aligned to the top left of the section */}
        <div className="w-full px-[4vw] mb-12 flex justify-start">
          <div className="inline-flex  gap-2 text-[#0C3D6C] font-semibold text-lg uppercase">
            <span className="relative w-8 h-8 flex-shrink-0">
              <Image
                src="/images/AboutAs/sectionIcons/ourCompanyStory.webp"
                alt="Story Icon"
                fill
                className="object-contain"
              />
            </span>
            <span className="relative pb-1">
              <TypewriterText text="OUR STORY" speed={1} delay={1} step={3} />
              <span className="absolute left-0 bottom-0 w-1/2 h-[3px] bg-[#E86D24] rounded-full" />
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between w-full px-[4vw]">
          {/* Left Column: Image wrapper */}
          <FadeIn className="relative w-full lg:max-w-[420px] lg:ml-8" direction="left" delay={0.1}>
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
          <div className="w-full space-y-14 mt-2 lg:mt-0" ref={(el) => {
            if (!el) return;
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  // entry.boundingClientRect.top > 0 means element is coming from below the viewport
                  // i.e. user is scrolling DOWN → play animation
                  if (entry.boundingClientRect.top > 0) {
                    el.classList.remove('section2-visible');
                    void el.offsetHeight; // force reflow to restart CSS animations
                    el.classList.add('section2-visible');
                  }
                  // If top <= 0, element entered from above (scrolling UP) → do nothing
                } else if (entry.boundingClientRect.top > window.innerHeight) {
                  // Element is below screen (user scrolled back up past it) → reset for next scroll down
                  el.classList.remove('section2-visible');
                }
              },
              { threshold: 0.1 }
            );
            observer.observe(el);
          }}>

            <div className="space-y-8">
              {/* Typing title — word-wrapped so characters never break mid-word */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B2545] tracking-wider">
                {"Building Healthcare Infrastructure Since 1997".split(" ").map((word, wIdx, words) => {
                  const charOffset = words.slice(0, wIdx).join(" ").length + (wIdx > 0 ? 1 : 0);
                  return (
                    <React.Fragment key={wIdx}>
                      <span className="inline-block whitespace-nowrap">
                        {Array.from(word).map((char, cIdx) => (
                          <span
                            key={cIdx}
                            className="inline-block section2-char"
                            style={{ opacity: 0, animationDelay: `${(charOffset + cIdx) * 0.045}s` }}
                          >
                            {char}
                          </span>
                        ))}
                      </span>
                      {wIdx < words.length - 1 && (
                        <span
                          className="inline-block section2-char"
                          style={{ opacity: 0, animationDelay: `${(charOffset + word.length) * 0.045}s` }}
                        >
                          {"\u00A0"}
                        </span>
                      )}
                    </React.Fragment>
                  );
                })}
              </h2>

              {/* Paragraphs line by line */}
              {[
                "Healthcare is built on trust and for more than 29 years, Sri Mathurams Medical Engineering has earned that trust by manufacturing hospital furniture and medical equipment that combines quality, durability, functionality, and value.",
                "Founded in 1997, the company began with a simple vision: to strengthen healthcare infrastructure by manufacturing dependable hospital furniture that supports doctors, caregivers, and patients alike.",
                "What started as a small manufacturing unit has grown into one of South India's trusted hospital furniture manufacturers, supplying hospitals, medical colleges, clinics, healthcare, distributors, and individual customers across India.",
              ].map((text, i) => (
                <p
                  key={i}
                  className="text-slate-600 text-md sm:text-lg leading-relaxed font-medium font-inter section2-line"
                  style={{
                    opacity: 0,
                    animationDelay: `${(45 * 0.045) + 0.3 + i * 0.3}s`,
                  }}
                >
                  {text}
                </p>
              ))}
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
.section2-visible .section2-char {
                animation: s2CharIn 0.05s ease forwards;
              }
              .section2-visible .section2-line {
                animation: s2LineIn 0.5s ease forwards;
              }
              @keyframes s2CharIn {
                from { opacity: 0; transform: translateY(5px); }
                to   { opacity: 1; transform: translateY(0); }
              }
              @keyframes s2LineIn {
                from { opacity: 0; transform: translateY(12px); }
                to   { opacity: 1; transform: translateY(0); }
              }
` }} />
          </div>
        </div>
      </section>

      {/* 3. KEY STATS GRID SECTION (OUR MILESTONES) */}
      <section
        id="milestones"
        className="w-full relative z-20 bg-cover bg-center bg-no-repeat pt-20 pb-8 px-[4vw] min-h-[90vh] flex flex-col justify-between !mt-0"
        style={{ backgroundImage: "url('/images/AboutAs/section3/section3bg.webp')" }}
      >
        <div
          className="w-full h-full flex flex-col justify-between"
          ref={(el) => {
            if (!el) return;
            // Direction-aware observer: only animate on scroll down
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
                  el.classList.remove('ms-visible');
                  void el.offsetHeight;
                  el.classList.add('ms-visible');
                } else if (entry.boundingClientRect.top > window.innerHeight) {
                  el.classList.remove('ms-visible');
                }
              },
              { threshold: 0.1 }
            );
            observer.observe(el);
          }}
        >
          {/* Tagline aligned to the left */}
          <div className="flex justify-start mb-6">
            <div className="inline-flex items-center gap-4 text-[#0C3D6C] font-semibold text-xl uppercase">
              <span className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/images/AboutAs/sectionIcons/milestone.webp"
                  alt="Milestone Icon"
                  fill
                  className="object-contain"
                  style={{ filter: "brightness(0) saturate(100%) invert(39%) sepia(87%) saturate(1478%) hue-rotate(346deg) brightness(97%) contrast(90%)" }}
                />
              </span>
              <span className="relative pb-1">
                <TypewriterText text="OUR MILESTONES" />
                <span className="absolute left-0 bottom-0 w-1/2 h-[3px] bg-[#E86D24] rounded-full" />
              </span>
            </div>
          </div>

          {/* Desktop Floating/Staggered Canvas */}
          <div className="hidden lg:block relative w-full h-[520px] mx-auto" ref={canvasRef}>
            {/* Card 1: Orange — flies in from LEFT */}
            <div className="ms-card absolute left-[13%] top-[25%] w-[190px] h-[190px] z-10" style={{ "--tx": "-120px", "--ty": "0px", "--delay": "0s" } as React.CSSProperties}>
              <div className="ms-parallax w-full h-full" style={{ "--sx": "-18px", "--sy": "-18px" } as React.CSSProperties}>
                <div className="ms-float-1 w-full h-full bg-[#E86D24] text-white flex flex-col justify-center items-center rounded-[3.5rem] shadow-xl p-4 text-center">
                  <div className="relative w-20 h-20 mb-3">
                    <Image src="/images/AboutAs/section3/infrastructure.webp" alt="Infrastructure" fill className="object-contain filter brightness-0 invert" />
                  </div>
                  <span className="text-[11px] font-medium tracking-wider">ADVANCED MANUFACTURING INFRASTRUCTURE</span>
                </div>
              </div>
            </div>

            {/* Card 2: Note card — flies in from TOP-LEFT */}
            <div className="ms-card absolute left-[22%] -top-[5%] w-[190px] h-[180px] z-30" style={{ "--tx": "-80px", "--ty": "-100px", "--delay": "0.12s" } as React.CSSProperties}>
              <div className="ms-parallax w-full h-full" style={{ "--sx": "14px", "--sy": "14px" } as React.CSSProperties}>
                <div className="ms-float-2 w-full h-full text-justify bg-white rounded-[1rem] p-4 shadow-lg border border-slate-100/60 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs">i</span>
                  </div>
                  <p className="text-slate-600 text-xs font-medium leading-relaxed font-inter">
                    Nearly three decades of experience in designing and manufacturing reliable hospital furniture, with a strong commitment to quality and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: 1,000 — flies in from BOTTOM-LEFT */}
            <div className="ms-card absolute left-[25%] top-[55%] w-[190px] h-[190px] z-30" style={{ "--tx": "-80px", "--ty": "100px", "--delay": "0.22s" } as React.CSSProperties}>
              <div className="ms-parallax w-full h-full" style={{ "--sx": "-10px", "--sy": "-10px" } as React.CSSProperties}>
                <div className="ms-float-3 w-full h-full rounded-[3.5rem] p-6 py-[40px] shadow-lg border border-slate-100/60 text-center flex flex-col justify-center items-center" style={{ background: "linear-gradient(135deg, #ffffff 65%, #f7fbfbd7 65%)" }}>
                  <span className="text-3xl font-bold text-gray-600 block">1,000</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-3 leading-snug">Hospital Beds Delivered in a Single Month</span>
                </div>
              </div>
            </div>

            {/* Card 4: 4,000+ — flies in from TOP */}
            <div className="ms-card absolute left-[35%] top-[23%] w-[190px] h-[210px] z-20" style={{ "--tx": "0px", "--ty": "-120px", "--delay": "0.32s" } as React.CSSProperties}>
              <div className="ms-parallax w-full h-full" style={{ "--sx": "22px", "--sy": "22px" } as React.CSSProperties}>
                <div className="ms-float-4 w-full h-full rounded-[3.5rem] py-[50px] p-6 shadow-lg border border-slate-100/60 text-center flex flex-col justify-center items-center" style={{ background: "linear-gradient(135deg, #ffffff 65%, #f7fbfbd7 65%)" }}>
                  <span className="text-3xl font-bold text-gray-600 block">4,000+</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-3 leading-snug">Healthcare Served</span>
                </div>
              </div>
            </div>

            {/* Small blue dot — pops in from center */}
            <div className="ms-card absolute left-[42%] top-[58%] w-6 h-6 z-20" style={{ "--tx": "0px", "--ty": "60px", "--delay": "0.38s" } as React.CSSProperties}>
              <div className="ms-parallax w-full h-full" style={{ "--sx": "-30px", "--sy": "-30px" } as React.CSSProperties}>
                <div className="ms-float-2 w-full h-full bg-[#0353A4] rounded-lg shadow-sm" />
              </div>
            </div>

            {/* Card 5: Gear — flies in from BOTTOM */}
            <div className="ms-card absolute left-[53%] top-[43%] w-[120px] h-[120px] z-10" style={{ "--tx": "0px", "--ty": "100px", "--delay": "0.44s" } as React.CSSProperties}>
              <div className="ms-parallax w-full h-full" style={{ "--sx": "10px", "--sy": "-10px" } as React.CSSProperties}>
                <div className="ms-float-1 w-full h-full bg-white rounded-[2.5rem] shadow-lg border border-slate-100/60 flex items-center justify-center p-6">
                  <div className="relative w-12 h-12">
                    <Image src="/images/AboutAs/section3/settings.webp" alt="Settings" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: Blue 29+ — flies in from RIGHT */}
            <div className="ms-card absolute left-[59%] top-[18%] w-[210px] h-[210px] z-20" style={{ "--tx": "120px", "--ty": "-60px", "--delay": "0.18s" } as React.CSSProperties}>
              <div className="ms-parallax w-full h-full" style={{ "--sx": "-15px", "--sy": "15px" } as React.CSSProperties}>
                <div className="ms-float-2 w-full h-full text-white flex flex-col justify-center items-center rounded-[4rem] shadow-xl p-6 text-center" style={{ background: "linear-gradient(135deg, #0353A4 65%, rgba(9, 98, 194, 0.95) 65%)" }}>
                  <span className="text-5xl font-bold block">29+</span>
                  <span className="text-[11px] text-slate-200 font-semibold uppercase tracking-wider block mt-2 leading-snug">Years of Manufacturing Excellence</span>
                </div>
              </div>
            </div>

            {/* Small orange dot — pops in from TOP-RIGHT */}
            <div className="ms-card absolute left-[81%] top-[10%] w-6 h-6 z-20" style={{ "--tx": "60px", "--ty": "-60px", "--delay": "0.5s" } as React.CSSProperties}>
              <div className="ms-parallax w-full h-full" style={{ "--sx": "25px", "--sy": "-25px" } as React.CSSProperties}>
                <div className="ms-float-4 w-full h-full bg-[#E86D24] rounded-lg shadow-sm" />
              </div>
            </div>

            {/* Card 7: Spanner — flies in from RIGHT */}
            <div className="ms-card absolute left-[78%] top-[24%] w-[110px] h-[110px] z-20" style={{ "--tx": "100px", "--ty": "0px", "--delay": "0.28s" } as React.CSSProperties}>
              <div className="ms-parallax w-full h-full" style={{ "--sx": "12px", "--sy": "12px" } as React.CSSProperties}>
                <div className="ms-float-3 w-full h-full bg-white rounded-[2.5rem] shadow-lg border border-slate-100/60 flex items-center justify-center p-6">
                  <div className="relative w-14 h-14">
                    <Image src="/images/AboutAs/section3/spanner.webp" alt="Spanner" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 8: 30,000+ — flies in from BOTTOM-RIGHT */}
            <div className="ms-card absolute left-[70%] top-[58%] w-[190px] h-[190px] z-20" style={{ "--tx": "100px", "--ty": "100px", "--delay": "0.36s" } as React.CSSProperties}>
              <div className="ms-parallax w-full h-full" style={{ "--sx": "-20px", "--sy": "-20px" } as React.CSSProperties}>
                <div className="ms-float-4 w-full h-full rounded-[3rem] p-6 py-[40px] shadow-lg border border-slate-100/60 text-center flex flex-col justify-center items-center" style={{ background: "linear-gradient(135deg, #ffffff 65%, #F4F6F8 65%)" }}>
                  <span className="text-3xl font-bold text-gray-600 block">30,000+</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-3 leading-snug">Products Manufactured Every Year</span>
                </div>
              </div>
            </div>

            {/* Card 9: 7,000+ — flies in from RIGHT */}
            <div className="ms-card absolute left-[85%] top-[40%] w-[190px] h-[190px] z-20" style={{ "--tx": "120px", "--ty": "40px", "--delay": "0.44s" } as React.CSSProperties}>
              <div className="ms-parallax w-full h-full" style={{ "--sx": "15px", "--sy": "-15px" } as React.CSSProperties}>
                <div className="ms-float-1 w-full h-full rounded-[3rem] p-6 py-[40px] shadow-lg border border-slate-100/60 text-center flex flex-col justify-center items-center" style={{ background: "linear-gradient(135deg, #ffffff 65%, #F4F6F8 65%)" }}>
                  <span className="text-3xl font-bold text-gray-600 block">7,000+</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-3 leading-snug">More than 7,000+ Happy Customers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:hidden mt-8">
            {/* Card 1 */}
            <div className="ms-card bg-[#E86D24] text-white flex flex-col justify-center items-center rounded-3xl p-6 text-center shadow-lg col-span-1" style={{ "--tx": "-60px", "--ty": "0px", "--delay": "0s" } as React.CSSProperties}>
              <div className="relative w-12 h-12 mb-3 mx-auto">
                <Image src="/images/AboutAs/section3/infrastructure.webp" alt="Infrastructure" fill className="object-contain filter brightness-0 invert" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider leading-snug">Advanced Manufacturing Infrastructure</span>
            </div>
            {/* Card 2 Note */}
            <div className="ms-card bg-white rounded-3xl p-6 shadow-lg border border-slate-100/60 col-span-2 md:col-span-1 flex flex-col justify-center" style={{ "--tx": "0px", "--ty": "-60px", "--delay": "0.1s" } as React.CSSProperties}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs">i</span>
              </div>
              <p className="text-slate-600 text-xs font-medium leading-relaxed font-inter text-justify">
                Nearly three decades of experience in designing and manufacturing reliable hospital furniture, with a strong commitment to quality and customer satisfaction.
              </p>
            </div>
            {/* Card 3 */}
            <div className="ms-card rounded-3xl p-6 shadow-lg border border-slate-100/60 text-center col-span-1 flex flex-col justify-center min-h-[140px]" style={{ background: "linear-gradient(135deg, #ffffff 65%, #f7fbfbd7 65%)", "--tx": "-60px", "--ty": "60px", "--delay": "0.2s" } as React.CSSProperties}>
              <span className="text-3xl font-bold text-gray-600 block">1,000</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-2">Hospital Beds Delivered in a Single Month</span>
            </div>
            {/* Card 4 */}
            <div className="ms-card rounded-3xl p-6 shadow-lg border border-slate-100/60 text-center col-span-1 flex flex-col justify-center min-h-[140px]" style={{ background: "linear-gradient(135deg, #ffffff 65%, #f7fbfbd7 65%)", "--tx": "60px", "--ty": "60px", "--delay": "0.3s" } as React.CSSProperties}>
              <span className="text-3xl font-bold text-gray-600 block">4,000+</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-2">Healthcare Served</span>
            </div>
            {/* Card 6 */}
            <div className="ms-card text-white flex flex-col justify-center items-center rounded-3xl p-6 text-center shadow-lg col-span-2 md:col-span-1 min-h-[140px]" style={{ background: "linear-gradient(135deg, #0353A4 65%, rgba(9, 98, 194, 0.95) 65%)", "--tx": "60px", "--ty": "0px", "--delay": "0.4s" } as React.CSSProperties}>
              <span className="text-3xl font-bold block">29+</span>
              <span className="text-[10px] text-slate-200 font-semibold uppercase tracking-wider block mt-1">Years of Manufacturing Excellence</span>
            </div>
            {/* Card 8 */}
            <div className="ms-card rounded-3xl p-6 shadow-lg border border-slate-100/60 text-center col-span-2 md:col-span-1 flex flex-col justify-center min-h-[140px]" style={{ background: "linear-gradient(135deg, #ffffff 65%, #f7fbfbd7 65%)", "--tx": "0px", "--ty": "60px", "--delay": "0.5s" } as React.CSSProperties}>
              <span className="text-3xl font-bold text-gray-600 block">30,000+</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-2">Products Manufactured Every Year</span>
            </div>
            {/* Card 9 */}
            <div className="ms-card rounded-3xl p-6 shadow-lg border border-slate-100/60 text-center col-span-2 md:col-span-1 flex flex-col justify-center min-h-[140px]" style={{ background: "linear-gradient(135deg, #ffffff 65%, #f7fbfbd7 65%)", "--tx": "0px", "--ty": "60px", "--delay": "0.6s" } as React.CSSProperties}>
              <span className="text-3xl font-bold text-gray-600 block">7,000+</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-2">More than 7,000+ Happy Customers</span>
            </div>
          </div>

          {/* Bottom Title Headline */}
          <div className="text-center mt-12">
            <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-500 tracking-widest uppercase font-montserrat">
              A Journey Built On Trust, Innovation  <br /> &amp; Manufacturing Excellence
            </h3>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
/* Cards start hidden and offset */
            .ms-card {
              opacity: 0;
              transform: translate(var(--tx, 0px), var(--ty, 0px)) scale(0.88);
              transition: none;
            }
            /* When parent gets the class, animate each card */
            .ms-visible .ms-card {
              animation: msCardIn 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
              animation-delay: var(--delay, 0s);
            }
            @keyframes msCardIn {
              from {
                opacity: 0;
                transform: translate(var(--tx, 0px), var(--ty, 0px)) scale(0.88);
              }
              to {
                opacity: 1;
                transform: translate(0, 0) scale(1);
              }
            }

            /* Parallax mouse movement tracking container */
            .ms-parallax {
              transform: translate(
                calc(var(--mx, 0) * var(--sx, 0px)),
                calc(var(--my, 0) * var(--sy, 0px))
              );
              transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
            }

            /* Water-like slow drifting floating animations */
            .ms-float-1 { animation: waterFloat1 7s ease-in-out infinite; }
            .ms-float-2 { animation: waterFloat2 8.5s ease-in-out infinite; }
            .ms-float-3 { animation: waterFloat3 6s ease-in-out infinite; }
            .ms-float-4 { animation: waterFloat4 9.5s ease-in-out infinite; }

            @keyframes waterFloat1 {
              0%, 100% { transform: translate(0, 0) rotate(0deg); }
              33% { transform: translate(-3px, -7px) rotate(0.8deg); }
              66% { transform: translate(2px, -3px) rotate(-0.4deg); }
            }
            @keyframes waterFloat2 {
              0%, 100% { transform: translate(0, 0) rotate(0deg); }
              40% { transform: translate(3px, -5px) rotate(-0.8deg); }
              80% { transform: translate(-2px, -8px) rotate(0.6deg); }
            }
            @keyframes waterFloat3 {
              0%, 100% { transform: translate(0, 0) rotate(0deg); }
              50% { transform: translate(-4px, -9px) rotate(1.2deg); }
            }
            @keyframes waterFloat4 {
              0%, 100% { transform: translate(0, 0) rotate(0deg); }
              30% { transform: translate(3px, -8px) rotate(-0.6deg); }
              70% { transform: translate(-3px, -4px) rotate(0.4deg); }
            }

            /* Interactive card lifting and highlighting on cursor hover */
            .ms-card:hover {
              z-index: 50 !important;
            }
            .ms-card:hover [class^="ms-float-"] {
              transform: scale(1.08) translateY(-14px) !important;
              box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 12px 15px -5px rgba(0, 0, 0, 0.15) !important;
              animation-play-state: paused !important; /* Pause natural floating drift on hover */
            }
            [class^="ms-float-"] {
              transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1);
            }
` }} />
        </div>
      </section>

      {/* 4. OUR FOUNDATION SECTION */}
      <section className="w-full px-[4vw] space-y-12 !mt-10">
        <div className="flex justify-start">
          <div className="inline-flex items-center gap-4 text-[#0C3D6C] font-bold text-xl uppercase tracking-wider">
            <span className="relative w-8 h-8 flex-shrink-0">
              <Image
                src="/images/AboutAs/sectionIcons/ourVision.webp"
                alt="Vision & Mission Icon"
                fill
                className="object-contain"
              />
            </span>
            <span className="relative pb-1">
              <TypewriterText text="OUR VISION & MISSION" />
              <span className="absolute left-0 bottom-0 w-12 h-[3.5px] bg-[#E86D24] rounded-full" />
            </span>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          ref={(el) => {
            if (!el) return;
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
                  el.classList.remove('vm-visible');
                  void el.offsetHeight;
                  el.classList.add('vm-visible');
                } else if (entry.boundingClientRect.top > window.innerHeight) {
                  el.classList.remove('vm-visible');
                }
              },
              { threshold: 0.15 }
            );
            observer.observe(el);
          }}
        >
          {/* Card 1: Vision — slides from LEFT */}
          <div
            className="vm-card bg-[#F5ECE5]/80 rounded-3xl overflow-hidden shadow-md flex flex-col hover:shadow-lg transition-shadow duration-300"
            style={{ "--vm-tx": "-100px", "--vm-ty": "0px", "--vm-delay": "0s" } as React.CSSProperties}
          >
            <div className="relative h-[150px] w-full">
              <Image src="/images/AboutAs/section4/card1bg.webp" alt="Our Vision" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
              <div className="absolute bottom-4 right-6 text-right">
                <h3 className="text-white text-2xl font-extrabold tracking-wider uppercase font-montserrat">OUR VISION</h3>
              </div>
            </div>
            <div className="relative p-8 flex-grow flex flex-col justify-between min-h-[300px]">
              {/* Animated corner brackets */}
              <div className="vm-bracket-tl absolute top-4 left-4 w-8 h-8 border-t-[3px] border-l-[3px] border-[#E86D24]" />
              <div className="vm-bracket-br absolute bottom-4 right-4 w-8 h-8 border-b-[3px] border-r-[3px] border-[#E86D24]" />
              <div className="space-y-4 pt-4 pb-4">
                <h4 className="text-lg font-bold text-[#0B2545] leading-snug font-montserrat">A Stronger Future for Healthcare Infrastructure</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify font-medium font-inter">We envision a future where healthcare has access to dependable, thoughtfully engineered, and accessible hospital furniture solutions that support better patient care.</p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify font-medium font-inter">Our ambition is to grow from a trusted manufacturing partner into a broader healthcare engineering organization, continuously improving products, processes, technology, and service.</p>
              </div>
            </div>
          </div>

          {/* Card 2: Mission — slides from BOTTOM */}
          <div
            className="vm-card bg-[#DFE5EB]/80 rounded-3xl overflow-hidden shadow-md flex flex-col hover:shadow-lg transition-shadow duration-300"
            style={{ "--vm-tx": "0px", "--vm-ty": "100px", "--vm-delay": "0.15s" } as React.CSSProperties}
          >
            <div className="relative h-[150px] w-full">
              <Image src="/images/AboutAs/section4/card2bg.webp" alt="Our Mission" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
              <div className="absolute bottom-4 right-6 text-right">
                <h3 className="text-white text-2xl font-extrabold tracking-wider uppercase font-montserrat">OUR MISSION</h3>
              </div>
            </div>
            <div className="relative p-8 flex-grow flex flex-col justify-between min-h-[300px]">
              <div className="vm-bracket-tl absolute top-4 left-4 w-8 h-8 border-t-[3px] border-l-[3px] border-[#E86D24]" />
              <div className="vm-bracket-br absolute bottom-4 right-4 w-8 h-8 border-b-[3px] border-r-[3px] border-[#E86D24]" />
              <div className="space-y-4 pt-4 pb-4">
                <h4 className="text-lg font-bold text-[#0B2545] leading-snug font-montserrat">Engineering Better Healthcare Experiences</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify font-medium font-inter">Our mission is to manufacture reliable healthcare products by bringing together:</p>
                <div className="text-slate-700 text-[10px] sm:text-xs font-semibold text-center border-y border-slate-300/40 py-2.5 my-2 font-inter leading-relaxed bg-white/40 rounded-xl px-2">
                  Advanced Technology + Skilled Manufacturing + Quality Processes + Practical Design + Customer Understanding
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify font-medium font-inter">We aim to create products that make everyday healthcare environments more functional, efficient, safe, and comfortable for patients and caregivers.</p>
              </div>
            </div>
          </div>

          {/* Card 3: Core — slides from RIGHT */}
          <div
            className="vm-card bg-[#DFE6E1]/80 rounded-3xl overflow-hidden shadow-md flex flex-col hover:shadow-lg transition-shadow duration-300"
            style={{ "--vm-tx": "100px", "--vm-ty": "0px", "--vm-delay": "0.3s" } as React.CSSProperties}
          >
            <div className="relative h-[150px] w-full">
              <Image src="/images/AboutAs/section4/card3bg.webp" alt="Our Core" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
              <div className="absolute bottom-4 right-6 text-right">
                <h3 className="text-white text-2xl font-extrabold tracking-wider uppercase font-montserrat">OUR CORE</h3>
              </div>
            </div>
            <div className="relative p-8 flex-grow flex flex-col justify-between min-h-[300px]">
              <div className="vm-bracket-tl absolute top-4 left-4 w-8 h-8 border-t-[3px] border-l-[3px] border-[#E86D24]" />
              <div className="vm-bracket-br absolute bottom-4 right-4 w-8 h-8 border-b-[3px] border-r-[3px] border-[#E86D24]" />
              <div className="space-y-4 pt-4 pb-4">
                <h4 className="text-lg font-bold text-[#0B2545] leading-snug font-montserrat">The principles that guide how we design, manufacture, serve, and grow.</h4>
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
                        <span className="text-[11px] sm:text-sm font-semibold font-inter">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
/* ── Card entry animations ── */
            .vm-card {
              opacity: 0;
              transform: translate(var(--vm-tx, 0), var(--vm-ty, 0)) scale(0.92);
            }
            .vm-visible .vm-card {
              animation: vmCardIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
              animation-delay: var(--vm-delay, 0s);
            }
            @keyframes vmCardIn {
              from { opacity: 0; transform: translate(var(--vm-tx, 0), var(--vm-ty, 0)) scale(0.92); }
              to   { opacity: 1; transform: translate(0, 0) scale(1); }
            }

            /* ── Corner bracket loop animation ── */
            /* Top-left bracket: pulses size every 2s */
            .vm-bracket-tl {
              animation: bracketPulseTL 2s ease-in-out infinite;
              transform-origin: top left;
            }
            /* Bottom-right bracket: pulses size every 2s (offset by 1s) */
            .vm-bracket-br {
              animation: bracketPulseBR 2s ease-in-out infinite;
              transform-origin: bottom right;
              animation-delay: 1s;
            }
            @keyframes bracketPulseTL {
              0%, 100% { width: 2rem; height: 2rem; opacity: 0.7; }
              50%       { width: 2.75rem; height: 2.75rem; opacity: 1; }
            }
            @keyframes bracketPulseBR {
              0%, 100% { width: 2rem; height: 2rem; opacity: 0.7; }
              50%       { width: 2.75rem; height: 2.75rem; opacity: 1; }
            }
` }} />
        </div>
      </section>

      {/* 5. TIMELINE / CONTINUOUS PROGRESS SECTION */}
      <section 
        className="w-full px-[4vw] py-16 relative bg-cover bg-center bg-no-repeat !mt-10"
        style={{ backgroundImage: "url('/images/AboutAs/section5/bgframe.webp')" }}
      >
        <div className="flex flex-col lg:flex-row gap-12 items-stretch w-full h-full relative z-10">
          {/* Left Column: Heading */}
          <FadeIn className="w-full lg:w-[33%] flex flex-col justify-start space-y-6" direction="left" delay={0.1}>
            <div className="space-y-12">
              <div className="inline-flex items-center gap-4 text-[#0C3D6C] font-bold text-xl uppercase tracking-wider">
                <span className="relative w-8 h-8 flex-shrink-0">
                  <Image
                    src="/images/AboutAs/sectionIcons/ourJurney.webp"
                    alt="Journey Icon"
                    fill
                    className="object-contain"
                  />
                </span>
                <span className="relative pb-1">
                  <TypewriterText text="OUR JOURNEY" />
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
          <div className="w-full lg:w-[60%] h-full relative flex flex-col justify-center">
            {/* Clean spacing timeline container */}
            <div className="w-full space-y-12 relative py-4">
              {/* Central timeline line */}
              <div className="absolute left-[28px] top-[8.3%] bottom-[8.3%] w-[2px] bg-orange-200">
                {[15, 35, 55, 75, 95].map((percentage, i) => (
                  <div
                    key={i}
                    className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#E86D24] border-2 border-white shadow-sm"
                    style={{ top: `${percentage}%`, transform: 'translate(-50%, -50%)' }}
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
                  desc: "Serving healthcare across India with standard products, customized solutions, manufacturing expertise, and dependable support.",
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
                <div
                  key={idx}
                  className="tl-row relative pl-20 pr-6 py-5 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 group border border-transparent rounded-2xl -mx-4 md:-mx-6 transition-all duration-300 hover:bg-white/95 hover:shadow-xl hover:border-orange-100/60"
                  style={{ "--tl-delay": `0s` } as React.CSSProperties}
                  ref={(el) => {
                    if (!el) return;
                    const observer = new IntersectionObserver(
                      ([entry]) => {
                        if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
                          el.classList.remove('tl-visible');
                          void (el as HTMLElement).offsetHeight;
                          el.classList.add('tl-visible');
                        } else if (entry.boundingClientRect.top > window.innerHeight) {
                          el.classList.remove('tl-visible');
                        }
                      },
                      { threshold: 0.25 }
                    );
                    observer.observe(el);
                  }}
                >
                  {/* Timeline icon circle */}
                  <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white border-2 border-orange-200 flex items-center justify-center shadow-md z-10 group-hover:border-[#E86D24] group-hover:scale-110 transition-all duration-300">
                    <span className="relative w-7 h-7">
                      <Image src={item.icon} alt={item.title} fill className="object-contain" />
                    </span>
                  </div>

                  {/* Left part: text content */}
                  <div className="flex-1 ml-4 space-y-1.5 group-hover:translate-x-1.5 transition-transform duration-300">
                    <span className="text-[12.5px] font-semibold text-[#E86D24] uppercase tracking-wide">{item.subtitle}</span>
                    <h3 className="text-base sm:text-2xl font-semibold text-[#0C3D6C] font-montserrat">{item.title}</h3>
                    <p className="text-slate-600 text-[13px] lg:text-sm leading-relaxed font-medium font-inter text-justify">{item.desc}</p>
                  </div>

                  {/* Right part: image */}
                  <div className="flex-shrink-0 overflow-hidden rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={240}
                      height={150}
                      className="w-auto h-20 md:h-28 lg:h-32 rounded-2xl group-hover:scale-105 transition-all duration-300 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
.tl-row {
                opacity: 0;
                transform: translateY(30px);
                transition: none;
              }
              .tl-row.tl-visible {
                animation: tlRowIn 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
              }
              @keyframes tlRowIn {
                from { opacity: 0; transform: translateY(30px); }
                to   { opacity: 1; transform: translateY(0); }
              }
` }} />
          </div>
        </div>
      </section>

      {/* 6. WHERE DESIGN MEETS MANUFACTURING (CAPABILITIES) */}
      <section id="capabilities" className="w-full px-[4vw] space-y-12 !mt-16">
        {/* Section Header */}
        <div className="flex justify-start">
          <div className="inline-flex items-center gap-4 text-[#0C3D6C] font-bold text-xl uppercase tracking-wider">
            <span className="relative w-8 h-8 flex-shrink-0">
              <Image
                src="/images/AboutAs/sectionIcons/engineered.webp"
                alt="Engineered Icon"
                fill
                className="object-contain"
              />
            </span>
            <span className="relative pb-1">
              <TypewriterText text="ENGINEERED UNDER ONE ROOF" />
              <span className="absolute left-0 bottom-0 w-12 h-[3.5px] bg-[#E86D24] rounded-full" />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch items-center ">
          {/* Left Column: Welder Photo — slides from LEFT */}
          <div
            className="lg:col-span-5 cap-left"
            ref={(el) => {
              if (!el) return;
              const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
                    el.classList.remove('cap-anim');
                    void el.offsetHeight;
                    el.classList.add('cap-anim');
                  } else if (entry.boundingClientRect.top > window.innerHeight) {
                    el.classList.remove('cap-anim');
                  }
                },
                { threshold: 0.15 }
              );
              observer.observe(el);
            }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[3/4] w-full max-h-[600px] bg-slate-100 border border-slate-200">
              <Image
                src="/images/AboutAs/section6/leftImage.webp"
                alt="Welders and Steel Fabrication"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Capabilities — each element animates separately */}
          <div
            className="lg:col-span-7 cap-right flex flex-col justify-between h-full py-1"
            ref={(el) => {
              if (!el) return;
              const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
                    el.classList.remove('cap-anim');
                    void el.offsetHeight;
                    el.classList.add('cap-anim');
                  } else if (entry.boundingClientRect.top > window.innerHeight) {
                    el.classList.remove('cap-anim');
                  }
                },
                { threshold: 0.1 }
              );
              observer.observe(el);
            }}
          >
            {/* Title — index 0 */}
            <h2
              className="cap-item text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2545] font-montserrat"
              style={{ lineHeight: "1.3", "--cap-i": 0 } as React.CSSProperties}
            >
              Where Design  <br /> <span className="text-[#E86D24]">Meets Manufacturing</span>
            </h2>

            {/* Para 1 — index 1 */}
            <p
              className="cap-item text-slate-600 text-md leading-relaxed font-medium font-inter text-justify"
              style={{ "--cap-i": 1 } as React.CSSProperties}
            >
              Our manufacturing facility brings multiple production processes together under one roof, allowing us to maintain better control over quality, precision, and production timelines.
            </p>

            {/* Para 2 — index 2 */}
            <p
              className="cap-item text-slate-600 text-md leading-relaxed font-medium font-inter text-justify"
              style={{ "--cap-i": 2 } as React.CSSProperties}
            >
              From raw material processing to fabrication, finishing, assembly, and final inspection, every stage is carefully coordinated by our production and quality teams.
            </p>

            {/* Capability cards grid — each card index 3–8 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-2">
              {[
                { title: "Precision Fabrication", desc: "CNC laser cutting, CNC bending, press brake operations, hydraulic pressing, and pipe processing.", icon: "/images/AboutAs/section6/Icons/Simplification.svg" },
                { title: "Advanced Welding", desc: "MIG, TIG, laser, and robotic welding processes for consistent and durable joints.", icon: "/images/AboutAs/section6/Icons/Simplification (1).svg" },
                { title: "Surface Finishing", desc: "Grinding, buffing, electroplating, and in-house powder coating for reliable surface protection.", icon: "/images/AboutAs/section6/Icons/Simplification (2).svg" },
                { title: "Assembly & Upholstery", desc: "Dedicated processes for product assembly, upholstery, finishing, and final preparation.", icon: "/images/AboutAs/section6/Icons/Simplification (3).svg" },
                { title: "Packing & Dispatch", desc: "Systematic wrapping and secure dispatch to ensure products reach healthcare facilities in perfect condition.", icon: "/images/AboutAs/section6/Icons/Simplification (4).svg" },
                { title: "Quality Inspection", desc: "Rigorous testing and inspection to ensure every product complies with our strict quality benchmarks.", icon: "/images/AboutAs/section6/Icons/Simplification (5).svg" },
              ].map((cap, idx) => (
                <div
                  key={idx}
                  className="cap-item flex gap-4 items-start"
                  style={{ "--cap-i": idx + 3 } as React.CSSProperties}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="relative w-12 h-12">
                      <Image src={cap.icon} alt={cap.title} fill className="object-contain" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-[#0B2545] text-base font-montserrat">{cap.title}</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium font-inter text-justify">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
/* Left image slides from LEFT */
            .cap-left {
              opacity: 0;
              transform: translateX(-60px);
            }
            .cap-left.cap-anim {
              animation: capFromLeft 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
            }
            @keyframes capFromLeft {
              from { opacity: 0; transform: translateX(-60px); }
              to   { opacity: 1; transform: translateX(0); }
            }

            /* Right column: container is visible (no whole-column fade) */
            .cap-right { opacity: 1; transform: none; }

            /* Each element fades up with staggered delay */
            .cap-item {
              opacity: 0;
              transform: translateY(20px);
            }
            .cap-anim .cap-item {
              animation: capItemIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
              animation-delay: calc(var(--cap-i, 0) * 0.1s + 0.1s);
            }
            @keyframes capItemIn {
              from { opacity: 0; transform: translateY(20px); }
              to   { opacity: 1; transform: translateY(0); }
            }
` }} />
        </div>
      </section>

      {/* Shared bg-black container wrapper for Sections 7 & 8 to eliminate sub-pixel spacing leaks from parent space-y layout */}
      <div className="w-full bg-black flex flex-col !mt-20">
        {/* 7. THE PRINCIPLES BEHIND MATHURAMS (DARK BANNER GRID) */}
        <section 
          className="w-full relative px-[4vw] py-20 bg-cover bg-center bg-no-repeat overflow-hidden min-h-[85vh] flex flex-col justify-between bg-black !mt-0"
          style={{ backgroundImage: "url('/images/AboutAs/section7/bgImage.webp')" }}
        >
          

          <div className="relative z-10 w-full space-y-28">
            {/* Header & Titles */}
            <FadeIn className="max-w-3xl space-y-6" direction="left" delay={0.1}>
              <div className="inline-flex items-center gap-4 text-white font-bold text-xl uppercase tracking-wider">
                <span className="relative w-7 h-7 flex-shrink-0">
                  <Image
                    src="/images/AboutAs/sectionIcons/howWeBuildQuality.webp"
                    alt="Quality Principles Icon"
                    fill
                    className="object-contain"
                  />
                </span>
                <span className="relative pb-1">
                  <TypewriterText text="HOW WE BUILD QUALITY" />
                  <span className="absolute left-0 bottom-0 w-12 h-[3.5px] bg-[#E86D24] rounded-full" />
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-[0.9] tracking-wider font-montserrat">
                The Principles Behind Mathurams
              </h2>
              <div className="text-white text-md md:text-lg leading-relaxed space-y-4 font-medium max-w-md">
                <p className="text-slate-300 font-inter text-base sm:text-lg leading-relaxed text-left max-w-2xl">
                  Our values guide every decision we make, from how we design and manufacture our products to how we work with our customers and partners.
                </p>
                <p className="text-slate-300 font-inter text-base sm:text-lg leading-relaxed text-left max-w-2xl">
                  They shape our commitment to quality, reliability, innovation, and continuous improvement, while building lasting relationships through trust, transparency, and accountability.
                </p>
              </div>
            </FadeIn>

            {/* Principles Cards Grid (6 Columns on Desktop) */}
            <div className="w-full">
              <div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4"
                ref={(el) => {
                  if (!el) return;
                  const observer = new IntersectionObserver(
                    ([entry]) => {
                      if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
                        el.classList.remove('pr-visible');
                        void el.offsetHeight;
                        el.classList.add('pr-visible');
                      } else if (entry.boundingClientRect.top > window.innerHeight) {
                        el.classList.remove('pr-visible');
                      }
                    },
                    { threshold: 0.1 }
                  );
                  observer.observe(el);
                }}
              >
                {[
                  {
                    title: "Quality",
                    desc: "We believe dependable healthcare products begin with uncompromising manufacturing standards.",
                    img: "/images/AboutAs/section7/Cards/Rectangle.webp"
                  },
                  {
                    title: "Reliability",
                    desc: "Our products are designed for environments where consistent performance matters.",
                    img: "/images/AboutAs/section7/Cards/Rectangle 74 (1).webp"
                  },
                  {
                    title: "Integrity",
                    desc: "We believe long-term relationships are built through transparency and accountability.",
                    img: "/images/AboutAs/section7/Cards/Rectangle 74 (2).webp"
                  },
                  {
                    title: "Innovation",
                    desc: "We continuously explore better technologies, processes, and product solutions.",
                    img: "/images/AboutAs/section7/Cards/Rectangle 74 (3).webp"
                  },
                   {
                    title: "Customer Focus",
                    desc: "Every requirement is an opportunity to understand and serve our customers better.",
                    img: "/images/AboutAs/section7/Cards/customerFocus.webp"
                  },
                  {
                    title: "Improvement",
                    desc: "We keep learning, refining, and improving how we design and manufacture.",
                    img: "/images/AboutAs/section7/Cards/immprovement.webp"
                  }
                ].map((card, idx) => (
                  <div 
                    key={idx}
                    className="pr-card h-full"
                    style={{ "--pr-delay": `${0.1 + idx * 0.08}s` } as React.CSSProperties}
                  >
                    <div className="group relative flex flex-col items-center bg-[#0F2747] hover:bg-[#15355e] border border-[#224673] hover:border-orange-500/40 rounded-2xl p-4 transition-all duration-300 transform hover:-translate-y-2 shadow-xl hover:shadow-orange-950/20 h-full text-center">
                      {/* Quality Seal Icon Badge */}
                      <div className="relative w-12 h-12 mb-3 flex-shrink-0">
                        <Image
                          src="/images/AboutAs/section7/QualityIcon.webp"
                          alt="Quality Badge Icon"
                          fill
                          className="object-contain"
                        />
                      </div>

                      {/* Title & Desc Container */}
                      <div className="flex-1 flex flex-col justify-start mb-3">
                        <h4 className="text-lg font-bold text-white tracking-wide">
                          {card.title}
                        </h4>
                        
                        {/* Underline divider that expands and turns orange on hover */}
                        <div className="w-8 h-[2px] bg-slate-500/50 mx-auto mt-2 mb-3 group-hover:w-12 group-hover:bg-[#E86D24] transition-all duration-300" />

                        <p className="text-slate-300 text-[13px] leading-relaxed font-medium font-inter text-center px-0.5">
                          {card.desc}
                        </p>
                      </div>

                      {/* Card Bottom Illustration Image */}
                      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mt-auto flex-shrink-0">
                        <Image
                          src={card.img}
                          alt={card.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <style dangerouslySetInnerHTML={{ __html: `
                .pr-card {
                  opacity: 0;
                  transform: translateY(30px) scale(0.96);
                }
                .pr-visible .pr-card {
                  animation: prCardIn 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                  animation-delay: var(--pr-delay, 0s);
                }
                @keyframes prCardIn {
                  from { opacity: 0; transform: translateY(30px) scale(0.96); }
                  to   { opacity: 1; transform: translateY(0) scale(1); }
                }
              ` }} />
            </div>

          </div>
        </section>

        {/* 8. SKILLED HANDS BEHIND EVERY PRODUCT (TEAM WORKFLOW) */}
        <section
          className="w-full relative bg-black !mt-0"
          ref={(el) => {
            if (!el) return;
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
                  el.classList.remove('op-visible');
                  void el.offsetHeight;
                  el.classList.add('op-visible');
                } else if (entry.boundingClientRect.top > window.innerHeight) {
                  el.classList.remove('op-visible');
                }
              },
              { threshold: 0.1 }
            );
            observer.observe(el);
          }}
        >
          {/* ── MOBILE / TABLET layout (hidden on lg+) ── */}
          <div className="lg:hidden w-full px-[4vw] pt-10 pb-12 flex flex-col gap-8">
            {/* Header */}
            <div className="op-header flex justify-between items-center" style={{ "--op-i": 0 } as React.CSSProperties}>
              <div className="inline-flex items-center gap-3 text-white font-bold text-lg uppercase tracking-wider">
                <span className="relative w-6 h-6 flex-shrink-0">
                  <Image src="/images/AboutAs/sectionIcons/ourPeople.webp" alt="Our People Icon" fill className="object-contain" />
                </span>
                <span className="relative pb-1">
                  <TypewriterText text="OUR PEOPLE" />
                  <span className="absolute left-0 bottom-0 w-1/2 h-[3px] bg-[#E86D24] rounded-full" />
                </span>
              </div>
            </div>

            {/* Title block */}
            <div className="op-header text-center space-y-3" style={{ "--op-i": 1 } as React.CSSProperties}>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight font-montserrat">
                Skilled Hands<br />Behind Every Product
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed font-inter max-w-sm mx-auto">
                Our team brings together engineers, production specialists, skilled fabricators, quality experts, service professionals, and customer support teams.
              </p>
            </div>

            {/* Department cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { label: "Engineering", desc: "Turning requirements into practical solutions.", color: "from-[#0c2f52] to-[#0a3d6b]" },
                { label: "Production", desc: "Converting designs into dependable products.", color: "from-[#0c2f52] to-[#0a3d6b]" },
                { label: "Customer Support", desc: "Keeping communication clear from enquiry to completion.", color: "from-[#0c2f52] to-[#0a3d6b]" },
                { label: "Quality", desc: "Maintaining consistency at every stage.", color: "from-[#0c2f52] to-[#0a3d6b]" },
                { label: "Service", desc: "Supporting customers beyond delivery.", color: "from-[#0c2f52] to-[#0a3d6b]" },
              ].map((dept, idx) => (
                <div
                  key={idx}
                  className="op-card rounded-2xl bg-gradient-to-br from-[#0c2f52] to-[#0a3d6b] border border-sky-900/40 p-4 text-center space-y-1"
                  style={{ "--op-i": idx + 2 } as React.CSSProperties}
                >
                  <div className="text-white font-bold text-sm font-montserrat">{dept.label}</div>
                  <div className="text-slate-400 text-[11px] leading-snug font-inter">{dept.desc}</div>
                </div>
              ))}
              {/* Slogan card */}
              <div
                className="op-card col-span-2 sm:col-span-1 rounded-2xl bg-[#E86D24]/10 border border-[#E86D24]/30 p-4 flex items-center justify-center text-center"
                style={{ "--op-i": 7 } as React.CSSProperties}
              >
                <p className="text-[#E86D24] font-bold text-sm uppercase tracking-wide font-montserrat leading-snug">
                  One Team.<br />One Standard.
                </p>
              </div>
            </div>
          </div>

          {/* ── DESKTOP layout (hidden below lg) ── */}
          <div className="hidden lg:block relative overflow-hidden">
            {/* Header overlaid on SVG */}
            <div className="op-header absolute top-0 left-0 z-10 w-full px-[4vw] pt-16 flex justify-between items-start">
              <div className="inline-flex items-center gap-4 text-white font-bold text-xl uppercase tracking-wider">
                <span className="relative w-7 h-7 flex-shrink-0">
                  <Image src="/images/AboutAs/sectionIcons/ourPeople.webp" alt="Our People Icon" fill className="object-contain" />
                </span>
                <span className="relative pb-1">
                  <TypewriterText text="OUR PEOPLE" />
                  <span className="absolute left-0 bottom-0 w-1/2 h-[3.5px] bg-[#E86D24] rounded-full" />
                </span>
              </div>
              <div
                className="text-right text-2xl md:text-3xl lg:text-4xl font-bold font-montserrat tracking-wide uppercase select-none"
                style={{
                  WebkitTextStroke: "1px rgba(255, 255, 255, 0.45)",
                  color: "transparent",
                  WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.15) 100%)",
                  maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.15) 100%)"
                }}
              >
                One Team. <br /> One Standard.
              </div>
            </div>


            {/* SVG Arc */}
            <img
              src="/images/AboutAs/section8/image.svg?v=3"
              alt="Our People and Operations Diagram"
              className="op-svg w-full h-auto block z-0"
            />



          </div>

          <style dangerouslySetInnerHTML={{ __html: `
/* Mobile cards + header animate in */
            .op-header, .op-card {
              opacity: 0;
              transform: translateY(20px);
            }
            .op-visible .op-header,
            .op-visible .op-card {
              animation: opItemIn 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
              animation-delay: calc(var(--op-i, 0) * 0.1s + 0.1s);
            }
            @keyframes opItemIn {
              from { opacity: 0; transform: translateY(20px); }
              to   { opacity: 1; transform: translateY(0); }
            }

            /* Desktop: SVG arc fades + scales up */
            .op-svg {
              opacity: 0;
              transform: translateY(40px) scale(0.97);
            }
            .op-visible .op-svg {
              animation: opSvgIn 1.1s cubic-bezier(0.22,1,0.36,1) 0.3s forwards;
            }
            @keyframes opSvgIn {
              from { opacity: 0; transform: translateY(40px) scale(0.97); }
              to   { opacity: 1; transform: translateY(0) scale(1); }
            }
` }} />
        </section>
      </div>

      {/* 9. COMPLETE SOLUTION BOTTOM CTA BANNER */}
      <section className="w-full px-[3vw] py-16 !mt-0">
        <div
          className="cta-wrap relative rounded-3xl overflow-hidden bg-[#102F4E] shadow-xl border border-slate-700/40 min-h-[280px] flex items-center"
          ref={(el) => {
            if (!el) return;
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
                  el.classList.remove('cta-visible');
                  void el.offsetHeight;
                  el.classList.add('cta-visible');
                } else if (entry.boundingClientRect.top > window.innerHeight) {
                  el.classList.remove('cta-visible');
                }
              },
              { threshold: 0.2 }
            );
            observer.observe(el);
          }}
        >
          {/* Background Hospital Beds Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=90"
              alt="Operation Theatre Hospital Furniture"
              fill
              sizes="100vw"
              className="object-cover object-right filter brightness-50 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F2D4A] via-[#0F2D4A]/95 to-transparent w-full lg:w-[75%]" />
          </div>

          <div className="relative z-10 w-full px-8 md:px-12 py-10 flex flex-col justify-center">
            {/* Tagline — index 0 */}
            <div
              className="cta-item relative self-start w-fit inline-flex items-center gap-3 pb-2.5"
              style={{ "--cta-i": 0 } as React.CSSProperties}
            >
              <svg
                className="w-8 h-8 sm:w-[34px] sm:h-[34px] lg:w-5 lg:h-5 text-[#E86D24] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <div className="flex flex-col lg:flex-row lg:items-center gap-0.5 lg:gap-2 text-xs sm:text-sm lg:text-[13px] font-bold text-white uppercase tracking-wider leading-tight">
                <span>COMPLETE SOLUTION</span>
                <span>FOR EVERY HEALTHCARE NEEDS</span>
              </div>
              <span className="absolute left-0 bottom-0 w-1/2 h-[3px] bg-[#E86D24] rounded-full" />
            </div>

            {/* Main Title — index 1 */}
            <h2
              className="cta-item text-2xl md:text-4xl font-semibold text-white leading-tight mt-4"
              style={{ "--cta-i": 1 } as React.CSSProperties}
            >
              Looking for Complete Hospital <br className="hidden sm:inline" /> Furniture Solutions?
            </h2>

            {/* Description — index 2 */}
            <p
              className="cta-item text-slate-200 text-md sm:text-md mt-3 font-medium"
              style={{ "--cta-i": 2 } as React.CSSProperties}
            >
              We manufacture reliable and durable hospital furniture <br />
              <span className="font-bold text-white">tailored to your healthcare requirements.</span>
            </p>

            {/* Buttons — index 3 */}
            <div
              className="cta-item flex flex-wrap gap-4 pt-6"
              style={{ "--cta-i": 3 } as React.CSSProperties}
            >
              <button
                onClick={() => openInquiryModal({
                  name: "About Page Custom Quote Inquiry",
                  category: "Hospital Furniture",
                  image: "/images/Product Assets/productsImage/MF01 – Plain Bedside Locker.webp",
                  isGeneral: true
                })}
                className="bg-[#E86D24] hover:bg-[#EE7D22] text-white font-bold text-xs px-5 py-3.5 rounded-xl uppercase shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                <span className="relative w-6 h-6 flex-shrink-0">
                  <Image src="/images/ContactPage/quoat 1.webp" alt="Quote Icon" fill className="object-contain filter invert" />
                </span>
                Request a Quote
              </button>
              <Link href="/contact">
                <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white/60 hover:border-white font-bold text-xs px-5 py-3 rounded-xl uppercase transition-all inline-flex items-center gap-2 cursor-pointer">
                  <Image src="/images/ContactPage/call.webp" alt="Call Icon" width={18} height={18} className="object-contain" />
                  Contact Sales
                </button>
              </Link>
            </div>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
.cta-item {
              opacity: 0;
              transform: translateY(18px);
            }
            .cta-visible .cta-item {
              animation: ctaItemIn 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
              animation-delay: calc(var(--cta-i, 0) * 0.12s + 0.1s);
            }
            @keyframes ctaItemIn {
              from { opacity: 0; transform: translateY(18px); }
              to   { opacity: 1; transform: translateY(0); }
            }
` }} />
        </div>
      </section>
    </div>
  );
}
