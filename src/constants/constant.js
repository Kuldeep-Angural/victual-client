import Auth from "../views/auth/Auth";
import Home from "../views/home/Home";

export const ROUTES = [
    { name: '/', value: (index) => (<Home key={index} />) },
    { name: '/auth', value: (index) => (<Auth key={index} />) },

]

export const SESSION_KEYS = {
    TOKEN: 'TOKEN',
    EXPIRY: 'EXPIRY',
    FACILITY: 'FACILITY',
    USER: 'USER',
};
