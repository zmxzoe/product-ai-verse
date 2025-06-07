
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, TrendingUp, Star, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroSectionProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const HeroSection = ({ searchTerm, onSearchChange }: HeroSectionProps) => {
  const { t } = useLanguage();

  const stats = [
    { icon: Star, label: '精选产品', value: '1,000+' },
    { icon: Users, label: '活跃用户', value: '50K+' },
    { icon: TrendingUp, label: '今日上新', value: '15' }
  ];

  return (
    <div className="bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-6">
            发现最佳AI产品
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            每日精选最新AI工具、应用和服务。探索人工智能的无限可能，提升你的工作效率。
          </p>
          
          {/* Hero Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="搜索AI产品、工具或技术..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-border rounded-full focus:ring-4 focus:ring-primary/20 focus:border-primary bg-background"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="rounded-full">
              <TrendingUp className="h-5 w-5 mr-2" />
              今日热门
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              <Star className="h-5 w-5 mr-2" />
              最新上线
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              <Users className="h-5 w-5 mr-2" />
              招聘中
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
