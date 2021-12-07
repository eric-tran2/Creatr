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
        {/* <div>
          <input type="text"placeholder="Search"className="searchbar"/>
        </div> */}
      <div className="login-signup">
          <a href="#/login" className="loginbutton">Log In</a>
          &nbsp;   &nbsp;
        {/* <Link to="/signup">Sign Up</Link> */}
        <a href="#/signup" className="signupbutton">Sign Up</a>
      </div>
    </nav>
  );
  const personalGreetingBar = () => (
    <div className="nav-bar" id="personalGreetingBar">
        <Link to='/explore'><img src="https://creatr-seed.s3.amazonaws.com/creatr_logo_inversed.png" alt="logo is broken" className="logo" /></Link>

        <Link to={`/user/${currentUser.id}`} className="youButton">
          <i className="fa fa-user"></i>
        </Link>

        <Link to='/explore' className="exploreButton">
          <i className="fa fa-search"></i>
        </Link>

      {/* <input type="text"placeholder="Search"className="searchbar"/> */}
      
        <Link to='/upload' className="uploadButton">
            <i className="fa fa-cloud-upload"></i>
        </Link>
      
      <div className="header-name">
        <span>Hi, {currentUser.first_name}!</span>
      </div>
    
      <div className="logout-div">
        <a className="logout-button" onClick={logout}>Log Out</a>
      </div>
    </div>
  );

  return currentUser ? personalGreetingBar() : sessionLinks();
};


export default Navbar;
