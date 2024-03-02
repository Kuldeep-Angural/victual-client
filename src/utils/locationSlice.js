import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentLocation:{
        country:'',
        state:'',
        city:'',

    }
}
const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        updateLocation: (state, action) => {
            state.currentLocation.country = action?.payload?.country;
            state.currentLocation.state = action?.payload?.state;
            state.currentLocation.city = action?.payload?.city;

        }
    },
});

export const { updateLocation } = locationSlice.actions;
export const selectCurrentLocation  =(state) => state.location.currentLocation;
export default locationSlice.reducer