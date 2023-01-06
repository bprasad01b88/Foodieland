import React from 'react';
import TopReceipe from './TopReceipe';
import Footer from '../common/Footer';
import BannerContact from './bannerContact';
import Subscription from '../common/Subscription';


function Contacts(props) {
    return (
        <>
            <BannerContact />
            <Subscription />
            <TopReceipe />
            <Footer />
        </>
    );
}

export default Contacts;