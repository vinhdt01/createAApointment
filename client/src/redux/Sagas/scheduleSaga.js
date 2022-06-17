import {   takeLatest  , call , put} from "redux-saga/effects";
import {scheduleRequest ,scheduleSuccess} from '../Slices/scheduleSlice'
import * as api from '../../api/index'
export function* schedule(action) {

  try {
    const data = yield call(api.createSchedule , action.payload.data  ,  action.payload.value);
    if(data.data.name==="TokenExpiredError") {
      function getCookie(name) {
        let cookie = {};
        document.cookie.split(';').forEach(function(el) {
          let [k,v] = el.split('=');
          cookie[k.trim()] = v;
        })
        return cookie[name];
      }
     var refreshToken = getCookie('refreshToken')
      const refreshAction = yield call(api.refreshToken ,refreshToken);
      console.log(refreshAction)
      localStorage.setItem('token' , refreshAction.data.accessToken)
      const refreshSumit = yield call(api.createSchedule , action.payload.data  ,  refreshAction.data.accessToken);
      yield put(scheduleSuccess(refreshSumit.data));
    }
    else {
       yield put(scheduleSuccess(data.data));
    }
   
    // yield put(registerStatus(data.data));

    
  } catch (err) {
   
    
  }
}
export default function* scheduleSaga() {
    console.log("userSagaxx")
  yield  takeLatest( scheduleRequest.type, schedule)
}