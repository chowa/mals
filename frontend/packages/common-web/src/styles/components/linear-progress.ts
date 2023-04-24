import { Components, Theme } from '@mui/material';

export default <Components<Theme>>{
    MuiLinearProgress: {
        styleOverrides: {
            root: {
                borderRadius: 4,

                '& .MuiLinearProgress-bar': {
                    borderRadius: 4
                }
            }
        }
    }
};
