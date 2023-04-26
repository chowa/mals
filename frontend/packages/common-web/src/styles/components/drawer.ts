import { Components, Theme } from '@mui/material';
import { alpha } from '@mui/material/styles';

export default <Components<Theme>>{
    MuiDrawer: {
        styleOverrides: {
            root:({ theme, ownerState }) => ({
                ...(ownerState.variant === 'temporary' && {
                    "& .MuiDrawer-paper": {
                        boxShadow: `-40px 40px 80px -8px ${alpha(theme.palette.mode === 'light' ? theme.palette.grey[500] : theme.palette.common.black, .24)}`
                    }
                })
            })
        }
    }
};
