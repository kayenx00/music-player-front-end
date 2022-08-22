import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Login(params) {

const handleClick=()=> {
    params.setIsLoggedin(true)
}
return ( 
        <div>
            <Link to = "/add/Song">
                <button onClick={e => handleClick()}>
                    Login
                </button>
            </Link>
        </div>
     );
}

export default Login;