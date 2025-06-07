
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { Star, Share, Bookmark, MessageCircle, ExternalLink, MapPin, Users, Calendar, Heart, Award } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  // Mock product data - in real app, fetch based on id
  const product = {
    id: '1',
    name: 'ChatVision AI',
    description: '基于GPT-4V的智能图像理解和对话系统，支持多模态交互和实时图像分析。我们的系统能够理解图像内容，进行智能对话，为用户提供准确的图像分析结果。',
    category: '教育',
    tags: ['GPT', '计算机视觉', '多模态', 'API'],
    images: ['photo-1649972904349-6e44c42644a7', 'photo-1488590528505-98d2b5aba04b', 'photo-1518770660439-4636190af475'],
    likes: 1247,
    comments: 89,
    launchDate: '2024-06-01',
    link: 'https://chatvision.ai',
    hasJobs: true,
    hasTasks: true,
    location: '北京',
    contact: 'contact@chatvision.ai',
    jobTitle: 'AI算法工程师',
    jobDescription: '负责多模态AI模型的研发和优化，参与产品核心算法设计',
    skills: 'Python, PyTorch, 计算机视觉, NLP',
    commission: 500
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
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "已复制链接",
      description: "产品链接已复制到剪贴板",
    });
  };

  const handleApplyJob = () => {
    toast({
      title: "申请成功",
      description: "你的申请已提交，企业方将尽快与你联系",
    });
  };

  const handleRecommendFriend = () => {
    toast({
      title: "推荐成功",
      description: "推荐信息已提交，成功入职可获得￥500佣金",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 主要内容 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 产品头部 */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                    <p className="text-gray-600 text-lg">{product.description}</p>
                  </div>
                  <div className="ml-6 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <img 
                      src={`https://images.unsplash.com/${product.images[0]}?w=80&h=80&fit=crop&crop=center`}
                      alt={product.name}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                  </div>
                </div>

                {/* 标签和分类 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="text-sm">
                    {product.category}
                  </Badge>
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* 统计信息 */}
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>上线时间：{product.launchDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{product.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>{product.likes} 点赞</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{product.comments} 评论</span>
                  </div>
                </div>

                {/* 操作按钮 */}
                <div className="flex items-center gap-4">
                  <Button
                    onClick={handleLike}
                    variant={isLiked ? "default" : "outline"}
                    className="flex items-center gap-2"
                  >
                    <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                    {isLiked ? '已点赞' : '点赞'}
                  </Button>
                  
                  <Button
                    onClick={handleBookmark}
                    variant={isBookmarked ? "default" : "outline"}
                    className="flex items-center gap-2"
                  >
                    <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
                    {isBookmarked ? '已收藏' : '收藏'}
                  </Button>
                  
                  <Button onClick={handleShare} variant="outline" className="flex items-center gap-2">
                    <Share className="h-4 w-4" />
                    分享
                  </Button>
                  
                  <Button 
                    onClick={() => window.open(product.link, '_blank')}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  >
                    <ExternalLink className="h-4 w-4" />
                    访问产品
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 产品截图 */}
            <Card>
              <CardHeader>
                <CardTitle>产品截图</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {product.images.map((image, index) => (
                    <div key={index} className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/${image}?w=400&h=300&fit=crop&crop=center`}
                        alt={`${product.name} 截图 ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 评论区 */}
            <Card>
              <CardHeader>
                <CardTitle>用户评论</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-blue-600">张</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">张三</span>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">
                          非常不错的AI产品，界面设计很棒，功能也很实用。推荐给大家！
                        </p>
                        <span className="text-xs text-gray-400">2小时前</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Button variant="outline">加载更多评论</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 侧边栏 */}
          <div className="space-y-6">
            {/* 招聘信息 */}
            {product.hasJobs && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-green-600" />
                    正在招聘
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{product.jobTitle}</h4>
                    <p className="text-sm text-gray-600 mb-3">{product.jobDescription}</p>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium">技能要求：</span>
                        <span className="text-gray-600">{product.skills}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4 text-yellow-500" />
                        <span className="font-medium">推荐奖励：</span>
                        <span className="text-green-600 font-medium">￥{product.commission}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button onClick={handleApplyJob} className="w-full">
                      立即申请
                    </Button>
                    <Button onClick={handleRecommendFriend} variant="outline" className="w-full">
                      推荐朋友
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* 任务信息 */}
            {product.hasTasks && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-orange-600" />
                    可领取任务
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    参与产品测试和数据标注，获得积分奖励
                  </p>
                  <Button variant="outline" className="w-full">
                    查看任务
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* 联系信息 */}
            <Card>
              <CardHeader>
                <CardTitle>联系我们</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  有疑问或合作意向？联系产品团队
                </p>
                <Button variant="outline" className="w-full">
                  {product.contact}
                </Button>
              </CardContent>
            </Card>

            {/* 相关产品 */}
            <Card>
              <CardHeader>
                <CardTitle>相关产品</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded flex items-center justify-center">
                      <span className="text-xs font-medium">AI</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">相关产品 {i}</p>
                      <p className="text-xs text-gray-500">AI工具</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
