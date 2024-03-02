import { Box } from '@mui/material'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentLocation, updateLocation } from './utils/locationSlice'
import LogIn from './featuers/Authentication/LoginPage/LogIn'

const App = () => {
  const dispatch = useDispatch()
  const location = useSelector(selectCurrentLocation)

  const getLocationParams = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude

        getExactLocation(latitude, longitude)
      })
    } else {
      alert('Geolocation is not supported by your browser.')
    }
  }

  const getExactLocation = async (latitude, longitude) => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })

      const latitude = position.coords.latitude
      const longitude = position.coords.longitude

      const api_key = process.env.REACT_APP_GEO_LOC_API_KEY
      // @todo start from here location api not working fine
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${api_key}`,
      )
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      const { country, state, name } = data[0] || []
      dispatch(updateLocation({ country: country, state: state, city: name }))
    } catch (error) {
      console.error('Error:', error)
    }
  }

  React.useEffect(() => {
    getLocationParams()
  })
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <LogIn />
    </Box>
  )
}

export default App
