import { takeLatest, call, put } from "redux-saga/effects";
import { scheduleSuccess } from "../Slices/scheduleSlice";

import { updateRequest } from "../Slices/updateSlice";
import * as api from "../../api/index";
export function* update(action) {
  const data = yield call(api.updateSchedule, action.payload);
  yield put(scheduleSuccess(data.data));
}
export default function* updateSaga() {
  yield takeLatest(updateRequest.type, update);
}
