import React, { useEffect, useRef } from 'react'
import Container from '../../component/container/Container';
import { Grid } from '@mui/material';

const Home = () => {
  const toastRef = useRef(null);
  useEffect(()=>{
      toastRef.current.showToast({messageText:'hello', messageType:'success' })
  },[])

  return (
    <Container toastRef={toastRef}>
      <Grid item maxWidth={12}>

      </Grid>
    </Container>
  )
}

export default Home