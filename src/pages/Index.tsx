
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CategoryRankingCards from '@/components/CategoryRankingCards';
import AISearchBar from '@/components/AISearchBar';
import TrendingSection from '@/components/TrendingSection';
import MainProductsSection from '@/components/MainProductsSection';
import { useProducts } from '@/hooks/useProducts';

const Index = () => {
  const {
    searchTerm,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    categories,
    quickPrompts,
    sortedProducts,
    handleAISearch,
    handleHeroSearch,
    handleLike,
    handleBookmark,
    handleShare
  } = useProducts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        searchTerm={searchTerm}
        onSearchChange={handleHeroSearch}
      />
      
      {/* Category Ranking Cards */}
      <CategoryRankingCards />
      
      {/* AI Search Bar */}
      <AISearchBar 
        onSearch={handleAISearch}
        placeholder="搜索AI产品、工具或服务..."
        aiPlaceholder="告诉我你想要什么样的AI工具，比如：我需要一个能帮我写代码的AI助手..."
        quickPrompts={quickPrompts}
        context="AI产品推荐"
      />

      {/* Trending Section */}
      <TrendingSection />
      
      {/* Main Products Section */}
      <MainProductsSection
        products={sortedProducts}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onLike={handleLike}
        onBookmark={handleBookmark}
        onShare={handleShare}
      />
    </div>
  );
};

export default Index;
