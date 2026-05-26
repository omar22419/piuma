import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Heart, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import type { Product } from '../types';
import { useCartStore } from '../store/useCartStore';
import { useWishlistStore } from '../store/useWishlistStore';
import { formatPrice } from '../lib/utils';
import { Button } from './Button';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { t, i18n } = useTranslation();
  const addToCart = useCartStore((state) => state.addItem);
  const { isInWishlist, addItem, removeItem } = useWishlistStore();
  const inWishlist = isInWishlist(product.id);
  const isRTL = i18n.language === 'ar';

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inWishlist) {
      removeItem(product.id);
    } else {
      addItem(product.id);
    }
  };

  const displayName = i18n.language === 'ar' ? product.nameAr : product.name;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Link to={`/product/${product.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-xl bg-muted mb-4">
          {/* Product Image */}
          <div className="aspect-square">
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.new && (
              <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs">
                {t('common.new')}
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs">
                {t('common.sale')}
              </span>
            )}
            {product.bestSeller && (
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs">
                {t('common.bestSeller')}
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleToggleWishlist}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
            aria-label={inWishlist ? t('product.removeFromWishlist') : t('product.addToWishlist')}
          >
            <Heart className={`w-5 h-5 ${inWishlist ? 'fill-primary text-primary' : 'text-foreground'}`} />
          </button>

          {/* Quick Add to Cart */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              onClick={handleAddToCart}
              variant="primary"
              size="sm"
              className="w-full"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              {t('product.addToCart')}
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="text-lg group-hover:text-primary transition-colors line-clamp-1">
            {displayName}
          </h3>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating!) ? 'text-primary' : 'text-muted'}>
                    ★
                  </span>
                ))}
              </div>
              <span>({product.reviewCount})</span>
            </div>
          )}

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-xl text-foreground">
              {formatPrice(product.price, i18n.language)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice, i18n.language)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
