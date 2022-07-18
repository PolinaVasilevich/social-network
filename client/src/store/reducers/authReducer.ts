import {
  IAuthState,
  AuthActions,
  AuthActionTypes,
} from "../../types/auth.type";

const initialState: IAuthState = {
  user: {},
  loading: false,
  error: null,
  isAuth: true,
};

export const authReducer = (
  state = initialState,
  action: AuthActions
): IAuthState => {
  switch (action.type) {
    case AuthActionTypes.AUTH_USER:
      return { ...state, loading: true, error: null };
    case AuthActionTypes.AUTH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: { ...action.payload },
        isAuth: true,
      };
    case AuthActionTypes.AUTH_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case AuthActionTypes.LOGOUT_USER:
      return {
        ...state,
        loading: false,
        error: null,
        user: {},
        isAuth: false,
      };
    default:
      return state;
  }
};
