

import { configureStore } from '@reduxjs/toolkit'
import domainReducer  from './reducers/domainSlice'
export const store = configureStore({
  reducer: {
    domain:domainReducer,
  },
})