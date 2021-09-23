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
        header:{
            'Content-Type': 'application/json'
        }
    };
    const body ={email, password};

    try{    
        const res = await axios.post(
            `http://localhost:8080/api/auth/Login`,
            body,
            config
        );
        dispatch({
            type: LOGIN_SUCESS,
            payload: res.data,
        });
        console.log('User has logged in');
    }
    catch(err){
        dispatch({
            type: LOGIN_FAILED
        })
    }

}