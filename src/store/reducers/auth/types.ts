import { IUser } from "../../../types";

///state
export interface IAuthState {
    user: IUser,
    isAuth: boolean,
}

///actions
export enum AuthActionEnum {
    REGISTER_USER = "REGISTER_USER",
    LOGIN_USER = "LOGIN_USER",
    LOGOUT_USER = "LOGOUT_USER",
}

export interface IRegisterUserAction {
    type: AuthActionEnum.REGISTER_USER,
    payload: IUser
}

export interface ILoginUserAction {
    type: AuthActionEnum.LOGIN_USER,
    payload: IUser
}

export interface ILogoutUserAction {
    type: AuthActionEnum.LOGOUT_USER,
}

export type AuthActionTypes = IRegisterUserAction | ILoginUserAction | ILogoutUserAction;