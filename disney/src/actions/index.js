import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import { axiosWithAuth } from "../utils/axiosWithAuth"

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loggingIn = (creds, username) => dispatch => {
    dispatch({ type: LOGIN_START });

    console.log(username)
    return (
        axios
            .post(`https://disneyparent-backend.herokuapp.com/auth/parents/login`, creds)
            .then(res => {
                console.log("My toe", res.data)
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("username", username);
                dispatch({ type: LOGIN_SUCCESS, payload:username});
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
        axios
            .post(`https://disneyparent-backend.herokuapp.com/auth/parents/register`, creds)
            .then(res => {
                dispatch({ type: REGISTER_SUCCESS});
                return true;
            })
            .catch(err => {
                dispatch ({ type: REGISTER_FAILURE, payload: err});
                return err.response
            })
    )
}

export const FETCH_COMMENT_START = "FETCH_COMMENT_START";
export const FETCH_COMMENT_SUCCESS = "FETCH_COMMENT_SUCCESS";
export const FETCH_COMMENT_FAILURE = "FETCH_COMMENT_FAILURE";

export const fetchComments = () => dispatch => {
    dispatch({ type: FETCH_COMMENT_START });
    return ( 
        axios
            .get(`https://disneyparent-backend.herokuapp.com/comments`)
            .then(res => {
                console.log("THIS IS COMMENTS:", res)
                dispatch({ type: FETCH_COMMENT_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({ type: FETCH_COMMENT_FAILURE, payload: err})
            
            })
    )

}

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

export const postPost = postInfo => dispatch => {
    dispatch({ type: POST_START });
    return ( 
        // axiosWithAuth
        axios
            .post(`https://disneyparent-backend.herokuapp.com/posts`, postInfo)
            // {headers: 
            //     { Authorization: localStorage.getItem("token") }}, postInfo)
            .then(res => {
                dispatch({ type: POST_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({ type: POST_FAILURE, payload: err})            
            })
    )
}

export const COMMENT_START = "COMMENT_START";
export const COMMENT_SUCCESS = "COMMENT_SUCCESS";
export const COMMENT_FAILURE = "COMMENT_FAILURE";

export const postComment = comment => dispatch => {
    dispatch({ type: COMMENT_START });
    console.log("Checking comment", comment)
    return ( 
        axios
            .post(`https://disneyparent-backend.herokuapp.com/comments`, comment)
            .then(res => {
                dispatch({ type: COMMENT_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({ type: COMMENT_FAILURE, payload: err})
            
            })
    )

}

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchPosts = () => dispatch => {
    dispatch({ type: FETCH_START });
    return ( 
        axios
            .get(`https://disneyparent-backend.herokuapp.com/posts`)
            .then(res => {
                dispatch({ type: FETCH_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({ type: FETCH_FAILURE, payload: err})            
            })
    )

}
