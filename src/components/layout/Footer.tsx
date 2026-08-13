import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, Globe, Clock, ChevronRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#091523] text-slate-300 border-t border-slate-800/80 pt-12 pb-7">
      <div className="w-full px-[4vw]">
        
        {/* 5 Vertical Dividers Grid Layout - Full Width */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-10">
          
          {/* Column 1: Brand Logo, Description & Social Icons */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3 space-y-4 lg:pr-8 lg:border-r border-slate-800/80">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <div className="relative h-14 w-14 overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/logo.webp"
                    alt="Sri Mathurams Medical Engineering Logo"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center leading-none">
                  <span className="text-white text-[19px] font-black tracking-wide font-montserrat uppercase">
                    SRI MATHURAMS
                  </span>
                  <span className="text-[#E86D24] text-[11.5px] font-black tracking-widest font-montserrat uppercase mt-1">
                    MEDICAL ENGINEERING
                  </span>
                </div>
              </div>
            </Link>

            {/* Description */}
            <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-normal">
              Manufacturing high-quality, durable, and reliable hospital furniture for healthcare facilities across India.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-2.5 pt-1">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-slate-900/90 hover:bg-[#E86D24] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800/80">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-slate-900/90 hover:bg-[#E86D24] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800/80">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-slate-900/90 hover:bg-[#E86D24] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800/80">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-slate-900/90 hover:bg-[#E86D24] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800/80">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div className="col-span-12 md:col-span-6 lg:col-span-2 space-y-4 lg:px-8 lg:border-r border-slate-800/80">
            <h3 className="text-xs font-black text-white uppercase tracking-wider">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-medium text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-slate-500 font-semibold">&gt;</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-slate-500 font-semibold">&gt;</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-slate-500 font-semibold">&gt;</span>
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link href="/#clients" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-slate-500 font-semibold">&gt;</span>
                  <span>Our Clients</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-slate-500 font-semibold">&gt;</span>
                  <span>Enquiry</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-slate-500 font-semibold">&gt;</span>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: PRODUCT CATEGORIES */}
          <div className="col-span-12 md:col-span-4 lg:col-span-2 space-y-4 lg:px-8 lg:border-r border-slate-800/80">
            <h3 className="text-xs font-black text-white uppercase tracking-wider">
              PRODUCT CATEGORIES
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-medium text-slate-400">
              <li><Link href="/products" className="hover:text-white transition-colors">Hospital Beds</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Patient Trolleys</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Hospital Furniture</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Stainless Steel Products</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Emergency Equipment</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Accessories</Link></li>
            </ul>
          </div>

          {/* Column 4: CONTACT INFORMATION */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3 space-y-4 lg:px-8 lg:border-r border-slate-800/80">
            <h3 className="text-xs font-black text-white uppercase tracking-wider">
              CONTACT INFORMATION
            </h3>
            <ul className="space-y-3 text-xs sm:text-[13px] font-medium text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span className="leading-snug">No. 123/1A, Industrial Estate, Guindy, Chennai - 600032, Tamil Nadu, India.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="tel:+919176212345" className="hover:text-white transition-colors">+91 91762 12345</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="mailto:info@srimathurams.com" className="hover:text-white transition-colors">info@srimathurams.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="https://www.srimathurams.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.srimathurams.com</a>
              </li>
            </ul>
          </div>

          {/* Column 5: BUSINESS HOURS */}
          <div className="col-span-12 md:col-span-4 lg:col-span-2 space-y-4 lg:pl-8">
            <h3 className="text-xs font-black text-white uppercase tracking-wider">
              BUSINESS HOURS
            </h3>
            <div className="space-y-3 text-xs sm:text-[13px] font-medium">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="text-slate-200 font-bold">Monday - Saturday</p>
                  <p className="text-slate-400">9.00 AM - 6.00 PM</p>
                </div>
              </div>

              <div className="pl-6 space-y-0.5">
                <p className="text-slate-200 font-bold">Sunday</p>
                <p className="text-slate-400">Closed</p>
              </div>

              <p className="text-xs sm:text-[13px] font-bold text-[#E86D24] pt-1.5 leading-snug">
                We are always ready to support your needs.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-3 font-medium">
          <p>© {currentYear} Sri Mathurams Medical Engineering. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Designed with</span>
            <span className="text-red-500 text-sm">❤️</span>
            <span>for Healthcare</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
