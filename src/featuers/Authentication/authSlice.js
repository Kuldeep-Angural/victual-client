import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createSession, createUser, invalidateSession } from '../../config/Session';
import { getGoogleUser, loginUser, logoutApi, registerUser } from '../../config/api';
import { convertBtoaToNormalObject } from '../../utils/utils';
import { SESSION_KEYS } from '../../config/constants';

const initialState = {
  authData: { 
    isAuthenticated: false,
 },
  status: 'done',
  isLoggedIn:false,
};

export const login = createAsyncThunk(
  'auth/register',
  async (credentials) => {
    return await loginUser(credentials);
  }
)

export const register = createAsyncThunk(
  'auth/login',
  async (credentials) => {
    return await registerUser(credentials);
  }
)

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async () => {
    const token = localStorage.getItem(SESSION_KEYS.TOKEN);
    return await logoutApi(token);
  }
)

export const isGoogleLogin = createAsyncThunk(
  'auth/isGoogleLogin',
  async () => {
    const response = await getGoogleUser();
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
        state.isLoggedIn = action?.payload;
    }


  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'processing';
      }).addCase(logoutUser.fulfilled , (state,action)=>{
        console.log(action.payload)
        if (action.payload) {
          invalidateSession();
          window.location.href = window.location.origin+process.env.REACT_APP_BASE_NAME+"/";
        };
      })
      .addCase(login.fulfilled, (state, action) => {
        if (action?.payload?.userData) {
          const [id,name,email,mobile,role] =convertBtoaToNormalObject(action?.payload?.userData);  
          console.log(id,name,email,mobile,role);
          createSession(action?.payload?.accessToken);
          createUser({id,name,email,mobile,role});
        } 
      })
      
  }
});
export const { logout , updateIsLoggedIn } = authSlice.actions;

export const selectAuthData = (state) => state.auth.authData;
export const selectAuthStatus = (state) => state.auth.status;
export const selectLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;