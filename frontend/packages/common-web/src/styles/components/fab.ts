import { Components, Theme, CSSInterpolation } from '@mui/material';
import { colors } from '@mals/common-web/styles/theme';

export default <Components<Theme>>{
    MuiFab: {
        defaultProps: {
            color: 'primary'
        },
        styleOverrides: {
            root: ({ ownerState, theme }) => {
                const colorTheme: CSSInterpolation[] = colors.map(color => {
                    if (
                        ownerState.color === color &&
                        (ownerState.variant === 'circular' || ownerState.variant === 'extended')
                    ) {
                        return {
                            boxShadow: theme.customShadows[color],

                            '&:hover': {
                                backgroundColor: theme.palette[color].dark
                            }
                        };
                    }

                    return {};
                });

                const root = {
                    '&:hover, &:active': {
                        boxShadow: 'none'
                    },

                    ...((ownerState.variant === 'circular' || ownerState.variant === 'extended') && {
                        ...((ownerState.color === 'default' || ownerState.color === 'inherit') && {
                            color: theme.palette.grey[800],
                            boxShadow: theme.customShadows.z8,
                            '&:hover': {
                                backgroundColor: theme.palette.grey[400]
                            }
                        })
                    }),
                    ...(ownerState.color === 'inherit' &&
                        theme.palette.mode === 'dark' && {
                            color: 'inherit',
                            backgroundColor: theme.palette.grey[800],
                            '&:hover': {
                                backgroundColor: theme.palette.grey[700]
                            }
                        })
                };

                return colorTheme.concat([root]);
            }
        }
    }
};
