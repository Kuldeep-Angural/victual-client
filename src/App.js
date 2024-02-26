import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';

const App = () => {
  const getLocationParams = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        getExactLocation(latitude, longitude);
      });
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  const getExactLocation = async (latitude, longitude) => {
    console.log(latitude, longitude);

    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const api_key = process.env.REACT_APP_GEO_LOC_API_KEY;
      // @todo start from here location api not working fine
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${api_key}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  React.useEffect(() => {
    getLocationParams();
  });
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Button variant="contained" onClick={() => alert('Hello Developer!')}>
        <AddCircleOutlineIcon />
      </Button>
    </Box>
  );
};

export default App;
