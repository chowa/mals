import { Components, Theme } from '@mui/material';

export default <Components<Theme>>{
    MuiPaper: {
        defaultProps: {
            elevation: 0
        },
        styleOverrides: {
            root: {
                backgroundImage: 'none'
            }
        }
    }
};
