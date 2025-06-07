
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { Upload, Plus, X, MapPin, Users } from 'lucide-react';

const ProductUpload = () => {
  const [formData, setFormData] = useState({
    name: '',
    link: '',
    category: '',
    tags: [],
    launchDate: '',
    description: '',
    contact: '',
    jobTitle: '',
    jobDescription: '',
    skills: '',
    location: '',
    isRemote: false,
    positions: 1,
    commission: 500,
    hasJobs: false,
    hasTasks: false
  });

  const categories = ['教育', '视频', '医疗', '金融', '娱乐', '零售', '自动驾驶', '智能家居', '物联网', '大数据', '其他'];
  const [newTag, setNewTag] = useState('');

  const handleAddTag = () => {
    if (newTag && formData.tags.length < 5) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag]
      }));
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "产品提交成功",
      description: "你的产品已提交审核，审核通过后将在产品广场展示。",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">发布AI产品</h1>
          <p className="text-gray-600">将你的AI产品展示给更多用户，获得更多曝光和合作机会</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* 基本信息 */}
          <Card>
            <CardHeader>
              <CardTitle>基本信息</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">项目名称 *</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="输入你的AI产品名称"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">项目链接 *</label>
                <Input
                  type="url"
                  value={formData.link}
                  onChange={(e) => setFormData(prev => ({ ...prev, link: e.target.value }))}
                  placeholder="https://yourproduct.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">项目截图</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-500">点击上传或拖拽图片到此处</p>
                  <p className="text-sm text-gray-400 mt-2">最多3-5张，支持 JPG、PNG 格式</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">项目分类 *</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="">选择分类</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">标签（最多5个）</label>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="添加标签，如：LLM、语音识别"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                  />
                  <Button type="button" onClick={handleAddTag} disabled={formData.tags.length >= 5}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      {tag}
                      <X className="h-3 w-3 cursor-pointer" onClick={() => handleRemoveTag(tag)} />
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">上线时间</label>
                <Input
                  type="date"
                  value={formData.launchDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, launchDate: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">项目简介 *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="详细描述你的AI产品功能、特色和应用场景"
                  className="w-full p-3 border border-gray-300 rounded-md h-32"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">联系方式 *</label>
                <Input
                  value={formData.contact}
                  onChange={(e) => setFormData(prev => ({ ...prev, contact: e.target.value }))}
                  placeholder="企业微信、邮箱或其他联系方式"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* 招聘需求 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                招聘需求（可选）
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.hasJobs}
                  onChange={(e) => setFormData(prev => ({ ...prev, hasJobs: e.target.checked }))}
                  className="rounded"
                />
                <label className="text-sm font-medium">我们正在招聘人才</label>
              </div>

              {formData.hasJobs && (
                <div className="space-y-4 pl-6 border-l-2 border-blue-200">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">职位名称</label>
                    <Input
                      value={formData.jobTitle}
                      onChange={(e) => setFormData(prev => ({ ...prev, jobTitle: e.target.value }))}
                      placeholder="如：AI算法工程师、产品经理"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">职责描述</label>
                    <textarea
                      value={formData.jobDescription}
                      onChange={(e) => setFormData(prev => ({ ...prev, jobDescription: e.target.value }))}
                      placeholder="描述具体工作内容和职责"
                      className="w-full p-3 border border-gray-300 rounded-md h-24"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">技能要求</label>
                    <Input
                      value={formData.skills}
                      onChange={(e) => setFormData(prev => ({ ...prev, skills: e.target.value }))}
                      placeholder="如：Python、机器学习、TensorFlow"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">工作地点</label>
                      <Input
                        value={formData.location}
                        onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                        placeholder="如：北京、上海"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">招聘人数</label>
                      <Input
                        type="number"
                        value={formData.positions}
                        onChange={(e) => setFormData(prev => ({ ...prev, positions: parseInt(e.target.value) }))}
                        min="1"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.isRemote}
                      onChange={(e) => setFormData(prev => ({ ...prev, isRemote: e.target.checked }))}
                      className="rounded"
                    />
                    <label className="text-sm">支持远程工作</label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">推荐佣金（元）</label>
                    <Input
                      type="number"
                      value={formData.commission}
                      onChange={(e) => setFormData(prev => ({ ...prev, commission: parseInt(e.target.value) }))}
                      placeholder="成功推荐可获得的佣金"
                      min="0"
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* AI用户任务 */}
          <Card>
            <CardHeader>
              <CardTitle>AI用户任务（可选）</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <input
                  type="checkbox"
                  checked={formData.hasTasks}
                  onChange={(e) => setFormData(prev => ({ ...prev, hasTasks: e.target.checked }))}
                  className="rounded"
                />
                <label className="text-sm font-medium">发布用户任务，让用户参与产品优化</label>
              </div>

              {formData.hasTasks && (
                <div className="pl-6 border-l-2 border-green-200">
                  <p className="text-sm text-gray-600 mb-4">
                    任务类型包括：数据标注、产品测试、内容生成、用户反馈收集等
                  </p>
                  <p className="text-sm text-gray-500">
                    具体任务详情请在产品上线后在用户中心进行配置
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline">保存草稿</Button>
            <Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              提交审核
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductUpload;
