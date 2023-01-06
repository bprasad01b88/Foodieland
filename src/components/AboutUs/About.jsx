import React from 'react';
import AboutBanner from './AboutBanner';
import Footer from '../common/Footer';
import Testimony from './Testimony';
import AboutReceipe from './AboutReceipe';
import Subscription from '../common/Subscription';
function About(props) {
    return (
      <>
        <AboutBanner />
        <Testimony />
        <Subscription />
        <AboutReceipe />
        <Footer />
      </>
    );
}

export default About;