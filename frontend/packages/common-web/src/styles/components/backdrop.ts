import { Components, Theme } from '@mui/material';
import { alpha } from '@mui/material/styles';

export default <Components<Theme>>{
    MuiBackdrop: {
        styleOverrides: {
            root: ({ theme }) => ({
                backgroundColor: alpha(theme.palette.grey[800], 0.8)
            }),
            invisible: {
                background: 'transparent'
            }
        }
    }
};
