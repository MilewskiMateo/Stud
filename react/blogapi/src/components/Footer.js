import React from 'react';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));


function Footer() {
    const classes = useStyles();
    return (
        <Container maxWidth="md" component="footer" className={classes.footer}>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © Mateusz Milewski.'}
            </Typography>
        </Container>
    );
}

export default Footer;
