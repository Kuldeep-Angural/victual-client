import { CssBaseline } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ROUTES, SESSION_KEYS } from '../constants/constant';
import { theme } from '../theme/theme';
import Auth from '../views/auth/Auth';
import { selectUserData } from '../views/auth/authSlice';
import PageNotFound from '../views/notfound/PageNotFound';

const App = () => {

 
  const isLoggedIn = useSelector(selectUserData);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {ROUTES.map((route, index) => (
          <Route path={route.name} element={isLoggedIn ? route.value(index) : <Auth key={index} />} key={route.name} />
        ))}
        <Route path="*" element={<PageNotFound />} /> {/* Catch-all route */}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
