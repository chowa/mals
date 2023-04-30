import { styled } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { alpha } from '@mui/material/styles';
import { ThemeLayout } from '@mals/common-web/stores/setting';
import Box from '@mui/material/Box';

export const StyledAppBar = styled(AppBar, { shouldForwardProp: prop => prop !== 'scrollTop' && prop !== 'layout' })<{
    scrollTop: number;
    layout: ThemeLayout;
}>(({ theme, scrollTop, layout }) => ({
    height: scrollTop > 100 || layout === 'vertical' ? 60 : 92,
    backdropFilter: 'blur(6px)',
    backgroundColor: alpha(
        theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.grey[900],
        layout === 'vertical' ? 1 : 0.8
    ),
    boxShadow: 'none',
    transition: 'height 0.2s ease-in-out',
    width: layout === 'vertical' ? '100%' : `calc(100% - ${layout === 'horizontal' ? 281 : 89}px)`
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5)
    },
    height: '100%'
}));

export const ActionWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'flex-end',

    '& .MuiButtonBase-root': {
        marginLeft: theme.spacing(1.5)
    }
}));
