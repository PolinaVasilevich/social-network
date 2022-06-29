export interface IRegisterUser {
  name: string;
  surname: string;
  email: string;
  password: string;
  avatar?: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}
