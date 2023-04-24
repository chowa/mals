import { Components, Theme } from '@mui/material';

export default <Components<Theme>>{
    MuiCard: {
        styleOverrides: {
            root: ({ theme }) => ({
                position: 'relative',
                boxShadow: theme.customShadows.card,
                borderRadius: 2 * theme.shape.borderRadius,
                zIndex: 0
            })
        }
    },
    MuiCardHeader: {
        defaultProps: {
            titleTypographyProps: {
                variant: 'h6'
            },
            subheaderTypographyProps: (theme: Theme) => ({
                variant: 'body2',
                marginTop: theme.spacing(0.5)
            })
        },
        styleOverrides: {
            root: ({ theme }) => ({
                padding: theme.spacing(3, 3, 0)
            })
        }
    },
    MuiCardContent: {
        styleOverrides: {
            root: ({ theme }) => ({
                padding: theme.spacing(4)
            })
        }
    }
};
