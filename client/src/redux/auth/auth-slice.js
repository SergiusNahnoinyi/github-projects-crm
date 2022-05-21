import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.signUp.fulfilled](state, action) {
      state.user = action.payload;
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.name;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isLoading = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload.name;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
