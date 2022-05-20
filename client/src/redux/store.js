import { configureStore } from '@reduxjs/toolkit';
// import { projectsApi } from '../services/projectsApi';
import { authReducer } from './auth';

export const store = configureStore({
  reducer: {
    // [projectsApi.reducerPath]: projectsApi.reducer,
    auth: authReducer,
  },
  // middleware: GetDefaultMiddleware => [
  // ...GetDefaultMiddleware(),
  // projectsApi.middleware,
  // ],
  devTools: process.env.NODE_ENV === 'development',
});
