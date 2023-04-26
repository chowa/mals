import SvgIcon from '@mui/material/SvgIcon';
import { SxProps } from '@mui/material';

function CloseIcon({ sx }: { sx?: SxProps }) {
    return (
        <SvgIcon sx={{ width:20, height: 20, ...sx }}>
            <path fill={'currentColor'} d={'m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z'}/>
        </SvgIcon>
    );
}

export default CloseIcon;
