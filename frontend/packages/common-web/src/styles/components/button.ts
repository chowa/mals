import { Components, Theme, CSSInterpolation } from '@mui/material';

export default <Components<Theme>>{
    MuiButton: {
        styleOverrides: {
            root: ({ ownerState }) => {
                let ret: CSSInterpolation = {
                    boxShadow: 'none'
                };

                if (ownerState.size === 'small') {
                    ret = Object.assign({}, ret, {
                        height: 30,
                        fontSize: 13
                    });
                }

                if (ownerState.size === 'large') {
                    ret = Object.assign({}, ret, {
                        height: 48,
                        fontSize: 15
                    });
                }

                return ret;
            }
        }
    },
    MuiLoadingButton: {
        variants: [{
            props: {
                loading: false,
                loadingPosition: 'start',
                size: 'small'
            },
            style: {
                '& .MuiLoadingButton-loadingIndicatorStart': {
                    left: 10
                }
            }
        }, {
            props: {
                loading: false,
                loadingPosition: 'end',
                size: 'small'
            },
            style: {
                '& .MuiLoadingButton-loadingIndicatorEnd': {
                    right: 10
                }
            }
        }],
        styleOverrides: {
            loadingIndicatorStart: {
                left: 14
            },
            loadingIndicatorEnd: {
                right: 14
            }
        }
    }
};
