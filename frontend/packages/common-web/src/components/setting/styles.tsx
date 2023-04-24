import { styled, alpha } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';

export const CustomDrawer = styled(Drawer)(({ theme }) => ({
    '.MuiPaper-root': {
        width: 260,
        backdropFilter: 'blur(6px)',
        backgroundColor: alpha(theme.palette.background.paper, 0.9),
        backgroundImage: 'none',
        boxShadow: theme.palette.mode === 'light' ? 'rgba(145, 158, 171, 0.24) -40px 40px 80px -8px' : 'rgba(0, 0, 0, 0.24) -40px 40px 80px -8px'
    }
}))
