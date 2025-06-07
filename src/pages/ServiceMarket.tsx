
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Star, Zap, Shield, Globe, Database, CreditCard, BarChart, Mail, Palette } from 'lucide-react';

const ServiceMarket = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: '全部服务', icon: Globe },
    { id: 'ai', name: '大模型API', icon: Zap },
    { id: 'cloud', name: '云服务器', icon: Database },
    { id: 'payment', name: '支付系统', icon: CreditCard },
    { id: 'analytics', name: '数据分析', icon: BarChart },
    { id: 'marketing', name: '营销工具', icon: Mail },
    { id: 'ui', name: '界面组件', icon: Palette }
  ];

  const services = [
    {
      id: 1,
      name: 'OpenAI API',
      description: '最先进的GPT-4模型API，支持文本生成、对话、代码编写等多种AI功能',
      category: '大模型API',
      provider: 'OpenAI',
      rating: 4.9,
      reviews: 12453,
      pricing: '按使用量计费',
      startingPrice: '$0.03',
      unit: '每1K tokens',
      features: ['GPT-4', 'GPT-3.5', 'DALL-E', 'Whisper'],
      image: 'photo-1677442136019-21780ecad995',
      isPopular: true,
      hasFreeTier: true
    },
    {
      id: 2,
      name: '阿里云ECS',
      description: '弹性计算服务，提供安全可靠的云服务器，支持多种配置和操作系统',
      category: '云服务器',
      provider: '阿里云',
      rating: 4.7,
      reviews: 8932,
      pricing: '按小时计费',
      startingPrice: '¥0.34',
      unit: '每小时',
      features: ['弹性伸缩', '多可用区', '安全防护', '监控告警'],
      image: 'photo-1451187580459-43490279c0fa',
      isPopular: false,
      hasFreeTier: true
    },
    {
      id: 3,
      name: 'Stripe 支付',
      description: '全球领先的在线支付平台，支持信用卡、数字钱包等多种支付方式',
      category: '支付系统',
      provider: 'Stripe',
      rating: 4.8,
      reviews: 15672,
      pricing: '按交易收费',
      startingPrice: '2.9%',
      unit: '每笔交易',
      features: ['全球支付', 'API集成', '欺诈检测', '实时报告'],
      image: 'photo-1556742049-0cfed4f6a45d',
      isPopular: true,
      hasFreeTier: false
    },
    {
      id: 4,
      name: 'Google Analytics',
      description: '专业的网站数据分析工具，深入了解用户行为和网站性能',
      category: '数据分析',
      provider: 'Google',
      rating: 4.6,
      reviews: 23156,
      pricing: '免费版+付费版',
      startingPrice: '免费',
      unit: '基础功能',
      features: ['实时数据', '用户画像', '转化跟踪', '自定义报告'],
      image: 'photo-1551288049-bebda4e38f71',
      isPopular: false,
      hasFreeTier: true
    },
    {
      id: 5,
      name: 'Mailchimp',
      description: '强大的邮件营销平台，提供邮件模板、自动化营销和用户分析功能',
      category: '营销工具',
      provider: 'Mailchimp',
      rating: 4.5,
      reviews: 9876,
      pricing: '按订阅数计费',
      startingPrice: '$10',
      unit: '每月500联系人',
      features: ['邮件模板', '自动化', 'A/B测试', '数据分析'],
      image: 'photo-1557804506-669a67965ba0',
      isPopular: false,
      hasFreeTier: true
    },
    {
      id: 6,
      name: 'shadcn/ui',
      description: '现代化的React UI组件库，基于Tailwind CSS构建，提供精美的界面组件',
      category: '界面组件',
      provider: 'shadcn',
      rating: 4.9,
      reviews: 5432,
      pricing: '开源免费',
      startingPrice: '免费',
      unit: '永久使用',
      features: ['React组件', 'TypeScript', 'Tailwind CSS', '可定制'],
      image: 'photo-1555949963-aa79dcee981c',
      isPopular: true,
      hasFreeTier: true
    }
  ];

  const getCategoryIcon = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.icon : Globe;
  };

  const filteredServices = services.filter(service => {
    const matchesSearch = searchTerm === '' || 
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
      service.category === categories.find(c => c.id === selectedCategory)?.name;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">服务接入市场</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              一站式集成第三方服务，快速构建你的AI产品生态
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="搜索API、云服务、支付工具..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">服务分类</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "ghost"}
                      onClick={() => setSelectedCategory(category.id)}
                      className="w-full justify-start text-sm"
                      size="sm"
                    >
                      <IconComponent className="h-4 w-4 mr-2" />
                      {category.name}
                    </Button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">市场统计</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-500">可用服务</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">10k+</div>
                  <div className="text-sm text-gray-500">企业用户</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">99.9%</div>
                  <div className="text-sm text-gray-500">服务可用性</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                服务列表 <span className="text-lg font-normal text-gray-500">({filteredServices.length})</span>
              </h2>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">最热门</Button>
                <Button variant="outline" size="sm">最新</Button>
                <Button variant="outline" size="sm">价格</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredServices.map((service) => (
                <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative">
                  {service.isPopular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                        热门
                      </Badge>
                    </div>
                  )}

                  <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${service.image}?w=400&h=200&fit=crop&crop=center`}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-500">{service.provider}</p>
                      </div>
                      {service.hasFreeTier && (
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          免费试用
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {service.rating} ({service.reviews} 评价)
                      </span>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">定价模式:</span>
                        <span className="font-medium">{service.pricing}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-sm">起步价:</span>
                        <div className="text-right">
                          <span className="text-lg font-bold text-green-600">{service.startingPrice}</span>
                          <span className="text-sm text-gray-500 ml-1">{service.unit}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 3).map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {service.features.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{service.features.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm">
                        立即接入
                      </Button>
                      <Button variant="outline" size="sm">
                        查看详情
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                加载更多服务
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceMarket;
