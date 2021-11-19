
import { configureStore } from '@reduxjs/toolkit'
import domainReducer  from './reducers/domainSlice'
import errorReducer from './reducers/errorSlice'
import userReducer from './reducers/userSlice'

export const store = configureStore({
  reducer: {
    domain:domainReducer,
    error:errorReducer,
    user:userReducer,
  },
})