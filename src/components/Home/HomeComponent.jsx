import React from 'react';
import AllCategory from './AllCategory';
import Banner from './Banner';
import Receipes from './Receipes';
import Chef from './Chef';
import InstaPost from './InstaPost';
import AllReceipe from './AllReceipe';
import Footer from '../common/Footer';
import Subscription from '../common/Subscription';

const HomeComponent = (props) => {
   
    return ( 
        <>
        <Banner />
        <AllCategory />
        <Receipes />
        <Chef />
        <InstaPost />
        <AllReceipe />
        <Subscription />
        <Footer />
        </>
     );
}
 
export default HomeComponent;