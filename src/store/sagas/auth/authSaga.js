/* eslint-disable no-unused-vars */
import { call, delay, put } from "redux-saga/effects";
import axios from "../../../config/axios";
import {
  authFail,
  authStart,
  authSuccess,
  checkAuthTimeout,
  logout,
  logoutSucceed,
  setAlert,
} from "../../actions/auth/auth";
import { LOGIN_API } from "../../apiCollecitions";
import { history } from "../../../helpers/store";
import { push } from "connected-react-router";

function forwardTo(location) {
  history.push(location);
}

export function* logoutSaga(action) {
  yield put(authStart());
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("expirationDate");
  yield localStorage.removeItem("email");
  yield localStorage.removeItem("slug");
  yield put(logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 6000);
  yield put(logout());
  yield call(logoutSaga);
}

export function* authLoginSaga(action) {
  yield put(authStart());

  const authData = {
    email: action.email,
    password: action.password,
  };
  try {
    const response = yield axios.post(
      `${LOGIN_API}?lng=${localStorage.getItem("i18nextLng")}&active=true`,
      authData,
    );
    const expirationTokenTime = 3600;
    const expirationDate = yield new Date(
      new Date().getTime() + expirationTokenTime * 1000,
    );
    yield localStorage.setItem("token", response.data.token);
    yield localStorage.setItem("expirationDate", expirationDate);
    yield localStorage.setItem("email", action.email);
    yield localStorage.setItem("slug", response.data.data.user.slug);
    yield put(authSuccess(response.data.token));
    yield call(forwardTo, "/protected");
    yield put(push(`/technology/`));

    yield put(checkAuthTimeout(expirationTokenTime));
    yield delay(500);
    yield put(setAlert(true));
    yield delay(8000);
    yield put(setAlert(false));
  } catch (error) {
    yield put(authFail(error.response.data.message));
  }
}

export function* authCheckStateSaga(action) {
  yield put(authStart());
  const token = yield localStorage.getItem("token");
  if (!token) {
    yield call(logoutSaga);
  } else {
    const expirationDate = yield new Date(
      localStorage.getItem("expirationDate"),
    );
    if (expirationDate <= new Date()) {
      yield call(logoutSaga);
    } else {
      yield put(authSuccess(token));
      yield put(
        checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000,
        ),
      );
    }
  }
}
