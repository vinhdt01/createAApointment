import { all } from "redux-saga/effects";
import registerSaga from "./registerSaga";
import loginSaga from "./loginSaga";
import schedule from "./scheduleSaga";
import listScheduleSage from "./listSchedule";
import logoutSaga from "./logoutSaga";
import deleteSage from "./deleteSaga";
import updateSage from "./updateSage";

export default function* rootSaga() {
  yield all([
    registerSaga(),
    loginSaga(),
    schedule(),
    listScheduleSage(),
    logoutSaga(),
    deleteSage(),
    updateSage(),
  ]);
}
