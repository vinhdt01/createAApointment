import { takeLatest, call, put } from "redux-saga/effects";
import { scheduleRequest, scheduleSuccess } from "../Slices/scheduleSlice";
import * as api from "../../api/index";
export function* schedule(action) {
  try {
    const data = yield call(api.createSchedule, action.payload.data);

    yield put(scheduleSuccess(data.data));

    // yield put(registerStatus(data.data));
  } catch (err) {
    console.error(err);
  }
}
export default function* scheduleSaga() {
  yield takeLatest(scheduleRequest.type, schedule);
}
