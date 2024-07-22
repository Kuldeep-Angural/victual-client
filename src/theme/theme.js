import { createTheme } from '@mui/material';
import { blue, green, orange, red } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#FF9800',
        },
        secondary: {
            main: '#795548',
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
    }
});
