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
    POST_FAILURE,
    FETCH_COMMENT_START,
    FETCH_COMMENT_SUCCESS,
    FETCH_COMMENT_FAILURE,
    COMMENT_START,
    COMMENT_SUCCESS,
    COMMENT_FAILURE,
    DELETE_START,
    DELETE_SUCCESS,
    DELETE_FAILURE,
    UPDATE_POST_START,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAILURE,
        } from "../actions"
  
  const initialState = {
     posts:[],
     comments:[],
     loggingIn: false,
     error: null,
     username: ""
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
                loggingIn: false,
                username: action.payload
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
            }
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                error: "",
            }
        }
        case REGISTER_FAILURE: {
            return {
                ...state,
                error: action.payload
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
        case FETCH_COMMENT_START: {
            return {
                ...state,
                error: ""
            }
        } 
        case FETCH_COMMENT_SUCCESS: {
            return {
                ...state,
                error: "",
                comments: action.payload
            }
        } 
        case FETCH_COMMENT_FAILURE: {
            return {
                ...state,
                error: action.payload
            }
        }
        case COMMENT_START: {
            return {
                ...state,
                error: ""
            }
        } 
        case COMMENT_SUCCESS: {
            console.log("COMMENT PAYLOAD", action.payload)
            state.comments.push(action.payload)
            return state
            // return {
            //     ...state,
            //     // error: "",
            //     // comments: action.payload
            // }
        } 
        case COMMENT_FAILURE: {
            return {
                ...state,
                error: action.payload
            }
        }
        case DELETE_START: {
            return {
                ...state,
                error: ""
            }
        } 
        case DELETE_SUCCESS: {
            return {
                ...state,
                error: "",
                posts: state.posts.filter(post => post.id !== action.payload.id)
            }
        } 
        case DELETE_FAILURE: {
            return {
                ...state,
                error: action.payload
            }
        }
        case UPDATE_POST_START: {
            return {
                ...state,
                error: ""
            }
        } 
        case UPDATE_POST_SUCCESS: {
            // console.log("ACTION PAYLOAD", action.payload.updatedPostInfo)
            return {
                ...state,
                error: "",
                posts: state.posts.map(post => {
                    if(post.id === action.payload.updatedPostInfo.id){
                        return post = action.payload.updatedPostInfo
                    }
                    return post
                })
            }
        } 
        case UPDATE_POST_FAILURE: {
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