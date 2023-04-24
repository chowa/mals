import { Components, Theme, CSSInterpolation } from '@mui/material';

export default <Components<Theme>>{
    MuiFab: {
        defaultProps: {
            color: 'primary'
        },
        styleOverrides: {
            root: ({ ownerState, theme }) => {
                let ret: CSSInterpolation = {
                    '&:hover, &:active': {
                        boxShadow: 'none'
                    }
                };

                if ((ownerState.color === 'default' || ownerState.color === 'inherit') && (ownerState.variant === 'circular' || ownerState.variant === 'extended')) {
                    ret = Object.assign({}, ret, {
                        color: theme.palette.grey[800],
                        boxShadow: theme.customShadows.z8,

                        '&:hover': {
                            backgroundColor: theme.palette.grey[400]
                        }
                    });
                }

                if (theme.palette.mode !== 'light') {
                    ret = Object.assign({}, ret, {
                        color: 'inherit',
                        backgroundColor: theme.palette.grey[800],

                        '&:hover': {
                            backgroundColor: theme.palette.grey[700]
                        }
                    });
                }

                if (ownerState.color === 'default' && theme.palette.mode !== 'light') {
                    ret = Object.assign({}, ret, {
                        color: theme.palette.text.secondary
                    });
                }

                return ret;
            }
        }
    }
};
