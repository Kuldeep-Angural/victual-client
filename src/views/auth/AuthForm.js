import { Box, Button, CardMedia, Divider, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import logo from '../../images/Logo.png'

import { GoogleLogin, googleLogout } from '@react-oauth/google';
const AuthForm = () => {

    const handleChange = (e) => {

    }

    const onSuccess = (res) => {
        console.log(res);
    }

    const onFailure = (err) => {
        console.log(err);
    }


    return (
        <Box sx={{ height: '100vh', width: '100%', backgroundColor: 'white' }}>
            <Box sx={{ height: '100%' }} p={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Grid container spacing={2}>
                    <Grid item md={12} sm={12} xs={12}>
                        <Box  sx={{ height: '100%',display: { md: 'none', xs: 'flex', },}} p={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <CardMedia src={logo} alt='logo' component="img" style={{ height: '250px', width: '355px', objectFit: 'contain', objectPosition: 'center top' }} />
                        </Box>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                        <Typography> <b>Welcome to The Victuals</b><br/> <p style={{fontSize:'12px'}}>Where Fresh Meets Convenience.</p></Typography>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                        <TextField fullWidth name='email' placeholder='ex: kuldeep.navv@gmail.com' onChange={handleChange} />
                    </Grid>

                    <Grid item md={12} sm={12} xs={12}>
                        <Button color='primary' fullWidth variant='outlined'>Sign In</Button>
                    </Grid>

                    <Grid item md={12} sm={12} xs={12}>
                           <Divider>or continue with</Divider>
                        <Box sx={{ height: '100%' }} p={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <GoogleLogin
                                clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
                                buttonText="Google"
                                onSuccess={onSuccess}
                                onFailure={onFailure}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}
                            />
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Box>

    )
}

export default AuthForm