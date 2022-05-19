import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.signUp.fulfilled](state, action) {
      state.user = action.payload;
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.name;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
