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

export const useCart = create<CartState>((set, get) => ({
  items: [],

  addItem: (product, quantity = 1) => {
    set((state) => {
      const existing = state.items.find((i) => i.product.slug === product.slug);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.product.slug === product.slug
              ? { ...i, quantity: i.quantity + quantity }
              : i
          ),
        };
      }
      return { items: [...state.items, { product, quantity }] };
    });
  },

  removeItem: (slug) => {
    set((state) => ({
      items: state.items.filter((i) => i.product.slug !== slug),
    }));
  },

  updateQuantity: (slug, quantity) => {
    set((state) => ({
      items:
        quantity <= 0
          ? state.items.filter((i) => i.product.slug !== slug)
          : state.items.map((i) =>
              i.product.slug === slug ? { ...i, quantity } : i
            ),
    }));
  },

  clearCart: () => set({ items: [] }),

  total: () =>
    get().items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),

  itemCount: () =>
    get().items.reduce((sum, i) => sum + i.quantity, 0),
}));
