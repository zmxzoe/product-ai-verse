
import React from 'react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { useLanguage } from '@/contexts/LanguageContext';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  images: string[];
  likes: number;
  comments: number;
  launchDate: string;
  link: string;
  hasJobs: boolean;
  hasTasks: boolean;
  location?: string;
}

interface MainProductsSectionProps {
  products: Product[];
  categories: Array<{ id: string; name: string }>;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  onLike: (id: string) => void;
  onBookmark: (id: string) => void;
  onShare: (id: string) => void;
}

const MainProductsSection = ({
  products,
  categories,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  onLike,
  onBookmark,
  onShare
}: MainProductsSectionProps) => {
  const { t } = useLanguage();

  return (
    <>
      {/* Main Products Section Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-3xl font-bold text-gray-900">所有AI产品</h2>
          <p className="mt-2 text-lg text-gray-600">发现和探索最新的AI工具和应用</p>
        </div>
      </div>

      {/* Filters and Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex gap-2">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                size="sm"
              >
                {category.name}
              </Button>
            ))}
          </div>
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            >
              <option value="newest">{t('sort.newest')}</option>
              <option value="priceLowToHigh">{t('sort.price_low_to_high')}</option>
              <option value="priceHighToLow">{t('sort.price_high_to_low')}</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product}
              onLike={onLike}
              onBookmark={onBookmark}
              onShare={onShare}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainProductsSection;
