import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ROUTE } from '../../config/constants';
import { selectLoggedIn } from '../Authentication/authSlice';

const Wraper = () => {
  const isLoggedIn = useSelector(selectLoggedIn);

 
  if (isLoggedIn) {
    return <Navigate to={ROUTE.home}/>
  }else{
    return <Navigate to={ROUTE.login}/>
  }
}

export default Wraper