
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Share, Bookmark, ExternalLink } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  images: string[];
  likes: number;
  comments: number;
  launchDate: string;
  link: string;
  hasJobs: boolean;
  hasTasks: boolean;
  location?: string;
}

interface ProductCardProps {
  product: Product;
  onLike: (id: string) => void;
  onBookmark: (id: string) => void;
  onShare: (id: string) => void;
}

const ProductCard = ({ product, onLike, onBookmark, onShare }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleActionClick = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation();
    action();
  };

  return (
    <Card 
      className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-200 cursor-pointer"
      onClick={handleCardClick}
    >
      <CardContent className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
          </div>
          {product.images.length > 0 && (
            <div className="ml-3 w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
              <img 
                src={`https://images.unsplash.com/${product.images[0]}?w=48&h=48&fit=crop&crop=center`}
                alt={product.name}
                className="w-8 h-8 rounded object-cover"
              />
            </div>
          )}
        </div>

        {/* Category and Top Tags */}
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
          {product.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Special Features - Only show if present */}
        {(product.hasJobs || product.hasTasks) && (
          <div className="flex gap-2">
            {product.hasJobs && (
              <Badge className="bg-green-100 text-green-800 text-xs">
                招聘中
              </Badge>
            )}
            {product.hasTasks && (
              <Badge className="bg-orange-100 text-orange-800 text-xs">
                任务
              </Badge>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
        {/* Simplified Stats */}
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3" />
            <span>{product.likes}</span>
          </div>
        </div>

        {/* Simplified Actions */}
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => handleActionClick(e, () => onLike(product.id))}
            className="text-gray-400 hover:text-red-500 h-8 w-8 p-0"
          >
            <Star className="h-3 w-3" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => handleActionClick(e, () => onBookmark(product.id))}
            className="text-gray-400 hover:text-blue-500 h-8 w-8 p-0"
          >
            <Bookmark className="h-3 w-3" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => handleActionClick(e, () => onShare(product.id))}
            className="text-gray-400 hover:text-green-500 h-8 w-8 p-0"
          >
            <Share className="h-3 w-3" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => handleActionClick(e, () => window.open(product.link, '_blank'))}
            className="text-gray-400 hover:text-blue-600 h-8 w-8 p-0"
          >
            <ExternalLink className="h-3 w-3" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
