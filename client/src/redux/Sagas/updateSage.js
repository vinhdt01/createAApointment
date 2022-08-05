import { takeLatest, call, put } from "redux-saga/effects";

import {
  updateRequest,
  updateSuccess,
  updateFailure,
} from "../Slices/updateSlice";
import * as api from "../../api/index";
export function* update(action) {
  const data = yield call(api.updateSchedule, action.payload);
  console.log(data);
  yield put(updateSuccess(data.data));
}
export default function* updateSaga() {
  yield takeLatest(updateRequest.type, update);
}
