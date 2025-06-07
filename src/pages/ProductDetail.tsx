
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { Heart, Share2, Bookmark, ExternalLink, MapPin, Users, Calendar, MessageSquare, Star } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Mock product data
  const product = {
    id: '1',
    name: 'ChatVision AI',
    description: '基于GPT-4V的智能图像理解和对话系统，支持多模态交互和实时图像分析。这是一个革命性的AI产品，能够理解图像内容并进行自然语言对话，广泛应用于教育、医疗、商业等多个领域。',
    category: '教育',
    tags: ['GPT', '计算机视觉', '多模态', 'API'],
    images: ['photo-1649972904349-6e44c42644a7', 'photo-1488590528505-98d2b5aba04b', 'photo-1518770660439-4636190af475'],
    likes: 1247,
    comments: 89,
    launchDate: '2024-06-01',
    link: 'https://chatvision.ai',
    hasJobs: true,
    hasTasks: false,
    location: '北京',
    contact: 'contact@chatvision.ai',
    features: [
      '支持多种图像格式识别',
      '实时语音交互功能',
      '多语言支持',
      'API接口开放',
      '云端部署方案'
    ],
    jobInfo: {
      title: 'AI算法工程师',
      description: '负责计算机视觉算法优化和模型训练',
      skills: 'Python, TensorFlow, OpenCV',
      isRemote: true,
      positions: 2,
      commission: 5000
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "已取消点赞" : "已点赞",
      description: isLiked ? "" : "感谢你的支持！",
    });
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast({
      title: isBookmarked ? "已取消收藏" : "已收藏",
      description: isBookmarked ? "" : "产品已添加到收藏夹",
    });
  };

  const handleShare = () => {
    toast({
      title: "已复制链接",
      description: "产品链接已复制到剪贴板",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {product.launchDate}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {product.location}
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-4">{product.category}</Badge>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleLike}
                      className={isLiked ? 'text-red-500 border-red-500' : ''}
                    >
                      <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                      {product.likes}
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleBookmark}>
                      <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleShare}>
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

                <div className="flex gap-4">
                  <Button asChild className="flex items-center gap-2">
                    <a href={product.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      访问产品
                    </a>
                  </Button>
                  <Button variant="outline">
                    联系开发者
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Product Images */}
            <Card>
              <CardHeader>
                <CardTitle>产品截图</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.images.map((image, index) => (
                    <div key={index} className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/${image}?w=600&h=400&fit=crop&crop=center`}
                        alt={`${product.name} 截图 ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>产品特色</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Comments Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  用户评价 ({product.comments})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                        A
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Alice Chen</div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">非常棒的AI产品！图像识别准确率很高，API文档也很详细。</p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                        B
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Bob Wang</div>
                        <div className="flex items-center gap-1">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <Star className="h-4 w-4 text-gray-300" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">功能强大，但是响应速度还有优化空间。总体来说是个不错的产品。</p>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4">
                  查看更多评价
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Job Opportunity */}
            {product.hasJobs && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    招聘机会
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{product.jobInfo.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{product.jobInfo.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">技能要求:</span>
                        <span className="text-gray-900">{product.jobInfo.skills}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">招聘人数:</span>
                        <span className="text-gray-900">{product.jobInfo.positions}人</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">推荐佣金:</span>
                        <span className="text-green-600 font-medium">¥{product.jobInfo.commission}</span>
                      </div>
                      {product.jobInfo.isRemote && (
                        <Badge variant="outline" className="text-xs">支持远程</Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button className="w-full">
                      立即申请
                    </Button>
                    <Button variant="outline" className="w-full">
                      推荐朋友
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>联系方式</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">邮箱:</span>
                    <span className="text-gray-900">{product.contact}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">官网:</span>
                    <a href={product.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      {product.link}
                    </a>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4">
                  发送消息
                </Button>
              </CardContent>
            </Card>

            {/* Related Products */}
            <Card>
              <CardHeader>
                <CardTitle>相关产品</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                    <div className="flex-1">
                      <div className="font-medium text-sm text-gray-900">AI Product {item}</div>
                      <div className="text-xs text-gray-500">相似度 95%</div>
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" size="sm" className="w-full">
                  查看更多
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
