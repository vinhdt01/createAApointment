import { takeLatest, call, put } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginStatus } from "../Slices/loginSlice";
import * as api from "../../api/index";
export function* login(action) {
  const data = yield call(api.createLogin, action.payload);
  localStorage.setItem("token", data.data.token);
  localStorage.setItem("person_id", data.data.person_id);
  console.log(data.data);
  yield put(loginSuccess(data.data));
  yield put(loginStatus(data.data));
}
export default function* loginSaga() {
  console.log("login");
  yield takeLatest(loginRequest.type, login);
}
