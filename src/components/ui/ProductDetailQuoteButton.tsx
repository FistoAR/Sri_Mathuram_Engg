'use client';

import React from 'react';
import Link from 'next/link';
import { Send } from 'lucide-react';
import { MedicalProduct } from '@/lib/data';
import { useInquiryModal } from '@/components/ui/InquiryModalContext';

export function ProductDetailQuoteButton({ product }: { product: MedicalProduct }) {
  const { openInquiryModal } = useInquiryModal();

  return (
    <button 
      onClick={() => openInquiryModal(product)}
      className="w-full inline-flex items-center justify-center gap-[0.5vw] px-[1.2vw] py-[1.1vh] rounded-[0.7vw] bg-orange-500 hover:bg-orange-600 text-white text-[0.88vw] min-text-[13px] font-bold shadow-md shadow-orange-500/20 active:scale-95 transition-all"
    >
      Get a Price / Quote <Send className="w-[0.9vw] h-[0.9vw] min-w-[13px] min-h-[13px]" />
    </button>
  );
}
