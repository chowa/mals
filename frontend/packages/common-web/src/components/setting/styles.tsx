import { styled } from '@mui/system';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CardActionArea from '@mui/material/CardActionArea';

export const TriggerWrapper = styled(Box)(({ theme }) => ({
    padding: 4,
    right: 24,
    bottom: 24,
    zIndex: 999,
    position: 'fixed',
    borderRadius: '50%',
    boxShadow: `-12px 12px 32px -4px ${alpha(theme.palette.mode ==='light' ? theme.palette.grey[600] : theme.palette.common.black, 0.36)}`,
    backdropFilter: 'blur(6px)',
    backgroundColor: alpha(theme.palette.mode ==='light' ? theme.palette.common.white : theme.palette.grey[900], 0.8)
}));

export const Dot = styled(Box)(({ theme }) => ({
    top: 8,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: '50%',
    position: 'absolute',
    backgroundColor: theme.palette.error.main
}));

export const SettingDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        width: 260,
        backdropFilter: 'blur(6px)',
        backgroundColor: alpha(theme.palette.mode ==='light' ? theme.palette.grey[100] : theme.palette.grey[900], 0.9),
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
    },
    '& .MuiModal-backdrop': {
        background: 'transparent'
    }
}));

export const SettingHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2, 1, 2, 2.5),

    h6: {
        fontSize: 16,
        lineHeight: '24px',
        flexGrow: 1
    }
}));

export const SettingButton = styled(CardActionArea, { shouldForwardProp: (prop) => prop !== 'active' && prop !== 'simple' })<{ active: boolean, simple?: boolean }>(({ theme, active, simple }) => ({
    width: '100%',
    border: `1px solid ${alpha(theme.palette.grey[500], 0.12)}`,
    borderRadius: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.mode === 'light' ? theme.palette.grey[500] : theme.palette.grey[600],
    fontWeight: 600,

    ...(active && {
        color: theme.palette.primary.main,
        ...(!simple && {
            border: `1px solid ${alpha(theme.palette.grey[500], 0.24)}`,
            boxShadow: `0px 12px 24px -4px ${alpha(theme.palette.mode === 'light' ? theme.palette.grey[500] : theme.palette.common.black, 0.16)}`
        })
    })
}));

export const Section = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20
});

export const SectionHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: theme.palette.mode === 'light' ? theme.palette.grey[600] : theme.palette.grey[500]
}));

export const OptionsWrapper = styled('div', { shouldForwardProp: (prop) => prop !== 'grid' })<{ grid: number }>(({ theme, grid }) => ({
    display: 'grid',
    gap: theme.spacing(1),
    gridTemplateColumns: `repeat(${grid}, 1fr)`,
    marginTop: theme.spacing(1.5)
}));

export const SkretchAnim = styled(Box, { shouldForwardProp: (prop) => prop !== 'active' })<{ active: boolean }>(({ active }) => ({
    display: 'flex',
    width: '24%',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'width 0.3s ease-in-out',

    '& .size-line': {
        flexGrow: 1,
        borderBottom: '1.5px dashed currentcolor'
    },

    ...(active && {
        width: '50%',

        '& .MuiSvgIcon-root:first-of-type': {
            transform: 'rotate(-180deg)'
        },

        '& .MuiSvgIcon-root:last-of-type': {
            transform: 'rotate(180deg)'
        }
    })
}));

export const PresetsBtn = styled(CardActionArea, { shouldForwardProp: (prop) => prop !== 'active' })<{ active: boolean }>(({ theme, active }) => ({
    width: '100%',
    height: 48,
    border: `1px solid ${alpha(theme.palette.grey[500], 0.12)}`,
    borderRadius: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.main,

    ...(active && {
        borderColor: theme.palette.primary.main,
        backgroundColor: alpha(theme.palette.primary.main, 0.08)
    })
}));

export const Presets = styled(Box, { shouldForwardProp: (prop) => prop !== 'active' && prop !== 'color' })<{ active: boolean, color: string }>(({ active, color }) => ({
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: color,

    ...(active && {
        width: 24,
        height: 24,
        boxShadow: `-2px 4px 8px 0 ${alpha(color, 0.48)}`
    })
}));
