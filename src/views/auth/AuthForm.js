import { Box, Button, CardMedia, Divider, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import logo from '../../images/Logo.png'

import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { login, verifyAndaddDetails, veriFyUser } from './authSlice';
import Modal from '../../component/modal/Modal';
const AuthForm = () => {
    const dispatch = useDispatch();

    const [credentials, setCredentials] = useState('')
    const [userDetails, setuserDetails] = useState({});
    const [verificationModal, setVerificationModal] = useState(false)
    const [detailsModal, setDetailsModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(value);
    }

    const onSuccess = (res) => {
        console.log(res);
    }

    const onFailure = (err) => {
        console.log(err);
    }

    const signinButton = () => {
        if (![null, undefined, ''].includes(credentials)) {
            dispatch(login({ email: credentials })).then((resp) => {
                console.log(resp);
                const payload = resp?.payload;
                if (payload.status === 200) {
                    setVerificationModal(true)
                } else {
                    setDetailsModal(true)
                }
                setuserDetails({
                    ...userDetails, id:resp.payload.data.id
                })
            })
        }
    }

    const submitWithDetails = () => {
        if(userDetails.name && userDetails.otp && userDetails.mobile){
            dispatch(verifyAndaddDetails(userDetails)).then((resp)=>{
                console.log(resp);
            })
        }
    }

    const verifyUser = () => {
        if(userDetails.otp ){
            dispatch(veriFyUser({id:userDetails.id , otp:userDetails.otp})).then((resp)=>{
               
            })    
        }
    }

    const handleUserDetails = (event) => {
        const { name, value } = event.target;
        setuserDetails({ ...userDetails, [name]: value })
    }


    return (
        <Box sx={{ height: '100vh', width: '100%', backgroundColor: 'secondary' }}>
            <Box sx={{ height: '100%' }} p={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Grid container spacing={2}>
                    <Grid item md={12} sm={12} xs={12}>
                        <Box sx={{ height: '100%', display: { md: 'none', xs: 'flex', }, }} p={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <CardMedia src={logo} alt='logo' component="img" style={{ height: '250px', width: '355px', objectFit: 'contain', objectPosition: 'center top' }} />
                        </Box>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                        <Typography> <b>Welcome to The Victuals</b><br /> <p style={{ fontSize: '12px' }}>Where Fresh Meets Convenience.</p></Typography>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                        <TextField fullWidth name='email' placeholder='ex: kuldeep.navv@gmail.com' onChange={handleChange} />
                    </Grid>

                    <Grid item md={12} sm={12} xs={12}>
                        <Button color='primary' fullWidth variant='outlined' onClick={signinButton}>Sign In</Button>
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

            <Modal open={verificationModal} onSubmit={() => { }} hideCreateButton={true} onClose={() => setVerificationModal(false)} title="">
                <Grid container mt={3}>
                    <Grid item md={12} sm={12} xs={12}>
                        <TextField name='otp' fullWidth  placeholder='Enter verification otp' onChange={handleUserDetails} type='number' />
                    </Grid>

                    <Grid item md={12} mt={1}>
                        <Button variant='outLined' onClick={verifyUser}> submit</Button>
                    </Grid>
                </Grid>
            </Modal>

            <Modal open={detailsModal} onSubmit={() => { }} hideCreateButton={true} onClose={() => setDetailsModal(false)} title="">
                <Grid container mt={3}>
                    <Grid item md={12} xs={12} sm={12}>
                        <TextField fullWidth name='otp' placeholder='enter your otp' onChange={handleUserDetails} type='number' />
                    </Grid>
                    <Grid item md={12} xs={12} sm={12} mt={1}>
                        <TextField fullWidth name='name' placeholder='Enter your Name' onChange={handleUserDetails} type='text' />
                    </Grid>
                    <Grid item md={12} xs={12} sm={12} mt={1}>
                        <TextField fullWidth name='mobile' placeholder='Enter your Mobile No.' onChange={handleUserDetails} type='number' />
                    </Grid>
                    <Grid item md={12} xs={12} sm={12} mt={1}>
                        <Box sx={{ height: '100%', }} p={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Button variant='outlined' sx={{ width: '190px' }} onClick={submitWithDetails}> submit</Button>
                        </Box>
                    </Grid>
                </Grid>

            </Modal>
        </Box>

    )
}

export default AuthForm