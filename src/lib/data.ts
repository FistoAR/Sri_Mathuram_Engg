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
    "name": "MF01 – Plain Bedside Locker",
    "category": "Ward Furniture",
    "description": "The Mathurams Plain Bedside Locker is a compact bedside storage unit designed to provide convenient access to essential patient belongings and bedside items. Its simple and functional design makes it suitable for hospital wards and patient rooms. The locker features one cupboard and one open shelf, with options for different top materials and mobility arrangements to suit hospital requirements.",
    "image": "/images/Product Assets/HospitalBedsideLocker/extra-10410435.webp",
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
    "modelSpecifications": [
      "Cabin Only"
    ]
  },
  {
    "id": "mf02-deluxe-bedside-locker",
    "slug": "mf02-deluxe-bedside-locker",
    "modelNumber": "MF02",
    "name": "MF02 – Deluxe Bedside Locker",
    "category": "Ward Furniture",
    "description": "The Mathurams Delux Bedside Locker is designed to provide organised bedside storage with a combination of enclosed cupboard space, an open shelf and an additional drawer for convenient access to frequently used items. Its practical design can be configured with different top materials and mobility options to suit the requirements of different hospital environments.",
    "image": "/images/Product Assets/HospitalBedsideLocker/extra-10410436.webp",
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
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige",
      "Optional Accessories": "As per requirement"
    },
    "modelSpecifications": [
      "Cabin + Drawer"
    ]
  },
  {
    "id": "mf03-granite-top-bedside-locker",
    "slug": "mf03-granite-top-bedside-locker",
    "modelNumber": "MF03",
    "name": "MF03 – Granite Top Bedside Locker",
    "category": "Ward Furniture",
    "description": "The Mathurams Granite Top Bedside Locker is designed to provide organised and accessible bedside storage in hospital patient rooms. Its practical layout combines enclosed storage, drawer space and open storage for convenient access to frequently used patient items. The granite top provides a durable and easy-to-maintain surface, while the open storage arrangement provides additional accessible space.",
    "image": "/images/Product Assets/HospitalBedsideLocker/extra-10410436.webp",
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
    "modelSpecifications": [
      "Granite Top + File Rack + Cabin + Drawer"
    ]
  },
  {
    "id": "mf07-over-bed-table",
    "slug": "mf07-over-bed-table",
    "modelNumber": "MF07",
    "name": "MF07 – Over Bed Table",
    "category": "Ward Furniture",
    "description": "The Mathurams Manual Over Bed Table is designed to provide a convenient and stable surface for patients during bedside activities such as meals, reading and personal use. Its height-adjustable design allows the table to be positioned comfortably over the bed, while the manual rotating knob enables smooth height adjustment.",
    "image": "/images/Product Assets/HospitalBedsideLocker/extra-10410435.webp",
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
    "modelSpecifications": [
      "Manual"
    ]
  },
  {
    "id": "mf08-over-bed-table",
    "slug": "mf08-over-bed-table",
    "modelNumber": "MF08",
    "name": "MF08 – Over Bed Table",
    "category": "Ward Furniture",
    "description": "The Mathurams Gear Type Over Bed Table is designed to provide a convenient and stable surface for patients during bedside activities such as meals, reading and personal use. The gear-operated height adjustment allows the table to be positioned smoothly and precisely with controlled movement, making it easier to set the table to a comfortable working height. The gear mechanism provides better control during height adjustment and helps maintain the selected position, making it suitable for regular hospital use.",
    "image": "/images/Product Assets/HospitalBedsideLocker/extra-10410435.webp",
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
    "modelSpecifications": [
      "Gear Type"
    ]
  },
  {
    "id": "mf09-over-bed-table",
    "slug": "mf09-over-bed-table",
    "modelNumber": "MF09",
    "name": "MF09 – Over Bed Table",
    "category": "Ward Furniture",
    "description": "Effortless one-touch height-adjustable overbed table powered by a gas spring mechanism.",
    "image": "/images/Product Assets/HospitalBedsideLocker/extra-10410435.webp",
    "features": [
      "One-Touch Gas Spring Lift",
      "Sleek Aesthetic Design",
      "Low Profile Base to Fit Under Beds"
    ],
    "specifications": {
      "Specification 1": "Gas Spring"
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
    "modelSpecifications": [
      "Gas Spring"
    ]
  },
  {
    "id": "mf19-attender-cot",
    "slug": "mf19-attender-cot",
    "modelNumber": "MF19",
    "name": "MF19 – Attender Cot",
    "category": "Ward Furniture",
    "description": "The Mathurams Plain Attender Cot provides a comfortable resting space for patient attendants in hospital rooms and wards. Its compact design makes efficient use of available space while providing a convenient sleeping surface alongside the patient's cot.",
    "image": "/images/Product Assets/Beds/Attender-Cot-Bed.webp",
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
      "Mattress": "Provided"
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
    "detailedSpec": {
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "Plain"
    ]
  },
  {
    "id": "mf20-attender-cot",
    "slug": "mf20-attender-cot",
    "modelNumber": "MF20",
    "name": "MF20 – Attender Cot",
    "category": "Ward Furniture",
    "description": "The Mathurams Delux Attender Cot provides a comfortable resting space for patient attendants, with an additional lower shelf included in the Delux version for convenient storage.",
    "image": "/images/Product Assets/Beds/Attender-Cot-Bed.webp",
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
      "Mattress": "Included"
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
    "detailedSpec": {
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "Deluxe"
    ]
  },
  {
    "id": "mf21-attender-cot",
    "slug": "mf21-attender-cot",
    "modelNumber": "MF21",
    "name": "MF21 – Attender Cot",
    "category": "Ward Furniture",
    "description": "The Mathurams Single Shelf Attender Cot provides a comfortable resting space for patient attendants while offering a dedicated lower shelf for convenient storage.",
    "image": "/images/Product Assets/Beds/Attender-Cot-Bed.webp",
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
      "Mattress": "Included"
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
    "detailedSpec": {
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "Single Shelf"
    ]
  },
  {
    "id": "mf22-attender-cot",
    "slug": "mf22-attender-cot",
    "modelNumber": "MF22",
    "name": "MF22 – Attender Cot",
    "category": "Ward Furniture",
    "description": "The Mathurams Double Shelf Attender Cot provides a comfortable resting space for patient attendants with two lower storage shelves for convenient placement of personal belongings and essentials.",
    "image": "/images/Product Assets/Beds/Attender-Cot-Bed.webp",
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
      "Mattress": "Included"
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
    "detailedSpec": {
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "Double Shelf"
    ]
  },
  {
    "id": "mf35-semi-fowler-cot",
    "slug": "mf35-semi-fowler-cot",
    "modelNumber": "MF35",
    "name": "MF35 – Semi Fowler Cot",
    "category": "Ward Furniture",
    "description": "The Mathurams Semi Fowler Cot is designed for general ward and patient care environments, providing adjustable backrest positioning for improved patient comfort and convenient bedside care. Its flexible configuration allows hospitals to select suitable arm, side railing and mobility options.",
    "image": "/images/Product Assets/Beds/Hospital-Fowler-Cot-Bed.webp",
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
      "Mattress": "Included"
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
      "Optional Accessories": "Pillow / Safety Bumpers",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "SS Arms",
      "SS Plain Side Rails"
    ]
  },
  {
    "id": "mf39-fowler-cot",
    "slug": "mf39-fowler-cot",
    "modelNumber": "MF39",
    "name": "MF39 – Fowler Cot",
    "category": "Ward Furniture",
    "description": "The Mathurams Fowler Cot is designed to provide enhanced patient positioning for general wards and recovery areas. Its adjustable back and knee sections allow patients to be positioned comfortably for rest, recovery, reading and routine bedside care.",
    "image": "/images/Product Assets/Beds/Hospital-Fowler-Cot-Bed.webp",
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
      "Mattress": "Included"
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
      "Optional Accessories": "Pillow / Safety Bumpers",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "ABS Arms",
      "SS Collapsible Side Rails"
    ]
  },
  {
    "id": "mf61-plain-cot",
    "slug": "mf61-plain-cot",
    "modelNumber": "MF61",
    "name": "MF61 – Plain Cot",
    "category": "Ward Furniture",
    "description": "The Mathurams Plain Cot with MS GH Type Legs is a simple and durable hospital cot designed for general wards and routine patient accommodation. Its sturdy MS construction provides reliable support for everyday hospital use, while the straightforward design allows for easy cleaning and maintenance.",
    "image": "/images/Product Assets/Beds/Plain-Examination-Bed.webp",
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
      "Mattress": "Included"
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
    "modelSpecifications": [
      "MS GH Type Leg"
    ]
  },
  {
    "id": "mf62-plain-cot",
    "slug": "mf62-plain-cot",
    "modelNumber": "MF62",
    "name": "MF62 – Plain Cot",
    "category": "Ward Furniture",
    "description": "The Mathurams Plain Cot Delux is designed for general wards and patient rooms, combining a simple hospital cot design with SS or ABS arm options for enhanced appearance, durability and convenient everyday use.",
    "image": "/images/Product Assets/Beds/Plain-Examination-Bed.webp",
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
      "Mattress": "Included"
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
      "Optional Accessories": "Pillow / Safety Bumpers",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "Deluxe – SS Arms"
    ]
  },
  {
    "id": "mf79-attender-cum-chair",
    "slug": "mf79-attender-cum-chair",
    "modelNumber": "MF79",
    "name": "MF79 – Attender Cum Chair",
    "category": "Ward Furniture",
    "description": "The Mathurams MS Attender Cum Chair is a dual-purpose hospital furniture solution designed to function as a comfortable seating chair during the day and convert into a resting cot when required. It provides a practical solution for patient attendants, particularly in hospital rooms where efficient use of space is important.",
    "image": "/images/Product Assets/Beds/Attender-Cot-Bed.webp",
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
    "modelSpecifications": [
      "MS"
    ]
  },
  {
    "id": "mf24-icu-cot-manual",
    "slug": "mf24-icu-cot-manual",
    "modelNumber": "MF24",
    "name": "MF24 – ICU Cot Manual",
    "category": "ICU & Critical Care",
    "description": "The Mathurams 5-Function Manual ICU Cot is designed for intensive care and high-dependency environments, combining essential patient positioning functions with durable construction and convenient manual operation. The cot provides five key positioning functions—backrest, knee/leg raise, height adjustment, Trendelenburg and Reverse Trendelenburg—allowing caregivers to position patients according to their care requirements. The manual crank mechanism provides smooth and reliable adjustment without dependence on electrical power.",
    "image": "/images/Product Assets/ICU CotBed/ICU-Cot.webp",
    "features": [
      "Five-function manual adjustment",
      "Manual crank operation",
      "Durable hospital-grade construction",
      "Easy-to-clean surfaces",
      "Multiple head and foot panel options",
      "Multiple side railing configurations",
      "Flexible wheel options",
      "IV provision included"
    ],
    "specifications": {
      "Overall Dimension": "81\" L × 36\" W",
      "Height with Mattress": "24\"–33\"",
      "Operation": "Manual Crank",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "IV Provision": "Provided"
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
      "Head & Foot End Panel": "MS / SS / ABS",
      "Mattress": "Zip Type / Plain",
      "Side Railings": "MS Plain / SS Plain / ABS / Aluminium Collapsible / SS Collapsible",
      "Wheel Type": "Plain / Central Lock",
      "Optional Accessories": "Urine Bag Holder / Safety Bumpers / Additional Accessories as per requirement",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "ABS Arms",
      "ABS Side Rails"
    ]
  },
  {
    "id": "mf27-icu-cot-3-function-manual",
    "slug": "mf27-icu-cot-3-function-manual",
    "modelNumber": "MF27",
    "name": "MF27 – ICU Cot 3 Function Manual",
    "category": "ICU & Critical Care",
    "description": "The Mathurams 3-Function Manual ICU Cot is designed for intensive care and critical care environments, providing essential patient positioning through reliable manual crank operation. Its practical configuration supports comfortable patient care while allowing hospitals to select suitable arms, side rails and mobility options.",
    "image": "/images/Product Assets/ICU CotBed/-Remote-ICU-Cot.webp",
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
      "Mattress": "Included"
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
      "Optional Accessories": "Pillow / Safety Bumpers",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "SS Arms",
      "SS Collapsible Side Rails"
    ]
  },
  {
    "id": "mf30-icu-cot-remote",
    "slug": "mf30-icu-cot-remote",
    "modelNumber": "MF30",
    "name": "MF30 – ICU Cot Remote",
    "category": "ICU & Critical Care",
    "description": "The Mathurams Remote ICU Cot combines convenient electrically powered patient positioning with durable hospital-grade construction. It is available in 3-Function and 5-Function configurations, allowing hospitals to select the level of positioning control suited to their requirements.",
    "image": "/images/Product Assets/ICU CotBed/-Remote-ICU-Cot.webp",
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
      "Functions": "3 Function / 5 Function",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coating / SS Finish",
      "IV Provision": "Provided",
      "Mattress": "Included"
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
    "detailedSpec": {
      "Arms": "MS / SS / ABS",
      "Side Railings": "MS Plain / SS Plain / ABS / Aluminium Collapsible / SS Collapsible",
      "Wheel Type": "Plain / Central Lock",
      "Optional Accessories": "Pillow / Safety Bumpers",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "ABS Arms",
      "ABS Side Rails (With Centre Locking)"
    ]
  },
  {
    "id": "mf38-trolley-cum-cot",
    "slug": "mf38-trolley-cum-cot",
    "modelNumber": "MF38",
    "name": "MF38 – Trolley Cum Cot",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams Trolley Cum Cot functions as both a patient transfer trolley and a hospital cot, allowing patients to be transferred conveniently and then accommodated on the same unit for routine care.",
    "image": "/images/Product Assets/Beds/Hospital-Fowler-Cot-Bed.webp",
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
      "Mattress": "Included"
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
      "Optional Accessories": "Pillow / Safety Bumpers",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "SS Side Rails"
    ]
  },
  {
    "id": "mf43-stretcher-trolley",
    "slug": "mf43-stretcher-trolley",
    "modelNumber": "MF43",
    "name": "MF43 – Stretcher Trolley",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams Stretcher Trolley is designed for convenient and stable patient transportation within hospitals, treatment areas and procedure rooms. Its sturdy construction provides reliable support during patient movement, while the detachable stretcher top allows practical handling during transfers.",
    "image": "/images/Product Assets/Stretchers/Plain-Stretcher.webp",
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
      "Mattress": "Included"
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
      "Optional Accessories": "Pillow / Safety Bumpers",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "MS"
    ]
  },
  {
    "id": "mf44-stretcher-trolley",
    "slug": "mf44-stretcher-trolley",
    "modelNumber": "MF44",
    "name": "MF44 – Stretcher Trolley",
    "category": "Emergency & Patient Transfer",
    "description": "Full stainless steel stretcher trolley featuring a detachable top stretcher for patient transfers.",
    "image": "/images/Product Assets/Stretchers/Plain-Stretcher.webp",
    "features": [
      "Full SS Construction",
      "Detachable Top Stretcher",
      "Corrosion-Resistant and Hygenic"
    ],
    "specifications": {
      "Specification 1": "SS"
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
    "modelSpecifications": [
      "SS"
    ]
  },
  {
    "id": "mf45-stretcher-trolley",
    "slug": "mf45-stretcher-trolley",
    "modelNumber": "MF45",
    "name": "MF45 – Stretcher Trolley",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams Hi-Lo Stretcher is designed for patient transportation with the added advantage of height adjustment and backrest positioning, allowing caregivers to set the stretcher at a convenient level for patient handling and transfer.",
    "image": "/images/Product Assets/Stretchers/Plain-Stretcher.webp",
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
      "Mattress": "Included"
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
      "Optional Accessories": "Pillow / Safety Bumpers",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "Hi-Lo"
    ]
  },
  {
    "id": "mf49-wheel-chair",
    "slug": "mf49-wheel-chair",
    "modelNumber": "MF49",
    "name": "MF49 – Wheel Chair",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams MS Foldable Wheelchair is designed to provide convenient mobility and patient transportation within hospitals, healthcare facilities and other care environments. Its foldable construction allows the wheelchair to be compactly stored and transported when not in use, while the MS frame provides a durable structure for regular use.",
    "image": "/images/Product Assets/Stretchers/Plain-Stretcher.webp",
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
    "modelSpecifications": [
      "MS Foldable"
    ]
  },
  {
    "id": "mf50-wheel-chair",
    "slug": "mf50-wheel-chair",
    "modelNumber": "MF50",
    "name": "MF50 – Wheel Chair",
    "category": "Emergency & Patient Transfer",
    "description": "Rigid, non-foldable MS wheelchair designed for heavy daily hospital transport.",
    "image": "/images/Product Assets/Stretchers/Plain-Stretcher.webp",
    "features": [
      "Heavy Duty Rigid Chassis",
      "Durable Sheet Seat Base",
      "Push Rim Rear Wheels"
    ],
    "specifications": {
      "Specification 1": "MS"
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
    "modelSpecifications": [
      "MS"
    ]
  },
  {
    "id": "mf51-wheel-chair",
    "slug": "mf51-wheel-chair",
    "modelNumber": "MF51",
    "name": "MF51 – Wheel Chair",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams Wheelchair is designed to provide reliable and comfortable patient mobility within hospitals, healthcare facilities and other care environments. Available in MS, SS and SS Heavy variants, the wheelchair provides different construction choices to suit varying usage requirements.",
    "image": "/images/Product Assets/Stretchers/Plain-Stretcher.webp",
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
    "modelSpecifications": [
      "SS"
    ]
  },
  {
    "id": "mf52-wheel-chair",
    "slug": "mf52-wheel-chair",
    "modelNumber": "MF52",
    "name": "MF52 – Wheel Chair",
    "category": "Emergency & Patient Transfer",
    "description": "Extra reinforced heavy-duty stainless steel wheelchair built for bariatric patients.",
    "image": "/images/Product Assets/Stretchers/Plain-Stretcher.webp",
    "features": [
      "Reinforced Dual Crossbars",
      "Wider Seat Dimensions",
      "Solid Polyurethane Flat-Free Wheels"
    ],
    "specifications": {
      "Specification 1": "SS Heavy"
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
    "modelSpecifications": [
      "SS Heavy"
    ]
  },
  {
    "id": "mf66-transfer-trolley",
    "slug": "mf66-transfer-trolley",
    "modelNumber": "MF66",
    "name": "MF66 – Transfer Trolley",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams Transfer Trolley is designed for controlled patient transfer between sterile and non-sterile hospital areas. Its detachable and transferable stretcher top allows the patient-supporting section to move between trolley bases, helping maintain separation between different hospital zones during transfer.",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
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
      "Mattress": "Included"
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
      "Optional Accessories": "Pillow / Safety Bumpers",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "MS"
    ]
  },
  {
    "id": "mf67-transfer-trolley",
    "slug": "mf67-transfer-trolley",
    "modelNumber": "MF67",
    "name": "MF67 – Transfer Trolley",
    "category": "Emergency & Patient Transfer",
    "description": "Stainless steel patient transfer trolley, perfect for emergency ward and OT use.",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
    "features": [
      "Complete Stainless Steel Body",
      "Smooth Glide Side Guards",
      "Hygienic Surface Finish"
    ],
    "specifications": {
      "Specification 1": "SS"
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
    "modelSpecifications": [
      "SS"
    ]
  },
  {
    "id": "mf68-transfer-trolley",
    "slug": "mf68-transfer-trolley",
    "modelNumber": "MF68",
    "name": "MF68 – Transfer Trolley",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams Hi-Lo Transfer Trolley combines controlled patient transfer with height-adjustable positioning, allowing caregivers to adjust the trolley height for better alignment with beds and other patient-support surfaces during transfers.",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
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
      "Mattress": "Included"
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
      "Optional Accessories": "Pillow / Safety Bumpers",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "Hi-Lo MS"
    ]
  },
  {
    "id": "mf69-transfer-trolley",
    "slug": "mf69-transfer-trolley",
    "modelNumber": "MF69",
    "name": "MF69 – Transfer Trolley",
    "category": "Emergency & Patient Transfer",
    "description": "Premium height adjustable stainless steel patient transfer trolley with central lock.",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
    "features": [
      "Fully Stainless Steel Structure",
      "Hydraulic Height Adjust Option",
      "X-Ray Translucent Top Base"
    ],
    "specifications": {
      "Specification 1": "Hi-Lo SS"
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
    "modelSpecifications": [
      "Hi-Lo SS"
    ]
  },
  {
    "id": "mf115-patient-shifter",
    "slug": "mf115-patient-shifter",
    "modelNumber": "MF115",
    "name": "MF115 – Patient Shifter",
    "category": "Emergency & Patient Transfer",
    "description": "The Mathurams Aluminium Patient Shifter is designed to assist caregivers in rolling and repositioning patients between beds, stretchers and other patient-support surfaces. Its smooth rolling mechanism helps facilitate patient transfers while reducing the need for direct lifting.",
    "image": "/images/Product Assets/Stretchers/Plain-Stretcher.webp",
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
      "Finish": "Anodized"
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
    "modelSpecifications": [
      "Aluminium"
    ]
  },
  {
    "id": "mf36-baby-cradle",
    "slug": "mf36-baby-cradle",
    "modelNumber": "MF36",
    "name": "MF36 – Baby Cradle",
    "category": "Labour & Maternity",
    "description": "The Mathurams MS Baby Cradle is designed to provide a secure and comfortable resting space for newborns in hospital maternity and neonatal care areas. Its compact design makes it suitable for convenient placement beside the mother’s bed.",
    "image": "/images/Product Assets/Beds/Attender-Cot-Bed.webp",
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
      "Mattress": "Included"
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
    "detailedSpec": {
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "MS"
    ]
  },
  {
    "id": "mf37-baby-cradle",
    "slug": "mf37-baby-cradle",
    "modelNumber": "MF37",
    "name": "MF37 – Baby Cradle",
    "category": "Labour & Maternity",
    "description": "The Mathurams SS Baby Cradle is designed to provide a clean, secure and comfortable resting space for newborns in maternity and neonatal care areas. Stainless-steel construction offers excellent corrosion resistance, easy cleaning and long-term durability, making it particularly suitable for hospital environments where hygiene and frequent cleaning are important.",
    "image": "/images/Product Assets/Beds/Attender-Cot-Bed.webp",
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
      "Mattress": "Included"
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
    "detailedSpec": {
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "SS"
    ]
  },
  {
    "id": "mf70-ss-remote-labor-cot",
    "slug": "mf70-ss-remote-labor-cot",
    "modelNumber": "MF70",
    "name": "MF70 – SS Remote Labor Cot",
    "category": "Labour & Maternity",
    "description": "The Mathurams SS Remote Labour Cot – V Type is designed to support patient positioning and caregiver access during labour and maternity procedures. Its V-type design provides a dedicated configuration for obstetric care, while remote-controlled adjustment allows convenient positioning without manual crank operation.",
    "image": "/images/Product Assets/Beds/Labour-Table-Hydraulic-Bed.webp",
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
      "Mattress": "Included"
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
      "Optional Accessories": "Pillow",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "V-Type"
    ]
  },
  {
    "id": "mf71-ss-remote-labor-cot",
    "slug": "mf71-ss-remote-labor-cot",
    "modelNumber": "MF71",
    "name": "MF71 – SS Remote Labor Cot",
    "category": "Labour & Maternity",
    "description": "The Mathurams SS Remote Labour Cot – Height Adjustable is designed for labour and maternity care, providing electrically controlled height adjustment to support convenient patient handling and caregiver access during procedures. The adjustable working height allows the cot to be positioned according to procedural and caregiver requirements.",
    "image": "/images/Product Assets/Beds/Labour-Table-Hydraulic-Bed.webp",
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
      "Mattress": "Included"
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
      "Optional Accessories": "Pillow",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "Height Up & Down"
    ]
  },
  {
    "id": "mf72-manual-labor-cot-ss",
    "slug": "mf72-manual-labor-cot-ss",
    "modelNumber": "MF72",
    "name": "MF72 – Manual Labor Cot SS",
    "category": "Labour & Maternity",
    "description": "The Mathurams SS Manual Labour Cot – V Type is designed to support patient positioning and caregiver access during labour and maternity procedures. Its V-type design is configured for obstetric care, while the manual operating mechanism provides reliable positioning without dependence on electrical power.",
    "image": "/images/Product Assets/Beds/Labour-Table-Hydraulic-Bed.webp",
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
      "Mattress": "Included"
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
      "Optional Accessories": "Pillow",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "V-Type"
    ]
  },
  {
    "id": "mf73-manual-labor-cot-ss",
    "slug": "mf73-manual-labor-cot-ss",
    "modelNumber": "MF73",
    "name": "MF73 – Manual Labor Cot SS",
    "category": "Labour & Maternity",
    "description": "The Mathurams SS Manual Labour Cot – Height Adjustable is designed for labour and maternity care, combining essential patient positioning with manual height adjustment for convenient patient handling and caregiver access during procedures.",
    "image": "/images/Product Assets/Beds/Labour-Table-Hydraulic-Bed.webp",
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
      "Mattress": "Included"
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
      "Optional Accessories": "Pillow",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "Height Up & Down"
    ]
  },
  {
    "id": "mf90-pediatric-cot",
    "slug": "mf90-pediatric-cot",
    "modelNumber": "MF90",
    "name": "MF90 – Pediatric Cot",
    "category": "Labour & Maternity",
    "description": "The Mathurams MS Pediatric Cot is designed specifically for the care and accommodation of children in hospital wards and pediatric care areas. Its compact dimensions are suited to younger patients, while the protective cot design provides a secure and comfortable resting environment during hospital stays.",
    "image": "/images/Product Assets/Beds/Attender-Cot-Bed.webp",
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
      "Mattress": "Included"
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
      "Optional Accessories": "Pillow, IV Provision",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "MS"
    ]
  },
  {
    "id": "mf114-pediatric-fowlers-cot",
    "slug": "mf114-pediatric-fowlers-cot",
    "modelNumber": "MF114",
    "name": "MF114 – Pediatric Fowler's Cot",
    "category": "Labour & Maternity",
    "description": "Pediatric fowler cot featuring two manual cranks for backrest and knee-rest adjustment.",
    "image": "/images/Product Assets/Beds/Attender-Cot-Bed.webp",
    "features": [
      "Adjustable Back & Knee-rest",
      "Full Guard Safety Rails",
      "Solid Steel Construction"
    ],
    "specifications": {
      "Specification 1": "MS"
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
    "modelSpecifications": [
      "MS"
    ]
  },
  {
    "id": "mf13-ss-revolving-stool",
    "slug": "mf13-ss-revolving-stool",
    "modelNumber": "MF13",
    "name": "MF13 – SS Revolving Stool",
    "category": "Examination & Consultation",
    "description": "The Mathurams SS Revolving Stool is designed to provide comfortable and flexible seating for healthcare professionals during examinations, procedures and routine clinical activities. Its soft cushioned seat and adjustable height allow users to set a comfortable working position.",
    "image": "/images/Product Assets/Hospital Stool and chair/Revolving-Stool.webp",
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
    "modelSpecifications": [
      "Cushion"
    ]
  },
  {
    "id": "mf14-ss-revolving-stool",
    "slug": "mf14-ss-revolving-stool",
    "modelNumber": "MF14",
    "name": "MF14 – SS Revolving Stool",
    "category": "Examination & Consultation",
    "description": "The Mathurams SS Revolving Stool with SS Top is designed to provide stable and flexible seating for healthcare professionals during examinations, procedures and routine clinical activities. Its stainless-steel top and height-adjustable revolving design offer a practical and easy-to-maintain seating solution for healthcare environments.",
    "image": "/images/Product Assets/Hospital Stool and chair/Revolving-Stool.webp",
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
    "modelSpecifications": [
      "SS Top"
    ]
  },
  {
    "id": "mf15-ss-revolving-stool",
    "slug": "mf15-ss-revolving-stool",
    "modelNumber": "MF15",
    "name": "MF15 – SS Revolving Stool",
    "category": "Examination & Consultation",
    "description": "The Mathurams SS Revolving Stool with Backrest Cushion provides comfortable and flexible seating for healthcare professionals during examinations, procedures and routine clinical activities. The cushioned seat and backrest provide added comfort, while the height-adjustable revolving design allows convenient positioning during use.",
    "image": "/images/Product Assets/Hospital Stool and chair/Revolving-Stool.webp",
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
    "modelSpecifications": [
      "With Backrest"
    ]
  },
  {
    "id": "mf16-ms-revolving-stool",
    "slug": "mf16-ms-revolving-stool",
    "modelNumber": "MF16",
    "name": "MF16 – MS Revolving Stool",
    "category": "Examination & Consultation",
    "description": "The Mathurams MS Revolving Stool with Cushion is designed to provide comfortable and flexible seating for healthcare professionals during examinations, procedures and routine clinical activities. Its cushioned seat and revolving design provide convenient seating while the MS construction offers durability for regular use.",
    "image": "/images/Product Assets/Hospital Stool and chair/Revolving-Stool.webp",
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
    "modelSpecifications": [
      "Cushion"
    ]
  },
  {
    "id": "mf17-ms-revolving-stool",
    "slug": "mf17-ms-revolving-stool",
    "modelNumber": "MF17",
    "name": "MF17 – MS Revolving Stool",
    "category": "Examination & Consultation",
    "description": "The Mathurams MS Revolving Stool with SS Top is designed to provide stable and flexible seating for healthcare professionals during examinations, procedures and routine clinical activities. The stainless-steel top offers a smooth, easy-to-clean seating surface, while the MS construction provides durability for regular use.",
    "image": "/images/Product Assets/Hospital Stool and chair/Revolving-Stool.webp",
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
    "modelSpecifications": [
      "SS Top"
    ]
  },
  {
    "id": "mf18-ms-revolving-stool",
    "slug": "mf18-ms-revolving-stool",
    "modelNumber": "MF18",
    "name": "MF18 – MS Revolving Stool",
    "category": "Examination & Consultation",
    "description": "The Mathurams MS Revolving Stool with Backrest Cushion is designed to provide comfortable and flexible seating for healthcare professionals during examinations, procedures and routine clinical activities. The cushioned seat and backrest provide added comfort, while the revolving design allows convenient movement during use.",
    "image": "/images/Product Assets/Hospital Stool and chair/Revolving-Stool.webp",
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
    "modelSpecifications": [
      "With Backrest"
    ]
  },
  {
    "id": "mf64-deluxe-examination-couch",
    "slug": "mf64-deluxe-examination-couch",
    "modelNumber": "MF64",
    "name": "MF64 – Deluxe Examination Couch",
    "category": "Examination & Consultation",
    "description": "Deluxe patient examination couch bed featuring built-in plain double cabinet lockers.",
    "image": "/images/Product Assets/Beds/Hospital-Examination-Couch-Bed.webp",
    "features": [
      "Built-in Storage Cabinets",
      "Ratchet Backrest Head Rise",
      "Vinyl Covered Padded Top"
    ],
    "specifications": {
      "Specification 1": "Plain Cabinets"
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
    "modelSpecifications": [
      "Plain Cabinets"
    ]
  },
  {
    "id": "mf65-deluxe-examination-couch",
    "slug": "mf65-deluxe-examination-couch",
    "modelNumber": "MF65",
    "name": "MF65 – Deluxe Examination Couch",
    "category": "Examination & Consultation",
    "description": "The Mathurams Deluxe Examination Couch combines a comfortable examination surface with integrated storage, allowing frequently required clinical supplies to be kept conveniently within reach. The adjustable backrest supports different patient positions during examinations, while the attached foot step provides convenient access to the couch.",
    "image": "/images/Product Assets/Beds/Hospital-Examination-Couch-Bed.webp",
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
      "Mattress": "Included"
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
      "Backrest Operation": "Manual Ratchet / Gas Spring",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "Cabinets + Drawers"
    ]
  },
  {
    "id": "mf80-examination-table",
    "slug": "mf80-examination-table",
    "modelNumber": "MF80",
    "name": "MF80 – Examination Table",
    "category": "Examination & Consultation",
    "description": "The Mathurams Plain Examination Table is designed to assist patients during diagnostic checkups, physical exams and clinical assessments. It features a stable padded top on a durable framework.",
    "image": "/images/Product Assets/Beds/Plain-Examination-Bed.webp",
    "features": [
      "Flat cushioned examination deck",
      "Standard height suitable for most clinical setups",
      "Durable frame with protective rubber boots",
      "Vinyl leatherette cover for quick wipe sanitisation"
    ],
    "specifications": {
      "Dimension": "72\" L × 24\" W × 34\" H",
      "Material": "MS / SS",
      "Finish": "Epoxy Powder Coated / Polished SS"
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
    "modelSpecifications": [
      "Plain"
    ]
  },
  {
    "id": "mf81-examination-table",
    "slug": "mf81-examination-table",
    "modelNumber": "MF81",
    "name": "MF81 – Examination Table",
    "category": "Examination & Consultation",
    "description": "Patient examination table featuring manual ratchet head rise elevation.",
    "image": "/images/Product Assets/Beds/Plain-Examination-Bed.webp",
    "features": [
      "Multi-position Headrest Ratchet",
      "Comfortable Padded Upholstery",
      "Anti-slip Leg Supports"
    ],
    "specifications": {
      "Specification 1": "Head Rise"
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
    "modelSpecifications": [
      "Head Rise"
    ]
  },
  {
    "id": "mf82-examination-table",
    "slug": "mf82-examination-table",
    "modelNumber": "MF82",
    "name": "MF82 – Examination Table",
    "category": "Examination & Consultation",
    "description": "Padded examination table with a single storage cabinet door underneath.",
    "image": "/images/Product Assets/Beds/Plain-Examination-Bed.webp",
    "features": [
      "Single Side Storage Locker",
      "Adjustable Backrest Section",
      "Waterproof Vinyl Cover"
    ],
    "specifications": {
      "Specification 1": "Single Door"
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
    "modelSpecifications": [
      "Single Door"
    ]
  },
  {
    "id": "mf83-examination-table",
    "slug": "mf83-examination-table",
    "modelNumber": "MF83",
    "name": "MF83 – Examination Table",
    "category": "Examination & Consultation",
    "description": "Padded examination table with two cabinets and two drawers built into the base.",
    "image": "/images/Product Assets/Beds/Plain-Examination-Bed.webp",
    "features": [
      "Dual Storage Lockers",
      "Two Smooth Drawers",
      "Adjustable Head Rest Support"
    ],
    "specifications": {
      "Specification 1": "Double Door",
      "Specification 2": "2 Drawers"
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
    "modelSpecifications": [
      "Double Door",
      "2 Drawers"
    ]
  },
  {
    "id": "mf93-gynec-examination-couch",
    "slug": "mf93-gynec-examination-couch",
    "modelNumber": "MF93",
    "name": "MF93 – Gynec Examination Couch",
    "category": "Examination & Consultation",
    "description": "The Mathurams Gynec Examination Couch is designed for gynaecological examinations and procedures, providing comfortable patient positioning along with integrated storage and gynaecological support features.",
    "image": "/images/Product Assets/Beds/Hospital-Examination-Couch-Bed.webp",
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
      "Finish": "Epoxy Powder Coating"
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
      "Mobility": "Fixed / Wheels",
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "MS"
    ]
  },
  {
    "id": "mf94-gynec-examination-couch",
    "slug": "mf94-gynec-examination-couch",
    "modelNumber": "MF94",
    "name": "MF94 – Gynec Examination Couch",
    "category": "Examination & Consultation",
    "description": "Fully motorized remote-controlled gynecological exam couch with height adjustment.",
    "image": "/images/Product Assets/Beds/Hospital-Examination-Couch-Bed.webp",
    "features": [
      "Wired Handset Control",
      "Electric Height & Tilt Adjust",
      "Padded Seamless Upholstery"
    ],
    "specifications": {
      "Specification 1": "MS",
      "Specification 2": "Remote"
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
    "modelSpecifications": [
      "MS",
      "Remote"
    ]
  },
  {
    "id": "mf95-gynec-examination-table",
    "slug": "mf95-gynec-examination-table",
    "modelNumber": "MF95",
    "name": "MF95 – Gynec Examination Table",
    "category": "Examination & Consultation",
    "description": "The Mathurams Gynec Examination Table is designed for routine gynaecological examinations and procedures, providing a stable and comfortable patient platform with the necessary positioning support for examination.",
    "image": "/images/Product Assets/Beds/Plain-Examination-Bed.webp",
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
    "detailedSpec": {
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "MS"
    ]
  },
  {
    "id": "mf96-scan-table",
    "slug": "mf96-scan-table",
    "modelNumber": "MF96",
    "name": "MF96 – Scan Table",
    "category": "Examination & Consultation",
    "description": "The Mathurams Scan Table is designed for diagnostic and scanning procedures, providing a comfortable patient platform with electrically controlled positioning. The wired remote enables convenient height adjustment, while the adjustable backrest supports patient positioning during examinations.",
    "image": "/images/Product Assets/Beds/Plain-Examination-Bed.webp",
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
      "Finish": "Epoxy Powder Coating"
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
    "detailedSpec": {
      "Colours": "Coffee Brown / Chocolate Brown / Light Blue / Dark Blue / Reliance Green / Pista Green / Parrot Green / DA Grey / Basalt Grey / Orange / Lemon Yellow / Black / Violet / Beige"
    },
    "modelSpecifications": [
      "MS"
    ]
  },
  {
    "id": "mf101-blood-collection-chair",
    "slug": "mf101-blood-collection-chair",
    "modelNumber": "MF101",
    "name": "MF101 – Blood Collection Chair",
    "category": "Examination & Consultation",
    "description": "The Mathurams Blood Collection Chair is designed to provide comfortable and supportive seating for patients during blood collection and other short clinical procedures. Its ergonomic seating arrangement helps maintain a convenient patient position, while the integrated arm support provides a stable surface for blood collection.",
    "image": "/images/Product Assets/Furnitures/Hospital-Revolving-Stool.webp",
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
    "modelSpecifications": []
  },
  {
    "id": "mf106-ss-stool",
    "slug": "mf106-ss-stool",
    "modelNumber": "MF106",
    "name": "MF106 – SS Stool",
    "category": "Examination & Consultation",
    "description": "The Mathurams Attendant Stool provides simple and convenient seating for patient attendants in hospital wards and patient rooms. Its compact design allows easy placement beside hospital beds while occupying minimal floor space.",
    "image": "/images/Product Assets/Hospital Stool and chair/Revolving-Stool.webp",
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
    "modelSpecifications": []
  },
  {
    "id": "mf110-x-ray-lobby",
    "slug": "mf110-x-ray-lobby",
    "modelNumber": "MF110",
    "name": "MF110 – X-Ray Lobby",
    "category": "Examination & Consultation",
    "description": "The Mathurams X-Ray View Box is designed for clear and convenient viewing of X-ray films in hospitals, clinics and diagnostic centres. It provides a uniformly illuminated viewing surface to assist medical professionals in examining radiographic films.",
    "image": "/images/Product Assets/SurgicalSink/OT-Surgical-Scrub-Sink.webp",
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
    "modelSpecifications": [
      "Double"
    ]
  },
  {
    "id": "mf119-x-ray-lobby",
    "slug": "mf119-x-ray-lobby",
    "modelNumber": "MF119",
    "name": "MF119 – X-Ray Lobby",
    "category": "Examination & Consultation",
    "description": "Single panel LED medical X-ray film illuminator/lobby viewer.",
    "image": "/images/Product Assets/SurgicalSink/OT-Surgical-Scrub-Sink.webp",
    "features": [
      "Bright Uniform Backlight",
      "Slim Profile Frame",
      "Magnetic Film Clip Holder"
    ],
    "specifications": {
      "Specification 1": "Single"
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
    "modelSpecifications": [
      "Single"
    ]
  },
  {
    "id": "mf142-x-ray-lobby",
    "slug": "mf142-x-ray-lobby",
    "modelNumber": "MF142",
    "name": "MF142 – X-Ray Lobby",
    "category": "Examination & Consultation",
    "description": "Large 4-panel medical LED X-ray lobby view box for surgical clinics and OT.",
    "image": "/images/Product Assets/SurgicalSink/OT-Surgical-Scrub-Sink.webp",
    "features": [
      "4 Film Viewing Sections",
      "Bright Shadowless Illumination",
      "Wall-mounted Sleek Frame"
    ],
    "specifications": {
      "Specification 1": "Four"
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
    "modelSpecifications": [
      "Four"
    ]
  },
  {
    "id": "mf10-instrument-trolley",
    "slug": "mf10-instrument-trolley",
    "modelNumber": "MF10",
    "name": "MF10 – Instrument Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams SS Instrument Trolley is designed for convenient placement and organised handling of surgical and medical instruments during procedures. Its stainless-steel construction provides a durable, smooth and easy-to-clean surface suitable for healthcare environments.",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
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
    "modelSpecifications": [
      "24 × 18"
    ]
  },
  {
    "id": "mf11-instrument-trolley",
    "slug": "mf11-instrument-trolley",
    "modelNumber": "MF11",
    "name": "MF11 – Instrument Trolley",
    "category": "Medical Trolleys",
    "description": "Medium-sized stainless steel medical instrument trolley (36 x 24 inches).",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
    "features": [
      "Spacious 3x2 Ft Shelves",
      "Four Silent Castors",
      "Rigid Welded Tubular Frame"
    ],
    "specifications": {
      "Specification 1": "3 × 2"
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
    "modelSpecifications": [
      "3 × 2"
    ]
  },
  {
    "id": "mf12-instrument-trolley",
    "slug": "mf12-instrument-trolley",
    "modelNumber": "MF12",
    "name": "MF12 – Instrument Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams SS Instrument Trolley is designed for convenient placement and organised handling of surgical and medical instruments during procedures. Its stainless-steel construction provides a durable, smooth and easy-to-clean surface suitable for healthcare environments.",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
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
    "modelSpecifications": [
      "4 × 2"
    ]
  },
  {
    "id": "mf46-ss-mayos-trolley",
    "slug": "mf46-ss-mayos-trolley",
    "modelNumber": "MF46",
    "name": "MF46 – SS Mayo's Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams SS Mayo’s Trolley is a height-adjustable instrument trolley designed to position surgical instruments conveniently over the operating table during procedures. Its smooth stainless-steel tray provides an easy-to-clean working surface, while the adjustable height allows convenient positioning according to procedural requirements.",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
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
    "modelSpecifications": []
  },
  {
    "id": "mf47-drug-trolley",
    "slug": "mf47-drug-trolley",
    "modelNumber": "MF47",
    "name": "MF47 – Drug Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams Drug Trolley is designed for organised storage and convenient distribution of medicines across hospital wards and patient care areas. Its multiple-bin arrangement helps segregate and arrange medications systematically, allowing healthcare staff to access required medicines efficiently during routine rounds.",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
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
    "modelSpecifications": [
      "MS"
    ]
  },
  {
    "id": "mf57-ss-dressing-trolley",
    "slug": "mf57-ss-dressing-trolley",
    "modelNumber": "MF57",
    "name": "MF57 – SS Dressing Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams SS Dressing Trolley is designed for convenient organisation and handling of dressing materials during routine patient care. Its two-level stainless-steel construction provides dedicated working and storage surfaces, while non-fall three-sided railings help keep dressing materials securely positioned during movement.",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
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
    "modelSpecifications": [
      "24 × 18"
    ]
  },
  {
    "id": "mf58-ecg-trolley",
    "slug": "mf58-ecg-trolley",
    "modelNumber": "MF58",
    "name": "MF58 – ECG Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams ECG Trolley is designed for organised placement and convenient handling of ECG equipment, accessories and consumables during diagnostic procedures. Its three-shelf arrangement provides dedicated space for the ECG recorder and supporting items, while the integrated cable holder helps keep ECG lead cables organised and reduces tangling during use.",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
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
    "modelSpecifications": [
      "MS"
    ]
  },
  {
    "id": "mf59-ecg-trolley",
    "slug": "mf59-ecg-trolley",
    "modelNumber": "MF59",
    "name": "MF59 – ECG Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams Z Type ECG Trolley is designed for organised placement and convenient handling of ECG equipment during diagnostic procedures. Its distinctive Z-type frame provides a compact and practical structure for positioning the trolley alongside the patient, while dedicated shelves provide space for the ECG recorder, accessories and consumables.",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
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
    "modelSpecifications": [
      "MS Z-Type"
    ]
  },
  {
    "id": "mf60-ecg-trolley",
    "slug": "mf60-ecg-trolley",
    "modelNumber": "MF60",
    "name": "MF60 – ECG Trolley",
    "category": "Medical Trolleys",
    "description": "Polished stainless steel ECG machine cart with multiple shelves and drawer.",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
    "features": [
      "Full SS Cleanable Body",
      "Drawer & Intermediate Shelf",
      "ECG Lead Hook Attachments"
    ],
    "specifications": {
      "Specification 1": "SS"
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
    "modelSpecifications": [
      "SS"
    ]
  },
  {
    "id": "mf75-cylinder-trolley",
    "slug": "mf75-cylinder-trolley",
    "modelNumber": "MF75",
    "name": "MF75 – Cylinder Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams B Type Cylinder Trolley is designed for the convenient handling and transportation of B-type medical gas cylinders within hospitals and healthcare facilities. Its compact structure securely supports the cylinder while allowing easy movement between wards, treatment areas and other clinical locations.",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
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
    "modelSpecifications": [
      "B Type MS"
    ]
  },
  {
    "id": "mf76-cylinder-trolley",
    "slug": "mf76-cylinder-trolley",
    "modelNumber": "MF76",
    "name": "MF76 – Cylinder Trolley",
    "category": "Medical Trolleys",
    "description": "Stainless steel oxygen cylinder trolley tailored for B-type gas cylinders.",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
    "features": [
      "SS Tubular Construction",
      "Secure Chain Lock Hook",
      "Castor Wheels for mobility"
    ],
    "specifications": {
      "Specification 1": "B Type SS"
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
    "modelSpecifications": [
      "B Type SS"
    ]
  },
  {
    "id": "mf77-cylinder-trolley",
    "slug": "mf77-cylinder-trolley",
    "modelNumber": "MF77",
    "name": "MF77 – Cylinder Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams A Type Cylinder Trolley is designed for convenient and secure transportation of A-type medical gas cylinders within hospitals and healthcare facilities. Its compact construction supports easy handling of the cylinder between wards, treatment areas and other patient care locations.",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
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
    "modelSpecifications": [
      "A Type SS"
    ]
  },
  {
    "id": "mf78-cylinder-trolley",
    "slug": "mf78-cylinder-trolley",
    "modelNumber": "MF78",
    "name": "MF78 – Cylinder Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams D Type Cylinder Trolley is designed for the secure and convenient transportation of D-type medical gas cylinders within hospitals and healthcare facilities. Its sturdy construction supports safe handling of the larger cylinder while allowing convenient movement between wards, treatment areas and other clinical locations.",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
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
    "modelSpecifications": [
      "D Type SS"
    ]
  },
  {
    "id": "mf84-crash-cart",
    "slug": "mf84-crash-cart",
    "modelNumber": "MF84",
    "name": "MF84 – Crash Cart",
    "category": "Medical Trolleys",
    "description": "The Mathurams Crash Cart is designed to keep essential emergency medical supplies and accessories organised and readily accessible during critical situations. Its modular storage arrangement combines drawers, PVC bins and an SS tray, allowing different emergency supplies to be systematically arranged for quick access.",
    "image": "/images/Product Assets/HospitalTrolley/Hospital-Crash-Cart-Trolley.webp",
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
    "modelSpecifications": [
      "MS"
    ]
  },
  {
    "id": "mf85-crash-cart",
    "slug": "mf85-crash-cart",
    "modelNumber": "MF85",
    "name": "MF85 – Crash Cart",
    "category": "Medical Trolleys",
    "description": "All-stainless steel emergency resuscitation crash cart with multiple drawers.",
    "image": "/images/Product Assets/HospitalTrolley/Hospital-Crash-Cart-Trolley.webp",
    "features": [
      "Full SS Body Construction",
      "Defibrillator Board included",
      "Hygienic easy-clean design"
    ],
    "specifications": {
      "Specification 1": "SS"
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
    "modelSpecifications": [
      "SS"
    ]
  },
  {
    "id": "mf86-crash-cart",
    "slug": "mf86-crash-cart",
    "modelNumber": "MF86",
    "name": "MF86 – Crash Cart",
    "category": "Medical Trolleys",
    "description": "The Mathurams Mini Crash Cart is a compact emergency storage unit designed to keep essential medical supplies organised and readily accessible during critical situations. Its narrow, space-efficient design makes it particularly suitable for patient care areas where a full-size crash cart may occupy more space.",
    "image": "/images/Product Assets/HospitalTrolley/Hospital-Crash-Cart-Trolley.webp",
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
    "modelSpecifications": [
      "Mini"
    ]
  },
  {
    "id": "mf88-nebuliser-trolley",
    "slug": "mf88-nebuliser-trolley",
    "modelNumber": "MF88",
    "name": "MF88 – Nebuliser Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams Nebulizer Trolley is a compact equipment trolley designed for the convenient placement and movement of nebulizer equipment and related accessories within hospitals and patient care areas. Its organised design keeps the nebulizer unit easily accessible while providing a dedicated platform for routine respiratory care.",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
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
    "modelSpecifications": [
      "MS"
    ]
  },
  {
    "id": "mf91-linen-trolley",
    "slug": "mf91-linen-trolley",
    "modelNumber": "MF91",
    "name": "MF91 – Linen Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams Plain Linen Trolley is designed for convenient collection, storage and transportation of linen within hospitals and healthcare facilities. Its spacious design provides practical capacity for handling linen between wards, laundry areas and other hospital departments.",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
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
    "modelSpecifications": [
      "MS"
    ]
  },
  {
    "id": "mf92-linen-trolley",
    "slug": "mf92-linen-trolley",
    "modelNumber": "MF92",
    "name": "MF92 – Linen Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams Door Type Linen Trolley is designed for the organised handling and transportation of linen within hospitals. Its dual-sided storage arrangement provides separate compartments for fresh linen and used linen, helping maintain clear segregation during collection and distribution.",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
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
    "modelSpecifications": [
      "SS"
    ]
  },
  {
    "id": "mf107-biomedical-waste-bin-trolley",
    "slug": "mf107-biomedical-waste-bin-trolley",
    "modelNumber": "MF107",
    "name": "MF107 – Biomedical Waste Bin Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams Biomedical Waste Bin Trolley is designed for the organised collection and segregation of biomedical waste within hospitals and healthcare facilities. The trolley accommodates separate colour-coded bins for different waste categories, supporting systematic waste segregation at the point of collection.",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
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
    "modelSpecifications": [
      "SS"
    ]
  },
  {
    "id": "mf111-laparoscopy-trolley",
    "slug": "mf111-laparoscopy-trolley",
    "modelNumber": "MF111",
    "name": "MF111 – Laparoscopy Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams Laparoscopy Trolley is designed for organised placement and handling of laparoscopic equipment and accessories in operation theatres and procedure areas. Its multi-shelf arrangement provides dedicated space for equipment, while seven integrated power sockets allow convenient connectivity of devices through the trolley.",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
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
    "modelSpecifications": [
      "MS"
    ]
  },
  {
    "id": "mf113-endoscopy-trolley",
    "slug": "mf113-endoscopy-trolley",
    "modelNumber": "MF113",
    "name": "MF113 – Endoscopy Trolley",
    "category": "Medical Trolleys",
    "description": "The Mathurams Endoscopy Trolley is designed for the organised placement and handling of endoscopy equipment and accessories in procedure rooms and diagnostic areas. Its multi-shelf arrangement provides dedicated space for equipment, while the integrated power sockets allow convenient connection of devices directly through the trolley.",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
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
    "modelSpecifications": [
      "MS"
    ]
  },
  {
    "id": "mf129-ot-table",
    "slug": "mf129-ot-table",
    "modelNumber": "MF129",
    "name": "MF129 – OT Table",
    "category": "OT Equipment",
    "description": "Hydraulic surgical operation theater table crafted from 304 grade stainless steel.",
    "image": "/images/Product Assets/Beds/Labour-Table-Hydraulic-Bed.webp",
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
    "modelSpecifications": [
      "SS"
    ]
  },
  {
    "id": "mf130-ot-light",
    "slug": "mf130-ot-light",
    "modelNumber": "MF130",
    "name": "MF130 – OT Light",
    "category": "OT Equipment",
    "description": "Shadowless medical LED ceiling operating light for surgery rooms.",
    "image": "/images/Product Assets/SurgicalSink/OT-Surgical-Scrub-Sink.webp",
    "features": [
      "High Intensity LED Light",
      "Shadowless optics technology",
      "360 degree rotation joints"
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
    "modelSpecifications": []
  },
  {
    "id": "mf131-anesthesia-machine",
    "slug": "mf131-anesthesia-machine",
    "modelNumber": "MF131",
    "name": "MF131 – Anesthesia Machine",
    "category": "OT Equipment",
    "description": "Advanced surgical anesthesia ventilator workstation machine.",
    "image": "/images/Product Assets/SurgicalSink/OT-Surgical-Scrub-Sink.webp",
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
    "modelSpecifications": []
  },
  {
    "id": "mf132-autoclave",
    "slug": "mf132-autoclave",
    "modelNumber": "MF132",
    "name": "MF132 – Autoclave",
    "category": "OT Equipment",
    "description": "High-pressure medical steam sterilizer autoclave for sterilizing surgical instruments.",
    "image": "/images/Product Assets/SurgicalSink/OT-Surgical-Scrub-Sink.webp",
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
    "modelSpecifications": []
  },
  {
    "id": "mf133-multiparameter-monitor",
    "slug": "mf133-multiparameter-monitor",
    "modelNumber": "MF133",
    "name": "MF133 – Multiparameter Monitor",
    "category": "OT Equipment",
    "description": "High-resolution medical monitor displaying ECG, SPO2, TEMP, NIBP, and RESP parameters.",
    "image": "/images/Product Assets/SurgicalSink/OT-Surgical-Scrub-Sink.webp",
    "features": [
      "12.1 Inch Color TFT Screen",
      "Rechargeable Battery built-in",
      "Audible & Visual alarms"
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
    "modelSpecifications": []
  },
  {
    "id": "mf143-suction-apparatus",
    "slug": "mf143-suction-apparatus",
    "modelNumber": "MF143",
    "name": "MF143 – Suction Apparatus",
    "category": "OT Equipment",
    "description": "High vacuum, high flow surgical suction pump unit with double collection jars.",
    "image": "/images/Product Assets/SurgicalSink/OT-Surgical-Scrub-Sink.webp",
    "features": [
      "Oil-free piston vacuum pump",
      "2 Glass/Polycarbonate Jars",
      "Mobile trolley mount frame"
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
    "modelSpecifications": []
  },
  {
    "id": "mf144-fogger",
    "slug": "mf144-fogger",
    "modelNumber": "MF144",
    "name": "MF144 – Fogger",
    "category": "OT Equipment",
    "description": "Ultra-low volume (ULV) cold fogger machine for sterilizing operation theaters.",
    "image": "/images/Product Assets/SurgicalSink/OT-Surgical-Scrub-Sink.webp",
    "features": [
      "High-velocity aerosol spray",
      "Chemical-resistant fluid tank",
      "Adjustable flow rate control"
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
    "modelSpecifications": []
  },
  {
    "id": "mf04-iv-stand",
    "slug": "mf04-iv-stand",
    "modelNumber": "MF04",
    "name": "MF04 – IV Stand",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams Full SS IV Stand is designed to provide convenient and stable support for intravenous fluid administration in hospital wards, treatment areas and patient care environments. Its stainless-steel construction offers durability and easy maintenance for regular hospital use.",
    "image": "/images/Product Assets/IVStands/-IV-Stand.webp",
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
    "modelSpecifications": [
      "Full SS"
    ]
  },
  {
    "id": "mf05-iv-stand",
    "slug": "mf05-iv-stand",
    "modelNumber": "MF05",
    "name": "MF05 – IV Stand",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams Fibre Base IV Stand is designed to provide stable and convenient support for intravenous fluid administration in hospital wards, treatment areas and patient care environments. Its fibre base provides a sturdy and practical foundation, while the stand is designed for easy positioning alongside the patient.",
    "image": "/images/Product Assets/IVStands/-IV-Stand.webp",
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
    "modelSpecifications": [
      "Fibre Base"
    ]
  },
  {
    "id": "mf06-iv-stand",
    "slug": "mf06-iv-stand",
    "modelNumber": "MF06",
    "name": "MF06 – IV Stand",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams MS IV Stand is designed to provide stable and convenient support for intravenous fluid administration in hospital wards, treatment areas and patient care environments. Its mild steel construction offers a durable and practical solution for regular hospital use.",
    "image": "/images/Product Assets/IVStands/-IV-Stand.webp",
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
    "modelSpecifications": [
      "MS"
    ]
  },
  {
    "id": "mf53-single-foot-step",
    "slug": "mf53-single-foot-step",
    "modelNumber": "MF53",
    "name": "MF53 – Single Foot Step",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "Single tier mild steel patient step stool with anti-skid rubber top.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
    "features": [
      "Durable single step deck",
      "Non-slip ribbed rubber mat",
      "Rubber boots for floor grip"
    ],
    "specifications": {
      "Specification 1": "MS"
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
    "modelSpecifications": [
      "MS"
    ]
  },
  {
    "id": "mf54-single-foot-step",
    "slug": "mf54-single-foot-step",
    "modelNumber": "MF54",
    "name": "MF54 – Single Foot Step",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams Single Foot Step provides a stable raised platform to assist patients and healthcare professionals where additional stepping height is required. Available in MS and SS variants, its compact construction makes it suitable for use alongside examination couches, beds and other hospital furniture.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
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
    "modelSpecifications": [
      "SS"
    ]
  },
  {
    "id": "mf55-double-foot-step",
    "slug": "mf55-double-foot-step",
    "modelNumber": "MF55",
    "name": "MF55 – Double Foot Step",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "Two-tier mild steel patient step stool for exam couch and high bed access.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
    "features": [
      "Two-step configuration",
      "Durable non-slip ribbed mats",
      "Floor protecting rubber shoes"
    ],
    "specifications": {
      "Specification 1": "MS"
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
    "modelSpecifications": [
      "MS"
    ]
  },
  {
    "id": "mf56-double-foot-step",
    "slug": "mf56-double-foot-step",
    "modelNumber": "MF56",
    "name": "MF56 – Double Foot Step",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams Double Foot Step provides a stable two-level platform to assist patients and healthcare professionals where additional stepping support is required. Its two-step design provides gradual and convenient access to elevated hospital beds, examination couches and other medical furniture.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
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
    "modelSpecifications": [
      "SS"
    ]
  },
  {
    "id": "mf97-kick-bucket",
    "slug": "mf97-kick-bucket",
    "modelNumber": "MF97",
    "name": "MF97 – Kick Bucket",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams SS Kick Bucket is designed for convenient collection of used materials during surgical and clinical procedures. Its compact design allows easy positioning near the procedure area, while the stainless-steel construction provides corrosion resistance, easy cleaning and durability for regular hospital use.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
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
    "modelSpecifications": [
      "SS"
    ]
  },
  {
    "id": "mf98-wash-basin-stand",
    "slug": "mf98-wash-basin-stand",
    "modelNumber": "MF98",
    "name": "MF98 – Wash Basin Stand",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams SS Wash Basin Stand is designed to provide convenient access to a wash basin in hospital wards, examination areas and procedure rooms. Its compact freestanding design allows convenient placement wherever required.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
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
    "modelSpecifications": [
      "SS"
    ]
  },
  {
    "id": "mf99-3-fold-screen",
    "slug": "mf99-3-fold-screen",
    "modelNumber": "MF99",
    "name": "MF99 – 3 Fold Screen",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams 3 Fold Screen is designed to provide temporary privacy and separation between patient areas in hospitals, clinics and examination rooms. Its foldable three-panel design allows the screen to be extended when required and folded into a compact size for convenient positioning and storage.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
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
    "modelSpecifications": [
      "MS"
    ]
  },
  {
    "id": "mf100-3-fold-screen",
    "slug": "mf100-3-fold-screen",
    "modelNumber": "MF100",
    "name": "MF100 – 3 Fold Screen",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "Stainless steel three-panel folding patient privacy partition screen.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
    "features": [
      "Rust-Proof SS Construction",
      "3 Joint panels with curtains",
      "Smooth rolling wheel base"
    ],
    "specifications": {
      "Specification 1": "SS"
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
    "modelSpecifications": [
      "SS"
    ]
  },
  {
    "id": "mf108-ss-rack",
    "slug": "mf108-ss-rack",
    "modelNumber": "MF108",
    "name": "MF108 – SS Rack",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams SS Rack – 4 Shelf is designed for organised storage of medical supplies, linen, equipment and other hospital essentials. Its four-tier arrangement provides ample storage while allowing convenient access to frequently required items.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
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
    "modelSpecifications": [
      "4 Shelf"
    ]
  },
  {
    "id": "mf109-scrub",
    "slug": "mf109-scrub",
    "modelNumber": "MF109",
    "name": "MF109 – Scrub",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "The Mathurams Scrub is designed for hand and instrument washing in operation theatre and surgical preparation areas. Its stainless-steel construction provides a hygienic, corrosion-resistant and easy-to-clean surface, making it suitable for environments requiring frequent cleaning and maintenance.",
    "image": "/images/Product Assets/SurgicalSink/OT-Surgical-Scrub-Sink.webp",
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
    "modelSpecifications": [
      "SS"
    ]
  },
  {
    "id": "mf128-cylinder-storage",
    "slug": "mf128-cylinder-storage",
    "modelNumber": "MF128",
    "name": "MF128 – Cylinder Storage",
    "category": "Stainless Steel Furniture & Ward Accessories",
    "description": "Mild steel wall-mounted / floor standing storage rack for medical oxygen gas cylinders.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
    "features": [
      "Fits multiple cylinders safely",
      "Epoxy Powder Coated Finish",
      "Sturdy steel safety chain locks"
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
    "modelSpecifications": [
      "MS"
    ]
  },
  {
    "id": "mf102-mattress",
    "slug": "mf102-mattress",
    "modelNumber": "MF102",
    "name": "MF102 – Mattress",
    "category": "Accessories",
    "description": "Hospital mattress configured with water-resistant cover for patient beds.",
    "image": "/images/Product Assets/Beds/Plain-Examination-Bed.webp",
    "features": [
      "High Density Foam Core",
      "Waterproof zip cover",
      "Section joint folds compatible"
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
    "modelSpecifications": []
  },
  {
    "id": "mf103-pillow",
    "slug": "mf103-pillow",
    "modelNumber": "MF103",
    "name": "MF103 – Pillow",
    "category": "Accessories",
    "description": "Standard medical patient pillow wrapped in water-resistant rexine cover.",
    "image": "/images/Product Assets/Beds/Plain-Examination-Bed.webp",
    "features": [
      "Waterproof wipe-clean cover",
      "High density soft fiber filling",
      "Durable stitch details"
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
    "modelSpecifications": []
  },
  {
    "id": "mf120-aluminium-side-rails",
    "slug": "mf120-aluminium-side-rails",
    "modelNumber": "MF120",
    "name": "MF120 – Aluminium Side Rails",
    "category": "Accessories",
    "description": "Pair of collapsible aluminium safety side rails for patient beds.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
    "features": [
      "Collapsible Dropdown design",
      "Rust-Free Aluminium Bars",
      "Easy Clamp Bracket mounts"
    ],
    "specifications": {},
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
    "modelSpecifications": []
  },
  {
    "id": "mf121-2-1-bush",
    "slug": "mf121-2-1-bush",
    "modelNumber": "MF121",
    "name": "MF121 – 2 × 1 Bush",
    "category": "Accessories",
    "description": "Heavy duty rectangular rubber buffer bush shoe for hospital cot legs (2 x 1 inch).",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
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
    "modelSpecifications": []
  },
  {
    "id": "mf122-1-1-bush",
    "slug": "mf122-1-1-bush",
    "modelNumber": "MF122",
    "name": "MF122 – 1¼ × 1¼ Bush",
    "category": "Accessories",
    "description": "Square rubber leg shoe bush buffer for hospital cot legs (1.25 x 1.25 inches).",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
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
    "modelSpecifications": []
  },
  {
    "id": "mf123-ss-collapsible",
    "slug": "mf123-ss-collapsible",
    "modelNumber": "MF123",
    "name": "MF123 – SS Collapsible",
    "category": "Accessories",
    "description": "Collapsible stainless steel side safety guards for patient beds.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
    "features": [
      "304 Grade Stainless steel bars",
      "Smooth drop down mechanism",
      "Heavy duty bracket clamps"
    ],
    "specifications": {},
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
    "modelSpecifications": []
  },
  {
    "id": "mf124-ss-arms",
    "slug": "mf124-ss-arms",
    "modelNumber": "MF124",
    "name": "MF124 – SS Arms",
    "category": "Accessories",
    "description": "Set of stainless steel head and foot bows for general hospital cot beds.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
    "features": [
      "Set of 2 (Head & Foot)",
      "Laminated middle panel option",
      "Durable tubular SS pipes"
    ],
    "specifications": {},
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
    "modelSpecifications": []
  },
  {
    "id": "mf125-bins",
    "slug": "mf125-bins",
    "modelNumber": "MF125",
    "name": "MF125 – Bins",
    "category": "Accessories",
    "description": "Molded plastic waste bins designed for clinical crash carts and trolleys.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
    "features": [
      "Durable molded plastic",
      "Easy hook-on design for carts",
      "Available in clinical color codes"
    ],
    "specifications": {},
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
    "modelSpecifications": []
  },
  {
    "id": "mf126-ss-plain-side-rails",
    "slug": "mf126-ss-plain-side-rails",
    "modelNumber": "MF126",
    "name": "MF126 – SS Plain Side Rails",
    "category": "Accessories",
    "description": "Set of plain non-collapsible stainless steel side safety rails.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
    "features": [
      "Rigid single-bar design",
      "Heavy mounting clamps",
      "Hygienic polished finish"
    ],
    "specifications": {
      "Specification 1": "SS"
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
    "modelSpecifications": [
      "SS"
    ]
  },
  {
    "id": "mf134-actuator",
    "slug": "mf134-actuator",
    "modelNumber": "MF134",
    "name": "MF134 – Actuator",
    "category": "Accessories",
    "description": "Heavy duty linear motor actuator for motorized electric ICU beds.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
    "features": [
      "High thrust output motor",
      "Dust and water splash protection",
      "Quiet smooth extension stroke"
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
    "modelSpecifications": [
      "100 / 150 mm"
    ]
  },
  {
    "id": "mf135-control-box",
    "slug": "mf135-control-box",
    "modelNumber": "MF135",
    "name": "MF135 – Control Box",
    "category": "Accessories",
    "description": "Electronic control box unit to operate motorized actuators for electric beds.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
    "features": [
      "Supports up to 4 actuators",
      "SMPS power supply built-in",
      "Overload cut-off protection"
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
    "modelSpecifications": []
  },
  {
    "id": "mf136-wired-remote-handset",
    "slug": "mf136-wired-remote-handset",
    "modelNumber": "MF136",
    "name": "MF136 – Wired Remote Handset",
    "category": "Accessories",
    "description": "Handset cord remote control unit for patient/nurse electric ICU bed adjustments.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
    "features": [
      "Soft click tactile buttons",
      "Flexible spiral spring cable",
      "Clear graphical button icons"
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
    "modelSpecifications": []
  },
  {
    "id": "mf137-castors",
    "slug": "mf137-castors",
    "modelNumber": "MF137",
    "name": "MF137 – Castors",
    "category": "Accessories",
    "description": "Dual wheel 2-inch swivel castor wheels for lockers, stands, and smaller items.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
    "features": [
      "Double nylon wheel tread",
      "360 degree swivel thread stem",
      "Non-marking silent motion"
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
    "modelSpecifications": [
      "2 Inches"
    ]
  },
  {
    "id": "mf138-castors",
    "slug": "mf138-castors",
    "modelNumber": "MF138",
    "name": "MF138 – Castors",
    "category": "Accessories",
    "description": "Single wheel 3-inch medical swivel castor wheels with option of step brake.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
    "features": [
      "Silent rubber tyre tread",
      "Rust-resistant metal housing",
      "Step-down brake pedal option"
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
    "modelSpecifications": [
      "3 Inches"
    ]
  },
  {
    "id": "mf139-castors",
    "slug": "mf139-castors",
    "modelNumber": "MF139",
    "name": "MF139 – Castors",
    "category": "Accessories",
    "description": "Standard 4-inch medical swivel castors for stretchers and ward beds.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
    "features": [
      "High grade polyurethane tyre",
      "Precision ball bearing core",
      "Swivel & Wheel lock brake"
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
    "modelSpecifications": [
      "4 Inches"
    ]
  },
  {
    "id": "mf140-castors",
    "slug": "mf140-castors",
    "modelNumber": "MF140",
    "name": "MF140 – Castors",
    "category": "Accessories",
    "description": "Heavy duty 5-inch medical swivel castors with total-lock brake pedal.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
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
    "modelSpecifications": [
      "5 Inches"
    ]
  },
  {
    "id": "mf141-castors",
    "slug": "mf141-castors",
    "modelNumber": "MF141",
    "name": "MF141 – Castors",
    "category": "Accessories",
    "description": "Special central locking system castor wheels for hospital ICU beds.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
    "features": [
      "Central cam lock actuator rod",
      "Simultaneous brake lock for all wheels",
      "Precision smooth roll bearings"
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
    "modelSpecifications": [
      "Centre Locking"
    ]
  },
  {
    "id": "mf104-3-seater-chair",
    "slug": "mf104-3-seater-chair",
    "modelNumber": "MF104",
    "name": "MF104 – 3 Seater Chair",
    "category": "General Furniture",
    "description": "Perforated steel 3-seater visitor waiting bench chair for lobby reception.",
    "image": "/images/Product Assets/Furnitures/Hospital-Revolving-Stool.webp",
    "features": [
      "Perforated cold-rolled steel seat",
      "Chrome plated side arms & legs",
      "Heavy horizontal cross beam"
    ],
    "specifications": {},
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
    "modelSpecifications": []
  },
  {
    "id": "mf105-4-seater-chair",
    "slug": "mf105-4-seater-chair",
    "modelNumber": "MF105",
    "name": "MF105 – 4 Seater Chair",
    "category": "General Furniture",
    "description": "Heavy duty perforated steel 4-seater visitor waiting lobby bench.",
    "image": "/images/Product Assets/Furnitures/Hospital-Revolving-Stool.webp",
    "features": [
      "4 Seat Shell layout",
      "Durable chrome armrests and borders",
      "Anti-skid leveling screw feet"
    ],
    "specifications": {},
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
    "modelSpecifications": []
  },
  {
    "id": "mf117-two-tier-cot",
    "slug": "mf117-two-tier-cot",
    "modelNumber": "MF117",
    "name": "MF117 – Two Tier Cot",
    "category": "General Furniture",
    "description": "The Mathurams Two Tier Cot is designed to provide a practical and space-efficient resting solution for nursing staff and hospital personnel. Its two-level arrangement maximises available floor space while providing separate sleeping platforms in a compact footprint.",
    "image": "/images/Product Assets/Beds/Two-Tier-Cot-Bed.webp",
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
    },
    "modelSpecifications": [
      "MS"
    ]
  },
  {
    "id": "mf127-pharmacy-closed-trolley",
    "slug": "mf127-pharmacy-closed-trolley",
    "modelNumber": "MF127",
    "name": "MF127 – Pharmacy Closed Trolley",
    "category": "General Furniture",
    "description": "Stainless steel closed cabinet pharmacy trolley with double locking doors.",
    "image": "/images/Product Assets/Furnitures/Hospital-Revolving-Stool.webp",
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
    "modelSpecifications": [
      "SS"
    ]
  }
];
