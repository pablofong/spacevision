import React, {useEffect} from 'react';
import IssSection from '../../components/IssSection';
import Footer from '../../components/Footer';
const ISS = () => {
    useEffect(() => {
        document.title = 'About JSS';
    }, []);

    return (
        <div style={{ overflow: 'hidden'}}>
            <IssSection/>
            <Footer/>
        </div>
    );
};

export default ISS;