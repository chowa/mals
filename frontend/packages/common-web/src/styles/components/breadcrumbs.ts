import { Components, Theme } from '@mui/material';

export default <Components<Theme>>{
    MuiBreadcrumbs: {
        styleOverrides: {
            separator: ({ theme }) => ({
                marginLeft: theme.spacing(2),
                marginRight: theme.spacing(2)
            }),
            li: ({ theme }) => ({
                display: 'inline-flex',
                margin: theme.spacing(0.25, 0),

                '& > *': {
                    ...theme.typography.body2
                }
            })
        }
    }
};
