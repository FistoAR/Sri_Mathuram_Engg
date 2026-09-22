"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MedicalProduct, getCategoryTheme } from "@/lib/data";
import { useInquiryModal } from "@/components/ui/InquiryModalContext";
import { SecureImage } from "@/components/ui/SecureImage";

interface ProductCardProps {
  product: MedicalProduct;
  index?: number;
  hideDetails?: boolean;
}

export function ProductCard({
  product,
  hideDetails = false,
}: ProductCardProps) {
  const { openInquiryModal } = useInquiryModal();
  const theme = getCategoryTheme(product.category);

  const displayName = product.modelNumber
    ? (product.name.toLowerCase().startsWith(product.modelNumber.toLowerCase())
        ? product.name
        : `${product.modelNumber} – ${product.name}`)
    : product.name;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between p-3 h-full group relative font-montserrat select-none">
      {/* Top Content Area - Clickable Card Link */}
      <Link
        href={`/products/${product.slug}`}
        onClick={() => {
          if (typeof window !== "undefined") {
            window.scrollTo(0, 0);
          }
        }}
        className="space-y-3 flex-1 block group/link cursor-pointer"
      >
        {/* Product Image Frame */}
        <div className="relative aspect-[16/10] w-full bg-white rounded-xl border border-slate-100 overflow-hidden">
          {product.needsDetails && (
            <div className="absolute top-2 left-2 bg-amber-600/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider shadow-sm z-10">
              Details Pending
            </div>
          )}
          <SecureImage
            src={product.image}
            alt={displayName}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 group-hover/link:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text details */}
        <div className="space-y-1.5">
          <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0B3C83] group-hover/link:text-[#0B3C83] transition-colors leading-tight whitespace-normal break-words">
            {displayName}
          </h3>
          <p className="text-slate-500 text-xs font-medium leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>
      </Link>

      {/* Button Row */}
      {!hideDetails && (
        <div className="flex flex-col gap-2 mt-4 pt-2.5 border-t border-slate-100 w-full">
          <Link
            href={`/products/${product.slug}`}
            onClick={() => {
              if (typeof window !== "undefined") {
                window.scrollTo(0, 0);
              }
            }}
            className="w-full"
          >
            <button
              className="w-full text-center border font-bold py-2 px-3 rounded-lg text-xs transition-all hover:bg-slate-50 whitespace-nowrap"
              style={{
                borderColor: `${theme.bg}40`,
                color: theme.isLight ? theme.text : (theme.bg === "#2E2E2E" ? "#1E293B" : theme.bg),
              }}
            >
              View Details
            </button>
          </Link>
          <button
            onClick={() => openInquiryModal(product)}
            className="w-full text-xs font-bold py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1 shadow-md active:scale-95 whitespace-nowrap"
            style={{
              backgroundColor: theme.bg,
              color: theme.text,
              boxShadow: `0 4px 12px ${theme.bg}35`,
            }}
          >
            <span>Send Enquiry</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </button>
        </div>
      )}
    </div>
  );
}
