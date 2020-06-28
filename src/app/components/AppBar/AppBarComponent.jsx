import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../Navbar';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)'
    }
}));
export default function AppBarComponent() {
    const classes = useStyles();

    return (
        <nav className={classes.root}>
            <Navbar variant="small" />
        </nav>
    );
}
