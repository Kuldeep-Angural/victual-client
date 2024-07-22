import { Grid } from '@mui/material'
import React from 'react'
import Toaster from '../toaster/Toaster'
import NavBar from '../navbar/NavBar'

const Container = ({ toastRef, children }) => {
    return (
        <Grid container spacing={2}>
            <NavBar />
            <Toaster ref={toastRef} />
            {children}
        </Grid>
    )
}

export default Container