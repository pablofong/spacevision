import React, {useEffect} from 'react';
import HeroSection from '../../components/HeroSection';
import SatelliteSection from '../../components/SatelliteSection';
import NewsSection from '../../components/NewsSection';
import Footer from '../../components/Footer';
const Explore = () => {
    useEffect(() => {
        document.title = 'Explore';
    }, []);

    return (
        <div style={{ overflow: 'hidden'}}>
            <HeroSection/>
            <SatelliteSection/>
            <NewsSection/>
            <Footer/>
        </div>
    );
};

export default Explore;