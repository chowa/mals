import { Components, Theme } from '@mui/material';

export default <Components<Theme>>{
    MuiTabs: {
        defaultProps: {
            textColor: 'inherit',
            allowScrollButtonsMobile: !0,
            variant: 'scrollable'
        },
        styleOverrides: {
            scrollButtons: {
                width: 48,
                borderRadius: '50%'
            }
        }
    },
    MuiTab: {
        defaultProps: {
            disableRipple: !0,
            iconPosition: 'start'
        },
        styleOverrides: {
            root: ({ theme, ownerState }) => ({
                padding: 0,
                opacity: 1,
                minWidth: 48,
                fontWeight: theme.typography.fontWeightMedium,
                '&:not(:last-of-type)': {
                    marginRight: theme.spacing(3),
                    [theme.breakpoints.up('sm')]: {
                        marginRight: theme.spacing(5)
                    }
                },
                '&:not(.Mui-selected)': {
                    color: theme.palette.text.secondary
                },
                ...((ownerState.iconPosition === 'start' || ownerState.iconPosition === 'end') && {
                    minHeight: 48
                })
            })
        }
    }
};
