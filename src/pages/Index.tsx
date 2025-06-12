import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import AISearchBar from '@/components/AISearchBar';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const { t } = useLanguage();

  const handleAISearch = (query: string) => {
    setSearchTerm(query);
    toast({
      title: "AI搜索启动",
      description: `正在为您智能推荐AI产品: ${query}`,
    });
  };

  const products = [
    {
      id: 1,
      name: 'AI 写作助手',
      description: '智能生成高质量文章，提高写作效率',
      category: '写作',
      price: 99,
      imageUrl: 'https://images.unsplash.com/photo-1583527403614-40ef95045448?w=500&h=300&fit=crop&crop=center',
      rating: 4.5,
      reviewCount: 120,
      createdAt: '2024-01-20T12:00:00.000Z',
    },
    {
      id: 2,
      name: '图像生成 AI',
      description: '快速生成各种风格的图像，满足设计需求',
      category: '图像',
      price: 149,
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop&crop=center',
      rating: 4.8,
      reviewCount: 230,
      createdAt: '2024-02-15T10:30:00.000Z',
    },
    {
      id: 3,
      name: '代码生成工具',
      description: '自动生成代码，降低开发成本',
      category: '开发',
      price: 199,
      imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop&crop=center',
      rating: 4.2,
      reviewCount: 85,
      createdAt: '2024-03-01T09:00:00.000Z',
    },
    {
      id: 4,
      name: '视频编辑 AI',
      description: '智能剪辑视频，提升视频质量',
      category: '视频',
      price: 129,
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop&crop=center',
      rating: 4.6,
      reviewCount: 155,
      createdAt: '2024-03-10T14:45:00.000Z',
    },
    {
      id: 5,
      name: '数据分析平台',
      description: '深度分析数据，发现潜在价值',
      category: '数据',
      price: 249,
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&crop=center',
      rating: 4.9,
      reviewCount: 310,
      createdAt: '2024-03-25T11:15:00.000Z',
    },
    {
      id: 6,
      name: 'AI 绘画工具',
      description: '通过人工智能技术创作独特的艺术作品',
      category: '图像',
      price: 179,
      imageUrl: 'https://images.unsplash.com/photo-1500856015390-3a8439c8ba9a?w=500&h=300&fit=crop&crop=center',
      rating: 4.7,
      reviewCount: 188,
      createdAt: '2024-04-05T16:00:00.000Z',
    },
  ];

  const categories = [
    { id: 'all', name: t('category.all') },
    { id: 'writing', name: t('category.writing') },
    { id: 'image', name: t('category.image') },
    { id: 'development', name: t('category.development') },
    { id: 'video', name: t('category.video') },
    { id: 'data', name: t('category.data') },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === t(`category.${selectedCategory.toLowerCase()}`);
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else if (sortBy === 'priceLowToHigh') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  const quickPrompts = [
    '推荐最新的AI写作工具',
    '找一个图像生成AI',
    '我需要代码生成助手',
    '推荐视频编辑AI工具',
    '寻找数据分析AI'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      <AISearchBar 
        onSearch={handleAISearch}
        placeholder="搜索AI产品、工具或服务..."
        aiPlaceholder="告诉我你想要什么样的AI工具，比如：我需要一个能帮我写代码的AI助手..."
        quickPrompts={quickPrompts}
        context="AI产品推荐"
      />
      
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">{t('home.title')}</h1>
          <p className="mt-2 text-lg text-gray-600">{t('home.subtitle')}</p>
        </div>
      </div>

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
          {sortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
