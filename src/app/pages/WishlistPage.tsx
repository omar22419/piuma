import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { Button } from '../components/Button';
import { ProductCard } from '../components/ProductCard';
import { useWishlistStore } from '../store/useWishlistStore';
import { products } from '../data/products';

export function WishlistPage() {
  const { t } = useTranslation();
  const wishlistItems = useWishlistStore((state) => state.items);

  const wishlistProducts = products.filter((product) =>
    wishlistItems.some((item) => item.productId === product.id)
  );

  if (wishlistProducts.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Heart className="w-24 h-24 mx-auto mb-6 text-muted-foreground" />
          <h2 className="text-3xl mb-4">Your wishlist is empty</h2>
          <p className="text-muted-foreground mb-8">
            Save your favorite items for later
          </p>
          <Link to="/shop">
            <Button variant="primary" size="lg">
              {t('cart.continueShopping')}
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl mb-2">{t('nav.wishlist')}</h1>
          <p className="text-muted-foreground mb-12">
            {wishlistProducts.length} {wishlistProducts.length === 1 ? 'item' : 'items'} saved
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {wishlistProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
