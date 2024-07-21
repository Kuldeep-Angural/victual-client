
import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../views/auth/authSlice';
export const store = configureStore({
  reducer: {
    auth:authSlice,
  },
})
