import { Components, Theme } from '@mui/material';

export default <Components<Theme>>{
    MuiCssBaseline: {
        styleOverrides: {
            'html, body, #root': {
                width: '100%',
                height: '100%'
            },
            input: {
                '&[type=number]': {
                    MozAppearance: 'textfield',
                    '&::-webkit-outer-spin-button': {
                        margin: 0,
                        WebkitAppearance: 'none'
                    },
                    '&::-webkit-inner-spin-button': {
                        margin: 0,
                        WebkitAppearance: 'none'
                    }
                }
            },
            img: {
                display: 'block',
                maxWidth: '100%'
            },
            ul: {
                margin: 0,
                padding: 0
            }
        }
    }
};
