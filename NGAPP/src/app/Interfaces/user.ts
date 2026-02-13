export type Role = {
  role: 'user' | 'admin';
};

export interface User {
  token: string;
  role: Role;
  active?: number | boolean;
  is_active?: number | boolean;
}
