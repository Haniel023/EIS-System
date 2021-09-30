import {
    LOGIN_SUCESS,
    LOGIN_FAILED,
    REGISTER_SUCESS,
    REGISTER_FAILED,
    AUTHENTICATION_SUCESS,
    AUTHENTICATION_FAILED,
    LOGOUT_USER
} from '../Actions/action.types'

const initialState = {
    access: localStorage.getItem('access'),
    isAuthenticated: null,
    user: null
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCESS:
            localStorage.setItem('access', payload.token);
            return {
                ...state,
                isAuthenticated: true,
                access: payload.token
            }
        case LOGIN_FAILED:
        case LOGOUT_USER:
            localStorage.removeItem('access');
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        case REGISTER_FAILED:
            localStorage.removeItem('access');
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        case REGISTER_SUCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        case AUTHENTICATION_SUCESS:
            return {
                ...state,
                isAuthenticated: true,
                access: payload.token,
            };
        case AUTHENTICATION_FAILED:
            return {
                ...state,
                isAuthenticated: false,
                access: null,
            };
        default:
            return state;

    }
}