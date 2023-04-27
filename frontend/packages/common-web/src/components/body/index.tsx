import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import * as React from 'react';

export interface BodyProps {
    children?: ReactNode;
}

function Body({ children }: BodyProps) {
    return <Box sx={{height: '100%'}}>{ children }</Box>
}

export default Body;
