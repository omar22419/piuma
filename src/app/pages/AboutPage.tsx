import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Heart, Award, Shield, Leaf } from 'lucide-react';

export function AboutPage() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Heart,
      title: 'Quality Craftsmanship',
      description: 'Every product is carefully selected and crafted with attention to detail and premium materials.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'We prioritize eco-friendly materials and ethical production processes for a better future.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'All products meet or exceed international safety standards for complete peace of mind.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are committed to delivering exceptional products and customer experiences.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-gradient-to-br from-light-gray to-dusty-rose/10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl mb-6 text-navy">{t('about.title')}</h1>
            <p className="text-xl text-muted-foreground">
              {t('about.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl mb-6">{t('about.story')}</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                PIUMA was born from a simple belief: every child deserves the finest quality products
                that combine luxury, comfort, and safety. Our journey began with a passion for creating
                beautiful, functional items that parents can trust and babies love.
              </p>
              <p>
                We carefully curate every piece in our collection, working with skilled artisans and
                manufacturers who share our commitment to excellence. From organic fabrics to
                sustainable wood, we choose materials that are gentle on your baby and kind to our planet.
              </p>
              <p>
                Today, PIUMA serves families around the world, offering a seamless blend of
                Scandinavian design principles with timeless luxury that grows with your family.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1774578342155-8d7e44a18bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="PIUMA nursery"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">{t('about.values')}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
