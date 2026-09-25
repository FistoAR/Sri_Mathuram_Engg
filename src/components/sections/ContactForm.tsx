'use client';

import React, { useState } from 'react';
import { FileText, CheckCircle2, AlertCircle, Loader2, Layers, Check } from 'lucide-react';
import { PRODUCTS, MedicalProduct, getProductVariants, getProductDropdownLabel, ProductModelVariant } from '@/lib/data';

import { sendContactForm } from '@/lib/api';

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

interface ContactFormState {
  name: string;
  hospital: string;
  city: string;
  phone: string;
  email: string;
  category: string;
  product: string;
  quantity: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    hospital: '',
    city: '',
    phone: '',
    email: '',
    category: '',
    product: '',
    quantity: '',
    message: '',
  });

  const [selectedVariant, setSelectedVariant] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCat = e.target.value;
    setSelectedVariant('');
    setFormData((prev) => ({
      ...prev,
      category: selectedCat,
      product: selectedCat === 'Custom/Other Requirement' ? 'Custom Requirement' : '',
    }));
  };

  const selectedCategoryConfig = CATEGORY_OPTIONS.find(
    (c) => c.label === formData.category || c.matchKey === formData.category
  );

  const filteredProducts =
    selectedCategoryConfig && selectedCategoryConfig.matchKey !== 'Custom'
      ? PRODUCTS.filter(
          (p) => p.category.toLowerCase() === selectedCategoryConfig.matchKey.toLowerCase()
        )
      : [];

  const currentProductObj = filteredProducts.find(
    (p) =>
      `${p.modelNumber ? p.modelNumber + ' – ' : ''}${p.name}` === formData.product ||
      `${p.modelNumber ? p.modelNumber + ' - ' : ''}${p.name}` === formData.product ||
      p.name === formData.product ||
      (formData.product && p.modelNumber && formData.product.startsWith(p.modelNumber))
  );

  const productVariants = currentProductObj ? getProductVariants(currentProductObj) : [];

  const handleProductSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const rawVal = e.target.value;
    const prod = filteredProducts.find(
      (p) => `${p.modelNumber ? p.modelNumber + ' – ' : ''}${p.name}` === rawVal || p.id === rawVal
    );
    if (prod) {
      const vars = getProductVariants(prod);
      const baseName = `${prod.modelNumber ? prod.modelNumber + ' – ' : ''}${prod.name}`;
      if (vars.length > 1) {
        setSelectedVariant(vars[0].full || vars[0].name);
      } else {
        setSelectedVariant('');
      }
      setFormData((prev) => ({
        ...prev,
        product: baseName,
      }));
    } else {
      setSelectedVariant('');
      setFormData((prev) => ({
        ...prev,
        product: rawVal,
      }));
    }
  };

  const handleVariantSelect = (variant: ProductModelVariant) => {
    setSelectedVariant(variant.full || variant.name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.hospital ||
      !formData.city ||
      !formData.phone ||
      !formData.email ||
      !formData.category ||
      !formData.product ||
      !formData.message
    ) {
      setStatus('error');
      if (!formData.category) {
        setErrorMessage('Please select a product category.');
      } else if (!formData.product) {
        setErrorMessage('Please select a product code / name.');
      } else {
        setErrorMessage('Please fill out all required fields marked with *.');
      }
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const finalProduct = selectedVariant
        ? `${formData.product} (Model: ${selectedVariant})`
        : formData.product;

      await sendContactForm({
        ...formData,
        product: finalProduct,
      });
      setStatus('success');
      setFormData({
        name: '',
        hospital: '',
        city: '',
        phone: '',
        email: '',
        category: '',
        product: '',
        quantity: '',
        message: '',
      });
      setSelectedVariant('');
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(
        err.message || 'Failed to send enquiry email. Please try again or contact us directly.'
      );
    }
  };

  const cities = [
    'Chennai',
    'Coimbatore',
    'Madurai',
    'Trichy',
    'Salem',
    'Tiruppur',
    'Erode',
    'Vellore',
    'Tirunelveli',
    'Thoothukudi',
    'Other',
  ];

  return (
    <div className="w-full space-y-6 font-montserrat">
      <div className="space-y-2">
        <h2 className="sc-child text-2xl sm:text-[1.8vw] font-bold text-navy-950 leading-none uppercase" style={{"--i":2} as React.CSSProperties}>
          SEND US YOUR REQUIREMENT
        </h2>
        <p className="sc-child text-slate-500 font-medium text-xs sm:text-[0.9vw] leading-relaxed" style={{"--i":3} as React.CSSProperties}>
          Looking for a specific hospital product or planning a larger requirement? Share your details with us and our team will assist you.
        </p>
      </div>

      {status === 'success' && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3 text-sm font-medium">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          <span>Thank you! Your enquiry has been submitted successfully. We will get back to you shortly.</span>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-center gap-3 text-sm font-medium">
          <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div className="sc-child" style={{"--i":4} as React.CSSProperties}>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            className="w-full px-4 py-3 rounded-lg bg-white border border-slate-400 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all"
          />
        </div>

        {/* Hospital & City */}
        <div className="sc-child grid grid-cols-1 sm:grid-cols-2 gap-4" style={{"--i":5} as React.CSSProperties}>
          <input
            type="text"
            name="hospital"
            required
            value={formData.hospital}
            onChange={handleChange}
            placeholder="Hospital / Organization *"
            className="w-full px-4 py-3 rounded-lg bg-white border border-slate-400 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all"
          />
          <select
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white border border-slate-400 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22/%3E%3C/svg%3E')] bg-[length:0.7em_auto] bg-[right_1rem_center] bg-no-repeat cursor-pointer"
          >
            <option value="" disabled hidden>City *</option>
            {cities.map((city) => (
              <option key={city} value={city} className="text-slate-900">
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Phone & Email */}
        <div className="sc-child grid grid-cols-1 sm:grid-cols-2 gap-4" style={{"--i":6} as React.CSSProperties}>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            className="w-full px-4 py-3 rounded-lg bg-white border border-slate-400 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all"
          />
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address *"
            className="w-full px-4 py-3 rounded-lg bg-white border border-slate-400 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all"
          />
        </div>

        {/* Category & Product Code */}
        <div className="sc-child grid grid-cols-1 sm:grid-cols-2 gap-4" style={{"--i":7} as React.CSSProperties}>
          <select
            name="category"
            required
            value={formData.category}
            onChange={handleCategoryChange}
            className="w-full px-4 py-3 rounded-lg bg-white border border-slate-400 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22/%3E%3C/svg%3E')] bg-[length:0.7em_auto] bg-[right_1rem_center] bg-no-repeat cursor-pointer"
          >
            <option value="">Select Category *</option>
            {CATEGORY_OPTIONS.map((cat) => (
              <option key={cat.label} value={cat.label} className="text-slate-900">
                {cat.label}
              </option>
            ))}
          </select>

          <select
            name="product"
            required
            value={formData.product}
            onChange={handleProductSelect}
            disabled={!formData.category || (formData.category !== 'Custom/Other Requirement' && filteredProducts.length === 0)}
            className="w-full px-4 py-3 rounded-lg bg-white border border-slate-400 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22/%3E%3C/svg%3E')] bg-[length:0.7em_auto] bg-[right_1rem_center] bg-no-repeat cursor-pointer disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed"
          >
            <option value="">
              {!formData.category
                ? 'Select Category First *'
                : formData.category === 'Custom/Other Requirement'
                ? 'Custom / Other Requirement'
                : 'Select Product Code / Name *'}
            </option>
            {formData.category === 'Custom/Other Requirement' ? (
              <option value="Custom / Other Requirement" className="text-slate-900">
                Custom / Other Requirement
              </option>
            ) : (
              filteredProducts.map((prod) => (
                <option key={prod.id} value={`${prod.modelNumber ? prod.modelNumber + ' – ' : ''}${prod.name}`} className="text-slate-900">
                  {getProductDropdownLabel(prod)}
                </option>
              ))
            )}
          </select>
        </div>

        {/* Secondary Model & Specification Variant Selector Box */}
        {productVariants.length > 1 && (
          <div className="sc-child bg-blue-50/80 border border-blue-200/90 rounded-xl p-3.5 space-y-2.5 animate-fade-in" style={{"--i":7.5} as React.CSSProperties}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[#0B3C83] font-bold text-xs">
                <Layers className="w-3.5 h-3.5 text-orange-500" />
                <span>Available Product Models & Specifications:</span>
              </div>
              <span className="text-[10px] text-blue-800 font-bold bg-blue-100 px-2 py-0.5 rounded-full">
                {productVariants.length} Models
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {productVariants.map((v) => {
                const isSelected = selectedVariant === (v.full || v.name);
                return (
                  <button
                    type="button"
                    key={v.code}
                    onClick={() => handleVariantSelect(v)}
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

        {/* Quantity */}
        <div className="sc-child" style={{"--i":8} as React.CSSProperties}>
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Quantity (e.g. 5 Units, 10 Beds)"
            className="w-full px-4 py-3 rounded-lg bg-white border border-slate-400 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all"
          />
        </div>

        {/* Message */}
        <div className="sc-child" style={{"--i":9} as React.CSSProperties}>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirement, customization needs or project details. *"
            className="w-full px-4 py-3 rounded-lg bg-white border border-slate-400 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="sc-child w-full flex items-center justify-center gap-2 bg-[#104272] hover:bg-[#15548F] text-white font-semibold text-md py-4 px-6 rounded-xl transition-all shadow-md active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
          style={{"--i":10} as React.CSSProperties}
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Submitting Enquiry...</span>
            </>
          ) : (
            <>
              <FileText className="w-5 h-5" />
              <span>Submit Enquiry</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
