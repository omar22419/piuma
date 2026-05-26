export type Category =
  | 'all'
  | 'clothing'
  | 'essentials'
  | 'accessories'
  | 'furniture'
  | 'nursery'
  | 'feeding'
  | 'baby care'
  | 'gifts';

export interface ProductImage {
  url: string;
  alt: string;
}

export interface ProductVariant {
  id: string;
  size?: string;
  color?: string;
  price: number;
  stock: number;
}

export interface Product {
  id: string;
  name: string;
  nameAr: string;
  slug: string;
  description: string;
  descriptionAr: string;
  price: number;
  originalPrice?: number;
  category: Category;
  images: ProductImage[];
  variants?: ProductVariant[];
  inStock: boolean;
  featured?: boolean;
  new?: boolean;
  bestSeller?: boolean;
  rating?: number;
  reviewCount?: number;
  specifications?: Record<string, string>;
  specificationsAr?: Record<string, string>;
}

export interface CartItem {
  product: Product;
  quantity: number;
  variantId?: string;
}

export interface WishlistItem {
  productId: string;
}

export interface CartState {
  items: CartItem[];
  addItem: (product: Product, quantity?: number, variantId?: string) => void;
  removeItem: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, quantity: number, variantId?: string) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

export interface WishlistState {
  items: WishlistItem[];
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

export type SortOption = 'newest' | 'priceLowHigh' | 'priceHighLow' | 'popular';

export interface FilterState {
  category: Category;
  priceRange: [number, number];
  sortBy: SortOption;
}
