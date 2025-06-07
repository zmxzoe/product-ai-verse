
import React from 'react';
import { Button } from '@/components/ui/button';

interface SortingTabsProps {
  selectedSort: string;
  onSortChange: (sort: string) => void;
}

const sortOptions = [
  { id: 'latest', name: '最新上线', description: '按发布时间排序' },
  { id: 'popular', name: '最受欢迎', description: '按点赞数排序' },
  { id: 'trending', name: '今日热门', description: '今日最热产品' },
  { id: 'hiring', name: '招聘中', description: '有招聘需求的产品' }
];

const SortingTabs = ({ selectedSort, onSortChange }: SortingTabsProps) => {
  return (
    <div className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">发现AI产品</h2>
          <div className="text-sm text-gray-500">
            共找到 <span className="font-medium text-gray-900">1,247</span> 个AI产品
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {sortOptions.map((option) => (
            <Button
              key={option.id}
              variant={selectedSort === option.id ? "default" : "outline"}
              onClick={() => onSortChange(option.id)}
              className="flex flex-col items-start p-4 h-auto"
            >
              <span className="font-medium">{option.name}</span>
              <span className="text-xs opacity-75">{option.description}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortingTabs;
