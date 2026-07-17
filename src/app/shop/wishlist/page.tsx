"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, ArrowLeft, ArrowRight, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart, useWishlist } from "@/lib/store";
import { toast } from "sonner";

function formatKES(n: number) {
  return `KES ${n.toLocaleString("en-KE")}`;
}

export default function WishlistPage() {
  const items = useWishlist((s) => s.items);
  const toggleWishlist = useWishlist((s) => s.toggleWishlist);
  const clearWishlist = useWishlist((s) => s.clearWishlist);
  const addItem = useCart((s) => s.addItem);

  const handleAddToCart = (product: (typeof items)[0]) => {
    addItem(product);
    toast.success("Added to cart", { description: `${product.name} added to your cart.` });
  };

  const handleRemove = (product: (typeof items)[0]) => {
    toggleWishlist(product);
    toast.success("Removed from wishlist", { description: `${product.name} removed.` });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[#061A3D]" />
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#2B5FD9]/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-[#FF6B35]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/60">
            <Link href="/shop" className="flex items-center gap-1 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Shop
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Wishlist</span>
          </nav>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            My Wishlist
          </h1>
          <p className="mt-3 max-w-lg text-lg text-white/70">
            {items.length} {items.length === 1 ? "item" : "items"} saved for later
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-6 py-20 text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#F0F4FF]">
                <Heart className="h-10 w-10 text-[#2B5FD9]/40" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Your wishlist is empty</h2>
                <p className="mt-2 text-muted-foreground">
                  Browse our shop and save items you love.
                </p>
              </div>
              <Button asChild className="btn-gradient shadow-md">
                <Link href="/shop">
                  Browse Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {items.length} {items.length === 1 ? "product" : "products"} saved
                </p>
                <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive" onClick={clearWishlist}>
                  <Trash2 className="mr-1.5 h-4 w-4" />
                  Clear All
                </Button>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((product, i) => (
                  <motion.div
                    key={product.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                  >
                    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-premium transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
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

                      <div className="flex flex-1 flex-col p-5">
                        <p className="text-xs font-medium text-muted-foreground">
                          {product.category}
                        </p>
                        <Link href={`/shop/${product.slug}`}>
                          <h3 className="mt-1 text-sm font-bold leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary">
                            {product.name}
                          </h3>
                        </Link>

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

                        <div className="mt-3 flex gap-2">
                          <Button size="sm" className="flex-1" onClick={() => handleAddToCart(product)}>
                            <ShoppingCart className="mr-1.5 h-3.5 w-3.5" />
                            Add to Cart
                          </Button>
                          <Button size="sm" variant="outline" className="text-destructive hover:bg-destructive hover:text-white" onClick={() => handleRemove(product)}>
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
