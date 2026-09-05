"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
import {
  Search,
  ChevronRight,
  ChevronLeft,
  Shield,
  Activity,
  Bed,
  Menu,
  ChevronsDown,
  ChevronsUp,
} from "lucide-react";

import { useSearchParams } from "next/navigation";

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-slate-500 font-semibold">
          Loading Products...
        </div>
      }
    >
      <ProductsPageContent />
    </Suspense>
  );
}

function ProductsPageContent() {
  // List of category names
  const categoryList = useMemo(() => {
    return ["All Products", ...CATEGORIES.map((cat) => cat.name)];
  }, []);

  // Pre-calculate count for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      "All Products": PRODUCTS.length,
    };
    CATEGORIES.forEach((cat) => {
      counts[cat.name] = PRODUCTS.filter((p) => p.category === cat.name).length;
    });
    return counts;
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get("category");

  React.useEffect(() => {
    setIsMounted(true);
    if (categoryQuery) {
      const idx = categoryList.indexOf(categoryQuery);
      if (idx !== -1) {
        setActiveCategoryIndex(idx);
      }
    }

    // Sync sidebar state from localStorage
    const saved = localStorage.getItem("sidebarExpanded");
    if (saved !== null) {
      setIsSidebarExpanded(saved === "true");
    }
  }, [categoryQuery, categoryList]);

  React.useEffect(() => {
    const handleSync = () => {
      const saved = localStorage.getItem("sidebarExpanded");
      if (saved !== null) {
        setIsSidebarExpanded(saved === "true");
      }
    };
    window.addEventListener("sidebarToggle", handleSync);
    return () => window.removeEventListener("sidebarToggle", handleSync);
  }, []);

  const currentCategory = categoryList[activeCategoryIndex] || "All Products";

  // Filter products by search term & active category selection
  const filteredProducts = useMemo(() => {
    let list = PRODUCTS;
    if (currentCategory !== "All Products") {
      list = list.filter((p) => p.category === currentCategory);
    }

    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term),
      );
    }

    return list;
  }, [currentCategory, searchTerm]);

  // Unique categories present in results, sorted by original layout ordering
  const groupedCategoryNames = useMemo(() => {
    return CATEGORIES.filter((cat) =>
      filteredProducts.some((p) => p.category === cat.name),
    ).map((cat) => cat.name);
  }, [filteredProducts]);

  // Description for each category based on data
  const currentCategoryDesc = useMemo(() => {
    const cat = CATEGORIES.find((c) => c.name === currentCategory);
    return (
      cat?.description ||
      "High-quality medical equipment designed for patient comfort, safety, and easy operation."
    );
  }, [currentCategory]);

  // Representative banner image for the category
  const bannerImage = useMemo(() => {
    if (currentCategory === "All Products") {
      return "/images/Product Assets/rightsideBanner.webp";
    }
    const cat = CATEGORIES.find((c) => c.name === currentCategory);
    return cat?.banner || "/images/Product Assets/rightsideBanner.webp";
  }, [currentCategory]);

  const mainRef = React.useRef<HTMLDivElement>(null);
  const productsStartRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (
        currentCategory !== "All Products" &&
        mainRef.current &&
        productsStartRef.current
      ) {
        mainRef.current.scrollTo({
          top: productsStartRef.current.offsetTop,
          behavior: "smooth",
        });
      } else if (mainRef.current) {
        mainRef.current.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [currentCategory]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main
      ref={mainRef}
      className={`flex-1 min-w-0 space-y-6 lg:h-[calc(100vh-140px)] lg:overflow-y-auto pr-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden relative transition-all duration-700 transform ${
        isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Category Banner Card */}
      <div className="hidden lg:block relative rounded-2xl overflow-hidden border border-slate-200/90 w-full shadow-2xs">
        <Image
          key={bannerImage}
          src={bannerImage}
          alt={`${currentCategory} Banner`}
          width={1200}
          height={160}
          sizes="100vw"
          className="w-full h-auto object-cover transition-opacity duration-300"
          priority
        />
      </div>

      {/* Products Grid */}
      <div
        ref={productsStartRef}
        className="min-h-[calc(100vh-140px)] pb-12 space-y-8"
      >
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200/60">
            <p className="text-slate-500 font-bold text-sm">
              No products found in this category matching "{searchTerm}".
            </p>
          </div>
        ) : currentCategory === "All Products" ? (
          // Grouped by Category layout
          groupedCategoryNames.map((catName) => {
            const catProducts = filteredProducts.filter(
              (p) => p.category === catName,
            );
            return (
              <div key={catName} className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-200/60 pb-2 pt-2">
                  <h2 className="text-sm font-extrabold text-[#0B3C83] tracking-wide uppercase font-montserrat">
                    {catName}
                  </h2>
                  <span className="bg-[#0B3C83]/10 text-[#0B3C83] text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {catProducts.length}
                  </span>
                </div>
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 transition-all duration-300 ${
                    isSidebarExpanded ? "lg:grid-cols-3" : "lg:grid-cols-4"
                  }`}
                >
                  {catProducts.map((product) => (
                    <ScrollReveal key={product.id}>
                      <ProductCard product={product} />
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          // Single Category Direct Grid layout
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 transition-all duration-300 ${
              isSidebarExpanded ? "lg:grid-cols-3" : "lg:grid-cols-4"
            }`}
          >
            {filteredProducts.map((product) => (
              <ScrollReveal key={product.id}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>

      {/* Mobile/Tablet Category Banner Card at Bottom */}
      <div className="lg:hidden relative rounded-2xl overflow-hidden border border-slate-200/90 w-full aspect-[3.2/1] shadow-2xs mt-8">
        <Image
          key={bannerImage}
          src={bannerImage}
          alt={`${currentCategory} Banner`}
          fill
          sizes="100vw"
          className="object-fill transition-opacity duration-300"
          priority
        />
      </div>
    </main>
  );
}

function ScrollReveal({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [shouldAnimate, setShouldAnimate] = React.useState(true);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const rect = entry.boundingClientRect;
          // If the element enters from the top edge of the viewport, show it instantly
          if (rect.top < 150) {
            setShouldAnimate(false);
          }
          setIsVisible(true);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${
        shouldAnimate ? "transition-all duration-700 ease-out transform" : ""
      } ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      }`}
    >
      {children}
    </div>
  );
}
