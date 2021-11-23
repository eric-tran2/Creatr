import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="nav-bar">
      <div>
        <Link to="/">
            <img src="https://creatr-seed.s3.amazonaws.com/creatr_logo_more_transparent.png" alt="logo is broken" className="logo" />
        </Link>
        
      </div>
      <div>
        <input type="text"placeholder="🔎 Photos 📷 "className="searchbar"/></div>
      <div className="login-signup">
          <a href="#/login" className="loginbutton">Log In</a>
          &nbsp;   &nbsp;
        {/* <Link to="/signup">Sign Up</Link> */}
        <a href="#/signup" className="signupbutton">Sign Up</a>
      </div>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="nav-bar" id="personalGreeting">
      <div>
        <Link to='/explore'><img src="https://creatr-seed.s3.amazonaws.com/creatr_logo_inversed.png" alt="logo is broken" className="logo" /></Link>
        <Link to={`user/${currentUser.id}`} className="youButton">You</Link>
        <Link to='/explore' className="exploreButton">Explore</Link>
        <Link to='/upload' className="uploadButton">Upload</Link>
      </div>
      <input type="text"placeholder="🔎 Photos 📷 "className="searchbar"/>
      <div>
        <h2 className="header-name">Hi, {currentUser.first_name}!</h2>
        <button className="logout-button" onClick={logout}>Log Out</button>
      </div>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Navbar;
