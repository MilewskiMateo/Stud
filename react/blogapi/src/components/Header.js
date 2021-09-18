import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

export const Header = () => {
    const classes = useStyles();
    return (
        <AppBar
            position="static"
            color="white"
            elevation={0}
            className={classes.appBar}
        >
            <Typography variant="h6" color="inherit" noWrap>
                wow
            </Typography>

        </AppBar>
    );
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
}));
