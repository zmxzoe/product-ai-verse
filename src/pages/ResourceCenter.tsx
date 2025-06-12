import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import AISearchBar from '@/components/AISearchBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, FileText, Github, Heart, Eye, Calendar, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';

const ResourceCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const { t } = useLanguage();

  const categories = [
    { id: 'all', name: t('category.all') },
    { id: 'training', name: t('category.training') },
    { id: 'api', name: t('category.api') },
    { id: 'frontend', name: t('category.frontend') },
    { id: 'backend', name: t('category.backend') },
    { id: 'data', name: t('category.data') },
    { id: 'prompt', name: t('category.prompt') },
    { id: 'framework', name: t('category.framework') }
  ];

  const types = [
    { id: 'all', name: t('type.all') },
    { id: 'video', name: t('type.video') },
    { id: 'article', name: t('type.article') },
    { id: 'blog', name: t('type.blog') },
    { id: 'github', name: t('type.github') }
  ];

  const resources = [
    {
      id: 1,
      title: 'ChatGPT API 完整调用指南',
      description: '详细介绍如何使用 OpenAI ChatGPT API，包括认证、请求格式、错误处理等',
      category: 'API调用',
      type: '图文教程',
      tags: ['ChatGPT', 'OpenAI', 'API', '初学者'],
      author: '李明',
      date: '2024-06-01',
      views: 1247,
      likes: 89,
      image: 'photo-1677442136019-21780ecad995',
      readTime: '15分钟'
    },
    {
      id: 2,
      title: 'LangChain 实战：构建智能问答系统',
      description: '使用 LangChain 框架构建企业级智能问答系统，包含完整代码示例',
      category: '开源框架',
      type: '视频教程',
      tags: ['LangChain', '问答系统', 'Python', '实战'],
      author: '张华',
      date: '2024-05-28',
      views: 2156,
      likes: 234,
      image: 'photo-1555949963-aa79dcee981c',
      duration: '45分钟'
    },
    {
      id: 3,
      title: 'Prompt Engineering 最佳实践',
      description: '深入解析提示工程技巧，提高AI模型输出质量的实用方法',
      category: '提示工程',
      type: '技术博客',
      tags: ['Prompt', '提示工程', 'GPT', '优化'],
      author: '王磊',
      date: '2024-05-25',
      views: 3421,
      likes: 445,
      image: 'photo-1516321318423-f06f85e504b3',
      readTime: '20分钟'
    },
    {
      id: 4,
      title: '开源项目：智能代码生成器',
      description: '基于 Transformer 的代码生成工具，支持多种编程语言',
      category: '开源框架',
      type: 'GitHub项目',
      tags: ['开源', '代码生成', 'Transformer', 'GitHub'],
      author: 'AI开发团队',
      date: '2024-05-20',
      views: 987,
      likes: 156,
      image: 'photo-1461749280684-dccba630e2f6',
      stars: 2340
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case '视频教程':
        return <Play className="h-4 w-4" />;
      case '图文教程':
      case '技术博客':
        return <FileText className="h-4 w-4" />;
      case 'GitHub项目':
        return <Github className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const handleAISearch = (query: string) => {
    setSearchTerm(query);
    toast({
      title: "AI搜索启动",
      description: `正在为您智能推荐学习资源: ${query}`,
    });
  };

  const quickPrompts = [
    '推荐ChatGPT使用教程',
    '找LangChain实战案例',
    '我想学习Prompt工程',
    '推荐AI开发框架',
    '寻找机器学习入门资料'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      <AISearchBar 
        onSearch={handleAISearch}
        placeholder="搜索学习资源、教程或文档..."
        aiPlaceholder="告诉我你想学习什么，比如：我想学习如何使用ChatGPT API..."
        quickPrompts={quickPrompts}
        context="学习资源推荐"
      />
      
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('resources.title')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('resources.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t('resources.category')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "ghost"}
                      onClick={() => setSelectedCategory(category.id)}
                      className="w-full justify-start text-sm"
                      size="sm"
                    >
                      {category.name}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t('resources.type')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {types.map((type) => (
                    <Button
                      key={type.id}
                      variant={selectedType === type.id ? "default" : "ghost"}
                      onClick={() => setSelectedType(type.id)}
                      className="w-full justify-start text-sm"
                      size="sm"
                    >
                      {type.name}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t('resources.contribute')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    {t('resources.contribute.desc')}
                  </p>
                  <Button className="w-full">
                    {t('resources.submit')}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {t('resources.learning')} <span className="text-lg font-normal text-gray-500">(4)</span>
              </h2>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">{t('resources.latest')}</Button>
                <Button variant="outline" size="sm">{t('resources.hot')}</Button>
                <Button variant="outline" size="sm">{t('resources.most_liked')}</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource) => (
                <Card key={resource.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${resource.image}?w=400&h=200&fit=crop&crop=center`}
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="flex items-center gap-1">
                        {getTypeIcon(resource.type)}
                        {resource.type}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-3">
                      <Badge variant="outline" className="text-xs">
                        {resource.category}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {resource.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {resource.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {resource.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {resource.date}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {resource.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {resource.likes}
                        </div>
                        {resource.readTime && (
                          <span>{resource.readTime}</span>
                        )}
                        {resource.duration && (
                          <span>{resource.duration}</span>
                        )}
                        {resource.stars && (
                          <div className="flex items-center gap-1">
                            <Github className="h-4 w-4" />
                            {resource.stars}
                          </div>
                        )}
                      </div>

                      <Button size="sm" variant="outline">
                        查看详情
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                {t('resources.load_more')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCenter;
