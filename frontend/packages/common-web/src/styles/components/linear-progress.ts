import { Components, Theme, CSSInterpolation } from '@mui/material';
import { colors } from '@mals/common-web/styles/theme';
import {alpha} from '@mui/material/styles';

export default <Components<Theme>>{
    MuiLinearProgress: {
        styleOverrides: {
            root: ({ theme, ownerState }) => {
                const colorTheme: CSSInterpolation[] = colors.map(color => {
                    if (color === ownerState.color) {
                        return {
                            backgroundColor: alpha(theme.palette[color].main, 0.24)
                        }
                    }

                    return {};
                });

                const root = {
                    borderRadius: 4,
                    '& .MuiLinearProgress-bar': {
                        borderRadius: 4
                    },
                    ...(ownerState.variant === 'buffer' && {
                        backgroundColor: 'transparent'
                    })
                }

                return colorTheme.concat([root]);
            }
        }
    }
};
