
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

interface FilterBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

const FilterBar = ({ selectedCategory, onCategoryChange, selectedTags, onTagToggle }: FilterBarProps) => {
  const { t } = useLanguage();

  const categories = [
    { id: 'all', name: t('category.all') },
    { id: '教育', name: '教育' },
    { id: '开发工具', name: '开发工具' },
    { id: '娱乐', name: '娱乐' },
    { id: '医疗', name: '医疗' },
    { id: '金融', name: '金融' },
    { id: '物联网', name: '物联网' },
    { id: '电商', name: '电商' },
    { id: '设计', name: '设计' },
    { id: '营销', name: '营销' },
    { id: '社交', name: '社交' },
    { id: '生产力', name: '生产力' },
    { id: '游戏', name: '游戏' },
    { id: '健康', name: '健康' },
    { id: '旅行', name: '旅行' },
    { id: '新闻', name: '新闻' }
  ];

  const popularTags = [
    'LLM', '语音识别', '计算机视觉', '自然语言处理', 'GPT', '机器学习', 
    '深度学习', '低代码', 'API', '开源', 'ChatGPT', 'Claude', 'Midjourney',
    'Stable Diffusion', '语音合成', '图像生成', '数据分析', '自动化',
    '云服务', 'SaaS', 'B2B', 'B2C', '移动端', 'Web应用'
  ];

  return (
    <div className="bg-background border-b border-border py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">分类</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange(category.id)}
                className="h-8 text-sm"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">热门标签</h3>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer hover:bg-accent text-xs py-1 px-2"
                onClick={() => onTagToggle(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
