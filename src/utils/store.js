
import { configureStore } from '@reduxjs/toolkit';
import locationSlice from './locationSlice';
import authSlice from '../featuers/Authentication/authSlice';
export const store = configureStore({
  reducer: {
    location:locationSlice,
    auth:authSlice
  },
})
