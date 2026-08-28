"use client";

import React, { useState, useMemo, useEffect, useCallback, useRef, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import {
  ChevronRight,
  ChevronLeft,
  Menu,
  ChevronsDown,
  ChevronsUp,
} from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/lib/data";

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

  // Sync accordion expansion state with active category selection
  useEffect(() => {
    if (activeCategory && activeCategory !== "All Products") {
      setExpandedCategory(activeCategory);
    }
  }, [activeCategory]);

  const handleCategoryClick = (catName: string) => {
    if (!isSidebarExpanded) {
      setIsSidebarExpanded(true);
      localStorage.setItem("sidebarExpanded", "true");
      window.dispatchEvent(new Event("sidebarToggle"));
    }
    setExpandedCategory((prev) => (prev === catName ? null : catName));
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
          <span className="text-[#0B3C83] max-w-[120px] truncate">{activeCategory}</span>
        </div>
      </div>

      {/* Main Layout Flex Container */}
      <div className="flex flex-col lg:flex-row gap-6 items-start m-[1.5vh] relative">
        
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
            
            <nav
              ref={sidebarNavRef}
              className={`p-3 space-y-2 flex-1 relative ${
                isSidebarExpanded 
                  ? `overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
                      (canScrollDown || canScrollUp) ? "pb-10" : ""
                    }` 
                  : "overflow-visible"
              }`}
            >
              {categoryList.map((catName) => {
                const isActive = activeCategory === catName;
                const isExpanded = expandedCategory === catName;
                const productsInCat = PRODUCTS.filter((p) => p.category === catName);
                const categoryObj = CATEGORIES.find((c) => c.name === catName);

                return (
                  <div key={catName} className="space-y-1">
                    <Link
                      href={`/products?category=${encodeURIComponent(catName)}`}
                      scroll={false}
                      onClick={() => handleCategoryClick(catName)}
                      className={`w-full flex items-center justify-between px-4 rounded-xl py-3 text-base font-bold transition-all text-left group relative ${
                        isActive
                          ? "bg-[#0B3C83] text-white shadow-md border border-[#0B3C83]"
                          : "bg-white text-slate-700 hover:text-[#0B3C83] hover:bg-slate-100/80 border border-slate-200/60 shadow-2xs"
                      } ${isExpanded && catName !== "All Products" && isSidebarExpanded ? "rounded-b-none border-b-0" : ""}`}
                    >
                      <div className="flex items-center gap-4 min-w-0 flex-1">
                        <div className="relative w-6 h-6 shrink-0">
                          {catName === "All Products" ? (
                            <Image
                              src={isActive ? "/images/Product Assets/selected.webp" : "/images/Product Assets/unselected.webp"}
                              alt="All Products icon"
                              fill
                              className={`object-contain ${isActive ? "brightness-0 invert" : ""}`}
                            />
                          ) : (
                            <Image
                              src={categoryObj?.icon || "/images/Product Assets/unselected.webp"}
                              alt={`${catName} icon`}
                              fill
                              className={`object-contain transition-all duration-300 ${
                                isActive ? "brightness-0 invert" : "opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0"
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
                        <span className={`text-[12px] font-bold px-2.5 py-0.5 rounded-full shrink-0 transition-all ${
                          isActive
                            ? "bg-white text-[#0B3C83] shadow-xs font-black"
                            : "bg-slate-100 text-slate-600 group-hover:bg-[#0B3C83]/10 group-hover:text-[#0B3C83]"
                        }`}>
                          {categoryCounts[catName] || 0}
                        </span>
                      )}

                      {/* Hover Tooltip when collapsed */}
                      {!isSidebarExpanded && (
                        <div className="absolute left-16 bg-slate-900 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-[200] flex items-center gap-1.5">
                          <span>{catName}</span>
                          <span className="bg-white/20 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">
                            {categoryCounts[catName] || 0}
                          </span>
                        </div>
                      )}
                    </Link>

                    {/* Accordion Dropdown Products List */}
                    {isSidebarExpanded && isExpanded && catName !== "All Products" && productsInCat.length > 0 && (
                      <div className="pl-4 pr-3 py-3 bg-white border-x border-b border-slate-200 rounded-b-lg -mt-1 shadow-2xs space-y-1.5 transition-all duration-300">
                        {productsInCat.map((prod, idx) => {
                          const isProdActive = pathname.endsWith(`/${prod.slug}`);
                          return (
                            <Link
                              key={prod.id}
                              href={`/products/${prod.slug}`}
                              scroll={false}
                              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-bold transition-all border text-left leading-normal ${
                                isProdActive
                                  ? "bg-[#FFF0E6] border-[#E87325] text-[#E87325] shadow-2xs"
                                  : "bg-slate-50 border-slate-200/60 text-slate-600 hover:text-[#0B3C83] hover:bg-[#0B3C83]/5 hover:border-[#0B3C83]/20"
                              }`}
                            >
                              <span className={`w-6 h-6 shrink-0 rounded-full flex items-center justify-center text-[11px] font-black ${
                                isProdActive ? "bg-[#E87325] text-white" : "bg-slate-200 text-slate-500"
                              }`}>
                                {idx + 1}
                              </span>
                              <span className="flex-1 whitespace-normal break-words">{prod.name}</span>
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

          {/* Drawer Nav Category list */}
          <nav className="p-4 space-y-2.5 flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-slate-50">
            {categoryList.map((catName) => {
              const isActive = activeCategory === catName;
              const isExpanded = expandedCategory === catName;
              const productsInCat = PRODUCTS.filter((p) => p.category === catName);

              return (
                <div key={catName} className="space-y-1.5">
                  <Link
                    href={`/products?category=${encodeURIComponent(catName)}`}
                    scroll={false}
                    onClick={() => {
                      setExpandedCategory((prev) => (prev === catName ? null : catName));
                      if (catName === "All Products") {
                        setIsMobileDrawerOpen(false);
                      }
                    }}
                    className={`w-full flex items-center justify-between px-4 rounded-xl py-3.5 text-sm font-black transition-all text-left border relative ${
                      isActive
                        ? "bg-[#0B3C83] text-white border-[#0B3C83] shadow-md"
                        : "bg-white border-slate-200/60 text-slate-700 hover:text-[#0B3C83]"
                    }`}
                  >
                    <div className="flex items-center gap-4 min-w-0 flex-1">
                      <div className="relative w-4 h-4 shrink-0">
                        <Image
                          src={isActive ? "/images/Product Assets/selected.webp" : "/images/Product Assets/unselected.webp"}
                          alt="category icon"
                          fill
                          className={`object-contain ${isActive ? "brightness-0 invert" : ""}`}
                        />
                      </div>
                      <span className="flex-1 pr-1">{catName}</span>
                    </div>
                    <span className={`text-[10px] font-black px-2 py-0.3 rounded-full shrink-0 ${
                      isActive ? "bg-white text-[#0B3C83]" : "bg-slate-200 text-slate-500"
                    }`}>
                      {categoryCounts[catName] || 0}
                    </span>
                  </Link>

                  {/* Nested Products */}
                  {isExpanded && catName !== "All Products" && productsInCat.length > 0 && (
                    <div className="pl-4 pr-1 py-2 bg-white border border-slate-200/80 rounded-b-lg -mt-1 space-y-1.5">
                      {productsInCat.map((prod, idx) => {
                        const isProdActive = pathname.endsWith(`/${prod.slug}`);
                        return (
                          <Link
                            key={prod.id}
                            href={`/products/${prod.slug}`}
                            scroll={false}
                            onClick={() => setIsMobileDrawerOpen(false)}
                            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-bold transition-all border text-left leading-normal ${
                              isProdActive
                                ? "bg-[#FFF0E6] border-[#E87325] text-[#E87325]"
                                : "bg-slate-50 border-slate-200/60 text-slate-600"
                            }`}
                          >
                            <span className={`w-5 h-5 shrink-0 rounded-full flex items-center justify-center text-[10px] font-black ${
                              isProdActive ? "bg-[#E87325] text-white" : "bg-slate-200 text-slate-500"
                            }`}>
                              {idx + 1}
                            </span>
                            <span className="truncate flex-1">{prod.name}</span>
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
