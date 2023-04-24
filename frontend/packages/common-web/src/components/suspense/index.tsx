import React from 'react';
import classNames from 'classnames';
import useStyles from '@mals/common-web/components/suspense/style';

function Suspense() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.cubeGrid}>
                <div className={classNames(classes.cube, classes.cube1)} />
                <div className={classNames(classes.cube, classes.cube2)} />
                <div className={classNames(classes.cube, classes.cube3)} />
                <div className={classNames(classes.cube, classes.cube4)} />
                <div className={classNames(classes.cube, classes.cube5)} />
                <div className={classNames(classes.cube, classes.cube6)} />
                <div className={classNames(classes.cube, classes.cube7)} />
                <div className={classNames(classes.cube, classes.cube8)} />
                <div className={classNames(classes.cube, classes.cube9)} />
            </div>
        </div>
    );
}

Suspense.displayName = 'Suspense';

export default Suspense;
