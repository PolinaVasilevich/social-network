export default interface IUser {
  id?: any | null;
  name?: string | null;
  surname?: string | null;
  email: string;
  password: string;
  avatar?: string;
}
