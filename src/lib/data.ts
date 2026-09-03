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
  description: 'Premium Hospital Furniture & Medical Equipment Manufacturer trusted by hospitals, clinics, and healthcare institutions across Tamil Nadu.',
  url: 'https://srimathuramsmedical.com',
  email: 'info@srimathuramsmedical.com',
  salesEmail: 'sales@srimathuramsmedical.com',
  phone: '+91 98422 12345',
  address: {
    street: 'Plot No. 85, Industrial Estate, Peelamedu',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    postalCode: '641004',
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

export const CATEGORIES: Category[] = [
  {
    "id": "ward-furniture",
    "slug": "ward-furniture",
    "name": "Ward Furniture",
    "description": "Bedside lockers, overbed tables, attender cots, and ward hospital beds.",
    "icon": "/images/Product Assets/Icons/Ward Furniture.webp"
  },
  {
    "id": "icu-critical-care",
    "slug": "icu-critical-care",
    "name": "ICU & Critical Care",
    "description": "Manual and motorized ICU beds with remote control and safety side rails.",
    "icon": "/images/Product Assets/Icons/ICU & Critical Care .webp"
  },
  {
    "id": "emergency-patient-transfer",
    "slug": "emergency-patient-transfer",
    "name": "Emergency & Patient Transfer",
    "description": "Stretcher trolleys, wheelchairs, transfer trolleys and patient shifters.",
    "icon": "/images/Product Assets/Icons/Emergency & Patient Transfer.webp"
  },
  {
    "id": "labour-maternity",
    "slug": "labour-maternity",
    "name": "Labour & Maternity",
    "description": "Baby cradles, remote & manual labor cots, and pediatric beds.",
    "icon": "/images/Product Assets/Icons/Labour & Maternity.webp"
  },
  {
    "id": "examination-consultation",
    "slug": "examination-consultation",
    "name": "Examination & Consultation",
    "description": "Revolving stools, examination couches, gynec tables, and X-ray lobbies.",
    "icon": "/images/Product Assets/Icons/Examination & Consultation.webp"
  },
  {
    "id": "medical-trolleys",
    "slug": "medical-trolleys",
    "name": "Medical Trolleys",
    "description": "Instrument trolleys, Mayo trolleys, ECG carts, crash carts, and linen trolleys.",
    "icon": "/images/Product Assets/Icons/Medical Trolleys.webp"
  },
  {
    "id": "ot-equipment",
    "slug": "ot-equipment",
    "name": "OT Equipment",
    "description": "Operation theater tables, lights, anesthesia machines, foggers, and autoclaves.",
    "icon": "/images/Product Assets/Icons/OT Equipment.webp"
  },
  {
    "id": "ss-furniture-ward-accessories",
    "slug": "ss-furniture-ward-accessories",
    "name": "Stainless Steel Furniture & Ward Accessories",
    "description": "IV stands, foot steps, kick buckets, wash basins, and 3-fold screens.",
    "icon": "/images/Product Assets/Icons/Stainless Steel Furniture & Ward Accessories.webp"
  },
  {
    "id": "accessories",
    "slug": "accessories",
    "name": "Accessories",
    "description": "Hospital mattresses, pillows, side rails, castors, actuators, and control boxes.",
    "icon": "/images/Product Assets/Icons/Accessories.webp"
  },
  {
    "id": "general-furniture",
    "slug": "general-furniture",
    "name": "General Furniture",
    "description": "Waiting area seater chairs, two-tier cots, and closed pharmacy trolleys.",
    "icon": "/images/Product Assets/Icons/General Furniture.webp"
  }
];

export const PRODUCTS: MedicalProduct[] = [
  {
    "id": "mf01-plain-bedside-locker",
    "slug": "mf01-plain-bedside-locker",
    "modelNumber": "MF01",
    "name": "MF01 – Plain Bedside Locker (Cabin Only)",
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
      "Material": "MS / SS",
      "Storage": "1 Cupboard + 1 Open Shelf",
      "Finish": "Epoxy Powder Coating / SS Finish"
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
      "Top": "MS / SS / Wood Top",
      "Mobility": "Bush / Wheels",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige",
      "Optional Accessories": "As per requirement"
    },
    "needsDetails": false
  },
  {
    "id": "mf02-deluxe-bedside-locker",
    "slug": "mf02-deluxe-bedside-locker",
    "modelNumber": "MF02",
    "name": "MF02 – Deluxe Bedside Locker (Cabin + Drawer)",
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
      "Overall Dimension": "16\" L × 16\" W × 30\" H",
      "Material": "MS / SS",
      "Storage": "1 Cupboard + 1 Open Shelf + 1 Drawer",
      "Finish": "Epoxy Powder Coating / SS Finish"
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
      "Top": "MS / SS / Wood / Granite Top",
      "Mobility": "Bush / Wheels",
      "Optional Accessories": "As per requirement",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "needsDetails": false
  },
  {
    "id": "mf03-granite-top-bedside-locker",
    "slug": "mf03-granite-top-bedside-locker",
    "modelNumber": "MF03",
    "name": "MF03 – Granite Top Bedside Locker",
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
      "Storage": "1 Cupboard + 1 Drawer + 1 Open Shelf Storage in Top & Sides",
      "Top": "Granite",
      "Material": "MS",
      "Finish": "Epoxy Powder Coating"
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
      "Mobility": "Bush / Wheels",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige",
      "Optional Accessories": "As per requirement"
    },
    "needsDetails": false
  },
  {
    "id": "mf07-over-bed-table",
    "slug": "mf07-over-bed-table",
    "modelNumber": "MF07",
    "name": "MF07 – Over Bed Table (Manual)",
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
      "Top": "Wood / Fibre / SS",
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
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige",
      "Optional Accessories": "As per requirement"
    },
    "needsDetails": false
  },
  {
    "id": "mf08-over-bed-table",
    "slug": "mf08-over-bed-table",
    "modelNumber": "MF08",
    "name": "MF08 – Over Bed Table (Gear Type)",
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
      "Top": "Wood / Fibre / SS",
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
      "Optional Accessories": "As per requirement"
    },
    "needsDetails": false
  },
  {
    "id": "mf09-over-bed-table",
    "slug": "mf09-over-bed-table",
    "modelNumber": "MF09",
    "name": "MF09 – Over Bed Table (Gas Spring)",
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
    "needsDetails": true
  },
  {
    "id": "mf19-attender-cot",
    "slug": "mf19-attender-cot",
    "modelNumber": "MF19",
    "name": "MF19 – Attender Cot (Plain)",
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
      "Overall Dimension": "72\" L × 24\" W × 18\" H",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Mattress": "Provided",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
    "needsDetails": false
  },
  {
    "id": "mf20-attender-cot",
    "slug": "mf20-attender-cot",
    "modelNumber": "MF20",
    "name": "MF20 – Attender Cot (Deluxe)",
    "category": "Ward Furniture",
    "description": "The Mathurams Deluxe Attender Cot provides a comfortable resting space for patient attendants, with an additional lower shelf included in the Deluxe version for convenient storage.",
    "image": "/images/Product Assets/productsImage/MF20 – Attender Cot.webp",
    "features": [
      "Comfortable attendant resting space",
      "Additional lower storage shelf",
      "Durable hospital-grade construction",
      "Compact design for efficient space utilisation",
      "Easy-to-maintain construction"
    ],
    "specifications": {
      "Overall Dimension": "72\" L × 24\" W × 18\" H",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
    "needsDetails": false
  },
  {
    "id": "mf21-attender-cot",
    "slug": "mf21-attender-cot",
    "modelNumber": "MF21",
    "name": "MF21 – Attender Cot (Single Shelf)",
    "category": "Ward Furniture",
    "description": "The Mathurams Single Shelf Attender Cot provides a comfortable resting space for patient attendants while offering a dedicated lower shelf for convenient storage.",
    "image": "/images/Product Assets/productsImage/MF21 – Attender Cot.webp",
    "features": [
      "Comfortable attendant resting space",
      "Single lower storage shelf",
      "Compact design for efficient space utilisation",
      "Durable and easy-to-maintain construction"
    ],
    "specifications": {
      "Overall Dimension": "72\" L × 24\" W × 18\" H",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "price": "Ask for Price",
    "materialDetails": "Attendant bed cot equipped with a bottom single-shelf rack for storing bags and footwear. Manufactured with high quality raw materials in our ISO certified facility.",
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
    "id": "mf22-attender-cot",
    "slug": "mf22-attender-cot",
    "modelNumber": "MF22",
    "name": "MF22 – Attender Cot (Double Shelf)",
    "category": "Ward Furniture",
    "description": "The Mathurams Double Shelf Attender Cot provides a comfortable resting space for patient attendants with two lower storage shelves for convenient placement of personal belongings and essentials.",
    "image": "/images/Product Assets/productsImage/MF22 – Attender Cot.webp",
    "features": [
      "Comfortable attendant resting space",
      "Two lower storage shelves",
      "Compact design for efficient space utilisation",
      "Durable and easy-to-maintain construction"
    ],
    "specifications": {
      "Overall Dimension": "72\" L × 24\" W × 18\" H",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
    "needsDetails": false
  },
  {
    "id": "mf35-semi-fowler-cot",
    "slug": "mf35-semi-fowler-cot",
    "modelNumber": "MF35",
    "name": "MF35 – Semi Fowler Cot",
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
      "Overall Dimension": "81\" L × 36\" W × 24\" H",
      "Operation": "Manual/ Remote",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "IV Provision": "Provided",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
      "Arms": "MS / SS / ABS",
      "Side Railings": "MS Plain / SS Plain / ABS / Aluminium Collapsible / SS Collapsible",
      "Mobility": "Fixed Legs / Castors",
      "Optional Accessories": "Pillow / Safety Bumpers"
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
    "name": "MF39 – Fowler Cot",
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
      "Overall Dimension": "78\" L × 36\" W × 24\" H",
      "Operation": "Manual Crank / Remote",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "IV Provision": "Provided",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
      "Arms": "MS / SS / ABS",
      "Side Railings": "MS Plain / SS Plain / ABS / Aluminium Collapsible / SS Collapsible",
      "Mobility": "Fixed Legs / Castors",
      "Optional Accessories": "Pillow / Safety Bumpers"
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
    "name": "MF61 – Plain Cot (MS GH Type Leg)",
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
      "Overall Dimension": "73\" L × 36\" W × 24\" H",
      "Material": "MS",
      "Leg Type": "GH Type",
      "Finish": "Epoxy Powder Coating",
      "IV Provision": "Provided",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
      "Optional Accessories": "Pillow"
    },
    "needsDetails": false
  },
  {
    "id": "mf62-plain-cot",
    "slug": "mf62-plain-cot",
    "modelNumber": "MF62",
    "name": "MF62 – Plain Cot (Deluxe – SS Arms)",
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
      "Overall Dimension": "73\" L × 36\" W × 24\" H",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "IV Provision": "Provided",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
      "Arms": "SS / ABS",
      "Side Railings": "MS Plain / SS Plain / Aluminium Collapsible / SS Collapsible",
      "Mobility": "Fixed Legs / Wheels",
      "Optional Accessories": "Pillow / Safety Bumpers"
    },
    "needsDetails": false
  },
  {
    "id": "mf79-attender-cum-chair",
    "slug": "mf79-attender-cum-chair",
    "modelNumber": "MF79",
    "name": "MF79 – Attender Cum Chair (MS)",
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
      "Type": "Attender Cum Chair",
      "Material": "MS",
      "Operation": "Manual Convertible",
      "Finish": "Epoxy Powder Coating",
      "Cushion / Mattress": "Included"
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
    "needsDetails": false
  },
  {
    "id": "mf24-icu-cot-manual",
    "slug": "mf24-icu-cot-manual",
    "modelNumber": "MF24",
    "name": "MF24 – ICU Cot Manual (5 Function)",
    "category": "ICU & Critical Care",
    "description": "The Mathurams 5-Function Manual ICU Cot is designed for intensive care and critical care environments, providing comprehensive patient positioning through a reliable manual crank mechanism. Its robust construction and flexible configuration options make it suitable for varied hospital requirements.",
    "image": "/images/Product Assets/productsImage/MF24 – ICU Cot Manual.webp",
    "features": [
      "Five-function manual operation",
      "Smooth manual crank mechanism",
      "Multiple arm and side railing options",
      "IV provision included",
      "Durable hospital-grade construction",
      "Easy-to-clean surfaces"
    ],
    "specifications": {
      "Overall Dimension": "81\" L × 36\" W",
      "Height with Mattress": "24\"–33\"",
      "Operation": "Manual Crank",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "IV Provision": "Provided",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
      "Arms": "MS / SS / ABS",
      "Side Railings": "MS Plain / SS Plain / ABS / Aluminium Collapsible / SS Collapsible",
      "Wheel Type": "Plain / Central Lock",
      "Optional Accessories": "Pillow / Safety Bumpers"
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
    "name": "MF27 – ICU Cot (3 Function Manual)",
    "category": "ICU & Critical Care",
    "description": "The Mathurams 3-Function Manual ICU Cot is designed for intensive care and critical care environments, providing essential patient positioning through reliable manual crank operation. Its practical configuration supports comfortable patient care while allowing hospitals to select suitable arms, side rails and mobility options.",
    "image": "/images/Product Assets/productsImage/MF27 – ICU Cot 3 Function Manual.webp",
    "features": [
      "Three-function manual operation",
      "Manual crank mechanism",
      "Durable hospital-grade construction",
      "Multiple arm and side railing options",
      "IV provision included",
      "Easy-to-clean construction"
    ],
    "specifications": {
      "Overall Dimension": "81\" L × 36\" W",
      "Height with Mattress": "24\"–33\"",
      "Operation": "Manual Crank",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "IV Provision": "Provided",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
      "Arms": "MS / SS / ABS",
      "Side Railings": "MS Plain / SS Plain / ABS / Aluminium Collapsible / SS Collapsible",
      "Wheel Type": "Plain / Central Lock",
      "Optional Accessories": "Pillow / Safety Bumpers"
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
    "name": "MF30 – ICU Cot Remote",
    "category": "ICU & Critical Care",
    "description": "The Mathurams Remote ICU Cot combines convenient electrically powered patient positioning with durable hospital-grade construction. It is available in 3-Function and 5-Function configurations, allowing hospitals to select the level of positioning control suited to their requirements.",
    "image": "/images/Product Assets/productsImage/MF30 – ICU Cot Remote.webp",
    "features": [
      "Wired remote operation",
      "Available in 3-Function and 5-Function configurations",
      "Smooth electric positioning",
      "Multiple arm and side railing options",
      "IV provision included",
      "Durable and easy-to-clean construction"
    ],
    "specifications": {
      "Overall Dimension": "81\" L × 36\" W",
      "Height with Mattress": "24\"–33\"",
      "Operation": "Wired Remote",
      "IV Provision": "Provided",
      "Mattress": "4” Mattress Provided"
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
      "② Knee/Leg Rise — Adjustable",
      "③ Height Adjustment — Remote"
    ]
  },
  {
    "id": "mf38-trolley-cum-cot",
    "slug": "mf38-trolley-cum-cot",
    "modelNumber": "MF38",
    "name": "MF38 – Trolley Cum Cot",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams Trolley Cum Cot",
    "image": "/images/Product Assets/productsImage/MF38 – Trolley Cum Cot.webp",
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
      "Overall Dimension": "78\" L × 31\" W × 24-33” H",
      "Operation": "Manual Crank",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "IV Provision": "Provided",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
      "Side Railings": "MS Plain / SS Plain / Aluminium Collapsible",
      "Optional Accessories": "Pillow / Safety Bumpers"
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
    "name": "MF43 – Stretcher Trolley (MS)",
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
      "Material": "MS / SS",
      "Stretcher Top": "Detachable",
      "IV Provision": "Available",
      "Cylinder Provision": "Available",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
      "Side Railings": "MS Plain / SS Plain / Aluminium Collapsible / SS Collapsible",
      "Backrest": "Optional",
      "Optional Accessories": "Pillow / Safety Bumpers"
    },
    "needsDetails": false
  },
  {
    "id": "mf44-stretcher-trolley",
    "slug": "mf44-stretcher-trolley",
    "modelNumber": "MF44",
    "name": "MF44 – Stretcher Trolley (SS)",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams SS Stretcher Trolley is constructed with surgical-grade stainless steel for safe, sterile and stable patient transportation within operating theatres, emergency wards and procedure rooms.",
    "image": "/images/Product Assets/productsImage/MF44 – Stretcher Trolley.webp",
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
      "Material": "SS",
      "Stretcher Top": "Detachable",
      "IV Provision": "Available",
      "Cylinder Provision": "Available",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige",
      "Finish": "SS Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "Full stainless steel stretcher trolley featuring a detachable top stretcher for patient transfers. Manufactured with high quality raw materials in our ISO certified facility.",
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
      "Side Railings": "MS Plain / SS Plain / Aluminium Collapsible / SS Collapsible",
      "Backrest": "Optional",
      "Optional Accessories": "Pillow / Safety Bumpers"
    },
    "needsDetails": false
  },
  {
    "id": "mf45-stretcher-trolley",
    "slug": "mf45-stretcher-trolley",
    "modelNumber": "MF45",
    "name": "MF45 – Stretcher Trolley (Hi-Lo)",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams Hi-Lo Stretcher is designed for patient transportation with the added advantage of height adjustment and backrest positioning, allowing caregivers to set the stretcher at a convenient level for patient handling and transfer. Its adjustable height provides greater flexibility during patient movement between beds, treatment areas and procedure rooms, while the backrest can be raised to support different patient positions.",
    "image": "/images/Product Assets/productsImage/MF45 – Stretcher Trolley.webp",
    "features": [
      "Height-adjustable stretcher design",
      "Adjustable backrest for patient positioning",
      "Manual crank operation",
      "Stable construction for patient transportation",
      "Multiple side railing options",
      "Designed for convenient patient handling and transfer"
    ],
    "specifications": {
      "Overall Dimension": "78\" L × 24\" W",
      "Height Adjustment": "26\"–34\"",
      "Operation": "Manual Crank",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
      "Side Railings": "SS Plain / Aluminium Collapsible / ABS",
      "IV Provision": "Optional",
      "Cylinder Provision": "Optional",
      "Optional Accessories": "Pillow / Safety Bumpers"
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
    "name": "MF49 – Wheel Chair (MS Foldable)",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams MS Foldable Wheelchair is designed to provide convenient mobility and patient transportation within hospitals, healthcare facilities and other care environments. Its foldable construction allows the wheelchair to be compactly stored and transported when not in use, while the MS frame provides a durable structure for regular use.",
    "image": "/images/Product Assets/productsImage/MF49 – Wheel Chair.webp",
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
    "needsDetails": false
  },
  {
    "id": "mf50-wheel-chair",
    "slug": "mf50-wheel-chair",
    "modelNumber": "MF50",
    "name": "MF50 – Wheel Chair (MS)",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams MS Wheelchair is designed to provide reliable and comfortable patient mobility within hospitals and healthcare facilities. Its sturdy mild-steel frame with epoxy powder coating offers durability and dependable support for routine patient transport.",
    "image": "/images/Product Assets/productsImage/MF50 – Wheel Chair.webp",
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
      "Variants": "MS / SS / SS Heavy",
      "Material": "MS",
      "Finish": "Epoxy Powder Coating"
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
    "needsDetails": false
  },
  {
    "id": "mf51-wheel-chair",
    "slug": "mf51-wheel-chair",
    "modelNumber": "MF51",
    "name": "MF51 – Wheel Chair (SS)",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams Wheelchair is designed to provide reliable and comfortable patient mobility within hospitals, healthcare facilities and other care environments. Available in MS, SS and SS Heavy variants, the wheelchair provides different construction choices to suit varying usage requirements. The SS variants offer enhanced corrosion resistance, easy maintenance and long-term durability, while the SS Heavy variant provides a heavier-duty construction for applications requiring additional structural strength.",
    "image": "/images/Product Assets/productsImage/MF51 – Wheel Chair.webp",
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
      "Variants": "MS / SS / SS Heavy",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "Stainless steel non-foldable wheelchair, completely rust-proof and easy to sanitise. Manufactured with high quality raw materials in our ISO certified facility.",
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
    "id": "mf52-wheel-chair",
    "slug": "mf52-wheel-chair",
    "modelNumber": "MF52",
    "name": "MF52 – Wheel Chair (SS Heavy)",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams SS Heavy Wheelchair is a heavy-duty patient mobility solution constructed from reinforced stainless steel. Engineered for high load capacity and demanding clinical usage, it provides exceptional structural stability and long-term corrosion resistance.",
    "image": "/images/Product Assets/productsImage/MF52 – Wheel Chair.webp",
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
      "Variants": "MS / SS / SS Heavy",
      "Material": "SS Heavy Duty",
      "Finish": "SS Finish"
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
    "needsDetails": false
  },
  {
    "id": "mf66-transfer-trolley",
    "slug": "mf66-transfer-trolley",
    "modelNumber": "MF66",
    "name": "MF66 – Transfer Trolley (MS)",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams Transfer Trolley is designed for controlled patient transfer between sterile and non-sterile hospital areas. Its detachable and transferable stretcher top allows the patient-supporting section to move between trolley bases, helping maintain separation between different hospital zones during transfer. Available in MS and SS variants, hospitals can select the construction best suited to their requirements. The SS variant offers enhanced corrosion resistance, easier cleaning and long-term durability, particularly for areas requiring frequent cleaning.",
    "image": "/images/Product Assets/productsImage/MF66 – Transfer Trolley.webp",
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
      "Variants": "MF 66 – MS / MF 67 – SS",
      "Material": "MS / SS",
      "Stretcher Top": "Detachable / Transferable",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "price": "Ask for Price",
    "materialDetails": "Mild steel patient transfer trolley featuring drop-down safety side rails. Manufactured with high quality raw materials in our ISO certified facility.",
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
      "Stretcher Top": "Plain / Head Rise",
      "Side Railings": "MS Plain / SS Plain / Aluminium Collapsible / SS Collapsible",
      "IV Provision": "Optional",
      "Cylinder Provision": "Optional",
      "Optional Accessories": "Pillow / Safety Bumpers"
    },
    "needsDetails": false
  },
  {
    "id": "mf67-transfer-trolley",
    "slug": "mf67-transfer-trolley",
    "modelNumber": "MF67",
    "name": "MF67 – Transfer Trolley (SS)",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams SS Transfer Trolley is designed for sterile-zone patient transfers in operating theatres and intensive care suites, featuring a full stainless-steel transferable stretcher top and chassis for maximum hygiene.",
    "image": "/images/Product Assets/productsImage/MF67 – Transfer Trolley.webp",
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
      "Variants": "MF 66 – MS / MF 67 – SS",
      "Material": "SS",
      "Stretcher Top": "Detachable / Transferable",
      "Finish": "SS Finish",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
      "Stretcher Top": "Plain / Head Rise",
      "Side Railings": "MS Plain / SS Plain / Aluminium Collapsible / SS Collapsible",
      "IV Provision": "Optional",
      "Cylinder Provision": "Optional",
      "Optional Accessories": "Pillow / Safety Bumpers"
    },
    "needsDetails": false
  },
  {
    "id": "mf68-transfer-trolley",
    "slug": "mf68-transfer-trolley",
    "modelNumber": "MF68",
    "name": "MF68 – Transfer Trolley (Hi-Lo MS)",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams Hi-Lo Transfer Trolley combines controlled patient transfer with height-adjustable positioning, allowing caregivers to adjust the trolley height for better alignment with beds and other patient-support surfaces during transfers. Its detachable and transferable stretcher top supports movement between sterile and non-sterile hospital areas, while the Hi-Lo mechanism provides additional flexibility during patient handling. Available in MS and SS variants, with the SS version providing enhanced corrosion resistance, easier cleaning and long-term durability.",
    "image": "/images/Product Assets/productsImage/MF68 – Transfer Trolley.webp",
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
      "Height": "24-36”",
      "Operation": "Manual",
      "Variants": "MF 68 – MS / MF 69 – SS",
      "Material": "MS / SS",
      "Stretcher Top": "Detachable / Transferable",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
      "Stretcher Top": "Plain / Head Rise",
      "Side Railings": "MS Plain / SS Plain / Aluminium Collapsible / SS Collapsible",
      "IV Provision": "Optional",
      "Cylinder Provision": "Optional",
      "Optional Accessories": "Pillow / Safety Bumpers"
    },
    "needsDetails": false,
    "functions": [
      "① Height Adjustment — Hi-Lo"
    ]
  },
  {
    "id": "mf69-transfer-trolley",
    "slug": "mf69-transfer-trolley",
    "modelNumber": "MF69",
    "name": "MF69 – Transfer Trolley (Hi-Lo SS)",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams Hi-Lo Transfer Trolley (SS) provides height-adjustable patient alignment with beds and operating tables, built in full stainless steel for sterile environments requiring rigorous hygiene and frequent cleaning.",
    "image": "/images/Product Assets/productsImage/MF69 – Transfer Trolley.webp",
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
      "Height": "24-36”",
      "Operation": "Manual",
      "Variants": "MF 68 – MS / MF 69 – SS",
      "Material": "SS",
      "Stretcher Top": "Detachable / Transferable",
      "Finish": "SS Finish",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "price": "Ask for Price",
    "materialDetails": "Premium height adjustable stainless steel patient transfer trolley with central lock. Manufactured with high quality raw materials in our ISO certified facility.",
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
      "Stretcher Top": "Plain / Head Rise",
      "Side Railings": "MS Plain / SS Plain / Aluminium Collapsible / SS Collapsible",
      "IV Provision": "Optional",
      "Cylinder Provision": "Optional",
      "Optional Accessories": "Pillow / Safety Bumpers"
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
    "name": "MF115 – Patient Shifter (Aluminium)",
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
      "Overall Dimension": "24\" L × 24\" W × 34\" H"
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
    "needsDetails": false
  },
  {
    "id": "mf36-baby-cradle",
    "slug": "mf36-baby-cradle",
    "modelNumber": "MF36",
    "name": "MF36 – Baby Cradle (MS)",
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
      "Overall Dimension": "27.25\" L × 18\" W × 38\" H",
      "Material": "MS",
      "Finish": "Epoxy Powder Coating",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
    "needsDetails": false
  },
  {
    "id": "mf37-baby-cradle",
    "slug": "mf37-baby-cradle",
    "modelNumber": "MF37",
    "name": "MF37 – Baby Cradle (SS)",
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
      "Overall Dimension": "27.25\" L × 18\" W × 38\" H",
      "Material": "SS",
      "Finish": "SS Finish",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
    "needsDetails": false
  },
  {
    "id": "mf70-ss-remote-labor-cot",
    "slug": "mf70-ss-remote-labor-cot",
    "modelNumber": "MF70",
    "name": "MF70 – SS Remote Labor Cot (V-Type)",
    "category": "Labour & Maternity",
    "description": "The Mathurams SS Remote Labour Cot – V Type is designed to support patient positioning and caregiver access during labour and maternity procedures. Its V-type design provides a dedicated configuration for obstetric care, while remote-controlled adjustment allows convenient positioning without manual crank operation. The stainless-steel construction provides enhanced corrosion resistance, easy cleaning and long-term durability, making it well suited for maternity and labour care environments where hygiene and frequent cleaning are important.",
    "image": "/images/Product Assets/productsImage/MF70 – SS Remote Labor Cot.webp",
    "features": [
      "V-type labour cot design",
      "Wired remote operation",
      "Electrically adjustable body section",
      "Adjustable head section",
      "Retractable leg section",
      "Provision for adjustable knee crutches",
      "Full SS construction",
      "Corrosion-resistant and easy-to-clean surfaces",
      "Mattress included"
    ],
    "specifications": {
      "Overall Dimension": "72\" L × 30\" W × 30\" H",
      "Type": "V Type",
      "Operation": "Wired Remote",
      "Material": "SS",
      "Finish": "SS Finish",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "price": "Ask for Price",
    "materialDetails": "Motorized electric stainless steel delivery bed with a V-shaped leg support layout. Manufactured with high quality raw materials in our ISO certified facility.",
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
      "Knee Crutches": "Height & Width Adjustable",
      "IV Provision": "Optional",
      "Optional Accessories": "Pillow"
    },
    "needsDetails": false,
    "functions": [
      "① Head Section Rise — 0°–30°",
      "② Body Section Rise — 0°–70°",
      "③ Leg Section — Retractable"
    ]
  },
  {
    "id": "mf71-ss-remote-labor-cot",
    "slug": "mf71-ss-remote-labor-cot",
    "modelNumber": "MF71",
    "name": "MF71 – SS Remote Labor Cot (Height Up & Down)",
    "category": "Labour & Maternity",
    "description": "The Mathurams SS Remote Labour Cot – Height Adjustable is designed for labour and maternity care, providing electrically controlled height adjustment to support convenient patient handling and caregiver access during procedures. The adjustable working height allows the cot to be positioned according to procedural and caregiver requirements. The stainless-steel construction offers enhanced corrosion resistance, easy cleaning and long-term durability, making it suitable for maternity environments requiring frequent cleaning and maintenance.",
    "image": "/images/Product Assets/productsImage/MF71 – SS Remote Labor Cot.webp",
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
      "Height Adjustment": "26\"–30\"",
      "Operation": "Wired Remote",
      "Material": "SS",
      "Finish": "SS Finish",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
      "Knee Crutches": "Height & Width Adjustable",
      "IV Provision": "Optional",
      "Optional Accessories": "Pillow"
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
    "id": "mf72-manual-labor-cot-ss",
    "slug": "mf72-manual-labor-cot-ss",
    "modelNumber": "MF72",
    "name": "MF72 – Manual Labor Cot SS (V-Type)",
    "category": "Labour & Maternity",
    "description": "The Mathurams SS Manual Labour Cot – V Type is designed to support patient positioning and caregiver access during labour and maternity procedures. Its V-type design is configured for obstetric care, while the manual operating mechanism provides reliable positioning without dependence on electrical power. The stainless-steel construction offers enhanced corrosion resistance, easy cleaning and long-term durability, making it suitable for maternity and labour care environments.",
    "image": "/images/Product Assets/productsImage/MF72 – Manual Labor Cot SS.webp",
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
      "Type": "V Type",
      "Operation": "Manual",
      "Material": "SS",
      "Finish": "SS Finish",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
      "Knee Crutches": "Height & Width Adjustable",
      "IV Provision": "Optional",
      "Optional Accessories": "Pillow"
    },
    "needsDetails": false,
    "functions": [
      "① Head Section Rise — 0°–30°",
      "② Body Section Rise — 0°–70°",
      "③ Leg Section — Retractable"
    ]
  },
  {
    "id": "mf73-manual-labor-cot-ss",
    "slug": "mf73-manual-labor-cot-ss",
    "modelNumber": "MF73",
    "name": "MF73 – Manual Labor Cot SS (Height Up & Down)",
    "category": "Labour & Maternity",
    "description": "The Mathurams SS Manual Labour Cot – Height Adjustable is designed for labour and maternity care, combining essential patient positioning with manual height adjustment for convenient patient handling and caregiver access during procedures. Its adjustable working height allows the cot to be positioned according to procedural requirements, while the retractable leg section and adjustable knee crutches support different stages of maternity care. The stainless-steel construction provides enhanced corrosion resistance, easy cleaning and long-term durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF73 – Manual Labor Cot SS.webp",
    "features": [
      "Manual height-adjustable design",
      "Adjustable head and body sections",
      "Retractable leg section",
      "Height and width adjustable knee crutches",
      "Full stainless-steel construction",
      "Corrosion-resistant and easy-to-clean surfaces",
      "Mattress included"
    ],
    "specifications": {
      "Overall Dimension": "72\" L × 30\" W",
      "Height Adjustment": "26\"–30\"",
      "Operation": "Manual",
      "Material": "SS",
      "Finish": "SS Finish",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "price": "Ask for Price",
    "materialDetails": "Manual obstetric delivery table with hydraulic / mechanical gear height adjustment. Manufactured with high quality raw materials in our ISO certified facility.",
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
      "Knee Crutches": "Height & Width Adjustable",
      "IV Provision": "Optional",
      "Optional Accessories": "Pillow"
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
    "id": "mf90-pediatric-cot",
    "slug": "mf90-pediatric-cot",
    "modelNumber": "MF90",
    "name": "MF90 – Pediatric Cot (MS)",
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
      "Overall Dimension": "54\" L × 30\" W × 22\" H",
      "Material": "MS",
      "Finish": "Epoxy Powder Coating",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
      "Optional Accessories": "Pillow, IV Provision"
    },
    "needsDetails": false
  },
  {
    "id": "mf114-pediatric-fowlers-cot",
    "slug": "mf114-pediatric-fowlers-cot",
    "modelNumber": "MF114",
    "name": "MF114 – Pediatric Fowler's Cot (MS)",
    "category": "Labour & Maternity",
    "description": "The Mathurams Pediatric Fowler's Cot is designed for pediatric patient care, featuring adjustable backrest and leg elevate positioning with child-protective safety side rails.",
    "image": "/images/Product Assets/productsImage/MF114 – Pediatric Fowler's Cot.webp",
    "features": [
      "Designed specifically for pediatric patient care",
      "Compact dimensions suitable for children",
      "Protective cot design for enhanced safety",
      "Durable MS construction",
      "Easy-to-clean and maintain surfaces",
      "Mattress included"
    ],
    "specifications": {
      "Overall Dimension": "54\" L × 30\" W × 22\" H",
      "Material": "MS",
      "Finish": "Epoxy Powder Coating",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "price": "Ask for Price",
    "materialDetails": "Pediatric fowler cot featuring two manual cranks for backrest and knee-rest adjustment. Manufactured with high quality raw materials in our ISO certified facility.",
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
      "② Knee/Leg Rise — Adjustable"
    ],
    "detailedSpec": {
      "Optional Accessories": "Pillow, IV Provision"
    }
  },
  {
    "id": "mf13-ss-revolving-stool",
    "slug": "mf13-ss-revolving-stool",
    "modelNumber": "MF13",
    "name": "MF13 – SS Revolving Stool (Cushion)",
    "category": "Examination & Consultation",
    "description": "The Mathurams SS Revolving Stool is designed to provide comfortable and flexible seating for healthcare professionals during examinations, procedures and routine clinical activities. Its soft cushioned seat and adjustable height allow users to set a comfortable working position.",
    "image": "/images/Product Assets/productsImage/MF13 – SS Revolving Stool.webp",
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
      "Material": "SS",
      "Top": "Soft Cushion",
      "Finish": "SS Finish"
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
    "needsDetails": false
  },
  {
    "id": "mf14-ss-revolving-stool",
    "slug": "mf14-ss-revolving-stool",
    "modelNumber": "MF14",
    "name": "MF14 – SS Revolving Stool (SS Top)",
    "category": "Examination & Consultation",
    "description": "The Mathurams SS Revolving Stool with SS Top is designed to provide stable and flexible seating for healthcare professionals during examinations, procedures and routine clinical activities. Its stainless-steel top and height-adjustable revolving design offer a practical and easy-to-maintain seating solution for healthcare environments.",
    "image": "/images/Product Assets/productsImage/MF14 – SS Revolving Stool.webp",
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
      "Material": "SS",
      "Top": "SS",
      "Finish": "SS Finish"
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
    "needsDetails": false
  },
  {
    "id": "mf15-ss-revolving-stool",
    "slug": "mf15-ss-revolving-stool",
    "modelNumber": "MF15",
    "name": "MF15 – SS Revolving Stool (With Backrest)",
    "category": "Examination & Consultation",
    "description": "The Mathurams SS Revolving Stool with Backrest Cushion provides comfortable and flexible seating for healthcare professionals during examinations, procedures and routine clinical activities. The cushioned seat and backrest provide added comfort, while the height-adjustable revolving design allows convenient positioning during use.",
    "image": "/images/Product Assets/productsImage/MF15 – SS Revolving Stool.webp",
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
      "Material": "SS",
      "Seat & Backrest": "Soft Cushion",
      "Finish": "SS Finish"
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
    "needsDetails": false
  },
  {
    "id": "mf16-ms-revolving-stool",
    "slug": "mf16-ms-revolving-stool",
    "modelNumber": "MF16",
    "name": "MF16 – MS Revolving Stool (Cushion)",
    "category": "Examination & Consultation",
    "description": "The Mathurams MS Revolving Stool with Cushion is designed to provide comfortable and flexible seating for healthcare professionals during examinations, procedures and routine clinical activities. Its cushioned seat and revolving design provide convenient seating while the MS construction offers durability for regular use.",
    "image": "/images/Product Assets/productsImage/MF16 – MS Revolving Stool.webp",
    "features": [
      "Durable MS construction",
      "Soft and comfortable cushioned seat",
      "360° revolving seat",
      "Practical design for clinical use",
      "Easy-to-maintain construction"
    ],
    "specifications": {
      "Material": "MS",
      "Seat": "Soft Cushion",
      "Finish": "Epoxy Powder Coating"
    },
    "price": "Ask for Price",
    "materialDetails": "Epoxy powder coated mild steel revolving stool with high density cushion seat. Manufactured with high quality raw materials in our ISO certified facility.",
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
    "id": "mf17-ms-revolving-stool",
    "slug": "mf17-ms-revolving-stool",
    "modelNumber": "MF17",
    "name": "MF17 – MS Revolving Stool (SS Top)",
    "category": "Examination & Consultation",
    "description": "The Mathurams MS Revolving Stool with SS Top is designed to provide stable and flexible seating for healthcare professionals during examinations, procedures and routine clinical activities. The stainless-steel top offers a smooth, easy-to-clean seating surface, while the MS construction provides durability for regular use.",
    "image": "/images/Product Assets/productsImage/MF17 – MS Revolving Stool.webp",
    "features": [
      "Durable MS construction",
      "Stainless-steel top",
      "360° revolving seat",
      "Smooth and easy-to-clean surface",
      "Practical design for clinical use"
    ],
    "specifications": {
      "Material": "MS",
      "Top": "SS",
      "Finish": "Epoxy Powder Coating"
    },
    "price": "Ask for Price",
    "materialDetails": "Mild steel height adjustable revolving stool featuring a stainless steel seat top. Manufactured with high quality raw materials in our ISO certified facility.",
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
    "id": "mf18-ms-revolving-stool",
    "slug": "mf18-ms-revolving-stool",
    "modelNumber": "MF18",
    "name": "MF18 – MS Revolving Stool (With Backrest)",
    "category": "Examination & Consultation",
    "description": "The Mathurams MS Revolving Stool with Backrest Cushion is designed to provide comfortable and flexible seating for healthcare professionals during examinations, procedures and routine clinical activities. The cushioned seat and backrest provide added comfort, while the revolving design allows convenient movement during use.",
    "image": "/images/Product Assets/productsImage/MF18 – MS Revolving Stool.webp",
    "features": [
      "Durable MS construction",
      "Soft cushioned seat and backrest",
      "360° revolving seat",
      "Comfortable seating for clinical use",
      "Practical and easy-to-maintain design"
    ],
    "specifications": {
      "Material": "MS",
      "Seat & Backrest": "Soft Cushion",
      "Finish": "Epoxy Powder Coating"
    },
    "price": "Ask for Price",
    "materialDetails": "MS revolving stool with high-density foam seat cushion and back support. Manufactured with high quality raw materials in our ISO certified facility.",
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
    "id": "mf64-deluxe-examination-couch",
    "slug": "mf64-deluxe-examination-couch",
    "modelNumber": "MF64",
    "name": "MF64 – Deluxe Examination Couch (Plain Cabinets)",
    "category": "Examination & Consultation",
    "description": "The Mathurams Deluxe Examination Couch (Plain Cabinets) features an adjustable backrest, attached rectangular foot step, and spacious enclosed cabinet storage for clinical supplies.",
    "image": "/images/Product Assets/productsImage/MF64 – Deluxe Examination Couch.webp",
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
      "Backrest": "Adjustable",
      "Material": "MS",
      "Foot Step": "Attached Rectangular Foot Step",
      "Finish": "Epoxy Powder Coating",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige",
      "Storage": "Plain Cabinets"
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
      "Storage": "Plain Cabinets / Cabinets + Drawers",
      "Backrest Operation": "Manual Ratchet / Gas Spring"
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
    "name": "MF65 – Deluxe Examination Couch (Cabinets + Drawers)",
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
      "Backrest": "Adjustable",
      "Material": "MS",
      "Foot Step": "Attached Rectangular Foot Step",
      "Finish": "Epoxy Powder Coating",
      "Mattress": "Included",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
      "Storage": "Plain Cabinets / Cabinets + Drawers",
      "Backrest Operation": "Manual Ratchet / Gas Spring"
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
    "name": "MF80 – Examination Table (Plain)",
    "category": "Examination & Consultation",
    "description": "The Mathurams Drug Trolley is designed for organised storage and convenient distribution of medicines across hospital wards and patient care areas. Its multiple-bin arrangement helps segregate and arrange medications systematically, allowing healthcare staff to access required medicines efficiently during routine rounds. Available in MS and SS Models, the trolley can be configured with single-side or double-side storage arrangements based on capacity requirements.",
    "image": "/images/Product Assets/productsImage/MF80 – Examination Table.webp",
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
      "Small PVC Bins": "30 Nos. per side"
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
    "needsDetails": false
  },
  {
    "id": "mf81-examination-table",
    "slug": "mf81-examination-table",
    "modelNumber": "MF81",
    "name": "MF81 – Examination Table (Head Rise)",
    "category": "Examination & Consultation",
    "description": "The Mathurams Drug Trolley is designed for organised storage and convenient distribution of medicines across hospital wards and patient care areas. Its multiple-bin arrangement helps segregate and arrange medications systematically, allowing healthcare staff to access required medicines efficiently during routine rounds. Available in MS and SS Models, the trolley can be configured with single-side or double-side storage arrangements based on capacity requirements.",
    "image": "/images/Product Assets/productsImage/MF81 – Examination Table.webp",
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
      "Small PVC Bins": "30 Nos. per side"
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
    "needsDetails": true,
    "functions": [
      "① Head Rise — Adjustable Ratchet"
    ]
  },
  {
    "id": "mf82-examination-table",
    "slug": "mf82-examination-table",
    "modelNumber": "MF82",
    "name": "MF82 – Examination Table (Single Door)",
    "category": "Examination & Consultation",
    "description": "The Mathurams Drug Trolley is designed for organised storage and convenient distribution of medicines across hospital wards and patient care areas. Its multiple-bin arrangement helps segregate and arrange medications systematically, allowing healthcare staff to access required medicines efficiently during routine rounds. Available in MS and SS Models, the trolley can be configured with single-side or double-side storage arrangements based on capacity requirements.",
    "image": "/images/Product Assets/productsImage/MF82 – Examination Table.webp",
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
      "Small PVC Bins": "30 Nos. per side"
    },
    "price": "Ask for Price",
    "materialDetails": "Padded examination table with a single storage cabinet door underneath. Manufactured with high quality raw materials in our ISO certified facility.",
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
    "needsDetails": true,
    "functions": [
      "① Head Rise — Adjustable Ratchet"
    ]
  },
  {
    "id": "mf83-examination-table",
    "slug": "mf83-examination-table",
    "modelNumber": "MF83",
    "name": "MF83 – Examination Table (Double Door + 2 Drawers)",
    "category": "Examination & Consultation",
    "description": "The Mathurams Drug Trolley is designed for organised storage and convenient distribution of medicines across hospital wards and patient care areas. Its multiple-bin arrangement helps segregate and arrange medications systematically, allowing healthcare staff to access required medicines efficiently during routine rounds. Available in MS and SS Models, the trolley can be configured with single-side or double-side storage arrangements based on capacity requirements.",
    "image": "/images/Product Assets/productsImage/MF83 – Examination Table.webp",
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
      "Small PVC Bins": "30 Nos. per side"
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
    "needsDetails": true,
    "functions": [
      "① Head Rise — Adjustable Ratchet"
    ]
  },
  {
    "id": "mf93-gynec-examination-couch",
    "slug": "mf93-gynec-examination-couch",
    "modelNumber": "MF93",
    "name": "MF93 – Gynec Examination Couch (MS)",
    "category": "Examination & Consultation",
    "description": "The Mathurams Gynec Examination Couch is designed for gynaecological examinations and procedures, providing comfortable patient positioning along with integrated storage and examination support features. The couch includes lithotomy leg supports with belts, a removable basin, retractable foot step, three drawers and three cupboards, providing a practical all-in-one solution for gynaecological examination areas.",
    "image": "/images/Product Assets/productsImage/MF93 – Gynec Examination Couch.webp",
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
      "Material": "MS",
      "Storage": "3 Drawers + 3 Cupboards",
      "Lithotomy Leg Support": "Provided with Belts",
      "Foot Step": "Retractable",
      "Basin": "Removable",
      "IV Provision": "Provided",
      "Mattress": "Included",
      "Finish": "Epoxy Powder Coating",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
      "Backrest Operation": "Ratchet / Gas Spring / Wired Remote",
      "Mobility": "Fixed / Wheels"
    },
    "needsDetails": false,
    "functions": [
      "① Backrest Rise — Adjustable"
    ]
  },
  {
    "id": "mf94-gynec-examination-couch",
    "slug": "mf94-gynec-examination-couch",
    "modelNumber": "MF94",
    "name": "MF94 – Gynec Examination Couch (MS Remote)",
    "category": "Examination & Consultation",
    "description": "The Mathurams Gynec Examination Couch (Remote) is equipped with motorized remote positioning, lithotomy leg crutches, removable basin, integrated storage drawers, and cupboards for modern obstetric and gynecological suites.",
    "image": "/images/Product Assets/productsImage/MF94 – Gynec Examination Couch.webp",
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
      "Material": "MS",
      "Storage": "3 Drawers + 3 Cupboards",
      "Lithotomy Leg Support": "Provided with Belts",
      "Foot Step": "Retractable",
      "Basin": "Removable",
      "IV Provision": "Provided",
      "Mattress": "Included",
      "Finish": "Epoxy Powder Coating",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige",
      "Operation": "Wired Remote"
    },
    "price": "Ask for Price",
    "materialDetails": "Fully motorized remote-controlled gynecological exam couch with height adjustment. Manufactured with high quality raw materials in our ISO certified facility.",
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
      "Backrest Operation": "Ratchet / Gas Spring / Wired Remote",
      "Mobility": "Fixed / Wheels"
    },
    "needsDetails": false,
    "functions": [
      "① Backrest Rise — Adjustable"
    ]
  },
  {
    "id": "mf95-gynec-examination-table",
    "slug": "mf95-gynec-examination-table",
    "modelNumber": "MF95",
    "name": "MF95 – Gynec Examination Table (MS)",
    "category": "Examination & Consultation",
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
      "Material": "MS",
      "Lithotomy Leg Rest": "Provided with Belts",
      "Mattress": "Included",
      "Finish": "Epoxy Powder Coating",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
    "needsDetails": false
  },
  {
    "id": "mf96-scan-table",
    "slug": "mf96-scan-table",
    "modelNumber": "MF96",
    "name": "MF96 – Scan Table (MS)",
    "category": "Examination & Consultation",
    "description": "The Mathurams Scan Table is designed for diagnostic and scanning procedures, providing a comfortable patient platform with electrically controlled positioning. The wired remote enables convenient height adjustment, while the adjustable backrest supports patient positioning during examinations.",
    "image": "/images/Product Assets/productsImage/MF96 – Scan Table.webp",
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
      "Material": "MS",
      "Mattress": "Included",
      "Finish": "Epoxy Powder Coating",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
    ]
  },
  {
    "id": "mf101-blood-collection-chair",
    "slug": "mf101-blood-collection-chair",
    "modelNumber": "MF101",
    "name": "MF101 – Blood Collection Chair",
    "category": "Examination & Consultation",
    "description": "The Mathurams Blood Collection Chair is designed to provide comfortable and supportive seating for patients during blood collection and other short clinical procedures. Its ergonomic seating arrangement helps maintain a convenient patient position, while the integrated arm support provides a stable surface for blood collection.",
    "image": "/images/Product Assets/productsImage/MF101 – Blood Collection Chair.webp",
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
      "Finish": "Epoxy Powder Coating"
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
    "needsDetails": false
  },
  {
    "id": "mf106-ss-stool",
    "slug": "mf106-ss-stool",
    "modelNumber": "MF106",
    "name": "MF106 – SS Stool",
    "category": "Examination & Consultation",
    "description": "The Mathurams Attendant Stool provides simple and convenient seating for patient attendants in hospital wards and patient rooms. Its compact design allows easy placement beside hospital beds while occupying minimal floor space. Available in MS and SS variants, the SS version offers enhanced corrosion resistance, easy cleaning and long-term durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF106 – SS Stool.webp",
    "features": [
      "Designed for patient attendant seating",
      "Compact and space-efficient design",
      "Available in MS and SS variants",
      "Stable and durable construction",
      "Easy-to-clean and maintain",
      "Suitable for wards and patient rooms"
    ],
    "specifications": {
      "Seat Size": "14\" × 14\" / 16\" × 16\"",
      "Overall Height": "30\"",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
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
    "needsDetails": false
  },
  {
    "id": "mf110-x-ray-lobby",
    "slug": "mf110-x-ray-lobby",
    "modelNumber": "MF110",
    "name": "MF110 – X-Ray Lobby (Double)",
    "category": "Examination & Consultation",
    "description": "The Mathurams X-Ray View Box is designed for clear and convenient viewing of X-ray films in hospitals, clinics and diagnostic centres. It provides a uniformly illuminated viewing surface to assist medical professionals in examining radiographic films. Available in Single, Double and Four View variants, allowing the required number of X-ray films to be viewed based on clinical requirements.",
    "image": "/images/Product Assets/productsImage/MF110 – X-Ray Lobby.webp",
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
      "Viewing Options": "Single / Double / Four View",
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
    "needsDetails": false
  },
  {
    "id": "mf119-x-ray-lobby",
    "slug": "mf119-x-ray-lobby",
    "modelNumber": "MF119",
    "name": "MF119 – X-Ray Lobby (Single)",
    "category": "Examination & Consultation",
    "description": "The Mathurams Single View X-Ray Lobby provides a uniform backlit LED viewing surface for examining individual radiographic films with optimal diagnostic clarity.",
    "image": "/images/Product Assets/productsImage/MF119 – X-Ray Lobby.webp",
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
      "Viewing Options": "Single View",
      "Illumination": "Uniform Backlit Viewing"
    },
    "price": "Ask for Price",
    "materialDetails": "Single panel LED medical X-ray film illuminator/lobby viewer. Manufactured with high quality raw materials in our ISO certified facility.",
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
    "id": "mf142-x-ray-lobby",
    "slug": "mf142-x-ray-lobby",
    "modelNumber": "MF142",
    "name": "MF142 – X-Ray Lobby (Four)",
    "category": "Examination & Consultation",
    "description": "The Mathurams Four View X-Ray Lobby provides quad-panel uniform LED backlit illumination for simultaneously examining multiple radiographic and surgical films.",
    "image": "/images/Product Assets/productsImage/MF142 – X-Ray Lobby.webp",
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
    "id": "mf10-instrument-trolley",
    "slug": "mf10-instrument-trolley",
    "modelNumber": "MF10",
    "name": "MF10 – Instrument Trolley (24 × 18)",
    "category": "Medical Trolleys",
    "description": "The Mathurams SS Instrument Trolley is designed for convenient placement and organised handling of surgical and medical instruments during procedures. Its stainless-steel construction provides a durable, smooth and easy-to-clean surface suitable for healthcare environments.",
    "image": "/images/Product Assets/productsImage/MF10 – Instrument Trolley.webp",
    "features": [
      "Full stainless-steel construction",
      "Smooth, easy-to-clean surface",
      "Compact design for convenient instrument placement",
      "Suitable for operating rooms, procedure rooms and clinical areas"
    ],
    "specifications": {
      "Overall Size": "24\" L × 18\" W",
      "Material": "SS",
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
    "needsDetails": false
  },
  {
    "id": "mf11-instrument-trolley",
    "slug": "mf11-instrument-trolley",
    "modelNumber": "MF11",
    "name": "MF11 – Instrument Trolley (3 × 2)",
    "category": "Medical Trolleys",
    "description": "The Mathurams SS Instrument Trolley (3' × 2') provides a spacious stainless-steel working surface for organized surgical and clinical instrument handling during hospital procedures.",
    "image": "/images/Product Assets/productsImage/MF11 – Instrument Trolley.webp",
    "features": [
      "Full stainless-steel construction",
      "Smooth, easy-to-clean surface",
      "Compact design for convenient instrument placement",
      "Suitable for operating rooms, procedure rooms and clinical areas"
    ],
    "specifications": {
      "Overall Size": "3' × 2'",
      "Material": "SS",
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
    "needsDetails": false
  },
  {
    "id": "mf12-instrument-trolley",
    "slug": "mf12-instrument-trolley",
    "modelNumber": "MF12",
    "name": "MF12 – Instrument Trolley (4 × 2)",
    "category": "Medical Trolleys",
    "description": "The Mathurams SS Instrument Trolley is designed for convenient placement and organised handling of surgical and medical instruments during procedures. Its stainless-steel construction provides a durable, smooth and easy-to-clean surface suitable for healthcare environments.",
    "image": "/images/Product Assets/productsImage/MF12 – Instrument Trolley.webp",
    "features": [
      "Full stainless-steel construction",
      "Smooth, easy-to-clean surface",
      "Spacious working area for instrument placement",
      "Suitable for operating rooms, procedure rooms and clinical areas"
    ],
    "specifications": {
      "Overall Size": "4' × 2'",
      "Material": "SS",
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
    "needsDetails": false
  },
  {
    "id": "mf46-ss-mayos-trolley",
    "slug": "mf46-ss-mayos-trolley",
    "modelNumber": "MF46",
    "name": "MF46 – SS Mayo's Trolley",
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
      "Overall Height": "30\"",
      "Material": "SS 202 / SS 304",
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
    "needsDetails": false
  },
  {
    "id": "mf47-drug-trolley",
    "slug": "mf47-drug-trolley",
    "modelNumber": "MF47",
    "name": "MF47 – Drug Trolley (MS)",
    "category": "Medical Trolleys",
    "description": "The Mathurams Drug Trolley is designed for organised storage and convenient distribution of medicines across hospital wards and patient care areas. Its multiple-bin arrangement helps segregate and arrange medications systematically, allowing healthcare staff to access required medicines efficiently during routine rounds. Available in MS and SS variants, the trolley can be configured with single-side or double-side storage arrangements based on capacity requirements.",
    "image": "/images/Product Assets/productsImage/MF47 – Drug Trolley.webp",
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
      "Material": "MS / SS",
      "Large PVC Bins": "8 Nos.",
      "Small PVC Bins": "30 Nos. per side",
      "Finish": "Epoxy Powder Coating / SS Finish"
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
      "Storage Arrangement": "Single Side / Double Side"
    },
    "needsDetails": false
  },
  {
    "id": "mf57-ss-dressing-trolley",
    "slug": "mf57-ss-dressing-trolley",
    "modelNumber": "MF57",
    "name": "MF57 – SS Dressing Trolley (24 × 18)",
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
      "Overall Dimension": "24\" L × 18\" W",
      "Material": "SS 202 / SS 304",
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
    "needsDetails": false
  },
  {
    "id": "mf58-ecg-trolley",
    "slug": "mf58-ecg-trolley",
    "modelNumber": "MF58",
    "name": "MF58 – ECG Trolley (MS)",
    "category": "Medical Trolleys",
    "description": "The Mathurams ECG Trolley is designed for organised placement and convenient handling of ECG equipment, accessories and consumables during diagnostic procedures. Its three-shelf arrangement provides dedicated space for the ECG recorder and supporting items, while the integrated cable holder helps keep ECG lead cables organised and reduces tangling during use. Available in MS and SS variants, the SS version offers enhanced corrosion resistance, easy cleaning and durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF58 – ECG Trolley.webp",
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
      "Tray Size": "18\" × 18\"",
      "Overall Height": "36\"",
      "Number of Shelves": "3",
      "Material": "MS / SS",
      "Cable Holder": "Provided",
      "Finish": "Epoxy Powder Coating / SS Finish"
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
    "needsDetails": false
  },
  {
    "id": "mf59-ecg-trolley",
    "slug": "mf59-ecg-trolley",
    "modelNumber": "MF59",
    "name": "MF59 – ECG Trolley (MS Z-Type)",
    "category": "Medical Trolleys",
    "description": "The Mathurams Z Type ECG Trolley is designed for organised placement and convenient handling of ECG equipment during diagnostic procedures. Its distinctive Z-type frame provides a compact and practical structure for positioning the trolley alongside the patient, while dedicated shelves provide space for the ECG recorder, accessories and consumables. Available in MS and SS variants, the SS version offers enhanced corrosion resistance, easy cleaning and long-term durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF59 – ECG Trolley.webp",
    "features": [
      "Distinctive Z-type frame design",
      "Dedicated trolley for ECG equipment",
      "Organised storage for ECG recorder and accessories",
      "Integrated ECG lead cable holder",
      "Available in MS and SS variants",
      "Compact design for convenient bedside positioning",
      "SS variant offers corrosion resistance and easy maintenance"
    ],
    "specifications": {
      "Tray Size": "18\" × 18\"",
      "Overall Height": "36\"",
      "Material": "MS / SS",
      "Type": "Z Type",
      "Cable Holder": "Provided",
      "Finish": "Epoxy Powder Coating / SS Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "Z-type designer mild steel ECG trolley with stylish frame and smooth castors. Manufactured with high quality raw materials in our ISO certified facility.",
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
    "id": "mf60-ecg-trolley",
    "slug": "mf60-ecg-trolley",
    "modelNumber": "MF60",
    "name": "MF60 – ECG Trolley (SS)",
    "category": "Medical Trolleys",
    "description": "The Mathurams SS ECG Trolley provides organized 3-tier mobile storage for diagnostic ECG equipment and accessories, crafted in full stainless steel with integrated cable management.",
    "image": "/images/Product Assets/productsImage/MF60 – ECG Trolley.webp",
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
      "Tray Size": "18\" × 18\"",
      "Overall Height": "36\"",
      "Number of Shelves": "3",
      "Material": "SS",
      "Cable Holder": "Provided",
      "Finish": "SS Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "Polished stainless steel ECG machine cart with multiple shelves and drawer. Manufactured with high quality raw materials in our ISO certified facility.",
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
    "id": "mf75-cylinder-trolley",
    "slug": "mf75-cylinder-trolley",
    "modelNumber": "MF75",
    "name": "MF75 – Cylinder Trolley (B Type MS)",
    "category": "Medical Trolleys",
    "description": "The Mathurams B Type Cylinder Trolley is designed for the convenient handling and transportation of B-type medical gas cylinders within hospitals and healthcare facilities. Its compact structure securely supports the cylinder while allowing easy movement between wards, treatment areas and other clinical locations. Available in MS and SS variants, the SS version offers enhanced corrosion resistance, easy cleaning and long-term durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF75 – Cylinder Trolley.webp",
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
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
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
    "needsDetails": false
  },
  {
    "id": "mf76-cylinder-trolley",
    "slug": "mf76-cylinder-trolley",
    "modelNumber": "MF76",
    "name": "MF76 – Cylinder Trolley (B Type SS)",
    "category": "Medical Trolleys",
    "description": "The Mathurams SS B-Type Cylinder Trolley provides secure, corrosion-resistant transport for B-type medical gas cylinders in hospital wards and treatment units.",
    "image": "/images/Product Assets/productsImage/MF76 – Cylinder Trolley.webp",
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
      "Material": "SS",
      "Finish": "SS Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "Stainless steel oxygen cylinder trolley tailored for B-type gas cylinders. Manufactured with high quality raw materials in our ISO certified facility.",
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
    "id": "mf77-cylinder-trolley",
    "slug": "mf77-cylinder-trolley",
    "modelNumber": "MF77",
    "name": "MF77 – Cylinder Trolley (A Type SS)",
    "category": "Medical Trolleys",
    "description": "The Mathurams A Type Cylinder Trolley is designed for convenient and secure transportation of A-type medical gas cylinders within hospitals and healthcare facilities. Its compact construction supports easy handling of the cylinder between wards, treatment areas and other patient care locations. Available in MS and SS variants, the SS version provides enhanced corrosion resistance, easy cleaning and long-term durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF77 – Cylinder Trolley.webp",
    "features": [
      "Designed for A-type medical gas cylinders",
      "Secure cylinder holding arrangement",
      "Compact design for convenient movement",
      "Available in MS and SS variants",
      "Durable construction for regular hospital use",
      "SS variant offers corrosion resistance and easy maintenance"
    ],
    "specifications": {
      "Cylinder Type": "A Type",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "Stainless steel trolley for small portable A-type medical oxygen gas cylinders. Manufactured with high quality raw materials in our ISO certified facility.",
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
    "id": "mf78-cylinder-trolley",
    "slug": "mf78-cylinder-trolley",
    "modelNumber": "MF78",
    "name": "MF78 – Cylinder Trolley (D Type SS)",
    "category": "Medical Trolleys",
    "description": "The Mathurams D Type Cylinder Trolley is designed for the secure and convenient transportation of D-type medical gas cylinders within hospitals and healthcare facilities. Its sturdy construction supports safe handling of the larger cylinder while allowing convenient movement between wards, treatment areas and other clinical locations. Available in MS and SS variants, the SS version provides enhanced corrosion resistance, easy cleaning and long-term durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF78 – Cylinder Trolley.webp",
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
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
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
    "needsDetails": false
  },
  {
    "id": "mf84-crash-cart",
    "slug": "mf84-crash-cart",
    "modelNumber": "MF84",
    "name": "MF84 – Crash Cart (MS)",
    "category": "Medical Trolleys",
    "description": "The Mathurams Crash Cart is designed to keep essential emergency medical supplies and accessories organised and readily accessible during critical situations. Its modular storage arrangement combines drawers, PVC bins and an SS tray, allowing different emergency supplies to be systematically arranged for quick access. Available in MS and SS variants, the SS version provides enhanced corrosion resistance, easy cleaning and long-term durability for demanding hospital environments.",
    "image": "/images/Product Assets/productsImage/MF84 – Crash Cart.webp",
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
      "Material": "MS / SS",
      "Modular Storage": "Keyed Modular System",
      "Small PVC Bins": "6–30 Nos.",
      "SS Tray": "Attached at Bottom",
      "Finish": "Epoxy Powder Coating / SS Finish"
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
      "Modular Drawer System": "3 Drawers × 2 / 4 Drawers × 2",
      "Small PVC Bins": "6 / 12 / 18 / 24 / 30 Nos.",
      "IV Provision": "Optional",
      "Cylinder Provision": "Optional"
    },
    "needsDetails": false
  },
  {
    "id": "mf85-crash-cart",
    "slug": "mf85-crash-cart",
    "modelNumber": "MF85",
    "name": "MF85 – Crash Cart (SS)",
    "category": "Medical Trolleys",
    "description": "The Mathurams SS Crash Cart provides mobile, organized emergency medical storage constructed from surgical-grade stainless steel, ensuring rapid access to critical life-support consumables and emergency medications.",
    "image": "/images/Product Assets/productsImage/MF85 – Crash Cart.webp",
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
      "Material": "SS",
      "Modular Storage": "Keyed Modular System",
      "Small PVC Bins": "6–30 Nos.",
      "SS Tray": "Attached at Bottom",
      "Finish": "SS Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "All-stainless steel emergency resuscitation crash cart with multiple drawers. Manufactured with high quality raw materials in our ISO certified facility.",
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
      "Modular Drawer System": "3 Drawers × 2 / 4 Drawers × 2",
      "Small PVC Bins": "6 / 12 / 18 / 24 / 30 Nos.",
      "IV Provision": "Optional",
      "Cylinder Provision": "Optional"
    },
    "needsDetails": false
  },
  {
    "id": "mf86-crash-cart",
    "slug": "mf86-crash-cart",
    "modelNumber": "MF86",
    "name": "MF86 – Crash Cart (Mini)",
    "category": "Medical Trolleys",
    "description": "The Mathurams Mini Crash Cart is a compact emergency storage unit designed to keep essential medical supplies organised and readily accessible during critical situations. Its narrow, space-efficient design makes it particularly suitable for patient care areas where a full-size crash cart may occupy more space. Available in with-top and without-top variants, the Mini Crash Cart provides flexibility based on the storage and working-surface requirements of the healthcare facility.",
    "image": "/images/Product Assets/productsImage/MF86 – Crash Cart.webp",
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
      "Material": "MS / SS",
      "Modular Storage": "Provided",
      "Finish": "Epoxy Powder Coating / SS Finish"
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
    "name": "MF88 – Nebuliser Trolley (MS)",
    "category": "Medical Trolleys",
    "description": "The Mathurams Nebulizer Trolley is a compact equipment trolley designed for the convenient placement and movement of nebulizer equipment and related accessories within hospitals and patient care areas. Its organised design keeps the nebulizer unit easily accessible while providing a dedicated platform for routine respiratory care. Available in MS and SS variants, the SS version offers enhanced corrosion resistance, easy cleaning and long-term durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF88 – Nebuliser Trolley.webp",
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
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
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
    "needsDetails": false
  },
  {
    "id": "mf91-linen-trolley",
    "slug": "mf91-linen-trolley",
    "modelNumber": "MF91",
    "name": "MF91 – Linen Trolley (MS)",
    "category": "Medical Trolleys",
    "description": "The Mathurams Plain Linen Trolley is designed for convenient collection, storage and transportation of linen within hospitals and healthcare facilities. Its spacious design provides practical capacity for handling linen between wards, laundry areas and other hospital departments. Available in MS and SS variants, the SS version provides enhanced corrosion resistance, easy cleaning and long-term durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF91 – Linen Trolley.webp",
    "features": [
      "Designed for hospital linen collection and transportation",
      "Spacious storage capacity",
      "Convenient for movement between hospital departments",
      "Available in MS and SS variants",
      "Durable and easy-to-maintain construction",
      "SS variant offers corrosion resistance and easy cleaning"
    ],
    "specifications": {
      "Overall Dimension": "24\" L × 24\" W × 34\" H",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
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
    "needsDetails": false
  },
  {
    "id": "mf92-linen-trolley",
    "slug": "mf92-linen-trolley",
    "modelNumber": "MF92",
    "name": "MF92 – Linen Trolley (SS)",
    "category": "Medical Trolleys",
    "description": "The Mathurams Door Type Linen Trolley is designed for the organised handling and transportation of linen within hospitals. Its dual-sided storage arrangement provides separate compartments for fresh linen and used linen, helping maintain clear segregation during collection and distribution. The enclosed door-type construction keeps linen contained during movement. Available in MS and SS variants, the SS version provides enhanced corrosion resistance, easy cleaning and long-term durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF92 – Linen Trolley.webp",
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
      "Overall Dimension": "26\" L × 24\" W × 34\" H",
      "Material": "MS / SS",
      "Storage": "Separate Compartments for Fresh & Used Linen",
      "Finish": "Epoxy Powder Coating / SS Finish"
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
    "needsDetails": false
  },
  {
    "id": "mf107-biomedical-waste-bin-trolley",
    "slug": "mf107-biomedical-waste-bin-trolley",
    "modelNumber": "MF107",
    "name": "MF107 – Biomedical Waste Bin Trolley (SS)",
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
    "needsDetails": false
  },
  {
    "id": "mf111-laparoscopy-trolley",
    "slug": "mf111-laparoscopy-trolley",
    "modelNumber": "MF111",
    "name": "MF111 – Laparoscopy Trolley (MS)",
    "category": "Medical Trolleys",
    "description": "The Mathurams Laparoscopy Trolley is designed for organised placement and handling of laparoscopic equipment and accessories in operation theatres and procedure areas. Its multi-shelf arrangement provides dedicated space for equipment, while seven integrated power sockets allow convenient connectivity of devices through the trolley. Available in MS and SS variants, the SS version offers enhanced corrosion resistance, easy cleaning and long-term durability for demanding clinical environments.",
    "image": "/images/Product Assets/productsImage/MF111 – Laparoscopy Trolley.webp",
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
      "Material": "MS / SS",
      "Storage": "Accessory Drawer",
      "Cylinder Provision": "Provided",
      "Finish": "Epoxy Powder Coating / SS Finish"
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
    "needsDetails": false
  },
  {
    "id": "mf113-endoscopy-trolley",
    "slug": "mf113-endoscopy-trolley",
    "modelNumber": "MF113",
    "name": "MF113 – Endoscopy Trolley (MS)",
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
      "Number of Shelves": "6",
      "Shelf Spacing": "8\"",
      "Power Sockets": "Provided",
      "Storage": "Large Bottom Drawer",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
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
    "needsDetails": false
  },
  {
    "id": "mf129-ot-table",
    "slug": "mf129-ot-table",
    "modelNumber": "MF129",
    "name": "MF129 – OT Table (SS)",
    "category": "OT Equipment",
    "description": "Hydraulic surgical operation theater table crafted from 304 grade stainless steel.",
    "image": "/images/Product Assets/productsImage/MF129 – OT Table.webp",
    "features": [
      "Hydraulic height lift mechanism",
      "Trendelenburg & Lateral tilts",
      "Detachable head & leg section"
    ],
    "specifications": {
      "Specification 1": "SS"
    },
    "price": "Ask for Price",
    "materialDetails": "Hydraulic surgical operation theater table crafted from 304 grade stainless steel. Manufactured with high quality raw materials in our ISO certified facility.",
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
    "needsDetails": true,
    "functions": [
      "① Height Adjustment",
      "② Trendelenburg",
      "③ Reverse Trendelenburg",
      "④ Lateral Tilt",
      "⑤ Backrest Adjustment",
      "⑥ Lithotomy",
      "⑦ Flex & Reflex",
      "⑧ Chair Position"
    ]
  },
  {
    "id": "mf130-ot-light",
    "slug": "mf130-ot-light",
    "modelNumber": "MF130",
    "name": "MF130 – OT Light",
    "category": "OT Equipment",
    "description": "The Mathurams Cylinder Storage is designed to provide a dedicated and organised space for storing medical gas cylinders within hospitals and healthcare facilities. Its open-frame construction allows cylinders to be positioned and accessed conveniently while helping maintain an organised cylinder storage area. The unit can be configured for A, B and D type cylinders, with single or multiple cylinder holding provisions depending on hospital requirements.",
    "image": "/images/Product Assets/productsImage/MF130 – OT Light.webp",
    "features": [
      "Designed for organised medical gas cylinder storage",
      "Suitable for different cylinder types",
      "Single and multiple cylinder storage configurations",
      "Open-frame design for convenient access",
      "Stable and durable construction",
      "Suitable for wards, utility areas and medical gas storage areas",
      "Customisable according to cylinder requirements",
      "Five-section stainless-steel tabletop",
      "Foot-pedal hydraulic height adjustment",
      "Smooth manual gear-operated positioning",
      "Built-in kidney bridge and perineal cut-out",
      "Removable head and foot sections",
      "Four swivel castors with independent locking"
    ],
    "specifications": {},
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
    "needsDetails": true,
    "functions": [
      "① Height Adjustment",
      "② Trendelenburg",
      "③ Reverse Trendelenburg",
      "④ Lateral Tilt",
      "⑤ Backrest Adjustment",
      "⑥ Lithotomy",
      "⑦ Flex & Reflex",
      "⑧ Chair Position"
    ]
  },
  {
    "id": "mf131-anesthesia-machine",
    "slug": "mf131-anesthesia-machine",
    "modelNumber": "MF131",
    "name": "MF131 – Anesthesia Machine",
    "category": "OT Equipment",
    "description": "Advanced surgical anesthesia ventilator workstation machine.",
    "image": "/images/Product Assets/productsImage/MF131 – Anesthesia Machine.webp",
    "features": [
      "Integrated ventilator screens",
      "Dual flowmeter controls",
      "Secure gas cylinder mounts"
    ],
    "specifications": {},
    "price": "Ask for Price",
    "materialDetails": "Advanced surgical anesthesia ventilator workstation machine. Manufactured with high quality raw materials in our ISO certified facility.",
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
    "needsDetails": true
  },
  {
    "id": "mf132-autoclave",
    "slug": "mf132-autoclave",
    "modelNumber": "MF132",
    "name": "MF132 – Autoclave",
    "category": "OT Equipment",
    "description": "High-pressure medical steam sterilizer autoclave for sterilizing surgical instruments.",
    "image": "/images/Product Assets/productsImage/MF132 – Autoclave.webp",
    "features": [
      "Stainless steel heavy chamber",
      "Radial locking lid system",
      "Safety valve and pressure gauge"
    ],
    "specifications": {},
    "price": "Ask for Price",
    "materialDetails": "High-pressure medical steam sterilizer autoclave for sterilizing surgical instruments. Manufactured with high quality raw materials in our ISO certified facility.",
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
    "needsDetails": true
  },
  {
    "id": "mf133-multiparameter-monitor",
    "slug": "mf133-multiparameter-monitor",
    "modelNumber": "MF133",
    "name": "MF133 – Multiparameter Monitor",
    "category": "OT Equipment",
    "description": "The Mathurams Cylinder Storage is designed to provide a dedicated and organised space for storing medical gas cylinders within hospitals and healthcare facilities. Its open-frame construction allows cylinders to be positioned and accessed conveniently while helping maintain an organised cylinder storage area. The unit can be configured for A, B and D type cylinders, with single or multiple cylinder holding provisions depending on hospital requirements.",
    "image": "/images/Product Assets/productsImage/MF133 – Multiparameter Monitor.webp",
    "features": [
      "Designed for organised medical gas cylinder storage",
      "Suitable for different cylinder types",
      "Single and multiple cylinder storage configurations",
      "Open-frame design for convenient access",
      "Stable and durable construction",
      "Suitable for wards, utility areas and medical gas storage areas",
      "Customisable according to cylinder requirements",
      "Five-section stainless-steel tabletop",
      "Foot-pedal hydraulic height adjustment",
      "Smooth manual gear-operated positioning",
      "Built-in kidney bridge and perineal cut-out",
      "Removable head and foot sections",
      "Four swivel castors with independent locking"
    ],
    "specifications": {},
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
    "needsDetails": true
  },
  {
    "id": "mf143-suction-apparatus",
    "slug": "mf143-suction-apparatus",
    "modelNumber": "MF143",
    "name": "MF143 – Suction Apparatus",
    "category": "OT Equipment",
    "description": "The Mathurams Cylinder Storage is designed to provide a dedicated and organised space for storing medical gas cylinders within hospitals and healthcare facilities. Its open-frame construction allows cylinders to be positioned and accessed conveniently while helping maintain an organised cylinder storage area. The unit can be configured for A, B and D type cylinders, with single or multiple cylinder holding provisions depending on hospital requirements.",
    "image": "/images/Product Assets/productsImage/MF143 – Suction Apparatus.webp",
    "features": [
      "Designed for organised medical gas cylinder storage",
      "Suitable for different cylinder types",
      "Single and multiple cylinder storage configurations",
      "Open-frame design for convenient access",
      "Stable and durable construction",
      "Suitable for wards, utility areas and medical gas storage areas",
      "Customisable according to cylinder requirements",
      "Five-section stainless-steel tabletop",
      "Foot-pedal hydraulic height adjustment",
      "Smooth manual gear-operated positioning",
      "Built-in kidney bridge and perineal cut-out",
      "Removable head and foot sections",
      "Four swivel castors with independent locking"
    ],
    "specifications": {},
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
    "needsDetails": true
  },
  {
    "id": "mf144-fogger",
    "slug": "mf144-fogger",
    "modelNumber": "MF144",
    "name": "MF144 – Fogger",
    "category": "OT Equipment",
    "description": "The Mathurams Cylinder Storage is designed to provide a dedicated and organised space for storing medical gas cylinders within hospitals and healthcare facilities. Its open-frame construction allows cylinders to be positioned and accessed conveniently while helping maintain an organised cylinder storage area. The unit can be configured for A, B and D type cylinders, with single or multiple cylinder holding provisions depending on hospital requirements.",
    "image": "/images/Product Assets/productsImage/MF144 – Fogger.webp",
    "features": [
      "Designed for organised medical gas cylinder storage",
      "Suitable for different cylinder types",
      "Single and multiple cylinder storage configurations",
      "Open-frame design for convenient access",
      "Stable and durable construction",
      "Suitable for wards, utility areas and medical gas storage areas",
      "Customisable according to cylinder requirements",
      "Five-section stainless-steel tabletop",
      "Foot-pedal hydraulic height adjustment",
      "Smooth manual gear-operated positioning",
      "Built-in kidney bridge and perineal cut-out",
      "Removable head and foot sections",
      "Four swivel castors with independent locking"
    ],
    "specifications": {},
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
    "needsDetails": true
  },
  {
    "id": "mf04-iv-stand",
    "slug": "mf04-iv-stand",
    "modelNumber": "MF04",
    "name": "MF04 – IV Stand (Full SS)",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams Full SS IV Stand is designed to provide convenient and stable support for intravenous fluid administration in hospital wards, treatment areas and patient care environments. Its stainless-steel construction offers durability and easy maintenance for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF04 – IV Stand.webp",
    "features": [
      "Full stainless-steel construction",
      "Height suitable for routine IV fluid administration",
      "Stable and durable design",
      "Smooth, easy-to-clean surface",
      "Designed for convenient positioning beside the patient"
    ],
    "specifications": {
      "Material": "SS",
      "Overall Height": "50\"",
      "Finish": "SS Finish",
      "IV Hooks": "As per standard configuration"
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
    "needsDetails": false
  },
  {
    "id": "mf05-iv-stand",
    "slug": "mf05-iv-stand",
    "modelNumber": "MF05",
    "name": "MF05 – IV Stand (Fibre Base)",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams Fibre Base IV Stand is designed to provide stable and convenient support for intravenous fluid administration in hospital wards, treatment areas and patient care environments. Its fibre base provides a sturdy and practical foundation, while the stand is designed for easy positioning alongside the patient.",
    "image": "/images/Product Assets/productsImage/MF05 – IV Stand.webp",
    "features": [
      "Durable fibre base construction",
      "Height suitable for routine IV fluid administration",
      "Stable and practical design",
      "Easy-to-clean surfaces",
      "Suitable for regular hospital use"
    ],
    "specifications": {
      "Overall Height": "50\"",
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
    "needsDetails": false
  },
  {
    "id": "mf06-iv-stand",
    "slug": "mf06-iv-stand",
    "modelNumber": "MF06",
    "name": "MF06 – IV Stand (MS)",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams MS IV Stand is designed to provide stable and convenient support for intravenous fluid administration in hospital wards, treatment areas and patient care environments. Its mild steel construction offers a durable and practical solution for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF06 – IV Stand.webp",
    "features": [
      "Durable MS construction",
      "Stable base for secure positioning",
      "Suitable for routine IV fluid administration",
      "Easy-to-maintain design",
      "Convenient to position beside the patient"
    ],
    "specifications": {
      "Overall Height": "50\"",
      "Material": "MS",
      "Finish": "Epoxy Powder Coating",
      "IV Hooks": "As per standard configuration"
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
    "needsDetails": false
  },
  {
    "id": "mf53-single-foot-step",
    "slug": "mf53-single-foot-step",
    "modelNumber": "MF53",
    "name": "MF53 – Single Foot Step (MS)",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams Single Foot Step (MS) provides a stable raised platform in epoxy powder-coated mild steel to assist patient stepping beside beds and couches.",
    "image": "/images/Product Assets/productsImage/MF53 – Single Foot Step.webp",
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
      "Material": "MS",
      "Finish": "Epoxy Powder Coating"
    },
    "price": "Ask for Price",
    "materialDetails": "Single tier mild steel patient step stool with anti-skid rubber top. Manufactured with high quality raw materials in our ISO certified facility.",
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
    "id": "mf54-single-foot-step",
    "slug": "mf54-single-foot-step",
    "modelNumber": "MF54",
    "name": "MF54 – Single Foot Step (SS)",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams Single Foot Step provides a stable raised platform to assist patients and healthcare professionals where additional stepping height is required. Available in MS and SS variants, its compact construction makes it suitable for use alongside examination couches, beds and other hospital furniture. The SS variant offers enhanced corrosion resistance and easy maintenance, making it well suited for areas requiring frequent cleaning.",
    "image": "/images/Product Assets/productsImage/MF54 – Single Foot Step.webp",
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
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
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
    "needsDetails": false
  },
  {
    "id": "mf55-double-foot-step",
    "slug": "mf55-double-foot-step",
    "modelNumber": "MF55",
    "name": "MF55 – Double Foot Step (MS)",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams Double Foot Step (MS) provides a two-level gradual step platform in durable epoxy powder-coated mild steel.",
    "image": "/images/Product Assets/productsImage/MF55 – Double Foot Step.webp",
    "features": [
      "Two-step design for gradual access",
      "Available in MS and SS variants",
      "Stable and durable construction",
      "Suitable alongside beds and examination couches",
      "Compact and easy to position",
      "SS variant offers corrosion resistance and easy maintenance"
    ],
    "specifications": {
      "Overall Dimension": "16\" L × 18\" W × 18\" H",
      "Material": "MS",
      "Finish": "Epoxy Powder Coating"
    },
    "price": "Ask for Price",
    "materialDetails": "Two-tier mild steel patient step stool for exam couch and high bed access. Manufactured with high quality raw materials in our ISO certified facility.",
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
    "id": "mf56-double-foot-step",
    "slug": "mf56-double-foot-step",
    "modelNumber": "MF56",
    "name": "MF56 – Double Foot Step (SS)",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams Double Foot Step provides a stable two-level platform to assist patients and healthcare professionals where additional stepping support is required. Its two-step design provides gradual and convenient access to elevated hospital beds, examination couches and other medical furniture. Available in MS and SS variants, the SS version offers enhanced corrosion resistance, easy cleaning and durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF56 – Double Foot Step.webp",
    "features": [
      "Two-step design for gradual access",
      "Available in MS and SS variants",
      "Stable and durable construction",
      "Suitable alongside beds and examination couches",
      "Compact and easy to position",
      "SS variant offers corrosion resistance and easy maintenance"
    ],
    "specifications": {
      "Overall Dimension": "16\" L × 18\" W × 18\" H",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish"
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
    "needsDetails": false
  },
  {
    "id": "mf97-kick-bucket",
    "slug": "mf97-kick-bucket",
    "modelNumber": "MF97",
    "name": "MF97 – Kick Bucket (SS)",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams SS Kick Bucket is designed for convenient collection of used materials during surgical and clinical procedures. Its compact design allows easy positioning near the procedure area, while the stainless-steel construction provides corrosion resistance, easy cleaning and durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF97 – Kick Bucket.webp",
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
    "needsDetails": false
  },
  {
    "id": "mf98-wash-basin-stand",
    "slug": "mf98-wash-basin-stand",
    "modelNumber": "MF98",
    "name": "MF98 – Wash Basin Stand (SS)",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams SS Wash Basin Stand is designed to provide convenient access to a wash basin in hospital wards, examination areas and procedure rooms. Its compact freestanding design allows convenient placement wherever required. The stainless-steel construction provides corrosion resistance, easy cleaning and long-term durability, making it suitable for regular use in healthcare environments.",
    "image": "/images/Product Assets/productsImage/MF98 – Wash Basin Stand.webp",
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
    "needsDetails": false
  },
  {
    "id": "mf99-3-fold-screen",
    "slug": "mf99-3-fold-screen",
    "modelNumber": "MF99",
    "name": "MF99 – 3 Fold Screen (MS)",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams 3 Fold Screen is designed to provide temporary privacy and separation between patient areas in hospitals, clinics and examination rooms. Its foldable three-panel design allows the screen to be extended when required and folded into a compact size for convenient positioning and storage.",
    "image": "/images/Product Assets/productsImage/MF99 – 3 Fold Screen.webp",
    "features": [
      "Three-fold privacy screen",
      "Provides privacy and separation between patient areas",
      "Foldable and space-efficient design",
      "Easy to position as required",
      "Suitable for wards, examination and treatment areas",
      "Durable and easy-to-maintain construction"
    ],
    "specifications": {
      "Width": "50\" Closed / 98\" Open",
      "Overall Height": "70\"",
      "Material": "MS / SS",
      "Number of Folds": "3",
      "Finish": "Epoxy Powder Coating / SS Finish"
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
    "needsDetails": false
  },
  {
    "id": "mf100-3-fold-screen",
    "slug": "mf100-3-fold-screen",
    "modelNumber": "MF100",
    "name": "MF100 – 3 Fold Screen (SS)",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams SS 3-Fold Screen provides mobile patient privacy partitions with a full stainless-steel folding frame, offering superior corrosion resistance and effortless cleaning.",
    "image": "/images/Product Assets/productsImage/MF100 – 3 Fold Screen.webp",
    "features": [
      "Three-fold privacy screen",
      "Provides privacy and separation between patient areas",
      "Foldable and space-efficient design",
      "Easy to position as required",
      "Suitable for wards, examination and treatment areas",
      "Durable and easy-to-maintain construction"
    ],
    "specifications": {
      "Width": "50\" Closed / 98\" Open",
      "Overall Height": "70\"",
      "Material": "SS",
      "Number of Folds": "3",
      "Finish": "SS Finish"
    },
    "price": "Ask for Price",
    "materialDetails": "Stainless steel three-panel folding patient privacy partition screen. Manufactured with high quality raw materials in our ISO certified facility.",
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
    "id": "mf108-ss-rack",
    "slug": "mf108-ss-rack",
    "modelNumber": "MF108",
    "name": "MF108 – SS Rack (4 Shelf)",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams SS Rack – 4 Shelf is designed for organised storage of medical supplies, linen, equipment and other hospital essentials. Its four-tier arrangement provides ample storage while allowing convenient access to frequently required items. The stainless-steel construction provides excellent corrosion resistance, easy cleaning and long-term durability, making the rack suitable for regular use across hospital departments.",
    "image": "/images/Product Assets/productsImage/MF108 – SS Rack.webp",
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
      "Rack Height": "15\"",
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
    "needsDetails": false
  },
  {
    "id": "mf109-scrub",
    "slug": "mf109-scrub",
    "modelNumber": "MF109",
    "name": "MF109 – Scrub (SS)",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams Scrub is designed for hand and instrument washing in operation theatre and surgical preparation areas. Its stainless-steel construction provides a hygienic, corrosion-resistant and easy-to-clean surface, making it suitable for environments requiring frequent cleaning and maintenance. The unit can be configured with different tap arrangements and operating mechanisms according to hospital requirements.",
    "image": "/images/Product Assets/productsImage/MF109 – Scrub.webp",
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
    "name": "MF128 – Cylinder Storage (MS)",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams Cylinder Storage is designed to provide a dedicated and organised space for storing medical gas cylinders within hospitals and healthcare facilities. Its open-frame construction allows cylinders to be positioned and accessed conveniently while helping maintain an organised cylinder storage area. The unit can be configured for A, B and D type cylinders, with single or multiple cylinder holding provisions depending on hospital requirements.",
    "image": "/images/Product Assets/productsImage/MF128 – Cylinder Storage.webp",
    "features": [
      "Designed for organised medical gas cylinder storage",
      "Suitable for different cylinder types",
      "Single and multiple cylinder storage configurations",
      "Open-frame design for convenient access",
      "Stable and durable construction",
      "Suitable for wards, utility areas and medical gas storage areas",
      "Customisable according to cylinder requirements",
      "Five-section stainless-steel tabletop",
      "Foot-pedal hydraulic height adjustment",
      "Smooth manual gear-operated positioning",
      "Built-in kidney bridge and perineal cut-out",
      "Removable head and foot sections",
      "Four swivel castors with independent locking"
    ],
    "specifications": {
      "Specification 1": "MS"
    },
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
    "needsDetails": true
  },
  {
    "id": "mf102-mattress",
    "slug": "mf102-mattress",
    "modelNumber": "MF102",
    "name": "MF102 – Mattress",
    "category": "Accessories",
    "description": "The Mathurams Plain Linen Trolley is designed for convenient collection, storage and transportation of linen within hospitals and healthcare facilities. Its spacious design provides practical capacity for handling linen between wards, laundry areas and other hospital departments. Available in MS and SS Models, the SS version provides enhanced corrosion resistance, easy cleaning and long-term durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF102 – Mattress.webp",
    "features": [
      "Designed for hospital linen collection and transportation",
      "Spacious storage capacity",
      "Convenient for movement between hospital departments",
      "Available in MS and SS Models",
      "Durable and easy-to-maintain construction",
      "SS variant offers corrosion resistance and easy cleaning"
    ],
    "specifications": {
      "Overall Dimension": "24\" L × 24\" W × 34\" H"
    },
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
    "needsDetails": true
  },
  {
    "id": "mf103-pillow",
    "slug": "mf103-pillow",
    "modelNumber": "MF103",
    "name": "MF103 – Pillow",
    "category": "Accessories",
    "description": "The Mathurams Plain Linen Trolley is designed for convenient collection, storage and transportation of linen within hospitals and healthcare facilities. Its spacious design provides practical capacity for handling linen between wards, laundry areas and other hospital departments. Available in MS and SS Models, the SS version provides enhanced corrosion resistance, easy cleaning and long-term durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF103 – Pillow.webp",
    "features": [
      "Designed for hospital linen collection and transportation",
      "Spacious storage capacity",
      "Convenient for movement between hospital departments",
      "Available in MS and SS Models",
      "Durable and easy-to-maintain construction",
      "SS variant offers corrosion resistance and easy cleaning"
    ],
    "specifications": {
      "Overall Dimension": "24\" L × 24\" W × 34\" H"
    },
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
    "needsDetails": true
  },
  {
    "id": "mf120-aluminium-side-rails",
    "slug": "mf120-aluminium-side-rails",
    "modelNumber": "MF120",
    "name": "MF120 – Aluminium Side Rails",
    "category": "Accessories",
    "description": "The Mathurams Two Tier Cot is designed to provide a practical and space-efficient resting solution for nursing staff and hospital personnel. Its two-level arrangement maximises available floor space while providing separate sleeping platforms in a compact footprint. The sturdy MS construction provides durability for regular use, while the integrated ladder allows convenient access to the upper berth.",
    "image": "/images/Product Assets/productsImage/MF120 – Aluminium Side Rails.webp",
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
    "needsDetails": true
  },
  {
    "id": "mf121-2-1-bush",
    "slug": "mf121-2-1-bush",
    "modelNumber": "MF121",
    "name": "MF121 – 2 × 1 Bush",
    "category": "Accessories",
    "description": "Heavy duty rectangular rubber buffer bush shoe for hospital cot legs (2 x 1 inch).",
    "image": "/images/Product Assets/productsImage/MF121 – 2 × 1 Bush.webp",
    "features": [
      "High quality durable rubber",
      "Fits 2x1 inch rectangular pipes",
      "Protects floor from scratching"
    ],
    "specifications": {},
    "price": "Ask for Price",
    "materialDetails": "Heavy duty rectangular rubber buffer bush shoe for hospital cot legs (2 x 1 inch). Manufactured with high quality raw materials in our ISO certified facility.",
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
    "needsDetails": true
  },
  {
    "id": "mf122-1-1-bush",
    "slug": "mf122-1-1-bush",
    "modelNumber": "MF122",
    "name": "MF122 – 1¼ × 1¼ Bush",
    "category": "Accessories",
    "description": "Square rubber leg shoe bush buffer for hospital cot legs (1.25 x 1.25 inches).",
    "image": "/images/Product Assets/productsImage/MF122 – 1¼ × 1¼ Bush.webp",
    "features": [
      "Perfect fit for square profiles",
      "Anti-skid floor grip lines",
      "Hard-wearing rubber compound"
    ],
    "specifications": {},
    "price": "Ask for Price",
    "materialDetails": "Square rubber leg shoe bush buffer for hospital cot legs (1.25 x 1.25 inches). Manufactured with high quality raw materials in our ISO certified facility.",
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
    "needsDetails": true
  },
  {
    "id": "mf123-ss-collapsible",
    "slug": "mf123-ss-collapsible",
    "modelNumber": "MF123",
    "name": "MF123 – SS Collapsible Side Rails",
    "category": "Accessories",
    "description": "The Mathurams SS Collapsible Side Rails are designed for hospital cots and beds to provide additional patient protection while allowing convenient access for nursing and patient care. The collapsible mechanism enables the railing to be raised when protection is required and lowered when caregivers need access to the patient. The stainless-steel construction provides excellent corrosion resistance, strength, easy cleaning and long-term durability, making it suitable for regular use in demanding hospital environments.",
    "image": "/images/Product Assets/productsImage/MF123 – SS Collapsible.webp",
    "features": [
      "Collapsible side rail mechanism",
      "Provides additional side protection for patients",
      "Easy raising and lowering for patient access",
      "Durable stainless-steel construction",
      "Corrosion-resistant and easy to clean",
      "Suitable for different hospital cots and beds",
      "Designed for regular hospital use"
    ],
    "specifications": {
      "Material": "Stainless Steel",
      "Mechanism": "Collapsible",
      "Application": "Hospital Cots & Beds",
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
    "needsDetails": true
  },
  {
    "id": "mf124-ss-arms",
    "slug": "mf124-ss-arms",
    "modelNumber": "MF124",
    "name": "MF124 – SS Bow Arms",
    "category": "Accessories",
    "description": "The Mathurams SS Arms are designed for hospital cots and beds, providing a durable and easy-to-maintain head and foot-end arrangement. The stainless-steel outer construction offers excellent corrosion resistance and long-term durability, while the centre plywood panel with mica finish provides a clean appearance with multiple colour choices. The mica colour can be selected to match or complement the colour of the cot, allowing a coordinated overall appearance.",
    "image": "/images/Product Assets/productsImage/MF124 – SS Arms.webp",
    "features": [
      "Durable stainless-steel construction",
      "Plywood centre panel with mica finish",
      "Mica colours available to match the cot",
      "Corrosion-resistant SS structure",
      "Smooth and easy-to-clean surfaces",
      "Suitable for different hospital cots and beds",
      "Customisable according to cot requirements"
    ],
    "specifications": {
      "Material": "Stainless Steel Structure",
      "Centre Panel": "Plywood with Mica Finish",
      "Application": "Head & Foot Ends of Hospital Cots",
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
    "needsDetails": true
  },
  {
    "id": "mf125-bins",
    "slug": "mf125-bins",
    "modelNumber": "MF125",
    "name": "MF125 – Bins",
    "category": "Accessories",
    "description": "The Mathurams SS Arms are designed for hospital cots and beds, providing a durable and easy-to-maintain head and foot-end arrangement. The stainless-steel outer construction offers excellent corrosion resistance and long-term durability, while the centre plywood panel with mica finish provides a clean appearance with multiple colour choices. The mica colour can be selected to match or complement the colour of the cot, allowing a coordinated overall appearance.",
    "image": "/images/Product Assets/productsImage/MF125 – Bins.webp",
    "features": [
      "Durable stainless-steel construction",
      "Plywood centre panel with mica finish",
      "Mica colours available to match the cot",
      "Corrosion-resistant SS structure",
      "Smooth and easy-to-clean surfaces",
      "Suitable for different hospital cots and beds",
      "Customisable according to cot requirements"
    ],
    "specifications": {
      "Material": "High Density Plastic",
      "Size Options": "Big / Small",
      "Application": "Racks / Trolleys / Pharmacy Storage"
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
    "needsDetails": true
  },
  {
    "id": "mf126-ss-plain-side-rails",
    "slug": "mf126-ss-plain-side-rails",
    "modelNumber": "MF126",
    "name": "MF126 – SS Plain Side Rails (SS)",
    "category": "Accessories",
    "description": "The Mathurams SS Arms are designed for hospital cots and beds, providing a durable and easy-to-maintain head and foot-end arrangement. The stainless-steel outer construction offers excellent corrosion resistance and long-term durability, while the centre plywood panel with mica finish provides a clean appearance with multiple colour choices. The mica colour can be selected to match or complement the colour of the cot, allowing a coordinated overall appearance.",
    "image": "/images/Product Assets/productsImage/MF126 – SS Plain Side Rails.webp",
    "features": [
      "Durable stainless-steel construction",
      "Plywood centre panel with mica finish",
      "Mica colours available to match the cot",
      "Corrosion-resistant SS structure",
      "Smooth and easy-to-clean surfaces",
      "Suitable for different hospital cots and beds",
      "Customisable according to cot requirements"
    ],
    "specifications": {
      "Material": "Stainless Steel",
      "Design": "Plain Fixed Side Rails",
      "Application": "Hospital Cots & Beds",
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
    "needsDetails": true
  },
  {
    "id": "mf134-actuator",
    "slug": "mf134-actuator",
    "modelNumber": "MF134",
    "name": "MF134 – Actuator (100 / 150 mm)",
    "category": "Accessories",
    "description": "The Mathurams Cylinder Storage is designed to provide a dedicated and organised space for storing medical gas cylinders within hospitals and healthcare facilities. Its open-frame construction allows cylinders to be positioned and accessed conveniently while helping maintain an organised cylinder storage area. The unit can be configured for A, B and D type cylinders, with single or multiple cylinder holding provisions depending on hospital requirements.",
    "image": "/images/Product Assets/productsImage/MF134 – Actuator.webp",
    "features": [
      "Designed for organised medical gas cylinder storage",
      "Suitable for different cylinder types",
      "Single and multiple cylinder storage configurations",
      "Open-frame design for convenient access",
      "Stable and durable construction",
      "Suitable for wards, utility areas and medical gas storage areas",
      "Customisable according to cylinder requirements",
      "Five-section stainless-steel tabletop",
      "Foot-pedal hydraulic height adjustment",
      "Smooth manual gear-operated positioning",
      "Built-in kidney bridge and perineal cut-out",
      "Removable head and foot sections",
      "Four swivel castors with independent locking"
    ],
    "specifications": {
      "Specification 1": "100 / 150 mm"
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
    "needsDetails": true
  },
  {
    "id": "mf135-control-box",
    "slug": "mf135-control-box",
    "modelNumber": "MF135",
    "name": "MF135 – Control Box",
    "category": "Accessories",
    "description": "The Mathurams Cylinder Storage is designed to provide a dedicated and organised space for storing medical gas cylinders within hospitals and healthcare facilities. Its open-frame construction allows cylinders to be positioned and accessed conveniently while helping maintain an organised cylinder storage area. The unit can be configured for A, B and D type cylinders, with single or multiple cylinder holding provisions depending on hospital requirements.",
    "image": "/images/Product Assets/productsImage/MF135 – Control Box.webp",
    "features": [
      "Designed for organised medical gas cylinder storage",
      "Suitable for different cylinder types",
      "Single and multiple cylinder storage configurations",
      "Open-frame design for convenient access",
      "Stable and durable construction",
      "Suitable for wards, utility areas and medical gas storage areas",
      "Customisable according to cylinder requirements",
      "Five-section stainless-steel tabletop",
      "Foot-pedal hydraulic height adjustment",
      "Smooth manual gear-operated positioning",
      "Built-in kidney bridge and perineal cut-out",
      "Removable head and foot sections",
      "Four swivel castors with independent locking"
    ],
    "specifications": {},
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
    "needsDetails": true
  },
  {
    "id": "mf136-wired-remote-handset",
    "slug": "mf136-wired-remote-handset",
    "modelNumber": "MF136",
    "name": "MF136 – Wired Remote Handset",
    "category": "Accessories",
    "description": "The Mathurams Cylinder Storage is designed to provide a dedicated and organised space for storing medical gas cylinders within hospitals and healthcare facilities. Its open-frame construction allows cylinders to be positioned and accessed conveniently while helping maintain an organised cylinder storage area. The unit can be configured for A, B and D type cylinders, with single or multiple cylinder holding provisions depending on hospital requirements.",
    "image": "/images/Product Assets/productsImage/MF136 – Wired Remote Handset.webp",
    "features": [
      "Designed for organised medical gas cylinder storage",
      "Suitable for different cylinder types",
      "Single and multiple cylinder storage configurations",
      "Open-frame design for convenient access",
      "Stable and durable construction",
      "Suitable for wards, utility areas and medical gas storage areas",
      "Customisable according to cylinder requirements",
      "Five-section stainless-steel tabletop",
      "Foot-pedal hydraulic height adjustment",
      "Smooth manual gear-operated positioning",
      "Built-in kidney bridge and perineal cut-out",
      "Removable head and foot sections",
      "Four swivel castors with independent locking"
    ],
    "specifications": {},
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
    "needsDetails": true
  },
  {
    "id": "mf137-castors",
    "slug": "mf137-castors",
    "modelNumber": "MF137",
    "name": "MF137 – Castors (2 Inches)",
    "category": "Accessories",
    "description": "The Mathurams Cylinder Storage is designed to provide a dedicated and organised space for storing medical gas cylinders within hospitals and healthcare facilities. Its open-frame construction allows cylinders to be positioned and accessed conveniently while helping maintain an organised cylinder storage area. The unit can be configured for A, B and D type cylinders, with single or multiple cylinder holding provisions depending on hospital requirements.",
    "image": "/images/Product Assets/productsImage/MF137 – Castors.webp",
    "features": [
      "Designed for organised medical gas cylinder storage",
      "Suitable for different cylinder types",
      "Single and multiple cylinder storage configurations",
      "Open-frame design for convenient access",
      "Stable and durable construction",
      "Suitable for wards, utility areas and medical gas storage areas",
      "Customisable according to cylinder requirements",
      "Five-section stainless-steel tabletop",
      "Foot-pedal hydraulic height adjustment",
      "Smooth manual gear-operated positioning",
      "Built-in kidney bridge and perineal cut-out",
      "Removable head and foot sections",
      "Four swivel castors with independent locking"
    ],
    "specifications": {
      "Specification 1": "2 Inches"
    },
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
    "needsDetails": true
  },
  {
    "id": "mf138-castors",
    "slug": "mf138-castors",
    "modelNumber": "MF138",
    "name": "MF138 – Castors (3 Inches)",
    "category": "Accessories",
    "description": "The Mathurams Cylinder Storage is designed to provide a dedicated and organised space for storing medical gas cylinders within hospitals and healthcare facilities. Its open-frame construction allows cylinders to be positioned and accessed conveniently while helping maintain an organised cylinder storage area. The unit can be configured for A, B and D type cylinders, with single or multiple cylinder holding provisions depending on hospital requirements.",
    "image": "/images/Product Assets/productsImage/MF138 – Castors.webp",
    "features": [
      "Designed for organised medical gas cylinder storage",
      "Suitable for different cylinder types",
      "Single and multiple cylinder storage configurations",
      "Open-frame design for convenient access",
      "Stable and durable construction",
      "Suitable for wards, utility areas and medical gas storage areas",
      "Customisable according to cylinder requirements",
      "Five-section stainless-steel tabletop",
      "Foot-pedal hydraulic height adjustment",
      "Smooth manual gear-operated positioning",
      "Built-in kidney bridge and perineal cut-out",
      "Removable head and foot sections",
      "Four swivel castors with independent locking"
    ],
    "specifications": {
      "Specification 1": "3 Inches"
    },
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
    "needsDetails": true
  },
  {
    "id": "mf139-castors",
    "slug": "mf139-castors",
    "modelNumber": "MF139",
    "name": "MF139 – Castors (4 Inches)",
    "category": "Accessories",
    "description": "The Mathurams Cylinder Storage is designed to provide a dedicated and organised space for storing medical gas cylinders within hospitals and healthcare facilities. Its open-frame construction allows cylinders to be positioned and accessed conveniently while helping maintain an organised cylinder storage area. The unit can be configured for A, B and D type cylinders, with single or multiple cylinder holding provisions depending on hospital requirements.",
    "image": "/images/Product Assets/productsImage/MF139 – Castors.webp",
    "features": [
      "Designed for organised medical gas cylinder storage",
      "Suitable for different cylinder types",
      "Single and multiple cylinder storage configurations",
      "Open-frame design for convenient access",
      "Stable and durable construction",
      "Suitable for wards, utility areas and medical gas storage areas",
      "Customisable according to cylinder requirements",
      "Five-section stainless-steel tabletop",
      "Foot-pedal hydraulic height adjustment",
      "Smooth manual gear-operated positioning",
      "Built-in kidney bridge and perineal cut-out",
      "Removable head and foot sections",
      "Four swivel castors with independent locking"
    ],
    "specifications": {
      "Specification 1": "4 Inches"
    },
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
    "needsDetails": true
  },
  {
    "id": "mf140-castors",
    "slug": "mf140-castors",
    "modelNumber": "MF140",
    "name": "MF140 – Castors (5 Inches)",
    "category": "Accessories",
    "description": "Heavy duty 5-inch medical swivel castors with total-lock brake pedal.",
    "image": "/images/Product Assets/productsImage/MF140 – Castors.webp",
    "features": [
      "Silent PU wheel tyre tread",
      "Total lock (swivel & wheel) pedal",
      "Dust sealing cover cap"
    ],
    "specifications": {
      "Specification 1": "5 Inches"
    },
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
    "needsDetails": true
  },
  {
    "id": "mf141-castors",
    "slug": "mf141-castors",
    "modelNumber": "MF141",
    "name": "MF141 – Castors (Centre Locking)",
    "category": "Accessories",
    "description": "The Mathurams Cylinder Storage is designed to provide a dedicated and organised space for storing medical gas cylinders within hospitals and healthcare facilities. Its open-frame construction allows cylinders to be positioned and accessed conveniently while helping maintain an organised cylinder storage area. The unit can be configured for A, B and D type cylinders, with single or multiple cylinder holding provisions depending on hospital requirements.",
    "image": "/images/Product Assets/productsImage/MF141 – Castors.webp",
    "features": [
      "Designed for organised medical gas cylinder storage",
      "Suitable for different cylinder types",
      "Single and multiple cylinder storage configurations",
      "Open-frame design for convenient access",
      "Stable and durable construction",
      "Suitable for wards, utility areas and medical gas storage areas",
      "Customisable according to cylinder requirements",
      "Five-section stainless-steel tabletop",
      "Foot-pedal hydraulic height adjustment",
      "Smooth manual gear-operated positioning",
      "Built-in kidney bridge and perineal cut-out",
      "Removable head and foot sections",
      "Four swivel castors with independent locking"
    ],
    "specifications": {
      "Specification 1": "Centre Locking"
    },
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
    "needsDetails": true
  },
  {
    "id": "mf104-3-seater-chair",
    "slug": "mf104-3-seater-chair",
    "modelNumber": "MF104",
    "name": "MF104 – 3 Seater Chair",
    "category": "General Furniture",
    "description": "The Mathurams Plain Linen Trolley is designed for convenient collection, storage and transportation of linen within hospitals and healthcare facilities. Its spacious design provides practical capacity for handling linen between wards, laundry areas and other hospital departments. Available in MS and SS Models, the SS version provides enhanced corrosion resistance, easy cleaning and long-term durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF104 – 3 Seater Chair.webp",
    "features": [
      "Designed for hospital linen collection and transportation",
      "Spacious storage capacity",
      "Convenient for movement between hospital departments",
      "Available in MS and SS Models",
      "Durable and easy-to-maintain construction",
      "SS variant offers corrosion resistance and easy cleaning"
    ],
    "specifications": {
      "Overall Dimension": "24\" L × 24\" W × 34\" H"
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
    "needsDetails": true
  },
  {
    "id": "mf105-4-seater-chair",
    "slug": "mf105-4-seater-chair",
    "modelNumber": "MF105",
    "name": "MF105 – 4 Seater Chair",
    "category": "General Furniture",
    "description": "The Mathurams Plain Linen Trolley is designed for convenient collection, storage and transportation of linen within hospitals and healthcare facilities. Its spacious design provides practical capacity for handling linen between wards, laundry areas and other hospital departments. Available in MS and SS Models, the SS version provides enhanced corrosion resistance, easy cleaning and long-term durability for regular hospital use.",
    "image": "/images/Product Assets/productsImage/MF105 – 4 Seater Chair.webp",
    "features": [
      "Designed for hospital linen collection and transportation",
      "Spacious storage capacity",
      "Convenient for movement between hospital departments",
      "Available in MS and SS Models",
      "Durable and easy-to-maintain construction",
      "SS variant offers corrosion resistance and easy cleaning"
    ],
    "specifications": {
      "Overall Dimension": "24\" L × 24\" W × 34\" H"
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
    "needsDetails": true
  },
  {
    "id": "mf117-two-tier-cot",
    "slug": "mf117-two-tier-cot",
    "modelNumber": "MF117",
    "name": "MF117 – Two Tier Cot (MS)",
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
      "Finish": "Epoxy Powder Coating",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
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
      "Optional Storage": "1 or 2 Cabinets"
    },
    "needsDetails": false
  },
  {
    "id": "mf127-pharmacy-closed-trolley",
    "slug": "mf127-pharmacy-closed-trolley",
    "modelNumber": "MF127",
    "name": "MF127 – Pharmacy Closed Trolley (SS)",
    "category": "General Furniture",
    "description": "Stainless steel closed cabinet pharmacy trolley with double locking doors.",
    "image": "/images/Product Assets/productsImage/MF127 – Pharmacy Closed Trolley.webp",
    "features": [
      "Secure double lockable doors",
      "Intermediate SS storage shelves",
      "Complete 304 SS construction"
    ],
    "specifications": {
      "Specification 1": "SS"
    },
    "price": "Ask for Price",
    "materialDetails": "Stainless steel closed cabinet pharmacy trolley with double locking doors. Manufactured with high quality raw materials in our ISO certified facility.",
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
    "needsDetails": true
  }
];
