'use client';

import React, { useState } from 'react';
import { FileText, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface ContactFormState {
  name: string;
  hospital: string;
  city: string;
  phone: string;
  email: string;
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
    product: '',
    quantity: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.hospital ||
      !formData.city ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      setStatus('error');
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    setStatus('loading');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        hospital: '',
        city: '',
        phone: '',
        email: '',
        product: '',
        quantity: '',
        message: '',
      });
    }, 1500);
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

  const products = [
    'ICU Beds & Critical Care',
    'Ward Furniture',
    'Emergency & Patient Transfer',
    'Labour & Maternity',
    'OT Equipment',
    'SS Furniture & Ward Accessories',
    'Medical Trolleys & Carts',
    'Examination & Consultation',
    'Custom/Other Requirement',
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
            className="w-full px-4 py-3 rounded-lg bg-white border border-slate-400 text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22/%3E%3C/svg%3E')] bg-[length:0.7em_auto] bg-[right_1rem_center] bg-no-repeat"
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

        {/* Product & Quantity */}
        <div className="sc-child grid grid-cols-1 sm:grid-cols-2 gap-4" style={{"--i":7} as React.CSSProperties}>
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white border border-slate-400 text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22/%3E%3C/svg%3E')] bg-[length:0.7em_auto] bg-[right_1rem_center] bg-no-repeat"
          >
            <option value="">Product / Requirement</option>
            {products.map((prod) => (
              <option key={prod} value={prod} className="text-slate-900">
                {prod}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            className="w-full px-4 py-3 rounded-lg bg-white border border-slate-400 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all"
          />
        </div>

        {/* Message */}
        <div className="sc-child" style={{"--i":8} as React.CSSProperties}>
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
          className="sc-child w-full flex items-center justify-center gap-2 bg-[#104272] hover:bg-[#15548F] text-white font-semibold text-md py-4 px-6 rounded-xl transition-all shadow-md active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed"
          style={{"--i":9} as React.CSSProperties}
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
