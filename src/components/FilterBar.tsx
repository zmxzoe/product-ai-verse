
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface FilterBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

const categories = [
  { id: 'all', name: '全部' },
  { id: 'education', name: '教育' },
  { id: 'video', name: '视频' },
  { id: 'medical', name: '医疗' },
  { id: 'finance', name: '金融' },
  { id: 'entertainment', name: '娱乐' },
  { id: 'retail', name: '零售' },
  { id: 'autonomous', name: '自动驾驶' },
  { id: 'iot', name: '物联网' },
  { id: 'bigdata', name: '大数据' }
];

const popularTags = [
  'LLM', '语音识别', '计算机视觉', '自然语言处理', 'GPT', '机器学习', 
  '深度学习', '低代码', 'API', '开源'
];

const FilterBar = ({ selectedCategory, onCategoryChange, selectedTags, onTagToggle }: FilterBarProps) => {
  return (
    <div className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">分类</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange(category.id)}
                className="h-8"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">热门标签</h3>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer hover:bg-blue-50"
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
