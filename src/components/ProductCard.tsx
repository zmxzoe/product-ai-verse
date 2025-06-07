
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Share, Bookmark, MessageCircle, ExternalLink, MapPin, Users } from 'lucide-react';

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
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-200">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
          </div>
          {product.images.length > 0 && (
            <div className="ml-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
              <img 
                src={`https://images.unsplash.com/${product.images[0]}?w=64&h=64&fit=crop&crop=center`}
                alt={product.name}
                className="w-12 h-12 rounded-md object-cover"
              />
            </div>
          )}
        </div>

        {/* Category and Tags */}
        <div className="mb-4">
          <Badge variant="secondary" className="mb-2">
            {product.category}
          </Badge>
          <div className="flex flex-wrap gap-1">
            {product.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {product.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{product.tags.length - 3}
              </Badge>
            )}
          </div>
        </div>

        {/* Quick Info */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          <span>{product.launchDate}</span>
          {product.location && (
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>{product.location}</span>
            </div>
          )}
        </div>

        {/* Special Features */}
        {(product.hasJobs || product.hasTasks) && (
          <div className="flex gap-2 mb-4">
            {product.hasJobs && (
              <Badge className="bg-green-100 text-green-800 text-xs">
                <Users className="h-3 w-3 mr-1" />
                招聘中
              </Badge>
            )}
            {product.hasTasks && (
              <Badge className="bg-orange-100 text-orange-800 text-xs">
                任务可领取
              </Badge>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            <span>{product.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            <span>{product.comments}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onLike(product.id)}
            className="text-gray-500 hover:text-red-500"
          >
            <Star className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onBookmark(product.id)}
            className="text-gray-500 hover:text-blue-500"
          >
            <Bookmark className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onShare(product.id)}
            className="text-gray-500 hover:text-green-500"
          >
            <Share className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-500 hover:text-blue-600"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
