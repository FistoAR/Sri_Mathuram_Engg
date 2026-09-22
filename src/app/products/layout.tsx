"use client";

import React, { useState, useMemo, useEffect, useCallback, useRef, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import {
  ChevronRight,
  ChevronLeft,
  Menu,
  ChevronsDown,
  ChevronsUp,
  Search,
  X,
} from "lucide-react";
import { PRODUCTS, CATEGORIES, getCategoryTheme, matchesProductSearch } from "@/lib/data";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-500 font-semibold">Loading Layout...</div>}>
      <ProductsLayoutContent>{children}</ProductsLayoutContent>
    </Suspense>
  );
}

function ProductsLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  // Search is transient UI state — never initialized from URL so refresh always starts fresh
  const [searchTerm, setSearchTerm] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);
  const isInputFocusedRef = useRef(false);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // On mount: strip any stale ?search= or ?q= params from the URL so refresh is always clean
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("search") || params.has("q")) {
      params.delete("search");
      params.delete("q");
      const q = params.toString();
      window.history.replaceState(null, "", q ? `${window.location.pathname}?${q}` : window.location.pathname);
    }
  }, []);

  // No need to sync searchTerm from URL — search is transient only
  // We only listen for productSearchChange events from other components
  useEffect(() => {
    const handleSync = (e: any) => {
      const val = typeof e.detail === "string" ? e.detail : "";
      if (val !== searchTerm) {
        setSearchTerm(val);
      }
    };
    window.addEventListener("productSearchChange", handleSync);
    return () => window.removeEventListener("productSearchChange", handleSync);
  }, [searchTerm]);

  const handleSearchChange = (val: string) => {
    setSearchTerm(val);
    window.dispatchEvent(new CustomEvent("productSearchChange", { detail: val }));
    // No URL update for search — search is transient (refresh clears it)
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const pathParts = pathname.split("/");
      const lastPart = pathParts[pathParts.length - 1];
      const isDetail = pathParts.length > 2 && lastPart !== "products";
      // On Enter from a product detail page, go back to product listing
      // Search is transient — don't put it in the URL
      if (isDetail) {
        router.push("/products");
      }
    }
  };

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [sidebarWidth, setSidebarWidth] = useState(360);
  const [isDragging, setIsDragging] = useState(false);

  const startResizing = useCallback((mouseDownEvent: React.MouseEvent) => {
    mouseDownEvent.preventDefault();
    setIsDragging(true);

    const container = sidebarNavRef.current?.closest("aside");
    const startOffset = container ? container.getBoundingClientRect().left : 0;

    const handleMouseMove = (mouseMoveEvent: MouseEvent) => {
      const newWidth = mouseMoveEvent.clientX - startOffset;
      if (newWidth >= 220 && newWidth <= 600) {
        setSidebarWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }, []);

  // Scroll indicator states for sidebar
  const [canScrollDown, setCanScrollDown] = useState(false);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const sidebarNavRef = useRef<HTMLDivElement>(null);
  const categoryItemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Smoothly slide a category parent button to the top of the sidebar view
  const slideCategoryToTop = useCallback((catName: string) => {
    const parentEl = categoryItemRefs.current[catName];
    const navEl = sidebarNavRef.current;
    if (!parentEl || !navEl) return;

    const parentRect = parentEl.getBoundingClientRect();
    const navRect = navEl.getBoundingClientRect();
    const relativeTop = parentRect.top - navRect.top;

    // Place the parent button comfortably at the top of the sidebar view (10px from top)
    const targetScrollTop = navEl.scrollTop + relativeTop - 10;
    navEl.scrollTo({
      top: Math.max(0, targetScrollTop),
      behavior: "smooth",
    });
  }, []);

  const scrollCategoryIntoView = useCallback((catName: string) => {
    const parentEl = categoryItemRefs.current[catName];
    const navEl = sidebarNavRef.current;
    if (!parentEl || !navEl) return;

    const parentRect = parentEl.getBoundingClientRect();
    const navRect = navEl.getBoundingClientRect();
    const relativeTop = parentRect.top - navRect.top;
    const navHeight = navEl.clientHeight;

    // If the parent button is scrolled above or situated in the lower/bottom portion of the sidebar
    if (
      relativeTop < 0 ||
      relativeTop > navHeight * 0.3 ||
      relativeTop > 130 ||
      parentRect.bottom > navRect.bottom - 60
    ) {
      slideCategoryToTop(catName);
    }
  }, [slideCategoryToTop]);


  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("sidebarExpanded");
    if (saved !== null) {
      setIsSidebarExpanded(saved === "true");
    }
  }, []);

  const handleToggleSidebar = () => {
    setIsSidebarExpanded((prev) => {
      const next = !prev;
      localStorage.setItem("sidebarExpanded", String(next));
      window.dispatchEvent(new Event("sidebarToggle"));
      return next;
    });
  };

  // List of category names
  const categoryList = useMemo(() => {
    return ["All Products", ...CATEGORIES.map((cat) => cat.name)];
  }, []);

  const getCategoryHref = useCallback((catName: string) => {
    // Search is transient — never put in URL
    if (catName === "All Products") return "/products";
    return `/products?category=${encodeURIComponent(catName)}`;
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

  // Calculate filtered counts per category when searching
  const filteredCategoryCounts = useMemo(() => {
    if (!searchTerm.trim()) return categoryCounts;
    const counts: Record<string, number> = {};
    let totalMatch = 0;
    CATEGORIES.forEach((cat) => {
      const count = PRODUCTS.filter(
        (p) => p.category === cat.name && matchesProductSearch(p, searchTerm)
      ).length;
      counts[cat.name] = count;
      totalMatch += count;
    });
    counts["All Products"] = totalMatch;
    return counts;
  }, [searchTerm, categoryCounts]);

  // First category (in order) that has search results — used to auto-scroll it into center view
  const firstMatchingCategory = useMemo(() => {
    if (!searchTerm.trim()) return null;
    return categoryList.find(
      (catName) => catName !== "All Products" && (filteredCategoryCounts[catName] || 0) > 0
    ) || null;
  }, [searchTerm, categoryList, filteredCategoryCounts]);

  // Auto-scroll first matching category into center when search changes
  useEffect(() => {
    if (!firstMatchingCategory) return;
    const timer = setTimeout(() => {
      const el = categoryItemRefs.current[firstMatchingCategory];
      const navEl = sidebarNavRef.current;
      if (!el || !navEl) return;
      const elRect = el.getBoundingClientRect();
      const navRect = navEl.getBoundingClientRect();
      const relativeTop = elRect.top - navRect.top;
      const targetScrollTop = navEl.scrollTop + relativeTop - navEl.clientHeight / 2 + elRect.height / 2;
      navEl.scrollTo({ top: Math.max(0, targetScrollTop), behavior: "smooth" });
    }, 80);
    return () => clearTimeout(timer);
  }, [firstMatchingCategory]);

  // Determine current active category based on URL pathname/searchParams
  const activeCategory = useMemo(() => {
    // If we're on a product detail page, highlight that product's category
    const pathParts = pathname.split("/");
    const lastPart = pathParts[pathParts.length - 1];
    const isDetailPage = pathParts.length > 2 && lastPart !== "products";
    
    if (isDetailPage) {
      const product = PRODUCTS.find((p) => p.slug === lastPart);
      if (product) return product.category;
    }
    
    // Otherwise, check query parameter
    return searchParams.get("category") || "All Products";
  }, [pathname, searchParams]);

  // Check if current page is a child product detail page
  const isDetailPage = useMemo(() => {
    const pathParts = pathname.split("/");
    const lastPart = pathParts[pathParts.length - 1];
    return pathParts.length > 2 && lastPart !== "products";
  }, [pathname]);

  // Sync accordion expansion state and scroll selected category into view
  useEffect(() => {
    if (activeCategory && activeCategory !== "All Products") {
      setExpandedCategory(activeCategory);
      const timer = setTimeout(() => {
        scrollCategoryIntoView(activeCategory);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [activeCategory, scrollCategoryIntoView]);

  const handleCategoryClick = (catName: string) => {
    if (!isSidebarExpanded) {
      setIsSidebarExpanded(true);
      localStorage.setItem("sidebarExpanded", "true");
      window.dispatchEvent(new Event("sidebarToggle"));
    }

    const parentEl = categoryItemRefs.current[catName];
    const navEl = sidebarNavRef.current;
    let shouldSlideToTop = false;

    if (parentEl && navEl) {
      const parentRect = parentEl.getBoundingClientRect();
      const navRect = navEl.getBoundingClientRect();
      const relativeTop = parentRect.top - navRect.top;
      const navHeight = navEl.clientHeight;

      // If the parent button is in the bottom area or below the top portion
      if (
        relativeTop > navHeight * 0.3 ||
        relativeTop > 130 ||
        relativeTop < 0 ||
        parentRect.bottom > navRect.bottom - 60
      ) {
        shouldSlideToTop = true;
      }
    }

    setExpandedCategory((prev) => (prev === catName ? null : catName));

    if (shouldSlideToTop) {
      // Smoothly auto-slide to top view after DOM updates
      setTimeout(() => {
        slideCategoryToTop(catName);
      }, 50);
      // Secondary check once any accordion collapses complete
      setTimeout(() => {
        slideCategoryToTop(catName);
      }, 180);
    } else {
      setTimeout(() => {
        scrollCategoryIntoView(catName);
      }, 50);
    }
  };

  // Determine breadcrumb nodes
  const breadcrumbs = useMemo(() => {
    const pathParts = pathname.split("/");
    const lastPart = pathParts[pathParts.length - 1];
    const isDetailPage = pathParts.length > 2 && lastPart !== "products";

    if (isDetailPage) {
      const product = PRODUCTS.find((p) => p.slug === lastPart);
      if (product) {
        return [
          { name: "Our Products", href: "/products" },
          { name: product.category, href: `/products?category=${encodeURIComponent(product.category)}` },
          { name: product.name, href: null, isBold: true },
        ];
      }
    }

    return [
      { name: "Our Products", href: null, isBold: true },
    ];
  }, [pathname]);

  const checkSidebarScroll = useCallback(() => {
    const el = sidebarNavRef.current;
    if (!el) return;
    const isAtBottom = Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight - 4;
    const isAtTop = el.scrollTop <= 4;
    setCanScrollDown(el.scrollHeight > el.clientHeight && !isAtBottom);
    setCanScrollUp(el.scrollHeight > el.clientHeight && !isAtTop);
  }, []);

  useEffect(() => {
    const el = sidebarNavRef.current;
    if (!el) return;
    checkSidebarScroll();
    el.addEventListener("scroll", checkSidebarScroll);
    window.addEventListener("resize", checkSidebarScroll);
    return () => {
      el.removeEventListener("scroll", checkSidebarScroll);
      window.removeEventListener("resize", checkSidebarScroll);
    };
  }, [checkSidebarScroll, isSidebarExpanded, activeCategory, expandedCategory]);

  useEffect(() => {
    const timer = setTimeout(checkSidebarScroll, 350);
    return () => clearTimeout(timer);
  }, [isSidebarExpanded, checkSidebarScroll, expandedCategory]);

  const handleSidebarScrollClick = () => {
    const el = sidebarNavRef.current;
    if (!el) return;
    if (canScrollDown) {
      el.scrollBy({ top: 120, behavior: "smooth" });
    } else if (canScrollUp) {
      el.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full relative min-h-screen font-montserrat">
      {/* Shared Breadcrumb and Trusted Badge Top Bar Row */}
      <div className={`px-[3vw] sm:px-[2.25vw] flex flex-col sm:flex-row items-start sm:items-center justify-between py-[1vh] border-b border-slate-200 gap-2 transition-all duration-700 transform ${
        isMounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}>
        <div className="flex items-center gap-1.5 text-base text-slate-500 font-semibold w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden whitespace-nowrap">
          <Link href="/" scroll={false} className="hover:text-slate-800 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          {breadcrumbs.map((bc, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
              {bc.href ? (
                <Link href={bc.href} scroll={false} className="hover:text-slate-800 transition-colors">
                  {bc.name}
                </Link>
              ) : (
                <span className={bc.isBold ? "text-slate-900 font-bold" : "text-slate-500"}>
                  {bc.name}
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Trusted Badge */}
        <div className="hidden sm:flex items-center gap-1.5 bg-[#0284C7] text-white text-xs md:text-sm font-bold px-4 py-2 rounded-l-lg shadow-sm shrink-0 sm:mr-[-2.25vw]">
          <div className="relative w-3.5 h-3.5 shrink-0">
            <Image
              src="/images/Product Assets/trustedIcon.webp"
              alt="Trusted Icon"
              fill
              className="object-contain"
            />
          </div>
          <span>Trusted by Hospitals Since 1997</span>
        </div>
      </div>

      {/* Mobile/Tablet Drawer Trigger Bar */}
      <div className="lg:hidden px-[3.5vw] sm:px-[2.25vw] py-3 bg-slate-50 border-b border-slate-200/60 flex items-center justify-between gap-3 shrink-0">
        <button
          onClick={() => setIsMobileDrawerOpen(true)}
          className="flex items-center gap-2 bg-[#0B3C83] hover:bg-[#092D62] text-white px-4 py-2.5 rounded-xl text-xs font-black shadow-xs transition-all active:scale-95 uppercase tracking-wider"
        >
          <Menu className="w-4 h-4 text-white" />
          <span>Categories</span>
        </button>
        <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold bg-white border border-slate-200 px-3 py-2 rounded-xl">
          <span className="text-slate-400">Viewing:</span>
          <span
            className="max-w-[120px] truncate font-extrabold"
            style={{ color: getCategoryTheme(activeCategory).bg }}
          >
            {activeCategory}
          </span>
        </div>
      </div>

      {/* Main Layout Flex Container */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start px-3 sm:px-4 lg:px-[2.25vw] lg:my-[1.5vh] relative w-full max-w-full">
        
        {/* Left Sidebar Category Panel */}
        <aside
          className={`hidden lg:block sticky top-24 z-40 transform ${
            isDragging ? "transition-none" : "transition-all duration-500"
          } ${
            isSidebarExpanded ? "" : "w-[80px] shrink-0"
          } ${
            isMounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
          style={{
            width: isSidebarExpanded ? `${sidebarWidth}px` : "80px",
          }}
        >
          <div className="bg-slate-50 border border-slate-200 rounded-2xl shadow-sm min-h-[82vh] max-h-[82vh] flex flex-col relative overflow-visible">
            {/* Border Arrow Button to Expand / Collapse */}
            <button
              onClick={handleToggleSidebar}
              className="hidden md:flex absolute -right-3 top-3 z-[100] w-6 h-6 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-slate-600 hover:text-[#E87325] hover:border-[#E87325] transition-all"
              title={isSidebarExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
            >
              {isSidebarExpanded ? (
                <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
              ) : (
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              )}
            </button>

            {/* Vertically Centered Resizable Drag Handle */}
            {isSidebarExpanded && (
              <div
                onMouseDown={startResizing}
                className="hidden md:flex absolute -right-[7px] top-1/2 -translate-y-1/2 z-[100] w-[14px] h-[64px] rounded-full bg-white border border-slate-200 shadow-md items-center justify-center gap-[2.5px] text-slate-400 hover:text-[#E87325] hover:border-[#E87325] active:border-[#E87325] transition-all cursor-col-resize select-none active:bg-slate-100"
                title="Drag to resize sidebar"
              >
                <div className="w-[1.5px] h-4 bg-current rounded-full" />
                <div className="w-[1.5px] h-4 bg-current rounded-full" />
              </div>
            )}

            <div className="bg-slate-200/90 text-[#0B3C83] text-center font-black py-3 text-sm tracking-wider uppercase border-b border-slate-300/80 truncate px-2 rounded-t-2xl flex items-center justify-center min-h-[46px] shrink-0 shadow-2xs">
              {isSidebarExpanded ? (
                "Product Categories"
              ) : (
                <Menu className="w-5 h-5 text-[#0B3C83]" />
              )}
            </div>

            {/* Search Option below Product Categories Header */}
            {isSidebarExpanded ? (
              <div className="p-2.5 border-b border-slate-200/80 bg-white shrink-0">
                <div className="relative flex items-center">
                  <Search className="w-4 h-4 absolute left-3 text-slate-700 pointer-events-none stroke-[2.5]" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    onFocus={() => { isInputFocusedRef.current = true; }}
                    onBlur={() => { isInputFocusedRef.current = false; }}
                    onKeyDown={handleKeyDown}
                    placeholder="Search products or model..."
                    className="w-full pl-9 pr-8 py-2 bg-white text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 rounded-xl border border-slate-700 focus:border-[#E87325] focus:ring-1 focus:ring-[#E87325] outline-none transition-all shadow-xs"
                  />
                  {searchTerm && (
                    <button
                      type="button"
                      onClick={() => handleSearchChange("")}
                      className="absolute right-2.5 p-0.5 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                      title="Clear search"
                    >
                      <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-2 flex justify-center border-b border-slate-200/80 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setIsSidebarExpanded(true);
                    localStorage.setItem("sidebarExpanded", "true");
                    window.dispatchEvent(new Event("sidebarToggle"));
                  }}
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-[#E87325] hover:text-[#E87325] text-slate-500 flex items-center justify-center transition-all shadow-2xs"
                  title="Search products"
                >
                  <Search className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            )}
            
            <nav
              ref={sidebarNavRef}
              data-lenis-prevent
              className={`p-3 space-y-2 flex-1 relative ${
                isSidebarExpanded 
                  ? "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-[360px]" 
                  : "overflow-visible"
              }`}
            >
              {categoryList.map((catName) => {
                const isActive = activeCategory === catName;
                const productsInCat = PRODUCTS.filter((p) => p.category === catName);
                const displayedProductsInCat = productsInCat.filter((p) => matchesProductSearch(p, searchTerm));
                const isExpanded = expandedCategory === catName || (searchTerm.trim() !== "" && displayedProductsInCat.length > 0);
                const categoryObj = CATEGORIES.find((c) => c.name === catName);
                const theme = getCategoryTheme(catName);
                const countNumber = filteredCategoryCounts[catName] ?? (catName === "All Products" ? PRODUCTS.length : 0);

                // When searching: does this category have any matches?
                const isSearching = searchTerm.trim() !== "";
                const hasSearchMatch = isSearching && countNumber > 0;
                const isSearchDimmed = isSearching && countNumber === 0 && catName !== "All Products";
                const isSearchAllMatch = isSearching && catName === "All Products" && countNumber > 0;

                return (
                  <div
                    key={catName}
                    ref={(el) => { categoryItemRefs.current[catName] = el; }}
                    className="space-y-1 relative"
                  >
                  <Link
                      href={getCategoryHref(catName)}
                      scroll={false}
                      onClick={() => handleCategoryClick(catName)}
                      className={`w-full flex items-center justify-between px-4 rounded-xl py-3 text-base font-bold transition-all text-left group relative border ${
                        isActive
                          ? "shadow-md"
                          : hasSearchMatch || isSearchAllMatch
                            ? "bg-white text-slate-800 border-slate-300 shadow-sm"
                            : isSearchDimmed
                              ? "bg-white/60 text-slate-400 border-slate-200/40 shadow-none"
                              : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200/60 shadow-2xs"
                      } ${
                        isExpanded && catName !== "All Products" && isSidebarExpanded
                          ? "rounded-b-none border-b-0"
                          : ""
                      }`}
                      style={
                        isActive
                          ? {
                              backgroundColor: theme.bg,
                              borderColor: theme.border,
                              color: theme.text,
                              boxShadow: `0 4px 14px ${theme.bg}40`,
                            }
                          : hasSearchMatch || isSearchAllMatch
                            ? {
                                borderColor: theme.border,
                                boxShadow: `0 0 0 2px ${theme.bg}33, 0 2px 8px ${theme.bg}22`,
                              }
                            : undefined
                      }
                    >
                      <div className="flex items-center gap-4 min-w-0 flex-1">
                          <div className="relative w-6 h-6 shrink-0">
                            {catName === "All Products" ? (
                              <Image
                                src={isActive ? "/images/Product Assets/selected.webp" : "/images/Product Assets/unselected.webp"}
                                alt="All Products icon"
                                fill
                                className={`object-contain ${
                                  isActive ? (theme.isLight ? "brightness-0" : "brightness-0 invert") : ""
                                } ${isSearchDimmed ? "opacity-30" : ""}`}
                              />
                            ) : (
                              <Image
                                src={categoryObj?.icon || "/images/Product Assets/unselected.webp"}
                                alt={`${catName} icon`}
                                fill
                                className={`object-contain transition-all duration-300 ${
                                  isActive
                                    ? theme.isLight
                                      ? "brightness-0"
                                      : "brightness-0 invert"
                                    : hasSearchMatch
                                      ? "opacity-90 grayscale-0"
                                      : isSearchDimmed
                                        ? "opacity-20 grayscale"
                                        : "opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0"
                                }`}
                              />
                            )}
                          </div>
                          {isSidebarExpanded && (
                            <div className="relative min-w-0 flex-1">
                              <span className="block pr-1">{catName}</span>
                            </div>
                          )}
                        </div>
                        {isSidebarExpanded && (
                          <span
                            className={`text-[12px] font-bold px-2.5 py-0.5 rounded-full shrink-0 transition-all ${
                              isActive
                                ? "shadow-xs font-black"
                                : hasSearchMatch || isSearchAllMatch
                                  ? "font-black"
                                  : isSearchDimmed
                                    ? "text-slate-300 bg-slate-100/50"
                                    : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                            }`}
                            style={
                              isActive
                                ? {
                                    backgroundColor: theme.badgeBg,
                                    color: theme.badgeText,
                                  }
                                : hasSearchMatch || isSearchAllMatch
                                  ? {
                                      backgroundColor: theme.bg,
                                      color: theme.isLight ? "#1e293b" : "#ffffff",
                                    }
                                  : undefined
                            }
                          >
                            {countNumber}
                          </span>
                        )}

                      {/* Hover Tooltip when collapsed */}
                      {!isSidebarExpanded && (
                        <div className="absolute left-16 bg-slate-900 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-[200] flex items-center gap-1.5">
                          <span>{catName}</span>
                          <span className="bg-white/20 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">
                            {countNumber}
                          </span>
                        </div>
                      )}
                    </Link>

                    {/* Accordion Dropdown Products List with Inside Scrolling */}
                    {isSidebarExpanded && isExpanded && catName !== "All Products" && productsInCat.length > 0 && (
                      <div 
                        className="pl-3 pr-2 py-2.5 bg-white border-x border-b rounded-b-xl -mt-1 shadow-2xs space-y-1.5 max-h-[300px] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overscroll-contain"
                        style={{ borderColor: theme.border }}
                      >
                        {(searchTerm.trim()
                          ? [
                              ...productsInCat.filter((p) => matchesProductSearch(p, searchTerm)),
                              ...productsInCat.filter((p) => !matchesProductSearch(p, searchTerm)),
                            ]
                          : productsInCat
                        ).map((prod) => {
                          const isProdActive = pathname.endsWith(`/${prod.slug}`);
                          const isSearching = searchTerm.trim() !== "";
                          const isProductMatch = isSearching && matchesProductSearch(prod, searchTerm);
                          const isProductDimmed = isSearching && !isProductMatch;
                          return (
                            <Link
                              key={prod.id}
                              href={`/products/${prod.slug}`}
                              scroll={false}
                              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-bold transition-all text-left leading-normal border ${
                                isProdActive
                                  ? "shadow-xs border-2"
                                  : isProductMatch
                                    ? "bg-white text-slate-800 border shadow-sm"
                                    : isProductDimmed
                                      ? "bg-slate-50/60 text-slate-400 border-slate-100"
                                      : "bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border-transparent"
                              }`}
                              style={{
                                ...(isProdActive
                                  ? {
                                      borderColor: theme.border,
                                      backgroundColor: `${theme.bg}1A`,
                                      color: theme.isLight ? theme.text : theme.bg,
                                    }
                                  : isProductMatch
                                    ? {
                                        borderColor: theme.border,
                                        boxShadow: `0 0 0 1.5px ${theme.bg}44`,
                                      }
                                    : {}),
                              }}
                            >
                              <span
                                className={`px-2 py-0.5 shrink-0 rounded-md flex items-center justify-center text-[11px] font-black tracking-wide ${
                                  isProdActive
                                    ? "shadow-xs"
                                    : isProductMatch
                                      ? ""
                                      : isProductDimmed
                                        ? "bg-slate-100 text-slate-300"
                                        : "bg-slate-200 text-slate-700"
                                }`}
                                style={
                                  isProdActive
                                    ? {
                                        backgroundColor: theme.bg,
                                        color: theme.isLight ? theme.text : "#ffffff",
                                      }
                                    : isProductMatch
                                      ? {
                                          backgroundColor: theme.bg,
                                          color: theme.isLight ? "#1e293b" : "#ffffff",
                                        }
                                      : undefined
                                }
                              >
                                {prod.modelNumber}
                              </span>
                              <span className={`flex-1 whitespace-normal break-words ${isProductDimmed ? "opacity-50" : ""}`}>{prod.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Scroll Indicator Arrow Button (Desktop Only when Expanded) */}
            {isSidebarExpanded && (canScrollDown || canScrollUp) && (
              <button
                onClick={handleSidebarScrollClick}
                className="absolute bottom-6 -right-3 z-[100] bg-white border border-slate-200 shadow-md rounded-full p-1.5 text-slate-700 hover:text-[#E87325] hover:border-[#E87325] transition-all flex items-center justify-center animate-bounce"
                title={canScrollDown ? "Scroll Down" : "Scroll to Top"}
              >
                {canScrollDown ? (
                  <ChevronsDown className="w-4 h-4 text-[#0B3C83] hover:text-[#E87325]" />
                ) : (
                  <ChevronsUp className="w-4 h-4 text-[#0B3C83] hover:text-[#E87325]" />
                )}
              </button>
            )}
          </div>
        </aside>

        {/* Dynamic Nested Child Pages (Switches catalog catalog grid or dynamic detail client content) */}
        {children}
      </div>

      {/* Mobile Categories Sidebar Drawer overlay */}
      <div className={`lg:hidden fixed inset-0 z-[200] flex transition-opacity duration-300 ${
        isMobileDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        {/* Background Backdrop */}
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
          onClick={() => setIsMobileDrawerOpen(false)}
        />

        {/* Drawer Panel Container */}
        <div className={`relative flex flex-col w-[80vw] max-w-[320px] h-full bg-slate-50 border-r border-slate-200 shadow-2xl z-10 transition-transform duration-300 transform ${
          isMobileDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
          {/* Drawer Header */}
          <div className="bg-slate-200/90 text-[#0B3C83] font-black py-4 px-4 text-sm tracking-wider uppercase border-b border-slate-300/80 flex items-center justify-between shrink-0 shadow-2xs">
            <span>Product Categories</span>
            <button
              onClick={() => setIsMobileDrawerOpen(false)}
              className="text-[#0B3C83] hover:text-[#E87325] transition-colors p-1"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>

          {/* Search Box in Mobile Drawer below Product Categories */}
          <div className="p-3 border-b border-slate-200/80 bg-white shrink-0">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 absolute left-3 text-slate-700 pointer-events-none stroke-[2.5]" />
              <input
                ref={mobileSearchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                onFocus={() => { isInputFocusedRef.current = true; }}
                onBlur={() => { isInputFocusedRef.current = false; }}
                onKeyDown={handleKeyDown}
                placeholder="Search products or model..."
                className="w-full pl-9 pr-8 py-2.5 bg-white text-xs font-semibold text-slate-900 placeholder-slate-400 rounded-xl border border-slate-700 focus:border-[#E87325] focus:ring-1 focus:ring-[#E87325] outline-none transition-all shadow-xs"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => handleSearchChange("")}
                  className="absolute right-2.5 p-1 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                  title="Clear search"
                >
                  <X className="w-4 h-4 stroke-[2.5]" />
                </button>
              )}
            </div>
          </div>

          {/* Drawer Nav Category list */}
          <nav
            data-lenis-prevent
            className="p-4 space-y-2.5 flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-slate-50"
          >
            {categoryList.map((catName) => {
              const isActive = activeCategory === catName;
              const productsInCat = PRODUCTS.filter((p) => p.category === catName);
              const displayedProductsInCat = productsInCat.filter((p) => matchesProductSearch(p, searchTerm));
              const isExpanded = (searchTerm.trim() !== "" && displayedProductsInCat.length > 0) || expandedCategory === catName;
              const categoryObj = CATEGORIES.find((c) => c.name === catName);
              const theme = getCategoryTheme(catName);
              const countNumber = filteredCategoryCounts[catName] || 0;

              return (
                <div key={catName} className="space-y-1.5 relative">
                  <Link
                    href={getCategoryHref(catName)}
                    scroll={false}
                    onClick={() => {
                      setExpandedCategory((prev) => (prev === catName ? null : catName));
                      if (catName === "All Products") {
                        setIsMobileDrawerOpen(false);
                      }
                    }}
                    className={`w-full flex items-center justify-between px-4 rounded-xl py-3.5 text-sm font-black transition-all text-left border relative ${
                      isActive
                        ? "shadow-md"
                        : "bg-white border-slate-200/60 text-slate-700 hover:bg-slate-50"
                    } ${
                      isExpanded && catName !== "All Products"
                        ? "rounded-b-none border-b-0"
                        : ""
                    }`}
                    style={
                      isActive
                        ? {
                            backgroundColor: theme.bg,
                            borderColor: theme.border,
                            color: theme.text,
                            boxShadow: `0 4px 14px ${theme.bg}40`,
                          }
                        : undefined
                    }
                  >
                    <div className="flex items-center gap-4 min-w-0 flex-1">
                      <div className="relative w-4 h-4 shrink-0">
                        <Image
                          src={isActive ? "/images/Product Assets/selected.webp" : (categoryObj?.icon || "/images/Product Assets/unselected.webp")}
                          alt="category icon"
                          fill
                          className={`object-contain ${
                            isActive ? (theme.isLight ? "brightness-0" : "brightness-0 invert") : ""
                          }`}
                        />
                      </div>
                      <span className="flex-1 pr-1">{catName}</span>
                    </div>
                    <span
                      className={`text-[10px] font-black px-2 py-0.3 rounded-full shrink-0 ${
                        isActive ? "" : "bg-slate-200 text-slate-500"
                      }`}
                      style={
                        isActive
                          ? {
                              backgroundColor: theme.badgeBg,
                              color: theme.badgeText,
                            }
                          : undefined
                      }
                    >
                      {countNumber}
                    </span>
                  </Link>

                  {/* Nested Products with Inside Scrolling */}
                  {isExpanded && catName !== "All Products" && displayedProductsInCat.length > 0 && (
                    <div 
                      className="pl-3 pr-2 py-2 bg-white border rounded-b-xl -mt-1 space-y-1.5 max-h-[260px] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overscroll-contain"
                      style={{ borderColor: theme.border }}
                    >
                      {displayedProductsInCat.map((prod, idx) => {
                        const isProdActive = pathname.endsWith(`/${prod.slug}`);
                        return (
                          <Link
                            key={prod.id}
                            href={`/products/${prod.slug}`}
                            onClick={() => {
                              setIsMobileDrawerOpen(false);
                              if (typeof window !== "undefined") {
                                window.scrollTo(0, 0);
                              }
                            }}
                            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-bold transition-all text-left leading-normal border ${
                              isProdActive
                                ? "shadow-xs border-2"
                                : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                            }`}
                            style={{
                              borderColor: theme.border,
                              ...(isProdActive
                                ? {
                                    backgroundColor: `${theme.bg}1A`,
                                    color: theme.isLight ? theme.text : theme.bg,
                                  }
                                : {}),
                            }}
                          >
                            <span
                              className={`px-1.5 py-0.5 shrink-0 rounded-md flex items-center justify-center text-[10px] font-black tracking-wide ${
                                isProdActive ? "shadow-xs" : "bg-slate-200 text-slate-700"
                              }`}
                              style={
                                isProdActive
                                  ? {
                                      backgroundColor: theme.bg,
                                      color: theme.isLight ? theme.text : "#ffffff",
                                    }
                                  : undefined
                              }
                            >
                              {prod.modelNumber}
                            </span>
                            <span className="flex-1 whitespace-normal break-words leading-tight">{prod.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
