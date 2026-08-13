'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronRight, Menu, X } from 'lucide-react';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      {/* Main header navbar */}
      <div className="px-[3vw]">
        <div className="flex items-center justify-between h-[8vh] min-h-[60px]">
          
          {/* Logo using logo.webp and text */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative h-[5vh] w-[5vh] min-h-[36px] min-w-[36px] overflow-hidden flex-shrink-0">
              <Image
                src="/images/logo.webp"
                alt="Sri Mathurams Medical Engineering Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center leading-none">
              <span className="text-slate-900 text-sm sm:text-base font-black tracking-wide font-montserrat uppercase">
                SRI MATHURAMS
              </span>
              <span className="text-[#E86D24] text-[8.5px] sm:text-[9.5px] font-black tracking-widest font-montserrat uppercase mt-0.5 sm:mt-1">
                MEDICAL ENGINEERING
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-[2vw]">
            <Link
              href="/"
              className={`text-[0.8vw] font-bold uppercase transition-colors pb-[0.3vh] ${
                isActive('/') && pathname === '/'
                  ? 'text-orange-600 border-b-2 border-orange-500'
                  : 'text-slate-800 hover:text-orange-600'
              }`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`text-[0.8vw] font-bold uppercase transition-colors pb-[0.3vh] ${
                isActive('/about')
                  ? 'text-orange-600 border-b-2 border-orange-500'
                  : 'text-slate-800 hover:text-orange-600'
              }`}
            >
              ABOUT US
            </Link>
            <Link
              href="/products"
              className={`text-[0.8vw] font-bold uppercase transition-colors pb-[0.3vh] ${
                isActive('/products')
                  ? 'text-orange-600 border-b-2 border-orange-500'
                  : 'text-slate-800 hover:text-orange-600'
              }`}
            >
              PRODUCTS
            </Link>
            <Link
              href="/contact"
              className={`text-[0.8vw] font-bold uppercase transition-colors pb-[0.3vh] ${
                isActive('/contact')
                  ? 'text-orange-600 border-b-2 border-orange-500'
                  : 'text-slate-800 hover:text-orange-600'
              }`}
            >
              CONTACT US
            </Link>
          </nav>

          {/* Right Action Button & Mobile Hamburger Menu Button */}
          <div className="flex items-center gap-[10px]">
            <Link href="/contact">
              <button className="group relative inline-flex items-center gap-[6px] sm:gap-[0.5vw] bg-orange-500 text-white text-[11px] sm:text-[0.8vw] font-semibold px-[10px] sm:px-[1.2vw] py-[6px] sm:py-[1vh] rounded-lg sm:rounded-[0.6vw] shadow-md shadow-orange-500/20 hover:bg-orange-600 hover:shadow-orange-500/35 hover:shadow-lg active:scale-95 transition-all duration-300 border border-orange-400 overflow-hidden shrink-0">
                {/* Silver running shine beam effect */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none animate-silver-shine" />

                <span className="relative z-10 whitespace-nowrap">Request a quote</span>
                <ChevronRight className="relative z-10 w-[12px] h-[12px] sm:w-[1vw] sm:h-[1vw] bg-white/20 rounded-full p-[1px] group-hover:bg-white group-hover:text-orange-600 transition-all duration-300 animate-move-right-infinite" />
              </button>
            </Link>

            {/* Mobile Hamburger Toggle Button (Right Side) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-[7px] rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 transition-all active:scale-95"
              aria-label="Toggle Mobile Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-[20px] h-[20px] text-slate-900" />
              ) : (
                <Menu className="w-[20px] h-[20px] text-slate-900" />
              )}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 w-full bg-white border-b border-slate-200 py-[2vh] px-[3vw] space-y-[1.2vh] animate-fade-in shadow-xl rounded-b-xl z-[9999]">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-[12px] py-[10px] rounded-lg text-[14px] font-bold transition-all ${
                isActive('/') && pathname === '/'
                  ? 'bg-orange-50 text-orange-600 border border-orange-200'
                  : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-[12px] py-[10px] rounded-lg text-[14px] font-bold transition-all ${
                isActive('/about')
                  ? 'bg-orange-50 text-orange-600 border border-orange-200'
                  : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              ABOUT US
            </Link>
            <Link
              href="/products"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-[12px] py-[10px] rounded-lg text-[14px] font-bold transition-all ${
                isActive('/products')
                  ? 'bg-orange-50 text-orange-600 border border-orange-200'
                  : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              PRODUCTS
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-[12px] py-[10px] rounded-lg text-[14px] font-bold transition-all ${
                isActive('/contact')
                  ? 'bg-orange-50 text-orange-600 border border-orange-200'
                  : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              CONTACT US
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
