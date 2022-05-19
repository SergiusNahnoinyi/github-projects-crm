import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth';
// import { projectsReducer } from './projects';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // projects: projectsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
