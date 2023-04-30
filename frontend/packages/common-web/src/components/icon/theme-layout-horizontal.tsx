import Box from '@mui/material/Box';

function ThemeLayoutHorizontalIcon() {
    return (
        <Box sx={{ width: 54, height: 42, display: 'flex' }}>
            <Box
                sx={{ width: 16, height: 42, backgroundColor: 'currentcolor', marginRight: '4px', borderRadius: '4px' }}
            />
            <Box sx={{ flexGrow: 1, position: 'relative' }}>
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        opacity: 0.16,
                        backgroundColor: 'currentcolor',
                        borderRadius: '4px'
                    }}
                />
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        border: '1px dashed currentcolor',
                        borderRadius: '4px',
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}
                />
            </Box>
        </Box>
    );
}

export default ThemeLayoutHorizontalIcon;
