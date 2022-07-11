import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import registerReducer from "./Slices/registerSlice";
import loginReducer from "./Slices/loginSlice";
import scheduleReducer from "./Slices/scheduleSlice";
import listReducer from "./Slices/listScheduleSlice";
import logoutReducer from "./Slices/logoutSlice";

import rootSaga from "./Sagas/index";
const sagaMiddleware = createSagaMiddleware();
const rootreducer = {
  register: registerReducer,
  login: loginReducer,
  schedule: scheduleReducer,
  listSchedule: listReducer,
  logout: logoutReducer,
};
const store = configureStore({
  reducer: rootreducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
