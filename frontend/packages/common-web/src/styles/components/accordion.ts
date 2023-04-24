import { Components, Theme } from '@mui/material';

export default <Components<Theme>>{
    MuiAccordion: {
        styleOverrides: {
            root: ({ theme }) => ({
                backgroundColor: 'transparent',
                '&.Mui-expanded': {
                    boxShadow: theme.customShadows.z8,
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: theme.palette.background.paper
                },
                '&.Mui-disabled': {
                    backgroundColor: 'transparent'
                }
            })
        }
    },

    MuiAccordionSummary: {
        styleOverrides: {
            root: ({ theme }) => ({
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(1),
                '&.Mui-disabled': {
                    opacity: 1,
                    color: theme.palette.action.disabled,
                    '& .MuiTypography-root': {
                        color: 'inherit'
                    }
                }
            }),
            expandIconWrapper: {
                color: 'inherit'
            }
        }
    }
};
