import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export default makeStyles<Theme>(theme => createStyles({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cubeGrid: {
        width: 50,
        height: 50,
    },
    '@keyframes suspensing': {
        '0%, 100%, 70%': {
            transform: 'scale3d(1, 1, 1)'
        },
        '35%': {
            transform: 'scale3d(0, 0, 1)'
        }
    },
    cube: {
        width: '33%',
        height: '33%',
        float: 'left',
        background: theme.palette.primary.light,
        animation: '$suspensing 1.3s infinite ease-in-out',
    },
    cube1: {
        animationDelay: '0.2s'
    },
    cube2: {
        animationDelay: '0.3s'
    },
    cube3: {
        animationDelay: '0.4s'
    },
    cube4: {
        animationDelay: '0.1s'
    },
    cube5: {
        animationDelay: '0.2s'
    },
    cube6: {
        animationDelay: '0.3s'
    },
    cube7: {
        animationDelay: '0s'
    },
    cube8: {
        animationDelay: '0.1s'
    },
    cube9: {
        animationDelay: '0.2s'
    }
}), { name: 'suspense'});
