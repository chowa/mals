import { Components, Theme } from '@mui/material';
import type {} from '@mui/x-data-grid/themeAugmentation';

export default <Components<Theme>>{
    MuiDataGrid: {
        styleOverrides: {
            root: {
                borderRadius: 0,
                border: '1px solid transparent',

                '& .MuiTablePagination-root': {
                    borderTop: 0
                }
            },
            cell: ({ theme }) => ({
                borderBottom: `1px solid ${theme.palette.divider}`
            }),
            columnSeparator: ({ theme }) => ({
                color: theme.palette.divider
            }),
            toolbarContainer: ({ theme }) => ({
                padding: theme.spacing(2),
                backgroundColor: theme.palette.background.neutral,

                '& .MuiButton-root': {
                    marginRight: theme.spacing(1.5),
                    color: theme.palette.text.primary,

                    '&:hover': {
                        backgroundColor: theme.palette.action.hover
                    }
                }
            }),
            paper: ({ theme }) => ({
                boxShadow: theme.customShadows.dropdown
            }),
            menu: ({ theme }) => ({
                '& .MuiPaper-root': {
                    boxShadow: theme.customShadows.dropdown
                },
                '& .MuiMenuItem-root': {
                    ...theme.typography.body2,
                    '& .MuiListItemIcon-root': {
                        minWidth: 'auto'
                    }

                }
            }),
            panelFooter: ({ theme }) => ({
                padding: theme.spacing(2),
                justifyContent: 'flex-end',
                borderTop: `1px solid ${theme.palette.divider}`,

                '& .MuiButton-root': {
                    '&:first-of-type': {
                        marginRight: theme.spacing(1.5),
                        color: theme.palette.text.primary,

                        '&:hover': {
                            backgroundColor: theme.palette.action.hover
                        }
                    },

                    '&:last-of-type': {
                        color: theme.palette.common.white,
                        backgroundColor: theme.palette.primary.main,

                        '&:hover': {
                            backgroundColor: theme.palette.primary.dark
                        }
                    }
                }
            }),
            filterForm: ({ theme }) => ({
                padding: theme.spacing(1.5, 0),

                '& .MuiFormControl-root': {
                    margin: theme.spacing(0, .5)
                },
                '& .MuiInput-root': {
                    marginTop: theme.spacing(3),

                    '&::before, &::after': {
                        display: 'none'
                    },

                    '& .MuiNativeSelect-select, .MuiInput-input': {
                        ...theme.typography.body2,
                        padding: theme.spacing(.75, 1),
                        borderRadius: theme.shape.borderRadius,
                        backgroundColor: theme.palette.background.neutral
                    },
                    '& .MuiSvgIcon-root': {
                        right: 4
                    }
                }
            })
        }
    }
};
