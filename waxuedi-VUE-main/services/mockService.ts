import { Admin, Gender, Organization } from '../types';

// Mock Data
let MOCK_ADMINS: Admin[] = [
  {
    id: '1',
    username: 'admin',
    fullName: '张三',
    gender: Gender.FEMALE,
    phone: '13800138000',
    avatar: 'https://picsum.photos/200/200?random=1',
    role: '超级管理员'
  },
  {
    id: '2',
    username: 'dev_li',
    fullName: '李四',
    gender: Gender.MALE,
    phone: '13912345678',
    avatar: 'https://picsum.photos/200/200?random=2',
    role: '开发组长'
  },
  {
    id: '3',
    username: 'manager_wang',
    fullName: '王五',
    gender: Gender.FEMALE,
    phone: '13787654321',
    avatar: 'https://picsum.photos/200/200?random=3',
    role: '部门经理'
  }
];

let MOCK_ORGS: Organization[] = [
  { id: '101', name: '集团总部', location: '北京', memberCount: 150, status: '正常' },
  { id: '102', name: '研发中心', location: '上海', memberCount: 45, status: '正常' },
  { id: '103', name: '华南销售部', location: '深圳', memberCount: 80, status: '停用' },
];

export const mockService = {
  // Simulate network delay
  delay: (ms: number) => new Promise(resolve => setTimeout(resolve, ms)),

  getAdmins: async (): Promise<Admin[]> => {
    await mockService.delay(500);
    return [...MOCK_ADMINS];
  },

  saveAdmin: async (admin: Admin): Promise<Admin> => {
    await mockService.delay(500);
    if (admin.id) {
      // Update
      MOCK_ADMINS = MOCK_ADMINS.map(a => a.id === admin.id ? admin : a);
      return admin;
    } else {
      // Create
      const newAdmin = { ...admin, id: Math.random().toString(36).substr(2, 9) };
      MOCK_ADMINS = [...MOCK_ADMINS, newAdmin];
      return newAdmin;
    }
  },

  deleteAdmin: async (id: string): Promise<void> => {
    await mockService.delay(300);
    MOCK_ADMINS = MOCK_ADMINS.filter(a => a.id !== id);
  },

  getOrgs: async (): Promise<Organization[]> => {
    await mockService.delay(400);
    return [...MOCK_ORGS];
  }
};