"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Phone, Mail, MapPin, ChevronDown, ArrowRight, ShoppingCart, Trash2, Plus, Minus, Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import { useCart, useWishlist } from "@/lib/store";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

function formatKES(n: number) {
  return `KES ${n.toLocaleString("en-KE")}`;
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnnouncementBar />
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "glass border-b border-[#E2E8F080] shadow-premium"
            : "bg-white/80 backdrop-blur-sm",
        )}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="focus-ring rounded-lg" aria-label="Astra Tech home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 focus-ring",
                    isActive
                      ? "text-[#2B5FD9] bg-[#F0F4FF]"
                      : "text-[#5A6577] hover:text-[#0F1729] hover:bg-[#F5F7FA]",
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-[#2B5FD9]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+254715135141"
              className="hidden items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-4 py-2.5 text-sm font-medium text-[#5A6577] transition-all hover:border-[#2B5FD930] hover:text-[#2B5FD9] hover:shadow-sm md:flex"
            >
              <Phone className="h-3.5 w-3.5" />
              +254 715 135 141
            </a>

            <CartButton onOpen={() => setCartOpen(true)} />
            <WishlistButton />

            <Button asChild size="sm" className="hidden sm:inline-flex btn-gradient h-10 px-5 text-sm font-semibold shadow-md">
              <Link href="/contact">
                Get a Quote
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm p-0">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-[#E2E8F0] px-5 py-4">
                    <Logo />
                    <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
                    {navLinks.map((link) => {
                      const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-all",
                            isActive
                              ? "bg-[#F0F4FF] text-[#2B5FD9]"
                              : "text-[#5A6577] hover:bg-[#F5F7FA] hover:text-[#0F1729]",
                          )}
                        >
                          {link.label}
                          <ChevronDown className="h-4 w-4 -rotate-90 text-[#5A6577]" />
                        </Link>
                      );
                    })}
                  </nav>
                  <div className="space-y-3 border-t border-[#E2E8F0] p-5">
                    <Button asChild className="w-full btn-gradient h-12 text-base font-semibold shadow-md">
                      <Link href="/contact" onClick={() => setMobileOpen(false)}>
                        Get a Free Quote
                        <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Link>
                    </Button>
                    <div className="space-y-2 pt-2 text-sm">
                      <a href="tel:+254715135141" className="flex items-center gap-2.5 text-[#5A6577] hover:text-[#2B5FD9]">
                        <Phone className="h-4 w-4" /> +254 715 135 141
                      </a>
                      <a href="mailto:hello@astratech.co.ke" className="flex items-center gap-2.5 text-[#5A6577] hover:text-[#2B5FD9]">
                        <Mail className="h-4 w-4" /> hello@astratech.co.ke
                      </a>
                      <p className="flex items-center gap-2.5 text-[#5A6577]">
                        <MapPin className="h-4 w-4" /> Westlands, Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
    </>
  );
}

function CartButton({ onOpen }: { onOpen: () => void }) {
  const count = useCart((s) => s.itemCount());
  return (
    <button
      onClick={onOpen}
      className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white text-[#5A6577] transition-all hover:border-[#2B5FD930] hover:text-[#2B5FD9] hover:shadow-sm"
      aria-label="Open cart"
    >
      <ShoppingCart className="h-4.5 w-4.5" />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6B35] text-[10px] font-bold text-white shadow-md">
          {count}
        </span>
      )}
    </button>
  );
}

function WishlistButton() {
  const count = useWishlist((s) => s.items.length);
  return (
    <Link
      href="/shop/wishlist"
      className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white text-[#5A6577] transition-all hover:border-[#2B5FD930] hover:text-[#2B5FD9] hover:shadow-sm"
      aria-label="Wishlist"
    >
      <Heart className="h-4.5 w-4.5" />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-md">
          {count}
        </span>
      )}
    </Link>
  );
}

function CartSheet({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart();
  const toggleWishlist = useWishlist((s) => s.toggleWishlist);
  const wishlisted = useWishlist((s) => s.items);

  const isWishlisted = (slug: string) => wishlisted.some((i) => i.slug === slug);

  const handleWishlist = (product: (typeof items)[0]["product"]) => {
    toggleWishlist(product);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full max-w-md p-0">
        <SheetTitle className="sr-only">Shopping cart</SheetTitle>
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-[#E2E8F0] px-5 py-4">
            <h2 className="text-lg font-bold">Cart ({useCart.getState().itemCount()})</h2>
            <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 px-5">
              <ShoppingCart className="h-12 w-12 text-[#5A6577]/30" />
              <p className="text-[#5A6577]">Your cart is empty</p>
              <Button asChild onClick={() => onOpenChange(false)} className="btn-gradient shadow-md">
                <Link href="/shop">Browse Products</Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-5 py-4">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.product.slug} className="flex gap-4 rounded-xl border border-[#E2E8F0] bg-white p-3 shadow-sm">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-[#F0F4FF] text-2xl">
                        {item.product.category === "CCTV & Surveillance" && "📷"}
                        {item.product.category === "Access Control" && "🔐"}
                        {item.product.category === "Cybersecurity" && "🛡️"}
                        {item.product.category === "Networking" && "🌐"}
                        {item.product.category === "Smart Home" && "🏠"}
                        {item.product.category === "Software Licenses" && "💿"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold leading-tight line-clamp-2">{item.product.name}</h3>
                        <p className="mt-1 text-sm font-bold text-[#FF6B35]">{formatKES(item.product.price)}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.product.slug, item.quantity - 1)}
                            className="flex h-6 w-6 items-center justify-center rounded border border-[#E2E8F0] hover:bg-[#F5F7FA]"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.slug, item.quantity + 1)}
                            className="flex h-6 w-6 items-center justify-center rounded border border-[#E2E8F0] hover:bg-[#F5F7FA]"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => removeItem(item.product.slug)}
                            className="ml-auto text-[#5A6577] hover:text-[#E31B23]"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleWishlist(item.product)}
                            className={`text-[#5A6577] transition-colors ${isWishlisted(item.product.slug) ? "text-red-500 hover:text-red-600" : "hover:text-red-500"}`}
                            title={isWishlisted(item.product.slug) ? "Remove from wishlist" : "Add to wishlist"}
                          >
                            <Heart className={`h-4 w-4 ${isWishlisted(item.product.slug) ? "fill-red-500" : ""}`} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#E2E8F0] px-5 py-4 space-y-3">
                <div className="flex items-center justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{formatKES(total())}</span>
                </div>
                <p className="text-xs text-[#5A6577]">VAT and shipping calculated at checkout</p>
                <Button asChild className="w-full h-12 text-base btn-gradient font-semibold shadow-md" size="lg">
                  <Link href="/shop/checkout" onClick={() => onOpenChange(false)}>
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="relative overflow-hidden bg-[#0F1729] text-white"
        >
          <div className="bg-grid-dark absolute inset-0 opacity-30" />
          <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-xs sm:px-6 lg:px-8">
            <div className="flex flex-1 flex-wrap items-center gap-x-5 gap-y-1">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#059669] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#059669]" />
                </span>
                SOC &amp; NOC operating 24/7 across Kenya
              </span>
              <span className="hidden items-center gap-1.5 text-white/70 sm:flex">
                <MapPin className="h-3 w-3" /> Westlands, Nairobi
              </span>
              <a href="tel:+254715135141" className="hidden items-center gap-1.5 text-white/70 transition-colors hover:text-white sm:flex">
                <Phone className="h-3 w-3" /> +254 715 135 141
              </a>
            </div>
            <Link
              href="/contact"
              className="hidden items-center gap-1 font-semibold text-[#FF6B35] transition-colors hover:text-[#FF8F5E] sm:flex"
            >
              Free security assessment <ArrowRight className="h-3 w-3" />
            </Link>
            <button
              onClick={() => setVisible(false)}
              className="rounded p-0.5 text-white/60 transition-colors hover:text-white"
              aria-label="Dismiss announcement"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
