
import axios from 'axios';
import { HEADERS } from '../../configuration/headers';
const BASE_ENDPOINT = process.env.REACT_APP_API_END_POINT;

export const loginUser = async (credentials) => {
    return await axios.post(BASE_ENDPOINT + '/auth/emailLogin', {
        email: btoa(credentials.email || ""),
    }, {}).then(function (response) {
        if (response.status === 200) {
            return { ...response.data }
        }
    }).catch(function (error) {
        return { error };
    });
}


export const verifyWithDetails = async (payload) => {
    return await axios.post(process.env.REACT_APP_API_END_POINT + '/auth/verify-details', payload, {}).then(function (response) {
        if (response.status === 200) {
            return { ...response.data }
        }
    }).catch(function (error) {
        return { error };
    });
}





export const verify = async (payload) => {
    return await axios.post(process.env.REACT_APP_API_END_POINT + '/auth/verify', payload, {}).then(function (response) {
        if (response.status === 200) {
            return { ...response.data }
        }
    }).catch(function (error) {
        return { error };
    });
}


export const loginGoogle = async (payload) => {
    return await axios.post(process.env.REACT_APP_API_END_POINT + '/auth/googleLogin', payload, {}).then(function (response) {
        if (response.status === 200) {
            return { ...response.data }
        }
    }).catch(function (error) {
        return { error };
    });
}



export const logoutUser = async () => {
    // window.open(process.env.REACT_APP_API_END_POINT+'/auth/google/logout' , '_self');
    return await axios.post(BASE_ENDPOINT + '/auth/logout', {}, {
        headers: HEADERS.AUTHENTIC(),
    }).then(function (response) {
        if (response.status === 200) {
            return { ...response.data }
        }
    }).catch(function (error) {
        return { error };
    });
}
