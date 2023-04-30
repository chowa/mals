import { Components, Theme } from '@mui/material';
import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export default <Components<Theme>>{
    MuiRadio: {
        defaultProps: {
            icon: createElement(
                SvgIcon,
                {},
                createElement('path', {
                    d: 'M12 2A10 10 0 1 1 2 12C2 6.477 6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z'
                })
            ),
            checkedIcon: createElement(
                SvgIcon,
                {},
                createElement('path', {
                    d: 'M12 2A10 10 0 1 1 2 12C2 6.477 6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z'
                })
            )
        },
        styleOverrides: {
            root: ({ theme, ownerState }) => ({
                padding: theme.spacing(1),
                ...(ownerState.size === 'small' && {
                    '& svg': {
                        width: 20,
                        height: 20
                    }
                }),
                ...(ownerState.size === 'medium' && {
                    '& svg': {
                        width: 24,
                        height: 24
                    }
                })
            })
        }
    }
};
