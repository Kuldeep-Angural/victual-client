import axios from "axios";
import { HEADERS } from "./Headers";
const BASE_ENDPOINT = process.env.REACT_APP_API_END_POINT_LOCAL;



export const registerUser = async (credentials) =>{

    const basicAuthData = btoa(credentials.name +':' + credentials.mobileNo + ':'+ credentials.email + ':' + credentials.password);  
    
    return await axios.post(BASE_ENDPOINT+'/register', {}, {
      headers: HEADERS.REGISTER(basicAuthData)
    }).then(function (response) {
      if (response.status === 200) {
        return {...response.data}
      } else {
        return { isRsgister: false };
      }
    }).catch(function (error) {
      return { isAuthenticated: false };
    });
  }


  export const authenticateUser = async (credentials) =>{

    const basicAuthData = btoa(credentials.email + ':' + credentials.password);  

    return await axios.post(BASE_ENDPOINT+'/login', {}, {
      headers: HEADERS.LOGIN(basicAuthData)
    }).then(function (response) {
      if (response.status === 200) {
        return { isAuthenticated: true,  ...response.data}
      } else {
        return { isAuthenticated: false };
      }
    }).catch(function (error) {
      return { isAuthenticated: false };
    });
  }