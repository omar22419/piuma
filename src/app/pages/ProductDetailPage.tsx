import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Heart, ShoppingCart, Star, Minus, Plus, Check } from 'lucide-react';
import { Button } from '../components/Button';
import { ProductCard } from '../components/ProductCard';
import { getProductBySlug, products } from '../data/products';
import { useCartStore } from '../store/useCartStore';
import { useWishlistStore } from '../store/useWishlistStore';
import { formatPrice } from '../lib/utils';

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const product = getProductBySlug(slug || '');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const addToCart = useCartStore((state) => state.addItem);
  const { isInWishlist, addItem, removeItem } = useWishlistStore();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-4">Product not found</h1>
          <Link to="/shop">
            <Button variant="primary">Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const displayName = i18n.language === 'ar' ? product.nameAr : product.name;
  const displayDescription = i18n.language === 'ar' ? product.descriptionAr : product.description;
  const displaySpecs = i18n.language === 'ar' ? product.specificationsAr : product.specifications;

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleToggleWishlist = () => {
    if (inWishlist) {
      removeItem(product.id);
    } else {
      addItem(product.id);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Image */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted mb-4">
              <img
                src={product.images[selectedImage]?.url}
                alt={product.images[selectedImage]?.alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image Thumbnails */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.new && (
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">
                  {t('common.new')}
                </span>
              )}
              {product.bestSeller && (
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                  {t('common.bestSeller')}
                </span>
              )}
            </div>

            <h1 className="text-4xl mb-4">{displayName}</h1>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-3 mb-6">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating!)
                          ? 'fill-primary text-primary'
                          : 'text-muted'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating} ({product.reviewCount} {t('product.reviews')})
                </span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl text-navy">
                {formatPrice(product.price, i18n.language)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {formatPrice(product.originalPrice, i18n.language)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {displayDescription}
            </p>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <div className="flex items-center gap-2 text-green-600">
                  <Check className="w-5 h-5" />
                  <span>{t('product.inStock')}</span>
                </div>
              ) : (
                <div className="text-destructive">{t('product.outOfStock')}</div>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block mb-2">{t('product.quantity')}</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart & Wishlist */}
            <div className="flex gap-4 mb-8">
              <Button
                onClick={handleAddToCart}
                variant="primary"
                size="lg"
                className="flex-1"
                disabled={!product.inStock}
              >
                {addedToCart ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    {t('product.addToCart')}
                  </>
                )}
              </Button>
              <button
                onClick={handleToggleWishlist}
                className="w-14 h-14 rounded-lg border-2 border-border flex items-center justify-center hover:border-primary transition-colors"
                aria-label={inWishlist ? t('product.removeFromWishlist') : t('product.addToWishlist')}
              >
                <Heart
                  className={`w-6 h-6 ${inWishlist ? 'fill-primary text-primary' : ''}`}
                />
              </button>
            </div>

            {/* Specifications */}
            {displaySpecs && (
              <div className="border-t border-border pt-8">
                <h3 className="text-xl mb-4">{t('product.specifications')}</h3>
                <dl className="space-y-3">
                  {Object.entries(displaySpecs).map(([key, value]) => (
                    <div key={key} className="flex gap-4">
                      <dt className="text-muted-foreground min-w-[120px]">{key}:</dt>
                      <dd className="text-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl mb-8">{t('product.relatedProducts')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
