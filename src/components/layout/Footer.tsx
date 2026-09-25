'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, Globe, ArrowRight } from 'lucide-react';
import { useInquiryModal } from '@/components/ui/InquiryModalContext';
import { CATEGORIES } from '@/lib/data';

export function Footer() {
  const [mounted, setMounted] = useState(false);
  const [activeHighlight, setActiveHighlight] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { openInquiryModal } = useInquiryModal();
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveHighlight((prev) => (prev + 1) % 15);
    }, 2000);
    return () => clearInterval(timer);
  }, [isHovered]);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('ft-visible');
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [mounted]);

  const currentYear = new Date().getFullYear();

  if (!mounted) return null;

  return (
    <footer
      ref={footerRef}
      className="ft-root w-full bg-gradient-to-r from-[#051e38] via-[#091F38] to-[#05111E] text-slate-300 border-t border-blue-900/50 pt-12 pb-7 font-sans"
    >
      <div className="w-full  px-5 sm:px-8 md:px-10 lg:px-[4vw]">

        {/* Responsive Grid/Flex Layout for Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row justify-between items-start gap-8 md:gap-10 lg:gap-0 pb-10">

          {/* Column 1: Brand Logo, Description & Social Icons */}
          <div className="ft-col w-full lg:flex-[1.35] flex flex-col items-start gap-2.5 lg:pr-6 xl:pr-8 lg:border-r border-slate-700/80 border-b md:border-b-0 pb-6 md:pb-0 border-slate-700/40 shrink-0" style={{ "--ft-i": 0 } as React.CSSProperties}>
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <div className="relative h-[76px] w-[76px] sm:h-[84px] sm:w-[84px] overflow-hidden flex-shrink-0">
                  <Image src="/images/logo.webp" alt="Sri Mathurams Medical Engineering Logo" fill priority className="object-contain" />
                </div>
                <div className="flex flex-col justify-center gap-1 sm:gap-1.5 leading-none">
                  <span className="text-white text-[19px] sm:text-[21px] lg:text-[22px] xl:text-[23px] font-bold tracking-wide font-montserrat uppercase whitespace-nowrap">SRI MATHURAMS</span>
                  <span className="text-[#E86D24] text-[10.5px] sm:text-[11.5px] lg:text-[12px] font-bold tracking-widest font-montserrat uppercase mt-0.5 whitespace-nowrap">MEDICAL ENGINEERING</span>
                </div>
              </div>
            </Link>
            <p className="text-[14px] sm:text-[15px] text-white/90 leading-relaxed font-normal font-inter max-w-sm -mt-1">
              Manufacturing high-quality, durable, and reliable hospital furniture for healthcare facilities across India.
            </p>
            <div className="flex items-center space-x-2.5 pt-2">
              <a
                href="https://www.facebook.com/share/18FXAqSwNt/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-900/90 hover:bg-[#E86D24] text-white flex items-center justify-center transition-colors border border-white hover:border-[#E86D24]"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/mathurams_medical_engineering?stkn=ZWQ2bzUzbTNkZ2xz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-900/90 hover:bg-[#E86D24] text-white flex items-center justify-center transition-colors border border-white hover:border-[#E86D24]"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@srimathuramsmedicalengineering?si=vmIV_HU60XRpsX2i"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-slate-900/90 hover:bg-[#E86D24] text-white flex items-center justify-center transition-colors border border-white hover:border-[#E86D24]"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/mathurams-medical-engineering/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-slate-900/90 hover:bg-[#E86D24] text-white flex items-center justify-center transition-colors border border-white hover:border-[#E86D24]"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div
            className="ft-col w-full lg:flex-[0.7] space-y-4 lg:px-6 xl:px-8 lg:border-r border-slate-700/80 border-b md:border-b-0 pb-6 md:pb-0 border-slate-700/40 shrink-0"
            style={{ "--ft-i": 1 } as React.CSSProperties}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="inline-block space-y-1.5">
              <h3 className="text-[14px] sm:text-[15px] font-bold text-white uppercase tracking-wider font-montserrat whitespace-nowrap">QUICK LINKS</h3>
              <div className="w-1/2 h-[2.5px] bg-[#E86D24] rounded-full" />
            </div>
            <ul className="space-y-3.5 text-[14px] sm:text-[15px] font-medium font-inter">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Quotes", onClick: () => openInquiryModal() },
                { label: "Contact Us", href: "/contact" },
              ].map((link, i) => {
                const isHighlighted = !isHovered && activeHighlight === i;
                return (
                  <li key={i}>
                    {'onClick' in link && link.onClick ? (
                      <button
                        type="button"
                        onClick={link.onClick}
                        className={`group transition-all duration-300 flex items-start gap-2.5 cursor-pointer text-left font-medium origin-left transform ${
                          isHighlighted ? 'text-[#E86D24] scale-[1.01] translate-x-1 ' : 'text-slate-300 hover:text-[#E86D24] hover:scale-[1.04] hover:translate-x-1.5'
                        }`}
                      >
                        <ArrowRight className={`w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0 mt-0.5 transition-all duration-300 transform ${
                          isHighlighted ? 'text-[#E86D24] scale-[1.2] translate-x-0.3' : 'text-slate-300 group-hover:text-[#E86D24] group-hover:scale-[1.2] group-hover:translate-x-0.5'
                        }`} />
                        <span className="leading-snug">{link.label}</span>
                      </button>
                    ) : (
                      <Link
                        href={link.href || "/"}
                        className={`group transition-all duration-300 flex items-start gap-2.5 font-medium origin-left transform ${
                          isHighlighted ? 'text-[#E86D24] scale-[1.01] translate-x-1 ' : 'text-slate-300 hover:text-[#E86D24] hover:scale-[1.04] hover:translate-x-1.5'
                        }`}
                      >
                        <ArrowRight className={`w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0 mt-0.5 transition-all duration-300 transform ${
                          isHighlighted ? 'text-[#E86D24] scale-[1.2] translate-x-0.3' : 'text-slate-300 group-hover:text-[#E86D24] group-hover:scale-[1.2] group-hover:translate-x-0.5'
                        }`} />
                        <span className="leading-snug">{link.label}</span>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: PRODUCT CATEGORIES (2 Sub-columns: 5 & 5) */}
          <div
            className="ft-col w-full md:col-span-2 lg:col-span-1 lg:flex-[2.35] space-y-4 lg:px-6 xl:px-8 lg:border-r border-slate-700/80 border-b md:border-b-0 pb-6 md:pb-0 border-slate-700/40"
            style={{ "--ft-i": 2 } as React.CSSProperties}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="inline-block space-y-1.5">
              <h3 className="text-[14px] sm:text-[15px] font-bold text-white uppercase tracking-wider font-montserrat whitespace-nowrap">PRODUCT CATEGORIES</h3>
              <div className="w-1/2 h-[2.5px] bg-[#E86D24] rounded-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-10 xl:gap-x-12 gap-y-3.5">
              {/* Left Sub-column (First 5) */}
              <ul className="space-y-3.5 text-[14px] sm:text-[15px] font-medium font-inter">
                {CATEGORIES.slice(0, 5).map((cat, i) => {
                  const isHighlighted = !isHovered && activeHighlight === 5 + i;
                  return (
                    <li key={i}>
                      <Link
                        href={`/products?category=${encodeURIComponent(cat.name)}`}
                        className={`group transition-all duration-300 flex items-start gap-2.5 font-medium origin-left transform ${
                          isHighlighted ? 'text-[#E86D24] scale-[1.01] translate-x-1 ' : 'text-slate-300 hover:text-[#E86D24] hover:scale-[1.04] hover:translate-x-1.5'
                        }`}
                      >
                        <ArrowRight className={`w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0 mt-0.5 transition-all duration-300 transform ${
                          isHighlighted ? 'text-[#E86D24] scale-[1.1] translate-x-0.3' : 'text-slate-300 group-hover:text-[#E86D24] group-hover:scale-[1.2] group-hover:translate-x-0.5'
                        }`} />
                        <span className="leading-snug">{cat.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Right Sub-column (Last 5) */}
              <ul className="space-y-3.5 text-[14px] sm:text-[15px] font-medium font-inter">
                {CATEGORIES.slice(5, 10).map((cat, i) => {
                  const isHighlighted = !isHovered && activeHighlight === 10 + i;
                  return (
                    <li key={i}>
                      <Link
                        href={`/products?category=${encodeURIComponent(cat.name)}`}
                        className={`group transition-all duration-300 flex items-start gap-2.5 font-medium origin-left transform ${
                          isHighlighted ? 'text-[#E86D24] scale-[1.01] translate-x-1 ' : 'text-slate-300 hover:text-[#E86D24] hover:scale-[1.04] hover:translate-x-1.5'
                        }`}
                      >
                        <ArrowRight className={`w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0 mt-0.5 transition-all duration-300 transform ${
                          isHighlighted ? 'text-[#E86D24] scale-[1.1] translate-x-0.3' : 'text-slate-300 group-hover:text-[#E86D24] group-hover:scale-[1.2] group-hover:translate-x-0.5'
                        }`} />
                        <span className="leading-snug">{cat.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Column 4: CONTACT INFORMATION */}
          <div className="ft-col w-full md:col-span-2 lg:col-span-1 lg:flex-[1.25] space-y-4 lg:pl-6 xl:pl-8" style={{ "--ft-i": 3 } as React.CSSProperties}>
            <div className="inline-block space-y-1.5">
              <h3 className="text-[14px] sm:text-[15px] font-bold text-white uppercase tracking-wider font-montserrat">CONTACT INFORMATION</h3>
              <div className="w-1/2 h-[2.5px] bg-[#E86D24] rounded-full" />
            </div>
            <ul className="space-y-3 text-[14px] sm:text-[15px] font-medium text-slate-300 font-inter">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E86D24] shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=404/2B3,+Cheran+Industrial+Estate,+Vadavalli+to+Kanuvai+Road,+Somayampalayam,+Coimbatore+-+641108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-snug hover:text-white transition-colors cursor-pointer"
                >
                  404/2B3, Cheran Industrial Estate, Vadavalli to Kanuvai Road, Somayampalayam, Coimbatore - 641108, Tamil Nadu, India.
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#E86D24] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919842204966" className="hover:text-white transition-colors whitespace-nowrap">+91 98422 04966</a>
                  <a href="tel:+918883011166" className="hover:text-white transition-colors whitespace-nowrap">+91 88830 11166</a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E86D24] shrink-0" />
                <a href="mailto:mathuramindia@gmail.com" className="hover:text-white transition-colors">mathuramindia@gmail.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#E86D24] shrink-0" />
                <a href="https://www.srimathuramsindia.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.srimathuramsindia.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="ft-bottom pt-6 border-t border-slate-700/80 flex flex-col sm:flex-row justify-between items-center text-[13px] sm:text-[14px] text-white gap-3 font-medium font-inter text-center sm:text-left">
          <p className="text-slate-300">© {currentYear} Sri Mathurams Medical Engineering. All Rights Reserved.</p>
          <p className="flex items-center justify-center gap-1.5 text-white">
            <span>Designed with</span>
            <span className="text-red-500 text-sm">❤️</span>
            <span className="text-white font-semibold">for Healthcare</span>
          </p>
        </div>

      </div>

      <style>{`
        /* Each footer column fades up with stagger */
        .ft-col {
          opacity: 1;
        }
        .ft-visible .ft-col {
          animation: ftColIn 0.65s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: calc(var(--ft-i, 0) * 0.1s + 0.05s);
        }
        @keyframes ftColIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Bottom bar styling */
        .ft-bottom {
          opacity: 1;
        }
      `}</style>
    </footer>
  );
}
