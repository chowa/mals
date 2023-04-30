import Box from '@mui/material/Box';

function ThemeLayoutVerticalIcon() {
    return (
        <Box sx={{ width: 54, height: 42, display: 'flex', flexDirection: 'column' }}>
            <Box
                sx={{
                    width: 54,
                    height: 10,
                    backgroundColor: 'currentcolor',
                    marginBottom: '4px',
                    borderRadius: '2px'
                }}
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

export default ThemeLayoutVerticalIcon;
