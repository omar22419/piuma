import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '../components/Button';
import { useCartStore } from '../store/useCartStore';
import { formatPrice } from '../lib/utils';

export function CartPage() {
  const { t, i18n } = useTranslation();
  const { items, updateQuantity, removeItem, getTotal, clearCart } = useCartStore();

  const total = getTotal();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-muted-foreground" />
          <h2 className="text-3xl mb-4">{t('cart.empty')}</h2>
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
          <h1 className="text-4xl mb-8">{t('cart.title')}</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => {
                const displayName = i18n.language === 'ar' ? item.product.nameAr : item.product.name;

                return (
                  <motion.div
                    key={`${item.product.id}-${item.variantId}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-muted rounded-xl p-4 flex gap-4"
                  >
                    {/* Product Image */}
                    <Link
                      to={`/product/${item.product.slug}`}
                      className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0"
                    >
                      <img
                        src={item.product.images[0]?.url}
                        alt={item.product.images[0]?.alt}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.product.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        <h3 className="text-lg mb-2 line-clamp-1">{displayName}</h3>
                      </Link>
                      <p className="text-xl text-navy mb-4">
                        {formatPrice(item.product.price, i18n.language)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-border rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.variantId)}
                            className="p-2 hover:bg-background transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.variantId)}
                            className="p-2 hover:bg-background transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.product.id, item.variantId)}
                          className="text-destructive hover:text-destructive/80 transition-colors"
                          aria-label={t('cart.remove')}
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="text-right">
                      <p className="text-xl">
                        {formatPrice(item.product.price * item.quantity, i18n.language)}
                      </p>
                    </div>
                  </motion.div>
                );
              })}

              {/* Clear Cart */}
              <button
                onClick={clearCart}
                className="text-destructive hover:text-destructive/80 transition-colors text-sm"
              >
                Clear Cart
              </button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-muted rounded-xl p-6 sticky top-24">
                <h2 className="text-2xl mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('cart.subtotal')}</span>
                    <span className="text-lg">{formatPrice(total, i18n.language)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between">
                      <span className="text-xl">{t('cart.total')}</span>
                      <span className="text-2xl text-navy">{formatPrice(total, i18n.language)}</span>
                    </div>
                  </div>
                </div>

                <Button variant="primary" size="lg" className="w-full mb-4">
                  {t('cart.checkout')}
                </Button>

                <Link to="/shop">
                  <Button variant="outline" className="w-full">
                    {t('cart.continueShopping')}
                  </Button>
                </Link>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-border space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free shipping on all orders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>30-day return policy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Secure payment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
