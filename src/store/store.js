import { configureStore } from '@reduxjs/toolkit'
import controllerReducer from './controllerSlice'
import counterSlice from './counterSlice'
import userSlice from './userSlice'

import { pageApi } from '../API/pageAPI' 
import { newsApi } from '../API/newsAPI'
import { tasksApi } from '../API/tasksAPI'

export const store = configureStore({
  reducer: {
    controller: controllerReducer,
    counter: counterSlice,
    user: userSlice,
    [pageApi.reducerPath]:pageApi.reducer,
    [newsApi.reducerPath]:newsApi.reducer,
    [tasksApi.reducerPath]:tasksApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat
  ([
    pageApi.middleware,
    newsApi.middleware,
    tasksApi.middleware,
    
    
  ]),
})