import axios from 'axios';
import {
    LOGIN_SUCESS,
    LOGIN_FAILED,
    REGISTER_SUCESS,
    REGISTER_FAILED,
    AUTHENTICATION_SUCESS,
    AUTHENTICATION_FAILED,
    LOGOUT_USER
} from '../Actions/action.types'

export const login = (email, password) => async (dispatch) => {
    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    };
    const body = { email, password };

    try {
        const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/auth/Login`,
            body,
            config
        );
        dispatch({
            type: LOGIN_SUCESS,
            payload: res.data,
        });
        console.log('User has logged in');
    }
    catch (err) {
        dispatch({
            type: LOGIN_FAILED
        })
    }

}

export const register = (firstName, lastName, email, password) => async (dispatch) => {
    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    };
    const body = { firstName, lastName, email, password };

    try {
        const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/auth/Register`,
            body,
            config
        );
        dispatch({
            type: REGISTER_SUCESS,
            payload: res.data,
        });
        console.log('New user created!');
    }
    catch (err) {
        dispatch({
            type: REGISTER_FAILED
        })
    }

}

export const logout = () => (dispatch) => {
    console.log("hello")
    dispatch({
        type: LOGOUT_USER,
    });
};

export const check_authenticated = () => async (dispatch) => {
    if (localStorage.getItem('access')) {
        const tokenCheck = { token: localStorage.getItem('access') }

        try {
            if (tokenCheck.token !== null) {
                dispatch({
                    type: AUTHENTICATION_SUCESS,
                    payload: tokenCheck,
                })
            }
        }
        catch (e) {
            dispatch({
                type: AUTHENTICATION_FAILED
            });
        }
    }
    else {
        dispatch({
            type: AUTHENTICATION_FAILED
        });
    }
};