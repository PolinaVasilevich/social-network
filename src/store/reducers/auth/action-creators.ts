import { IUser } from "../../../types";
import { AuthActionEnum, ILoginUserAction, ILogoutUserAction, IRegisterUserAction, } from "./types";


export const AuthActionCreator = {
    registerUser: (user: IUser): IRegisterUserAction => ({
        type: AuthActionEnum.REGISTER_USER,
        payload: user
    }),

    loginUser: (user: IUser): ILoginUserAction => ({
        type: AuthActionEnum.LOGIN_USER,
        payload: user,
    }),

    logout: (): ILogoutUserAction => ({
        type: AuthActionEnum.LOGOUT_USER
    })
}
