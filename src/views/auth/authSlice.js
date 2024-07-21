import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createSession, invalidateSession } from '../../configuration/session';
import { SESSION_KEYS } from '../../constants/constant';
import { loginGoogle, loginUser, logoutUser, verify, verifyWithDetails } from './authApi';

const initialState = {
    authData: { isAuthenticated: false },
    signUpLoading: false,
    loginLoading: false,
    otpLoading: false,
    forgotPasswordLoading: false,
    userData: JSON.parse(localStorage.getItem('USER')),
    status: 'done',
};

export const loginWithGoogle = createAsyncThunk('auth/googleLogin', async (payload) => {
    const response = await loginGoogle(payload);
    return response;
});

export const login = createAsyncThunk('auth/login', async (credentials) => {
    const response = await loginUser(credentials);
    return response;
});

export const verifyAndaddDetails = createAsyncThunk('auth/verifywithDetails', async (credentials) => {
    const response = await verifyWithDetails(credentials);
    return response;
});


export const veriFyUser = createAsyncThunk('auth/veriFyUser', async (credentials) => {
    const response = await verify(credentials);
    return response;
});



export const logout = createAsyncThunk('auth/logout', async () => {
    const response = await logoutUser();
    return response;
});



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutSession: (state) => {
            state.authData = { isAuthenticated: false };
            invalidateSession();
            window.location.href = window.location.origin + process.env.REACT_APP_BASE_NAME + '/';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(veriFyUser.pending, (state, action) => {
                state.loginLoading = true;
            })
            .addCase(veriFyUser.fulfilled, (state, action) => {
                console.log(action.payload);
                if (action.payload.status === 200) {
                    state.authData = action.payload.data;
                    const data = action.payload.data
                    state.authData = { isAuthenticated: true };
                    const user = {
                        _id: data.id,
                        name: data.name,
                        email: data.email,
                        mobile: data.mobile,
                        roles: data.roles,
                    };
                    localStorage.setItem(SESSION_KEYS.USER, JSON.stringify(user));
                    state.userData = user;
                    createSession(action?.payload?.data?.accessToken);
                }
            })
            .addCase(login.pending, (state) => {
                state.loginLoading = true
                state.status = 'processing';
            }).addCase(logout.fulfilled, (state, action) => {
                state.authData = { isAuthenticated: false };
                invalidateSession();
            })

    },
});
export const { logoutSession } = authSlice.actions;

export const selectAuthData = (state) => state.auth.authData;
export const selectLoginLoading = (state) => state.auth.loginLoading;
export const selectSignUpLoading = (state) => state.auth.signUpLoading;
export const selectAuthStatus = (state) => state.auth.status;
export const selectUserData = (state) => state.auth.userData;
export const selectOtpLoading = (state) => state.auth.otpLoading;
export const selectForgotPasswordLoading = (state) => state.auth.forgotPasswordLoading;



export default authSlice.reducer;
