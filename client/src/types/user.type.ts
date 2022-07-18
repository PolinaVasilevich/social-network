export interface IUser {
  id: number | string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  avatar?: string;
}
