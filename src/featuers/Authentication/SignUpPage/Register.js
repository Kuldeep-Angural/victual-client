import {Box,Button,Container,CssBaseline,Divider,Grid,Link,TextField,Typography} from '@mui/material'
import React from 'react'
import { registerUser } from '../../../config/api'

const Register = () => {

  const handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const user = {
      name: data.get('name'),
      mobileNo: data.get('mobileno'),
      email: data.get('email'),
      password: data.get('password'),
    }

    registerUser(user);
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box sx={{marginTop: 8,display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
        <Typography component='h1' variant='h5'>
          Register 
        </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                required
                type='text'
                fullWidth
                id='name'
                label='Name'
                name='name'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type='number'
                id='mobileno'
                label='MobileNo'
                name='mobileno'
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                required
                fullWidth
                type='email'
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='new-password'
              />
            </Grid>
            <Grid item xs={12}>
          <Button type='submit' fullWidth variant='contained'sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
       
             
            </Grid>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link href='#' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default Register
