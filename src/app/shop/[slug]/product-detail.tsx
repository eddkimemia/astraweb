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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/store";
import { toast } from "sonner";
import type { Product } from "@/lib/products";

function formatKES(n: number) {
  return `KES ${n.toLocaleString("en-KE")}`;
}

export function ProductDetail({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const addItem = useCart((s) => s.addItem);

  const handleAdd = () => {
    addItem(product, qty);
    toast.success("Added to cart", {
      description: `${qty}x ${product.name} added to your cart.`,
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
              <Button size="lg" className="flex-1 h-12 gap-2" onClick={handleAdd}>
                <ShoppingCart className="h-5 w-5" />
                Add to Cart — {formatKES(product.price * qty)}
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
