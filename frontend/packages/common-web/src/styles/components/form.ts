import { Components, Theme } from '@mui/material';

export default <Components<Theme>>{
    MuiFormControlLabel: {
        styleOverrides: {
            label: ({ theme }) => ({
                ...theme.typography.body2
            })
        }
    },
    MuiFormHelperText: {
        defaultProps: {
            component: 'div'
        },
        styleOverrides: {
            root: ({ theme }) => ({
                marginTop: theme.spacing(1)
            })
        }
    },
    MuiFormLabel: {
        styleOverrides: {
            root: ({ theme }) => ({
                color: theme.palette.text.disabled
            })
        }
    }
};
