import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../constants/constant';
import PageNotFound from '../views/notfound/PageNotFound';
import Auth from '../views/auth/Auth';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import { CssBaseline } from '@mui/material';

const App = () => {
  const isLoggedIn = false;

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
