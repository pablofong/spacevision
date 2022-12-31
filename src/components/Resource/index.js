import { makeStyles } from '@material-ui/core/styles';
import theme from '../../styles';
import image from '../../resources/images/Iss.jpg';
import credit from '../../resources/images/credits.jpeg';
const useStyles = makeStyles({
    container: {
        ...theme.globals.containerYCenter,
        width: '100%',
        height: '100vh',
        padding: '5rem 10rem ',
        // backgroundImage: `url(${image})`,        
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
    heroSectionContainer: {
        ...theme.globals.containerYFlexstartLeft,
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
        ...theme.globals.containerYFlexstartLeft,
        maxHeight: '100%',
        width: '50%',
        padding: 0,
        zIndex: '4',
        [theme.breakpoints.down('md')]: {},
    },
    heading4: {
        ...theme.typography.heading4,
        color: theme.palette.white.main,
        textAlign: 'left',
        margin: '2rem',
    },
    heading3: {
        ...theme.typography.heading3,
        fontWeight: 'bolder',
        textAlign: 'left',
        marginBottom: 2,
        color: theme.palette.white.main,
    },
    small: {
        ...theme.typography.small,
        textAlign: 'left',
        letterSpacing: 1,
        color: theme.palette.white.main,
    },
});

const Resource = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.container} style={{ marginTop: '0rem', paddingBottom: '3rem', backgroundImage: `url(${image})` }}>
                <div className={classes.heroSectionContainer}>
                    <div className={classes.textContainer}>
                        <p className={classes.heading4}>Resources for this project</p>
                        <img src={credit} alt={''} height={500} width={500} />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Resource;