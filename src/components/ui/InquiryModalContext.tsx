'use client';

import React, { createContext, useContext, useState } from 'react';
import Image from 'next/image';
import { X, Send, CheckCircle2, ShieldCheck, PhoneCall, Building2 } from 'lucide-react';
import { MedicalProduct, PRODUCTS } from '@/lib/data';
import { SecureImage } from '@/components/ui/SecureImage';

const CATEGORY_OPTIONS = [
  { label: 'ICU Beds & Critical Care', matchKey: 'ICU & Critical Care' },
  { label: 'Ward Furniture', matchKey: 'Ward Furniture' },
  { label: 'Emergency & Patient Transfer', matchKey: 'Emergency & Patient Transfer' },
  { label: 'Labour & Maternity', matchKey: 'Labour & Maternity' },
  { label: 'OT Equipment', matchKey: 'OT Equipment' },
  { label: 'SS Furniture & Ward Accessories', matchKey: 'Stainless Steel Furniture & Ward Accessories' },
  { label: 'Medical Trolleys & Carts', matchKey: 'Medical Trolleys' },
  { label: 'Examination & Consultation', matchKey: 'Examination & Consultation' },
  { label: 'General Furniture', matchKey: 'General Furniture' },
  { label: 'Accessories', matchKey: 'Accessories' },
  { label: 'Custom/Other Requirement', matchKey: 'Custom' },
];

interface InquiryModalProduct {
  name: string;
  image?: string;
  category?: string;
  price?: string;
  isGeneral?: boolean;
}

interface InquiryModalContextType {
  openInquiryModal: (product?: InquiryModalProduct) => void;
  closeInquiryModal: () => void;
}

const InquiryModalContext = createContext<InquiryModalContextType | undefined>(undefined);

export function InquiryModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<InquiryModalProduct | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  
  // Form State
  const [quantity, setQuantity] = useState('1');
  const [unit, setUnit] = useState('Unit/Units');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [mobileNumber, setMobileNumber] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [location, setLocation] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openInquiryModal = (product?: InquiryModalProduct) => {
    if (product && !product.isGeneral) {
      setSelectedProduct(product);
      const matched = CATEGORY_OPTIONS.find(
        (c) =>
          c.matchKey.toLowerCase() === (product.category || '').toLowerCase() ||
          c.label.toLowerCase() === (product.category || '').toLowerCase()
      );
      setSelectedCategory(matched ? matched.label : (product.category || ''));
    } else {
      setSelectedProduct({
        name: "General Inquiry / Custom Order",
        category: "Hospital Furniture",
        image: "/images/Product Assets/productsImage/MF01 – Plain Bedside Locker.webp",
        isGeneral: true,
      });
      setSelectedCategory('');
    }
    setQuantity('1');
    setUnit('Unit/Units');
    setAdditionalDetails('');
    setMobileNumber('');
    setHospitalName('');
    setLocation('');
    setIsSubmitted(false);
    setIsOpen(true);
  };

  const closeInquiryModal = () => {
    setIsOpen(false);
    setSelectedProduct(null);
    setSelectedCategory('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      closeInquiryModal();
    }, 2800);
  };

  const currentCategoryConfig = CATEGORY_OPTIONS.find(
    (c) => c.label === selectedCategory || c.matchKey === selectedCategory
  );

  const categoryProducts = currentCategoryConfig && currentCategoryConfig.matchKey !== 'Custom'
    ? PRODUCTS.filter(
        (p) => p.category.toLowerCase() === currentCategoryConfig.matchKey.toLowerCase()
      )
    : [];

  return (
    <InquiryModalContext.Provider value={{ openInquiryModal, closeInquiryModal }}>
      {children}

      {/* Inquiry Modal Popup Overlay */}
      {isOpen && selectedProduct && (
        <div 
          data-lenis-prevent
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-[1.5vw] bg-slate-950/70 backdrop-blur-md animate-fade-in"
        >
          <div 
            data-lenis-prevent
            className="bg-white w-full max-w-md md:max-w-[32vw] rounded-xl md:rounded-[1.2vw] shadow-2xl border border-slate-200/90 overflow-hidden relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#0B3C83] via-blue-900 to-[#0B3C83] px-4 py-3 md:px-[1.5vw] md:py-[1.8vh] text-white flex items-center justify-between relative">
              <div>
                <h3 className="text-sm sm:text-base md:text-[1.15vw] font-bold text-white tracking-tight leading-tight">Tell us about your requirement</h3>
                <p className="text-[10px] sm:text-xs md:text-[0.72vw] text-blue-200 font-medium">Sri Mathurams Direct Factory Inquiry</p>
              </div>
              <button 
                onClick={closeInquiryModal}
                className="w-8 h-8 md:w-[2vw] md:h-[2vw] rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all shrink-0 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 md:w-[1.1vw] md:h-[1.1vw]" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 md:p-[1.5vw] space-y-3 md:space-y-[1.5vh]">
              {/* Product Preview Card Box */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-lg md:rounded-[0.8vw] p-3 md:p-[0.8vw] flex items-center gap-3 md:gap-[1vw]">
                <div className="w-12 h-12 md:w-[4.2vw] md:h-[4.2vw] relative bg-white rounded-md md:rounded-[0.6vw] border border-slate-200 shrink-0 flex items-center justify-center overflow-hidden shadow-2xs">
                  <SecureImage 
                    src={selectedProduct.image || '/images/Product Assets/productsImage/MF01 – Plain Bedside Locker.webp'} 
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1 md:gap-[0.4vw] mb-1">
                    <span className="text-[10px] sm:text-xs md:text-[0.68vw] font-bold text-orange-600 uppercase tracking-wider">
                      {selectedProduct.category || 'Hospital Furniture'}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm md:text-[0.98vw] font-bold text-[#0B3C83] truncate mt-[0.1vh]">
                    {selectedProduct.name}
                  </h4>
                  <span className="text-[10px] sm:text-xs md:text-[0.75vw] font-medium text-slate-600 mt-[0.2vh]">
                    Request Custom Quote & Delivery Lead Time
                  </span>
                </div>
              </div>

              {isSubmitted ? (
                /* Success Message View */
                <div className="py-6 px-3 md:py-[3vh] md:px-[1vw] text-center space-y-3 md:space-y-[1.2vh]">
                  <div className="w-12 h-12 md:w-[3.5vw] md:h-[3.5vw] rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center animate-bounce">
                    <CheckCircle2 className="w-6 h-6 md:w-[2vw] md:h-[2vw]" />
                  </div>
                  <h4 className="text-sm sm:text-base md:text-[1.2vw] font-bold text-slate-900">Inquiry Submitted Successfully!</h4>
                  <p className="text-xs md:text-[0.82vw] text-slate-600 max-w-[85%] mx-auto">
                    Thank you! Our Tamil Nadu sales engineering team will call you back shortly with official factory pricing.
                  </p>
                </div>
              ) : (
                /* Inquiry Form */
                 <form onSubmit={handleSubmit} className="space-y-3 md:space-y-[1.2vh]">
                  {selectedProduct.isGeneral && (
                    <div className="grid grid-cols-12 gap-3 md:gap-[0.8vw]">
                      <div className="col-span-6 space-y-[0.3vh]">
                        <label className="text-[10px] sm:text-xs md:text-[0.72vw] font-bold text-slate-700">Select Category</label>
                        <select 
                          value={selectedCategory}
                          onChange={(e) => {
                            const newCat = e.target.value;
                            setSelectedCategory(newCat);
                            if (!newCat || newCat === 'Custom/Other Requirement') {
                              setSelectedProduct({
                                name: newCat === 'Custom/Other Requirement' ? 'Custom Requirement' : 'General Inquiry / Custom Order',
                                category: newCat || 'Hospital Furniture',
                                image: '/images/Product Assets/productsImage/MF01 – Plain Bedside Locker.webp',
                                isGeneral: true,
                              });
                            } else {
                              const catCfg = CATEGORY_OPTIONS.find(c => c.label === newCat);
                              const prodsInCat = PRODUCTS.filter(p => p.category.toLowerCase() === (catCfg?.matchKey || newCat).toLowerCase());
                              if (prodsInCat.length > 0) {
                                const first = prodsInCat[0];
                                setSelectedProduct({
                                  name: `${first.modelNumber ? first.modelNumber + ' – ' : ''}${first.name}`,
                                  category: first.category,
                                  image: first.image,
                                  isGeneral: true,
                                });
                              }
                            }
                          }}
                          className="w-full bg-slate-50 border border-slate-300 focus:border-[#0B3C83] rounded-lg md:rounded-[0.6vw] px-2 py-2 md:px-[0.6vw] md:py-[0.8vh] text-xs sm:text-sm md:text-[0.82vw] font-semibold text-[#0B3C83] outline-none transition-all cursor-pointer"
                        >
                          <option value="">Select Category</option>
                          {CATEGORY_OPTIONS.map((cat) => (
                            <option key={cat.label} value={cat.label}>
                              {cat.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-span-6 space-y-[0.3vh]">
                        <label className="text-[10px] sm:text-xs md:text-[0.72vw] font-bold text-slate-700">Product Code / Name</label>
                        <select 
                          disabled={!selectedCategory || selectedCategory === 'Custom/Other Requirement'}
                          onChange={(e) => {
                            const prod = PRODUCTS.find((p) => p.id === e.target.value);
                            if (prod) {
                              setSelectedProduct({
                                name: `${prod.modelNumber ? prod.modelNumber + ' – ' : ''}${prod.name}`,
                                category: prod.category,
                                image: prod.image,
                                isGeneral: true,
                              });
                            }
                          }}
                          className="w-full bg-slate-50 border border-slate-300 focus:border-[#0B3C83] rounded-lg md:rounded-[0.6vw] px-2 py-2 md:px-[0.6vw] md:py-[0.8vh] text-xs sm:text-sm md:text-[0.82vw] font-semibold text-[#0B3C83] outline-none transition-all cursor-pointer disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed"
                        >
                          <option value="">
                            {!selectedCategory
                              ? 'Select Category First'
                              : selectedCategory === 'Custom/Other Requirement'
                              ? 'Custom Requirement'
                              : 'Select Product Code'}
                          </option>
                          {categoryProducts.map((prod) => (
                            <option key={prod.id} value={prod.id}>
                              {prod.modelNumber ? `${prod.modelNumber} – ` : ''}{prod.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Quantity & Unit Row */}
                  <div className="grid grid-cols-12 gap-3 md:gap-[0.8vw]">
                    <div className="col-span-6 space-y-[0.3vh]">
                      <label className="text-[10px] sm:text-xs md:text-[0.72vw] font-bold text-slate-700">Quantity</label>
                      <input 
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 focus:border-[#0B3C83] rounded-lg md:rounded-[0.6vw] px-3 py-2 md:px-[0.8vw] md:py-[0.8vh] text-xs sm:text-sm md:text-[0.85vw] font-semibold text-slate-900 outline-none transition-all"
                        required
                      />
                    </div>
                    <div className="col-span-6 space-y-[0.3vh]">
                      <label className="text-[10px] sm:text-xs md:text-[0.72vw] font-bold text-slate-700">Select Unit</label>
                      <select 
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 focus:border-[#0B3C83] rounded-lg md:rounded-[0.6vw] px-3 py-2 md:px-[0.8vw] md:py-[0.8vh] text-xs sm:text-sm md:text-[0.85vw] font-semibold text-slate-900 outline-none transition-all cursor-pointer"
                      >
                        <option value="Unit/Units">Unit/Units</option>
                        <option value="Set/Sets">Set/Sets</option>
                        <option value="Bulk Order">Bulk Hospital Order</option>
                      </select>
                    </div>
                  </div>

                  {/* Hospital Name & Location Row */}
                  <div className="grid grid-cols-12 gap-3 md:gap-[0.8vw]">
                    <div className="col-span-6 space-y-[0.3vh]">
                      <label className="text-[10px] sm:text-xs md:text-[0.72vw] font-bold text-slate-700">Hospital Name (Optional)</label>
                      <input 
                        type="text"
                        placeholder="e.g. Apollo, Clinic"
                        value={hospitalName}
                        onChange={(e) => setHospitalName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 focus:border-[#0B3C83] rounded-lg md:rounded-[0.6vw] px-3 py-2 md:px-[0.8vw] md:py-[0.8vh] text-xs sm:text-sm md:text-[0.85vw] text-slate-900 outline-none transition-all"
                      />
                    </div>
                    <div className="col-span-6 space-y-[0.3vh]">
                      <label className="text-[10px] sm:text-xs md:text-[0.72vw] font-bold text-slate-700">Location / City (Optional)</label>
                      <input 
                        type="text"
                        placeholder="e.g. Chennai, Madurai"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 focus:border-[#0B3C83] rounded-lg md:rounded-[0.6vw] px-3 py-2 md:px-[0.8vw] md:py-[0.8vh] text-xs sm:text-sm md:text-[0.85vw] text-slate-900 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Additional Requirement Detail */}
                  <div className="space-y-[0.3vh]">
                    <label className="text-[10px] sm:text-xs md:text-[0.72vw] font-bold text-slate-700">Additional Detail / Specification</label>
                    <textarea 
                      rows={2}
                      placeholder="Specify dimensions, mattress option, custom color, or delivery location..."
                      value={additionalDetails}
                      onChange={(e) => setAdditionalDetails(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 focus:border-[#0B3C83] rounded-lg md:rounded-[0.6vw] px-3 py-2 md:px-[0.8vw] md:py-[0.8vh] text-xs sm:text-sm md:text-[0.82vw] text-slate-900 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Country Code & Mobile Number Row */}
                  <div className="space-y-[0.3vh]">
                    <label className="text-[10px] sm:text-xs md:text-[0.72vw] font-bold text-slate-700">Mobile Number (For Quotation Call)</label>
                    <div className="flex gap-2 md:gap-[0.5vw]">
                      <select 
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="w-[35%] bg-slate-50 border border-slate-300 focus:border-[#0B3C83] rounded-lg md:rounded-[0.6vw] px-2 py-2 md:px-[0.6vw] md:py-[0.8vh] text-xs sm:text-sm md:text-[0.82vw] font-bold text-slate-900 outline-none cursor-pointer"
                      >
                        <option value="+91">🇮🇳 +91 (IN)</option>
                      </select>
                      <input 
                        type="tel"
                        placeholder="Enter 10-digit mobile number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="flex-1 bg-slate-50 border border-slate-300 focus:border-[#0B3C83] rounded-lg md:rounded-[0.6vw] px-3 py-2 md:px-[0.8vw] md:py-[0.8vh] text-xs sm:text-sm md:text-[0.85vw] font-semibold text-slate-900 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 hover:from-orange-700 hover:to-orange-700 text-white font-bold text-xs sm:text-sm md:text-[0.95vw] py-3 px-4 md:py-[1.2vh] md:px-[1.2vw] rounded-lg md:rounded-[0.7vw] transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2 md:gap-[0.5vw] mt-4 cursor-pointer"
                  >
                    <span>Submit Request</span>
                    <Send className="w-4 h-4 md:w-[1vw] md:h-[1vw]" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </InquiryModalContext.Provider>
  );
}

export function useInquiryModal() {
  const context = useContext(InquiryModalContext);
  if (!context) {
    throw new Error('useInquiryModal must be used within an InquiryModalProvider');
  }
  return context;
}
