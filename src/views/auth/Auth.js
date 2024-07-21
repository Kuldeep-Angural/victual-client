import { Box, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import AuthForm from './AuthForm'
import logo from '../../images/Logo.png'

const Auth = () => {
  return (
    <Grid container spacing={0}>
      <Grid item md={8} >
        <Box sx={{ height: '100vh', width: '100%', backgroundColor: 'orange', display: { xs: 'none', md: 'flex', }, }}>
          <Box sx={{ height: '100%' }} p={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Grid container spacing={2} p={2}>

              <Grid item md={12} sm={12} xs={12}>
                <Box sx={{ height: '100%' }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                  <CardMedia src={logo} alt='logo' component="img" style={{ height: '250px', width: '355px', objectFit: 'contain', objectPosition: 'center top' }} />
                </Box>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <Typography p={3} flexWrap={'wrap'}>The Victual is a cutting-edge online grocery selling app designed to streamline the grocery shopping experience for users. With a focus on convenience, variety, and quality, The Victual offers a seamless platform for purchasing groceries from the comfort of your home.</Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>

      <Grid item md={4} xs={12} >
        <AuthForm />
      </Grid>
    </Grid>
  )
}

export default Auth