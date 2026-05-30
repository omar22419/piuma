import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/Button';
import { ProductCard } from '../components/ProductCard';
import { getFeaturedProducts, getBestSellers, getProductsByCategory } from '../data/products';

export function HomePage() {
  const { t, i18n } = useTranslation();
  const featuredProducts = getFeaturedProducts();
  // const bestSellers = getBestSellers();
  const clothingProducts = getProductsByCategory('clothing').slice(0,4)
  const furnitureProducts = getProductsByCategory('furniture').slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-light-gray via-background to-dusty-rose/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl lg:text-7xl mb-6 text-navy tracking-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/shop">
                  <Button variant="primary" size="lg">
                    {t('hero.cta')}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/shop?category=furniture">
                  <Button variant="outline" size="lg">
                    {t('hero.secondaryCta')}
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-caramel/20 to-dusty-rose/20 p-8">
                <img
                  src="https://images.unsplash.com/photo-1774578342155-8d7e44a18bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Luxury nursery"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-8 py-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="text-2xl">4.9</span>
                </div>
                <p className="text-sm opacity-90">Premium Quality</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-gradient-to-b from-background to-light-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">{t('categories.title')}</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: t('categories.clothing'), category: 'clothing', image: 'https://res.cloudinary.com/duexs5wps/image/upload/v1779981613/WhatsApp_Image_2026-05-28_at_6.18.37_PM_ucz9ij.jpg' },
              { name: t('categories.furniture'), category: 'furniture', image: 'https://res.cloudinary.com/duexs5wps/image/upload/v1780114978/WhatsApp_Image_2026-05-28_at_6.11.47_PM_bzifxv.jpg' },
              { name: t('categories.nursery'), category: 'nursery', image: 'https://res.cloudinary.com/duexs5wps/image/upload/v1780115101/WhatsApp_Image_2026-05-28_at_6.20.31_PM_rpaaok.jpg' },
              { name: t('categories.feeding'), category: 'feeding', image: 'https://res.cloudinary.com/duexs5wps/image/upload/v1779981612/WhatsApp_Image_2026-05-28_at_6.15.12_PM_bjd6ab.jpg' },
              { name: t('categories.babyCare'), category: 'baby care', image: 'https://res.cloudinary.com/duexs5wps/image/upload/v1779981613/WhatsApp_Image_2026-05-28_at_6.15.32_PM_wuy56z.jpg' },
              { name: t('categories.industry'), category: 'industry', image: 'https://res.cloudinary.com/duexs5wps/image/upload/v1779981612/WhatsApp_Image_2026-05-28_at_6.13.43_PM_ngjcff.jpg' }
            ].map((cat, index) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  to={`/shop?category=${cat.category}`}
                  className="group block relative aspect-square rounded-2xl overflow-hidden"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex items-end p-6">
                    <h3 className="text-white text-xl">{cat.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4">{t('common.featured')}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked luxury essentials for your little ones
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop">
            <Button variant="outline" size="lg">
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Luxury Furniture Section */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">Furniture</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Premium cribs, chairs, and storage solutions with timeless design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {furnitureProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop?category=furniture">
              <Button variant="primary" size="lg">
                Explore Furniture Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4">{t('Baby Fashion')}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soft, stylish, and comfortable baby clothing designed for everyday comfort and timeless charm.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {clothingProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4">What Parents Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Sarah M.', text: 'The quality is outstanding! The organic cotton is so soft and the furniture is beautifully crafted.', rating: 5 },
            { name: 'Ahmed K.', text: 'Fast shipping and excellent customer service. My baby loves the toys and the crib is stunning.', rating: 5 },
            { name: 'Emma L.', text: 'PIUMA has become my go-to for all baby essentials. Premium quality at reasonable prices.', rating: 5 }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-muted rounded-2xl p-8"
            >
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6">{testimonial.text}</p>
              <p className="text-navy">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
