import { takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/auth/actionTypes";
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authLoginSaga,
  authCheckStateSaga,
} from "./auth/authSaga";

export function* watchAuth() {
  yield takeEvery(actionType.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actionType.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(actionType.AUTH_USER_LOGIN, authLoginSaga);
  yield takeEvery(actionType.AUTH_CHECK_STATE, authCheckStateSaga);
}
