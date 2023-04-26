import { Components, Theme, CSSInterpolation } from '@mui/material';
import { colors } from '@mals/common-web/styles/theme';
import { alpha } from '@mui/material/styles';

export default <Components<Theme>>{
    MuiPagination: {
        defaultProps: {
            color: 'primary'
        },
        styleOverrides: {
            root: ({ theme, ownerState }) => {
                const colorTheme: CSSInterpolation[] = colors.map(color => {
                    if (ownerState.color === color) {
                        return {
                            '& .MuiPaginationItem-root': {
                                '&.Mui-selected': {
                                    color: theme.palette[color][theme.palette.mode === 'light' ? 'dark' : 'light'],
                                    backgroundColor: alpha(theme.palette[color].main, 0.16),
                                    '&:hover': {
                                        backgroundColor: alpha(theme.palette[color].main, 0.32)
                                    }
                                }
                            }
                        }
                    }

                    return {};
                });

                const root = {
                    '& .MuiPaginationItem-root': {
                        ...(ownerState.variant === 'outlined' && {
                            borderColor: alpha(theme.palette.grey[500], 0.32)
                        }),
                        '&.Mui-selected': {
                            fontWeight: theme.typography.fontWeightMedium
                        }
                    }
                };

                return colorTheme.concat([root]);
            }
        }
    }
};
