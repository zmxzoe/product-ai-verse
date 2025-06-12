
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Sparkles, MessageCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface AISearchBarProps {
  onSearch: (query: string) => void;
}

const AISearchBar = ({ onSearch }: AISearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isAIMode, setIsAIMode] = useState(false);

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const quickPrompts = [
    '帮我找一个AI写作工具',
    '推荐最佳图像生成AI',
    '我需要代码生成工具',
    '寻找视频编辑AI',
    '推荐数据分析工具'
  ];

  return (
    <div className="bg-gradient-to-br from-background via-muted/30 to-background py-8 border-b">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* AI Search Toggle */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex bg-background border border-border rounded-full p-1">
            <Button
              variant={!isAIMode ? "default" : "ghost"}
              size="sm"
              onClick={() => setIsAIMode(false)}
              className="rounded-full px-6"
            >
              <Search className="h-4 w-4 mr-2" />
              普通搜索
            </Button>
            <Button
              variant={isAIMode ? "default" : "ghost"}
              size="sm"
              onClick={() => setIsAIMode(true)}
              className="rounded-full px-6"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              AI智能搜索
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
            {isAIMode ? (
              <MessageCircle className="h-5 w-5" />
            ) : (
              <Search className="h-5 w-5" />
            )}
          </div>
          <Input
            type="text"
            placeholder={
              isAIMode 
                ? "告诉我你想要什么样的AI工具，比如：我需要一个能帮我写代码的AI助手..."
                : "搜索AI产品、工具或技术..."
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full pl-12 pr-24 py-4 text-lg border-2 border-border rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary bg-background"
          />
          <Button
            onClick={handleSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-xl"
          >
            {isAIMode ? (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                AI搜索
              </>
            ) : (
              <>
                <Search className="h-4 w-4 mr-2" />
                搜索
              </>
            )}
          </Button>
        </div>

        {/* AI Mode Features */}
        {isAIMode && (
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">AI智能推荐已启用</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              描述你的需求，AI会为你精准推荐最适合的工具
            </p>
            
            {/* Quick Prompts */}
            <div className="flex flex-wrap justify-center gap-2">
              {quickPrompts.map((prompt, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="cursor-pointer hover:bg-accent text-xs py-1 px-3"
                  onClick={() => setQuery(prompt)}
                >
                  {prompt}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AISearchBar;
