import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AISearchBar from '@/components/AISearchBar';
import TrendingSection from '@/components/TrendingSection';
import FilterBar from '@/components/FilterBar';
import SortingTabs from '@/components/SortingTabs';
import ProductCard from '@/components/ProductCard';
import SocialMediaBar from '@/components/SocialMediaBar';
import { toast } from '@/hooks/use-toast';

// Mock data for AI products
const mockProducts = [
  {
    id: '1',
    name: 'ChatVision AI',
    description: '基于GPT-4V的智能图像理解和对话系统，支持多模态交互和实时图像分析',
    category: '教育',
    tags: ['GPT', '计算机视觉', '多模态', 'API'],
    images: ['photo-1649972904349-6e44c42644a7'],
    likes: 1247,
    comments: 89,
    launchDate: '2024-06-01',
    link: 'https://chatvision.ai',
    hasJobs: true,
    hasTasks: false,
    location: '北京'
  },
  {
    id: '2',
    name: 'AutoCode Pro',
    description: 'AI驱动的低代码开发平台，一键生成前后端代码，支持多种框架和数据库',
    category: '开发工具',
    tags: ['低代码', 'AI编程', '自动化', '开源'],
    images: ['photo-1488590528505-98d2b5aba04b'],
    likes: 892,
    comments: 156,
    launchDate: '2024-05-28',
    link: 'https://autocode.pro',
    hasJobs: false,
    hasTasks: true,
    location: '上海'
  },
  {
    id: '3',
    name: 'VoiceClone Studio',
    description: '专业级AI语音克隆工具，支持多语言语音合成和实时语音转换',
    category: '娱乐',
    tags: ['语音识别', '语音合成', '深度学习', 'TTS'],
    images: ['photo-1518770660439-4636190af475'],
    likes: 634,
    comments: 72,
    launchDate: '2024-05-25',
    link: 'https://voiceclone.studio',
    hasJobs: true,
    hasTasks: true,
    location: '深圳'
  },
  {
    id: '4',
    name: 'MedAI Diagnosis',
    description: '医疗AI诊断助手，基于医学影像和病历数据提供辅助诊断建议',
    category: '医疗',
    tags: ['医疗AI', '影像识别', '机器学习', '诊断'],
    images: ['photo-1461749280684-dccba630e2f6'],
    likes: 445,
    comments: 34,
    launchDate: '2024-05-20',
    link: 'https://medai.diagnosis',
    hasJobs: false,
    hasTasks: false,
    location: '杭州'
  },
  {
    id: '5',
    name: 'FinBot Advisor',
    description: '智能金融投资顾问，基于大数据分析提供个性化投资建议和风险评估',
    category: '金融',
    tags: ['金融AI', '投资分析', '风险评估', '量化交易'],
    images: ['photo-1486312338219-ce68d2c6f44d'],
    likes: 789,
    comments: 123,
    launchDate: '2024-05-15',
    link: 'https://finbot.advisor',
    hasJobs: true,
    hasTasks: false,
    location: '广州'
  },
  {
    id: '6',
    name: 'SmartHome Hub',
    description: 'AI智能家居控制中心，支持语音控制和场景自动化，兼容多种智能设备',
    category: '物联网',
    tags: ['智能家居', '语音控制', '物联网', '自动化'],
    images: ['photo-1581091226825-a6a2a5aee158'],
    likes: 567,
    comments: 67,
    launchDate: '2024-05-12',
    link: 'https://smarthome.hub',
    hasJobs: false,
    hasTasks: true,
    location: '成都'
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState('latest');
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  // Filter products based on search, category, and tags
  useEffect(() => {
    let filtered = mockProducts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => 
        product.category === selectedCategory
      );
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(product =>
        selectedTags.some(tag => product.tags.includes(tag))
      );
    }

    // Sort products
    switch (selectedSort) {
      case 'popular':
        filtered.sort((a, b) => b.likes - a.likes);
        break;
      case 'trending':
        filtered.sort((a, b) => (b.likes + b.comments) - (a.likes + a.comments));
        break;
      case 'hiring':
        filtered = filtered.filter(product => product.hasJobs);
        break;
      case 'latest':
      default:
        filtered.sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime());
        break;
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, selectedTags, selectedSort]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleLike = (productId: string) => {
    toast({
      title: "已点赞",
      description: "感谢你的支持！",
    });
    console.log('Liked product:', productId);
  };

  const handleBookmark = (productId: string) => {
    toast({
      title: "已收藏",
      description: "产品已添加到收藏夹",
    });
    console.log('Bookmarked product:', productId);
  };

  const handleShare = (productId: string) => {
    toast({
      title: "已复制链接",
      description: "产品链接已复制到剪贴板",
    });
    console.log('Shared product:', productId);
  };

  const handleAISearch = (query: string) => {
    console.log('AI Search query:', query);
    setSearchTerm(query);
    toast({
      title: "AI搜索启动",
      description: `正在为您智能推荐: ${query}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      {/* Hero Section */}
      <HeroSection searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      {/* AI Search Bar */}
      <AISearchBar onSearch={handleAISearch} />
      
      {/* Trending Section */}
      <TrendingSection />
      
      <FilterBar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedTags={selectedTags}
        onTagToggle={handleTagToggle}
      />
      
      <SortingTabs
        selectedSort={selectedSort}
        onSortChange={setSelectedSort}
      />

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground text-lg mb-4">没有找到匹配的产品</div>
            <div className="text-muted-foreground/70">尝试调整搜索条件或筛选器</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onLike={handleLike}
                onBookmark={handleBookmark}
                onShare={handleShare}
              />
            ))}
          </div>
        )}
      </div>

      {/* Load More Button */}
      {filteredProducts.length > 0 && (
        <div className="text-center pb-12">
          <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full hover:from-primary/90 hover:to-primary/70 transition-all duration-300 font-medium">
            加载更多产品
          </button>
        </div>
      )}

      {/* Social Media Bar */}
      <SocialMediaBar />
    </div>
  );
};

export default Index;
