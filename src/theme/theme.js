import { createTheme } from '@mui/material';
import { blue, green, orange, red } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#2196F3',
            light:'#82C984',
            dark: '#f5bc00',
        },
        secondary: {
            main: '#FFC107',
        },
        background: {
            main: '#F5F5F5'
        },

        success: {
            main: green[200],
        },
        error: {
            main: red[700],
        },
        warning: {
            main: orange[300],
        },
        info: {
            main: blue[300],
        },
        text: {
            main: '#212121',
        },
        input: {
            main: '#514FC9',
        },
    },
});