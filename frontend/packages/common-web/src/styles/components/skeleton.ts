import { Components, Theme } from '@mui/material';

export default <Components<Theme>>{
    MuiSkeleton: {
        defaultProps: {
            animation: 'wave'
        },
        styleOverrides: {
            root: ({ theme }) => ({
                backgroundColor: theme.palette.background.neutral
            })
        }
    }
};
