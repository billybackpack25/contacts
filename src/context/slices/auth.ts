import {createSlice} from '@reduxjs/toolkit';
import {RegisterFormType} from 'screens/Register/RegisterScreen';

type Auth = {
  isLoggedIn: boolean;
  data: RegisterFormType | null;
  error: (RegisterFormType & {message: string}) | null;
  loading: boolean;
};

const initialState: {auth: Auth} = {
  auth: {
    isLoggedIn: false,
    data: {},
    error: null,
    loading: false,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState.auth,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    logout: state => {
      state.isLoggedIn = false;
    },
    authLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearAuthState: state => {
      state.data = null;
    },
    setUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {login, logout, authLoading, setError, clearAuthState, setUser} =
  authSlice.actions;

export default authSlice.reducer;
