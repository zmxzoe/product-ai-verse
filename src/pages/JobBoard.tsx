
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Users, Award, Calendar, Building, Clock } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const JobBoard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', name: '全部职位' },
    { id: 'remote', name: '远程工作' },
    { id: 'fulltime', name: '全职' },
    { id: 'parttime', name: '兼职' },
    { id: 'intern', name: '实习' },
    { id: 'high-reward', name: '高佣金' }
  ];

  const jobs = [
    {
      id: 1,
      title: 'AI算法工程师',
      company: 'ChatVision AI',
      location: '北京',
      isRemote: true,
      type: '全职',
      experience: '3-5年',
      salary: '25K-40K',
      commission: 1000,
      description: '负责多模态AI模型的研发和优化，参与产品核心算法设计',
      requirements: ['Python', 'PyTorch', '计算机视觉', 'NLP', '机器学习'],
      posted: '2024-06-01',
      applicants: 23,
      companyLogo: 'photo-1649972904349-6e44c42644a7',
      isUrgent: true,
      benefits: ['股权激励', '弹性工作', '技术津贴']
    },
    {
      id: 2,
      title: '前端开发工程师',
      company: 'AutoCode Pro',
      location: '上海',
      isRemote: false,
      type: '全职',
      experience: '2-4年',
      salary: '20K-35K',
      commission: 800,
      description: '负责AI开发平台前端界面设计和开发，优化用户体验',
      requirements: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      posted: '2024-05-30',
      applicants: 45,
      companyLogo: 'photo-1488590528505-98d2b5aba04b',
      isUrgent: false,
      benefits: ['年终奖', '带薪年假', '技能培训']
    },
    {
      id: 3,
      title: '产品经理',
      company: 'VoiceClone Studio',
      location: '深圳',
      isRemote: true,
      type: '全职',
      experience: '3-6年',
      salary: '30K-50K',
      commission: 1500,
      description: '负责AI语音产品规划和设计，协调技术团队实现产品目标',
      requirements: ['产品规划', '用户研究', 'AI产品经验', '项目管理'],
      posted: '2024-05-28',
      applicants: 18,
      companyLogo: 'photo-1518770660439-4636190af475',
      isUrgent: true,
      benefits: ['期权激励', '远程办公', '健康保险']
    },
    {
      id: 4,
      title: '数据科学家',
      company: 'MedAI Diagnosis',
      location: '杭州',
      isRemote: false,
      type: '全职',
      experience: '2-5年',
      salary: '22K-38K',
      commission: 900,
      description: '负责医疗数据分析和建模，开发AI诊断算法',
      requirements: ['Python', 'SQL', '统计学', '机器学习', '医疗背景优先'],
      posted: '2024-05-25',
      applicants: 12,
      companyLogo: 'photo-1461749280684-dccba630e2f6',
      isUrgent: false,
      benefits: ['医疗保险', '培训机会', '年度体检']
    },
    {
      id: 5,
      title: 'UI/UX设计师',
      company: 'FinBot Advisor',
      location: '广州',
      isRemote: true,
      type: '兼职',
      experience: '1-3年',
      salary: '150-300',
      commission: 500,
      description: '设计金融AI产品界面，提升用户体验和视觉效果',
      requirements: ['Figma', 'Sketch', '界面设计', '交互设计', 'AI产品经验'],
      posted: '2024-05-22',
      applicants: 34,
      companyLogo: 'photo-1486312338219-ce68d2c6f44d',
      isUrgent: false,
      benefits: ['灵活时间', '项目奖金', '作品展示机会']
    },
    {
      id: 6,
      title: 'DevOps工程师',
      company: 'SmartHome Hub',
      location: '成都',
      isRemote: true,
      type: '全职',
      experience: '2-4年',
      salary: '18K-30K',
      commission: 700,
      description: '负责AI物联网平台的部署、运维和性能优化',
      requirements: ['Docker', 'Kubernetes', 'AWS/阿里云', 'CI/CD', 'Linux'],
      posted: '2024-05-20',
      applicants: 8,
      companyLogo: 'photo-1581091226825-a6a2a5aee158',
      isUrgent: false,
      benefits: ['技术成长', '团队氛围', '创业股权']
    }
  ];

  const handleApply = (jobId) => {
    toast({
      title: "申请成功",
      description: "你的申请已提交，企业方将尽快与你联系",
    });
  };

  const handleRecommend = (jobId) => {
    toast({
      title: "推荐成功",
      description: "推荐信息已提交，成功入职可获得佣金奖励",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI 招聘广场</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              发现最新AI岗位机会，推荐朋友获得丰厚佣金奖励
            </p>
          </div>

          {/* Search and Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="搜索职位、公司或技能..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 text-lg"
                />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{jobs.length}</div>
                  <div className="text-sm text-gray-500">热招职位</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    ¥{Math.round(jobs.reduce((sum, job) => sum + job.commission, 0) / jobs.length)}
                  </div>
                  <div className="text-sm text-gray-500">平均佣金</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {jobs.reduce((sum, job) => sum + job.applicants, 0)}
                  </div>
                  <div className="text-sm text-gray-500">总申请数</div>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter.id)}
                size="sm"
              >
                {filter.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Job List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative">
              {job.isUrgent && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
                    急招
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <img 
                      src={`https://images.unsplash.com/${job.companyLogo}?w=48&h=48&fit=crop&crop=center`}
                      alt={job.company}
                      className="w-10 h-10 rounded-md object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{job.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Building className="h-4 w-4" />
                      <span>{job.company}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Job Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span>{job.location}</span>
                    {job.isRemote && (
                      <Badge variant="outline" className="text-green-600 border-green-600 text-xs">
                        远程
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span>{job.type}</span>
                    </div>
                    <span className="text-gray-400">|</span>
                    <span>{job.experience}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="font-medium text-green-600">
                      {job.type === '兼职' ? `¥${job.salary}/天` : `¥${job.salary}/月`}
                    </div>
                    <div className="flex items-center gap-1 text-orange-600">
                      <Award className="h-4 w-4" />
                      <span className="font-medium">佣金 ¥{job.commission}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-2">
                  {job.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1">
                  {job.requirements.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {job.requirements.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{job.requirements.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Benefits */}
                <div className="space-y-2">
                  <div className="text-xs text-gray-500">福利待遇:</div>
                  <div className="flex flex-wrap gap-1">
                    {job.benefits.map((benefit) => (
                      <Badge key={benefit} variant="secondary" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{job.posted}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>{job.applicants} 人申请</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button 
                    onClick={() => handleApply(job.id)}
                    className="flex-1" 
                    size="sm"
                  >
                    立即申请
                  </Button>
                  <Button 
                    onClick={() => handleRecommend(job.id)}
                    variant="outline" 
                    size="sm"
                  >
                    推荐朋友
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            查看更多职位
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobBoard;
