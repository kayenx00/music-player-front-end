import React from 'react';
import { Link } from 'react-router-dom';
function NotFoundError() {
return ( 
<div>
    <img
      src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
      alt="not-found"
    />
    <Link to="/">
      Go Home
    </Link>
  </div>)
}

export default NotFoundError;
