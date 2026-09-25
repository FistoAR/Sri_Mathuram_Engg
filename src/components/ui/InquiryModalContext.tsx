'use client';

import React, { createContext, useContext, useState } from 'react';
import Image from 'next/image';
import { X, Send, CheckCircle2, ShieldCheck, PhoneCall, Building2, Loader2, AlertCircle, Layers, Check } from 'lucide-react';
import { MedicalProduct, PRODUCTS, getProductVariants, getProductDropdownLabel, ProductModelVariant } from '@/lib/data';
import { SecureImage } from '@/components/ui/SecureImage';
import { sendModalInquiry } from '@/lib/api';

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
  const [selectedProductId, setSelectedProductId] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedVariant, setSelectedVariant] = useState<string>('');
  
  // Form State
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [unit, setUnit] = useState('Unit/Units');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [mobileNumber, setMobileNumber] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [location, setLocation] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<{
    customerName?: string;
    email?: string;
    mobileNumber?: string;
    quantity?: string;
    category?: string;
    product?: string;
  }>({});

  const openInquiryModal = (product?: InquiryModalProduct) => {
    if (product && !product.isGeneral && product.name) {
      setSelectedProduct(product);
      const matched = CATEGORY_OPTIONS.find(
        (c) =>
          c.matchKey.toLowerCase() === (product.category || '').toLowerCase() ||
          c.label.toLowerCase() === (product.category || '').toLowerCase()
      );
      setSelectedCategory(matched ? matched.label : (product.category || ''));
      
      const cleanTarget = product.name.toLowerCase().trim();
      const matchedProdObj = PRODUCTS.find((p) => {
        if (p.id === (product as any).id) return true;
        const fullName = `${p.modelNumber ? p.modelNumber + ' – ' : ''}${p.name}`.toLowerCase();
        const fullNameDash = `${p.modelNumber ? p.modelNumber + ' - ' : ''}${p.name}`.toLowerCase();
        const rawName = p.name.toLowerCase();
        if (cleanTarget === fullName || cleanTarget === fullNameDash || cleanTarget === rawName) return true;
        if (cleanTarget.startsWith(fullName) || cleanTarget.startsWith(rawName)) return true;
        if (p.modelNumber && cleanTarget.includes(p.modelNumber.toLowerCase())) return true;
        const vars = getProductVariants(p);
        if (vars.some(v => cleanTarget.includes(v.code.toLowerCase()) || cleanTarget.includes(v.name.toLowerCase()))) return true;
        return false;
      });

      if (matchedProdObj) {
        setSelectedProductId(matchedProdObj.id);
        const vars = getProductVariants(matchedProdObj);
        if (vars.length > 1) {
          const matchingVar = vars.find(v => cleanTarget.includes(v.code.toLowerCase()) || cleanTarget.includes(v.spec?.toLowerCase() || ''));
          setSelectedVariant(matchingVar ? (matchingVar.full || matchingVar.name) : (vars[0].full || vars[0].name));
        } else {
          setSelectedVariant('');
        }
      } else {
        setSelectedProductId('');
        setSelectedVariant('');
      }
    } else {
      setSelectedProductId('');
      setSelectedProduct({
        name: "",
        category: "",
        image: undefined,
        isGeneral: true,
      });
      setSelectedCategory('');
      setSelectedVariant('');
    }
    setCustomerName('');
    setEmail('');
    setQuantity('1');
    setUnit('Unit/Units');
    setAdditionalDetails('');
    setMobileNumber('');
    setHospitalName('');
    setLocation('');
    setIsSubmitted(false);
    setIsLoading(false);
    setErrorMessage('');
    setFieldErrors({});
    setIsOpen(true);
  };

  const closeInquiryModal = () => {
    setIsOpen(false);
    setSelectedProduct(null);
    setSelectedCategory('');
    setIsLoading(false);
    setErrorMessage('');
    setFieldErrors({});
  };

  const validateAllFields = () => {
    const errors: {
      customerName?: string;
      email?: string;
      mobileNumber?: string;
      quantity?: string;
      category?: string;
      product?: string;
    } = {};

    // 1. Name validation
    if (!customerName.trim()) {
      errors.customerName = 'Please enter your name.';
    } else if (customerName.trim().length < 2) {
      errors.customerName = 'Name must be at least 2 characters.';
    }

    // 2. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    // 3. Mobile validation
    const cleanPhone = mobileNumber.replace(/[^0-9]/g, '');
    if (!cleanPhone) {
      errors.mobileNumber = 'Please enter mobile number.';
    } else if (cleanPhone.length < 10) {
      errors.mobileNumber = 'Please enter a valid 10-digit mobile number.';
    }

    // 4. Product / Category selection validation
    if (selectedProduct?.isGeneral) {
      if (!selectedCategory) {
        errors.category = 'Please select a category.';
      }
      if (!selectedProduct.name && selectedCategory !== 'Custom/Other Requirement') {
        errors.product = 'Please select a product code / name.';
      }
    } else if (!selectedProduct?.name) {
      errors.product = 'Please select a product.';
    }

    // 5. Quantity validation
    const num = parseInt(quantity, 10);
    if (!quantity || isNaN(num) || num < 1) {
      errors.quantity = 'Quantity must be 1 or more.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validateAllFields()) {
      setErrorMessage('Please complete all required fields highlighted in red before submitting.');
      return;
    }

    setIsLoading(true);

    try {
      const baseName = selectedProduct?.name || (selectedCategory === 'Custom/Other Requirement' ? 'Custom Requirement' : 'General Inquiry');
      const finalProductName = selectedProduct?.name && selectedVariant
        ? `${selectedProduct.name} (Model: ${selectedVariant})`
        : baseName;

      await sendModalInquiry({
        productName: finalProductName,
        category: selectedProduct?.category || selectedCategory || 'Hospital Furniture',
        customerName: customerName.trim(),
        email: email.trim(),
        quantity,
        unit,
        hospitalName: hospitalName.trim(),
        location: location.trim(),
        countryCode,
        mobileNumber: mobileNumber.trim(),
        additionalDetails: additionalDetails.trim(),
      });

      setIsLoading(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        closeInquiryModal();
      }, 2800);
    } catch (err: any) {
      setIsLoading(false);
      setErrorMessage(err.message || 'Failed to submit inquiry. Please try again.');
    }
  };

  const currentCategoryConfig = CATEGORY_OPTIONS.find(
    (c) => c.label === selectedCategory || c.matchKey === selectedCategory
  );

  const categoryProducts = currentCategoryConfig && currentCategoryConfig.matchKey !== 'Custom'
    ? PRODUCTS.filter(
        (p) => p.category.toLowerCase() === currentCategoryConfig.matchKey.toLowerCase()
      )
    : [];

  const currentProductObj = React.useMemo(() => {
    if (selectedProductId) {
      return PRODUCTS.find((p) => p.id === selectedProductId) || null;
    }
    if (selectedProduct?.name) {
      const cleanTarget = selectedProduct.name.toLowerCase().trim();
      return (
        PRODUCTS.find((p) => {
          if (p.id === (selectedProduct as any).id) return true;
          const fullName = `${p.modelNumber ? p.modelNumber + ' – ' : ''}${p.name}`.toLowerCase();
          const fullNameDash = `${p.modelNumber ? p.modelNumber + ' - ' : ''}${p.name}`.toLowerCase();
          const rawName = p.name.toLowerCase();
          if (cleanTarget === fullName || cleanTarget === fullNameDash || cleanTarget === rawName) return true;
          if (cleanTarget.startsWith(fullName) || cleanTarget.startsWith(rawName)) return true;
          if (p.modelNumber && cleanTarget.includes(p.modelNumber.toLowerCase())) return true;
          const vars = getProductVariants(p);
          if (vars.some((v) => cleanTarget.includes(v.code.toLowerCase()) || cleanTarget.includes(v.name.toLowerCase()))) return true;
          return false;
        }) || null
      );
    }
    return null;
  }, [selectedProductId, selectedProduct]);

  const currentProductVariants = React.useMemo(() => {
    return currentProductObj ? getProductVariants(currentProductObj) : [];
  }, [currentProductObj]);

  return (
    <InquiryModalContext.Provider value={{ openInquiryModal, closeInquiryModal }}>
      {children}

      {/* Inquiry Modal Popup Overlay */}
      {isOpen && selectedProduct && (
        <div 
          data-lenis-prevent
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 md:p-[1.5vw] bg-slate-950/70 backdrop-blur-md animate-fade-in"
        >
          <div 
            data-lenis-prevent
            className="bg-white w-full max-w-lg md:max-w-[34vw] max-h-[92vh] flex flex-col rounded-xl md:rounded-[1.2vw] shadow-2xl border border-slate-200/90 overflow-hidden relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#0B3C83] via-blue-900 to-[#0B3C83] px-4 py-3 md:px-[1.5vw] md:py-[1.6vh] text-white flex items-center justify-between relative shrink-0">
              <div>
                <h3 className="text-sm sm:text-base md:text-[1.1vw] font-bold text-white tracking-tight leading-tight">Tell us about your requirement</h3>
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

            {/* Modal Body with smooth scrolling */}
            <div className="p-4 md:p-[1.5vw] space-y-3.5 md:space-y-[1.4vh] overflow-y-auto flex-1 [scrollbar-width:thin]">
              {/* Product Preview Card Box */}
              <div className={`border rounded-lg md:rounded-[0.8vw] p-3 md:p-[0.8vw] flex items-center gap-3 md:gap-[1vw] transition-all ${
                fieldErrors.category || fieldErrors.product
                  ? 'bg-rose-50/50 border-rose-300 ring-1 ring-rose-200'
                  : 'bg-slate-50 border-slate-200/90'
              }`}>
                {selectedProduct.image ? (
                  <div className="w-12 h-12 md:w-[4.2vw] md:h-[4.2vw] relative bg-white rounded-md md:rounded-[0.6vw] border border-slate-200 shrink-0 flex items-center justify-center overflow-hidden shadow-2xs">
                    <SecureImage 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name || 'Product'}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className={`w-12 h-12 md:w-[4.2vw] md:h-[4.2vw] rounded-md md:rounded-[0.6vw] shrink-0 flex items-center justify-center shadow-2xs ${
                    fieldErrors.category || fieldErrors.product
                      ? 'bg-rose-100/80 border border-rose-200 text-rose-600'
                      : 'bg-blue-50/80 border border-blue-100 text-[#0B3C83]'
                  }`}>
                    <Building2 className="w-6 h-6 md:w-[2vw] md:h-[2vw]" />
                  </div>
                )}
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5 md:gap-[0.4vw] mb-0.5">
                    <span className="text-[10px] sm:text-xs md:text-[0.68vw] font-bold text-orange-600 uppercase tracking-wider">
                      {selectedProduct.category || selectedCategory || 'Direct Factory Requirement'}
                    </span>
                    {currentProductVariants.length > 1 && (
                      <span className="text-[9px] sm:text-[10px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.2 rounded-sm uppercase tracking-tight">
                        {currentProductVariants.length} Models
                      </span>
                    )}
                  </div>
                  <h4 className="text-xs sm:text-sm md:text-[0.98vw] font-bold text-[#0B3C83] truncate">
                    {selectedProduct.name || (selectedCategory === 'Custom/Other Requirement' ? 'Custom Requirement' : 'No Product Selected Yet')}
                  </h4>
                  <span className="text-[10px] sm:text-xs md:text-[0.72vw] font-medium text-slate-600 truncate">
                    {selectedProduct.name 
                      ? (selectedVariant ? `Selected Model: ${selectedVariant}` : 'Request Custom Quote & Delivery Lead Time')
                      : (selectedCategory && selectedCategory !== 'Custom/Other Requirement'
                          ? 'Select product code from section 2 below'
                          : 'Select category & product from section 2 below')}
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
                    Thank you, <strong>{customerName || 'Valued Customer'}</strong>! We have sent a confirmation email to <strong>{email}</strong>. Our Tamil Nadu sales engineering team will call you shortly.
                  </p>
                </div>
              ) : (
                /* Inquiry Form */
                 <form onSubmit={handleSubmit} noValidate className="space-y-3.5 md:space-y-[1.4vh]">
                  {/* --- SECTION 1: Personal & Contact Information --- */}
                  <div className="space-y-3 md:space-y-[1.2vh]">
                    <div className="flex items-center gap-2 border-b border-slate-200 pb-1.5">
                      <span className="text-[10px] sm:text-xs md:text-[0.72vw] font-bold text-slate-800 uppercase tracking-wider">
                        1. Contact Information
                      </span>
                    </div>

                    {/* Customer Name & Email Address Row */}
                    <div className="grid grid-cols-12 gap-3 md:gap-[0.8vw]">
                      <div className="col-span-6 space-y-[0.3vh]">
                        <label className="text-[10px] sm:text-xs md:text-[0.72vw] font-bold text-slate-700">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text"
                          placeholder="e.g. Dr. Rajesh Kumar"
                          value={customerName}
                          onChange={(e) => {
                            setCustomerName(e.target.value);
                            if (fieldErrors.customerName) {
                              setFieldErrors(prev => ({ ...prev, customerName: undefined }));
                            }
                          }}
                          className={`w-full bg-slate-50 border ${
                            fieldErrors.customerName ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300 focus:border-[#0B3C83]'
                          } rounded-lg md:rounded-[0.6vw] px-3 py-2 md:px-[0.8vw] md:py-[0.8vh] text-xs sm:text-sm md:text-[0.85vw] text-slate-900 outline-none transition-all`}
                          required
                        />
                        {fieldErrors.customerName && (
                          <p className="text-[10px] sm:text-[11px] text-rose-600 font-medium">{fieldErrors.customerName}</p>
                        )}
                      </div>
                      <div className="col-span-6 space-y-[0.3vh]">
                        <label className="text-[10px] sm:text-xs md:text-[0.72vw] font-bold text-slate-700">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="email"
                          placeholder="name@hospital.com"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (fieldErrors.email) {
                              setFieldErrors(prev => ({ ...prev, email: undefined }));
                            }
                          }}
                          className={`w-full bg-slate-50 border ${
                            fieldErrors.email ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300 focus:border-[#0B3C83]'
                          } rounded-lg md:rounded-[0.6vw] px-3 py-2 md:px-[0.8vw] md:py-[0.8vh] text-xs sm:text-sm md:text-[0.85vw] text-slate-900 outline-none transition-all`}
                          required
                        />
                        {fieldErrors.email && (
                          <p className="text-[10px] sm:text-[11px] text-rose-600 font-medium">{fieldErrors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Mobile Number Row */}
                    <div className="space-y-[0.3vh]">
                      <label className="text-[10px] sm:text-xs md:text-[0.72vw] font-bold text-slate-700">
                        Mobile Number (For Quotation Call) <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2 md:gap-[0.5vw]">
                        <div className="w-[70px] sm:w-[80px] shrink-0">
                          <input 
                            type="text"
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            placeholder="+91"
                            maxLength={6}
                            className="w-full text-center bg-slate-50 border border-slate-300 focus:border-[#0B3C83] rounded-lg md:rounded-[0.6vw] px-2 py-2 md:px-[0.6vw] md:py-[0.8vh] text-xs sm:text-sm md:text-[0.85vw] font-bold text-slate-900 outline-none transition-all"
                          />
                        </div>
                        <input 
                          type="tel"
                          maxLength={10}
                          placeholder="Enter 10-digit mobile number"
                          value={mobileNumber}
                          onChange={(e) => {
                            const digitsOnly = e.target.value.replace(/[^0-9]/g, '');
                            setMobileNumber(digitsOnly);
                            if (fieldErrors.mobileNumber) {
                              setFieldErrors(prev => ({ ...prev, mobileNumber: undefined }));
                            }
                          }}
                          className={`flex-1 bg-slate-50 border ${
                            fieldErrors.mobileNumber ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300 focus:border-[#0B3C83]'
                          } rounded-lg md:rounded-[0.6vw] px-3 py-2 md:px-[0.8vw] md:py-[0.8vh] text-xs sm:text-sm md:text-[0.85vw] font-semibold text-slate-900 outline-none transition-all`}
                          required
                        />
                      </div>
                      {fieldErrors.mobileNumber && (
                        <p className="text-[10px] sm:text-[11px] text-rose-600 font-medium">{fieldErrors.mobileNumber}</p>
                      )}
                    </div>

                    {/* Hospital Name & Location Row */}
                    <div className="grid grid-cols-12 gap-3 md:gap-[0.8vw]">
                      <div className="col-span-6 space-y-[0.3vh]">
                        <label className="text-[10px] sm:text-xs md:text-[0.72vw] font-bold text-slate-700">Hospital / Clinic (Optional)</label>
                        <input 
                          type="text"
                          placeholder="e.g. Apollo, Clinic"
                          value={hospitalName}
                          onChange={(e) => setHospitalName(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-300 focus:border-[#0B3C83] rounded-lg md:rounded-[0.6vw] px-3 py-2 md:px-[0.8vw] md:py-[0.8vh] text-xs sm:text-sm md:text-[0.85vw] text-slate-900 outline-none transition-all"
                        />
                      </div>
                      <div className="col-span-6 space-y-[0.3vh]">
                        <label className="text-[10px] sm:text-xs md:text-[0.72vw] font-bold text-slate-700">City / Location (Optional)</label>
                        <input 
                          type="text"
                          placeholder="e.g. Chennai, Madurai"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-300 focus:border-[#0B3C83] rounded-lg md:rounded-[0.6vw] px-3 py-2 md:px-[0.8vw] md:py-[0.8vh] text-xs sm:text-sm md:text-[0.85vw] text-slate-900 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* --- SECTION 2: Product & Requirement Details --- */}
                  <div className="space-y-3 md:space-y-[1.2vh] pt-1">
                    <div className="flex items-center gap-2 border-b border-slate-200 pb-1.5">
                      <span className="text-[10px] sm:text-xs md:text-[0.72vw] font-bold text-slate-800 uppercase tracking-wider">
                        2. Requirement Details
                      </span>
                    </div>

                    {selectedProduct.isGeneral && (
                      <div className="grid grid-cols-12 gap-3 md:gap-[0.8vw]">
                        <div className="col-span-6 space-y-[0.3vh]">
                          <label className="text-[10px] sm:text-xs md:text-[0.72vw] font-bold text-slate-700">
                            Select Category <span className="text-red-500">*</span>
                          </label>
                          <select 
                            value={selectedCategory}
                            onChange={(e) => {
                              const newCat = e.target.value;
                              setSelectedCategory(newCat);
                              if (fieldErrors.category) {
                                setFieldErrors(prev => ({ ...prev, category: undefined }));
                              }
                              if (!newCat) {
                                setSelectedProduct({
                                  name: '',
                                  category: '',
                                  image: undefined,
                                  isGeneral: true,
                                });
                              } else if (newCat === 'Custom/Other Requirement') {
                                setSelectedProduct({
                                  name: 'Custom Requirement',
                                  category: 'Custom/Other Requirement',
                                  image: undefined,
                                  isGeneral: true,
                                });
                              } else {
                                setSelectedProduct({
                                  name: '',
                                  category: newCat,
                                  image: undefined,
                                  isGeneral: true,
                                });
                              }
                            }}
                            className={`w-full bg-slate-50 border ${
                              fieldErrors.category ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300 focus:border-[#0B3C83]'
                            } rounded-lg md:rounded-[0.6vw] px-2 py-2 md:px-[0.6vw] md:py-[0.8vh] text-xs sm:text-sm md:text-[0.82vw] font-semibold text-[#0B3C83] outline-none transition-all cursor-pointer`}
                          >
                            <option value="">Select Category</option>
                            {CATEGORY_OPTIONS.map((cat) => (
                              <option key={cat.label} value={cat.label}>
                                {cat.label}
                              </option>
                            ))}
                          </select>
                          {fieldErrors.category && (
                            <p className="text-[10px] sm:text-[11px] text-rose-600 font-medium">{fieldErrors.category}</p>
                          )}
                        </div>
                        <div className="col-span-6 space-y-[0.3vh]">
                          <label className="text-[10px] sm:text-xs md:text-[0.72vw] font-bold text-slate-700">
                            Product Code / Name {selectedCategory && selectedCategory !== 'Custom/Other Requirement' && <span className="text-red-500">*</span>}
                          </label>
                          <select 
                            disabled={!selectedCategory || selectedCategory === 'Custom/Other Requirement'}
                            value={
                              selectedProductId ||
                              (selectedProduct.name && selectedCategory && selectedCategory !== 'Custom/Other Requirement'
                                ? (categoryProducts.find(p => `${p.modelNumber ? p.modelNumber + ' – ' : ''}${p.name}` === selectedProduct.name || p.name === selectedProduct.name)?.id || '')
                                : '')
                            }
                            onChange={(e) => {
                              const prodId = e.target.value;
                              const prod = PRODUCTS.find((p) => p.id === prodId);
                              if (prod) {
                                setSelectedProductId(prod.id);
                                const vars = getProductVariants(prod);
                                if (vars.length > 1) {
                                  setSelectedVariant(vars[0].full || vars[0].name);
                                } else {
                                  setSelectedVariant('');
                                }
                                setSelectedProduct({
                                  name: `${prod.modelNumber ? prod.modelNumber + ' – ' : ''}${prod.name}`,
                                  category: prod.category,
                                  image: prod.image,
                                  isGeneral: true,
                                });
                                if (fieldErrors.product) {
                                  setFieldErrors(prev => ({ ...prev, product: undefined }));
                                }
                              } else {
                                setSelectedProductId('');
                                setSelectedVariant('');
                                setSelectedProduct({
                                  name: '',
                                  category: selectedCategory,
                                  image: undefined,
                                  isGeneral: true,
                                });
                              }
                            }}
                            className={`w-full bg-slate-50 border ${
                              fieldErrors.product ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300 focus:border-[#0B3C83]'
                            } rounded-lg md:rounded-[0.6vw] px-2 py-2 md:px-[0.6vw] md:py-[0.8vh] text-xs sm:text-sm md:text-[0.82vw] font-semibold text-[#0B3C83] outline-none transition-all cursor-pointer disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed`}
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
                                {getProductDropdownLabel(prod)}
                              </option>
                            ))}
                          </select>
                          {fieldErrors.product && (
                            <p className="text-[10px] sm:text-[11px] text-rose-600 font-medium">{fieldErrors.product}</p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Secondary Model & Specification Variant Selector Box */}
                    {currentProductVariants.length > 1 && (
                      <div className="bg-blue-50/80 border border-blue-200/90 rounded-lg md:rounded-[0.6vw] p-2.5 md:p-[0.6vw] space-y-2 animate-fade-in">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-[#0B3C83] font-bold text-[10px] sm:text-xs md:text-[0.72vw]">
                            <Layers className="w-3.5 h-3.5 md:w-[0.9vw] md:h-[0.9vw] text-orange-500" />
                            <span>Available Product Models & Specifications:</span>
                          </div>
                          <span className="text-[9px] sm:text-[10px] text-blue-800 font-bold bg-blue-100 px-2 py-0.5 rounded-full">
                            {currentProductVariants.length} Models
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {currentProductVariants.map((v) => {
                            const isSelected = selectedVariant === (v.full || v.name);
                            return (
                              <button
                                type="button"
                                key={v.code}
                                onClick={() => setSelectedVariant(v.full || v.name)}
                                className={`text-left p-2.5 rounded-lg border transition-all flex flex-col justify-between cursor-pointer ${
                                  isSelected
                                    ? 'bg-white border-[#0B3C83] shadow-xs ring-2 ring-[#0B3C83]/20'
                                    : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300'
                                }`}
                              >
                                <div className="flex items-center justify-between w-full mb-1">
                                  <span className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                                    <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-orange-500' : 'bg-slate-300'}`} />
                                    {v.code}
                                    {v.isPrimary ? (
                                      <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">Primary Model</span>
                                    ) : (
                                      <span className="text-[9px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.5 rounded">Secondary Model</span>
                                    )}
                                  </span>
                                  {isSelected && <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />}
                                </div>
                                <p className="text-[11px] sm:text-xs text-[#0B3C83] font-bold leading-tight">
                                  {v.title}
                                </p>
                                {v.spec && (
                                  <p className="text-[10px] text-slate-600 mt-1 pt-1 border-t border-slate-100">
                                    <strong className="text-slate-700">Specification:</strong> {v.spec}
                                  </p>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Quantity & Unit Row */}
                    <div className="grid grid-cols-12 gap-3 md:gap-[0.8vw]">
                      <div className="col-span-6 space-y-[0.3vh]">
                        <label className="text-[10px] sm:text-xs md:text-[0.72vw] font-bold text-slate-700">
                          Quantity <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="number"
                          min="1"
                          value={quantity}
                          onChange={(e) => {
                            setQuantity(e.target.value);
                            if (fieldErrors.quantity) {
                              setFieldErrors(prev => ({ ...prev, quantity: undefined }));
                            }
                          }}
                          className={`w-full bg-slate-50 border ${
                            fieldErrors.quantity ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300 focus:border-[#0B3C83]'
                          } rounded-lg md:rounded-[0.6vw] px-3 py-2 md:px-[0.8vw] md:py-[0.8vh] text-xs sm:text-sm md:text-[0.85vw] font-semibold text-slate-900 outline-none transition-all`}
                          required
                        />
                        {fieldErrors.quantity && (
                          <p className="text-[10px] sm:text-[11px] text-rose-600 font-medium">{fieldErrors.quantity}</p>
                        )}
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

                    {/* Additional Requirement Detail */}
                    <div className="space-y-[0.3vh]">
                      <label className="text-[10px] sm:text-xs md:text-[0.72vw] font-bold text-slate-700">Additional Detail / Specification (Optional)</label>
                      <textarea 
                        rows={2}
                        placeholder="Specify dimensions, mattress option, custom color, or delivery location..."
                        value={additionalDetails}
                        onChange={(e) => setAdditionalDetails(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 focus:border-[#0B3C83] rounded-lg md:rounded-[0.6vw] px-3 py-2 md:px-[0.8vw] md:py-[0.8vh] text-xs sm:text-sm md:text-[0.82vw] text-slate-900 outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Error Message */}
                  {errorMessage && (
                    <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 flex items-center gap-2 text-xs font-medium">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 hover:from-orange-700 hover:to-orange-700 text-white font-bold text-xs sm:text-sm md:text-[0.95vw] py-3 px-4 md:py-[1.2vh] md:px-[1.2vw] rounded-lg md:rounded-[0.7vw] transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2 md:gap-[0.5vw] mt-3 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 md:w-[1vw] md:h-[1vw] animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <Send className="w-4 h-4 md:w-[1vw] md:h-[1vw]" />
                      </>
                    )}
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
