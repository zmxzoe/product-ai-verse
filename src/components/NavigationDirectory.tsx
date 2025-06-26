import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Star, 
  ExternalLink, 
  Zap, 
  Users, 
  TrendingUp, 
  Brain,
  Image,
  Code,
  Music,
  Video,
  FileText,
  MessageSquare,
  Briefcase
} from 'lucide-react';

interface NavigationItem {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  rating: number;
  tags: string[];
  icon: string;
  featured: boolean;
}

const NavigationDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: '全部', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'writing', name: 'AI写作', icon: <FileText className="h-4 w-4" /> },
    { id: 'image', name: '图像生成', icon: <Image className="h-4 w-4" /> },
    { id: 'code', name: '代码编程', icon: <Code className="h-4 w-4" /> },
    { id: 'chat', name: '对话聊天', icon: <MessageSquare className="h-4 w-4" /> },
    { id: 'video', name: '视频制作', icon: <Video className="h-4 w-4" /> },
    { id: 'audio', name: '音频处理', icon: <Music className="h-4 w-4" /> },
    { id: 'business', name: '商业工具', icon: <Briefcase className="h-4 w-4" /> }
  ];

  const navigationItems: NavigationItem[] = [
    {
      id: '1',
      name: 'ChatGPT',
      description: '最强大的AI对话助手，支持文本生成、代码编写、问题解答等',
      url: 'https://chat.openai.com',
      category: 'chat',
      rating: 4.9,
      tags: ['对话', '写作', '编程'],
      icon: '🤖',
      featured: true
    },
    {
      id: '2',
      name: 'Midjourney',
      description: '顶级AI图像生成工具，创造惊艳的艺术作品和设计',
      url: 'https://midjourney.com',
      category: 'image',
      rating: 4.8,
      tags: ['图像生成', '艺术', '设计'],
      icon: '🎨',
      featured: true
    },
    {
      id: '3',
      name: 'GitHub Copilot',
      description: 'AI编程助手，实时代码建议和自动补全',
      url: 'https://github.com/features/copilot',
      category: 'code',
      rating: 4.7,
      tags: ['编程', '代码', '开发'],
      icon: '💻',
      featured: true
    },
    {
      id: '4',
      name: 'Jasper AI',
      description: '专业的AI写作工具，适合营销文案和内容创作',
      url: 'https://jasper.ai',
      category: 'writing',
      rating: 4.6,
      tags: ['写作', '营销', '文案'],
      icon: '✍️',
      featured: false
    },
    {
      id: '5',
      name: 'RunwayML',
      description: 'AI视频编辑和生成平台，轻松制作专业视频',
      url: 'https://runwayml.com',
      category: 'video',
      rating: 4.5,
      tags: ['视频', '编辑', '生成'],
      icon: '🎬',
      featured: false
    },
    {
      id: '6',
      name: 'Eleven Labs',
      description: 'AI语音合成工具，生成自然逼真的人声',
      url: 'https://elevenlabs.io',
      category: 'audio',
      rating: 4.7,
      tags: ['语音', '合成', '音频'],
      icon: '🎵',
      featured: false
    },
    {
      id: '7',
      name: 'Notion AI',
      description: '集成在Notion中的AI助手，提升文档和项目管理效率',
      url: 'https://notion.so',
      category: 'business',
      rating: 4.4,
      tags: ['办公', '文档', '管理'],
      icon: '📝',
      featured: false
    },
    {
      id: '8',
      name: 'DALL-E 3',
      description: 'OpenAI的图像生成模型，理解复杂描述生成精准图像',
      url: 'https://openai.com/dall-e-3',
      category: 'image',
      rating: 4.8,
      tags: ['图像生成', 'OpenAI', '创意'],
      icon: '🖼️',
      featured: true
    }
  ];

  const filteredItems = navigationItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredItems = navigationItems.filter(item => item.featured);

  const handleVisitTool = (url: string) => {
    // For external tools, open in new tab
    if (url.startsWith('http')) {
      window.open(url, '_blank');
    } else {
      // For internal tools, could navigate to detail page
      window.open(url, '_blank');
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">🧭 AI工具导航</h2>
          <p className="text-lg text-gray-600 mb-6">发现和探索最优秀的AI工具，提升你的工作效率</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="搜索AI工具、功能或分类..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 text-lg border-2 border-gray-200 rounded-full focus:ring-4 focus:ring-blue-100 focus:border-blue-400"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center gap-2 rounded-full"
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </div>

        {/* Featured Section */}
        {selectedCategory === 'all' && searchTerm === '' && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">⭐ 精选推荐</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {featuredItems.map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-white">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <CardTitle className="text-lg">{item.name}</CardTitle>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                            <span className="text-sm text-gray-600">{item.rating}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">精选</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      onClick={() => handleVisitTool(item.url)} 
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
          </div>
        )}

        {/* All Tools Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? '所有工具' : categories.find(c => c.id === selectedCategory)?.name}
            </h3>
            <span className="text-sm text-gray-500">
              共 {filteredItems.length} 个工具
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                          <span className="text-sm text-gray-600">{item.rating}</span>
                        </div>
                      </div>
                    </div>
                    {item.featured && (
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">精选</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    onClick={() => handleVisitTool(item.url)} 
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

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <Brain className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">没有找到相关工具</h3>
              <p className="text-gray-500">尝试调整搜索关键词或选择其他分类</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationDirectory;
