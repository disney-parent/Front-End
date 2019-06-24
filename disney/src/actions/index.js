import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth"

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loggingIn = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return (
        axios.post(`https://usemytechstuff.herokuapp.com/api/auth/login`, creds)
            .then(res => {
                // console.log("My toe", res)
                localStorage.setItem("token", res.data.payload);
                dispatch({ type: LOGIN_SUCCESS});
                return true;
            })
            .catch(err => {
                // console.log(err)
                dispatch ({ type: LOGIN_FAILURE, payload: err});
                return err.response
            })
    )
}


export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START });
    return (
        axiosWithAuth()
            .post(`https://usemytechstuff.herokuapp.com/api/auth/register`, creds)
            .then(res => {
                dispatch({ type: REGISTER_SUCCESS});
                return true;
            })
            .catch(err => {
                // console.log(err)
                dispatch ({ type: REGISTER_FAILURE, payload: err});
                return err.response
            })
    )
}