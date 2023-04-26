import { Components, Theme } from '@mui/material';

export default <Components<Theme>>{
    MuiTableContainer: {
        styleOverrides: {
            root: {
                position: 'relative'
            }
        }
    },
    MuiTableRow: {
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
    },
    MuiTableCell: {
        styleOverrides: {
            root: {
                borderBottom: 'none'
            },
            head: ({ theme }) => ({
                color: theme.palette.text.secondary,
                backgroundColor: theme.palette.background.neutral
            }),
            stickyHeader: ({ theme }) => ({
                backgroundColor: theme.palette.background.paper,
                backgroundImage: `linear-gradient(to bottom, ${theme.palette.background.neutral} 0%, ${theme.palette.background.neutral} 100%`
            }),
            paddingCheckbox: ({ theme }) => ({
                paddingLeft: theme.spacing(1)
            })
        }
    },
    MuiTablePagination: {
        defaultProps: {
            backIconButtonProps: {
                size: 'small'
            },
            nextIconButtonProps: {
                size: 'small'
            }
        },
        styleOverrides: {
            root: ({ theme }) => ({
                borderTop: `1px solid ${theme.palette.divider}`
            }),
            toolbar: {
                height: 64
            },
            actions: ({ theme }) => ({
                marginRight: theme.spacing(1)
            }),
            select: ({ theme }) => ({
                '&:focus': {
                    borderRadius: theme.shape.borderRadius
                }
            })
        }
    }
};
