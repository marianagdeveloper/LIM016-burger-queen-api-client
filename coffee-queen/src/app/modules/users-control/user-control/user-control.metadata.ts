import { IRoles } from '../../login/login-user/login-user.metadata';
export interface User {
  _id: string;
  nameUser: string;
  email: string;
  password: string;
  roles: IRoles;
  image?: string;
  updatedAt?:string;
  createdAt?:string;
}
