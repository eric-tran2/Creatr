import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="nav-bar">
      <div className="home-button">
      <Link to="/">
      <h1>Creatr</h1>
      </Link>
      </div>
      <div className="login-signup">
      <Link to="/login">Log In</Link>
      &nbsp;   &nbsp;
      <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.first_name}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Navbar;
