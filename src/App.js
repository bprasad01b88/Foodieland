import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Nav from './components/common/NavBar';
import HomeComponent from './components/Home/HomeComponent';
import BlogLists from './components/BlogList/BlogLists';
import Contacts from './components/ContactUs/Contacts';
import NotFound from './components/Notfound/NotFound';
import About from './components/AboutUs/About';
import BlogPosts from './components/BlogPost/BlogPosts';
import ReceipeList from './components/ReceipePost/ReceipeList';
import Receipes from './components/Receipes/Receipes';
import Login from './components/Login/Login';
import LogOut from './components/Login/LogOut';


function App() {

  return (
    <React.Fragment>
    <Nav />
    <Switch>
      <Route path="/home" component={HomeComponent}/>
      <Route path="/receipelists" component={ReceipeList}/>
      <Route path="/receipeposts/:receipeId" component={Receipes}/>
      <Route path="/bloglists" component={BlogLists}/>
      <Route path="/blogposts/:blogId" component={BlogPosts} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/about" component={About} />
      <Route path="/not-found" component={NotFound} />
      <Route path="/login" component={Login}/>
      <Route path="/logout" component={LogOut}/>
      <Redirect from='/' exact to='/home'/>
      <Redirect exact to='/not-found' />
    </Switch>
    </React.Fragment>
  );
}

export default App;
