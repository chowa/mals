import { Components, Theme } from '@mui/material';

export default <Components<Theme>>{
    MuiBadge: {
        styleOverrides: {
            dot: {
                width: 10,
                height: 10,
                borderRadius: '50%'
            }
        }
    }
};
