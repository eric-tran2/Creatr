import React from 'react';
import { Link } from 'react-router-dom';


const SplashMessage = () => {
  const images = [
    "https://creatr-seed.s3.amazonaws.com/splash_background3.jpg",
    "https://creatr-seed.s3.amazonaws.com/splash_background18.jpg",
  ]
  return (<div className="splashMsg">
    <img src={images[Math.floor(Math.random()*images.length)]} alt="is broken" />
    <h1 className="splashMsg1">Find your inspiration.</h1>
    <br />
    <div className="splashMsg2">
    <h2>Join the Creatr community, home to tens of billions of photos and unlimited creators! </h2>
    </div>
    <br />
    <br />
    <br />
      <Link to="/signup" className="altsignupbutton">Start for free</Link>
  </div>
  )  
}



export default SplashMessage
