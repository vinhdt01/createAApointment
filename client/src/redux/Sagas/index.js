import { all } from "redux-saga/effects";
import registerSaga from "./registerSaga";
import loginSaga from "./loginSaga";
import schedule from "./scheduleSaga";
import listScheduleSage from "./listSchedule";
import logoutSaga from "./logoutSaga";
export default function* rootSaga() {
  yield all([
    registerSaga(),
    loginSaga(),
    schedule(),
    listScheduleSage(),
    logoutSaga(),
  ]);
}
