import * as actionTypes from "../../actions/auth/actionTypes";
import { updateObject } from "../../utility/index";

const initialState = {
  token: null,
  error: null,
  loading: false,
  successLogin: false,
  alert: false,
};

/**
 * @function authStart
 * @param {string} state - State before reducer.
 * @param {object} action - Action sent to reducer.
 * @returns {string} - Return new state
 */
const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
    successLogin: true,
    alert: false,
  });
};

/**
 * @function authSuccess
 * @param {string} state - State before reducer.
 * @param {object} action - Action sent to reducer.
 * @returns {string} - New state (authSuccess payload from action).
 */
const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    error: null,
    loading: false,
    successLogin: false,
  });
};

/**
 * @function authFail
 * @param {string} state - State before reducer.
 * @param {object} action - Action sent to reducer.
 * @returns {string} - New state (authFail payload from action).
 */
const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    alert: false,
  });
};

/**
 * @function authLogout
 * @param {string} state - State before reducer.
 * @param {object} action - Action sent to reducer.
 * @returns {string} - New state (authLogout payload from action).
 */
const authLogout = (state, action) => {
  return updateObject(state, { token: null });
};

const setAlert = (state, action) => {
  return updateObject(state, {
    alert: action.response,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.SHOW_ALERT:
      return setAlert(state, action);
    default:
      return state;
  }
};

export default reducer;
