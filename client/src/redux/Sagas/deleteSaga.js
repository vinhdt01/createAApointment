import { takeLatest, call, put } from "redux-saga/effects";
import {
  deleteRequest,
  deleteSuccess,
  deleteFailure,
} from "../Slices/deleteSlice.js";
import { removeListSuccess } from "../Slices/listScheduleSlice.js";
import { select } from "redux-saga/effects";

import * as api from "../../api/index";
// export const deleteScheduleData = (state) => state.listSchedule.data[0];

export function* deleteSchedule(action) {
  // let project = yield select(deleteScheduleData);
  console.log(action.payload);
  const data = yield call(api.deleteSchedule, action.payload);
  console.log(data.data, "data");

  // project = project.filter((data) => data._id === action.payload);
  // console.log({ ...project });
  if (data.data === "success") {
    yield put(deleteSuccess(data.data));
    yield put(removeListSuccess(action.payload));
  } else {
    console.log("deleteSchedule", action.payload);
  }
}
export default function* deleteSage() {
  yield takeLatest(deleteRequest.type, deleteSchedule);
}
