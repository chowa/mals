import {Components, Theme} from '@mui/material';

export default <Components<Theme>>{
    MuiStepConnector: {
        styleOverrides: {
            line: ({ theme }) => ({
                borderColor: theme.palette.divider
            })
        }
    }
};
