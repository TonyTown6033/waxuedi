import React, { useEffect, useState } from 'react';
import { Building2, MapPin, Users } from 'lucide-react';
import { Organization } from '../types';
import { mockService } from '../services/mockService';

const OrgManagement: React.FC = () => {
  const [orgs, setOrgs] = useState<Organization[]>([]);

  useEffect(() => {
    mockService.getOrgs().then(setOrgs);
  }, []);

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">组织管理</h1>
        <p className="text-gray-500">管理企业部门与分支机构信息。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orgs.map((org) => (
          <div key={org.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                <Building2 size={24} />
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${org.status === '正常' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                {org.status}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-gray-800 mb-2">{org.name}</h3>
            
            <div className="space-y-2 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{org.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>{org.memberCount} 名成员</span>
              </div>
            </div>

            <button className="mt-6 w-full py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-800 transition-colors text-sm font-medium">
              查看详情
            </button>
          </div>
        ))}
        
        {/* Add New Org Card */}
        <button className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-gray-400 hover:border-blue-400 hover:text-blue-500 transition-colors min-h-[240px]">
          <Building2 size={40} className="mb-2" />
          <span className="font-medium">新增分支机构</span>
        </button>
      </div>
    </div>
  );
};

export default OrgManagement;