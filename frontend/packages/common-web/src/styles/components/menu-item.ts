import { Components, Theme } from '@mui/material';

export default <Components<Theme>>{
    MuiMenuItem: {
        styleOverrides: {
            root: ({ theme }) => ({
                '&.Mui-selected': {
                    backgroundColor: theme.palette.action.selected,

                    '&:hover': {
                        backgroundColor: theme.palette.action.hover
                    }
                }
            })
        }
    }
};
