import { Components, Theme } from '@mui/material';

export default <Components<Theme>>{
    MuiTooltip: {
        styleOverrides: {
            tooltip: ({ theme }) => ({
                backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 800 : 700]
            }),
            arrow: ({ theme }) => ({
                color: theme.palette.grey[theme.palette.mode === 'light' ? 800 : 700]
            })
        }
    }
};
