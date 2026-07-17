"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  ArrowLeft,
  Check,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCart, useWishlist } from "@/lib/store";
import { toast } from "sonner";
import type { Product } from "@/lib/products";

function formatKES(n: number) {
  return `KES ${n.toLocaleString("en-KE")}`;
}

export function ProductDetail({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const addItem = useCart((s) => s.addItem);
  const toggleWishlist = useWishlist((s) => s.toggleWishlist);
  const wishlisted = useWishlist((s) => s.isInWishlist(product.slug));

  const handleAdd = () => {
    addItem(product, qty);
    toast.success("Added to cart", {
      description: `${qty}x ${product.name} added to your cart.`,
    });
  };

  const handleWishlist = () => {
    toggleWishlist(product);
    toast.success(wishlisted ? "Removed from wishlist" : "Added to wishlist", {
      description: wishlisted
        ? `${product.name} removed from your wishlist.`
        : `${product.name} saved to your wishlist.`,
    });
  };

  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/shop" className="flex items-center gap-1 hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-center rounded-3xl border border-border bg-secondary/20 p-12 aspect-square"
          >
            <div className="text-[120px] text-muted-foreground/20">
              {product.category === "CCTV & Surveillance" && "📷"}
              {product.category === "Access Control" && "🔐"}
              {product.category === "Cybersecurity" && "🛡️"}
              {product.category === "Networking" && "🌐"}
              {product.category === "Smart Home" && "🏠"}
              {product.category === "Software Licenses" && "💿"}
            </div>
            {product.badge && (
              <Badge className="absolute left-5 top-5 bg-primary text-primary-foreground">
                {product.badge}
              </Badge>
            )}
          </motion.div>

          {/* Right: Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            <p className="text-sm font-medium text-primary">{product.category}</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-3 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent/80 text-accent/80" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.9 / 5 (127 reviews)</span>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-end gap-3">
              <span className="text-4xl font-bold">{formatKES(product.price)}</span>
              {product.originalPrice && (
                <span className="mb-1 text-lg text-muted-foreground line-through">
                  {formatKES(product.originalPrice)}
                </span>
              )}
              {product.originalPrice && (
                <Badge variant="destructive" className="mb-1">
                  Save {formatKES(product.originalPrice - product.price)}
                </Badge>
              )}
            </div>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center rounded-lg border border-border">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-4 py-3 text-lg font-medium hover:bg-muted transition-colors"
                >
                  -
                </button>
                <span className="min-w-[3rem] text-center text-lg font-semibold">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-4 py-3 text-lg font-medium hover:bg-muted transition-colors"
                >
                  +
                </button>
              </div>
              <Button size="lg" className="flex-1 !h-16 px-10 sm:!h-13 sm:px-8 gap-2 btn-gradient shadow-md hover:text-white" onClick={handleAdd}>
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`!h-16 px-6 sm:!h-13 gap-2 border-border hover:text-white ${wishlisted ? "bg-red-50 border-red-300 text-red-500 hover:bg-red-500" : "hover:border-red-500 hover:bg-red-500"}`}
                onClick={handleWishlist}
              >
                <Heart className={`h-5 w-5 ${wishlisted ? "fill-red-500" : ""}`} />
                {wishlisted ? "Saved" : "Wishlist"}
              </Button>
              <Button size="lg" variant="outline" className="!h-16 px-8 sm:!h-13 gap-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white" asChild>
                <a href={`https://wa.me/254715135141?text=Hi%2C%20I%E2%80%99m%20interested%20in%20ordering%20${encodeURIComponent(product.name)}%20(${formatKES(product.price)}).%20Qty%3A%20${qty}.`} target="_blank" rel="noopener noreferrer">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Order via WhatsApp
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { icon: ShieldCheck, text: "Genuine products" },
                { icon: Truck, text: "Nationwide delivery" },
                { icon: RotateCcw, text: "30-day returns" },
                { icon: Headphones, text: "Expert support" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 rounded-lg border border-border bg-background p-3 text-sm text-muted-foreground">
                  <Icon className="h-4 w-4 text-primary" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Specs */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight">Specifications</h2>
          <Separator className="mt-3 mb-6" />
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between bg-background px-5 py-3.5 text-sm">
                <span className="font-medium text-muted-foreground">{key}</span>
                <span className="text-right font-medium text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight">Key Features</h2>
          <Separator className="mt-3 mb-6" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
