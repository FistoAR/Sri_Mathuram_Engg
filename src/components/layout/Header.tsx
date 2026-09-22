'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  ChevronRight, 
  Menu, 
  X, 
  Home, 
  Building2, 
  LayoutGrid, 
  PhoneCall, 
  FileText, 
  ShieldCheck,
  Phone
} from 'lucide-react';
import { useInquiryModal } from '@/components/ui/InquiryModalContext';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openInquiryModal } = useInquiryModal();

  // Close mobile drawer automatically when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const navLinks = [
    { name: 'HOME', href: '/', icon: Home },
    { name: 'ABOUT US', href: '/about', icon: Building2 },
    { name: 'PRODUCTS', href: '/products', icon: LayoutGrid },
    { name: 'CONTACT US', href: '/contact', icon: PhoneCall },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm font-montserrat">
      {/* Main header navbar */}
      <div className="px-4 sm:px-[3vw]">
        <div className="flex items-center justify-between h-[64px] sm:h-[8vh] min-h-[60px]">
          
          {/* Logo using logo.webp and text */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none">
            <div className="relative h-10 w-10 sm:h-[8vh] sm:w-[8vh] sm:min-h-[36px] sm:min-w-[36px] overflow-hidden flex-shrink-0">
              <Image
                src="/images/logo.webp"
                alt="Sri Mathurams Medical Engineering Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center leading-none">
              <span className="text-slate-900 text-sm sm:text-base font-black tracking-wide font-inter uppercase">
                SRI MATHURAMS
              </span>
              <span className="text-[#E86D24] text-[8.5px] sm:text-[9.5px] font-black tracking-widest font-inter uppercase mt-0.5 sm:mt-1">
                MEDICAL ENGINEERING
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-[2vw]">
            {navLinks.map((link) => {
              const active = isActive(link.href) && (link.href !== '/' || pathname === '/');
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm lg:text-[0.85vw] font-bold uppercase transition-colors pb-[0.3vh] ${
                    active
                      ? 'text-orange-600 border-b-2 border-orange-500'
                      : 'text-slate-800 hover:text-orange-600'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button & Mobile Hamburger Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => openInquiryModal({
                name: "General Inquiry / Custom Order",
                category: "Hospital Furniture",
                image: "/images/Product Assets/productsImage/MF 01\u00a0 PLAIN BEDSIDE LOCKER\u00a0.webp",
                isGeneral: true
              })}
              className="hidden sm:inline-flex group relative items-center gap-1.5 sm:gap-2 bg-orange-500 text-white text-xs sm:text-sm lg:text-[0.85vw] font-semibold px-3 sm:px-4 lg:px-[1.2vw] py-2 sm:py-2.5 lg:py-[1vh] rounded-lg sm:rounded-xl lg:rounded-[0.6vw] shadow-md shadow-orange-500/20 hover:bg-orange-600 hover:shadow-orange-500/35 hover:shadow-lg active:scale-95 transition-all duration-300 border border-orange-400 overflow-hidden shrink-0"
            >
              {/* Silver running shine beam effect */}
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none animate-silver-shine" />

              <span className="relative z-10 whitespace-nowrap">Request a quote</span>
              <ChevronRight className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-[1vw] lg:h-[1vw] bg-white/20 rounded-full p-[1px] group-hover:bg-white group-hover:text-orange-600 transition-all duration-300 animate-move-right-infinite" />
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 shadow-2xs transition-all active:scale-95"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5 text-slate-900" />
            </button>
          </div>

        </div>
      </div>

      {/* Modern Mobile Slide-Over Navigation Drawer */}
      <div 
        className={`lg:hidden fixed inset-0 z-[1000] transition-visibility duration-300 ${
          isMobileMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
        }`}
      >
        {/* Backdrop overlay */}
        <div 
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />

        {/* Slide-over Drawer Panel */}
        <aside
          className={`absolute top-0 right-0 bottom-0 w-[84vw] max-w-[340px] bg-white shadow-2xl flex flex-col justify-between z-10 transition-transform duration-300 ease-out transform ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Top Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50/80">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0">
                <Image
                  src="/images/logo.webp"
                  alt="Sri Mathurams Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#092347] text-xs font-black tracking-wider uppercase leading-tight font-inter">
                  SRI MATHURAMS
                </span>
                <span className="text-[#E87325] text-[8px] font-black tracking-widest uppercase leading-tight font-inter">
                  MEDICAL ENGINEERING
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-slate-900 shadow-2xs transition-all active:scale-90"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Navigation List */}
          <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.href) && (link.href !== '/' || pathname === '/');

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2.5 px-3.5 rounded-xl transition-all duration-200 group ${
                    active
                      ? 'bg-gradient-to-r from-[#E87325] via-[#E86D24] to-[#f08535] text-white shadow-md shadow-orange-500/25 border border-orange-400/40 font-bold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#0B3C83] font-semibold border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                      active 
                        ? 'bg-white/20 text-white shadow-xs backdrop-blur-xs' 
                        : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-[#0B3C83]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`text-sm tracking-wide ${active ? 'text-white' : ''}`}>
                      {link.name}
                    </span>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 ${
                    active ? 'text-white/90' : 'text-slate-400'
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Drawer Footer Actions & Info */}
          <div className="p-4 border-t border-slate-100 bg-slate-50/50 space-y-3 shrink-0">
            {/* Direct Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openInquiryModal({
                    name: "General Inquiry / Custom Order",
                    category: "Hospital Furniture",
                    image: "/images/Product Assets/productsImage/MF 01\u00a0 PLAIN BEDSIDE LOCKER\u00a0.webp",
                    isGeneral: true
                  });
                }}
                className="w-full bg-[#0B3C83] hover:bg-[#092D62] text-white py-3 px-4 rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 uppercase tracking-wider"
              >
                <FileText className="w-4 h-4 text-white" />
                <span>REQUEST A QUOTE</span>
              </button>

              <a
                href="https://wa.me/919842212345"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <button className="w-full bg-[#25D366] hover:bg-[#1ebd59] text-white py-2.5 px-4 rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 uppercase tracking-wider">
                  <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WHATSAPP CHAT</span>
                </button>
              </a>
            </div>

            {/* Hospital Trust badge */}
            <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] font-bold text-slate-500">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>Trusted by Hospitals Since 1997</span>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
