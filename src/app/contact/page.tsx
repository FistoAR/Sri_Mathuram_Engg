"use client";

import React from "react";
import { ContactForm } from "@/components/sections/ContactForm";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export default function ContactPage() {
  return (
    <div className="w-full bg-[#FAFBFC] min-h-screen montserrat-page pb-16">
      {/* 1. HERO BANNER */}
      <section className="relative w-full bg-[#0F2D4A] pt-12 pb-24 md:pt-16 md:pb-32 px-[3vw] overflow-hidden">
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

        <FadeIn className="relative z-10 w-full mx-auto" direction="up" duration={0.8}>
          {/* Subheading: CONTACT US (Left-aligned) */}
          <div className="flex justify-start mb-6 md:mb-12">
            <div className="inline-flex items-center gap-2 text-white font-bold text-xl uppercase">
              <span className="relative w-6 h-6 flex-shrink-0">
                <Image
                  src="/images/ContactPage/contactAs.webp"
                  alt="Contact Icon"
                  fill
                  className="object-contain"
                />
              </span>
              <span className="relative pb-1">
                contact us
                <span className="absolute left-0 bottom-0 w-1/2 h-[2.5px] bg-[#E86D24] rounded-full" />
              </span>
            </div>
          </div>

          {/* Centered Contents */}
          <div className="text-center space-y-6">
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mx-auto ">
              LET'S BUILD BETTER <br className="hidden sm:inline" />
              HEALTHCARE SPACES TOGETHER
            </h1>

            {/* Description */}
            <div className="text-white text-sm md:text-base leading-relaxed mx-auto space-y-2 font-medium max-w-4xl">
              <p className="text-white">
                Whether you are planning a new hospital, upgrading an existing
                facility, or looking for reliable medical furniture,{" "}
                <strong className="font-bold text-white">
                  our team is ready to help
                </strong>
                .
                <br />
                From standard hospital furniture to{" "}
                <strong className="font-bold text-white">
                  customized solutions
                </strong>
                , connect with our team to discuss your
                <br />
                requirements, get product information, or{" "}
                <strong className="font-bold text-white">
                  request a quotation
                </strong>
                .
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link href="#enquiry-form">
                <button className="bg-white hover:bg-slate-50 text-[#2B5074] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2.5 uppercase border border-slate-100">
                  <span className="relative w-5 h-5 flex-shrink-0">
                    <Image
                      src="/images/ContactPage/quoat 1.webp"
                      alt="Quote Icon"
                      fill
                      className="object-contain"
                    />
                  </span>
                  Request A Quote
                </button>
              </Link>

              <a
                href="https://wa.me/919176212345"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#E86D24] hover:bg-[#EE7D22] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2.5 uppercase">
                  {/* Official filled WhatsApp Vector Icon */}
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

        {/* Space reserving block for the overlapping card */}
        <div className="h-16 md:h-28" />
      </section>

      {/* 2. OVERLAPPING GET IN TOUCH & ENQUIRY CARD */}
      <section
        id="enquiry-form"
        className="w-full px-[8vw] -mt-20 md:-mt-28 relative z-20"
      >
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden p-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Column: Get In Touch */}
            <FadeIn className="lg:col-span-5 bg-[#F8FAFC] p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-200/60 flex flex-col justify-between space-y-8" direction="left" delay={0.2} duration={0.7}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-[1.8vw] font-bold text-navy-950 leading-none uppercase ">
                    GET IN TOUCH
                  </h2>
                  <p className="text-slate-500 font-medium text-xs sm:text-[0.9vw] leading-relaxed">
                    Tell us what you are looking for and our team will get back
                    to you with the right product information and assistance
                  </p>
                  <div className="w-16 h-1 bg-[#E86D24] mt-3 rounded-full" />
                </div>

                {/* Contact Items */}
                <div className="space-y-6">
                  {/* Visit Us */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#E86D24] flex items-center justify-center flex-shrink-0 relative overflow-hidden p-2.5">
                      <Image
                        src="/images/ContactPage/location.webp"
                        alt="Location"
                        width={20}
                        height={20}
                        className="object-contain"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-navy-950 text-sm sm:text-base">
                        Visit Us
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                        Sri Mathurams Medical Engineering
                        <br />
                        No. 123/13, Industrial Estate,
                        <br />
                        Guindy, Chennai – 600032,
                        <br />
                        Tamil Nadu, India.
                      </p>
                    </div>
                  </div>

                  {/* Call Us */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#E86D24] flex items-center justify-center flex-shrink-0 relative overflow-hidden p-2.5">
                      <Image
                        src="/images/ContactPage/call.webp"
                        alt="Call"
                        width={20}
                        height={20}
                        className="object-contain"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-navy-950 text-sm sm:text-base">
                        Call Us
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm font-semibold">
                        <a
                          href="tel:+919176212345"
                          className="hover:text-[#E86D24] transition-colors"
                        >
                          +91 91762 12345
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email Us */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#E86D24] flex items-center justify-center flex-shrink-0 relative overflow-hidden p-2.5">
                      <Image
                        src="/images/ContactPage/mail.webp"
                        alt="Mail"
                        width={20}
                        height={20}
                        className="object-contain"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-navy-950 text-sm sm:text-base">
                        Email Us
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm font-semibold">
                        <a
                          href="mailto:info@srimathurams.com"
                          className="hover:text-[#E86D24] transition-colors"
                        >
                          info@srimathurams.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#E86D24] flex items-center justify-center flex-shrink-0 relative overflow-hidden p-2.5">
                      <Image
                        src="/images/ContactPage/businessHours.webp"
                        alt="Business Hours"
                        width={20}
                        height={20}
                        className="object-contain"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-navy-950 text-sm sm:text-base">
                        Business Hours
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                        Monday – Saturday
                        <br />
                        9:00 AM – 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Follow */}
              <div className="space-y-3 pt-6 border-t border-slate-200">
                <h4 className="font-bold text-navy-950 text-sm">
                  Follow us on
                </h4>
                <div className="flex items-center gap-3">
                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 hover:scale-105 transition-all relative block"
                  >
                    <Image
                      src="/images/ContactPage/instagram.webp"
                      alt="Instagram"
                      fill
                      className="object-contain"
                    />
                  </a>
                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 hover:scale-105 transition-all relative block"
                  >
                    <Image
                      src="/images/ContactPage/facebook.webp"
                      alt="Facebook"
                      fill
                      className="object-contain"
                    />
                  </a>
                  {/* X (formerly Twitter) */}
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 hover:scale-105 transition-all relative block"
                  >
                    <Image
                      src="/images/ContactPage/twitter.webp"
                      alt="Twitter"
                      fill
                      className="object-contain"
                    />
                  </a>
                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 hover:scale-105 transition-all relative block"
                  >
                    <Image
                      src="/images/ContactPage/inkedin.webp"
                      alt="LinkedIn"
                      fill
                      className="object-contain"
                    />
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Right Column: Enquiry Form */}
            <FadeIn className="lg:col-span-7 p-8 md:p-12" direction="right" delay={0.2} duration={0.7}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. FIND US / VISIT OUR FACILITY SECTION */}
      <section className="w-full px-[3vw] mt-20 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Col 1: Visit Our Facility */}
          <FadeIn className="md:col-span-4 flex flex-col gap-[6vh]" direction="left" delay={0.1}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-[#E86D24] font-bold text-lg uppercase">
                <span className="relative w-7 h-7 flex-shrink-0">
                  <Image
                    src="/images/ContactPage/findUs.webp"
                    alt="Find Us"
                    fill
                    className="object-contain"
                  />
                </span>
                <span className="relative pb-1">
                  FIND US
                  <span className="absolute left-0 bottom-0 w-1/2 h-[2px] bg-[#E86D24] rounded-full" />
                </span>
              </div>

              <h2 className="text-3xl font-bold text-navy-600  leading-tight">
                Visit Our Facility
              </h2>

              <p className="text-slate-600 text-base leading-relaxed font-medium font-inter">
                Have a project requirement or want to discuss your needs in
                person?
              </p>
              <p className="text-slate-600 text-base leading-relaxed font-medium font-inter">
                Visit our facility and connect directly with our team to explore
                our products, manufacturing capabilities and customized
                solutions.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Industrial+Estate,+Guindy,+Chennai,+Tamil+Nadu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block "
            >
              <button className="bg-[#E86D24] hover:bg-[#EE7D22] text-white font-semibold text-md px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2  ">
                Get Directions
                <Navigation className="w-5 h-5 rotate-45" />
              </button>
            </a>
          </FadeIn>

          {/* Col 2: Map Embed */}
          <FadeIn className="md:col-span-4 min-h-[250px] md:min-h-0 rounded-3xl overflow-hidden shadow-md border border-slate-100 relative bg-slate-100" direction="up" delay={0.2}>
            <iframe
              title="Sri Mathurams Guindy Chennai Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.375836881983!2d80.2014!3d12.9972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52676226053907%3A0xff3c9bc73708e3cf!2sGuindy%20Industrial%20Estate%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </FadeIn>

          {/* Col 3: Quick Contact */}
          <FadeIn className="md:col-span-4 flex flex-col justify-between space-y-6 md:pl-4" direction="right" delay={0.1}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-[#E86D24] font-bold text-lg uppercase">
                <span className="relative w-7 h-7 flex-shrink-0">
                  <Image
                    src="/images/ContactPage/contact.webp"
                    alt="Quick Contact"
                    fill
                    className="object-contain"
                  />
                </span>
                <span className="relative pb-1">
                  QUICK CONTACT
                  <span className="absolute left-0 bottom-0 w-1/2 h-[2px] bg-[#E86D24] rounded-full" />
                </span>
              </div>

              <h2 className="text-3xl font-bold text-navy-600  leading-tight">
                Need Assistance?
              </h2>

              <p className="text-slate-600 text-base leading-relaxed font-medium font-inter">
                For urgent product enquiries or quotation requirements, contact
                our team directly.
              </p>
            </div>

            {/* Quick list */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              {/* Call */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E86D24] flex items-center justify-center flex-shrink-0 relative overflow-hidden p-2">
                  <Image
                    src="/images/ContactPage/call.webp"
                    alt="Call"
                    width={16}
                    height={16}
                    className="object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
                <a
                  href="tel:+919176212345"
                  className="text-gray-700 hover:text-[#E86D24] font-semibold text-md transition-colors"
                >
                  +91 91762 12345
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E86D24] flex items-center justify-center flex-shrink-0 relative overflow-hidden p-2">
                  <Image
                    src="/images/ContactPage/mail.webp"
                    alt="Mail"
                    width={16}
                    height={16}
                    className="object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
                <a
                  href="mailto:info@srimathurams.com"
                  className="text-gray-700 hover:text-[#E86D24] font-semibold text-md transition-colors"
                >
                  info@srimathurams.com
                </a>
              </div>

              {/* Whatsapp */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 relative overflow-hidden p-2">
                   <svg
                    className="w-4 h-4 fill-white shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <a
                  href="https://wa.me/919176212345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline font-semibold text-md flex items-center gap-1"
                >
                  Whatsapp Enquiry <span>→</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. COMPLETE SOLUTION BOTTOM CTA BANNER */}
      <section className="w-full px-[3vw] mt-20">
        <div className="relative rounded-3xl overflow-hidden bg-[#102F4E] shadow-xl border border-slate-700/40 min-h-[280px] flex items-center ">
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

          <FadeIn className="relative z-10 w-full px-8 md:px-12 py-10 flex flex-col justify-center" direction="up" delay={0.1} duration={0.8}>
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
              We manufacture reliable and durable hospital furniture{" "} <br />
              <span className="font-bold text-white">
                tailored to your healthcare requirements.
              </span>
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Link href="#enquiry-form">
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
