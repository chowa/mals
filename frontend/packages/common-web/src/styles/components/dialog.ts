import { Components, Theme } from '@mui/material';

export default <Components<Theme>>{
    MuiDialog: {
        styleOverrides: {
            paper: ({ theme }) => ({
                boxShadow: theme.customShadows.dialog,

                '&.MuiPaper-rounded': {
                    borderRadius: 2 * theme.shape.borderRadius
                },
                '&.MuiDialog-paperFullScreen': {
                    borderRadius: 0
                },
                '&.MuiDialog-paper .MuiDialogActions-root': {
                    padding: theme.spacing(3)
                },
                '@media (max-width: 600px)': {
                    margin: theme.spacing(2)
                },
                '@media (max-width: 663.95px)': {
                    '&.MuiDialog-paperWidthSm.MuiDialog-paperScrollBody': {
                        maxWidth: '100%'
                    }
                }
            }),
            paperFullWidth: {
                width: '100%'
            }
        }
    },
    MuiDialogTitle: {
        styleOverrides: {
            root: ({ theme }) => ({
                padding: theme.spacing(3)
            })
        }
    },
    MuiDialogContent: {
        styleOverrides: {
            root: ({ theme }) => ({
                padding: theme.spacing(0, 3)
            }),
            dividers: ({ theme }) => ({
                borderTop: 0,
                borderBottomStyle: 'dashed',
                paddingBottom: theme.spacing(3)
            })
        }
    },
    MuiDialogActions: {
        styleOverrides: {
            root: ({ theme }) => ({
                '& > :not(:first-of-type)': {
                    marginLeft: theme.spacing(1.5)
                }
            })
        }
    }
};
