import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
    } from "../actions"
  
  const initialState = {
     parents:[],
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
      default:
          return state;
  }
  }

  export default disneyReducer;