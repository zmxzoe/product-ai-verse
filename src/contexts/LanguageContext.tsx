
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 翻译字典
const translations = {
  zh: {
    // Navbar
    'navbar.products': '产品广场',
    'navbar.resources': '资源中心',
    'navbar.services': '服务市场',
    'navbar.jobs': '招聘广场',
    'navbar.search': '搜索AI产品、技术或服务...',
    'navbar.publish': '发布产品',
    'navbar.platform': 'AI产品生态平台',
    
    // Resources
    'resources.title': 'AI 资源中心',
    'resources.subtitle': '汇聚最新AI技术教程、开源项目和实战案例，助力你的AI学习之路',
    'resources.search': '搜索教程、项目或技术关键词...',
    'resources.category': '分类',
    'resources.type': '资源类型',
    'resources.contribute': '贡献内容',
    'resources.contribute.desc': '分享你的AI学习资源，帮助更多开发者',
    'resources.submit': '投稿资源',
    'resources.learning': '学习资源',
    'resources.latest': '最新',
    'resources.hot': '最热',
    'resources.most_liked': '最多点赞',
    'resources.view_details': '查看详情',
    'resources.load_more': '加载更多资源',
    
    // Categories
    'category.all': '全部',
    'category.training': '模型训练/微调',
    'category.api': 'API调用',
    'category.frontend': '前端集成',
    'category.backend': '后端部署',
    'category.data': '数据清洗',
    'category.prompt': '提示工程',
    'category.framework': '开源框架',
    
    // Resource types
    'type.all': '全部',
    'type.video': '视频教程',
    'type.article': '图文教程',
    'type.blog': '技术博客',
    'type.github': 'GitHub项目',
  },
  en: {
    // Navbar
    'navbar.products': 'Product Plaza',
    'navbar.resources': 'Resource Center',
    'navbar.services': 'Service Market',
    'navbar.jobs': 'Job Board',
    'navbar.search': 'Search AI products, technologies or services...',
    'navbar.publish': 'Publish Product',
    'navbar.platform': 'AI Product Ecosystem Platform',
    
    // Resources
    'resources.title': 'AI Resource Center',
    'resources.subtitle': 'Gather the latest AI technology tutorials, open source projects and practical cases to help your AI learning journey',
    'resources.search': 'Search tutorials, projects or technical keywords...',
    'resources.category': 'Category',
    'resources.type': 'Resource Type',
    'resources.contribute': 'Contribute Content',
    'resources.contribute.desc': 'Share your AI learning resources to help more developers',
    'resources.submit': 'Submit Resource',
    'resources.learning': 'Learning Resources',
    'resources.latest': 'Latest',
    'resources.hot': 'Hot',
    'resources.most_liked': 'Most Liked',
    'resources.view_details': 'View Details',
    'resources.load_more': 'Load More Resources',
    
    // Categories
    'category.all': 'All',
    'category.training': 'Model Training/Fine-tuning',
    'category.api': 'API Integration',
    'category.frontend': 'Frontend Integration',
    'category.backend': 'Backend Deployment',
    'category.data': 'Data Cleaning',
    'category.prompt': 'Prompt Engineering',
    'category.framework': 'Open Source Framework',
    
    // Resource types
    'type.all': 'All',
    'type.video': 'Video Tutorial',
    'type.article': 'Article Tutorial',
    'type.blog': 'Tech Blog',
    'type.github': 'GitHub Project',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
