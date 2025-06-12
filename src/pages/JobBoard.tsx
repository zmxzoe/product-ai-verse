import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import AISearchBar from '@/components/AISearchBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MapPin, DollarSign, Users, Clock, Briefcase } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const JobBoard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const locations = [
    { id: 'all', name: '全部地区' },
    { id: 'beijing', name: '北京' },
    { id: 'shanghai', name: '上海' },
    { id: 'shenzhen', name: '深圳' },
    { id: 'hangzhou', name: '杭州' },
    { id: 'guangzhou', name: '广州' },
    { id: 'remote', name: '远程工作' }
  ];

  const jobTypes = [
    { id: 'all', name: '全部类型' },
    { id: 'fulltime', name: '全职' },
    { id: 'parttime', name: '兼职' },
    { id: 'contract', name: '合同工' },
    { id: 'intern', name: '实习生' }
  ];

  const jobs = [
    {
      id: 1,
      title: 'AI算法工程师',
      company: 'ChatVision AI',
      companyLogo: 'photo-1649972904349-6e44c42644a7',
      location: '北京',
      type: '全职',
      isRemote: true,
      salary: '25-40K',
      experience: '3-5年',
      education: '本科及以上',
      skills: ['Python', 'TensorFlow', 'PyTorch', '计算机视觉'],
      description: '负责计算机视觉算法研发，包括图像识别、目标检测等核心算法的设计与优化',
      requirements: [
        '计算机、人工智能相关专业本科及以上学历',
        '3年以上深度学习算法开发经验',
        '熟练掌握Python、TensorFlow或PyTorch',
        '具备良好的数学基础和算法功底'
      ],
      benefits: ['五险一金', '年终奖', '股票期权', '弹性工作'],
      commission: 5000,
      posted: '2天前',
      applications: 23
    },
    {
      id: 2,
      title: '产品经理',
      company: 'AutoCode Pro',
      companyLogo: 'photo-1488590528505-98d2b5aba04b',
      location: '上海',
      type: '全职',
      isRemote: false,
      salary: '20-35K',
      experience: '2-4年',
      education: '本科及以上',
      skills: ['产品设计', '用户体验', 'Axure', 'Figma'],
      description: '负责AI产品的规划设计，与技术团队协作推进产品迭代',
      requirements: [
        '2年以上互联网产品经验',
        '对AI技术有一定了解',
        '具备优秀的逻辑思维和沟通能力',
        '熟练使用产品设计工具'
      ],
      benefits: ['五险一金', '带薪年假', '团建活动', '培训机会'],
      commission: 3000,
      posted: '1天前',
      applications: 15
    },
    {
      id: 3,
      title: '前端开发工程师',
      company: 'VoiceClone Studio',
      companyLogo: 'photo-1518770660439-4636190af475',
      location: '深圳',
      type: '全职',
      isRemote: true,
      salary: '18-30K',
      experience: '2-5年',
      education: '大专及以上',
      skills: ['React', 'Vue.js', 'TypeScript', 'Node.js'],
      description: '负责AI产品前端界面开发，打造优秀的用户体验',
      requirements: [
        '2年以上前端开发经验',
        '熟练掌握React或Vue.js框架',
        '具备良好的代码规范和优化意识',
        '有AI产品开发经验优先'
      ],
      benefits: ['六险一金', '餐补', '交通补贴', '健身房'],
      commission: 2500,
      posted: '3天前',
      applications: 31
    },
    {
      id: 4,
      title: 'UI/UX设计师',
      company: 'MedAI Diagnosis',
      companyLogo: 'photo-1461749280684-dccba630e2f6',
      location: '杭州',
      type: '全职',
      isRemote: false,
      salary: '15-25K',
      experience: '1-3年',
      education: '本科及以上',
      skills: ['Figma', 'Sketch', 'Principle', 'After Effects'],
      description: '负责医疗AI产品的界面设计，提升产品的易用性和美观度',
      requirements: [
        '设计相关专业背景',
        '1年以上UI/UX设计经验',
        '熟练使用主流设计工具',
        '对医疗行业有一定了解优先'
      ],
      benefits: ['五险一金', '下午茶', '生日福利', '年度体检'],
      commission: 2000,
      posted: '5天前',
      applications: 18
    },
    {
      id: 5,
      title: 'AI训练师（兼职）',
      company: 'FinBot Advisor',
      companyLogo: 'photo-1486312338219-ce68d2c6f44d',
      location: '广州',
      type: '兼职',
      isRemote: true,
      salary: '200-300元/天',
      experience: '不限',
      education: '本科及以上',
      skills: ['数据标注', '模型训练', '金融知识', 'Python'],
      description: '负责AI模型的数据标注和训练指导工作，灵活的工作时间',
      requirements: [
        '金融、经济相关专业背景',
        '对AI技术有基本了解',
        '具备数据分析能力',
        '时间灵活，可兼职'
      ],
      benefits: ['灵活工作', '按日结算', '远程办公', '技能提升'],
      commission: 500,
      posted: '1周前',
      applications: 42
    },
    {
      id: 6,
      title: 'DevOps工程师',
      company: 'SmartHome Hub',
      companyLogo: 'photo-1581091226825-a6a2a5aee158',
      location: '成都',
      type: '全职',
      isRemote: false,
      salary: '22-35K',
      experience: '3-6年',
      education: '本科及以上',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Jenkins'],
      description: '负责AI产品的部署运维，确保系统稳定性和可扩展性',
      requirements: [
        '3年以上DevOps相关经验',
        '熟悉容器化和微服务架构',
        '有云平台使用经验',
        '具备自动化运维思维'
      ],
      benefits: ['六险一金', '期权激励', '技术培训', '团队建设'],
      commission: 4000,
      posted: '4天前',
      applications: 27
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = selectedLocation === 'all' || 
                           (selectedLocation === 'remote' && job.isRemote) ||
                           job.location === locations.find(loc => loc.id === selectedLocation)?.name;
    const matchesType = selectedType === 'all' || job.type === jobTypes.find(type => type.id === selectedType)?.name;
    return matchesSearch && matchesLocation && matchesType;
  });

  const handleAISearch = (query: string) => {
    setSearchTerm(query);
    toast({
      title: "AI搜索启动",
      description: `正在为您智能推荐职位: ${query}`,
    });
  };

  const quickPrompts = [
    '推荐AI算法工程师职位',
    '找远程工作机会',
    '我想找产品经理岗位',
    '推荐前端开发职位',
    '寻找兼职AI训练师'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      <AISearchBar 
        onSearch={handleAISearch}
        placeholder="搜索职位、公司或技能..."
        aiPlaceholder="告诉我你想找什么工作，比如：我想找一个AI相关的远程工作..."
        quickPrompts={quickPrompts}
        context="职位推荐"
      />
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI招聘广场</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              发现最新的AI行业工作机会，推荐朋友获得丰厚佣金
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm"
            >
              {locations.map(location => (
                <option key={location.id} value={location.id}>{location.name}</option>
              ))}
            </select>
            
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm"
            >
              {jobTypes.map(type => (
                <option key={type.id} value={type.id}>{type.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            职位列表 <span className="text-lg font-normal text-gray-500">({filteredJobs.length})</span>
          </h2>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm">最新发布</Button>
            <Button variant="outline" size="sm">薪资排序</Button>
            <Button variant="outline" size="sm">推荐佣金</Button>
          </div>
        </div>

        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Job Info */}
                  <div className="lg:col-span-3">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={`https://images.unsplash.com/${job.companyLogo}?w=48&h=48&fit=crop&crop=center`}
                          alt={job.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                              {job.title}
                            </h3>
                            <p className="text-gray-600">{job.company}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-semibold text-green-600">{job.salary}</div>
                            <div className="text-sm text-gray-500">推荐奖励 ¥{job.commission}</div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                            {job.isRemote && <Badge variant="outline" className="ml-1 text-xs">远程</Badge>}
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {job.experience}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {job.posted}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {job.applications}人申请
                          </div>
                        </div>

                        <p className="text-gray-600 mb-3 line-clamp-2">{job.description}</p>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {job.skills.slice(0, 4).map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {job.skills.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{job.skills.length - 4}
                            </Badge>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {job.benefits.slice(0, 3).map((benefit) => (
                            <span key={benefit} className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="lg:col-span-1 flex flex-col gap-3">
                    <Button className="w-full">
                      立即申请
                    </Button>
                    <Button variant="outline" className="w-full">
                      推荐朋友
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full">
                      查看详情
                    </Button>
                    
                    <div className="text-center mt-2">
                      <div className="text-sm text-gray-500">成功推荐奖励</div>
                      <div className="text-lg font-semibold text-green-600">¥{job.commission}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            加载更多职位
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobBoard;
