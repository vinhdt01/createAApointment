import {   takeLatest  , call , put} from "redux-saga/effects";
import {registerRequest , registerSuccess , registerFailure ,registerStatus} from '../Slices/registerSlice'
import * as api from '../../api/index'
export function* register(action) {
  // const posts = yield call(api.createRegister , action.payload);
  try {
    const data = yield call(api.createRegister , action.payload);
    console.log(data.data)
    yield put(registerSuccess(data.data));
    yield put(registerStatus(data.data));

    
  } catch (err) {
   
    yield put(registerFailure('Có lỗi xảy ra xin thử lại'));
  }
}
export default function* registerSaga() {
    console.log("userSaga")
  yield  takeLatest( registerRequest.type, register)
}