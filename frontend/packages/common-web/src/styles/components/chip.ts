import { Components, Theme } from '@mui/material';
import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { colors } from '@mals/common-web/styles/theme';
import { alpha } from '@mui/material/styles';

export default <Components<Theme>>{
    MuiChip: {
        defaultProps: {
            deleteIcon: createElement(SvgIcon, {}, createElement('path', {d: 'M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,9.3478351 20.9464316,6.80429597 19.0710678,4.92893219 C17.195704,3.0535684 14.6521649,2 12,2 Z M14.71,13.29 C14.8993127,13.4777666 15.0057983,13.7333625 15.0057983,14 C15.0057983,14.2666375 14.8993127,14.5222334 14.71,14.71 C14.5222334,14.8993127 14.2666375,15.0057983 14,15.0057983 C13.7333625,15.0057983 13.4777666,14.8993127 13.29,14.71 L12,13.41 L10.71,14.71 C10.5222334,14.8993127 10.2666375,15.0057983 10,15.0057983 C9.73336246,15.0057983 9.4777666,14.8993127 9.29,14.71 C9.10068735,14.5222334 8.99420168,14.2666375 8.99420168,14 C8.99420168,13.7333625 9.10068735,13.4777666 9.29,13.29 L10.59,12 L9.29,10.71 C8.89787783,10.3178778 8.89787783,9.68212217 9.29,9.29 C9.68212217,8.89787783 10.3178778,8.89787783 10.71,9.29 L12,10.59 L13.29,9.29 C13.6821222,8.89787783 14.3178778,8.89787783 14.71,9.29 C15.1021222,9.68212217 15.1021222,10.3178778 14.71,10.71 L13.41,12 L14.71,13.29 Z'}))
        },
        styleOverrides: {
            root: ({ theme, ownerState }) => {
                const colorTheme = colors.map(color => {
                    if (ownerState.color === color) {
                        return {
                            "& .MuiChip-avatar": {
                                color: theme.palette[color].lighter,
                                backgroundColor: theme.palette[color].dark
                            },
                            ...(ownerState.variant === 'filled' && {
                                "& .MuiChip-deleteIcon": {
                                    color: alpha(theme.palette[color].contrastText, .56),

                                    "&:hover": {
                                        color: theme.palette[color].contrastText
                                    }
                                }
                            })
                        }
                    }

                    return {};
                });

                const child = {
                    ...(ownerState.color === 'default' && {
                        "& .MuiChip-avatar": {
                            color: theme.palette.text[theme.palette.mode === 'light' ? "secondary" : "primary"],
                            backgroundColor: alpha(theme.palette.grey[500], 0.48)
                        }
                    }),
                    ...(ownerState.variant === 'outlined' && {
                        border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`
                    })
                };

                return colorTheme.concat([child]);
            }
        }
    }
};
