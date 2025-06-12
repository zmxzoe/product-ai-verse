
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
    { id: '内容创作', name: '内容创作' },
    { id: '办公提效', name: '办公提效' },
    { id: '编程开发', name: '编程开发' },
    { id: '设计创意', name: '设计创意' },
    { id: '营销推广', name: '营销推广' },
    { id: '数据分析', name: '数据分析' },
    { id: '客服支持', name: '客服支持' },
    { id: '学习教育', name: '学习教育' },
    { id: '语言翻译', name: '语言翻译' },
    { id: '音视频', name: '音视频' },
    { id: '电商运营', name: '电商运营' },
    { id: '项目管理', name: '项目管理' },
    { id: '财务管理', name: '财务管理' },
    { id: '人力资源', name: '人力资源' },
    { id: '健康医疗', name: '健康医疗' }
  ];

  const scenarioTags = [
    // 写作相关
    '文章写作', '文案创作', '邮件助手', '学术写作', '技术文档',
    // 设计相关
    'Logo设计', '海报制作', '界面设计', '插画绘制', '图标制作',
    // 开发相关
    '代码生成', '代码审查', '调试助手', '测试自动化', 'API开发',
    // 营销相关
    'SEO优化', '广告文案', '社媒运营', '邮件营销', '用户分析',
    // 数据相关
    '数据可视化', '报表生成', '趋势分析', '用户画像', '业务洞察',
    // 效率工具
    '会议记录', '日程管理', '任务分配', '团队协作', '自动化流程',
    // 语言相关
    '多语言翻译', '语法检查', '语音识别', '语音合成', '口语练习',
    // 创意相关
    '创意灵感', '头脑风暴', '产品原型', '用户体验', '交互设计'
  ];

  return (
    <div className="bg-background border-b border-border py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">按应用场景分类</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange(category.id)}
                className="h-9 text-sm font-medium"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">热门应用标签</h3>
          <div className="flex flex-wrap gap-2">
            {scenarioTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer hover:bg-accent text-sm py-2 px-3 font-medium transition-colors"
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
