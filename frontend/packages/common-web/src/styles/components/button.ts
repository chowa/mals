import { Components, Theme, CSSInterpolation } from '@mui/material';
import { colors } from '@mals/common-web/styles/theme';
import { alpha } from '@mui/material/styles';

export default <Components<Theme>>{
    MuiButton: {
        defaultProps: {
            disableElevation: true
        },
        styleOverrides: {
            root: ({ ownerState, theme }) => {
                const colorTheme: CSSInterpolation[] = colors.map(color => {
                    if (ownerState.color === color && ownerState.variant === 'contained') {
                        return {
                            '&:hover': {
                                boxShadow: theme.customShadows[color]
                            }
                        };
                    }

                    return {};
                });

                const inherit = {
                    ...(ownerState.color === 'inherit' && {
                        ...(ownerState.variant === 'contained' && {
                            color: theme.palette.grey[800],
                            '&:hover': {
                                boxShadow: theme.customShadows.z8,
                                backgroundColor: theme.palette.grey[400]
                            }
                        }),
                        ...(ownerState.variant === 'outlined' && {
                            borderColor: alpha(theme.palette.grey[500], 0.32),
                            '&:hover': {
                                borderColor: theme.palette.text.primary,
                                backgroundColor: theme.palette.action.hover
                            }
                        }),
                        ...(ownerState.variant === 'text' && {
                            '&:hover': {
                                backgroundColor: theme.palette.action.hover
                            }
                        })
                    })
                };

                const disabled = {
                    '&.Mui-disabled': {
                        backgroundColor: theme.palette.action.disabledBackground
                    }
                };

                const size = {
                    ...(ownerState.size === 'small' && {
                        height: 30,
                        fontSize: 13
                    }),
                    ...(ownerState.size === 'large' && {
                        height: 48,
                        fontSize: 15
                    })
                };

                return colorTheme.concat([inherit, disabled, size]);
            }
        }
    },
    MuiLoadingButton: {
        variants: [
            {
                props: {
                    loading: false,
                    loadingPosition: 'start',
                    size: 'small'
                },
                style: {
                    '& .MuiLoadingButton-loadingIndicatorStart': {
                        left: 10
                    }
                }
            },
            {
                props: {
                    loading: false,
                    loadingPosition: 'end',
                    size: 'small'
                },
                style: {
                    '& .MuiLoadingButton-loadingIndicatorEnd': {
                        right: 10
                    }
                }
            }
        ],
        styleOverrides: {
            loadingIndicatorStart: {
                left: 14
            },
            loadingIndicatorEnd: {
                right: 14
            }
        }
    },
    MuiToggleButton: {
        styleOverrides: {
            root: ({ theme, ownerState }) => {
                const standard = {
                    ...(ownerState.color === 'standard' && {
                        borderColor: 'inherit'
                    })
                };

                const colorTheme: CSSInterpolation[] = colors.map(color => {
                    if (ownerState.color === color) {
                        return {
                            '&:hover': {
                                borderColor: alpha(theme.palette[color].main, 0.48),
                                backgroundColor: alpha(theme.palette[color].main, theme.palette.action.hoverOpacity)
                            },
                            '&.Mui-selected': {
                                borderColor: theme.palette[color].main
                            }
                        };
                    }

                    return {};
                });

                const selected = {
                    '&.Mui-disabled': {
                        '&.Mui-selected': {
                            color: theme.palette.action.disabled,
                            backgroundColor: theme.palette.action.selected,
                            borderColor: theme.palette.action.disabledBackground
                        }
                    }
                };

                return colorTheme.concat([standard, selected]);
            }
        }
    },
    MuiToggleButtonGroup: {
        styleOverrides: {
            root: ({ theme }) => ({
                borderRadius: theme.shape.borderRadius,
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${alpha(theme.palette.grey[500], 0.16)}`
            }),
            grouped: ({ theme }) => ({
                margin: 4,
                borderColor: 'transparent !important',
                borderRadius: `${theme.shape.borderRadius}px !important`
            })
        }
    },
    MuiButtonGroup: {
        defaultProps: {
            disableElevation: true
        },
        styleOverrides: {
            root: ({ theme, ownerState }) => {
                const colorTheme: CSSInterpolation[] = colors.map(color => {
                    return {
                        '& .MuiButtonGroup-grouped': {
                            ...(ownerState.variant !== 'outlined' &&
                                ownerState.color === color &&
                                ownerState.variant === 'contained' && {
                                    borderColor: alpha(theme.palette[color].dark, 0.48)
                                }),
                            ...(ownerState.variant === 'contained' && {
                                borderColor: alpha(theme.palette[color].dark, 0.48)
                            })
                        }
                    };
                });

                const lastChild = {
                    '& .MuiButtonGroup-grouped': {
                        ...(ownerState.variant !== 'outlined' && {
                            borderStyle: 'solid'
                        }),
                        ...(ownerState.color === 'inherit' && {
                            borderColor: alpha(theme.palette.grey[500], 0.32)
                        }),
                        ...(ownerState.orientation === 'horizontal' && {
                            borderWidth: '0px 1px 0px 0px'
                        }),
                        ...(ownerState.orientation === 'vertical' && {
                            borderWidth: '0px 0px 1px 0px'
                        })
                    }
                };

                const disabled = {
                    '& .MuiButtonGroup-grouped.Mui-disabled': {
                        '&:not(:last-of-type)': {
                            borderColor: theme.palette.action.disabledBackground
                        }
                    }
                };

                return colorTheme.concat([lastChild, disabled]);
            }
        }
    }
};
