import { Components, Theme } from '@mui/material';

export default <Components<Theme>>{
    MuiSlider: {
        defaultProps: {
            size: 'small'
        },
        styleOverrides: {
            root: ({ theme }) => ({
                '&.Mui-disabled': {
                    color: theme.palette.action.disabled
                }
            }),
            rail: {
                opacity: 0.32
            },
            markLabel: ({ theme }) => ({
                fontSize: 13,
                color: theme.palette.text.disabled
            }),
            valueLabel: ({ theme }) => ({
                borderRadius: 8,
                backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 800 : 700]
            })
        }
    }
};
