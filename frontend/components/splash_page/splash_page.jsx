import React from 'react';
import { Link } from 'react-router-dom';


const SplashMessage = () => (
  <div className="splashMsg">
    <h1 className="splashMsg1">Find your inspiration.</h1>
    <div className="splashMsg2">
    <h2>Join the Creatr community, home to tens of billions of photos and unlimited creators! </h2>
    </div>
    <br />
    <br />
    <br />
      <Link to="/signup" className="altsignupbutton">Start for free</Link>
  </div>
)


export default SplashMessage
