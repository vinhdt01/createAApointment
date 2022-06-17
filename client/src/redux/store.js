import { configureStore   } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import registerReducer from './Slices/registerSlice'
import loginReducer from './Slices/loginSlice'
import scheduleReducer from './Slices/scheduleSlice'


import rootSaga from './Sagas/index'
const sagaMiddleware = createSagaMiddleware()
const rootreducer = {
    register:registerReducer,
    login:loginReducer,
    schedule:scheduleReducer

  
 
   }
const store = configureStore({
    reducer: rootreducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),

 })
 sagaMiddleware.run(rootSaga)

export default store 