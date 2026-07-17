"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, Star, ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { products, categories } from "@/lib/products";
import { useCart } from "@/lib/store";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

function formatKES(n: number) {
  return `KES ${n.toLocaleString("en-KE")}`;
}

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "price-asc" | "price-desc">("name");
  const addItem = useCart((s) => s.addItem);

  const filtered = useMemo(() => {
    let list = products;
    if (activeCategory !== "All") {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    list = [...list].sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return a.name.localeCompare(b.name);
    });
    return list;
  }, [activeCategory, search, sortBy]);

  const handleAdd = (name: string) => {
    const product = products.find((p) => p.name === name);
    if (product) {
      addItem(product);
      toast.success("Added to cart", { description: `${product.name} added to your cart.` });
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[#061A3D]" />
        <div className="bg-grid-dark absolute inset-0 opacity-40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, #165DFF55, transparent 60%), radial-gradient(ellipse 50% 50% at 90% 30%, #E31B2320, transparent 60%)",
          }}
        />
        <div className="animate-blob absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-[#165DFF33] blur-3xl" />
        <div className="animate-blob absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[#E31B231A] blur-3xl [animation-delay:6s]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
            <ShoppingCart className="h-3.5 w-3.5" />
            Shop
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Security & IT{" "}
            <span className="text-gradient">equipment</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Browse our curated selection of enterprise-grade CCTV, access control,
            networking gear, cybersecurity appliances, and smart home devices.
          </p>
        </div>
      </section>

      {/* Filters + Products */}
      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search & Sort bar */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value="name">Name A-Z</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category tabs */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "border border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product grid */}
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">No products found.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => { setSearch(""); setActiveCategory("All"); }}
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-premium transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                    {/* Image */}
                    <Link href={`/shop/${product.slug}`} className="relative block aspect-square bg-secondary/30 p-8">
                      <div className="flex h-full w-full items-center justify-center">
                        <div className="text-6xl text-muted-foreground/30">
                          {product.category === "CCTV & Surveillance" && "📷"}
                          {product.category === "Access Control" && "🔐"}
                          {product.category === "Cybersecurity" && "🛡️"}
                          {product.category === "Networking" && "🌐"}
                          {product.category === "Smart Home" && "🏠"}
                          {product.category === "Software Licenses" && "💿"}
                        </div>
                      </div>
                      {product.badge && (
                        <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">
                          {product.badge}
                        </Badge>
                      )}
                    </Link>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-xs font-medium text-muted-foreground">
                        {product.category}
                      </p>
                      <Link href={`/shop/${product.slug}`}>
                        <h3 className="mt-1 text-sm font-bold leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary">
                          {product.name}
                        </h3>
                      </Link>

                      {/* Rating placeholder */}
                      <div className="mt-2 flex items-center gap-1">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="h-3 w-3 fill-accent/80 text-accent/80" />
                        ))}
                        <span className="ml-1 text-xs text-muted-foreground">(4.9)</span>
                      </div>

                      {/* Price */}
                      <div className="mt-auto flex items-end gap-2 pt-3">
                        <span className="text-xl font-bold text-foreground">
                          {formatKES(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="mb-0.5 text-sm text-muted-foreground line-through">
                            {formatKES(product.originalPrice)}
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="mt-3 flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1"
                          onClick={() => handleAdd(product.name)}
                        >
                          <ShoppingCart className="mr-1.5 h-3.5 w-3.5" />
                          Add to Cart
                        </Button>
                        <Button asChild size="sm" variant="outline">
                          <Link href={`/shop/${product.slug}`}>
                            Details
                            <ArrowRight className="ml-1 h-3.5 w-3.5" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
