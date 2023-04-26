import { Components, Theme } from '@mui/material';
import { alpha } from '@mui/material/styles';

export default <Components<Theme>>{
    MuiAvatar: {
        styleOverrides: {
            colorDefault: ({ theme }) => ({
                color: theme.palette.text.secondary,
                backgroundColor: alpha(theme.palette.grey[500], 0.24)
            })
        }
    },
    MuiAvatarGroup: {
        defaultProps: {
            max: 4
        },
        styleOverrides: {
            root: {
                justifyContent: 'flex-end'
            },
            avatar: ({ theme }) => ({
                fontSize: 16,
                fontWeight: theme.typography.fontWeightMedium,

                '&:first-of-type': {
                    fontSize: 12,
                    color: theme.palette.primary.main,
                    backgroundColor: theme.palette.primary.lighter
                }
            })
        }
    }
};
