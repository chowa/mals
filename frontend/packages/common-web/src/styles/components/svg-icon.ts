import { Components, Theme } from '@mui/material';

export default <Components<Theme>>{
    MuiSvgIcon: {
        styleOverrides: {
            fontSizeLarge: {
                width: 32,
                height: 32,
                fontSize: 'inherit'
            }
        }
    }
};
