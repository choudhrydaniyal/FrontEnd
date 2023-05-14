import { PaletteOutlined } from "@material-ui/icons";
import { contextType } from "react-modal";
import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  AUTHENTICATED_FAIL,
  AUTHENTICATED_SUCCESS,
  LOGOUT,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_COMFIRM_FAIL,
  SIGNUP_SUCCESS,
  ACTIVATION_FAIL,
  ACTIVATION_SUCCESS,
  SIGNUP_FAIL,
  TRENDS_LOADED_FAIL,
  TRENDS_LOADED_SUCCESS,
  DOWN,
  UP,
  DETECTION_LOADED_FAIL,
  DETECTION_LOADED_SUCCESS,
  POST_SUCCESS,
  POST_FAIL,
  UPDATE_FAIL,
  UPDATE_SUCCESS,
  DELETE_FAIL,
  DELETE_SUCCESS,
  PASSWORD_SUCCESS,
  PASSWORD_FAIL,
  PROFILE_FAIL,
  PROFILE_SUCCESS,
} from "./type";

export const Upload_profile = (name, id) => async (dispatch) => {
  const fd = new FormData();
  fd.append("name", name.profile_image);
  fd.append("id", id);

  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
      },
    };
    const body = JSON.stringify({ id, name });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}postprofile`,
        fd,
        config
      );

      dispatch({
        type: PROFILE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PROFILE_FAIL,
      });
    }
  } else {
    dispatch({
      type: PROFILE_FAIL,
    });
  }
};

export const checkAuthenticated = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ token: localStorage.getItem("access") });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}auth/jwt/verify/`,
        body,
        config
      );
      if (res.data.code !== "token_not_valid") {
        dispatch({
          type: AUTHENTICATED_SUCCESS,
        });
      } else {
        dispatch({
          type: AUTHENTICATED_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: AUTHENTICATED_FAIL,
      });
    }
  } else {
    dispatch({
      type: AUTHENTICATED_FAIL,
    });
  }
};

export const load_user = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}auth/users/me/`,
        config
      );

      dispatch({
        type: USER_LOADED_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: USER_LOADED_FAIL,
      });
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL,
    });
  }
};

export const add = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}auth/jwt/create/`,
      body,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(load_user());
    dispatch(get_trends());
    dispatch(get_post());
    dispatch(get_profile());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const reset_password = (email) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email });

  try {
    await axios.post(
      `${process.env.REACT_APP_API_URL}auth/users/reset_password/`,
      body,
      config
    );

    dispatch({
      type: PASSWORD_RESET_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: PASSWORD_RESET_FAIL,
    });
  }
};

export const verify = (uid, token) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ uid, token });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}auth/users/activation/`,
      body,
      config
    );

    dispatch({
      type: ACTIVATION_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: ACTIVATION_FAIL,
    });
  }
};
//

export const reset_password_confirm =
  (uid, token, new_password, re_new_password) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ uid, token, new_password, re_new_password });
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}auth/users/reset_password_confirm/`,
        body,
        config
      );

      dispatch({
        type: PASSWORD_RESET_CONFIRM_SUCCESS,
      });
    } catch (err) {
      dispatch({
        type: PASSWORD_RESET_COMFIRM_FAIL,
      });
    }
  };

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

export const logpage = (page) => (dispatch) => {
  if (page === true) {
    dispatch({ type: UP });
  } else {
    dispatch({ type: DOWN });
  }
};

export const signup =
  (username, first_name, last_name, email, password, re_password, fpassword) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      username,
      last_name,
      first_name,
      email,
      password,
      re_password,
      fpassword,
    });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}auth/users/`,
        body,
        config
      );

      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: SIGNUP_FAIL,
      });
    }
  };

export const get_trends = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}list`,
        config
      );
      dispatch({
        type: TRENDS_LOADED_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: TRENDS_LOADED_FAIL,
      });
    }
  } else {
    dispatch({
      type: TRENDS_LOADED_FAIL,
    });
  }
};

//////////////////////////////////////////////////
export const detection = (text, name, Username) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem("access")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ text, Username, name });
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}news/`,
      body,
      config
    );
    dispatch({
      type: POST_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_FAIL,
    });
  }
};

export const get_post = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}news/`,
        config
      );
      dispatch({
        type: POST_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: POST_FAIL,
      });
    }
  } else {
    dispatch({
      type: POST_FAIL,
    });
  }
};

export const update =
  (id, username, first_name, last_name) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ username, first_name, last_name });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}auth/user/${id}`,
        body,
        config
      );
      dispatch({
        type: UPDATE_SUCCESS,
        payload: res.data,
      });

      dispatch(load_user());
      dispatch(get_trends());
      dispatch(get_post());
    } catch (err) {
      dispatch({
        type: UPDATE_FAIL,
      });
    }
  };

export const destroy = (id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem("access")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}news/${id}`,
      config
    );

    dispatch({
      type: DELETE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: DELETE_FAIL,
    });
  }
};

export const passwordChange =
  (current_password, new_password, re_new_password) => async (dispatch) => {
    const config = {
      headers: {
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      current_password,
      new_password,
      re_new_password,
    });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}auth/users/set_password/`,
        body,
        config
      );

      dispatch({
        type: PASSWORD_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PASSWORD_FAIL,
      });
    }
  };

export const get_profile = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}profile`,
        config
      );
      dispatch({
        type: PROFILE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PROFILE_FAIL,
      });
    }
  } else {
    dispatch({
      type: PROFILE_FAIL,
    });
  }
};
