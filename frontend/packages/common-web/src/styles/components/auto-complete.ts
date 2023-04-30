import { Components, Theme } from '@mui/material';
import { alpha } from '@mui/material/styles';

export default <Components<Theme>>{
    MuiAutocomplete: {
        styleOverrides: {
            root: ({ theme }) => ({
                '& span.MuiAutocomplete-tag': {
                    ...theme.typography.body2,
                    width: 24,
                    height: 24,
                    lineHeight: '24px',
                    textAlign: 'center',
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: alpha(theme.palette.grey[500], 0.16),
                    color: theme.palette.primary.light
                }
            }),
            paper: ({ theme }) => ({
                boxShadow: theme.customShadows.dropdown
            }),
            listbox: ({ theme }) => ({
                padding: theme.spacing(0, 1)
            }),
            option: ({ theme }) => ({
                ...theme.typography.body2,
                padding: theme.spacing(1),
                margin: theme.spacing(0.75, 0),
                borderRadius: theme.shape.borderRadius
            })
        }
    }
};
