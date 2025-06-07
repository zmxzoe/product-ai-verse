
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Zap, DollarSign, Shield, Cpu, Cloud, CreditCard, BarChart3, Mail, Megaphone, Globe, Image } from 'lucide-react';

const ServiceMarket = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: '全部服务', icon: Globe },
    { id: 'llm', name: '大模型API', icon: Cpu },
    { id: 'cloud', name: '云服务器', icon: Cloud },
    { id: 'payment', name: '支付系统', icon: CreditCard },
    { id: 'analytics', name: '数据分析', icon: BarChart3 },
    { id: 'marketing', name: '营销工具', icon: Megaphone },
    { id: 'utils', name: '实用工具', icon: Zap }
  ];

  const services = [
    {
      id: 1,
      name: 'OpenAI GPT-4 API',
      provider: 'OpenAI',
      category: '大模型API',
      description: '最先进的大语言模型API，支持文本生成、对话、代码编写等多种任务',
      pricing: '按使用量计费',
      startingPrice: '$0.03/1K tokens',
      rating: 4.9,
      users: '10万+',
      features: ['多模态支持', '128K上下文', 'Function Calling', '实时API'],
      badge: '最受欢迎',
      image: 'photo-1677442136019-21780ecad995',
      commission: '5%'
    },
    {
      id: 2,
      name: '阿里云ECS',
      provider: '阿里云',
      category: '云服务器',
      description: '弹性计算服务，提供安全可靠的弹性计算服务',
      pricing: '按量付费/包年包月',
      startingPrice: '¥68/月起',
      rating: 4.7,
      users: '50万+',
      features: ['弹性伸缩', '多可用区', '安全防护', '数据备份'],
      badge: '企业首选',
      image: 'photo-1558494949-ef010cbdcc31',
      commission: '3%'
    },
    {
      id: 3,
      name: 'Stripe 支付',
      provider: 'Stripe',
      category: '支付系统',
      description: '全球领先的在线支付平台，支持多种支付方式和货币',
      pricing: '交易手续费',
      startingPrice: '2.9% + ¥2/笔',
      rating: 4.8,
      users: '100万+',
      features: ['全球支付', '防欺诈', 'API集成', '移动支付'],
      badge: '全球通用',
      image: 'photo-1556742049-0cfed4f6a45d',
      commission: '2%'
    },
    {
      id: 4,
      name: 'Mixpanel 分析',
      provider: 'Mixpanel',
      category: '数据分析',
      description: '专业的用户行为分析平台，深入了解用户使用习惯',
      pricing: '按事件数计费',
      startingPrice: '免费额度/月$20起',
      rating: 4.6,
      users: '5万+',
      features: ['实时分析', '用户画像', '漏斗分析', 'A/B测试'],
      badge: '数据驱动',
      image: 'photo-1551288049-bebda4e38f71',
      commission: '8%'
    },
    {
      id: 5,
      name: 'SendGrid 邮件',
      provider: 'SendGrid',
      category: '营销工具',
      description: '专业邮件发送服务，提供高送达率的邮件营销解决方案',
      pricing: '按邮件数计费',
      startingPrice: '免费1万封/月',
      rating: 4.5,
      users: '8万+',
      features: ['高送达率', '模板编辑', '数据统计', 'API集成'],
      badge: '营销利器',
      image: 'photo-1596526131083-e8c633c948d2',
      commission: '6%'
    },
    {
      id: 6,
      name: 'Cloudinary 图像',
      provider: 'Cloudinary',
      category: '实用工具',
      description: '智能图像和视频管理平台，提供上传、存储、优化和传输服务',
      pricing: '按存储和带宽',
      startingPrice: '免费额度/月$99起',
      rating: 4.7,
      users: '3万+',
      features: ['AI优化', '格式转换', 'CDN加速', '压缩算法'],
      badge: '图像专家',
      image: 'photo-1618005182384-a83a8bd57fbe',
      commission: '4%'
    }
  ];

  const getCategoryIcon = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.icon || Globe;
  };

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === categories.find(cat => cat.id === selectedCategory)?.name;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">服务接入市场</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              一键接入第三方服务，快速构建你的AI应用生态
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="搜索API、服务或工具..."
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
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                可用服务 <span className="text-lg font-normal text-gray-500">({filteredServices.length})</span>
              </h2>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">最受欢迎</Button>
                <Button variant="outline" size="sm">价格排序</Button>
                <Button variant="outline" size="sm">评分排序</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredServices.map((service) => (
                <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden relative">
                    <img 
                      src={`https://images.unsplash.com/${service.image}?w=400&h=200&fit=crop&crop=center`}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600">{service.badge}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white/90">
                        佣金 {service.commission}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">
                        {service.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm font-medium">{service.rating}</span>
                        <span className="text-sm text-gray-500">({service.users})</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-sm text-gray-500 mb-2">by {service.provider}</p>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {service.features.slice(0, 3).map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-sm text-gray-500">{service.pricing}</div>
                        <div className="font-semibold text-gray-900">{service.startingPrice}</div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1">
                        立即接入
                      </Button>
                      <Button variant="outline" size="sm">
                        了解详情
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
