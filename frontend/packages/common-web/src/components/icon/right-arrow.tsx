import SvgIcon from '@mui/material/SvgIcon';
import { SxProps } from '@mui/material';

function RightArrowIcon({ sx }: { sx?: SxProps }) {
    return (
        <SvgIcon sx={{ width: 16, height: 16, ...sx }}>
            <path fill="currentColor" d="M7.15 21.1q-.375-.375-.375-.888t.375-.887L14.475 12l-7.35-7.35q-.35-.35-.35-.875t.375-.9q.375-.375.888-.375t.887.375l8.4 8.425q.15.15.213.325T17.6 12q0 .2-.063.375t-.212.325L8.9 21.125q-.35.35-.863.35T7.15 21.1Z"/>
        </SvgIcon>
    );
}

export default RightArrowIcon;
