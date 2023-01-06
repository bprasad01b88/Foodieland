import React from 'react'

const LogOut = (props) => {
  
    const token = localStorage.getItem('login')
    console.log(token);
    // To clear a specific item
localStorage.removeItem(token);

// To clear the whole data stored in localStorage
localStorage.clear();
props.history.push('/login')
}

export default LogOut