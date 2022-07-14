import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import registerReducer from "./Slices/registerSlice";
import loginReducer from "./Slices/loginSlice";
import scheduleReducer from "./Slices/scheduleSlice";
import listReducer from "./Slices/listScheduleSlice";
import logoutReducer from "./Slices/logoutSlice";
import deleteSlice from "./Slices/deleteSlice";
import rootSaga from "./Sagas/index";
const sagaMiddleware = createSagaMiddleware();
const rootreducer = {
  register: registerReducer,
  login: loginReducer,
  schedule: scheduleReducer,
  listSchedule: listReducer,
  logout: logoutReducer,
  delete: deleteSlice,
};
const store = configureStore({
  reducer: rootreducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
