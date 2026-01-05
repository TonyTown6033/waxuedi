export enum Gender {
  MALE = '男',
  FEMALE = '女',
  OTHER = '其他'
}

export interface Admin {
  id: string;
  username: string;
  fullName: string;
  gender: Gender;
  phone: string;
  avatar: string;
  role: string;
}

export interface Organization {
  id: string;
  name: string;
  location: string;
  memberCount: number;
  status: '正常' | '停用';
}

export interface UserSession {
  token: string;
  user: {
    username: string;
    avatar: string;
  };
}