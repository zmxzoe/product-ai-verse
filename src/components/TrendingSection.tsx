import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Clock, Users, Calendar, Tag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TrendingProduct {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  discount: string;
  affiliateLink: string;
  image: string;
  features: string[];
  price: string;
  originalPrice?: string;
}

const TrendingSection = () => {
  const { t } = useLanguage();
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  const periods = [
    { id: 'today', name: '今日' },
    { id: 'yesterday', name: '昨日' },
    { id: 'thisWeek', name: '本周' },
    { id: 'lastWeek', name: '上周' }
  ];

  const trendingProducts: TrendingProduct[] = [
    {
      id: 'trending-1',
      name: 'ChatGPT Plus',
      description: '最强大的AI对话助手，提升工作效率10倍',
      category: '生产力',
      tags: ['对话AI', 'GPT', '写作助手'],
      rating: 4.8,
      reviewCount: 2847,
      discount: '首月5折',
      affiliateLink: 'https://affiliate.link/chatgpt-plus',
      image: 'photo-1677442136019-21780ecad995',
      features: ['无限对话', '优先访问', '最新模型'],
      price: '$10/月',
      originalPrice: '$20/月'
    },
    {
      id: 'trending-2',
      name: 'Midjourney Pro',
      description: '专业级AI图像生成，创意无限',
      category: '设计',
      tags: ['图像生成', 'AI艺术', '创意设计'],
      rating: 4.9,
      reviewCount: 1923,
      discount: '新用户7折',
      affiliateLink: 'https://affiliate.link/midjourney-pro',
      image: 'photo-1547394765-185e1e68f34e',
      features: ['高清生成', '商业授权', '优先队列'],
      price: '$30/月',
      originalPrice: '$43/月'
    },
    {
      id: 'trending-3',
      name: 'Notion AI',
      description: '智能笔记工具，AI写作和整理助手',
      category: '生产力',
      tags: ['笔记', 'AI写作', '团队协作'],
      rating: 4.7,
      reviewCount: 3421,
      discount: '学生优惠',
      affiliateLink: 'https://affiliate.link/notion-ai',
      image: 'photo-1484480974693-6ca0a78fb36b',
      features: ['AI写作', '模板库', '团队协作'],
      price: '$8/月',
      originalPrice: '$12/月'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-yellow-400' 
            : i < rating 
            ? 'text-yellow-400 fill-yellow-400/50'
            : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <div className="bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              <Clock className="inline h-8 w-8 mr-2 text-primary" />
              最新产品
            </h2>
            <p className="text-muted-foreground">最新上线的高质量AI工具，抢先体验</p>
          </div>
          
          {/* Period Selector */}
          <div className="flex bg-muted rounded-lg p-1">
            {periods.map((period) => (
              <Button
                key={period.id}
                variant={selectedPeriod === period.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedPeriod(period.id)}
                className="h-8"
              >
                {period.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Latest Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingProducts.map((product, index) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              {/* New Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-green-500 text-white font-semibold">
                  <Tag className="h-3 w-3 mr-1" />
                  新上线
                </Badge>
              </div>
              
              {/* Ranking Badge */}
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-primary text-primary-foreground font-bold">
                  #{index + 1}
                </Badge>
              </div>

              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${product.image}?w=400&h=200&fit=crop`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6">
                  {/* Product Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                      {product.description}
                    </p>
                    
                    {/* Category and Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                      {product.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviewCount} 评价)
                    </span>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {product.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-foreground">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button 
                      className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                      onClick={() => window.open(product.affiliateLink, '_blank')}
                    >
                      立即使用
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            查看更多新产品
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
