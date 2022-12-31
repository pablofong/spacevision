import { makeStyles } from '@material-ui/core/styles';
import theme from '../../styles';
import video from '../../resources/videos/satellite.mp4';


const useStyles = makeStyles({
    container: {
        ...theme.globals.containerYCenter,
        width: '100%',
        height: '100vh',
        padding: '5rem 10rem ',
        [theme.breakpoints.down('sm')]: {
            ...theme.globals.containerYFlexstart,
            padding: '5rem',
        },
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100vh',
        objectFit: 'cover',
        zIndex: '-4',
        //filter: 'blur(.3rem)',
    },
    heroSectionContainer: {
        ...theme.globals.containerYCenter,
        zIndex: '999',
    },
    imageContainer: {
        ...theme.globals.containerXFlexend,
        marginTop: '4rem',
        position: 'absolute',
        zIndex: '-1',
        [theme.breakpoints.down('md')]: {
            margin: 0,
        },
    },
    textContainer: {
        ...theme.globals.containerYCenter,
        maxHeight: '100%',
        padding: 0,
        zIndex: '4',
        [theme.breakpoints.down('md')]: {},
    },
    heading2: {
        ...theme.typography.heading2,
        fontWeight: 'bolder',
        textAlign: 'center',
        margin: 0,
        color: theme.palette.white.main,
        filter: 'opacity(70%)',
    },
    heading3: {
        ...theme.typography.heading3,
        fontWeight: 'bolder',
        margin: 0,
        textAlign: 'center',
        color: theme.palette.placeholder.main,
    },
    heading4: {
        ...theme.typography.medium,
        textAlign: 'center',
        color: theme.palette.white.main,
    },
    small: {
        ...theme.typography.small,
        color: theme.palette.tertiary.main,
        backgroundColor: 'white',
        fontWeight: 'bolder',
    }
});

const HeroSection = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.container}>
                <video className={classes.background} playsInline autoPlay loop muted>
                    <source src={video} type='video/mp4' />
                </video>

                <div className={classes.heroSectionContainer}>
                    <div className={classes.textContainer}>  
                        <p className={classes.small}> Track the Space Station in 3D with Team SpaceVision </p>
                        <p className={classes.heading2}>Ready to explore space? </p>
                        <p className={classes.heading4}>Scroll down to explore....</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default HeroSection;