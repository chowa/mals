import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Header from '@mals/common-web/layouts/dashboard/header';
import Content from '@mals/common-web/layouts/dashboard/content';
import Nav from '@mals/common-web/layouts/dashboard/nav';

interface DashboardLayoutProps {
    children?: ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <Box sx={{ height: '100%' }}>
            <Header />

            <Box sx={{ minHeight: '100%', display: 'flex' }}>
                <Nav />
                <Content>{children}</Content>
            </Box>
        </Box>
    );
}

export default DashboardLayout;
