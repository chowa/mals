import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeLayout } from '@mals/common-web/stores/setting';

export const StyledBox = styled(Box, { shouldForwardProp: prop => prop !== 'layout' })<{ layout: ThemeLayout }>(
    ({ theme, layout }) => ({
        flexGrow: 1,
        padding: theme.spacing(12.5, 2),
        width: layout === 'vertical' ? '100%' : `calc(100% - ${layout === 'horizontal' ? 281 : 89}px)`
    })
);

export const StyledContainer = styled(Container, {
    shouldForwardProp: prop => prop !== 'stretch' && prop !== 'analytic'
})<{ stretch: boolean; analytic: boolean }>(({ stretch, theme, analytic }) => ({
    ...(stretch && {
        [theme.breakpoints.up('lg')]: {
            maxWidth: '100%'
        }
    }),
    ...(analytic && {
        [theme.breakpoints.up('xl')]: {
            maxWidth: theme.breakpoints.values['xl']
        }
    })
}));
