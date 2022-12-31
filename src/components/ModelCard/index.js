import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import theme from '../../styles';
import { motion } from 'framer-motion';
import cardImage from '../../resources/images/galaxy.jpg';
// import video from '../../resources/videos/satellite.mp4';
import video from '../../resources/videos/videoGlobe.mp4';
const useStyles = makeStyles({
    containerYSpacebetween: {
        ...theme.globals.containerYSpacebetween,
        height: '100%',
        width: '100%',
        // paddingVertical: '2rem',
        borderRadius: 30,
        borderColor: 'white',
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
        borderRadius: 20,
        borderColor: 'white',
        // border: '.2rem solid',
        objectFit: 'cover',

        // zIndex: 99,
    },
    video: {
        width: '100%',
        height: '25vh',
        borderRadius: 20,
        borderColor: 'white',
        border: '.2rem solid',
        objectFit: 'cover',

        // zIndex: 99,
    },
    atag: {
        ...theme.globals.containerYSpacebetween,
        height: '100%',
        width: '100%',
        borderRadius: 30,
        borderColor: 'white',
        backgroundColor: 'white',
        textDecoration: 'none',
        padding: 0,
        justifyContent: 'center',
        margin: 'auto',
    },
});

const ModelCard = (props) => {
    const [showDescription, setShowDescription] = useState(false);
    const classes = useStyles(showDescription);

    return (
        <>
            <motion.a
                className={classes.atag}
                whileHover={{ scale: 1.1 }}
                href={props.href || '/'}
                target='_self'
                rel='noopener noreferrer'
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
                    <video className={classes.video} playsInline autoPlay loop muted>
                        <source src={props.video || video} type='video/mp4' />
                    </video>
                    <div className={classes.content}>

                    </div>
                </div>
            </motion.a>
        </>
    );
};

export default ModelCard;

