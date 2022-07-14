import { takeLatest, call, put } from "redux-saga/effects";
import {
  logoutRequest,
  logoutSuccess,
  logoutStatus,
} from "../Slices/logoutSlice";
import * as api from "../../api/index";
export function* logout(action) {
  const data = yield call(api.logout);
  if (data.data === "logout success") {
    localStorage.removeItem("token", "person_id");
    localStorage.removeItem("person_id");
  } else {
  }
}
export default function* logoutSaga() {
  yield takeLatest(logoutRequest.type, logout);
}
