import { Product, Category } from '@/types';

export interface MedicalProduct extends Product {
  modelSpecifications?: string[];
  price?: string;
  moq?: string;
  materialDetails?: string;
  availableSizes?: string;
  relatedProductSlugs?: string[];
  tradeInfo?: {
    moq?: string;
    paymentTerms?: string;
    supplyAbility?: string;
    deliveryTime?: string;
    market?: string;
    warranty?: string;
    brand?: string;
  };
  detailedSpec?: Record<string, string>;
  highlights?: string[];
  faqs?: Array<{ question: string; answer: string }>;
  regionalNotice?: string;
  modelNumber?: string;
  needsDetails?: boolean;
  functions?: string[];
  specifications?: Record<string, string>;
  specificationVariants?: Array<{ name: string; specs: Record<string, string> }>;
}

export const COMPANY_INFO = {
  name: 'Sri Mathurams Medical Engineering',
  legalName: 'Sri Mathurams Medical Engineering Pvt. Ltd.',
  tagline: 'Engineering Healthcare. Delivering Excellence Since 1997.',
  description: 'Premium Hospital Furniture & Medical Equipment Manufacturer trusted by hospitals, clinics, and healthcare across Tamil Nadu.',
  url: 'https://srimathuramsmedical.com',
  email: 'mathuramindia@gmail.com',
  salesEmail: 'mathuramindia@gmail.com',
  phone: '+91 98422 04966 / +91 88830 11166',
  address: {
    street: '404/2B3, Cheran Industrial Estate, Vadavalli to Kanuvai Road, Somayampalayam',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    postalCode: '641108',
    country: 'India',
  },
  serviceArea: 'Tamil Nadu Only',
  social: {
    linkedin: 'https://linkedin.com/company/sri-mathurams-medical',
    twitter: 'https://twitter.com/srimathuramsmed',
  },
  established: 1997,
};

export const TIMELINE_EVENTS = [
  { year: '1997', title: 'Company Established', description: 'Founded in Coimbatore to manufacture high quality hospital furniture.' },
  { year: '2005', title: 'Factory Expansion', description: 'Expanded manufacturing capacity to 10,000 sq ft state-of-the-art facility.' },
  { year: '2015', title: 'Electric ICU Beds', description: 'Launched motorized electric ICU bed production lines.' },
  { year: '2024', title: 'Tamil Nadu Trust', description: 'Serving 500+ major hospitals & healthcare centers across Tamil Nadu.' },
];

export interface CategoryTheme {
  bg: string;
  text: string;
  badgeBg: string;
  badgeText: string;
  border: string;
  isLight?: boolean;
}

export const CATEGORY_COLORS: Record<string, CategoryTheme> = {
  "Ward Furniture": {
    bg: "#27AE60",
    text: "#FFFFFF",
    badgeBg: "#FFFFFF",
    badgeText: "#196F3D",
    border: "#27AE60",
  },
  "ICU & Critical Care": {
    bg: "#0284C7",
    text: "#FFFFFF",
    badgeBg: "#FFFFFF",
    badgeText: "#0369A1",
    border: "#0284C7",
  },
  "Emergency & Patient Transfer": {
    bg: "#4E342E",
    text: "#FFFFFF",
    badgeBg: "#FFFFFF",
    badgeText: "#4E342E",
    border: "#4E342E",
  },
  "Labour & Maternity": {
    bg: "#FD8CAE",
    text: "#5C152B",
    badgeBg: "#5C152B",
    badgeText: "#FFFFFF",
    border: "#FD8CAE",
    isLight: true,
  },
  "Examination & Consultation": {
    bg: "#2E2E2E",
    text: "#FFFFFF",
    badgeBg: "#FFFFFF",
    badgeText: "#2E2E2E",
    border: "#2E2E2E",
  },
  "Medical Trolleys": {
    bg: "#B8D8A3",
    text: "#1E3B12",
    badgeBg: "#1E3B12",
    badgeText: "#FFFFFF",
    border: "#B8D8A3",
    isLight: true,
  },
  "OT Equipment": {
    bg: "#104272",
    text: "#FFFFFF",
    badgeBg: "#FFFFFF",
    badgeText: "#104272",
    border: "#104272",
  },
  "Stainless Steel Furniture & Ward Accessories": {
    bg: "#C44569",
    text: "#FFFFFF",
    badgeBg: "#FFFFFF",
    badgeText: "#C44569",
    border: "#C44569",
  },
  "Accessories": {
    bg: "#008C95",
    text: "#FFFFFF",
    badgeBg: "#FFFFFF",
    badgeText: "#008C95",
    border: "#008C95",
  },
  "General Furniture": {
    bg: "#6F4E37",
    text: "#FFFFFF",
    badgeBg: "#FFFFFF",
    badgeText: "#6F4E37",
    border: "#6F4E37",
  },
  "Home Care": {
    bg: "#E87325",
    text: "#FFFFFF",
    badgeBg: "#FFFFFF",
    badgeText: "#E87325",
    border: "#E87325",
  },
  "All Products": {
    bg: "#0B3C83",
    text: "#FFFFFF",
    badgeBg: "#FFFFFF",
    badgeText: "#0B3C83",
    border: "#0B3C83",
  },
};

export function getCategoryTheme(categoryName?: string): CategoryTheme {
  if (!categoryName) return CATEGORY_COLORS["All Products"];
  return CATEGORY_COLORS[categoryName] || CATEGORY_COLORS["All Products"];
}

export const CATEGORIES: Category[] = [
  {
    "id": "ward-furniture",
    "slug": "ward-furniture",
    "name": "Ward Furniture",
    "description": "Bedside lockers, overbed tables, attender cots, and ward hospital beds.",
    "icon": "/images/Product Assets/Icons/Ward Furniture.webp",
    "banner": "/images/Product Assets/Banners/Ward Furniture.webp",
    "color": "#27AE60"
  },
  {
    "id": "icu-critical-care",
    "slug": "icu-critical-care",
    "name": "ICU & Critical Care",
    "description": "Manual and motorized ICU beds with remote control and safety side rails.",
    "icon": "/images/Product Assets/Icons/ICU & Critical Care .webp",
    "banner": "/images/Product Assets/Banners/ICU & Critical Care.webp",
    "color": "#0284C7"
  },
  {
    "id": "emergency-patient-transfer",
    "slug": "emergency-patient-transfer",
    "name": "Emergency & Patient Transfer",
    "description": "Stretcher trolleys, wheelchairs, transfer trolleys and patient shifters.",
    "icon": "/images/Product Assets/Icons/Emergency & Patient Transfer.webp",
    "banner": "/images/Product Assets/Banners/Emergency & Patient Transfer.webp",
    "color": "#4E342E"
  },
  {
    "id": "labour-maternity",
    "slug": "labour-maternity",
    "name": "Labour & Maternity",
    "description": "Baby cradles, remote & manual labor cots, and pediatric beds.",
    "icon": "/images/Product Assets/Icons/Labour & Maternity.webp",
    "banner": "/images/Product Assets/Banners/Labour & Maternity.webp",
    "color": "#FD8CAE"
  },
  {
    "id": "examination-consultation",
    "slug": "examination-consultation",
    "name": "Examination & Consultation",
    "description": "Revolving stools, examination couches, gynec tables, and X-ray lobbies.",
    "icon": "/images/Product Assets/Icons/Examination & Consultation.webp",
    "banner": "/images/Product Assets/Banners/Examination & Consultation.webp",
    "color": "#2E2E2E"
  },
  {
    "id": "medical-trolleys",
    "slug": "medical-trolleys",
    "name": "Medical Trolleys",
    "description": "Instrument trolleys, Mayo trolleys, ECG carts, crash carts, and linen trolleys.",
    "icon": "/images/Product Assets/Icons/Medical Trolleys.webp",
    "banner": "/images/Product Assets/Banners/Medical Trolleys.webp",
    "color": "#B8D8A3"
  },
  {
    "id": "ot-equipment",
    "slug": "ot-equipment",
    "name": "OT Equipment",
    "description": "Operation theater tables, lights, anesthesia machines, foggers, and autoclaves.",
    "icon": "/images/Product Assets/Icons/OT Equipment.webp",
    "banner": "/images/Product Assets/Banners/OT Equipment.webp",
    "color": "#104272"
  },
  {
    "id": "ss-furniture-ward-accessories",
    "slug": "ss-furniture-ward-accessories",
    "name": "Stainless Steel Furniture & Ward Accessories",
    "description": "IV stands, foot steps, kick buckets, wash basins, and 3-fold screens.",
    "icon": "/images/Product Assets/Icons/Stainless Steel Furniture & Ward Accessories.webp",
    "banner": "/images/Product Assets/Banners/Stainless Steel Furniture & Ward Accessories.webp",
    "color": "#C44569"
  },
  {
    "id": "accessories",
    "slug": "accessories",
    "name": "Accessories",
    "description": "Hospital mattresses, pillows, side rails, castors, actuators, and control boxes.",
    "icon": "/images/Product Assets/Icons/Accessories.webp",
    "banner": "/images/Product Assets/Banners/Accessories.webp",
    "color": "#008C95"
  },
  {
    "id": "general-furniture",
    "slug": "general-furniture",
    "name": "General Furniture",
    "description": "Waiting area seater chairs, two-tier cots, and closed pharmacy trolleys.",
    "icon": "/images/Product Assets/Icons/General Furniture.webp",
    "banner": "/images/Product Assets/Banners/General Furniture.webp",
    "color": "#6F4E37"
  }
];

export const PRODUCTS: MedicalProduct[] = [
  {
    "id": "mf01-plain-bedside-locker",
    "slug": "mf01-plain-bedside-locker",
    "modelNumber": "MF01",
    "customizationNote": "Size can be customised as per requirement.",
    "name": "Plain Bedside Locker",
    "category": "Ward Furniture",
    "description": "The Mathurams Plain Bedside Locker is a compact bedside storage unit designed to provide convenient access to essential patient belongings and bedside items. Its simple and functional design makes it suitable for hospital wards and patient rooms. The locker features one cupboard and one open shelf, with options for different top materials and mobility arrangements to suit hospital requirements.",
    "image": "/images/Product Assets/productsImage/MF01 – Plain Bedside Locker.webp",
    "features": [
      "One cupboard for enclosed storage",
      "One open shelf for easy access",
      "Choice of MS, SS or wood top",
      "Bush or wheel mobility options",
      "Durable and easy-to-maintain construction"
    ],
    "specifications": {
      "Overall Dimension": "16\" L × 16\" W × 30\" H",
      "Storage": "1 Cupboard + 1 Open Shelf"
    },
    "price": "Ask for Price",
    "materialDetails": "Hospital bedside locker featuring a single locker cabin for patient storage. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Material": "MS / SS",
      "Top": "MS / SS / Wood Top",
      "Mobility": "Bush / Wheels",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige",
      "Customization": "Size can be customised as per requirement."
    },
    "needsDetails": false
  },
  {
    "id": "mf02-deluxe-bedside-locker",
    "slug": "mf02-deluxe-bedside-locker",
    "modelNumber": "MF02",
    "name": "Deluxe Bedside Locker",
    "category": "Ward Furniture",
    "description": "The Mathurams Deluxe Bedside Locker is designed to provide organised bedside storage with a combination of enclosed cupboard space, an open shelf and an additional drawer for convenient access to frequently used items. Its practical design can be configured with different top materials and mobility options to suit the requirements of different hospital environments.",
    "image": "/images/Product Assets/productsImage/MF02 – Deluxe Bedside Locker.webp",
    "features": [
      "One cupboard for enclosed storage",
      "One open shelf for easy-access storage",
      "One additional drawer",
      "Multiple top material options",
      "Bush or wheel mobility options",
      "Durable and easy-to-clean construction"
    ],
    "specifications": {
      "Overall Dimension": "16\" L × 16\" W × 32\" H",
      "Storage": "1 Cupboard + 1 Open Shelf + 1 Drawer"
    },
    "price": "Ask for Price",
    "materialDetails": "Deluxe bedside locker with top smooth slide drawer and bottom cabinet. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Material": "MS / SS",
      "Top": "MS / SS / Wood / Granite Top",
      "Mobility": "Bush / Wheels",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige",
      "Customization": "Size can be customised as per requirement."
    },
    "needsDetails": false
  },
  {
    "id": "mf03-granite-top-bedside-locker",
    "slug": "mf03-granite-top-bedside-locker",
    "modelNumber": "MF03",
    "name": "Granite Top Bedside Locker",
    "category": "Ward Furniture",
    "description": "The Mathurams Granite Top Bedside Locker is designed to provide organised and accessible bedside storage in hospital patient rooms. Its practical layout combines enclosed storage, drawer space and open storage for convenient access to frequently used patient items. The granite top provides a durable and easy-to-maintain surface, while the open storage arrangement provides additional accessible space.",
    "image": "/images/Product Assets/productsImage/MF03 – Granite Top Bedside Locker.webp",
    "features": [
      "Granite top for a durable bedside surface",
      "One cupboard for enclosed storage",
      "One drawer for convenient storage",
      "Open shelf with additional side storage",
      "Compact design for hospital patient rooms",
      "Easy-to-clean construction"
    ],
    "specifications": {
      "Overall Dimension": "18.5\" L × 18.5\" W × 32\" H",
      "Storage": "1 Cupboard + 1 Drawer + 1 Open Shelf Storage in Top & Side case sheet and bottle holders",
      "Top": "Granite"
    },
    "price": "Ask for Price",
    "materialDetails": "Premium bedside locker featuring a polished granite top, file rack, drawer, and bottom cabinet. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Material": "MS/SS",
      "Mobility": "Bush / Wheels",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige",
      "Customization": "Size can be customised as per requirement."
    },
    "needsDetails": false
  },
  {
    "id": "mf07-over-bed-table",
    "slug": "mf07-over-bed-table",
    "modelNumber": "MF07",
    "name": "Over Bed Table - Manual",
    "category": "Ward Furniture",
    "description": "The Mathurams Manual Over Bed Table is designed to provide a convenient and stable surface for patients during bedside activities such as meals, reading and personal use. Its height-adjustable design allows the table to be positioned comfortably over the bed, while the manual rotating knob enables smooth height adjustment.",
    "image": "/images/Product Assets/productsImage/MF07 – Over Bed Table.webp",
    "features": [
      "Height-adjustable bedside table",
      "Manual rotating knob operation",
      "Choice of durable table-top materials",
      "Compact and practical design",
      "Suitable for regular hospital use"
    ],
    "specifications": {
      "Tray Size": "14\" × 30\"",
      "Height Adjustment": "34\"–44\"",
      "Operation": "Manual Rotating Knob",
      "Finish": "MS Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "Manually height-adjustable overbed table for patient dining and reading. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Top": "Wood / Fibre / SS",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "needsDetails": false
  },
  {
    "id": "mf08-over-bed-table",
    "slug": "mf08-over-bed-table",
    "modelNumber": "MF08",
    "name": "Over Bed Table - Gear Type",
    "category": "Ward Furniture",
    "description": "The Mathurams Gear Type Over Bed Table is designed to provide a convenient and stable surface for patients during bedside activities such as meals, reading and personal use. The gear-operated height adjustment allows the table to be positioned smoothly and precisely with controlled movement, making it easier to set the table to a comfortable working height. The gear mechanism provides better control during height adjustment and helps maintain the selected position, making it suitable for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF08 – Over Bed Table.webp",
    "features": [
      "Gear-operated height adjustment",
      "Smooth and controlled height positioning",
      "Stable table-top support",
      "Choice of wood, fibre or SS top",
      "Practical design for bedside use",
      "Easy-to-maintain construction"
    ],
    "specifications": {
      "Tray Size": "14\" × 30\"",
      "Height Adjustment": "34\"–44\"",
      "Operation": "Gear Type",
      "Finish": "MS Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "Overbed table featuring a smooth mechanical gear type height adjustment mechanism. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Top": "Wood / Fibre / SS",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige",
      "Customization": "Size can be customised as per requirement."
    },
    "needsDetails": false
  },
  {
    "id": "mf09-over-bed-table",
    "slug": "mf09-over-bed-table",
    "modelNumber": "MF09",
    "name": "Over Bed Table - Gas Spring",
    "category": "Ward Furniture",
    "description": "The Mathurams Gas Spring Over Bed Table is designed to provide a convenient adjustable surface for patients to use while resting in hospital beds. The gas spring mechanism enables smooth and effortless height adjustment, allowing the tabletop to be positioned comfortably according to patient requirements. Its over-bed design allows the table to be conveniently positioned for meals, reading and other bedside activities.",
    "image": "/images/Product Assets/productsImage/MF09 – Over Bed Table.webp",
    "features": [
      "Smooth gas spring height adjustment",
      "Easy and effortless operation",
      "Convenient over-bed positioning",
      "Suitable for meals, reading and bedside activities",
      "Multiple tabletop options",
      "Durable and easy-to-maintain construction"
    ],
    "specifications": {
      "Tray Size": "30\" × 14\"",
      "Height Adjustment": "34\"–44\"",
      "Operation": "Gas Spring"
    },
    "price": "Ask for Price",
    "materialDetails": "Effortless one-touch height-adjustable overbed table powered by a gas spring mechanism. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Table Top": "Wood / Fibre / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige",
      "Customization": "Size can be customised as per requirement."
    }
  },
  {
    "id": "mf19-attender-cot",
    "slug": "mf19-attender-cot",
    "modelNumber": "MF19",
    "name": "Plain Attender Cot",
    "category": "Ward Furniture",
    "description": "The Mathurams Plain Attender Cot provides a comfortable resting space for patient attendants in hospital rooms and wards. Its compact design makes efficient use of available space while providing a convenient sleeping surface alongside the patient's cot.",
    "image": "/images/Product Assets/productsImage/MF19 – Attender Cot.webp",
    "features": [
      "Compact design for attendant accommodation",
      "Durable construction for regular hospital use",
      "Comfortable resting surface",
      "Easy-to-maintain construction"
    ],
    "specifications": {
      "Overall Dimension": "72\" L × 24\" W × 18\" H (with Mattress)",
      "Mattress": "3\" Mattress Provided"
    },
    "price": "Ask for Price",
    "materialDetails": "Durable plain attendant cot for hospital wards and recovery rooms. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Material": "MS/SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    }
  },
  {
    "id": "mf20-attender-cot",
    "slug": "mf20-attender-cot",
    "modelNumber": "MF20",
    "name": "Deluxe Attender Cot",
    "category": "Ward Furniture",
    "description": "The Mathurams Deluxe Attender Cot provides a comfortable resting space for patient attendants, with an additional lower shelf included in the Deluxe version for convenient storage.",
    "image": "/images/Product Assets/productsImage/MF20 – Deluxe Attender Cot.webp",
    "features": [
      "Comfortable attendant resting space",
      "Additional lower storage shelf",
      "Durable hospital-grade construction",
      "Compact design for efficient space utilisation",
      "Easy-to-maintain construction"
    ],
    "specifications": {
      "Overall Dimension": "72\" L × 24\" W × 18\" H (with Mattress)",
      "Mattress": "3\" Mattress Provided"
    },
    "price": "Ask for Price",
    "materialDetails": "Deluxe attendant cot featuring head/foot bows for a cleaner aesthetic. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Material": "MS/SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    }
  },
  {
    "id": "mf22-attender-cot",
    "slug": "mf22-attender-cot",
    "modelNumber": "MF22",
    "name": "Double Shelf Attender Cot with Shelf",
    "category": "Ward Furniture",
    "description": "The Mathurams Double Shelf Attender Cot provides a comfortable resting space for patient attendants with two lower storage shelves for convenient placement of personal belongings and essentials.",
    "image": "/images/Product Assets/productsImage/MF22 –  Attender Cot With Shelf.webp",
    "features": [
      "Comfortable attendant resting space",
      "Two lower storage shelves",
      "Compact design for efficient space utilisation",
      "Durable and easy-to-maintain construction"
    ],
    "specifications": {
      "Overall Dimension": "72\" L × 24\" W × 18\" H (with Mattress)",
      "Mattress": "3\" Mattress Provided",
      "Models": "MF21 - Single Shelf / MF22 - Double Shelf"
    },
    "price": "Ask for Price",
    "materialDetails": "Attendant cot bed featuring a double shelf layout for maximum storage convenience. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Shelf Type": "Single/Double",
      "Material": "MS/SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    }
  },
  {
    "id": "mf35-semi-fowler-cot",
    "slug": "mf35-semi-fowler-cot",
    "modelNumber": "MF35",
    "name": "Semi Fowler Cot (SS Arms, SS Plain Rails)",
    "category": "Ward Furniture",
    "description": "The Mathurams Semi Fowler Cot is designed for general ward and patient care environments, providing adjustable backrest positioning for improved patient comfort and convenient bedside care. Its flexible configuration allows hospitals to select suitable arm, side railing and mobility options.",
    "image": "/images/Product Assets/productsImage/MF35 – Semi Fowler Cot.webp",
    "features": [
      "Adjustable backrest positioning",
      "Manual/Remote operation",
      "Multiple arm and side railing options",
      "Flexible mobility configurations",
      "IV provision included",
      "Durable and easy-to-clean construction"
    ],
    "specifications": {
      "Dimension": "75\" L × 36\" W × 24\" H with mattress",
      "IV Provision": "Provided",
      "Mattress": "4\" Mattress Provided",
      "Models": "MF32 - SS Arms, SS Collapsible Rails / MF33 - ABS Arms, SS Plain Rails / MF34 - ABS Arms, SS Collapsible Rails / MF35 - SS Arms, SS Plain Rails"
    },
    "price": "Ask for Price",
    "materialDetails": "Semi fowler hospital bed with stainless steel head/foot bows and plain SS safety rails. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Operation": "Manual/ Remote",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Arm Boards": "MS / SS / ABS",
      "Side Railings": "MS Plain / SS Plain / ABS / Aluminium Collapsible / SS Collapsible",
      "Mobility": "Fixed Legs / Castors",
      "Optional Accessories": "Pillow & Safety Bumpers",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige",
      "Customization": "Size can be customised as per requirement."
    },
    "needsDetails": false,
    "functions": [
      "① Backrest Rise — Adjustable"
    ]
  },
  {
    "id": "mf39-fowler-cot",
    "slug": "mf39-fowler-cot",
    "modelNumber": "MF39",
    "name": "Fowler Cot (ABS Arms, SS Collapsible Rails)",
    "category": "Ward Furniture",
    "description": "The Mathurams Fowler Cot is designed to provide enhanced patient positioning for general wards and recovery areas. Its adjustable back and knee sections allow patients to be positioned comfortably for rest, recovery, reading and routine bedside care.",
    "image": "/images/Product Assets/productsImage/MF39 – Fowler Cot.webp",
    "features": [
      "Adjustable backrest and knee section",
      "Manual crank or remote operation for controlled positioning",
      "Durable hospital-grade construction",
      "Multiple arm and side railing options",
      "IV provision included",
      "Mattress included",
      "Easy-to-clean surfaces"
    ],
    "specifications": {
      "Dimension": "78\" L × 36\" W × 24\" H with mattress",
      "IV Provision": "Provided",
      "Mattress": "4\" Mattress Provided",
      "Models": "MF39 - ABS Arms, SS Collapsible Rails / MF40 - SS Arms, SS Collapsible Rails / MF41 - SS Arms, SS Plain Rails / MF42 - ABS Arms, SS Plain Rails"
    },
    "price": "Ask for Price",
    "materialDetails": "Fowler patient bed with backrest and knee rest adjustments, ABS bows, and collapsible SS side rails. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Operation": "Manual Crank / Remote",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Arm Boards": "MS / SS / ABS",
      "Side Railings": "MS Plain / SS Plain / ABS / Aluminium Collapsible / SS Collapsible",
      "Mobility": "Fixed Legs / Castors",
      "Optional Accessories": "Pillow / Safety Bumpers",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige",
      "Customization": "Size can be customised as per requirement."
    },
    "needsDetails": false,
    "functions": [
      "① Backrest Rise",
      "② Knee / Leg Rise"
    ]
  },
  {
    "id": "mf61-plain-cot",
    "slug": "mf61-plain-cot",
    "modelNumber": "MF61",
    "name": "Plain Cot - MS Plain Type Leg",
    "category": "Ward Furniture",
    "description": "The Mathurams Plain Cot with MS GH Type Legs is a simple and durable hospital cot designed for general wards and routine patient accommodation. Its sturdy MS construction provides reliable support for everyday hospital use, while the straightforward design allows for easy cleaning and maintenance. The GH type leg construction provides a stable base, making this model a practical choice for general patient care areas.",
    "image": "/images/Product Assets/productsImage/MF61 – Plain Cot.webp",
    "features": [
      "MS GH type leg construction",
      "Stable and durable design",
      "Suitable for general wards and patient rooms",
      "Simple and easy-to-maintain construction",
      "IV provision included",
      "Mattress included"
    ],
    "specifications": {
      "Dimension": "72\" L × 36\" W × 24\" H with mattress",
      "Material": "MS",
      "Leg Type": "Plain",
      "Finish": "Epoxy Powder Coating",
      "IV Provision": "Provided",
      "Mattress": "4\" Mattress Provided"
    },
    "price": "Ask for Price",
    "materialDetails": "General hospital plain ward bed featuring sturdy MS GH type legs. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Head & Foot Board": "MS / SS",
      "Side Railings": "MS Plain / SS Plain",
      "Mobility": "Fixed Legs / Wheels",
      "Optional Accessories": "Pillow",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "needsDetails": false
  },
  {
    "id": "mf62-plain-cot",
    "slug": "mf62-plain-cot",
    "modelNumber": "MF62",
    "name": "SS Arms Plain Cot Delux",
    "category": "Ward Furniture",
    "description": "The Mathurams Plain Cot Delux is designed for general wards and patient rooms, combining a simple hospital cot design with SS or ABS arm options for enhanced appearance, durability and convenient everyday use. The SS arm variant offers corrosion resistance, easy cleaning and long-term durability, while the ABS arm option provides a smooth, easy-to-maintain surface suitable for modern hospital environments.",
    "image": "/images/Product Assets/productsImage/MF62 – Plain Cot.webp",
    "features": [
      "Delux plain cot design",
      "SS and ABS arm options",
      "Durable construction for regular hospital use",
      "Easy-to-clean surfaces",
      "IV provision included",
      "Mattress included"
    ],
    "specifications": {
      "Dimension": "72\" L × 36\" W × 24\" H with mattress",
      "IV Provision": "Provided",
      "Mattress": "4\" Mattress Provided",
      "Models": "MF62 - SS Arms / MF63 - ABS Arms"
    },
    "price": "Ask for Price",
    "materialDetails": "Deluxe plain ward bed featuring premium stainless steel head and foot bows. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Side Railings": "MS Plain / SS Plain / Aluminium Collapsible / SS Collapsible",
      "Mobility": "Fixed Legs / Wheels",
      "Optional Accessories": "Pillow & Safety Bumpers",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "needsDetails": false
  },
  {
    "id": "mf79-attender-cum-chair",
    "slug": "mf79-attender-cum-chair",
    "modelNumber": "MF79",
    "name": "Attender Cot Cum Chair – MS",
    "category": "Ward Furniture",
    "description": "The Mathurams MS Attender Cum Chair is a dual-purpose hospital furniture solution designed to function as a comfortable seating chair during the day and convert into a resting cot when required. It provides a practical solution for patient attendants, particularly in hospital rooms where efficient use of space is important. Its MS construction provides durability for regular hospital use, while the convertible design eliminates the need for separate seating and sleeping furniture.",
    "image": "/images/Product Assets/productsImage/MF79 – Attender Cum Chair.webp",
    "features": [
      "Dual-purpose chair and attendant cot",
      "Converts from seating to a resting position",
      "Space-saving design for hospital rooms",
      "Designed for patient attendant use",
      "Durable MS construction",
      "Easy-to-maintain surfaces"
    ],
    "specifications": {
      "Type": "Attender Cot Cum Chair",
      "Material": "MS",
      "Operation": "Manual Convertible",
      "Finish": "Epoxy Powder Coating",
      "Cushion / Mattress": "2\" Cushion / Mattress Provided"
    },
    "price": "Ask for Price",
    "materialDetails": "Highly functional attendant chair that unfolds into a flat sleeping cot. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {}
  },
  {
    "id": "mf04-iv-stand",
    "slug": "mf04-iv-stand",
    "modelNumber": "MF04",
    "name": "SS IV Stand",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams Full SS IV Stand is designed to provide convenient and stable support for intravenous fluid administration in hospital wards, treatment areas and patient care environments. Its stainless-steel construction offers durability and easy maintenance for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF04 –  Full SS IV Stand.webp",
    "features": [
      "Full stainless-steel construction",
      "Height suitable for routine IV fluid administration",
      "Stable and durable design",
      "Smooth, easy-to-clean surface",
      "Designed for convenient positioning beside the patient"
    ],
    "specifications": {
      "Material": "SS",
      "Overall Height": "90\"",
      "Finish": "SS Finish",
      "IV Hooks": "As per standard configuration",
      "Models": "MF04 - SS / MF06 - MS"
    },
    "price": "Ask for Price",
    "materialDetails": "Full stainless steel telescopic medical IV stand with 5-star castor base. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {}
  },
  {
    "id": "mf06-iv-stand",
    "slug": "mf06-iv-stand",
    "modelNumber": "MF06",
    "name": "MS IV Stand",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams MS IV Stand is designed to provide stable and convenient support for intravenous fluid administration in hospital wards, treatment areas and patient care environments. Its mild steel construction offers a durable and practical solution for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF06 –  MS IV Stand.webp",
    "features": [
      "Durable MS construction",
      "Stable base for secure positioning",
      "Suitable for routine IV fluid administration",
      "Easy-to-maintain design",
      "Convenient to position beside the patient"
    ],
    "specifications": {
      "Material": "MS",
      "Overall Height": "90\"",
      "Finish": "Epoxy Powder Coating",
      "IV Hooks": "As per standard configuration",
      "Models": "MF04 - SS / MF06 - MS"
    },
    "price": "Ask for Price",
    "materialDetails": "Mild steel medical IV stand with epoxy powder coated base and height adjustable rod. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {}
  },
  {
    "id": "mf05-iv-stand",
    "slug": "mf05-iv-stand",
    "modelNumber": "MF05",
    "name": "Fibre Base IV Stand",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams Fibre Base IV Stand is designed to provide stable and convenient support for intravenous fluid administration in hospital wards, treatment areas and patient care environments. Its fibre base provides a sturdy and practical foundation, while the stand is designed for easy positioning alongside the patient.",
    "image": "/images/Product Assets/productsImage/MF05 –  Fibre Base IV Stand.webp",
    "features": [
      "Durable fibre base construction",
      "Height suitable for routine IV fluid administration",
      "Stable and practical design",
      "Easy-to-clean surfaces",
      "Suitable for regular hospital use"
    ],
    "specifications": {
      "Overall Height": "90\"",
      "Base": "Fibre",
      "Finish": "As applicable",
      "IV Hooks": "As per standard configuration"
    },
    "price": "Ask for Price",
    "materialDetails": "Height adjustable medical IV stand featuring a durable, heavy-duty molded plastic base. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Customization": "Size can be customised as per requirement."
    }
  },
  {
    "id": "mf54-single-foot-step",
    "slug": "mf54-single-foot-step",
    "modelNumber": "MF54",
    "name": "SS Single Foot Step - SS",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams Single Foot Step provides a stable raised platform to assist patients and healthcare professionals where additional stepping height is required. Available in MS and SS variants, its compact construction makes it suitable for use alongside examination couches, beds and other hospital furniture. The SS variant offers enhanced corrosion resistance and easy maintenance, making it well suited for areas requiring frequent cleaning.",
    "image": "/images/Product Assets/productsImage/MF54 – Single Foot Step - SS.webp",
    "features": [
      "Single-step design",
      "Available in MS and SS variants",
      "Stable platform for convenient access",
      "Compact and easy to position",
      "Durable construction for regular hospital use",
      "SS variant offers corrosion resistance and easy cleaning"
    ],
    "specifications": {
      "Overall Dimension": "20\" L × 12\" W × 9\" H",
      "Models": "MF53 - MS / MF54 - SS"
    },
    "price": "Ask for Price",
    "materialDetails": "Stainless steel single step stool featuring a non-slip rubber platform top. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
    }
  },
  {
    "id": "mf56-double-foot-step",
    "slug": "mf56-double-foot-step",
    "modelNumber": "MF56",
    "name": "SS Double Foot Step - SS",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams Double Foot Step provides a stable two-level platform to assist patients and healthcare professionals where additional stepping support is required. Its two-step design provides gradual and convenient access to elevated hospital beds, examination couches and other medical furniture. Available in MS and SS variants, the SS version offers enhanced corrosion resistance, easy cleaning and durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF56 –  Double Foot Step - SS.webp",
    "features": [
      "Two-step design for gradual access",
      "Available in MS and SS variants",
      "Stable and durable construction",
      "Suitable alongside beds and examination couches",
      "Compact and easy to position",
      "SS variant offers corrosion resistance and easy maintenance"
    ],
    "specifications": {
      "Overall Dimension": "16\" L × 18\" W × 9\" H First step / 16\" L × 18\" W × 18\" H Second step",
      "Models": "MF55 - MS / MF56 - SS"
    },
    "price": "Ask for Price",
    "materialDetails": "Polished stainless steel two-tier patient step stool with rubber steps. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
    }
  },
  {
    "id": "mf97-kick-bucket",
    "slug": "mf97-kick-bucket",
    "modelNumber": "MF97",
    "name": "SS Kick Bucket",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams SS Kick Bucket is designed for convenient collection of used materials during surgical and clinical procedures. Its compact design allows easy positioning near the procedure area, while the stainless-steel construction provides corrosion resistance, easy cleaning and durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF97 – SS Kick Bucket.webp",
    "features": [
      "Full stainless-steel construction",
      "Designed for collection of used materials during procedures",
      "Compact and convenient design",
      "Corrosion-resistant",
      "Smooth and easy-to-clean surface",
      "Durable for regular hospital use"
    ],
    "specifications": {
      "Bucket Diameter": "14\"",
      "Overall Height": "12\"",
      "Material": "SS",
      "Finish": "SS Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "Stainless steel mobile waste kick bucket with rubber bumper ring protection. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {}
  },
  {
    "id": "mf98-wash-basin-stand",
    "slug": "mf98-wash-basin-stand",
    "modelNumber": "MF98",
    "name": "SS Wash Basin Stand",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams SS Wash Basin Stand is designed to provide convenient access to a wash basin in hospital wards, examination areas and procedure rooms. Its compact freestanding design allows convenient placement wherever required. The stainless-steel construction provides corrosion resistance, easy cleaning and long-term durability, making it suitable for regular use in healthcare environments.",
    "image": "/images/Product Assets/productsImage/MF98 – SS Wash Basin Stand.webp",
    "features": [
      "Full stainless-steel construction",
      "SS wash basin included",
      "Compact freestanding design",
      "Corrosion-resistant",
      "Smooth and easy-to-clean surfaces",
      "Durable for regular hospital use"
    ],
    "specifications": {
      "Basin Diameter": "14\"",
      "Overall Height": "32\"",
      "Material": "SS",
      "Finish": "SS Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "Stainless steel mobile wash basin stand complete with single stainless steel basin. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {}
  },
  {
    "id": "mf99-3-fold-screen",
    "slug": "mf99-3-fold-screen",
    "modelNumber": "MF99",
    "name": "MS 3 Fold Screen",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams 3 Fold Screen is designed to provide temporary privacy and separation between patient areas in hospitals, clinics and examination rooms. Its foldable three-panel design allows the screen to be extended when required and folded into a compact size for convenient positioning and storage.",
    "image": "/images/Product Assets/productsImage/MF99 – 3 Fold Screen (MS).webp",
    "features": [
      "Three-fold privacy screen",
      "Provides privacy and separation between patient areas",
      "Foldable and space-efficient design",
      "Easy to position as required",
      "Suitable for wards, examination and treatment areas",
      "Durable and easy-to-maintain construction"
    ],
    "specifications": {
      "Width": "50\" Closed & 98\" Open",
      "Overall Height": "70\"",
      "Number of Folds": "3",
      "Models": "MF99 - MS / MF100 - SS"
    },
    "price": "Ask for Price",
    "materialDetails": "Mild steel folding patient privacy screen divider with curtains. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
    }
  },
  {
    "id": "mf108-ss-rack",
    "slug": "mf108-ss-rack",
    "modelNumber": "MF108",
    "name": "SS Rack 4 Shelf",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams SS Rack – 4 Shelf is designed for organised storage of medical supplies, linen, equipment and other hospital essentials. Its four-tier arrangement provides ample storage while allowing convenient access to frequently required items. The stainless-steel construction provides excellent corrosion resistance, easy cleaning and long-term durability, making the rack suitable for regular use across hospital departments.",
    "image": "/images/Product Assets/productsImage/MF108 – SS Rack 4 Shelf.webp",
    "features": [
      "Four spacious storage shelves",
      "Full stainless-steel construction",
      "Suitable for medical supplies, linen and equipment",
      "Open design for convenient access",
      "Corrosion-resistant and easy to clean",
      "Durable construction for regular hospital use"
    ],
    "specifications": {
      "Tray Size": "24\" L × 36\" W",
      "Rack Height (Between shelves)": "15\"",
      "Total Height": "72\"",
      "Number of Shelves": "4",
      "Material": "SS",
      "Finish": "SS Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "Stainless steel multi-purpose four-tier storage rack for wards and clinics. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {}
  },
  {
    "id": "mf109-scrub",
    "slug": "mf109-scrub",
    "modelNumber": "MF109",
    "name": "OT Scrub",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams Scrub is designed for hand and instrument washing in operation theatre and surgical preparation areas. Its stainless-steel construction provides a hygienic, corrosion-resistant and easy-to-clean surface, making it suitable for environments requiring frequent cleaning and maintenance. The unit can be configured with different tap arrangements and operating mechanisms according to hospital requirements.",
    "image": "/images/Product Assets/productsImage/MF109 – OT Scrub.webp",
    "features": [
      "Designed for surgical hand washing",
      "Full stainless-steel construction",
      "Hygienic and corrosion-resistant",
      "Smooth and easy-to-clean surfaces",
      "Multiple tap configurations available",
      "Instrument wash and solution tray options"
    ],
    "specifications": {
      "Material": "SS 304",
      "Finish": "SS Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "Stainless steel surgical scrub sink featuring sensor-operated taps. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Number of Taps": "2 Tap / 3 Tap / 4 Tap",
      "Tap Operation": "Knee Operated / Elbow Operated / Sensor Tap"
    },
    "needsDetails": false
  },
  {
    "id": "mf128-cylinder-storage",
    "slug": "mf128-cylinder-storage",
    "modelNumber": "MF128",
    "customizationNote": "Customisable according to cylinder requirements.",
    "name": "Cylinder Storage",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams Cylinder Storage is designed to provide a dedicated and organised space for storing medical gas cylinders within hospitals and healthcare facilities. Its heavy-duty open frame construction allows cylinders to be positioned and accessed conveniently while maintaining an orderly and safe gas manifold area.",
    "image": "/images/Product Assets/productsImage/MF128 – Cylinder Storage.webp",
    "features": [
      "Designed for secure and organized medical gas cylinder storage",
      "Suitable for A, B and D type medical gas cylinders",
      "Single and multi-cylinder holding provisions with safety chains",
      "Open frame tubular design for easy visual inspection and ventilation",
      "Stable floor-anchored steel base for maximum safety"
    ],
    "specifications": {},
    "price": "Ask for Price",
    "materialDetails": "Mild steel wall-mounted / floor standing storage rack for medical oxygen gas cylinders. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Cylinder Type": "A Type / B Type / D Type",
      "Number of Cylinder Provisions": "1 / 2 / 3 / Multiple – As Required",
      "Customization": "Customisable according to cylinder requirements."
    }
  },
  {
    "id": "mf10-instrument-trolley",
    "slug": "mf10-instrument-trolley",
    "modelNumber": "MF10",
    "name": "Instrument Trolley 24” × 18”",
    "category": "Medical Trolleys",
    "description": "The Mathurams SS Instrument Trolley is designed for convenient placement and organised handling of surgical and medical instruments during procedures. Its stainless-steel construction provides a durable, smooth and easy-to-clean surface suitable for healthcare environments.",
    "image": "/images/Product Assets/productsImage/MF10 –  Instrument Trolley 24” × 18”.webp",
    "features": [
      "Full stainless-steel construction",
      "Smooth, easy-to-clean surface",
      "Compact design for convenient instrument placement",
      "Suitable for operating rooms, procedure rooms and clinical areas"
    ],
    "specifications": {
      "Overall Size": "24\" L × 18\" W",
      "Number of Shelves": "2",
      "Railings": "Non-Fall Three-Sided Railings",
      "Finish": "SS Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "Stainless steel surgical instrument trolley with two shelves (24 x 18 inches). Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Material": "SS 202 / SS 304"
    }
  },
  {
    "id": "mf11-instrument-trolley",
    "slug": "mf11-instrument-trolley",
    "modelNumber": "MF11",
    "name": "Instrument Trolley 3’ × 2’",
    "category": "Medical Trolleys",
    "description": "The Mathurams SS Instrument Trolley (3' × 2') provides a spacious stainless-steel working surface for organized surgical and clinical instrument handling during hospital procedures.",
    "image": "/images/Product Assets/productsImage/MF11 –  Instrument Trolley 3’ × 2’.webp",
    "features": [
      "Full stainless-steel construction",
      "Smooth, easy-to-clean surface",
      "Compact design for convenient instrument placement",
      "Suitable for operating rooms, procedure rooms and clinical areas"
    ],
    "specifications": {
      "Overall Size": "3' L × 2' W",
      "Number of Shelves": "2",
      "Railings": "Non Fall Three Sided Railings",
      "Finish": "SS Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "Medium-sized stainless steel medical instrument trolley (36 x 24 inches). Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Material": "SS 202 / SS 304"
    }
  },
  {
    "id": "mf12-instrument-trolley",
    "slug": "mf12-instrument-trolley",
    "modelNumber": "MF12",
    "name": "Instrument Trolley 4’ × 2’",
    "category": "Medical Trolleys",
    "description": "The Mathurams SS Instrument Trolley is designed for convenient placement and organised handling of surgical and medical instruments during procedures. Its stainless-steel construction provides a durable, smooth and easy-to-clean surface suitable for healthcare environments.",
    "image": "/images/Product Assets/productsImage/MF12 –  Instrument Trolley 4’ × 2’.webp",
    "features": [
      "Full stainless-steel construction",
      "Smooth, easy-to-clean surface",
      "Spacious working area for instrument placement",
      "Suitable for operating rooms, procedure rooms and clinical areas"
    ],
    "specifications": {
      "Overall Size": "4' L × 2' W",
      "Number of Shelves": "2",
      "Railings": "Non-Fall Three-Sided Railings",
      "Finish": "SS Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "Large surgical instrument trolley (48 x 24 inches) featuring two spacious shelves. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Material": "SS 202 / SS 304"
    }
  },
  {
    "id": "mf46-ss-mayos-trolley",
    "slug": "mf46-ss-mayos-trolley",
    "modelNumber": "MF46",
    "name": "SS Mayo’s Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams SS Mayo’s Trolley is a height-adjustable instrument trolley designed to position surgical instruments conveniently over the operating table during procedures. Its smooth stainless-steel tray provides an easy-to-clean working surface, while the adjustable height allows convenient positioning according to procedural requirements.",
    "image": "/images/Product Assets/productsImage/MF46 – SS Mayo's Trolley.webp",
    "features": [
      "Height-adjustable instrument trolley",
      "Designed for positioning instruments over the operating table",
      "Smooth stainless-steel tray",
      "Corrosion-resistant construction",
      "Easy-to-clean and maintain",
      "Compact design for convenient positioning"
    ],
    "specifications": {
      "Tray Size": "24\" × 16\"",
      "Overall Height": "30\" - 50\"",
      "Tray": "Stainless Steel",
      "Finish": "SS Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "Stainless steel Mayo instrument stand featuring a removable tray and height adjustment. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Material": "SS 202 / SS 304",
      "Customization": "Size can be customised as per requirement."
    }
  },
  {
    "id": "mf47-drug-trolley",
    "slug": "mf47-drug-trolley",
    "modelNumber": "MF47",
    "name": "MS Drug Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams Drug Trolley is designed for organised storage and convenient distribution of medicines across hospital wards and patient care areas. Its multiple-bin arrangement helps segregate and arrange medications systematically, allowing healthcare staff to access required medicines efficiently during routine rounds. Available in MS and SS variants, the trolley can be configured with single-side or double-side storage arrangements based on capacity requirements.",
    "image": "/images/Product Assets/productsImage/MF47 –  Drug Trolley (MS).webp",
    "features": [
      "Organised multi-bin medication storage",
      "Large and small PVC bins for systematic segregation",
      "Single-side and double-side configurations",
      "Available in MS and SS construction",
      "Designed for convenient medication handling",
      "Suitable for hospital wards and patient care areas"
    ],
    "specifications": {
      "Overall Dimension": "30\" L × 26\" W × 62\" H",
      "Large PVC Bins": "8 Nos.",
      "Small PVC Bins": "30 Nos. per side",
      "Models": "MF47 - MS / MF48 - SS"
    },
    "price": "Ask for Price",
    "materialDetails": "Mild steel medicine and drug distribution trolley with multiple plastic bins/drawers. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Storage Arrangement": "Single Side / Double Side"
    },
    "needsDetails": false
  },
  {
    "id": "mf57-ss-dressing-trolley",
    "slug": "mf57-ss-dressing-trolley",
    "modelNumber": "MF57",
    "name": "SS Dressing Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams SS Dressing Trolley is designed for convenient organisation and handling of dressing materials during routine patient care. Its two-level stainless-steel construction provides dedicated working and storage surfaces, while non-fall three-sided railings help keep dressing materials securely positioned during movement. The trolley is provided with an SS basin and bucket, supporting convenient handling of materials during dressing procedures.",
    "image": "/images/Product Assets/productsImage/MF57 – SS Dressing Trolley.webp",
    "features": [
      "Designed specifically for dressing procedures",
      "Full stainless-steel construction",
      "Two-level working and storage arrangement",
      "Non-fall three-sided railings",
      "SS basin and bucket included",
      "Smooth and easy-to-clean surfaces",
      "Corrosion-resistant construction"
    ],
    "specifications": {
      "Overall Dimension": "24\" L × 18\" W × 30\" H",
      "Basin & Bucket": "Included",
      "Finish": "SS Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "Stainless steel wound dressing trolley with side bowl and bucket rings. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Material": "SS 202 / SS 304"
    }
  },
  {
    "id": "mf58-ecg-trolley",
    "slug": "mf58-ecg-trolley",
    "modelNumber": "MF58",
    "name": "MS ECG Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams ECG Trolley is designed for organised placement and convenient handling of ECG equipment, accessories and consumables during diagnostic procedures. Its three-shelf arrangement provides dedicated space for the ECG recorder and supporting items, while the integrated cable holder helps keep ECG lead cables organised and reduces tangling during use. Available in MS and SS variants, the SS version offers enhanced corrosion resistance, easy cleaning and durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF58 – ECG Trolley (MS).webp",
    "features": [
      "Dedicated trolley for ECG equipment",
      "Three-shelf storage arrangement",
      "Dedicated space for ECG recorder, accessories and consumables",
      "Integrated ECG lead cable holder",
      "Available in MS and SS variants",
      "Compact design for convenient positioning",
      "SS variant offers corrosion resistance and easy maintenance"
    ],
    "specifications": {
      "Tray Size": "18\" L × 18\" W × 32\" H",
      "Overall Height": "36\" with rails",
      "Number of Shelves": "3",
      "Cable Holder": "Provided",
      "Models": "MF58 - MS / MF 59 - MS Z Type / MF 60 - SS"
    },
    "price": "Ask for Price",
    "materialDetails": "Mild steel trolley specifically configured for ECG machines, featuring top drawer and shelf. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Type": "Normal / Z-Type",
      "Material": "MS/SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
    }
  },
  {
    "id": "mf75-cylinder-trolley",
    "slug": "mf75-cylinder-trolley",
    "modelNumber": "MF75",
    "name": "MS Cylinder Trolley B Type",
    "category": "Medical Trolleys",
    "description": "The Mathurams B Type Cylinder Trolley is designed for the convenient handling and transportation of B-type medical gas cylinders within hospitals and healthcare facilities. Its compact structure securely supports the cylinder while allowing easy movement between wards, treatment areas and other clinical locations. Available in MS and SS variants, the SS version offers enhanced corrosion resistance, easy cleaning and long-term durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF75 –  Cylinder Trolley B Type (MS).webp",
    "features": [
      "Designed for B-type medical gas cylinders",
      "Secure cylinder holding arrangement",
      "Compact and easy-to-handle design",
      "Available in MS and SS variants",
      "Durable construction for regular hospital use",
      "SS variant offers corrosion resistance and easy maintenance"
    ],
    "specifications": {
      "Cylinder Type": "B Type",
      "Models": "MF75 - MS / MF76 - SS"
    },
    "price": "Ask for Price",
    "materialDetails": "Mild steel trolley for transporting medical B-type oxygen gas cylinders. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
    }
  },
  {
    "id": "mf78-cylinder-trolley",
    "slug": "mf78-cylinder-trolley",
    "modelNumber": "MF78",
    "name": "SS D Type Cylinder Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams D Type Cylinder Trolley is designed for the secure and convenient transportation of D-type medical gas cylinders within hospitals and healthcare facilities. Its sturdy construction supports safe handling of the larger cylinder while allowing convenient movement between wards, treatment areas and other clinical locations. Available in MS and SS variants, the SS version provides enhanced corrosion resistance, easy cleaning and long-term durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF75 –  Cylinder Trolley B Type (MS).webp",
    "features": [
      "Designed for D-type medical gas cylinders",
      "Sturdy construction for secure cylinder handling",
      "Designed for convenient movement within healthcare facilities",
      "Available in MS and SS variants",
      "Durable construction for regular hospital use",
      "SS variant offers corrosion resistance and easy maintenance"
    ],
    "specifications": {
      "Cylinder Type": "D Type",
      "Models": "MF77 - MS / MF78 - SS"
    },
    "price": "Ask for Price",
    "materialDetails": "Heavy-duty stainless steel cylinder trolley designed for large D-type oxygen cylinders. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
    }
  },
  {
    "id": "mf84-crash-cart",
    "slug": "mf84-crash-cart",
    "modelNumber": "MF84",
    "name": "MS Crash Cart",
    "category": "Medical Trolleys",
    "description": "The Mathurams Crash Cart is designed to keep essential emergency medical supplies and accessories organised and readily accessible during critical situations. Its modular storage arrangement combines drawers, PVC bins and an SS tray, allowing different emergency supplies to be systematically arranged for quick access. Available in MS and SS variants, the SS version provides enhanced corrosion resistance, easy cleaning and long-term durability for demanding hospital environments.",
    "image": "/images/Product Assets/productsImage/MF84 – Crash Cart (MS).webp",
    "features": [
      "Designed for organised emergency medical storage",
      "Modular drawer system for convenient access",
      "Multiple PVC bins for segregated storage",
      "SS tray attached at the bottom",
      "Available in MS and SS variants",
      "Compact and mobile emergency storage solution",
      "SS variant offers corrosion resistance and easy maintenance"
    ],
    "specifications": {
      "Overall Dimension": "26.5\" × 26\" × 60\" H",
      "Modular Storage": "Keyed Modular System",
      "Small PVC Bins": "6–30 Nos.",
      "SS Tray": "Attached at Bottom",
      "Models": "MF84 - MS / MF85 - SS"
    },
    "price": "Ask for Price",
    "materialDetails": "Emergency resuscitation crash cart with color-coded modular drawers and frame. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Modular Drawer System": "3 Drawers × 2 / 4 Drawers × 2",
      "Small PVC Bins Option": "6 / 12 / 18 / 24 / 30 Nos.",
      "IV Provision": "Optional",
      "Cylinder Provision": "Optional"
    },
    "needsDetails": false
  },
  {
    "id": "mf86-crash-cart",
    "slug": "mf86-crash-cart",
    "modelNumber": "MF86",
    "name": "Mini Crash Cart Mini",
    "category": "Medical Trolleys",
    "description": "The Mathurams Mini Crash Cart is a compact emergency storage unit designed to keep essential medical supplies organised and readily accessible during critical situations. Its narrow, space-efficient design makes it particularly suitable for patient care areas where a full-size crash cart may occupy more space. Available in with-top and without-top variants, the Mini Crash Cart provides flexibility based on the storage and working-surface requirements of the healthcare facility.",
    "image": "/images/Product Assets/productsImage/MF86 – Crash Cart MIni.webp",
    "features": [
      "Compact and space-efficient emergency storage",
      "Organised access to essential medical supplies",
      "Modular storage arrangement",
      "Narrow footprint for convenient positioning",
      "Available with or without top",
      "Durable and easy-to-maintain construction"
    ],
    "specifications": {
      "Overall Dimension": "13.25\" × 26\" × 60\" H",
      "Modular Storage": "Provided",
      "Models": "MF86 - Mini / MF87 - Imported"
    },
    "price": "Ask for Price",
    "materialDetails": "Compact sized emergency resuscitation cart for smaller clinics and wards. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Top": "With Top / Without Top",
      "IV Provision": "Optional",
      "Cylinder Provision": "Optional"
    },
    "needsDetails": false
  },
  {
    "id": "mf88-nebuliser-trolley",
    "slug": "mf88-nebuliser-trolley",
    "modelNumber": "MF88",
    "name": "MS Nebulizer Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams Nebulizer Trolley is a compact equipment trolley designed for the convenient placement and movement of nebulizer equipment and related accessories within hospitals and patient care areas. Its organised design keeps the nebulizer unit easily accessible while providing a dedicated platform for routine respiratory care. Available in MS and SS variants, the SS version offers enhanced corrosion resistance, easy cleaning and long-term durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF88 – Nebuliser Trolley (MS).webp",
    "features": [
      "Dedicated trolley for nebulizer equipment",
      "Compact and space-efficient design",
      "Convenient equipment placement and movement",
      "Storage space for related accessories",
      "Available in MS and SS variants",
      "SS variant offers corrosion resistance and easy maintenance"
    ],
    "specifications": {
      "Overall Dimension": "16\" L × 16\" W × 32\" H",
      "Models": "MF88 - MS / MF89 - SS"
    },
    "price": "Ask for Price",
    "materialDetails": "Mild steel utility stand/trolley designed to hold a nebulizer machine and accessories. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
    }
  },
  {
    "id": "mf91-linen-trolley",
    "slug": "mf91-linen-trolley",
    "modelNumber": "MF91",
    "name": "Linen Trolley Plain",
    "category": "Medical Trolleys",
    "description": "The Mathurams Plain Linen Trolley is designed for convenient collection, storage and transportation of linen within hospitals and healthcare facilities. Its spacious design provides practical capacity for handling linen between wards, laundry areas and other hospital departments. Available in MS and SS variants, the SS version provides enhanced corrosion resistance, easy cleaning and long-term durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF91 – Linen Trolley Plain.webp",
    "features": [
      "Designed for hospital linen collection and transportation",
      "Spacious storage capacity",
      "Convenient for movement between hospital departments",
      "Available in MS and SS variants",
      "Durable and easy-to-maintain construction",
      "SS variant offers corrosion resistance and easy cleaning"
    ],
    "specifications": {
      "Overall Dimension": "24\" L × 24\" W × 34\" H"
    },
    "price": "Ask for Price",
    "materialDetails": "Mild steel laundry/dirty linen collection trolley with canvas bag. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
    }
  },
  {
    "id": "mf92-linen-trolley",
    "slug": "mf92-linen-trolley",
    "modelNumber": "MF92",
    "name": "Linen Trolley Door Type",
    "category": "Medical Trolleys",
    "description": "The Mathurams Door Type Linen Trolley is designed for the organised handling and transportation of linen within hospitals. Its dual-sided storage arrangement provides separate compartments for fresh linen and used linen, helping maintain clear segregation during collection and distribution. The enclosed door-type construction keeps linen contained during movement. Available in MS and SS variants, the SS version provides enhanced corrosion resistance, easy cleaning and long-term durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF92 – Linen Trolley Door Type.webp",
    "features": [
      "Separate storage for fresh and used linen",
      "Dual-sided compartment design",
      "Enclosed door-type construction",
      "Helps maintain organised linen segregation",
      "Designed for linen collection and distribution",
      "Available in MS and SS variants",
      "SS variant offers corrosion resistance and easy maintenance"
    ],
    "specifications": {
      "Overall Dimension": "36\" L × 24\" W × 34\" H",
      "Storage": "Separate Compartments for Fresh & Used Linen"
    },
    "price": "Ask for Price",
    "materialDetails": "Stainless steel dirty linen collection trolley with washable canvas bag. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
    }
  },
  {
    "id": "mf107-biomedical-waste-bin-trolley",
    "slug": "mf107-biomedical-waste-bin-trolley",
    "modelNumber": "MF107",
    "name": "Biomedical Waste Bin Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams Biomedical Waste Bin Trolley is designed for the organised collection and segregation of biomedical waste within hospitals and healthcare facilities. The trolley accommodates separate colour-coded bins for different waste categories, supporting systematic waste segregation at the point of collection. Its stainless-steel construction provides corrosion resistance, easy cleaning and long-term durability, making it suitable for regular use in clinical environments.",
    "image": "/images/Product Assets/productsImage/MF107 – Biomedical Waste Bin Trolley.webp",
    "features": [
      "Designed for biomedical waste segregation",
      "Four separate waste collection bins",
      "Colour-coded bin arrangement",
      "Full stainless-steel construction",
      "Corrosion-resistant and easy to clean",
      "Convenient for hospital waste collection"
    ],
    "specifications": {
      "Material": "SS",
      "Number of Bins": "4",
      "Waste Segregation": "Recyclable Waste / Wet Waste / Hazardous Waste / Dry Waste",
      "Finish": "SS Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "Stainless steel waste bin trolley designed to hold multiple color-coded biomedical waste bins. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Bin Size": "25 Litres, 40 Litres, 60 Litres",
      "Bin Colours": "Red, Yellow, Blue, Green, Black"
    }
  },
  {
    "id": "mf111-laparoscopy-trolley",
    "slug": "mf111-laparoscopy-trolley",
    "modelNumber": "MF111",
    "name": "MS Laparoscopy Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams Laparoscopy Trolley is designed for organised placement and handling of laparoscopic equipment and accessories in operation theatres and procedure areas. Its multi-shelf arrangement provides dedicated space for equipment, while seven integrated power sockets allow convenient connectivity of devices through the trolley. Available in MS and SS variants, the SS version offers enhanced corrosion resistance, easy cleaning and long-term durability for demanding clinical environments.",
    "image": "/images/Product Assets/productsImage/MF111 – Laparoscopy Trolley (MS).webp",
    "features": [
      "Designed for laparoscopic equipment",
      "Five-shelf equipment arrangement",
      "Seven integrated power sockets",
      "Dedicated accessory drawer",
      "Cylinder storage provision",
      "Organised equipment and cable management",
      "Available in MS and SS construction"
    ],
    "specifications": {
      "Shelf Size": "30\" × 20\"",
      "Overall Height": "58\"",
      "Number of Shelves": "5",
      "Power Sockets": "7 Nos.",
      "Storage": "Accessory Drawer",
      "Cylinder Provision": "Provided",
      "Models": "MF111 - MS / MF112 - SS"
    },
    "price": "Ask for Price",
    "materialDetails": "Mild steel multi-tier equipment cart designed to carry laparoscopy stacks. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
    }
  },
  {
    "id": "mf113-endoscopy-trolley",
    "slug": "mf113-endoscopy-trolley",
    "modelNumber": "MF113",
    "name": "Endoscopy Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams Endoscopy Trolley is designed for the organised placement and handling of endoscopy equipment and accessories in procedure rooms and diagnostic areas. Its multi-shelf arrangement provides dedicated space for equipment, while the integrated power sockets allow convenient connection of devices directly through the trolley. A spacious lower drawer provides additional storage for accessories and consumables. Available in MS and SS variants, the SS version offers enhanced corrosion resistance, easy cleaning and long-term durability.",
    "image": "/images/Product Assets/productsImage/MF113 – Endoscopy Trolley.webp",
    "features": [
      "Designed for endoscopy equipment",
      "Multi-shelf equipment arrangement",
      "Integrated power sockets",
      "Large lower storage drawer",
      "Organised equipment placement",
      "Available in MS and SS variants",
      "SS variant offers corrosion resistance and easy maintenance"
    ],
    "specifications": {
      "Number of Shelves": "4",
      "Shelf Spacing": "8\" to 10\"",
      "Power Sockets": "Provided",
      "Storage": "Large Bottom Drawer"
    },
    "price": "Ask for Price",
    "materialDetails": "Mild steel equipment trolley customized for endoscopy setups, featuring scope hangers. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
    }
  },
  {
    "id": "mf156-cylinder-trolley-a-type",
    "slug": "mf156-cylinder-trolley-a-type",
    "modelNumber": "MF156",
    "name": "MS Cylinder Trolley A Type",
    "category": "Medical Trolleys",
    "description": "The Mathurams A-Type Cylinder Trolley in mild steel provides stable, safe transport and positioning of small A-type medical gas cylinders across hospital wards and emergency rooms.",
    "image": "/images/Product Assets/productsImage/MF75 –  Cylinder Trolley B Type (MS).webp",
    "features": [
      "Designed specifically for A-type medical gas cylinders",
      "Secure cylinder retaining ring and chain",
      "Compact, maneuverable two-wheel trolley design",
      "Sturdy mild steel construction",
      "Durable epoxy powder coated finish"
    ],
    "specifications": {
      "Cylinder Type": "A Type",
      "Models": "MF156 - MS / MF157 - Aluminium"
    },
    "price": "Ask for Price",
    "materialDetails": "Mild steel trolley for transporting A-type oxygen/gas cylinders. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Material": "MS",
      "Finish": "Epoxy Powder Coating"
    },
    "needsDetails": false
  },
  {
    "id": "mf13-ss-revolving-stool",
    "slug": "mf13-ss-revolving-stool",
    "modelNumber": "MF13",
    "name": "SS Cushion Top Revolving Stool",
    "category": "Examination & Consultation",
    "description": "The Mathurams SS Revolving Stool is designed to provide comfortable and flexible seating for healthcare professionals during examinations, procedures and routine clinical activities. Its soft cushioned seat and adjustable height allow users to set a comfortable working position.",
    "image": "/images/Product Assets/productsImage/MF13 – Cushion Top Revolving Stool (SS).webp",
    "features": [
      "Full SS construction",
      "Soft and comfortable cushioned seat",
      "Height adjustable design",
      "360° revolving seat",
      "Compact and practical for clinical use"
    ],
    "specifications": {
      "Cushion Diameter": "14\"",
      "Height Adjustment": "16\"–25\"",
      "Top": "Soft Cushion",
      "Models": "MF13 - SS / MF16 –MS",
      "Cushion": "4\""
    },
    "price": "Ask for Price",
    "materialDetails": "Adjustable doctor/visitor revolving stool with heavy cushioned seat and SS base. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Material": "MS/SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
    }
  },
  {
    "id": "mf14-ss-revolving-stool",
    "slug": "mf14-ss-revolving-stool",
    "modelNumber": "MF14",
    "name": "SS Top Revolving Stool",
    "category": "Examination & Consultation",
    "description": "The Mathurams SS Revolving Stool with SS Top is designed to provide stable and flexible seating for healthcare professionals during examinations, procedures and routine clinical activities. Its stainless-steel top and height-adjustable revolving design offer a practical and easy-to-maintain seating solution for healthcare environments.",
    "image": "/images/Product Assets/productsImage/MF14 – SS Top Revolving Stool (SS).webp",
    "features": [
      "Stainless-steel construction",
      "Stainless-steel top",
      "Height-adjustable design",
      "360° revolving seat",
      "Smooth and easy-to-clean surface",
      "Compact design for clinical use"
    ],
    "specifications": {
      "Top Diameter": "15\"",
      "Height Adjustment": "16\"–25\"",
      "Top": "SS",
      "Models": "MF14 - SS / MF17 - MS"
    },
    "price": "Ask for Price",
    "materialDetails": "Hygienic stainless steel revolving stool with full polished SS metal seat top. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Material": "MS/SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
    }
  },
  {
    "id": "mf15-ss-revolving-stool",
    "slug": "mf15-ss-revolving-stool",
    "modelNumber": "MF15",
    "name": "SS Backrest Cushion Revolving Stool",
    "category": "Examination & Consultation",
    "description": "The Mathurams SS Revolving Stool with Backrest Cushion provides comfortable and flexible seating for healthcare professionals during examinations, procedures and routine clinical activities. The cushioned seat and backrest provide added comfort, while the height-adjustable revolving design allows convenient positioning during use.",
    "image": "/images/Product Assets/productsImage/MF15 – Backrest Cushion Revolving Stool (SS).webp",
    "features": [
      "Full SS construction",
      "Soft cushioned seat and backrest",
      "Height-adjustable design",
      "360° revolving seat",
      "Comfortable seating for prolonged use",
      "Easy-to-clean construction"
    ],
    "specifications": {
      "Cushion Diameter": "14\"",
      "Height Adjustment": "16\"–25\"",
      "Seat & Backrest": "Soft Cushion",
      "Cushion": "4\"",
      "Models": "MF15 - SS / MF18 - MS"
    },
    "price": "Ask for Price",
    "materialDetails": "SS revolving examination stool featuring an ergonomic back support bar. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Material": "MS/SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
    }
  },
  {
    "id": "mf64-deluxe-examination-couch",
    "slug": "mf64-deluxe-examination-couch",
    "modelNumber": "MF64",
    "name": "Examination Couch – Plain Cabinets",
    "category": "Examination & Consultation",
    "description": "The Mathurams Deluxe Examination Couch (Plain Cabinets) features an adjustable backrest, attached rectangular foot step, and spacious enclosed cabinet storage for clinical supplies.",
    "image": "/images/Product Assets/productsImage/MF64 – Examination Couch – Plain Cabinets.webp",
    "features": [
      "Adjustable backrest for patient positioning",
      "Integrated storage for clinical essentials",
      "Available with cabinet or cabinet-and-drawer arrangements",
      "Attached rectangular foot step",
      "Comfortable examination surface",
      "Durable and easy-to-maintain construction"
    ],
    "specifications": {
      "Overall Dimension": "72\" L × 24\" W × 33\" H",
      "Material": "MS",
      "Storage": "Plain Cabinets – Without Drawers",
      "Foot Step": "Retractable",
      "Mattress": "3\" Mattress Provided",
      "Finish": "Epoxy Powder Coating"
    },
    "price": "Ask for Price",
    "materialDetails": "Deluxe patient examination couch bed featuring built-in plain double cabinet lockers. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Backrest Operation": "Ratchet / Gas Spring",
      "Mobility": "Fixed / Wheels",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "needsDetails": false,
    "functions": [
      "① Backrest Rise — Adjustable"
    ]
  },
  {
    "id": "mf65-deluxe-examination-couch",
    "slug": "mf65-deluxe-examination-couch",
    "modelNumber": "MF65",
    "name": "Delux Examination Couch",
    "category": "Examination & Consultation",
    "description": "The Mathurams Delux Examination Couch combines a comfortable examination surface with integrated storage, allowing frequently required clinical supplies to be kept conveniently within reach. The adjustable backrest supports different patient positions during examinations, while the attached foot step provides convenient access to the couch. Available with plain cabinet storage or a combination of cabinets and drawers, the couch can be selected according to the storage requirements of the examination area.",
    "image": "/images/Product Assets/productsImage/MF65 – Deluxe Examination Couch.webp",
    "features": [
      "Adjustable backrest for patient positioning",
      "Integrated storage for clinical essentials",
      "Available with cabinet or cabinet-and-drawer arrangements",
      "Attached rectangular foot step",
      "Comfortable examination surface",
      "Durable and easy-to-maintain construction"
    ],
    "specifications": {
      "Overall Dimension": "72\" L × 24\" W × 33\" H",
      "Material": "MS",
      "Storage": "Cabinets + Drawers",
      "Foot Step": "Retractable",
      "Mattress": "3\" Mattress Provided",
      "Finish": "Epoxy Powder Coating"
    },
    "price": "Ask for Price",
    "materialDetails": "Premium exam couch with three drawers and double storage cabinets underneath. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Backrest Operation": "Ratchet / Gas Spring",
      "Mobility": "Fixed / Wheels",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "needsDetails": false,
    "functions": [
      "① Backrest Rise — Adjustable"
    ]
  },
  {
    "id": "mf80-examination-table",
    "slug": "mf80-examination-table",
    "modelNumber": "MF80",
    "name": "Examination Table – Plain",
    "category": "Examination & Consultation",
    "description": "The Mathurams Drug Trolley is designed for organised storage and convenient distribution of medicines across hospital wards and patient care areas. Its multiple-bin arrangement helps segregate and arrange medications systematically, allowing healthcare staff to access required medicines efficiently during routine rounds. Available in MS and SS Models, the trolley can be configured with single-side or double-side storage arrangements based on capacity requirements.",
    "image": "/images/Product Assets/productsImage/MF80 –  Examination Table – Plain.webp",
    "features": [
      "Organised multi-bin medication storage",
      "Large and small PVC bins for systematic segregation",
      "Single-side and double-side configurations",
      "Available in MS and SS construction",
      "Designed for convenient medication handling",
      "Suitable for hospital wards and patient care areas"
    ],
    "specifications": {
      "Overall Dimension": "72\" L × 24\" W × 34\" H",
      "Foot Step": "Retractable",
      "Mattress": "2\" Mattress Provided"
    },
    "price": "Ask for Price",
    "materialDetails": "Standard flat patient examination table with padded vinyl top and MS frame. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    }
  },
  {
    "id": "mf81-examination-table",
    "slug": "mf81-examination-table",
    "modelNumber": "MF81",
    "name": "Examination Table – Head Rise",
    "category": "Examination & Consultation",
    "description": "The Mathurams Examination Table – Head Rise is designed for routine patient examinations and clinical procedures, with an adjustable head section for comfortable patient positioning. The table also offers integrated bottom storage configurations for convenient access to frequently required clinical supplies.",
    "image": "/images/Product Assets/productsImage/MF81 –  Examination Table – Head Rise.webp",
    "features": [
      "Adjustable head section",
      "Integrated bottom storage frame",
      "Comfortable cushioned patient surface",
      "Retractable foot step for convenient patient access",
      "Strong and stable construction",
      "Easy-to-clean and maintain design"
    ],
    "specifications": {
      "Overall Dimension": "72\" L × 24\" W × 34\" H",
      "Foot Step": "Retractable",
      "Mattress": "2\" Mattress Provided"
    },
    "price": "Ask for Price",
    "materialDetails": "Patient examination table featuring manual ratchet head rise elevation. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "functions": [
      "Head Rise — 0° to 30°"
    ],
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    }
  },
  {
    "id": "mf83-examination-table",
    "slug": "mf83-examination-table",
    "modelNumber": "MF83",
    "name": "Double Storage Examination Table - Storage",
    "category": "Examination & Consultation",
    "description": "The Mathurams Double Storage Examination Table combines a comfortable examination surface with comprehensive storage including two drawers and two cupboards, keeping diagnostic supplies and medical consumables organized and within reach.",
    "image": "/images/Product Assets/productsImage/MF83 – Examination Table - Storage.webp",
    "features": [
      "Adjustable head section for comfortable positioning",
      "Dual drawers and double door cabinet storage",
      "Comfortable cushioned patient surface",
      "Retractable foot step for convenient patient access",
      "Strong and stable MS/SS construction",
      "Easy-to-clean and maintain design"
    ],
    "specifications": {
      "Overall Dimension": "72\" L × 24\" W × 34\" H",
      "Foot step": "Retractable",
      "Mattress": "2\" Mattress Provided",
      "Finish": "Epoxy Powder Coating",
      "Models": "MF82 - Single Storage / MF83 - Double Storage"
    },
    "price": "Ask for Price",
    "materialDetails": "Padded examination table with two cabinets and two drawers built into the base. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "functions": [
      "Head Rise — 0° to 30°"
    ],
    "detailedSpec": {
      "Material": "MS/SS",
      "Bottom Storage": "2 Drawers + 2 Shelves",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    }
  },
  {
    "id": "mf96-scan-table",
    "slug": "mf96-scan-table",
    "modelNumber": "MF96",
    "name": "Scan Couch",
    "category": "Examination & Consultation",
    "description": "The Mathurams Scan Table is designed for diagnostic and scanning procedures, providing a comfortable patient platform with electrically controlled positioning. The wired remote enables convenient height adjustment, while the adjustable backrest supports patient positioning during examinations.",
    "image": "/images/Product Assets/productsImage/MF96 – Scan Couch.webp",
    "features": [
      "Designed for scanning and diagnostic procedures",
      "Electrically adjustable height",
      "Adjustable backrest",
      "Wired remote operation",
      "Durable and easy-to-maintain construction",
      "Mattress included"
    ],
    "specifications": {
      "Overall Dimension": "72\" L × 27\" W",
      "Height Adjustment": "24\"–32\"",
      "Operation": "Wired Remote",
      "Mattress": "3\" Mattress Provided"
    },
    "price": "Ask for Price",
    "materialDetails": "Patient scan table specifically configured for ultrasound and imaging diagnostics. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "functions": [
      "① Backrest Rise — Adjustable",
      "② Height Adjustment — 24\"–32\""
    ],
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Lithotomy Leg Support": "Optional with Belts / Pads",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    }
  },
  {
    "id": "mf106-ss-stool",
    "slug": "mf106-ss-stool",
    "modelNumber": "MF106",
    "name": "Attendant Stool",
    "category": "Examination & Consultation",
    "description": "The Mathurams Attendant Stool provides simple and convenient seating for patient attendants in hospital wards and patient rooms. Its compact design allows easy placement beside hospital beds while occupying minimal floor space. Available in MS and SS variants, the SS version offers enhanced corrosion resistance, easy cleaning and long-term durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF106 – Attendant Stool.webp",
    "features": [
      "Designed for patient attendant seating",
      "Compact and space-efficient design",
      "Available in MS and SS variants",
      "Stable and durable construction",
      "Easy-to-clean and maintain",
      "Suitable for wards and patient rooms"
    ],
    "specifications": {
      "Overall Height": "18\""
    },
    "price": "Ask for Price",
    "materialDetails": "Polished stainless steel flat top doctor/attendant stool (non-revolving). Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Seat Size": "14\" × 14\" / 16\" × 16\"",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
    }
  },
  {
    "id": "mf110-x-ray-lobby",
    "slug": "mf110-x-ray-lobby",
    "modelNumber": "MF110",
    "name": "Double X-Ray View Box",
    "category": "Examination & Consultation",
    "description": "The Mathurams X-Ray View Box is designed for clear and convenient viewing of X-ray films in hospitals, clinics and diagnostic centres. It provides a uniformly illuminated viewing surface to assist medical professionals in examining radiographic films. Available in Single, Double and Four View variants, allowing the required number of X-ray films to be viewed based on clinical requirements.",
    "image": "/images/Product Assets/productsImage/MF110 –  Double X-RAY VIEW BOX.webp",
    "features": [
      "Designed for viewing X-ray films",
      "Uniform illuminated viewing surface",
      "Clear and convenient film visibility",
      "Available in multiple viewing capacities",
      "Suitable for hospitals, clinics and diagnostic centres",
      "Durable and easy-to-maintain construction"
    ],
    "specifications": {
      "Application": "X-Ray Film Viewing",
      "Illumination": "Uniform Backlit Viewing"
    },
    "price": "Ask for Price",
    "materialDetails": "LED X-ray film viewing lobby box designed for double/two film formats. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Viewing Option Models": "MF119 - Single / MF110 - Double / MF153 - Four View"
    }
  },
  {
    "id": "mf153-x-ray-view-box-four-view",
    "slug": "mf153-x-ray-view-box-four-view",
    "modelNumber": "MF153",
    "name": "Four View X-Ray View Box",
    "category": "Examination & Consultation",
    "description": "The Mathurams Four View X-Ray Lobby provides quad-panel uniform LED backlit illumination for simultaneously examining multiple radiographic and surgical films.",
    "image": "/images/Product Assets/productsImage/MF153 - Four view  X-RAY VIEW BOX.webp",
    "features": [
      "Designed for viewing X-ray films",
      "Uniform illuminated viewing surface",
      "Clear and convenient film visibility",
      "Available in multiple viewing capacities",
      "Suitable for hospitals, clinics and diagnostic centres",
      "Durable and easy-to-maintain construction"
    ],
    "specifications": {
      "Application": "X-Ray Film Viewing",
      "Viewing Options": "Four View",
      "Illumination": "Uniform Backlit Viewing"
    },
    "price": "Ask for Price",
    "materialDetails": "Large 4-panel medical LED X-ray lobby view box for surgical clinics and OT. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false
  },
  {
    "id": "mf24-icu-cot-manual",
    "slug": "mf24-icu-cot-manual",
    "modelNumber": "MF24",
    "name": "5 Function ICU Cot Manual (ABS Arms, ABS Side Rails)",
    "category": "ICU & Critical Care",
    "description": "The Mathurams 5-Function Manual ICU Cot is designed for intensive care and critical care environments, providing comprehensive patient positioning through a reliable manual crank mechanism. Its robust construction and flexible configuration options make it suitable for varied hospital requirements.",
    "image": "/images/Product Assets/productsImage/MF27 – 3 FUNCTION ICU COT MANUAL(SS Arms, SS Collapsible Rails).webp",
    "features": [
      "Five-function manual operation",
      "Smooth manual crank mechanism",
      "Multiple arm and side railing options",
      "IV provision included",
      "Durable hospital-grade construction",
      "Easy-to-clean surfaces"
    ],
    "specifications": {
      "Dimension": "78\" L × 36\" W",
      "Height with Mattress": "24\"–33\"",
      "Operation": "Manual Crank",
      "IV Provision": "Provided",
      "Mattress": "4\" Mattress Provided",
      "Models": "MF23 - ABS Arms, SS Collapsible Rails / MF24 - ABS Arms, ABS Side Rails / MF25 - SS Arms, SS Collapsible Rails"
    },
    "price": "Ask for Price",
    "materialDetails": "Manual ICU cot bed with moulded ABS panels and collapsible drop-down safety side rails. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Arm Boards": "MS / SS / ABS",
      "Side Railings": "MS Plain / SS Plain / ABS / Aluminium Collapsible / SS Collapsible",
      "Wheel Type": "Plain / Central Lock",
      "Optional Accessories": "Pillow & Safety Bumpers",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige",
      "Customization": "Size can be customised as per requirement."
    },
    "needsDetails": false,
    "functions": [
      "① Backrest Rise — 0°–75°",
      "② Knee/Leg Rise — 0°–45°",
      "③ Trendelenburg",
      "④ Reverse Trendelenburg",
      "⑤ Height Adjustment — Manual"
    ]
  },
  {
    "id": "mf27-icu-cot-3-function-manual",
    "slug": "mf27-icu-cot-3-function-manual",
    "modelNumber": "MF27",
    "name": "3 Function ICU Cot Manual (SS Arms, SS Collapsible Rails)",
    "category": "ICU & Critical Care",
    "description": "The Mathurams 3-Function Manual ICU Cot is designed for intensive care and critical care environments, providing essential patient positioning through reliable manual crank operation. Its practical configuration supports comfortable patient care while allowing hospitals to select suitable arms, side rails and mobility options.",
    "image": "/images/Product Assets/productsImage/MF27 – 3 FUNCTION ICU COT MANUAL(SS Arms, SS Collapsible Rails).webp",
    "features": [
      "Three-function manual operation",
      "Manual crank mechanism",
      "Durable hospital-grade construction",
      "Multiple arm and side railing options",
      "IV provision included",
      "Easy-to-clean construction"
    ],
    "specifications": {
      "Dimension": "78\" L × 36\" W",
      "Height with Mattress": "24\"–33\"",
      "Operation": "Manual Crank",
      "IV Provision": "Provided",
      "Mattress": "4\" Mattress Provided",
      "Models": "MF26 - ABS Arms, SS Collapsible Rails / MF27 - SS Arms, SS Collapsible Rails / MF28 - ABS Arms, ABS Rails"
    },
    "price": "Ask for Price",
    "materialDetails": "Three-function manual ICU cot with stainless steel bows, collapsible rails, and height adjustment. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Arm Boards": "MS / SS / ABS",
      "Side Railings": "MS Plain / SS Plain / ABS / Aluminium Collapsible / SS Collapsible",
      "Wheel Type": "Plain / Central Lock",
      "Optional Accessories": "Pillow & Safety Bumpers",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige",
      "Customization": "Size can be customised as per requirement."
    },
    "needsDetails": false,
    "functions": [
      "① Backrest Rise — Adjustable",
      "② Knee/Leg Raise — Adjustable",
      "③ Height Adjustment — Manual"
    ]
  },
  {
    "id": "mf30-icu-cot-remote",
    "slug": "mf30-icu-cot-remote",
    "modelNumber": "MF30",
    "name": "ICU Cot Remote (ABS Arms, ABS Side Rails)",
    "category": "ICU & Critical Care",
    "description": "The Mathurams Remote ICU Cot combines convenient electrically powered patient positioning with durable hospital-grade construction. It is available in 3-Function and 5-Function configurations, allowing hospitals to select the level of positioning control suited to their requirements.",
    "image": "/images/Product Assets/productsImage/MF30 – ICU COT REMOTE (ABS Arms,ABS Side Rails).webp",
    "features": [
      "Wired remote operation",
      "Available in 3-Function and 5-Function configurations",
      "Smooth electric positioning",
      "Multiple arm and side railing options",
      "IV provision included",
      "Durable and easy-to-clean construction"
    ],
    "specifications": {
      "Dimension": "78\" L × 36\" W",
      "Height with Mattress": "24\"–33\"",
      "Operation": "Wired Remote",
      "IV Provision": "Provided",
      "Mattress": "4\" Mattress Provided",
      "Models": "MF29 - ABS Arms, SS Collapsible Rails / MF30 - ABS Arms, ABS Rails / MF31 - SS Arms, SS Collapsible Rails"
    },
    "price": "Ask for Price",
    "materialDetails": "Fully motorized remote-controlled electric ICU bed with split ABS side rails and central locking castor wheels. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "functions": [
      "① Backrest Rise — Adjustable",
      "② Knee/Leg Raise — Adjustable",
      "③ Height Adjustment — Remote"
    ],
    "detailedSpec": {
      "Functions": "3 Function / 5 Function",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Arm Boards": "MS / SS / ABS",
      "Side Railings": "MS Plain / SS Plain / ABS / Aluminium Collapsible / SS Collapsible",
      "Wheel Type": "Plain / Central Lock",
      "Optional Accessories": "Pillow & Safety Bumpers",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige",
      "Customization": "Size can be customised as per requirement."
    }
  },
  {
    "id": "mf36-baby-cradle",
    "slug": "mf36-baby-cradle",
    "modelNumber": "MF36",
    "name": "MS Baby Cradle",
    "category": "Labour & Maternity",
    "description": "The Mathurams MS Baby Cradle is designed to provide a secure and comfortable resting space for newborns in hospital maternity and neonatal care areas. Its compact design makes it suitable for convenient placement beside the mother’s bed.",
    "image": "/images/Product Assets/productsImage/MF36 – Baby Cradle.webp",
    "features": [
      "Sturdy MS construction",
      "Compact cradle design",
      "Suitable for newborn care",
      "Easy-to-clean construction"
    ],
    "specifications": {
      "Overall Dimension": "27.25\" L × 18\" W × 30\" H",
      "Material": "MS",
      "Finish": "Epoxy Powder Coating",
      "Mattress": "2\" Mattress Provided"
    },
    "price": "Ask for Price",
    "materialDetails": "Mild steel pediatric newborn baby cradle with clear plastic hanger crib container. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige",
      "Customization": "Size can be customised as per requirement."
    }
  },
  {
    "id": "mf37-baby-cradle",
    "slug": "mf37-baby-cradle",
    "modelNumber": "MF37",
    "name": "SS Baby Cradle",
    "category": "Labour & Maternity",
    "description": "The Mathurams SS Baby Cradle is designed to provide a clean, secure and comfortable resting space for newborns in maternity and neonatal care areas. Stainless-steel construction offers excellent corrosion resistance, easy cleaning and long-term durability, making it particularly suitable for hospital environments where hygiene and frequent cleaning are important.",
    "image": "/images/Product Assets/productsImage/MF37 – Baby Cradle.webp",
    "features": [
      "Full stainless-steel construction",
      "Corrosion-resistant and hygienic",
      "Smooth, easy-to-clean surfaces",
      "Durable for regular hospital use",
      "Compact design for convenient bedside placement"
    ],
    "specifications": {
      "Overall Dimension": "27.25\" L × 18\" W × 30\" H",
      "Material": "SS",
      "Finish": "SS Finish",
      "Mattress": "4\" Mattress Provided"
    },
    "price": "Ask for Price",
    "materialDetails": "Full stainless steel newborn baby cradle cot with swinging crib. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige",
      "Customization": "Size can be customised as per requirement."
    }
  },
  {
    "id": "mf71-height-adjustable-labour-cot",
    "slug": "mf71-height-adjustable-labour-cot",
    "modelNumber": "MF71",
    "name": "Remote Height Adjustable Labour Cot",
    "category": "Labour & Maternity",
    "description": "The Mathurams SS Remote Labour Cot – Height Adjustable is designed for labour and maternity care, providing electrically controlled height adjustment to support convenient patient handling and caregiver access during procedures. The adjustable working height allows the cot to be positioned according to procedural and caregiver requirements. The stainless-steel construction offers enhanced corrosion resistance, easy cleaning and long-term durability, making it suitable for maternity environments requiring frequent cleaning and maintenance.",
    "image": "/images/Product Assets/productsImage/MF71 – Remote HEIGHT ADJUSTABLE LABOUR COT.webp",
    "features": [
      "Electrically adjustable height",
      "Wired remote operation",
      "Adjustable head and body sections",
      "Retractable leg section",
      "Provision for adjustable knee crutches",
      "Full stainless-steel construction",
      "Corrosion-resistant and easy-to-clean surfaces",
      "Mattress included"
    ],
    "specifications": {
      "Overall Dimension": "72\" L × 30\" W",
      "Material": "SS",
      "Mattress": "1\" Mattress Provided",
      "Finish": "SS Finish",
      "Lithotomy PU Legrest": "360° Rotatable",
      "Models": "MF71 – Remote / MF73 – Manual"
    },
    "price": "Ask for Price",
    "materialDetails": "Motorized obstetric labor table with electric vertical height up/down adjustment. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Operation": "Manual / Wired Remote",
      "Knee Crutches": "Height & Width Adjustable"
    },
    "needsDetails": false,
    "functions": [
      "① Head Section Rise — 0°–30°",
      "② Body Section Rise — 0°–70°",
      "③ Height Adjustment — 26\"–30\"",
      "④ Leg Section — Retractable"
    ]
  },
  {
    "id": "mf72-v-type-labour-cot",
    "slug": "mf72-v-type-labour-cot",
    "modelNumber": "MF72",
    "name": "Manual V Type Labour Cot",
    "category": "Labour & Maternity",
    "description": "The Mathurams SS Manual Labour Cot – V Type is designed to support patient positioning and caregiver access during labour and maternity procedures. Its V-type design is configured for obstetric care, while the manual operating mechanism provides reliable positioning without dependence on electrical power. The stainless-steel construction offers enhanced corrosion resistance, easy cleaning and long-term durability, making it suitable for maternity and labour care environments.",
    "image": "/images/Product Assets/productsImage/MF72 – Manual V TYPE LABOUR COT.webp",
    "features": [
      "V-type labour cot design",
      "Manual operation",
      "Adjustable head section",
      "Adjustable body section",
      "Retractable leg section",
      "Provision for adjustable knee crutches",
      "Full stainless-steel construction",
      "Corrosion-resistant and easy-to-clean surfaces",
      "Mattress included"
    ],
    "specifications": {
      "Overall Dimension": "72\" L × 30\" W × 30\" H",
      "Material": "SS",
      "Mattress": "1\" Mattress Provided",
      "Finish": "SS Finish",
      "Lithotomy PU Legrest": "360° Rotatable",
      "Models": "MF70 – Remote / MF72 – Manual"
    },
    "price": "Ask for Price",
    "materialDetails": "Manually operated stainless steel obstetric labor delivery table with V-type cutout. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Operation": "Manual / Wired Remote",
      "Knee Crutches": "Height & Width Adjustable"
    },
    "needsDetails": false,
    "functions": [
      "① Head Section Rise — 0°–30°",
      "② Body Section Rise — 0°–70°",
      "③ Leg Section — Retractable"
    ]
  },
  {
    "id": "mf74-labour-table",
    "slug": "mf74-labour-table",
    "modelNumber": "MF74",
    "name": "Labour Table",
    "category": "Labour & Maternity",
    "description": "The Mathurams Labour Table is designed for labour, delivery and maternity procedures. Its V-cut tabletop provides convenient access during procedures, while the lithotomy support and basin arrangement assist in patient positioning and clinical use.",
    "image": "/images/Product Assets/productsImage/MF74 – Labour Table.webp",
    "features": [
      "V-cut tabletop design",
      "Full stainless-steel construction",
      "Lithotomy support for patient positioning",
      "Basin provided",
      "Corrosion-resistant and easy-to-clean surfaces",
      "Durable for hospital and maternity use"
    ],
    "specifications": {
      "Material": "SS",
      "Finish": "SS Finish",
      "Tabletop": "V-Cut Design",
      "Lithotomy Support": "Provided",
      "Basin": "Basin Provided"
    },
    "price": "Ask for Price",
    "materialDetails": "Stainless steel delivery labour table with V-cut top, lithotomy support, and clinical basin. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Material": "SS",
      "Finish": "SS Finish",
      "Tabletop": "V-Cut Design",
      "Accessories": "Lithotomy Support & Basin Provided"
    },
    "needsDetails": false
  },
  {
    "id": "mf90-pediatric-cot",
    "slug": "mf90-pediatric-cot",
    "modelNumber": "MF90",
    "name": "Pediatric Cot",
    "category": "Labour & Maternity",
    "description": "The Mathurams MS Pediatric Cot is designed specifically for the care and accommodation of children in hospital wards and pediatric care areas. Its compact dimensions are suited to younger patients, while the protective cot design provides a secure and comfortable resting environment during hospital stays. The MS construction provides durability for regular hospital use, with an epoxy powder-coated finish for easy cleaning and maintenance.",
    "image": "/images/Product Assets/productsImage/MF90 – Pediatric Cot.webp",
    "features": [
      "Designed specifically for pediatric patient care",
      "Compact dimensions suitable for children",
      "Protective cot design for enhanced safety",
      "Durable MS construction",
      "Easy-to-clean and maintain surfaces",
      "Mattress included"
    ],
    "specifications": {
      "Dimension": "52\" L × 30\" W × 22\" H",
      "Material": "MS",
      "Finish": "Epoxy Powder Coating",
      "Mattress": "4\" Mattress Provided"
    },
    "price": "Ask for Price",
    "materialDetails": "Mild steel pediatric bed cot featuring full-height safety side rails. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Optional Accessories": "Pillow & IV Provision",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "needsDetails": false
  },
  {
    "id": "mf93-gynec-examination-couch",
    "slug": "mf93-gynec-examination-couch",
    "modelNumber": "MF93",
    "name": "Manual Gynec Examination Couch",
    "category": "Labour & Maternity",
    "description": "The Mathurams Gynec Examination Couch is designed for gynaecological examinations and procedures, providing comfortable patient positioning along with integrated storage and examination support features. The couch includes lithotomy leg supports with belts, a removable basin, retractable foot step, three drawers and three cupboards, providing a practical all-in-one solution for gynaecological examination areas.",
    "image": "/images/Product Assets/productsImage/MF93 – Manual GYNEC EXAMINATION COUCH.webp",
    "features": [
      "Designed for gynaecological examinations and procedures",
      "Adjustable backrest",
      "Lithotomy leg supports with belts",
      "Integrated drawers and cupboards",
      "Removable basin",
      "Retractable foot step",
      "Durable MS construction"
    ],
    "specifications": {
      "Overall Dimension": "72\" L × 24\" W × 33\" H",
      "Storage": "3 Drawers + 3 Cupboards",
      "Foot Step": "Retractable",
      "Basin": "Removable",
      "IV Provision": "Provided",
      "Mattress": "3\" Mattress Provided",
      "Models": "MF93 - Manual / MF94 - Remote"
    },
    "price": "Ask for Price",
    "materialDetails": "Mild steel gynecological examination couch with lithotomy leg supports. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Material": "MS",
      "Finish": "Epoxy Powder Coating",
      "Backrest Operation": "Ratchet / Gas Spring / Wired Remote",
      "Mobility": "Fixed / Wheels",
      "Lithotomy Leg Support": "Provided with Belts / Pads",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "needsDetails": false,
    "functions": [
      "① Backrest Rise — Adjustable"
    ]
  },
  {
    "id": "mf94-remote-gynec-examination-couch",
    "slug": "mf94-remote-gynec-examination-couch",
    "modelNumber": "MF94",
    "name": "Remote Gynec Examination Couch",
    "category": "Labour & Maternity",
    "description": "The Mathurams Remote Gynec Examination Couch is designed for comfortable and efficient gynecological examinations and minor procedures. Featuring motorized remote-controlled adjustments for height and backrest positioning, it provides smooth patient positioning with integrated adjustable lithotomy leg crutches.",
    "image": "/images/Product Assets/productsImage/MF93 – Manual GYNEC EXAMINATION COUCH.webp",
    "features": [
      "Motorized wired remote control operation",
      "Adjustable height and backrest positioning",
      "Padded lithotomy knee crutches with multidirectional adjustment",
      "Retractable / slide-out foot tray for clinical access",
      "Stainless steel waste collection basin",
      "High-density seamless antibacterial upholstery"
    ],
    "specifications": {
      "Operation": "Motorized Remote Controlled",
      "Height Adjustment": "Motorized (26\" - 34\")",
      "Backrest Adjustment": "Motorized (0° - 70°)",
      "Frame Material": "MS with Epoxy Powder Coating / SS Base",
      "Knee Crutches": "Padded & Fully Adjustable",
      "Upholstery": "High-Density Antibacterial Foam"
    },
    "price": "Ask for Price",
    "materialDetails": "Motorized remote-controlled gynecological examination couch with electric actuator systems, adjustable lithotomy supports, and clinical basin.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Operation": "Wired Handset Remote",
      "Motors / Actuators": "Heavy-duty Linear Actuators",
      "Knee Crutches": "Height & Angle Adjustable",
      "Basin": "Stainless Steel Retractable Tray"
    },
    "functions": [
      "① Head Section Rise — 0°–70°",
      "② Height Adjustment — 26\"–34\"",
      "③ Leg Section — Retractable",
      "④ Trendelenburg / Tilt Support"
    ],
    "needsDetails": false
  },
  {
    "id": "mf95-gynec-examination-table",
    "slug": "mf95-gynec-examination-table",
    "modelNumber": "MF95",
    "name": "Gynec Examination Table",
    "category": "Labour & Maternity",
    "description": "The Mathurams Gynec Examination Table is designed for routine gynaecological examinations and procedures, providing a stable and comfortable patient platform with the necessary positioning support for examination. The table is equipped with lithotomy leg rests with belts, allowing appropriate leg positioning and support during gynaecological examinations.",
    "image": "/images/Product Assets/productsImage/MF95 – Gynec Examination Table.webp",
    "features": [
      "Designed for gynaecological examinations and procedures",
      "Lithotomy leg rests with belts",
      "Stable patient examination platform",
      "Durable hospital-grade construction",
      "Easy-to-clean and maintain design",
      "Mattress included"
    ],
    "specifications": {
      "Mattress": "2\" Mattress",
      "Finish": "Epoxy Powder Coating"
    },
    "price": "Ask for Price",
    "materialDetails": "Three-section gynecological examination table with leg holders and waste basin. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Lithotomy Leg Support": "Provided with Belts / Pads",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    }
  },
  {
    "id": "mf38-casualty-cot-cum-trolley",
    "slug": "mf38-casualty-cot-cum-trolley",
    "modelNumber": "MF38",
    "name": "Casualty Cot Cum Trolley",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams Casualty Cot Cum Trolley is designed for versatile casualty, emergency, and patient transfer use.",
    "image": "/images/Product Assets/productsImage/MF38 – Casualty Cot Cum Trolley.webp",
    "features": [
      "Dual-purpose trolley and cot design",
      "Suitable for patient transfer and bedside care",
      "Adjustable patient positioning",
      "Height-adjustable design",
      "Durable hospital-grade construction",
      "Multiple side railing options",
      "IV provision included"
    ],
    "specifications": {
      "Dimension": "75\" L × 30\" W × 24-33” H",
      "Operation": "Manual Crank",
      "IV Provision": "Provided",
      "Mattress": "4\" Mattress Provided"
    },
    "price": "Ask for Price",
    "materialDetails": "Versatile emergency trolley that can be locked into position and used as a ward cot, featuring safety rails. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Optional Accessories": "Pillow & Safety Bumpers",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige",
      "Customization": "Size can be customised as per requirement."
    },
    "needsDetails": false,
    "functions": [
      "① Backrest Rise — Adjustable",
      "② Height Adjustment — Available"
    ]
  },
  {
    "id": "mf43-stretcher-trolley",
    "slug": "mf43-stretcher-trolley",
    "modelNumber": "MF43",
    "name": "MS Stretcher Trolley",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams Stretcher Trolley is designed for convenient and stable patient transportation within hospitals, treatment areas and procedure rooms. Its sturdy construction provides reliable support during patient movement, while the detachable stretcher top allows practical handling during transfers. Available in MS and SS variants, the trolley can be configured with suitable side railing and accessory options according to hospital requirements.",
    "image": "/images/Product Assets/productsImage/MF43 – Stretcher Trolley.webp",
    "features": [
      "Designed for safe patient transportation",
      "Sturdy and stable construction",
      "Available in MS and SS variants",
      "Detachable stretcher top",
      "Plain stretcher top as standard",
      "Optional backrest for enhanced patient positioning",
      "IV and cylinder provisions available"
    ],
    "specifications": {
      "Overall Dimension": "72\" L × 22\" W × 32\" H",
      "Operation": "Manual",
      "Stretcher Top": "Detachable",
      "IV Provision": "Available",
      "Cylinder Provision": "Available",
      "Mattress": "1\" Mattress Provided",
      "Models": "MF43 - MS / MF44 - SS"
    },
    "price": "Ask for Price",
    "materialDetails": "Sturdy mild steel stretcher trolley with a removable canvas/sheet stretcher top. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Side Railings": "MS Plain / SS Plain / Aluminium Collapsible / SS Collapsible",
      "Backrest": "Optional",
      "Optional Accessories": "Pillow & Safety Bumpers",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "needsDetails": false
  },
  {
    "id": "mf45-hi-low-stretcher",
    "slug": "mf45-hi-low-stretcher",
    "modelNumber": "MF45",
    "name": "Hi-Low Stretcher",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams Hi-Lo Stretcher is designed for patient transportation with the added advantage of height adjustment and backrest positioning, allowing caregivers to set the stretcher at a convenient level for patient handling and transfer. Its adjustable height provides greater flexibility during patient movement between beds, treatment areas and procedure rooms, while the backrest can be raised to support different patient positions.",
    "image": "/images/Product Assets/productsImage/MF45 – HI-LOW STRETCHER.webp",
    "features": [
      "Height-adjustable stretcher design",
      "Adjustable backrest for patient positioning",
      "Manual crank operation",
      "Stable construction for patient transportation",
      "Multiple side railing options",
      "Designed for convenient patient handling and transfer"
    ],
    "specifications": {
      "Overall Dimension": "75\" L × 24\" W",
      "Height Adjustment": "26\"–34\"",
      "Operation": "Manual Crank",
      "Mattress": "2\" Mattress Provided"
    },
    "price": "Ask for Price",
    "materialDetails": "Height adjustable emergency stretcher trolley with gas spring / manual height control. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "IV Provision": "Optional",
      "Cylinder Provision": "Optional",
      "Optional Accessories": "Pillow & Safety Bumpers",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "needsDetails": false,
    "functions": [
      "① Backrest Rise — Adjustable",
      "② Height Adjustment — 26\"–36\""
    ]
  },
  {
    "id": "mf49-wheel-chair",
    "slug": "mf49-wheel-chair",
    "modelNumber": "MF49",
    "name": "MS Foldable Wheelchair",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams MS Foldable Wheelchair is designed to provide convenient mobility and patient transportation within hospitals, healthcare facilities and other care environments. Its foldable construction allows the wheelchair to be compactly stored and transported when not in use, while the MS frame provides a durable structure for regular use.",
    "image": "/images/Product Assets/productsImage/MF49 – MS FOLDABLE WHEELCHAIR.webp",
    "features": [
      "Foldable design for convenient storage and transportation",
      "Durable MS construction",
      "Designed for patient mobility and transportation",
      "Compact when folded",
      "Comfortable seating arrangement",
      "Practical design for regular hospital use"
    ],
    "specifications": {
      "Material": "MS",
      "Type": "Foldable",
      "Finish": "Epoxy Powder Coating"
    },
    "price": "Ask for Price",
    "materialDetails": "Mild steel foldable wheelchair with leatherette seat and reliable manual brakes. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {}
  },
  {
    "id": "mf50-wheel-chair",
    "slug": "mf50-wheel-chair",
    "modelNumber": "MF50",
    "name": "MS Wheelchair",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams MS Wheelchair is designed to provide reliable and comfortable patient mobility within hospitals and healthcare facilities. Its sturdy mild-steel frame with epoxy powder coating offers durability and dependable support for routine patient transport.",
    "image": "/images/Product Assets/productsImage/MF50 – MS WHEELCHAIR.webp",
    "features": [
      "Available in MS, SS and SS Heavy variants",
      "Comfortable seat and backrest",
      "Designed for convenient patient mobility",
      "Durable construction for regular hospital use",
      "SS variants offer corrosion resistance and easy maintenance",
      "SS Heavy variant for heavier-duty requirements",
      "Practical design for healthcare environments"
    ],
    "specifications": {
      "Seat Size": "18\" × 18\"",
      "Overall Size": "30\" × 30\" (Outer to Outer)",
      "Backrest Size": "18\" × 15\"",
      "Material": "MS",
      "Finish": "Epoxy Powder Coating",
      "Footrest": "Provided",
      "Brakes": "Provided",
      "Cushion": "2\" Cushion Provided"
    },
    "price": "Ask for Price",
    "materialDetails": "Rigid, non-foldable MS wheelchair designed for heavy daily hospital transport. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {}
  },
  {
    "id": "mf52-wheel-chair",
    "slug": "mf52-wheel-chair",
    "modelNumber": "MF52",
    "name": "SS Heavy Wheelchair",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams SS Heavy Wheelchair is a heavy-duty patient mobility solution constructed from reinforced stainless steel. Engineered for high load capacity and demanding clinical usage, it provides exceptional structural stability and long-term corrosion resistance.",
    "image": "/images/Product Assets/productsImage/MF52 – SS Heavy WHEELCHAIR.webp",
    "features": [
      "Available in MS, SS and SS Heavy variants",
      "Comfortable seat and backrest",
      "Designed for convenient patient mobility",
      "Durable construction for regular hospital use",
      "SS variants offer corrosion resistance and easy maintenance",
      "SS Heavy variant for heavier-duty requirements",
      "Practical design for healthcare environments"
    ],
    "specifications": {
      "Seat Size": "18\" × 18\"",
      "Overall Size": "30\" × 30\" (Outer to Outer)",
      "Backrest Size": "18\" × 15\"",
      "Material": "SS",
      "Finish": "SS Finish",
      "Footrest": "Provided",
      "Brakes": "Provided",
      "Cushion": "2\" Cushion Provided"
    },
    "price": "Ask for Price",
    "materialDetails": "Extra reinforced heavy-duty stainless steel wheelchair built for bariatric patients. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {}
  },
  {
    "id": "mf67-transfer-trolley",
    "slug": "mf67-transfer-trolley",
    "modelNumber": "MF67",
    "name": "SS Transfer Trolley",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams SS Transfer Trolley is designed for sterile-zone patient transfers in operating theatres and intensive care suites, featuring a full stainless-steel transferable stretcher top and chassis for maximum hygiene.",
    "image": "/images/Product Assets/productsImage/MF67 – SS Transfer Trolley.webp",
    "features": [
      "Designed for controlled patient transfer",
      "Helps maintain separation between sterile and non-sterile areas",
      "Detachable and transferable stretcher top",
      "Available in MS and SS variants",
      "Multiple side railing options",
      "Stable construction for regular hospital use",
      "SS variant offers enhanced corrosion resistance and easy maintenance"
    ],
    "specifications": {
      "Overall Dimension": "75\" L × 24\" W × 32\" H",
      "Stretcher Top": "Detachable & Transferable",
      "Mattress": "1\" Mattress Provided",
      "Models": "MF66 – MS / MF67 – SS"
    },
    "price": "Ask for Price",
    "materialDetails": "Stainless steel patient transfer trolley, perfect for emergency ward and OT use. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Stretcher Top Option": "Plain / Head Rise",
      "Side Railings": "MS Plain / SS Plain / Aluminium Collapsible / SS Collapsible",
      "Optional Accessories": "IV Provision, Cylinder Provision, Pillow & Safety Bumpers",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "needsDetails": false
  },
  {
    "id": "mf68-hi-low-transfer-trolley",
    "slug": "mf68-hi-low-transfer-trolley",
    "modelNumber": "MF68",
    "name": "MS Hi-Low Transfer Trolley",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams Hi-Lo Transfer Trolley combines controlled patient transfer with height-adjustable positioning, allowing caregivers to adjust the trolley height for better alignment with beds and other patient-support surfaces during transfers. Its detachable and transferable stretcher top supports movement between sterile and non-sterile hospital areas, while the Hi-Lo mechanism provides additional flexibility during patient handling. Available in MS and SS variants, with the SS version providing enhanced corrosion resistance, easier cleaning and long-term durability.",
    "image": "/images/Product Assets/productsImage/MF68 – MS HI-LOW TRANSFER TROLLEY.webp",
    "features": [
      "Height-adjustable Hi-Lo design",
      "Designed for controlled patient transfer",
      "Facilitates alignment with beds and patient-support surfaces",
      "Detachable and transferable stretcher top",
      "Available in MS and SS variants",
      "Multiple side railing options",
      "SS variant offers enhanced corrosion resistance and easy maintenance"
    ],
    "specifications": {
      "Overall Dimension": "75\" L × 24\" W",
      "Height": "24-34\"",
      "Operation": "Manual",
      "Stretcher Top": "Detachable & Transferable",
      "Mattress": "1\" Mattress Provided",
      "Models": "MF68 – MS / MF69 – SS"
    },
    "price": "Ask for Price",
    "materialDetails": "Height adjustable MS patient transfer trolley with backrest and height adjustment system. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Stretcher Top Option": "Plain / Head Rise",
      "Side Railings": "MS Plain / SS Plain / Aluminium Collapsible / SS Collapsible",
      "Optional Accessories": "IV Provision, Cylinder Provision, Pillow & Safety Bumpers",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "needsDetails": false,
    "functions": [
      "① Height Adjustment — Hi-Lo"
    ]
  },
  {
    "id": "mf115-patient-shifter",
    "slug": "mf115-patient-shifter",
    "modelNumber": "MF115",
    "name": "Patient Shifter",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams Aluminium Patient Shifter is designed to assist caregivers in rolling and repositioning patients between beds, stretchers and other patient-support surfaces. Its smooth rolling mechanism helps facilitate patient transfers while reducing the need for direct lifting. The lightweight aluminium construction makes the shifter easy to handle while providing durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF115 – Patient Shifter.webp",
    "features": [
      "Designed for rolling and repositioning patients",
      "Assists in transfers between beds and stretchers",
      "Smooth rolling mechanism",
      "Lightweight aluminium construction",
      "Easy to handle and position",
      "Durable and easy-to-clean design"
    ],
    "specifications": {
      "Material": "Aluminium",
      "Mechanism": "Smooth rolling mechanism",
      "Construction": "Lightweight Aluminium Construction"
    },
    "price": "Ask for Price",
    "materialDetails": "Aluminium patient shifting board with rollers for transfer between beds and stretchers. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {}
  },
  {
    "id": "mf101-blood-collection-chair",
    "slug": "mf101-blood-collection-chair",
    "modelNumber": "MF101",
    "name": "Blood Collection Chair",
    "category": "General Furniture",
    "description": "The Mathurams Blood Collection Chair is designed to provide comfortable and supportive seating for patients during blood collection and other short clinical procedures. Its ergonomic seating arrangement helps maintain a convenient patient position, while the integrated arm support provides a stable surface for blood collection.",
    "image": "/images/Product Assets/productsImage/MF101 - Blood Collection Chair.webp",
    "features": [
      "Designed for blood collection procedures",
      "Comfortable cushioned seating",
      "Integrated arm support for convenient patient positioning",
      "Supportive backrest",
      "Stable and durable construction",
      "Easy-to-clean and maintain surfaces",
      "Suitable for hospitals, laboratories and diagnostic centres"
    ],
    "specifications": {
      "Material": "MS",
      "Seat, Arms & Backrest": "Cushioned",
      "Finish": "Epoxy Powder Coating",
      "Colours": "Blue, Red, Green"
    },
    "price": "Ask for Price",
    "materialDetails": "Ergonomic blood donation and collection chair featuring adjustable padded armrests. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {}
  },
  {
    "id": "mf104-3-seater-chair",
    "slug": "mf104-3-seater-chair",
    "modelNumber": "MF104",
    "name": "3 Seater Chair",
    "category": "General Furniture",
    "description": "The Mathurams 3 Seater Chair is designed to provide comfortable and organised seating for hospital waiting areas, reception lobbies, corridors and consultation zones. Its heavy-duty beam structure withstands high-traffic public healthcare environments while maintaining a sleek, modern appearance.",
    "image": "/images/Product Assets/productsImage/MF104 – 3 Seater Chair.webp",
    "features": [
      "Heavy-duty three-seater connected beam design",
      "Ergonomically contoured backrest and perforated steel seats",
      "Available with or without wipeable cushioned seat pads",
      "Rust-resistant epoxy powder coated framework",
      "Non-marking rubber floor leveler foot caps",
      "Space-efficient footprint for busy hospital hallways"
    ],
    "specifications": {
      "Seating Capacity": "3 Persons",
      "Application": "Waiting Areas / Reception / Patient Care Areas"
    },
    "price": "Ask for Price",
    "materialDetails": "Perforated steel 3-seater visitor waiting bench chair for lobby reception. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Seat & Backrest": "Without Cushion / With Cushion",
      "Colours": "Silver Grey / Black"
    }
  },
  {
    "id": "mf105-4-seater-chair",
    "slug": "mf105-4-seater-chair",
    "modelNumber": "MF105",
    "name": "4 Seater Chair",
    "category": "General Furniture",
    "description": "The Mathurams 4 Seater Chair provides high-density, durable public seating for high-traffic hospital waiting halls, outpatient departments and diagnostic reception lobbies. Built on a reinforced structural steel cross-beam, it offers stable multi-person support with easy-cleaning surfaces.",
    "image": "/images/Product Assets/productsImage/MF105 – 4 Seater Chair.webp",
    "features": [
      "Four-seater connected steel bench design",
      "Reinforced tubular cross-beam for maximum weight capacity",
      "Perforated metal seat shells for passive ventilation",
      "Available with washable medical upholstery cushions",
      "Powder-coated finish resistant to scratches and detergents",
      "Floor-stabilizing adjustable levelling feet"
    ],
    "specifications": {
      "Seating Capacity": "4 Persons",
      "Application": "Waiting Areas / Reception / Patient Care Areas"
    },
    "price": "Ask for Price",
    "materialDetails": "Heavy duty perforated steel 4-seater visitor waiting lobby bench. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Seat & Backrest": "Without Cushion / With Cushion",
      "Colours": "Silver Grey / Black"
    }
  },
  {
    "id": "mf117-two-tier-cot",
    "slug": "mf117-two-tier-cot",
    "modelNumber": "MF117",
    "name": "Two Tier Cot",
    "category": "General Furniture",
    "description": "The Mathurams Two Tier Cot is designed to provide a practical and space-efficient resting solution for nursing staff and hospital personnel. Its two-level arrangement maximises available floor space while providing separate sleeping platforms in a compact footprint. The sturdy MS construction provides durability for regular use, while the integrated ladder allows convenient access to the upper berth.",
    "image": "/images/Product Assets/productsImage/MF117 – Two Tier Cot.webp",
    "features": [
      "Two-tier space-saving design",
      "Designed for nursing staff and hospital personnel",
      "Integrated ladder for upper berth access",
      "Strong and durable MS construction",
      "Optional storage compartments",
      "Easy-to-clean and maintain construction"
    ],
    "specifications": {
      "Overall Dimension": "72\" L × 30\" W × 60\" H",
      "Material": "MS",
      "Number of Tiers": "2",
      "Mattress": "Included",
      "Finish": "Epoxy Powder Coating"
    },
    "price": "Ask for Price",
    "materialDetails": "Mild steel heavy-duty two-tier bunk cot bed for hostels, attendant rooms, and staff quarters. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Optional Storage": "1 or 2 Cabinets",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    }
  },
  {
    "id": "mf139-pharmacy-rack",
    "slug": "mf139-pharmacy-rack",
    "modelNumber": "MF139",
    "name": "Pharmacy Rack",
    "category": "General Furniture",
    "description": "The Mathurams Pharmacy Rack is a robust, high-capacity modular storage system designed for hospital pharmacies, medicine dispensaries, and clinical storage rooms. Built with heavy-gauge steel and multiple adjustable shelves with label holders, it ensures organized, systematic categorization of pharmaceuticals and medical supplies.",
    "image": "/images/Product Assets/productsImage/MF139 -  Pharmacy Rack.webp",
    "features": [
      "Multiple heavy-duty storage shelves with high load capacity",
      "Modular tiered configuration for organized medicine batch sorting",
      "Corrosion-resistant epoxy powder coated finish / SS options",
      "Optional transparent front bin dividers and label holders",
      "Stable ground leveling legs with anti-vibration bushes",
      "Easy-to-sanitize surfaces meeting hospital hygiene standards"
    ],
    "specifications": {
      "Overall Dimension": "36\" L × 18\" W × 72\" H",
      "Number of Shelves": "5 to 6 Shelves",
      "Shelf Clearance": "12\" - 14\" (Adjustable)",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating"
    },
    "price": "Ask for Price",
    "materialDetails": "Modular hospital pharmacy and medicine storage rack with multi-tier shelving and label categorization provisions.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating",
      "Shelves": "5-Tier / 6-Tier Storage Shelves",
      "Customization": "Rack dimensions, shelf count, and bin partitions can be customized."
    },
    "needsDetails": false
  },
  {
    "id": "mf102-mattress",
    "slug": "mf102-mattress",
    "modelNumber": "MF102",
    "customizationNote": "Customisable according to cot dimensions.",
    "name": "Mattress",
    "category": "Accessories",
    "description": "The Mathurams Hospital Cot Mattress is designed for use with a wide range of hospital cots and beds, with multiple folding configurations available to accommodate plain, Fowler, Semi Fowler, and multi-function ICU beds. Encased in heavy-duty waterproof rexin, it provides ergonomic patient support and effortless cleaning.",
    "image": "/images/Product Assets/productsImage/MF102 – Mattress.webp",
    "features": [
      "Suitable for plain, semi-fowler, fowler and ICU hospital beds",
      "Available in 0-Fold (Plain), 2-Fold (Semi-Fowler), and 3-Fold (Fowler/ICU) designs",
      "High-density resilient foam core for anti-decubitus pressure relief",
      "Medical-grade waterproof, flame-retardant Rexin covering",
      "Heavy-duty zipper closure for easy cover removal and cleaning",
      "Customizable dimensions to match all cot specifications"
    ],
    "specifications": {},
    "price": "Ask for Price",
    "materialDetails": "Hospital mattress configured with water-resistant cover for patient beds. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Fold Options": "0 Fold / 2 Fold / 3 Fold",
      "Mattress Type": "Plain / Zip Type",
      "Cover Material": "Cloth Rexin / Rexin",
      "Mattress Thickness": "2\" / 3\" / 4\" / 5\"",
      "Size": "As per Cot / Customised",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige",
      "Customization": "Customisable according to cot dimensions."
    }
  },
  {
    "id": "mf103-pillow",
    "slug": "mf103-pillow",
    "modelNumber": "MF103",
    "name": "Pillow",
    "category": "Accessories",
    "description": "The Mathurams Medical Pillow is designed for patient comfort across hospital cots, recovery couches and examination tables. Available with conjugated Recron fibre or resilient cut foam filling, it is enclosed in an impermeable, anti-microbial medical rexin cover for hygienic hospital use.",
    "image": "/images/Product Assets/productsImage/MF103 – Pillow.webp",
    "features": [
      "Ergonomic head and cervical support for bedridden patients",
      "Hygienic, fluid-resistant and anti-bacterial outer covering",
      "Available in soft Recron fibre or supportive high-density cut foam",
      "Smooth, wipe-clean surface compatible with hospital disinfectants",
      "Durable stitched seams for long service life"
    ],
    "specifications": {},
    "price": "Ask for Price",
    "materialDetails": "Standard medical patient pillow wrapped in water-resistant rexine cover. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Filling Material": "Recron Fibre / Cut Foam",
      "Outer Cover": "Rexin / Cloth Rexin",
      "Application": "Hospital Cots / Examination Tables / Patient Furniture",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    }
  },
  {
    "id": "mf120-aluminium-side-rails",
    "slug": "mf120-aluminium-side-rails",
    "modelNumber": "MF120",
    "customizationNote": "Size and mounting configuration can be customised according to cot requirements.",
    "name": "Aluminium Side Rails",
    "category": "Accessories",
    "description": "The Mathurams Aluminium Side Rails are designed for hospital cots and beds to provide dependable patient fall protection along the sleeping platform. The intuitive collapsible mechanism allows the rails to be securely raised during rest and dropped flush with the cot frame for unrestricted patient transfer.",
    "image": "/images/Product Assets/productsImage/MF120 – Aluminium Side Rails.webp",
    "features": [
      "Lightweight, high-tensile aluminium alloy construction",
      "Collapsible drop-down mechanism with quick-release safety latch",
      "Provides effective side fall protection for vulnerable patients",
      "Corrosion resistant, smooth and easy to disinfect",
      "Universal bracket mounting compatible with diverse hospital cots"
    ],
    "specifications": {
      "Material": "Aluminium",
      "Mechanism": "Collapsible",
      "Application": "Hospital Cots / Beds",
      "Finish": "Aluminium Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "Pair of collapsible aluminium safety side rails for patient beds. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Customization": "Size and mounting configuration can be customised according to cot requirements."
    }
  },
  {
    "id": "mf123-ss-collapsible",
    "slug": "mf123-ss-collapsible",
    "modelNumber": "MF123",
    "name": "SS Collapsible Side Rails",
    "category": "Accessories",
    "description": "The Mathurams SS Collapsible Side Rails provide robust, medical-grade patient containment for intensive care and general ward cots. Fabricated from stainless steel, they offer exceptional structural rigidity, easy single-hand drop operation, and uncompromised hygienic cleaning.",
    "image": "/images/Product Assets/productsImage/MF123 – SS Collapsible Side Rails.webp",
    "features": [
      "Heavy-gauge stainless steel tubular construction",
      "One-touch collapsible mechanism for quick caregiver access",
      "High-strength locking pins prevent accidental lowering",
      "Smooth, burr-free surfaces prevent patient skin tears or entrapment",
      "High corrosion resistance for demanding clinical sterilization protocols"
    ],
    "specifications": {
      "Material": "Stainless Steel",
      "Mechanism": "Collapsible",
      "Application": "Hospital Cots / Beds",
      "Finish": "SS Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "Collapsible stainless steel side safety guards for patient beds. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Customization": "Size and mounting configuration can be customised according to cot requirements."
    }
  },
  {
    "id": "mf124-ss-arms",
    "slug": "mf124-ss-arms",
    "modelNumber": "MF124",
    "name": "SS Arms",
    "category": "Accessories",
    "description": "The Mathurams SS Arms feature a heavy-duty stainless steel tubular perimeter frame inset with a laminated plywood core and decorative mica finish. Designed as head and foot panels for hospital beds, they combine sterile durability with an attractive, warm ward aesthetic.",
    "image": "/images/Product Assets/productsImage/MF124 – SS Arms.webp",
    "features": [
      "Stainless steel outer perimeter frame with polished finish",
      "Waterproof plywood center panel with high-pressure mica laminate",
      "Extensive color and woodgrain laminate choices to coordinate with ward decor",
      "Corrosion resistant SS structure with smooth rounded edges",
      "Removable design for quick patient intubation access at the head end"
    ],
    "specifications": {
      "Material": "Stainless Steel",
      "Centre Panel": "Plywood with Mica Finish",
      "Mica Colour": "As per Cot Colour / Available Colour Options",
      "Application": "Hospital Cots / Beds",
      "Finish": "SS Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "Set of stainless steel head and foot bows for general hospital cot beds. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Customization": "Size and mounting configuration can be customised according to cot requirements."
    }
  },
  {
    "id": "mf125-bins",
    "slug": "mf125-bins",
    "modelNumber": "MF125",
    "name": "Bins",
    "category": "Accessories",
    "description": "The Mathurams Medical Plastic Bins provide color-coded, modular storage for medication vials, ampoules, dressings and surgical consumables. Designed for integration into pharmacy racks, crash carts and nursing station trolleys, they facilitate rapid visual identification and systematic inventory control.",
    "image": "/images/Product Assets/productsImage/MF125 – Bins.webp",
    "features": [
      "Moulded from high-impact polypropylene (PP)",
      "Available in Big and Small size formats for diverse supply volumes",
      "Interlocking modular design for stable stacking and louvered panel hanging",
      "Wide front hopper opening for effortless dispensing and retrieval",
      "Front card holder slot for barcode and item name labeling"
    ],
    "specifications": {
      "Material": "Plastic",
      "Size Options": "Big / Small",
      "Colours": "Blue / Grey / Red / Yellow / Green",
      "Application": "Racks / Trolleys / Pharmacy & Medical Storage"
    },
    "price": "Ask for Price",
    "materialDetails": "Molded plastic waste bins designed for clinical crash carts and trolleys. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {}
  },
  {
    "id": "mf126-ss-plain-side-rails",
    "slug": "mf126-ss-plain-side-rails",
    "modelNumber": "MF126",
    "name": "SS Plain Side Rails",
    "category": "Accessories",
    "description": "The Mathurams SS Plain Side Rails are fixed-style drop-down safety barriers constructed from heavy-gauge stainless steel. They deliver sturdy, dependable patient fall prevention along both sides of hospital cots while maintaining a streamlined, easy-to-clean profile.",
    "image": "/images/Product Assets/productsImage/MF126 – SS Plain Side Rails.webp",
    "features": [
      "Full stainless steel tubular construction",
      "Provides dependable fall protection along bed margins",
      "Strong welded joints with high tensile load tolerance",
      "Polished, smooth surfaces resist bio-fluid accumulation",
      "Straightforward, reliable hinge bracket operation"
    ],
    "specifications": {
      "Material": "Stainless Steel",
      "Design": "Plain Side Rails",
      "Application": "Hospital Cots / Beds",
      "Finish": "SS Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "Set of plain non-collapsible stainless steel side safety rails. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Customization": "Size and mounting configuration can be customised according to cot requirements."
    }
  },
  {
    "id": "mf137-abs-arms",
    "slug": "mf137-abs-arms",
    "modelNumber": "MF137",
    "name": "ABS Arms",
    "category": "Accessories",
    "description": "The Mathurams ABS Arms are premium-grade medical bed head and foot boards moulded from high-impact ABS polymer. Designed for ICU beds and recovery cots, they feature integrated lock levers for quick removal during clinical emergencies and intubation, combined with smooth ergonomic contours for effortless cleaning and sterilization.",
    "image": "/images/Product Assets/productsImage/MF137 – ABS Arms.webp",
    "features": [
      "High-impact injection-moulded ABS polymer construction",
      "Quick-release locking mechanism for immediate removal during emergencies",
      "Smooth, seamless contours prevent dust and pathogen accumulation",
      "Integrated push handles and patient name card holder",
      "Impact-resistant buffer corners protect hospital walls from collisions",
      "Standard mounting dimensions compatible with major hospital cot frames"
    ],
    "specifications": {
      "Material": "High-Impact Engineering ABS Polymer",
      "Locking": "Quick-Release Safety Lock",
      "Application": "ICU Beds, Fowler Beds, Hospital Cots",
      "Finish": "Smooth Medical-Grade Moulded Finish",
      "Dimensions": "Standard Bed Width (36\" / 38\")"
    },
    "price": "Ask for Price",
    "materialDetails": "Moulded ABS head and foot panel bow set for ICU and deluxe hospital beds. Manufactured with high quality virgin polymer materials.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Material": "Virgin Medical Grade ABS",
      "Mounting Type": "Pipe Socket Quick Lock",
      "Features": "Card Holder Slot & Ergonomic Grip",
      "Customization": "Color accents and mounting pin spacing customizable."
    },
    "needsDetails": false
  },
  {
    "id": "mf138-abs-side-rails",
    "slug": "mf138-abs-side-rails",
    "modelNumber": "MF138",
    "name": "ABS Side Rails",
    "category": "Accessories",
    "description": "The Mathurams ABS Side Rails are 4-piece tuck-away safety side barriers manufactured from durable ABS polymer. Featuring gas-spring dampened collapsible drop-down operation and built-in angle indicators, they provide maximum patient fall prevention while allowing swift bedside access for medical staff.",
    "image": "/images/Product Assets/productsImage/MF138 – ABS Side Rails.webp",
    "features": [
      "Four-piece split collapsible tuck-away design (2 head + 2 foot sections)",
      "Smooth gas-spring assisted one-hand release mechanism",
      "Integrated degree angle indicators for backrest and Trendelenburg monitoring",
      "Smooth, rounded edges to protect patients from pressure injuries",
      "Heavy-duty steel mounting brackets for high lateral stability",
      "Resistant to hospital-grade disinfectants and chemical cleaners"
    ],
    "specifications": {
      "Material": "High-Impact Moulded ABS with Steel Core Bracket",
      "Type": "Split 4-Piece Collapsible Safety Rails",
      "Operation": "One-Touch Push Button Drop Mechanism",
      "Indicators": "Integrated Backrest / Bed Incline Angle Gauge",
      "Application": "ICU Beds & Fowler Cots"
    },
    "price": "Ask for Price",
    "materialDetails": "Set of 4-piece collapsible tuck-away ABS side safety rails with gas spring dampening and angle indicators.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Material": "ABS Polymer with Reinforced Steel Core",
      "Mechanism": "Gas Spring Dampened Drop-Down",
      "Configuration": "Pair (Left & Right) or 4-Piece Split Set",
      "Customization": "Mounting bracket hole spacing can be adapted to cot frame."
    },
    "needsDetails": false
  },
  {
    "id": "mf145-actuator",
    "slug": "mf145-actuator",
    "modelNumber": "MF145",
    "name": "Actuator",
    "category": "Accessories",
    "description": "The Mathurams Medical Linear Actuator converts electrical power into precise, smooth mechanical linear motion for multi-function ICU beds, operating tables and examination couches. Engineered with high-torque gearboxes and integrated limit switches, it guarantees quiet, reliable patient positioning.",
    "image": "/images/Product Assets/productsImage/MF145 – Actuator.webp",
    "features": [
      "Engineered specifically for electric hospital cots and surgical tables",
      "Ultra-smooth, quiet linear travel under maximum patient loads",
      "Built-in electronic end-position limit switches",
      "High ingress protection (IP54 / IP66) against liquid spills",
      "Available in multiple stroke lengths and heavy-duty thrust capacities"
    ],
    "specifications": {
      "Stroke Length": "100 mm / 150 mm",
      "Type": "Linear Actuator",
      "Application": "Hospital Cots / Beds",
      "Operation": "Electric"
    },
    "price": "Ask for Price",
    "materialDetails": "Heavy duty linear motor actuator for motorized electric ICU beds. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {}
  },
  {
    "id": "mf146-control-box",
    "slug": "mf146-control-box",
    "modelNumber": "MF146",
    "name": "Control Box",
    "category": "Accessories",
    "description": "The Mathurams Medical Control Box is the intelligent central microprocessor unit coordinating electric hospital cots, recovery tables and motorized patient beds. It converts mains AC power into regulated DC voltage and synchronizes multi-channel actuator movements from remote handsets.",
    "image": "/images/Product Assets/productsImage/MF146 – Control Box.webp",
    "features": [
      "Centralized control unit for multi-motor electric hospital beds",
      "Supports 2, 3, 5 and 7 function motorized configurations",
      "Built-in electronic overload protection for motor preservation",
      "High electrical safety isolation conforming to medical device standards",
      "Compact, splash-proof housing with plug-and-play actuator sockets"
    ],
    "specifications": {
      "Function Options": "2 Function / 3 Function / 5 Function / 7 Function",
      "Application": "Electric Hospital Cots / Beds",
      "Operation": "Input Electric 220 VAC, Output 12/24V AC/DC depending on the selected models."
    },
    "price": "Ask for Price",
    "materialDetails": "Electronic control box unit to operate motorized actuators for electric beds. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {}
  },
  {
    "id": "mf147-wired-remote-handset",
    "slug": "mf147-wired-remote-handset",
    "modelNumber": "MF147",
    "name": "Wired Remote Handset",
    "category": "Accessories",
    "description": "The Mathurams Wired Remote Handset gives caregivers and patients effortless push-button control over electric hospital cots and beds. Its ergonomic handheld casing features high-contrast graphic icons, tactile micro-switches and an optional nurse lockout panel.",
    "image": "/images/Product Assets/productsImage/MF147 – Wired Remote Handset.webp",
    "features": [
      "Intuitive push-button control of backrest, legrest and height elevations",
      "Ergonomic, slip-resistant handheld enclosure with hanging hook",
      "Flexible, durable coiled cable for extended bedside reach",
      "Sealed membrane keypad resistant to liquid infiltration and alcohol wipes",
      "Available in 2, 3 and 7 function configurations"
    ],
    "specifications": {
      "Function Options": "2 Function / 3 Function / 7 Function",
      "Type": "Wired Handset"
    },
    "price": "Ask for Price",
    "materialDetails": "Handset cord remote control unit for patient/nurse electric ICU bed adjustments. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {}
  },
  {
    "id": "mf148-castors-2-inch",
    "slug": "mf148-castors-2-inch",
    "modelNumber": "MF148",
    "name": "2” Castors",
    "category": "Accessories",
    "description": "The Mathurams 2\" Hospital Castors are compact, smooth-rolling wheels designed for light hospital furniture, drip stands, waste bins and foot steps. Featuring non-marking synthetic treads and low rolling resistance, they protect hospital flooring while ensuring effortless maneuverability.",
    "image": "/images/Product Assets/productsImage/MF148 – 2”  CASTORS.webp",
    "features": [
      "2-inch wheel diameter for compact, low-profile medical furniture",
      "Non-marking, silent-rolling synthetic rubber / PU tread",
      "360° double-ball bearing swivel head for agile steering",
      "Available with or without individual foot-operated wheel brakes",
      "Pillar (stem) and threaded bolt mounting options"
    ],
    "specifications": {},
    "price": "Ask for Price",
    "materialDetails": "Dual wheel 2-inch swivel castor wheels for lockers, stands, and smaller items. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Wheel Size": "2\"",
      "Wheel Material": "PU / rubber / teflon / nylon",
      "Mounting Type": "7/8\" Pillar / Thread Type",
      "Brake": "With Brake / Without Brake / Centre Locking",
      "Application": "Hospital Cots / Trolleys / Hospital Furniture"
    }
  },
  {
    "id": "mf149-castors-3-inch",
    "slug": "mf149-castors-3-inch",
    "modelNumber": "MF149",
    "name": "3” Castors",
    "category": "Accessories",
    "description": "The Mathurams 3\" Hospital Castors deliver reliable mobility for bedside lockers, dressing trolleys, mayo stands and diagnostic equipment. With heavy-duty polymer wheels and shielded swivel raceways, they roll smoothly over elevator thresholds and tile grout.",
    "image": "/images/Product Assets/productsImage/MF149 – 3”  CASTORS.webp",
    "features": [
      "3-inch diameter wheel providing optimal balance of height and rolling ease",
      "Polyurethane / Virgin Nylon wheel body resistant to chemicals and wear",
      "Shielded ball bearings keep out lint, liquids and floor debris",
      "Positive-locking foot brake pedal locks both wheel roll and swivel",
      "Available in pillar and thread-type mounting stems"
    ],
    "specifications": {},
    "price": "Ask for Price",
    "materialDetails": "Single wheel 3-inch medical swivel castor wheels with option of step brake. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Wheel Size": "3\"",
      "Wheel Material": "PU / rubber / teflon / nylon",
      "Mounting Type": "7/8\" Pillar / Thread Type",
      "Brake": "With Brake / Without Brake / Centre Locking",
      "Application": "Hospital Cots / Trolleys / Hospital Furniture"
    }
  },
  {
    "id": "mf150-castors-4-inch",
    "slug": "mf150-castors-4-inch",
    "modelNumber": "MF150",
    "name": "4” Castors",
    "category": "Accessories",
    "description": "The Mathurams 4\" Hospital Castors are heavy-duty mobile wheels designed for general ward cots, recovery stretchers and linen transport trolleys. Their larger diameter effortlessly overcomes surface transitions, while the anti-static tread ensures patient safety.",
    "image": "/images/Product Assets/productsImage/MF150 – 4”  CASTORS.webp",
    "features": [
      "4-inch diameter for effortless rolling over doorways and lift sills",
      "Heavy-duty cast polyurethane tyre bonded to polypropylene wheel centre",
      "Precision sealed swivel head bearings for whisper-quiet transit",
      "Integrated thread guards prevent floor string and bandage entanglement",
      "High dynamic load capacity for patient support furniture"
    ],
    "specifications": {},
    "price": "Ask for Price",
    "materialDetails": "Standard 4-inch medical swivel castors for stretchers and ward beds. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Wheel Size": "4\"",
      "Wheel Material": "PU / rubber / teflon / nylon",
      "Mounting Type": "7/8\" Pillar / Thread Type",
      "Brake": "With Brake / Without Brake / Centre Locking",
      "Application": "Hospital Cots / Trolleys / Hospital Furniture"
    }
  },
  {
    "id": "mf151-castors-5-inch",
    "slug": "mf151-castors-5-inch",
    "modelNumber": "MF151",
    "name": "5” Castors",
    "category": "Accessories",
    "description": "The Mathurams 5\" Hospital Castors are large-diameter, high-performance transport wheels engineered for ICU beds, emergency stretcher trolleys and heavy patient transfer units. They offer exceptional shock absorption, minimal push effort, and superior directional stability.",
    "image": "/images/Product Assets/productsImage/MF151 – 5”  CASTORS.webp",
    "features": [
      "5-inch diameter wheels for effortless high-speed emergency transit",
      "Elastic polyurethane tread absorbs floor shocks and protects patient comfort",
      "Heavy-duty double ball raceway with dust seal for extended service life",
      "Full braking pedal securely locks wheel rotation and swivel tracking",
      "Antistatic composition dissipates static electricity safely to floor"
    ],
    "specifications": {},
    "price": "Ask for Price",
    "materialDetails": "Heavy duty 5-inch medical swivel castors with total-lock brake pedal. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Wheel Size": "5\"",
      "Wheel Material": "PU / rubber / teflon / nylon",
      "Mounting Type": "7/8\" Pillar / Thread Type",
      "Brake": "With Brake / Without Brake / Centre Locking",
      "Application": "Hospital Cots / Trolleys / Hospital Furniture"
    }
  },
  {
    "id": "mf152-castors-centre-locking",
    "slug": "mf152-castors-centre-locking",
    "modelNumber": "MF152",
    "name": "Centre Locking Castors",
    "category": "Accessories",
    "description": "The Mathurams Central Locking Castors are specialized ICU and critical care mobility wheels linked via an internal hexagonal cam rod mechanism. A single foot pedal at the bed's corner simultaneously controls all four castors for Total Lock, Steer (directional tracking), and Free Swivel.",
    "image": "/images/Product Assets/productsImage/MF152 – Centre Locking  CASTORS.webp",
    "features": [
      "Central locking system operated via integrated hexagonal cam rod",
      "Three-stage pedal action: Total Lock, Directional Steer, and Free Swivel",
      "Enables effortless single-person steering down narrow hospital corridors",
      "Concealed internal linkage prevents dust accumulation and mechanical damage",
      "Heavy-duty precision bearings engineered for intensive care beds"
    ],
    "specifications": {},
    "price": "Ask for Price",
    "materialDetails": "Special central locking system castor wheels for hospital ICU beds. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {
      "Wheel Size": "5\" / 6\"",
      "Wheel Material": "PU / rubber / teflon / nylon",
      "Mounting Type": "Internal Cam-Driven Stem Insertion",
      "Brake": "Centre Locking (Total Lock / Steer / Free)",
      "Application": "Hospital Cots / ICU Beds / Trolleys"
    }
  },
  {
    "id": "mf158-ms-plain-side-rails",
    "slug": "mf158-ms-plain-side-rails",
    "modelNumber": "MF158",
    "customizationNote": "Size and mounting configuration can be customised according to cot requirements.",
    "name": "MS Plain Side Rails",
    "category": "Accessories",
    "description": "The Mathurams MS Plain Side Rails are designed for hospital cots and beds to provide reliable patient fall protection. Manufactured from sturdy mild steel with an epoxy powder-coated finish.",
    "image": "/images/Product Assets/productsImage/MF158 – MS Plain Side Rails.webp",
    "features": [
      "Strong and durable MS construction",
      "Provides dependable side protection for patients",
      "Simple and practical fixed/drop design",
      "Suitable for different hospital cots and beds",
      "Epoxy powder-coated finish matching bed color"
    ],
    "specifications": {
      "Material": "MS",
      "Application": "Hospital Cots / Beds"
    },
    "price": "Ask for Price",
    "materialDetails": "Mild steel plain safety side rails with epoxy powder coated finish for hospital beds. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "detailedSpec": {
      "Finish": "Epoxy Powder Coating",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige",
      "Customization": "Size and mounting configuration can be customised according to cot requirements."
    },
    "needsDetails": false
  },
  {
    "id": "mf130-ot-table",
    "slug": "mf130-ot-table",
    "modelNumber": "MF130",
    "name": "OT Table",
    "category": "OT Equipment",
    "description": "The Mathurams OT Table is designed for versatile patient positioning across a wide range of surgical procedures. The five section stainless steel / C-Arm compatible tabletop, hydraulic height adjustment and precision gear mechanism provide controlled positioning, while the stainless steel construction supports easy cleaning in regular operation theatre use.",
    "image": "/images/Product Assets/productsImage/MF130 – OT Table.webp",
    "features": [
      "Five section stainless steel / C-Arm compatible tabletop",
      "Foot pedal hydraulic height adjustment",
      "Smooth manual gear operated positioning",
      "Built in kidney bridge and perineal cut out",
      "Removable head and foot sections",
      "Four swivel castors with independent locking"
    ],
    "specifications": {
      "Dimension Tabletop": "1885mm L × 530mm W",
      "Table Top": "5 Section SS Top / C-Arm Compatible Top",
      "Operation": "Manual Hydraulic & Gear System",
      "Head & Foot Sections": "Removable",
      "Kidney Bridge": "100 mm",
      "Perineal Cut-Out": "Provided",
      "Mobility": "4 Swivel Castors with Independent Locking",
      "Patient Weight Capacity": "150 Kg Max"
    },
    "price": "Ask for Price",
    "materialDetails": "Heavy duty 5-section stainless steel hydraulic operation theatre surgical table. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "functions": [
      "① Height Adjustment : w/o mattress 750-1000mm",
      "② Trendelenburg : 30°",
      "③ Reverse Trendelenburg : 25°",
      "④ Lateral Tilt : 20° (Left, Right)",
      "⑤ Backrest Adjustment : 0 to 75°",
      "⑥ Lithotomy : through thigh pad 360°, up/down",
      "⑦ Flex & Reflex : 35° / 90°",
      "⑧ Chair Position : 80°"
    ],
    "detailedSpec": {}
  },
  {
    "id": "mf133-ot-light",
    "slug": "mf133-ot-light",
    "modelNumber": "MF133",
    "name": "OT Light",
    "category": "OT Equipment",
    "description": "The Mathurams OT Light is a ceiling mounted LED surgical light designed to provide high intensity, shadow reduced illumination for operation theatres. The adjustable dome and arm movement allow convenient positioning of the light according to surgical requirements.",
    "image": "/images/Product Assets/productsImage/MF133 – OT Light.webp",
    "features": [
      "Ceiling mounted LED surgical light",
      "Shadow reduced, high intensity illumination",
      "Four reflector cylindrical dome with 88 total reflectors",
      "Adjustable light intensity",
      "Arm movement and dome tilting",
      "Low power consumption with 50,000 hours LED lifespan",
      "Sterilisable, detachable focus-adjustable handle"
    ],
    "specifications": {
      "LED Configuration": "White & Yellow LEDs – 44 Nos. each",
      "Lux Output": "1,20,000 + 1,20,000 ± 5%",
      "Colour Temperature": "3800–4200 K",
      "Field Diameter": "150–160 mm",
      "Temperature Rise": "3–5°C from Ambient",
      "LED Life": "50,000 Hours",
      "Reflectors": "88 Reflectors",
      "Dome": "Laminar Flow Compatible Cylindrical Dome",
      "Power Supply": "SMPS Adapter",
      "Filters": "Heat Resistant & Colour Corrective",
      "Handle": "Sterilisable, Detachable & Focus Adjustable"
    },
    "price": "Ask for Price",
    "materialDetails": "Shadowless medical LED ceiling operating light for surgery rooms. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {}
  },
  {
    "id": "mf141-vertical-autoclave",
    "slug": "mf141-vertical-autoclave",
    "modelNumber": "MF141",
    "name": "Vertical Autoclave",
    "category": "OT Equipment",
    "description": "The Mathurams Vertical Autoclave is designed for steam sterilisation of medical instruments and materials in hospitals, laboratories and healthcare facilities. Its stainless steel construction with Argon Arc welding provides a smooth, durable and corrosion resistant body, while separate safety and pressure control systems support reliable operation.",
    "image": "/images/Product Assets/productsImage/MF141 –   Vertical Autoclave.webp",
    "features": [
      "Stainless steel body with Argon Arc welded construction",
      "Separate safety valves for inner and outer chambers",
      "Separate pressure gauges for both chambers",
      "Air and condensate vents for effective steam penetration",
      "Water outlet for convenient draining",
      "Heavy duty SS lid with tightening knobs",
      "Stainless steel nuts, bolts and screws for non corrosion and safety"
    ],
    "specifications": {
      "Overall Dimension": "1500 mm H × 740 mm W × 700 mm D",
      "Chamber Size Options": "16\" × 24\" / 12\" × 20\"",
      "Material": "Stainless Steel",
      "Power Supply": "220–250 V AC",
      "Power Consumption": "6 kW (2 × 3 kW)",
      "Inner Chamber": "Pressure Gauge + Adjustable Pressure Valve + Safety Valve",
      "Boiling Chamber": "Pressure Gauge + Safety Valve",
      "Water Inlet & Outlet": "Provided",
      "Steam Outlet": "Provided",
      "Air & Condensate Vents": "Provided"
    },
    "price": "Ask for Price",
    "materialDetails": "Vertical stainless steel pressure steam sterilizer for surgical clinic instruments. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {}
  },
  {
    "id": "mf142-horizontal-autoclave",
    "slug": "mf142-horizontal-autoclave",
    "modelNumber": "MF142",
    "name": "Horizontal Autoclave",
    "category": "OT Equipment",
    "description": "The Mathurams Horizontal Autoclave is designed for high-capacity steam sterilisation in hospitals, laboratories and healthcare facilities. Its SS 304 / SS 316 chamber construction, steam-jacketed design and automated safety controls provide reliable sterilisation for demanding clinical applications.",
    "image": "/images/Product Assets/productsImage/MF142 –  Horizontal Autoclave.webp",
    "features": [
      "SS 304 / SS 316 inner and outer chambers",
      "Steam jacketed construction for efficient sterilisation",
      "Leak proof Argon Arc welded construction",
      "Heavy duty radial locking lid",
      "Multiport valve controlled sterilisation cycle",
      "Automatic pressure control and low water cut-off",
      "Digital temperature indication",
      "Insulated construction to minimise thermal loss"
    ],
    "specifications": {
      "Inner & Outer Chamber": "SS 304 / SS 316",
      "Jacket": "Rolled Stainless Steel Sheet",
      "Welding": "Argon Arc Welding",
      "Hydraulic Test Pressure": "Up to 45 PSI",
      "Temperature Indicator": "Digital / Analog",
      "Pressure Gauge": "Provided",
      "Water Level Indicator": "Provided",
      "Low Water Cut-Off": "Automatic",
      "Pressure Control": "Automatic",
      "Vacuum Breaker": "Provided",
      "Sterilisation Control": "Multi-Port Valve",
      "Power Supply": "440 V, 3 Phase",
      "Power Consumption": "18 kW Max depending on models"
    },
    "price": "Ask for Price",
    "materialDetails": "High capacity cylindrical horizontal autoclave steam sterilizer. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {}
  },
  {
    "id": "mf143-anaesthesia-machine",
    "slug": "mf143-anaesthesia-machine",
    "modelNumber": "MF143",
    "name": "Anaesthesia Machine",
    "category": "OT Equipment",
    "description": "The Mathurams Anaesthesia Machine is designed for controlled delivery of medical gases and anaesthetic agents during surgical procedures. The system incorporates essential pressure regulation, flow control and oxygen safety mechanisms, with provisions for breathing circuits, vaporisers and ventilator connectivity.",
    "image": "/images/Product Assets/productsImage/MF143 –  Anaesthesia Machine.webp",
    "features": [
      "O₂ and N₂O gas delivery system",
      "Pin index cylinder connections",
      "Oxygen failure warning system",
      "Nitrous oxide safety locking system",
      "Oxygen flush facility",
      "Provision for CO₂ absorber",
      "Vaporiser and ventilator connectivity",
      "Antistatic castors with braking system",
      "MS trolley with powder-coated finish"
    ],
    "specifications": {
      "Pipeline Inlet Pressure": "O₂: 2.7–6 Bar / N₂O: 2.7–6 Bar / Air: 2.7–6 Bar (Optional)",
      "Cylinder Connection": "4 Pin-Index Yokes – 2 O₂ + 2 N₂O",
      "Flowmeter Range": "O₂: 0–10 L/min / N₂O: 0–12 L/min / Air: 0–12 L/min (Optional)",
      "Oxygen Safety": "Oxygen Failure Warning Device",
      "Oxygen Flush": "Up to 55 L/min",
      "Pressure Relief Valve": "Set at 20 kPa",
      "Breathing Circuit": "Standard Magill’s Circuit",
      "Vaporiser": "Goldman Halothane Vaporiser",
      "Cylinder Capacity": "10 L Water Capacity",
      "Pressure Gauges": "50 mm Dia."
    },
    "price": "Ask for Price",
    "materialDetails": "Advanced hospital surgical anesthesia gas delivery workstation trolley with vaporiser mounts. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {}
  },
  {
    "id": "mf144-multiparameter-monitor",
    "slug": "mf144-multiparameter-monitor",
    "modelNumber": "MF144",
    "name": "Multiparameter Monitor",
    "category": "OT Equipment",
    "description": "The Mathurams Multiparameter Monitor is designed for continuous monitoring of essential patient vital parameters in operation theatres, intensive care units and recovery rooms. It provides high-contrast, real-time waveform and numeric display of physiological parameters for adult, pediatric and neonatal patients.",
    "image": "/images/Product Assets/productsImage/MF144 –  Multiparameter Monitor.webp",
    "features": [
      "Simultaneous monitoring of ECG, NIBP, SpO₂, Respiration and Temperature",
      "High-resolution color TFT display with multi-lead ECG waveform viewing",
      "Visual and audible multi-level alarms for vital parameters",
      "Suitable for adult, pediatric and neonatal monitoring",
      "Integrated rechargeable backup battery",
      "Optional end-tidal CO₂ (EtCO₂) monitoring capability"
    ],
    "specifications": {
      "Parameters": "ECG / NIBP / SpO₂ / Respiration / Temperature",
      "Optional Parameter": "EtCO₂",
      "Screen Size": "10.4\" Colour TFT / 12\" Colour TFT",
      "Patient Type": "Adult / Pediatric",
      "Display": "Colour TFT"
    },
    "price": "Ask for Price",
    "materialDetails": "High-resolution medical monitor displaying ECG, SPO2, TEMP, NIBP, and RESP parameters. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {}
  },
  {
    "id": "mf154-suction-apparatus",
    "slug": "mf154-suction-apparatus",
    "modelNumber": "MF154",
    "name": "Suction Apparatus",
    "category": "OT Equipment",
    "description": "The Mathurams Suction Apparatus is designed for the controlled removal of fluids and secretions during medical and surgical procedures. Its compact, mobile trolley construction with high-capacity collection jars enables convenient use across operation theatres, intensive care units and patient wards.",
    "image": "/images/Product Assets/productsImage/MF154 –  SUCTION APPARATUS.webp",
    "features": [
      "Designed for heavy-duty medical and surgical suction procedures",
      "Calibrated vacuum regulator with analog pressure gauge",
      "High-capacity shatterproof collection jars with overflow safety trap",
      "Quiet, oil-free diaphragm / piston vacuum pump",
      "Mobile castor wheel trolley base for smooth ward transit",
      "Easy to clean, disinfect and maintain"
    ],
    "specifications": {
      "Operation": "Electric 230VAC 5 Amps",
      "Vacuum Control": "Adjustable. Adult -100 to 150mm Hg, Paediatrics 100 to 120 mm Hg, Infants 60 to 80mm Hg",
      "Vacuum Gauge": "Provided",
      "Collection Jars": "Provided",
      "Mobility": "Castor Wheels",
      "Application": "Medical / Surgical Suction"
    },
    "price": "Ask for Price",
    "materialDetails": "High vacuum, high flow surgical suction pump unit with double collection jars. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {}
  },
  {
    "id": "mf155-fogger",
    "slug": "mf155-fogger",
    "modelNumber": "MF155",
    "name": "Fogger",
    "category": "OT Equipment",
    "description": "The Mathurams Fogger is designed for the dispersion of disinfectant solution as an ultra-fine aerosol mist for whole-room and surface sterilization in healthcare environments. It ensures rapid, complete coverage of enclosed spaces including operation theatres, intensive care units and sterile compounding laboratories.",
    "image": "/images/Product Assets/productsImage/MF155 –  FOGGER.webp",
    "features": [
      "Ultra-fine mist aerosol dispersion for 100% room coverage",
      "Designed for airborne and surface microbial disinfection",
      "High-velocity motor for deep area penetration",
      "Corrosion-resistant medical grade solution tank",
      "Compact, lightweight and portable design",
      "Durable construction for frequent hospital sanitization"
    ],
    "specifications": {
      "Application": "Room & Surface Disinfection",
      "Operation": "Electric 230VAC , 5 AMPS",
      "Dispersion": "Fine Mist / Fogging",
      "Solution Tank": "Provided"
    },
    "price": "Ask for Price",
    "materialDetails": "Ultra-low volume (ULV) cold fogger machine for sterilizing operation theaters. Manufactured with high quality raw materials in our ISO certified facility.",
    "moq": "1 Unit",
    "tradeInfo": {
      "moq": "1 Unit",
      "paymentTerms": "L/C, T/T, Western Union",
      "supplyAbility": "150-200 Units/Month",
      "deliveryTime": "7-15 Days",
      "market": "Tamil Nadu & Southern India",
      "warranty": "1 Year Manufacturer Warranty",
      "brand": "Sri Mathurams"
    },
    "needsDetails": false,
    "detailedSpec": {}
  }
];


export function matchesProductSearch(product: MedicalProduct, rawQuery: string): boolean {
  if (!rawQuery || !rawQuery.trim()) return true;

  const query = rawQuery.toLowerCase().trim();
  const cleanQuery = query.replace(/[\s\-_]+/g, ''); // "mf 72" -> "mf72", "hi-lo" -> "hilo"

  const model = product.modelNumber || '';
  const cleanModel = model.toLowerCase().replace(/[\s\-_]+/g, '');

  // 1. Direct model code match (e.g. "mf72", "mf 72", "72", "mf-72")
  if (cleanModel) {
    if (cleanModel === cleanQuery || cleanModel.includes(cleanQuery) || cleanQuery.includes(cleanModel)) {
      return true;
    }
    // If the query is purely digits e.g. "72", match "MF72"
    if (/^\d+$/.test(cleanQuery) && cleanModel.endsWith(cleanQuery)) {
      return true;
    }
  }

  // 2. Multi-token text matching across all fields
  const tokens = query.split(/\s+/).filter(Boolean);
  const searchableText = `${product.name} ${model} ${product.category} ${product.description} ${(product.features || []).join(' ')} ${(product.modelSpecifications || []).join(' ')}`.toLowerCase();

  return tokens.every((token) => {
    const cleanToken = token.replace(/[\s\-_]+/g, '');
    if (cleanModel && cleanModel.includes(cleanToken)) return true;
    // Allow alternate spelling for anesthesia / anaesthesia
    if (token.includes('anaesth') || token.includes('anesth')) {
      return searchableText.includes('anaesth') || searchableText.includes('anesth');
    }
    return searchableText.includes(token);
  });
}

