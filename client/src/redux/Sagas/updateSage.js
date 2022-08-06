import { takeLatest, call, put } from "redux-saga/effects";
import { scheduleRequest, scheduleSuccess } from "../Slices/scheduleSlice";

import {
  updateRequest,
  updateSuccess,
  updateFailure,
} from "../Slices/updateSlice";
import * as api from "../../api/index";
export function* update(action) {
  const data = yield call(api.updateSchedule, action.payload);
  console.log(data);
  yield put(scheduleSuccess(data.data));
}
export default function* updateSaga() {
  yield takeLatest(updateRequest.type, update);
}
