import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="nav-bar">
      <div>
        <Link to="/">
            <img src="https://creatr-seed.s3.amazonaws.com/creatr_logo_transparent1.png" alt="logo is broken" className="logo" />
        </Link>
        <Link to='/explore'>Explore</Link>
      </div>
      <div className="login-signup">
          <a href="#/login" className="loginbutton">Log In</a>
          &nbsp;   &nbsp;
        {/* <Link to="/signup">Sign Up</Link> */}
        <a href="#/signup" className="signupbutton">Sign Up</a>
      </div>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="nav-bar">
      <div>
        <Link to="/">
            <img src="https://creatr-seed.s3.amazonaws.com/creatr_logo_transparent1.png" alt="logo is broken" className="logo" />
        </Link>
        <Link to='/explore'>Explore</Link>
      </div>
      <div>
        <h2 className="header-name">Hi, {currentUser.first_name}!</h2>
        <button className="logout-button" onClick={logout}>Log Out</button>
      </div>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Navbar;
