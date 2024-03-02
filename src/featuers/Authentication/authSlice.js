import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createSession, invalidateSession } from '../../config/Session';
import { authenticateUser } from '../../config/api';
import { SESSION_KEYS } from '../../config/constants';

const initialState = {
  authData: { 
    isAuthenticated: false,
 },
  status: 'done',
  isLoggedIn:false,
};

export const login = createAsyncThunk(
  'auth/login',
  async (credentials) => {
    const response = await authenticateUser(credentials);
    return response;
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.authData = { isAuthenticated: false };
      invalidateSession();
      window.location.href = window.location.origin+process.env.REACT_APP_BASE_NAME+"/";
    },
    updateIsLoggedIn : (state,action) => {
        state.isLoggedIn=action.payload;
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'processing';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'done';
        state.isLoggedIn=true;
        state.authData = action.payload;
        localStorage.setItem(SESSION_KEYS.USERS,action?.payload?.registerationId);
        createSession(action.payload.token);
        localStorage.setItem('ISLOGGEDIN',true);
      });
  }
});
export const { logout , updateIsLoggedIn } = authSlice.actions;

export const selectAuthData = (state) => state.auth.authData;
export const selectAuthStatus = (state) => state.auth.status;
export const selectLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;