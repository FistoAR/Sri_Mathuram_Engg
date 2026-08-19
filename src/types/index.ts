export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline?: string;
  category: string;
  description: string;
  fullDescription?: string;
  image: string;
  gallery?: string[];
  specifications?: ProductSpecification[] | Record<string, string>;
  features?: string[];
  applications?: string[];
  featured?: boolean;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  product?: string;
  message: string;
}

export interface BreadcrumbItem {
  label: string;
  url: string;
}
