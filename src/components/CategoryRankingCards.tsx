
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Star, Zap, Users } from 'lucide-react';

interface RankingItem {
  id: string;
  name: string;
  rating: number;
  users: string;
  trend: number;
}

const CategoryRankingCards = () => {
  const categories = [
    {
      title: '🤖 AI写作',
      icon: <Zap className="h-4 w-4" />,
      color: 'from-blue-500 to-purple-600',
      items: [
        { id: '1', name: 'ChatGPT', rating: 4.9, users: '100M+', trend: 15 },
        { id: '2', name: 'Jasper AI', rating: 4.7, users: '1M+', trend: 8 },
        { id: '3', name: 'Copy.ai', rating: 4.6, users: '500K+', trend: 12 }
      ]
    },
    {
      title: '🎨 图像生成',
      icon: <Star className="h-4 w-4" />,
      color: 'from-pink-500 to-rose-600',
      items: [
        { id: '4', name: 'Midjourney', rating: 4.9, users: '20M+', trend: 25 },
        { id: '5', name: 'DALL-E 3', rating: 4.8, users: '10M+', trend: 18 },
        { id: '6', name: 'Stable Diffusion', rating: 4.6, users: '5M+', trend: 10 }
      ]
    },
    {
      title: '💻 代码生成',
      icon: <Users className="h-4 w-4" />,
      color: 'from-green-500 to-emerald-600',
      items: [
        { id: '7', name: 'GitHub Copilot', rating: 4.8, users: '5M+', trend: 20 },
        { id: '8', name: 'Cursor', rating: 4.7, users: '1M+', trend: 35 },
        { id: '9', name: 'Replit AI', rating: 4.5, users: '500K+', trend: 15 }
      ]
    },
    {
      title: '📊 数据分析',
      icon: <TrendingUp className="h-4 w-4" />,
      color: 'from-orange-500 to-red-600',
      items: [
        { id: '10', name: 'DataRobot', rating: 4.6, users: '100K+', trend: 12 },
        { id: '11', name: 'H2O.ai', rating: 4.5, users: '50K+', trend: 8 },
        { id: '12', name: 'Tableau AI', rating: 4.4, users: '200K+', trend: 5 }
      ]
    }
  ];

  return (
    <div className="bg-white py-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-1">🏆 热门排行</h2>
          <p className="text-sm text-gray-600">各领域顶尖AI工具</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <div className={`p-1.5 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <div key={item.id} className="flex items-center justify-between p-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 text-xs font-semibold text-gray-600">
                        {itemIndex + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm">{item.name}</h4>
                        <div className="flex items-center gap-1 mt-0.5">
                          <Star className="h-2.5 w-2.5 text-yellow-400 fill-yellow-400" />
                          <span className="text-xs text-gray-500">{item.rating}</span>
                        </div>
                      </div>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs px-1.5 py-0.5 ${item.trend > 15 ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}
                    >
                      <TrendingUp className="h-2.5 w-2.5 mr-0.5" />
                      +{item.trend}%
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryRankingCards;
