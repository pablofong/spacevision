import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import theme from '../../styles';

const useSyles = makeStyles({
    navbarContainer: {
        position: 'fixed',
        zIndex: 1000,
        width: '100%',
        display: 'flex',
        padding: '1rem 0',
        backgroundColor: theme.palette.primary.main,
        transition: 'top 0.5s',
    },
    elementContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'space-around',
        boxSizing: 'border-box',
        backgroundColor: 'transparent',
    },
    buttonContainer: {
        ...theme.globals.containerXCenter,
        padding: 5,
    },
    button: {
        ...theme.typography.button,
        color: theme.palette.white.main,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    },
    menuItem: {
        ...theme.typography.menuItems,
        margin: '0 3rem',
        color: theme.palette.white.main,
        fontFamily: 'Montserrat',
        fontWeight: 400,
        textAlign: 'center',
        fontSize: '1.8rem',

        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '18px',
        },
    },
})
const Footer = () => {
    const classes = useSyles();
    return (
        <div className={classes.navbarContainer}>
            <div className={classes.elementContainer}>
                <div className={classes.buttonContainer}>
                    <a
                        href='/'
                    >
                        <button className={classes.button}>
                            Explore
                        </button>
                    </a>
                </div>
                <div className={classes.buttonContainer}>
                    <a
                        href='/ISS'
                    >
                        <button className={classes.button}>
                            About ISS
                        </button>
                    </a>
                </div>
                <div className={classes.buttonContainer}>
                    <a
                        href='/Resources'
                    >
                        <button className={classes.button}>
                            Resources
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Footer;
