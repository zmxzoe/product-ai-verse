
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { User, Settings, Heart, Briefcase, Award, MessageCircle, Calendar, TrendingUp, Star } from 'lucide-react';

const UserCenter = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: '概览', icon: TrendingUp },
    { id: 'tasks', name: '我的任务', icon: Award },
    { id: 'referrals', name: '推荐记录', icon: Briefcase },
    { id: 'favorites', name: '收藏产品', icon: Heart },
    { id: 'settings', name: '账号设置', icon: Settings }
  ];

  const userStats = {
    completedTasks: 24,
    earnedPoints: 1580,
    successfulReferrals: 3,
    earnedCommission: 2300,
    favoriteProducts: 12,
    level: 'VIP用户'
  };

  const recentTasks = [
    {
      id: 1,
      title: '图像标注任务',
      product: 'ChatVision AI',
      points: 50,
      status: 'completed',
      completedAt: '2024-06-01'
    },
    {
      id: 2,
      title: '产品测试反馈',
      product: 'AutoCode Pro',
      points: 100,
      status: 'in-progress',
      deadline: '2024-06-05'
    },
    {
      id: 3,
      title: '语音数据采集',
      product: 'VoiceClone Studio',
      points: 75,
      status: 'available',
      estimatedTime: '30分钟'
    }
  ];

  const referrals = [
    {
      id: 1,
      candidateName: '张三',
      position: 'AI算法工程师',
      company: 'ChatVision AI',
      status: 'hired',
      commission: 1000,
      appliedAt: '2024-05-15',
      hiredAt: '2024-05-28'
    },
    {
      id: 2,
      candidateName: '李四',
      position: '前端工程师',
      company: 'AutoCode Pro',
      status: 'interviewing',
      commission: 800,
      appliedAt: '2024-05-20'
    },
    {
      id: 3,
      candidateName: '王五',
      position: '产品经理',
      company: 'VoiceClone Studio',
      status: 'pending',
      commission: 1500,
      appliedAt: '2024-05-25'
    }
  ];

  const favoriteProducts = [
    {
      id: 1,
      name: 'ChatVision AI',
      category: '教育',
      rating: 4.9,
      savedAt: '2024-06-01'
    },
    {
      id: 2,
      name: 'AutoCode Pro',
      category: '开发工具',
      rating: 4.7,
      savedAt: '2024-05-28'
    },
    {
      id: 3,
      name: 'VoiceClone Studio',
      category: '娱乐',
      rating: 4.8,
      savedAt: '2024-05-25'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
      case 'hired':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
      case 'interviewing':
        return 'bg-blue-100 text-blue-800';
      case 'available':
      case 'pending':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return '已完成';
      case 'in-progress':
        return '进行中';
      case 'available':
        return '可领取';
      case 'hired':
        return '已入职';
      case 'interviewing':
        return '面试中';
      case 'pending':
        return '待处理';
      default:
        return status;
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* User Info */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
              <p className="text-gray-600">john.doe@example.com</p>
              <Badge className="mt-2">{userStats.level}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{userStats.completedTasks}</div>
            <div className="text-sm text-gray-500">完成任务</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{userStats.earnedPoints}</div>
            <div className="text-sm text-gray-500">获得积分</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Briefcase className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{userStats.successfulReferrals}</div>
            <div className="text-sm text-gray-500">成功推荐</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">¥{userStats.earnedCommission}</div>
            <div className="text-sm text-gray-500">获得佣金</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>最近活动</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <Award className="h-5 w-5 text-green-600" />
              <div className="flex-1">
                <p className="font-medium">完成了图像标注任务</p>
                <p className="text-sm text-gray-500">获得 50 积分 • ChatVision AI</p>
              </div>
              <span className="text-sm text-gray-400">2小时前</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <Briefcase className="h-5 w-5 text-blue-600" />
              <div className="flex-1">
                <p className="font-medium">推荐的候选人进入面试环节</p>
                <p className="text-sm text-gray-500">李四 • AutoCode Pro</p>
              </div>
              <span className="text-sm text-gray-400">1天前</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderTasks = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">我的任务</h2>
        <Button>浏览更多任务</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentTasks.map((task) => (
          <Card key={task.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-gray-900">{task.title}</h3>
                <Badge className={getStatusColor(task.status)}>
                  {getStatusText(task.status)}
                </Badge>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{task.product}</p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>{task.points} 积分</span>
                </div>
                
                {task.status === 'completed' && (
                  <span className="text-gray-500">完成于 {task.completedAt}</span>
                )}
                {task.status === 'in-progress' && (
                  <span className="text-red-500">截止 {task.deadline}</span>
                )}
                {task.status === 'available' && (
                  <span className="text-blue-500">预计 {task.estimatedTime}</span>
                )}
              </div>
              
              {task.status === 'available' && (
                <Button className="w-full mt-4" size="sm">
                  领取任务
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderReferrals = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">推荐记录</h2>
        <Button>推荐新朋友</Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">候选人</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">职位</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">公司</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">佣金</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">申请时间</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {referrals.map((referral) => (
                  <tr key={referral.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{referral.candidateName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {referral.position}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {referral.company}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge className={getStatusColor(referral.status)}>
                        {getStatusText(referral.status)}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-green-600 font-medium">¥{referral.commission}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {referral.appliedAt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderFavorites = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">收藏的产品</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favoriteProducts.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-gray-900">{product.name}</h3>
                <Button variant="ghost" size="sm">
                  <Heart className="h-4 w-4 fill-current text-red-500" />
                </Button>
              </div>
              
              <Badge variant="outline" className="mb-3">
                {product.category}
              </Badge>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span>{product.rating}</span>
                </div>
                <span className="text-gray-500">收藏于 {product.savedAt}</span>
              </div>
              
              <Button className="w-full mt-4" size="sm" variant="outline">
                查看详情
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">账号设置</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>个人信息</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">用户名</label>
              <Input defaultValue="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
              <Input defaultValue="john.doe@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">手机号</label>
              <Input defaultValue="+86 138****8888" />
            </div>
            <Button className="w-full">保存更改</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>账号绑定</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">微信</p>
                <p className="text-sm text-gray-500">已绑定</p>
              </div>
              <Button variant="outline" size="sm">解绑</Button>
            </div>
            
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">GitHub</p>
                <p className="text-sm text-gray-500">未绑定</p>
              </div>
              <Button variant="outline" size="sm">绑定</Button>
            </div>
            
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">钱包地址</p>
                <p className="text-sm text-gray-500">0x1234...abcd</p>
              </div>
              <Button variant="outline" size="sm">修改</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'tasks':
        return renderTasks();
      case 'referrals':
        return renderReferrals();
      case 'favorites':
        return renderFavorites();
      case 'settings':
        return renderSettings();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const IconComponent = tab.icon;
                    return (
                      <Button
                        key={tab.id}
                        variant={activeTab === tab.id ? "default" : "ghost"}
                        onClick={() => setActiveTab(tab.id)}
                        className="w-full justify-start"
                      >
                        <IconComponent className="h-4 w-4 mr-2" />
                        {tab.name}
                      </Button>
                    );
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCenter;
