import React from 'react';
import { motion } from 'framer-motion';
import Logo from '@mals/common-web/components/logo';
import Box from '@mui/material/Box';
import { useTheme, alpha } from '@mui/material/styles';
import styles from '@mals/common-web/components/loading/style';

function Loading() {
    const theme = useTheme();

    return (
        <Box sx={styles.root}>
            <motion.div
                animate={{
                    scale: [1, 0.9, 0.9, 1, 1],
                    opacity: [1, 0.48, 0.48, 1, 1]
                }}
                transition={{
                    ease: 'linear',
                    duration: 2,
                    repeatDelay: 1,
                    repeat: Infinity
                }}
            >
                <Logo sx={{width: 64, height: 64}} />
            </motion.div>
            <Box sx={styles.circle}>
                <motion.div
                    animate={{
                        scale: [1.6, 1, 1, 1.6, 1.6],
                        rotate: [270, 0, 0, 270, 270],
                        opacity: [0.25, 1, 1, 1, 0.25],
                        borderRadius: ['25%', '25%', '50%', '50%', '25%']
                    }}
                    transition={{
                        ease: 'linear',
                        duration: 3.2,
                        repeat: Infinity
                    }}
                    style={{
                        border: `3px solid ${alpha(theme.palette.primary.dark, 0.24)}`,
                        width: 100,
                        height: 100
                    }}
                />
            </Box>
            <Box sx={styles.circle}>
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1.2, 1, 1],
                        rotate: [0, 270, 270, 0, 0],
                        opacity: [1, 0.25, 0.25, 0.25, 1],
                        borderRadius: ['25%', '25%', '50%', '50%', '25%']
                    }}
                    transition={{
                        ease: 'linear',
                        duration: 3.2,
                        repeat: Infinity
                    }}
                    style={{
                        border: `8px solid ${alpha(theme.palette.primary.dark, 0.24)}`,
                        width: 120,
                        height: 120
                    }}
                />
            </Box>
        </Box>
    );
}

export default Loading;
