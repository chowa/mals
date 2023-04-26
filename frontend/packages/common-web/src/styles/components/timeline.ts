import { Components, Theme } from '@mui/material';

export default <Components<Theme>>{
    MuiTimelineDot: {
        styleOverrides: {
            root: {
                boxShadow: 'none'
            }
        }
    },
    MuiTimelineConnector: {
        styleOverrides: {
            root: ({ theme }: { theme: Theme }) => ({
                backgroundColor: theme.palette.divider
            })
        }
    }
};
