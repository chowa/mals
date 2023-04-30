import { ReactNode } from 'react';
import DashboardLayout from '@mals/common-web/layouts/dashboard';

export interface LayoutsProps {
    children?: ReactNode;
}

function Layouts({ children }: LayoutsProps) {
    return <DashboardLayout>{children}</DashboardLayout>;
}

export default Layouts;
