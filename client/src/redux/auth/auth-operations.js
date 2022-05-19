import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'http://localhost:4000/api/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUp = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      await axios.post('auth/signup', credentials);
      toast.success('You successfully signed up!');
    } catch (error) {
      toast.error('Sign up failed. Email is already in use!');
      return thunkAPI.rejectWithValue();
    }
  },
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('auth/login', credentials);
    token.set(data.token);
    toast.success('You successfully logged in!');
    return data;
  } catch (error) {
    toast.error('Log in failed. Please, sign up!');
    return thunkAPI.rejectWithValue();
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.delete('auth/logout');
    token.unset();
    toast.success('Well, see you later!');
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
});

const operations = {
  signUp,
  logIn,
  logOut,
};

export default operations;
