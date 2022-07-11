import { takeLatest, call, put } from "redux-saga/effects";
import {
  logoutRequest,
  logoutSuccess,
  logoutStatus,
} from "../Slices/logoutSlice";
import * as api from "../../api/index";
export function* logout(action) {
  const data = yield call(api.logout);
  console.log("logout");
}
export default function* logoutSaga() {
  console.log("logout");
  yield takeLatest(logoutRequest.type, logout);
}
