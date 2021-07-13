import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


import { AuthRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Navbar from './navbar/navbar_container';
import PhotoContainer from './photos/photos_container';
import SplashMessage from './splash_page/splash_page';
import Footer from './footer/footer';


const App = () => (
  <div>
    <header>
      <Navbar />
    </header>
    <Footer />

    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} /> 
      <AuthRoute exact path="/" component={SplashMessage} />
    </Switch>
    <Route exact path='/explore' component={PhotoContainer}/>
  </div>
);

export default App;

// '../../app/assets/images/flickr_logo.png'
