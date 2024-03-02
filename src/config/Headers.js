import { SESSION_KEYS } from "./constants";

export const HEADERS = {

    LOGIN: (besicData) => {
        return {
            'Accept': 'application/json,text/plain',
            'Content-Type': 'application/json',
            'Authorization': `Login ${besicData}`,
            'Cache-Control': 'no-cache'
        }
    },
    REGISTER : (registerData) => {
        return {
            'Accept': 'application/json,text/plain',
            'Content-Type': 'application/json',
            'Authorization': `register ${registerData}`,
            'Cache-Control': 'no-cache'
        }
    },
    AUTHENTIC: () => {
        return {
            'Accept': 'application/json,text/plain',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token()}`,
            'Cache-Control': 'no-cache',
            'AppContext' : `${getUser()}`
        }
    },


}

const token = () => {
    return localStorage.getItem(SESSION_KEYS.TOKEN);
}

const getUser = () => {
    return localStorage.getItem(SESSION_KEYS.USERS);
}