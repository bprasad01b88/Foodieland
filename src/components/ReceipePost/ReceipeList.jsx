import React from 'react';
import Footer from '../common/Footer';
import Subscription from '../common/Subscription';
import ReceipeHeader from './ReceipeHeader';

function ReceipeList(props) {
    const token = localStorage.getItem('login')
  console.log(token);
  if(token === null){
    props.history.push('/login')
  }
    return (
        <>
            <ReceipeHeader />
            <Subscription />
            <Footer />
        </>
    );
}

export default ReceipeList;