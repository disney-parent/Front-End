import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    POST_START,
    POST_SUCCESS,
    POST_FAILURE
    } from "../actions"
  
  const initialState = {
     posts:[],
     loggingIn: false,
     error: null
   }
const disneyReducer = (state = initialState , action) => {
    switch (action.type) {
        case LOGIN_START: 
        return {
            ...state,
            error: "",
            loggingIn: true
        };
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: "",
                loggingIn: false
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                loggingIn: false
            }
        case REGISTER_START: {
            return {
                ...state,
                error: "",
                // fetchingFriends: true
            }
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                error: "",
                // fetchingFriends: false,
                // friends: action.payload
            }
        }
        case REGISTER_FAILURE: {
            return {
                ...state,
                // fetchingFriends: false,
                // error: action.payload
            }
        }
        case FETCH_START: {
            return {
                ...state,
                error: ""
            }
        } 
        case FETCH_SUCCESS: {
            return {
                ...state,
                error: "",
                posts: action.payload
            }
        } 
        case FETCH_FAILURE: {
            return {
                ...state,
                error: action.payload
            }
        }
        case POST_START: {
            return {
                ...state,
                error: ""
            }
        } 
        case POST_SUCCESS: {
            return {
                ...state,
                error: "",
                posts: action.payload
            }
        } 
        case POST_FAILURE: {
            return {
                ...state,
                error: action.payload
            }
        }          
      default:
          return state;
  }
  }

  export default disneyReducer;