import { IRoles } from '../../login/login-user/login-user.metadata';
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  roles: IRoles;
}
