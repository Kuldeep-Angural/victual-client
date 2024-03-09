import axios from "axios";
import { HEADERS } from "./Headers";
const BASE_ENDPOINT = process.env.REACT_APP_API_END_POINT_LOCAL;



export const registerUser = async (credentials) =>{

    const basicAuthData = btoa(credentials.name +':' + credentials.mobile + ':'+ credentials.email + ':' + credentials.password);  
    
    return await axios.post(BASE_ENDPOINT+'/api/signup', {}, {
      headers: HEADERS.REGISTER(basicAuthData)
    }).then(function (response) {
      if (response.status === 200) {
        return {...response.data}
      } else {
        return { isAuthenticated: false };
      }
    }).catch(function (error) {
      return { isAuthenticated: false };
    });
  }


  export const loginUser = async (credentials) =>{

    const basicAuthData = btoa(credentials.email + ':' + credentials.password);  

    return await axios.post(BASE_ENDPOINT+'/api/login', {}, {
      headers: HEADERS.LOGIN(basicAuthData)
    }).then(function (response){
      if (response.status === 200) {
        return { isAuthenticated: true,  ...response.data}
      } else {
        return { isAuthenticated: false };
      }
    }).catch(function (error) {
      return { isAuthenticated: false };
    });
  }

  export const logoutApi = async (credentials) =>{
    return await axios.delete(BASE_ENDPOINT+'/api/logout', {}, {
      body: HEADERS.LOGIN(credentials)
    }).then(function (response){
      if (response.status === 200) {
        return {  ...response.data}
      } else {
        return {  };
      }
    }).catch(function (error) {
      return { error};
    });
  }


  export const getGoogleUser = async () =>{
    return await axios.get(BASE_ENDPOINT+'/google/login/success', {withCredentials:true} ).then(function (response) {
      if (response.status === 200) {
        return { isAuthenticated: true,  ...response.data}
      } else {
        return { isAuthenticated: false };
      }
    }).catch(function (error) {
      return { isAuthenticated: false };
    });
  }
