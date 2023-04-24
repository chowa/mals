import { Components, Theme } from '@mui/material';

export default <Components<Theme>>{
    MuiTypography: {
        styleOverrides: {
            paragraph: ({ theme }) => ({
                marginBottom: theme.spacing(2)
            }),
            gutterBottom: ({ theme }) => ({
                marginBottom: theme.spacing(1)
            })
        }
    }
};
