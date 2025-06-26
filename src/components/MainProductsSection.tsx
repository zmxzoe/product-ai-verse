
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, ExternalLink } from 'lucide-react';

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
  const navigate = useNavigate();

  const handleVisitTool = (product: Product) => {
    if (product.link.startsWith('http')) {
      window.open(product.link, '_blank');
    } else {
      navigate(`/product/${product.id}`);
    }
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: string } = {
      '写作': '✍️',
      '图像': '🎨',
      '开发': '💻',
      '视频': '🎬',
      '数据': '📊',
      'writing': '✍️',
      'image': '🎨',
      'development': '💻',
      'video': '🎬',
      'data': '📊'
    };
    return iconMap[category] || '🤖';
  };

  return (
    <>
      {/* Main Products Section Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-3xl font-bold text-gray-900">🚀 所有AI工具</h2>
          <p className="mt-2 text-lg text-gray-600">发现和探索最新的AI工具和应用</p>
        </div>
      </div>

      {/* Filters and Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                size="sm"
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </div>
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm px-3 py-2"
            >
              <option value="newest">{t('sort.newest')}</option>
              <option value="priceLowToHigh">{t('sort.price_low_to_high')}</option>
              <option value="priceHighToLow">{t('sort.price_high_to_low')}</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <Card key={product.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{getCategoryIcon(product.category)}</span>
                    <div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm text-gray-600">{(product.likes / 50).toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                  {product.hasJobs && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800">招聘</Badge>
                  )}
                  {product.hasTasks && (
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">任务</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button 
                  onClick={() => handleVisitTool(product)} 
                  variant="outline" 
                  className="w-full"
                  size="sm"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  访问工具
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🤖</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">没有找到相关工具</h3>
            <p className="text-gray-500">尝试调整筛选条件或选择其他分类</p>
          </div>
        )}
      </div>
    </>
  );
};

export default MainProductsSection;
