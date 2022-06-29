import { ILoginUser, IRegisterUser } from "../../../types/auth.type";
import IUser from "../../../types/user.type";

///state
export interface IAuthState {
  user: IUser;
  isAuth: boolean;
}

///actions
export enum AuthActionEnum {
  REGISTER_USER = "REGISTER_USER",
  LOGIN_USER = "LOGIN_USER",
  LOGOUT_USER = "LOGOUT_USER",
}

export interface IRegisterUserAction {
  type: AuthActionEnum.REGISTER_USER;
  payload: IRegisterUser;
}

export interface ILoginUserAction {
  type: AuthActionEnum.LOGIN_USER;
  payload: ILoginUser;
}

export interface ILogoutUserAction {
  type: AuthActionEnum.LOGOUT_USER;
}

export type AuthActionTypes =
  | IRegisterUserAction
  | ILoginUserAction
  | ILogoutUserAction;
