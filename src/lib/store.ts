"use client";

import { create } from "zustand";
import type { Product } from "@/lib/products";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
  itemCount: () => number;
};

type WishlistState = {
  items: Product[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (slug: string) => boolean;
  clearWishlist: () => void;
};

function loadCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem("astra-cart");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem("astra-cart", JSON.stringify(items));
}

function loadWishlist(): Product[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem("astra-wishlist");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveWishlist(items: Product[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem("astra-wishlist", JSON.stringify(items));
}

export const useCart = create<CartState>((set, get) => ({
  items: [],

  addItem: (product, quantity = 1) => {
    set((state) => {
      const existing = state.items.find((i) => i.product.slug === product.slug);
      const items = existing
        ? state.items.map((i) =>
            i.product.slug === product.slug
              ? { ...i, quantity: i.quantity + quantity }
              : i
          )
        : [...state.items, { product, quantity }];
      saveCart(items);
      return { items };
    });
  },

  removeItem: (slug) => {
    set((state) => {
      const items = state.items.filter((i) => i.product.slug !== slug);
      saveCart(items);
      return { items };
    });
  },

  updateQuantity: (slug, quantity) => {
    set((state) => {
      const items =
        quantity <= 0
          ? state.items.filter((i) => i.product.slug !== slug)
          : state.items.map((i) =>
              i.product.slug === slug ? { ...i, quantity } : i
            );
      saveCart(items);
      return { items };
    });
  },

  clearCart: () => {
    saveCart([]);
    set({ items: [] });
  },

  total: () =>
    get().items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),

  itemCount: () =>
    get().items.reduce((sum, i) => sum + i.quantity, 0),
}));

export const useWishlist = create<WishlistState>((set, get) => ({
  items: [],

  toggleWishlist: (product) => {
    set((state) => {
      const exists = state.items.some((i) => i.slug === product.slug);
      const items = exists
        ? state.items.filter((i) => i.slug !== product.slug)
        : [...state.items, product];
      saveWishlist(items);
      return { items };
    });
  },

  isInWishlist: (slug) => get().items.some((i) => i.slug === slug),

  clearWishlist: () => {
    saveWishlist([]);
    set({ items: [] });
  },
}));

export function hydrateStores() {
  if (typeof window === "undefined") return;
  const cart = loadCart();
  const wishlist = loadWishlist();
  if (cart.length > 0) useCart.setState({ items: cart });
  if (wishlist.length > 0) useWishlist.setState({ items: wishlist });
}
