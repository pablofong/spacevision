import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import theme from '../../styles';
import { motion } from 'framer-motion';
import cardImage from '../../resources/images/galaxy.jpg';

const useStyles = makeStyles({
    containerYSpacebetween: {
        ...theme.globals.containerYSpacebetween,
        height: '100%',
        width: '25%',
        // paddingVertical: '2rem',
        [theme.breakpoints.down('md')]: {
            height: '100%',
            padding: 0,
            margin: 'auto',
        },
        [theme.breakpoints.down('sm')]: {
            padding: 0,
            margin: 'auto',
        },
    },

    content: {
        ...theme.globals.containerColumnCenterLeft,
        // backgroundColor: 'red',
        alignItems: 'center',
        flexDirection: 'column ',
        [theme.breakpoints.down('sm')]: {
            padding: '0.5rem',
        },
    },

    small: {
        fontSize: '1.2rem',
        display: (showDescription) => (showDescription ? 'block' : 'none'),
        color: theme.palette.white.main,
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            display: (showDescription) => (showDescription ? 'block' : 'block'),
            position: 'relative',
            backgroundColor: 'transparent',
            height: 'auto',
            width: 'auto',
            color: '#ffffff',
        },
        [theme.breakpoints.up('xl')]: {
            width: 'auto',
            ...theme.typography.heading4,
            color: theme.palette.white.main,
        },
    },
    image: {
        width: '100%',
        height: '25vh',
        zIndex: 1,
    },
});

const Card = (props) => {
    const [showDescription, setShowDescription] = useState(false);
    const classes = useStyles(showDescription);

    return (
        <motion.div
            className={classes.containerYSpacebetween}
            whileHover={{ scale: 1 }}
            onHoverStart={() => setShowDescription(true)}
            onHoverEnd={() => setShowDescription(false)}
        >
            <div
                className={classes.image}
                style={{
                    background: ` linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url(${props.image || cardImage
                        }
                ) center center/cover no-repeat`,
                }}
            >
                <div className={classes.content}>
                    <p className={classes.small}>
                        {props.description || 'Descripción'}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;
