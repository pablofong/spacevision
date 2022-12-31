import { makeStyles } from '@material-ui/core/styles';
import theme from '../../styles';
import image from '../../resources/images/galaxy.jpg';
import ModelCard from '../ModelCard';
import video from '../../resources/videos/videoGlobe.mp4';
import video2 from '../../resources/videos/videoModel.mp4';


const useStyles = makeStyles({
    container: {
        ...theme.globals.containerYCenter,
        width: '100%',
        height: '100vh',
        padding: '5rem 10rem ',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
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
    satelliteSectionContainer: {
        ...theme.globals.containerYFlexstart,
        marginTop: '5rem',
        zIndex: '999',
    },
    textContainer: {
        ...theme.globals.containerYFlexstartLeft,
        padding: 0,
        minHeight: 'auto',
        maxHeight: 'auto',
        margin: 0,
        zIndex: '4',
    },
    satelliteContainer: {
        marginTop: '1rem',
        ...theme.globals.containerXCenter,
        minHeight: 'none',
        padding: '2rem 0',
        alignItems: 'center',
        justifyContent: 'space-around',
        // backgroundColor: 'pink',
    },
    cardContainer: {
        ...theme.globals.containerYCenter,
        padding: '0 2rem',
        // backgroundColor: 'red',
    },
    heading3: {
        ...theme.typography.heading3,
        fontWeight: 'bolder',
        color: theme.palette.white.main,
        margin: 0,
    },
    medium: {
        ...theme.typography.small,
        textAlign: 'center',
        color: theme.palette.white.main,
    },
});

const SatelliteSection = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.container}>

                <div className={classes.satelliteSectionContainer}>
                    <div className={classes.textContainer}>
                        <p className={classes.heading3}>Explore the International Space Station </p>
                        <p className={classes.medium}>Here's a tridimensional model of the International Space Station</p>
                    </div>
                    <div className={classes.satelliteContainer}>
                        <div className={classes.cardContainer}>
                            <ModelCard
                                description={'aaa'}
                                video={video}
                                href={'https://andrecasmac.github.io/'}
                            />
                            <p className={classes.medium}>Orbit Tracker</p>
                        </div>
                        <div className={classes.cardContainer}>
                            <ModelCard
                                title={'aaa'}
                                video={video2}
                                href={'https://stellular-palmier-145e78.netlify.app/'}
                            />
                            <p className={classes.medium}>3D Model</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SatelliteSection;