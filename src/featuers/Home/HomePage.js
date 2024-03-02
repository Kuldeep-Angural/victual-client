import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../Authentication/authSlice';

const HomePage = () => {
    const dispatch = useDispatch();
    
    const logOut = () => {
        dispatch(logout());
    }

  return (
    <Button onClick={logOut}>
        logout
    </Button>
  )
}

export default HomePage