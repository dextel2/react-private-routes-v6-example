import * as actionTypes from "./actionTypes";

/**
 * Returns AUTH_START action
 * @function authStart
 */
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

/**
 * Returns authSuccess function in reducer
 * @function authSuccess
 * @param {string} token - authSuccess.
 * @returns {function} - Reducer function.
 */
export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
  };
};

/**
 * Returns authFail function in reducer
 * @function authFail
 * @param {string} error - authFail.
 * @returns {function} - Reducer function.
 */
export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

/**
 * Returns Redux Saga function that dispatches AUTH_INITIATE_LOGOUT action
 *     and (conditionally) AUTH_INITIATE_LOGOUT action
 * @function logout
 * @returns {function} - Redux Saga function.
 */
export const logout = () => {
  return {
    type: actionTypes.AUTH_INITIATE_LOGOUT,
  };
};

/**
 * Returns Redux Saga function that dispatches AUTH_LOGOUT action
 *     and (conditionally) AUTH_LOGOUT action
 * @function logoutSucceed
 * @returns {function} - Redux Saga function.
 */
export const logoutSucceed = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

/**
 * Returns Redux Saga function that dispatches AUTH_CHECK_TIMEOUT action
 *     and (conditionally) AUTH_CHECK_TIMEOUT action
 * @function checkAuthTimeout
 * @param {string} expirationTime - checkAuthTimeout.
 * @returns {function} - Redux Saga function.
 */
export const checkAuthTimeout = (expirationTime) => {
  return {
    type: actionTypes.AUTH_CHECK_TIMEOUT,
    expirationTime: expirationTime,
  };
};

/**
 * Returns Redux Saga function that dispatches AUTH_USER_LOGIN action
 *     and (conditionally) AUTH_USER_LOGIN action
 * @function auth
 * @param {string} email password - auth.
 * @returns {function} - Redux Saga function.
 */
export const auth = (email, password) => {
  return {
    type: actionTypes.AUTH_USER_LOGIN,
    email: email,
    password: password,
  };
};

/**
 * Returns Redux Saga function that dispatches AUTH_CHECK_STATE action
 * and (conditionally) AUTH_CHECK_STATE action
 * @function authCheckState
 * @returns {function} - Redux Saga function.
 */
export const authCheckState = () => {
  return {
    type: actionTypes.AUTH_CHECK_STATE,
  };
};

export const setAlert = (response) => {
  return {
    type: actionTypes.SHOW_ALERT,
    response,
  };
};
