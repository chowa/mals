import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { ThemeLayout } from '@mals/common-web/stores/setting';
import { alpha } from '@mui/material/styles';
import { ThemeContrast } from '@mals/common-web/styles/theme';

export const StyledNav = styled(Box, { shouldForwardProp: prop => prop !== 'layout' })<{ layout: ThemeLayout }>(
    ({ layout }) => ({
        flexShrink: 0,
        width: layout === 'horizontal' ? 280 : 88,
        position: 'relative'
    })
);

export const TriggerBtn = styled(IconButton, { shouldForwardProp: prop => prop !== 'contrast' && prop !== 'layout' })<{
    contrast: ThemeContrast;
    layout: ThemeLayout;
}>(({ theme, contrast, layout }) => ({
    padding: theme.spacing(0.5),
    border: `1px dashed ${alpha(theme.palette.grey[500], 0.24)}`,
    top: 22,
    left: layout === 'horizontal' ? 268 : 76,
    position: 'fixed',
    backdropFilter: 'blur(6px)',
    backgroundColor:
        theme.palette.mode === 'light'
            ? alpha(contrast === 'default' ? theme.palette.common.white : theme.palette.grey[100], 0.48)
            : alpha(theme.palette.grey[900], 0.48),
    zIndex: 1101,

    '&:hover': {
        backgroundColor:
            theme.palette.mode === 'light'
                ? alpha(contrast === 'default' ? theme.palette.common.white : theme.palette.grey[100], 0.48)
                : alpha(theme.palette.grey[900], 0.48)
    }
}));

export const ScrollWrapper = styled(Box, { shouldForwardProp: prop => prop !== 'layout' })<{ layout: ThemeLayout }>(
    ({ theme, layout }) => ({
        height: '100%',
        borderRight: `1px dashed ${alpha(theme.palette.grey[500], 0.24)}`,
        paddingBottom: theme.spacing(2),
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: layout === 'horizontal' ? 280 : 88
    })
);

export const AccoutBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 2.5),
    borderRadius: theme.spacing(1.5),
    backgroundColor: alpha(theme.palette.grey[500], 0.12),
    margin: theme.spacing(3, 2.5, 2)
}));
