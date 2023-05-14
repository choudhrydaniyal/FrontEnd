import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_COMFIRM_FAIL,
  LOGOUT,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  ACTIVATION_FAIL,
  ACTIVATION_SUCCESS,
  TRENDS_LOADED_SUCCESS,
  TRENDS_LOADED_FAIL,
  UP,
  DOWN,
  POST_FAIL,
  POST_SUCCESS,
  UPDATE_FAIL,
  UPDATE_SUCCESS,
  DELETE_SUCCESS,
  DELETE_FAIL,
  PASSWORD_FAIL,
  PASSWORD_SUCCESS,
  PROFILE_SUCCESS,
  PROFILE_FAIL,
} from "../actions/type";

const initalState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: null,
  forgot:null,
  pagestate: false,
  user: [],
  trends: [],
  result: [],
  password:false,
  post: [],
  profile:[],
};

export default function (state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("refresh", payload.refresh);
      localStorage.setItem("access", payload.access);
      return {
        ...state,
        isAuthenticated: true,
        access: payload.access,
        refresh: payload.refresh,
      };

    case AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case TRENDS_LOADED_SUCCESS:
      return {
        ...state,
        trends: payload,
      };

    case TRENDS_LOADED_FAIL:
      return {
        ...state,
        trends: null,
      };
    case USER_LOADED_FAIL:
      return {
        ...state,
        user: null,
      };
    case POST_SUCCESS:
      return {
        ...state,
        post: payload,
      };

    case POST_FAIL:
      return {
        ...state,
        post: null,
      };

    case LOGIN_FAIL:
    case LOGOUT:
    case SIGNUP_FAIL:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        isAuthenticated: false,
        access: null,
        refresh: null,
        user: null,
      };

    case PASSWORD_RESET_SUCCESS:
    case PASSWORD_RESET_CONFIRM_SUCCESS:
    case PASSWORD_RESET_COMFIRM_FAIL:
    case PASSWORD_RESET_FAIL:
    case ACTIVATION_SUCCESS:
    case ACTIVATION_SUCCESS:
      return {
        ...state,
        forgot:true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        post: payload,
      };
    case PASSWORD_SUCCESS:
      return {
        ...state,
        password:true
      }
    case PASSWORD_FAIL:
        return {
          ...state,
          password:false
        };
    
    case DELETE_FAIL:
      return {
        ...state
      };

    case PROFILE_FAIL:
      return {
        ...state,
        profile:""
      };
    case PROFILE_SUCCESS:
        return {
          ...state,
          profile:payload
        };

    default:
      return state;
  }
}