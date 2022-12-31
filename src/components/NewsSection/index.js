import { makeStyles } from '@material-ui/core/styles';
import theme from '../../styles';
import image from '../../resources/images/galaxy.jpg';
import YoutubeEmbed from '../YoutubeEmbed';


const useStyles = makeStyles({
    container: {
        ...theme.globals.containerYCenter,
        width: '100%',
        height: '100%',
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

const NewsSection = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.container}>

                <div className={classes.satelliteSectionContainer}>
                    <div className={classes.textContainer}>
                        <p className={classes.heading3}> Checkout the latest NASA News!</p>
                        <p className={classes.medium}>Nasa Live Stream - Earth From Space : Live Views from the ISS</p>
                    </div>
                        <YoutubeEmbed embedId="86YLFOog4GM" />
                </div>
            </div>
        </>
    );
};
export default NewsSection;