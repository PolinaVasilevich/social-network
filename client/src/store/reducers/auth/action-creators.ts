import { ILoginUser, IRegisterUser } from "../../../types/auth.type";
import {
  AuthActionEnum,
  ILoginUserAction,
  ILogoutUserAction,
  IRegisterUserAction,
} from "./types";

export const AuthActionCreator = {
  registerUser: (user: IRegisterUser): IRegisterUserAction => ({
    type: AuthActionEnum.REGISTER_USER,
    payload: user,
  }),

  loginUser: (user: ILoginUser): ILoginUserAction => ({
    type: AuthActionEnum.LOGIN_USER,
    payload: user,
  }),

  logout: (): ILogoutUserAction => ({
    type: AuthActionEnum.LOGOUT_USER,
  }),
};
