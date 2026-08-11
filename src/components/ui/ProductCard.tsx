"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { MedicalProduct } from "@/lib/data";
import { useInquiryModal } from "@/components/ui/InquiryModalContext";

interface ProductCardProps {
  product: MedicalProduct;
  index?: number;
}

export function ProductCard({ product }: ProductCardProps) {
  const { openInquiryModal } = useInquiryModal();

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between p-3 h-full group relative font-montserrat">
      {/* Top Content Area - Clickable Card Link */}
      <Link href={`/products/${product.slug}`} scroll={false} className="space-y-3 flex-1 block group/link cursor-pointer">
        {/* Product Image Frame */}
        <div className="relative aspect-[16/10] w-full bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-3 group-hover:scale-105 group-hover/link:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text details */}
        <div className="space-y-1.5">
          <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0B3C83] group-hover/link:text-[#0B3C83] transition-colors leading-tight line-clamp-1">
            {product.name}
          </h3>
          <p className="text-slate-500 text-xs font-medium leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>
      </Link>

      {/* Button Row */}
      <div className="flex items-center gap-2 mt-4 pt-2.5 border-t border-slate-100">
        <Link href={`/products/${product.slug}`} scroll={false} className="flex-1">
          <button className="w-full text-center border border-slate-200 hover:border-slate-300 text-slate-700 font-bold py-2 px-3 rounded-lg text-xs transition-all hover:bg-slate-50">
            View Details
          </button>
        </Link>
        <button
          onClick={() => openInquiryModal(product)}
          className="flex-1 bg-[#E87325] hover:bg-[#D0621B] text-white text-xs font-bold py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1 shadow-md shadow-orange-500/10 active:scale-95"
        >
          Send Enquiry
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
