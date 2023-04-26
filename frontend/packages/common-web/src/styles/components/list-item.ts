import { Components, Theme } from '@mui/material';

export default <Components<Theme>>{
    MuiListItemIcon: {
        styleOverrides: {
            root: ({ theme }) => ({
                color: 'inherit',
                minWidth: 'auto',
                marginRight: theme.spacing(2)
            })
        }
    },
    MuiListItemAvatar: {
        styleOverrides: {
            root: ({ theme }) => ({
                minWidth: 'auto',
                marginRight: theme.spacing(2)
            })
        }
    },
    MuiListItemText: {
        styleOverrides: {
            root: {
                marginTop: 0,
                marginBottom: 0
            },
            multiline: {
                marginTop: 0,
                marginBottom: 0
            }
        }
    }
};
