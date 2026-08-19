"use client";

import React, { useState } from "react";
import { ProductFaqAccordion } from "@/components/ui/ProductFaqAccordion";
import { CheckCircle2, ShieldCheck, Truck, Package } from "lucide-react";

interface ProductTabsProps {
  product: {
    name: string;
    description: string;
    specifications?: Record<string, string>;
  };
}

export function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<"description" | "specifications" | "supply" | "faq">("description");

  const specs = product.specifications || {};
  const specEntries = Object.entries(specs);

  const tabs = [
    { id: "description", label: "Product Description" },
    { id: "specifications", label: "Key Specifications" },
    { id: "supply", label: "Trade & Delivery Info" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <div className="bg-white rounded-[1vw] border border-slate-200 shadow-sm overflow-hidden mt-[3vh]">
      {/* Tab Navigation Header (No Scrollbar) */}
      <div className="flex border-b border-slate-200 bg-slate-50/50 px-[1.5vw] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`py-[1.2vh] px-[1.5vw] text-[0.9vw] min-text-[13px] font-bold transition-all border-b-2 relative -mb-[1px] shrink-0 ${
              activeTab === tab.id
                ? "border-orange-500 text-orange-600 bg-white"
                : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content Body */}
      <div className="p-[1.5vw]">
        {/* 1. Description Tab */}
        {activeTab === "description" && (
          <div className="space-y-[2vh]">
            <h3 className="text-[1.2vw] font-bold text-[#0B3C83] tracking-wide">
              {product.name}
            </h3>
            <p className="text-slate-700 text-[0.95vw] leading-relaxed font-normal">
              {product.description ||
                "Over the years of dedication, we have been a renowned manufacturer of medical products. Designed to facilitate healthcare delivery, this product is acknowledged by our customers for its high functionality, durability, and premium quality build."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1vw] pt-[1.5vh]">
              <div className="bg-slate-50 p-[1.2vw] rounded-[0.8vw] border border-slate-200 space-y-[0.5vh]">
                <div className="flex items-center gap-[0.5vw]">
                  <CheckCircle2 className="w-[1.1vw] h-[1.1vw] min-w-[16px] min-h-[16px] text-orange-500" />
                  <h4 className="font-bold text-slate-900 text-[0.9vw]">Durable Construction</h4>
                </div>
                <p className="text-slate-600 text-[0.8vw] leading-relaxed">
                  Built from heavy-duty mild steel / stainless steel for daily clinical usage.
                </p>
              </div>

              <div className="bg-slate-50 p-[1.2vw] rounded-[0.8vw] border border-slate-200 space-y-[0.5vh]">
                <div className="flex items-center gap-[0.5vw]">
                  <CheckCircle2 className="w-[1.1vw] h-[1.1vw] min-w-[16px] min-h-[16px] text-orange-500" />
                  <h4 className="font-bold text-slate-900 text-[0.9vw]">Patient Safety</h4>
                </div>
                <p className="text-slate-600 text-[0.8vw] leading-relaxed">
                  Ergonomically engineered for patient comfort and simple hygiene maintenance.
                </p>
              </div>

              <div className="bg-slate-50 p-[1.2vw] rounded-[0.8vw] border border-slate-200 space-y-[0.5vh]">
                <div className="flex items-center gap-[0.5vw]">
                  <CheckCircle2 className="w-[1.1vw] h-[1.1vw] min-w-[16px] min-h-[16px] text-orange-500" />
                  <h4 className="font-bold text-slate-900 text-[0.9vw]">Certified Finish</h4>
                </div>
                <p className="text-slate-600 text-[0.8vw] leading-relaxed">
                  Pre-treated epoxy powder coated surface ensuring zero rust and long operational life.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 2. Key Specifications Tab (Structured Border Table) */}
        {activeTab === "specifications" && (
          <div className="overflow-hidden border border-slate-200 rounded-[0.8vw] shadow-2xs">
            <table className="w-full text-left text-[0.85vw] min-text-[12px] border-collapse">
              <tbody>
                {(specEntries.length > 0
                  ? specEntries
                  : [
                      ["Metal Type", "Mild Steel / Stainless Steel"],
                      ["Castors", "Swivel Wheels / Static"],
                      ["Finish", "Epoxy Powder Coated"],
                      ["Load Capacity", "Up to 150 kg"],
                    ]
                ).reduce<[string, string][][]>((acc, curr, i) => {
                  const pair = curr as [string, string];
                  if (i % 2 === 0) acc.push([pair]);
                  else acc[acc.length - 1].push(pair);
                  return acc;
                }, []).map((row, rowIdx) => (
                  <tr key={rowIdx} className="border-b border-slate-200 last:border-b-0 even:bg-slate-50/60 hover:bg-slate-100/40 transition-colors">
                    {/* Col 1 */}
                    <td className="w-[20%] py-[1.2vh] px-[1.2vw] font-bold text-slate-900 bg-slate-100/40 border-r border-slate-200">
                      {row[0][0]}
                    </td>
                    <td className="w-[30%] py-[1.2vh] px-[1.2vw] text-slate-700 font-semibold border-r border-slate-200">
                      {row[0][1]}
                    </td>
                    {/* Col 2 */}
                    {row[1] ? (
                      <>
                        <td className="w-[20%] py-[1.2vh] px-[1.2vw] font-bold text-slate-900 bg-slate-100/40 border-r border-slate-200">
                          {row[1][0]}
                        </td>
                        <td className="w-[30%] py-[1.2vh] px-[1.2vw] text-slate-700 font-semibold">
                          {row[1][1]}
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="w-[20%] py-[1.2vh] px-[1.2vw] bg-slate-100/40 border-r border-slate-200"></td>
                        <td className="w-[30%] py-[1.2vh] px-[1.2vw]"></td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* 3. Trade & Delivery Info Tab */}
        {activeTab === "supply" && (
          <div className="space-y-[1.5vh]">
            <h3 className="text-[1.1vw] font-bold text-slate-950 flex items-center gap-[0.5vw]">
              <Truck className="w-[1.3vw] h-[1.3vw] text-orange-500" /> Trade & Supply Information
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-[1vw] text-[0.85vw]">
              <div className="bg-slate-50 p-[1vw] rounded-[0.8vw] border border-slate-200">
                <span className="text-slate-700 font-semibold block">Supply Ability</span>
                <span className="font-bold text-slate-900 text-[1vw] mt-[0.3vh] block">350 Units / Mo</span>
              </div>
              <div className="bg-slate-50 p-[1vw] rounded-[0.8vw] border border-slate-200">
                <span className="text-slate-700 font-semibold block">Delivery Time</span>
                <span className="font-bold text-slate-900 text-[1vw] mt-[0.3vh] block">30 Days</span>
              </div>
              <div className="bg-slate-50 p-[1vw] rounded-[0.8vw] border border-slate-200">
                <span className="text-slate-700 font-semibold block">Payment Terms</span>
                <span className="font-bold text-slate-900 text-[1vw] mt-[0.3vh] block">Cash Advance</span>
              </div>
              <div className="bg-slate-50 p-[1vw] rounded-[0.8vw] border border-slate-200">
                <span className="text-slate-700 font-semibold block">Service Market</span>
                <span className="font-bold text-slate-900 text-[1vw] mt-[0.3vh] block">Tamil Nadu Only</span>
              </div>
            </div>
          </div>
        )}

        {/* 4. FAQ Tab (5 Questions) */}
        {activeTab === "faq" && (
          <div className="space-y-[1.5vh]">
            <h3 className="text-[1.1vw] font-bold text-[#0B3C83]">Frequently Asked Questions</h3>
            <ProductFaqAccordion
              items={[
                {
                  question: "How is the product maintained for clinical hygiene?",
                  answer: "The pre-treated epoxy powder-coated steel and stainless steel surfaces allow effortless cleaning and full compliance with standard hospital-grade chemical disinfectants.",
                },
                {
                  question: "Which locations in India do you service for direct delivery?",
                  answer: "We offer direct factory delivery and installation services strictly across Tamil Nadu, covering all private and government medical institutions.",
                },
                {
                  question: "What warranty and post-sales technical support do you offer?",
                  answer: "All Sri Mathurams hospital furniture includes a 1-year comprehensive manufacturer warranty along with prompt on-site repair and spare part replacement support.",
                },
                {
                  question: "Can we request custom dimensions, mattress colors, or powder coating options?",
                  answer: "Yes, as an OEM manufacturer, we support custom dimensional specifications, color finishes, and rail modifications for bulk hospital orders.",
                },
                {
                  question: "Do you offer discounted pricing for bulk hospital orders?",
                  answer: "Yes! We provide tier-based institutional pricing for bulk orders of hospital beds, lockers, stretchers, and trolleys. Click 'Get a Price / Quote' to request custom terms.",
                },
              ]}
            />
          </div>
        )}
      </div>
    </div>
  );
}
