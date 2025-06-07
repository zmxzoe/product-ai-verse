
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Settings, Briefcase, Users, Heart, DollarSign, Trophy, Calendar, Star, Eye } from 'lucide-react';

const UserCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userType, setUserType] = useState('individual'); // 'individual' or 'enterprise'

  const userStats = {
    totalEarnings: 12580,
    completedTasks: 23,
    successfulReferrals: 8,
    favoriteProducts: 15,
    publishedProducts: userType === 'enterprise' ? 3 : 0,
    activeJobs: userType === 'enterprise' ? 2 : 0
  };

  const recentTasks = [
    {
      id: 1,
      title: '数据标注任务',
      product: 'ChatVision AI',
      status: '已完成',
      reward: 150,
      completedAt: '2024-06-05',
      rating: 5
    },
    {
      id: 2,
      title: '产品测试反馈',
      product: 'AutoCode Pro',
      status: '进行中',
      reward: 200,
      deadline: '2024-06-10',
      progress: 60
    },
    {
      id: 3,
      title: '语音数据收集',
      product: 'VoiceClone Studio',
      status: '已完成',
      reward: 300,
      completedAt: '2024-06-01',
      rating: 4
    }
  ];

  const referralHistory = [
    {
      id: 1,
      referredName: '张三',
      position: 'AI算法工程师',
      company: 'ChatVision AI',
      status: '已入职',
      commission: 5000,
      date: '2024-05-20'
    },
    {
      id: 2,
      referredName: '李四',
      position: '产品经理',
      company: 'AutoCode Pro',
      status: '面试中',
      commission: 3000,
      date: '2024-06-01'
    }
  ];

  const favoriteProducts = [
    {
      id: 1,
      name: 'ChatVision AI',
      category: '教育',
      likes: 1247,
      savedAt: '2024-06-01'
    },
    {
      id: 2,
      name: 'AutoCode Pro',
      category: '开发工具',
      likes: 892,
      savedAt: '2024-05-28'
    }
  ];

  const myProducts = [
    {
      id: 1,
      name: 'AI Writing Assistant',
      status: '已上线',
      views: 1523,
      likes: 234,
      applications: 12,
      publishedAt: '2024-05-15'
    },
    {
      id: 2,
      name: 'Smart Code Review',
      status: '审核中',
      views: 0,
      likes: 0,
      applications: 0,
      publishedAt: '2024-06-03'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                U
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">用户中心</h1>
                <p className="text-gray-600">管理你的任务、推荐和收藏</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant={userType === 'individual' ? 'default' : 'outline'}
                onClick={() => setUserType('individual')}
                size="sm"
              >
                个人用户
              </Button>
              <Button
                variant={userType === 'enterprise' ? 'default' : 'outline'}
                onClick={() => setUserType('enterprise')}
                size="sm"
              >
                企业用户
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">¥{userStats.totalEarnings}</div>
                  <div className="text-sm text-gray-500">总收益</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{userStats.completedTasks}</div>
                  <div className="text-sm text-gray-500">完成任务</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{userStats.successfulReferrals}</div>
                  <div className="text-sm text-gray-500">成功推荐</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{userStats.favoriteProducts}</div>
                  <div className="text-sm text-gray-500">收藏产品</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="tasks" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="tasks">我的任务</TabsTrigger>
            <TabsTrigger value="referrals">推荐记录</TabsTrigger>
            <TabsTrigger value="favorites">收藏产品</TabsTrigger>
            {userType === 'enterprise' && <TabsTrigger value="products">我的产品</TabsTrigger>}
            <TabsTrigger value="settings">账号设置</TabsTrigger>
          </TabsList>

          {/* Tasks Tab */}
          <TabsContent value="tasks">
            <Card>
              <CardHeader>
                <CardTitle>任务管理</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTasks.map((task) => (
                    <div key={task.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{task.title}</h3>
                        <p className="text-sm text-gray-500">来自 {task.product}</p>
                        
                        {task.status === '进行中' && task.progress && (
                          <div className="mt-2">
                            <div className="flex justify-between text-sm mb-1">
                              <span>进度</span>
                              <span>{task.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: `${task.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="text-right">
                        <Badge variant={task.status === '已完成' ? 'default' : 'outline'}>
                          {task.status}
                        </Badge>
                        <div className="text-lg font-semibold text-green-600 mt-1">¥{task.reward}</div>
                        {task.rating && (
                          <div className="flex items-center justify-end gap-1 mt-1">
                            {[...Array(task.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-6">
                  <Button variant="outline">查看更多任务</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Referrals Tab */}
          <TabsContent value="referrals">
            <Card>
              <CardHeader>
                <CardTitle>推荐记录</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {referralHistory.map((referral) => (
                    <div key={referral.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-gray-900">{referral.referredName}</h3>
                        <p className="text-sm text-gray-500">{referral.position} @ {referral.company}</p>
                        <p className="text-xs text-gray-400">{referral.date}</p>
                      </div>
                      
                      <div className="text-right">
                        <Badge variant={referral.status === '已入职' ? 'default' : 'outline'}>
                          {referral.status}
                        </Badge>
                        <div className="text-lg font-semibold text-green-600 mt-1">¥{referral.commission}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle>收藏的产品</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {favoriteProducts.map((product) => (
                    <div key={product.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{product.name}</h3>
                        <Badge variant="outline">{product.category}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {product.likes}
                        </div>
                        <span>收藏于 {product.savedAt}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Products Tab (Enterprise only) */}
          {userType === 'enterprise' && (
            <TabsContent value="products">
              <Card>
                <CardHeader>
                  <CardTitle>我发布的产品</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {myProducts.map((product) => (
                      <div key={product.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <p className="text-sm text-gray-500">发布于 {product.publishedAt}</p>
                          
                          <div className="flex gap-4 mt-2 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              {product.views}
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="h-4 w-4" />
                              {product.likes}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {product.applications}申请
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <Badge variant={product.status === '已上线' ? 'default' : 'outline'}>
                            {product.status}
                          </Badge>
                          <div className="mt-2 space-x-2">
                            <Button size="sm" variant="outline">编辑</Button>
                            <Button size="sm" variant="outline">查看</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center mt-6">
                    <Button>发布新产品</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )}

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>基本信息</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">用户名</label>
                    <Input placeholder="请输入用户名" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
                    <Input type="email" placeholder="请输入邮箱" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">手机号</label>
                    <Input placeholder="请输入手机号" />
                  </div>
                  <Button>保存修改</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>账户安全</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">密码</div>
                      <div className="text-sm text-gray-500">上次修改: 2024-05-15</div>
                    </div>
                    <Button variant="outline" size="sm">修改密码</Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">两步验证</div>
                      <div className="text-sm text-gray-500">增强账户安全性</div>
                    </div>
                    <Button variant="outline" size="sm">启用</Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">登录设备</div>
                      <div className="text-sm text-gray-500">管理登录设备</div>
                    </div>
                    <Button variant="outline" size="sm">查看</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserCenter;
