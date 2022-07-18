import { Dispatch } from "redux";

import * as AuthApi from "../../api/AuthRequest";

import {
  AuthActions,
  AuthActionTypes,
  ILoginUser,
  IRegisterUser,
} from "../../types/auth.type";

export const logIn =
  (userData: ILoginUser) => async (dispatch: Dispatch<AuthActions>) => {
    dispatch({ type: AuthActionTypes.AUTH_USER });
    try {
      const { data } = await AuthApi.logIn(userData);
      dispatch({ type: AuthActionTypes.AUTH_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: AuthActionTypes.AUTH_USER_ERROR,
        payload: "Error",
      });
    }
  };

export const signUp =
  (userData: IRegisterUser) => async (dispatch: Dispatch<AuthActions>) => {
    dispatch({ type: AuthActionTypes.AUTH_USER });
    try {
      const { data } = await AuthApi.signUp(userData);
      dispatch({ type: AuthActionTypes.AUTH_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: AuthActionTypes.AUTH_USER_ERROR,
        payload: "Error",
      });
    }
  };

export const logout = () => async (dispatch: Dispatch<AuthActions>) => {
  dispatch({ type: AuthActionTypes.LOGOUT_USER });
};
