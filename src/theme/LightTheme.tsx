import { createMuiTheme } from '@material-ui/core';
import React from 'react';

const LightTheme = createMuiTheme({
    typography: {
        button: {
            textTransform: 'none',
        },
    },
    props: {
        MuiTextField: {
            variant: 'outlined',
        },
    },
});

export default LightTheme;
