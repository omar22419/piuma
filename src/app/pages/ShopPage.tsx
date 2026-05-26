import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Filter, X } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/Button';
import { products } from '../data/products';
import type { Category, SortOption } from '../types';

export function ShopPage() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const selectedCategory = (searchParams.get('category') as Category) || 'all';
  const selectedSort = (searchParams.get('sort') as SortOption) || 'newest';

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: t('categories.all') },
    { value: 'clothing', label: t('categories.clothing') },
    { value: 'essentials', label: t('categories.essentials') },
    { value: 'accessories', label: t('categories.accessories') },
    { value: 'furniture', label: t('categories.furniture') },
    { value: 'nursery', label: t('categories.nursery') },
    { value: 'feeding', label: t('categories.feeding') },
    { value: 'gifts', label: t('categories.gifts') },
    { value: 'baby care', label: t('categories.baby care') },

  ];

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'newest', label: t('filters.newest') },
    { value: 'priceLowHigh', label: t('filters.priceLowHigh') },
    { value: 'priceHighLow', label: t('filters.priceHighLow') },
    { value: 'popular', label: t('filters.popular') }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Sort
    switch (selectedSort) {
      case 'priceLowHigh':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighLow':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'popular':
        filtered.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
    }

    return filtered;
  }, [selectedCategory, selectedSort]);

  const handleCategoryChange = (category: Category) => {
    const newParams = new URLSearchParams(searchParams);
    if (category === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', category);
    }
    setSearchParams(newParams);
  };

  const handleSortChange = (sort: SortOption) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('sort', sort);
    setSearchParams(newParams);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl text-center mb-4">
              {categories.find((c) => c.value === selectedCategory)?.label}
            </h1>
            <p className="text-center text-muted-foreground text-lg">
              {filteredAndSortedProducts.length} {t('categories.all').toLowerCase()}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="text-xl mb-6">{t('filters.title')}</h2>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="mb-4">{t('filters.category')}</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => handleCategoryChange(category.value)}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.value
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div>
                <h3 className="mb-4">{t('filters.sortBy')}</h3>
                <div className="space-y-3">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSortChange(option.value)}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedSort === option.value
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden">
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="w-full"
            >
              <Filter className="w-4 h-4 mr-2" />
              {t('filters.title')}
            </Button>
          </div>

          {/* Mobile Filters Modal */}
          {showFilters && (
            <div className="fixed inset-0 z-50 bg-background lg:hidden overflow-y-auto">
              <div className="p-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl">{t('filters.title')}</h2>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Categories */}
                <div className="mb-8">
                  <h3 className="mb-4">{t('filters.category')}</h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <button
                        key={category.value}
                        onClick={() => {
                          handleCategoryChange(category.value);
                          setShowFilters(false);
                        }}
                        className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                          selectedCategory === category.value
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted'
                        }`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort */}
                <div className="mb-8">
                  <h3 className="mb-4">{t('filters.sortBy')}</h3>
                  <div className="space-y-3">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          handleSortChange(option.value);
                          setShowFilters(false);
                        }}
                        className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                          selectedSort === option.value
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => setShowFilters(false)}
                  variant="primary"
                  className="w-full"
                >
                  {t('filters.apply')}
                </Button>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  No products found in this category
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
