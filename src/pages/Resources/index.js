import React, {useEffect} from 'react';
import Resource from '../../components/Resource';
import Footer from '../../components/Footer';
const Resources = () => {
    useEffect(() => {
        document.title = 'About JSS';
    }, []);

    return (
        <div style={{ overflow: 'hidden'}}>
            <Resource/>
            <Footer/>
        </div>
    );
};

export default Resources;