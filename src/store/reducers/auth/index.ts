import { AuthActionEnum, AuthActionTypes, IAuthState } from "./types";

const initialState: IAuthState = {
    user: {
        username: '',
        password: '',
        avatar: '',
    },

    isAuth: false,
}

export default function authReducer( state = initialState, action: AuthActionTypes): IAuthState {
    switch(action.type) {
        case AuthActionEnum.REGISTER_USER: 
            return {...state, user: action.payload, isAuth: true}
        case AuthActionEnum.LOGIN_USER: 
            return {...state, user: action.payload, isAuth: true}
        case AuthActionEnum.LOGOUT_USER:
            return {...state, 
                user: {
                    username: '',
                    password: '',
                    avatar: '',
                }, 
                isAuth: false
            }
        default: 
            return state;
    }
}