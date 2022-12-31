import theme from '../../styles';
import { makeStyles } from '@material-ui/core/styles';
import Card from "../Card";

//Images
import card1 from '../../resources/images/card1.jpg';
import card2 from '../../resources/images/card2.jpg';
import card3 from '../../resources/images/card3.jpg';
import card4 from '../../resources/images/card4.jpg';

const useStyles = makeStyles({
    cardsContainer: {
        ...theme.globals.containerXCenter,
        margin: 0,
        padding: 0,
    }
})

const Gallery1 = () => {
    const classes = useStyles();
    return (
        <div className={classes.cardsContainer}>
            <Card
                image={card1}
                description={'The Special Purpose Dexterous Manipulator (SPDM), also known as Dextre, is pictured attached to the International Space Stations Canadarm2 robotic arm.'}
            />
            <Card
                image={card2}
                description={'The Soyuz MS-21 crew ship is docked to the Prichal module above the Caribbean Sea.'}
            />
            <Card
                image={card3}
                description={'The space station orbits above northwest Sudan'}
            />
            <Card
                image={card4}
                description={'Hurricane Ian is pictured from the International Space Station as it orbited 258 miles above the Caribbean Sea east of Belize.'}
            />
        </div>
    );
};

export default Gallery1;