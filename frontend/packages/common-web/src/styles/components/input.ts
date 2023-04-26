import { Components, Theme } from '@mui/material';
import { alpha } from '@mui/material/styles';

export default <Components<Theme>>{
    MuiInputBase: {
        styleOverrides: {
            root: ({ theme }) => ({
                "&.Mui-disabled": {
                    "& svg": {
                        color: theme.palette.text.disabled
                    }
                }
            }),
            input: ({ theme }) => ({
                "&::placeholder": {
                    opacity: 1,
                    color: theme.palette.text.disabled
                }
            })
        }
    },
    MuiInput: {
        styleOverrides: {
            underline: ({ theme }) => ({
                "&:before": {
                    borderBottomColor: alpha(theme.palette.grey[500], 0.56)
                },
                "&:after": {
                    borderBottomColor: theme.palette.text.primary
                }
            })
        }
    },
    MuiTextField: {
        styleOverrides: {
            root: ({ theme }) => ({
                "& .MuiInputLabel-root.Mui-focused": {
                    color: theme.palette.text.primary
                }
            })
        }
    },
    MuiFilledInput: {
        styleOverrides: {
            root: ({ theme }) => ({
                borderRadius: theme.shape.borderRadius,
                backgroundColor: alpha(theme.palette.grey[500], 0.08),
                "&:hover": {
                    backgroundColor: alpha(theme.palette.grey[500], 0.16)
                },
                "&.Mui-focused": {
                    backgroundColor: alpha(theme.palette.grey[500], 0.16)
                },
                "&.Mui-disabled": {
                    backgroundColor: theme.palette.action.disabledBackground
                }
            }),
            underline: {
                "&:before, :after": {
                    display: "none"
                }
            }
        }
    },
    MuiOutlinedInput: {
        styleOverrides: {
            root: ({ theme }) => ({
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: alpha(theme.palette.grey[500], 0.32)
                },
                "&.Mui-focused": {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderWidth: 1,
                        borderColor: theme.palette.text.primary
                    }
                },
                "&.Mui-disabled": {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.action.disabledBackground
                    }
                }
            })
        }
    }
};
