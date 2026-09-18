"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS, CATEGORIES, getCategoryTheme, matchesProductSearch } from "@/lib/data";
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
  X,
} from "lucide-react";

import { useSearchParams, useRouter } from "next/navigation";

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

  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get("category");
  // Search is transient UI state — driven only by the sidebar's productSearchChange event
  // Never initialized from URL so refresh always starts fresh and unfiltered
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Sync search term from the layout's sidebar via custom event (real-time)
  React.useEffect(() => {
    const handleSyncSearch = (e: any) => {
      setSearchTerm(typeof e.detail === "string" ? e.detail : "");
    };
    window.addEventListener("productSearchChange", handleSyncSearch);
    return () => window.removeEventListener("productSearchChange", handleSyncSearch);
  }, []);

  // Clear any stale search params from URL on mount (layout.tsx also does this, belt-and-suspenders)
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("search") || params.has("q")) {
      params.delete("search");
      params.delete("q");
      const q = params.toString();
      window.history.replaceState(null, "", q ? `${window.location.pathname}?${q}` : window.location.pathname);
    }
  }, []);

  // Mount + localStorage sync
  React.useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("sidebarExpanded");
    if (saved !== null) setIsSidebarExpanded(saved === "true");
  }, []);

  // Sync active category index when URL category param changes (e.g. clicking sidebar category links)
  React.useEffect(() => {
    if (categoryQuery) {
      const idx = categoryList.indexOf(categoryQuery);
      if (idx !== -1) setActiveCategoryIndex(idx);
    } else {
      setActiveCategoryIndex(0);
    }
  }, [categoryQuery, categoryList]);

  React.useEffect(() => {
    const handleSync = () => {
      const saved = localStorage.getItem("sidebarExpanded");
      if (saved !== null) setIsSidebarExpanded(saved === "true");
    };
    window.addEventListener("sidebarToggle", handleSync);
    return () => window.removeEventListener("sidebarToggle", handleSync);
  }, []);

  const currentCategory = categoryList[activeCategoryIndex] || "All Products";

  // All products matching the search term across ALL categories
  const allSearchMatches = useMemo(() => {
    if (!searchTerm.trim()) return PRODUCTS;
    return PRODUCTS.filter((p) => matchesProductSearch(p, searchTerm));
  }, [searchTerm]);

  // Whether the current non-"All Products" category has 0 search matches
  // (triggers cross-category fallback so the right side is never a dead-end)
  const isCategorySearchFallback = useMemo(() => {
    if (!searchTerm.trim() || currentCategory === "All Products") return false;
    const catMatches = allSearchMatches.filter((p) => p.category === currentCategory);
    return catMatches.length === 0 && allSearchMatches.length > 0;
  }, [searchTerm, currentCategory, allSearchMatches]);

  // Filter products by search term & active category selection.
  // If searching and the selected category has 0 hits, fall back to ALL matches.
  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) {
      // No search — filter purely by category
      if (currentCategory === "All Products") return PRODUCTS;
      return PRODUCTS.filter((p) => p.category === currentCategory);
    }

    if (currentCategory === "All Products") return allSearchMatches;

    const catMatches = allSearchMatches.filter((p) => p.category === currentCategory);
    // If this category has matches, show them; otherwise fall back to global matches
    return catMatches.length > 0 ? catMatches : allSearchMatches;
  }, [currentCategory, searchTerm, allSearchMatches]);

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
      return "/images/Product Assets/Banners/AllProducts.webp";
    }
    const cat = CATEGORIES.find((c) => c.name === currentCategory);
    return cat?.banner || "/images/Product Assets/Banners/AllProducts.webp";
  }, [currentCategory]);

  const mainRef = React.useRef<HTMLDivElement>(null);
  const productsStartRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (mainRef.current) {
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
      data-lenis-prevent
      className={`flex-1 min-w-0 space-y-6 lg:h-[calc(100vh-140px)] lg:overflow-y-auto pr-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden relative transition-all duration-700 transform ${
        isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Category Banner Card */}
      <style>{`
        @keyframes bannerSlideIn {
          from { opacity: 0; transform: translateX(-48px) scale(0.98); filter: blur(3px); }
          to   { opacity: 1; transform: translateX(0)     scale(1);    filter: blur(0); }
        }
        .banner-slide-in {
          animation: bannerSlideIn 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
      <div
        key={bannerImage}
        className="banner-slide-in hidden lg:block relative rounded-2xl overflow-hidden border border-slate-200/90 w-full shadow-2xs"
      >
        <Image
          src={bannerImage}
          alt={`${currentCategory} Banner`}
          width={1200}
          height={160}
          sizes="100vw"
          className="w-full h-auto object-cover"
          priority
        />
      </div>


      {/* Products Grid */}
      <div
        ref={productsStartRef}
        className="min-h-[calc(100vh-140px)] pb-12 space-y-8"
      >
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 px-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-6 h-6 stroke-[2]" />
            </div>
            <div className="space-y-1">
              <p className="text-slate-700 font-bold text-sm">
                No products found matching &ldquo;{searchTerm}&rdquo;.
              </p>
              <p className="text-slate-400 text-xs font-medium">
                Try searching with a model code (e.g., &ldquo;MF01&rdquo;) or a keyword (e.g., &ldquo;trolley&rdquo;, &ldquo;bed&rdquo;, &ldquo;chair&rdquo;).
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 pt-2">
              {currentCategory !== "All Products" && (
                <button
                  onClick={() => {
                    setActiveCategoryIndex(0);
                    router.replace("/products", { scroll: false });
                  }}
                  className="px-4 py-2 bg-[#0B3C83] hover:bg-[#092D62] text-white text-xs font-bold rounded-xl shadow-xs transition-all"
                >
                  Search in All Products
                </button>
              )}
              <button
                onClick={() => {
                  setSearchTerm("");
                  window.dispatchEvent(new CustomEvent("productSearchChange", { detail: "" }));
                }}
                className="px-4 py-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-bold rounded-xl shadow-2xs transition-all"
              >
                Clear Search
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Fallback notice: current category had 0 matches, showing global results */}
            {isCategorySearchFallback && (
              <div className="flex items-center gap-2 px-4 py-2.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-xs font-semibold">
                <span className="shrink-0">ℹ️</span>
                <span>
                  No matches in <strong>{currentCategory}</strong>. Showing{" "}
                  <strong>{filteredProducts.length}</strong> result{filteredProducts.length !== 1 ? "s" : ""} from all categories.
                </span>
                <button
                  onClick={() => {
                    setActiveCategoryIndex(0);
                    router.replace("/products", { scroll: false });
                  }}
                  className="ml-auto shrink-0 text-[#0B3C83] font-bold hover:underline"
                >
                  View All
                </button>
              </div>
            )}

            {/* Grouped layout: All Products selected, or fallback showing cross-category results */}
            {(currentCategory === "All Products" || isCategorySearchFallback) ? (
              groupedCategoryNames.map((catName) => {
                const catProducts = filteredProducts.filter(
                  (p) => p.category === catName,
                );
                const catTheme = getCategoryTheme(catName);
                return (
                  <div key={catName} className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-200/60 pb-2 pt-2">
                      <h2
                        className="text-sm font-extrabold tracking-wide uppercase font-montserrat"
                        style={{ color: catTheme.bg }}
                      >
                        {catName}
                      </h2>
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${catTheme.bg}1A`,
                          color: catTheme.bg,
                          border: `1px solid ${catTheme.bg}33`,
                        }}
                      >
                        {catProducts.length}
                      </span>
                    </div>
                    <div
                      className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 transition-all duration-300 ${
                        isSidebarExpanded ? "lg:grid-cols-3" : "lg:grid-cols-4"
                      }`}
                    >
                      {catProducts.map((product, idx) => (
                        <ScrollReveal key={product.id} index={idx}>
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
                {filteredProducts.map((product, idx) => (
                  <ScrollReveal key={product.id} index={idx}>
                    <ProductCard product={product} />
                  </ScrollReveal>
                ))}
              </div>
            )}
          </>
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

function ScrollReveal({
  children,
  index = 0,
}: {
  children: React.ReactNode;
  index?: number;
}) {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    const el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, []);

  // Stagger delay for one-by-one cascading entrance while scrolling down
  const staggerDelay = (index % 4) * 110;

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: isVisible ? `${staggerDelay}ms` : "0ms",
      }}
      className={`transition-all duration-700 ease-out transform will-change-transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-[0.96]"
      }`}
    >
      {children}
    </div>
  );
}
