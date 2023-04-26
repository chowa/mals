import { styled } from '@mui/system';
import { alpha } from '@mui/material/styles';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const ScrollBar = styled(SimpleBar)(({ theme }) => ({
    maxHeight: '100%',
    padding: theme.spacing(2.5, 2.5, 0),

    '& .simplebar-scrollbar::before': {
        backgroundColor: alpha(theme.palette.grey[600], 0.48)
    }
}));

export default ScrollBar;
