import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { WishlistState } from '../types';

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (productId: string) => {
        set((state) => {
          if (state.items.some((item) => item.productId === productId)) {
            return state;
          }
          return {
            items: [...state.items, { productId }]
          };
        });
      },

      removeItem: (productId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.productId !== productId)
        }));
      },

      isInWishlist: (productId: string) => {
        return get().items.some((item) => item.productId === productId);
      },

      clearWishlist: () => {
        set({ items: [] });
      }
    }),
    {
      name: 'piuma-wishlist-storage'
    }
  )
);
