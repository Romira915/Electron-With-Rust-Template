import { createMuiTheme } from '@material-ui/core';
import React from 'react';

const DarkTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#CB4BEB',
        },
        type: 'dark',
    },
    typography: {
        button: {
            textTransform: 'none',
        },
        fontSize: 16,
        fontFamily: [
            'Noto Sans JP',
            'sans-serif',
            'Noto Serif JP',
            'serif',
        ].join(','),
    },
    props: {
        MuiTextField: {
            variant: 'outlined',
        },
    },
});

export default DarkTheme;
