import React from 'react';
import Footer from '../common/Footer';
import Subscription from '../common/Subscription';
import ReceipeDirection from './ReceipeDirection';
import ReceipeInfo from './ReceipeInfo';
import ReceipeIngrediants from './ReceipeIngrediants';
import TopReceipe from './TopReceipe';

function Receipes(props) {

  const receipeId = props.match.params.receipeId;
  

    return (
        <>
          <ReceipeInfo receipeId={receipeId} />
          <ReceipeIngrediants receipeId={receipeId} />    
          <ReceipeDirection receipeId={receipeId} />  
          <Subscription />
          <TopReceipe receipeId={receipeId}/>
          <Footer />        
        </>
    );
}

export default Receipes;