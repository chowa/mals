import { Components, Theme } from '@mui/material';

export default <Components<Theme>>{
    MuiPopover: {
        styleOverrides: {
            paper: ({ theme }) => ({
                boxShadow: theme.customShadows.dropdown,
                borderRadius: 1.5 * theme.shape.borderRadius
            })
        }
    }
};
