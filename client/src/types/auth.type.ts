import { IUser } from "./user.type";

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IRegisterUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  avatar?: string;
}

//state
export interface IAuthState {
  user: {} | IUser;
  loading: boolean;
  error: null | string;
  isAuth: boolean;
}

//consts
export enum AuthActionTypes {
  "AUTH_USER" = "AUTH_USER",
  "AUTH_USER_SUCCESS" = "AUTH_USER_SUCCESS",
  "AUTH_USER_ERROR" = "AUTH_USER_ERROR",
  "LOGOUT_USER" = "LOGOUT_USER",
}

//actions
export interface AuthUserAction {
  type: AuthActionTypes.AUTH_USER;
}

export interface AuthUserSuccessAction {
  type: AuthActionTypes.AUTH_USER_SUCCESS;
  payload: IUser;
}

export interface AuthUserErrorAction {
  type: AuthActionTypes.AUTH_USER_ERROR;
  payload: string;
}

export interface LogOutUser {
  type: AuthActionTypes.LOGOUT_USER;
}

export type AuthActions =
  | AuthUserAction
  | AuthUserSuccessAction
  | AuthUserErrorAction
  | LogOutUser;
