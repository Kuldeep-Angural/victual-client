import { Box, Card, CardMedia, Grid } from '@mui/material'
import React from 'react'
import logo from '../../images/Logo.png'

const NavBar = () => {
    return (
        <Grid container spacing={2}  >
            <Card sx={{ width: '100%'  , boxShadow:3 }}>
                <Grid item md={3} sx={{ display: { xs: 'none', sm: 'none', md: 'flex', }, mt: 2 }} >
                    <CardMedia src={logo} alt='logo' component="img" style={{ height: '150px', width: '300px', objectFit: 'contain', objectPosition: 'center top' }} />
                </Grid>
            </Card>
        </Grid>
    )
}

export default NavBar