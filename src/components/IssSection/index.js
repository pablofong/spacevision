import { makeStyles } from '@material-ui/core/styles';
import theme from '../../styles';
import image from '../../resources/images/Iss.jpg';
import image2 from '../../resources/images/galaxy2.jpg';
import image3 from '../../resources/images/astronaut.jpg';
import image4 from '../../resources/images/abiss.png';
import image5 from '../../resources/images/abiss2.png';
import image6 from '../../resources/images/abiss3.png';

import Gallery1 from '../Gallery1';

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
        textAlign: 'center',
        margin: 0,
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
    image4: {
        right: 200,
        top: 300,
        height: 500,
        width: 500,

    },
    imageContainer: {
        ...theme.globals.containerYCenter,
        width: '50%',
    },
    sectionContainer: {
        ...theme.globals.containerXCenter,
        margin: 0,
        padding: 0,
    },
});

const IssSection = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.container} style={{ marginTop: '0rem', paddingBottom: '3rem', backgroundImage: `url(${image})` }}>
                <div className={classes.heroSectionContainer}>
                    <div className={classes.sectionContainer}>
                        <div className={classes.textContainer}>
                            <p className={classes.heading3}>WHAT IS ISS?</p>
                            <p className={classes.small}>ISS stands for International Space Station, this is a large spacecraft in orbit around our planet, at an average altitude of 248 miles (400 kilometers). It circles the globe every 90 minutes at a speed of about 17,500 mph (28,000 km/h). It is a multinational collaborative project between Europe, the United States, Russia, Canada and Japan, that serves as a home where crews of astronauts and cosmonauts live. The ISS is also a laboratory, NASA is using the space station to learn more about living and working in space. These lessons will make it possible to send humans farther into space than ever before.</p>
                        </div>
                        <div className={classes.imageContainer}>
                            <img src={image4} alt={''} height={500} width={500} />
                        </div>
                    </div>
                </div>
                <p className={classes.heading4}>Gallery</p>
            </div>
            <Gallery1 />
            <div className={classes.container} style={{ backgroundImage: `url(${image2})`, backgroundSize: 'cover' }}>
                <div className={classes.heroSectionContainer}>
                    <div className={classes.sectionContainer}>
                        <div className={classes.textContainer}>
                            <p className={classes.heading3}>CONTRIBUTIONS</p>
                            <p className={classes.small}>There have been many scientific and technological breakthroughs thanks to the Space Station. The contributions from it vary from a new way to monitor our planet, to growing food with minor gravity. There are many things we can attribute to the ISS, some of them include research for many conditions such as heart disease, cancer and asthma. Also, the investigators in the ISS are searching for methods to combat muscle atrophy and bone loss.</p>
                        </div>
                        <div className={classes.imageContainer}>
                            <img src={image5} alt={''} height={500} width={500} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.container} style={{ backgroundImage: `url(${image3})`, backgroundSize: 'cover' }}>
                <div className={classes.heroSectionContainer}>
                    <div className={classes.sectionContainer}>
                        <div className={classes.textContainer}>
                            <p className={classes.heading3}>MISSION</p>
                            <p className={classes.small}>The mission of the International Space Station is to enable long-term exploration of space and provide benefits to people on Earth. With six state-of-the-art laboratories, the Space Station will be the premiere research facility in space, four times larger and more capable than any previous space station.</p>
                        </div>

                        <div className={classes.imageContainer}>
                            <img src={image6} alt={''} height={400} width={400} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default IssSection;