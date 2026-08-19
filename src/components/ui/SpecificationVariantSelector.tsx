'use client';

import React, { useState } from 'react';
import { Layers, Check } from 'lucide-react';
import { MedicalProduct } from '@/lib/data';

interface SpecificationVariantSelectorProps {
  product: MedicalProduct;
}

export function SpecificationVariantSelector({ product }: SpecificationVariantSelectorProps) {
  const defaultVariants = React.useMemo(() => {
    if (product.specificationVariants && product.specificationVariants.length > 0) {
      return product.specificationVariants;
    }

    if (product.category === 'Emergency & Patient Transfer' || product.name.includes('Stretcher') || product.name.includes('Trolley')) {
      return [
        { id: 'ms', name: 'Mild Steel (MS)', desc: 'Powder Coated MS Frame' },
        { id: 'ss', name: 'Stainless Steel (SS)', desc: '304 Grade Stainless Steel' },
        { id: 'hilo', name: 'Hi-Lo Adjustable', desc: 'Height Adjustable Crank' },
      ];
    }

    if (product.name.includes('Locker') || product.category === 'Ward Furniture') {
      return [
        { id: 'cabin', name: 'Plain Cabin', desc: 'Single Storage Cabin' },
        { id: 'deluxe', name: 'Cabin + Drawer', desc: 'Drawer + Storage Cabin' },
        { id: 'granite', name: 'Granite Top', desc: 'Granite Top + Drawer' },
      ];
    }

    if (product.name.includes('Cot') || product.name.includes('Bed')) {
      return [
        { id: 'manual', name: 'Manual Crank', desc: 'Mechanical Screw Handle' },
        { id: 'abs', name: 'ABS Side Rails', desc: 'Tuck-away ABS Protection' },
        { id: 'ss-rails', name: 'SS Collapsible', desc: 'Stainless Steel Safety Rails' },
      ];
    }

    return [
      { id: 'ms', name: 'Mild Steel (MS)', desc: 'Powder Coated Finish' },
      { id: 'ss', name: 'Stainless Steel (SS)', desc: '304 Grade SS Finish' },
      { id: 'custom', name: 'Custom Spec', desc: 'Tailored Hospital Spec' },
    ];
  }, [product]);

  const [selectedVariant, setSelectedVariant] = useState(defaultVariants[0]?.name || 'Plain Cabin');

  return (
    <div className="bg-white border border-slate-200/90 rounded-[12px] sm:rounded-[0.9vw] p-[16px] sm:p-[0.9vw] space-y-[10px] sm:space-y-[0.8vh] shadow-2xs">
      <div className="flex items-center justify-between pb-[4px]">
        <div className="flex items-center gap-[8px] sm:gap-[0.5vw]">
          <Layers className="w-[18px] h-[18px] sm:w-[1vw] sm:h-[1vw] text-[#0B3C83]" />
          <span className="text-[14px] sm:text-[0.85vw] font-bold text-[#0B3C83]">Specification Variant</span>
        </div>
        <span className="text-[12px] sm:text-[0.72vw] font-semibold text-slate-600">
          Selected: <strong className="text-slate-900 font-bold">{selectedVariant}</strong>
        </span>
      </div>

      {/* Segmented Control Pill Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[8px] sm:gap-[0.5vw] bg-slate-100/80 p-[6px] sm:p-[0.3vw] rounded-[10px] sm:rounded-[0.7vw] border border-slate-200/60">
        {defaultVariants.map((v) => {
          const isSelected = selectedVariant === v.name;
          return (
            <button
              key={v.name}
              type="button"
              onClick={() => setSelectedVariant(v.name)}
              className={`py-[10px] sm:py-[0.8vh] px-[12px] sm:px-[0.7vw] rounded-[8px] sm:rounded-[0.5vw] transition-all duration-200 text-left flex flex-col justify-center relative ${
                isSelected
                  ? 'bg-[#0B3C83] text-white shadow-xs font-bold'
                  : 'text-slate-800 hover:bg-white/80 font-bold'
              }`}
            >
              <div className="flex items-center justify-between gap-[4px]">
                <span className="text-[14px] sm:text-[0.8vw] truncate">{v.name}</span>
              </div>
              {'desc' in v && (
                <span className={`text-[11px] sm:text-[0.65vw] truncate mt-[2px] ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                  {v.desc}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
