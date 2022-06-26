import { takeLatest, call, put, delay } from "redux-saga/effects";
import {
  listRequest,
  listSuccess,
  listFailure,
} from "../Slices/listScheduleSlice.js";
import * as api from "../../api/index";
export function* getSchedule(action) {
  const data = yield call(api.getSchedule, action.payload.person_id);
  console.log(data.data);
  yield put(listSuccess(data));
}
export default function* listScheduleSage() {
  yield takeLatest(listRequest.type, getSchedule);
}
