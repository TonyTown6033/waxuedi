import React from 'react';
import { Users, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

const StatCard: React.FC<{
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  color: string;
}> = ({ title, value, change, icon: Icon, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
      </div>
      <div className={`p-3 rounded-lg ${color} bg-opacity-10`}>
        <Icon className={color.replace('bg-', 'text-')} size={24} />
      </div>
    </div>
    <div className="mt-4 flex items-center text-sm">
      <span className="text-emerald-500 font-medium">{change}</span>
      <span className="text-gray-400 ml-2">较上月</span>
    </div>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">系统概览</h1>
        <p className="text-gray-500 mt-1">欢迎回来！以下是今日的系统动态。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="管理员总数" 
          value="24" 
          change="+12%" 
          icon={Users} 
          color="bg-blue-500" 
        />
        <StatCard 
          title="活跃会话" 
          value="156" 
          change="+5%" 
          icon={TrendingUp} 
          color="bg-emerald-500" 
        />
        <StatCard 
          title="系统告警" 
          value="3" 
          change="-2%" 
          icon={AlertCircle} 
          color="bg-amber-500" 
        />
        <StatCard 
          title="任务完成率" 
          value="89%" 
          change="+8%" 
          icon={CheckCircle} 
          color="bg-purple-500" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-80 flex flex-col items-center justify-center text-gray-400">
            <TrendingUp size={48} className="mb-4 text-gray-300" />
            <p>活动趋势图表</p>
            <span className="text-xs mt-2">（此处可集成 ECharts 或 Recharts）</span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-80 flex flex-col items-center justify-center text-gray-400">
            <Users size={48} className="mb-4 text-gray-300" />
            <p>用户分布地图</p>
        </div>
      </div>
    </div>
  );
};

export default Home;