import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import fbLogo from '../../../img/fb-logo.png'
import googleLogo from '../../../img/google-logo.png'
import githubLogo from '../../../img/github-logo.png'
import './Login.css'
function Login(params) {
  const navigate = new useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
//   const handleClick = async () => {
//     const DateOfLastLogin = new Date();
//     localStorage.setItem('token', "blaa")
//     localStorage.setItem('DateOfLastLogin', DateOfLastLogin);
//     params.setIsLoggedin(true)
//     navigate('/');
// }
  const  onSubmit = async (e) => {
    e.preventDefault()
    const axios = require('axios');
    const data = JSON.stringify({
      "username": username,
      "password": password
        });

  const config = {
    method: 'post',
    url: 'http://localhost:8080/api/login',
    headers: { 
      'Content-Type': 'application/json', 
    },
    data : data
  };

await axios(config)
.then(function (response) {
  const DateOfLastLogin = new Date();
  // console.log(response.data.object.token);
  localStorage.setItem('token', response.data.object.token)
  localStorage.setItem('DateOfLastLogin', DateOfLastLogin);
  params.setIsLoggedin(true)
  navigate("/songs")
})
.catch(function (error) {
  console.log(error);
});
} 

  const handleBack = () => {
    navigate("/")
}
  return ( 
        <div>
            {/* <button onClick={() => handleClick()}>
                Login
            </button> */}
            <form action=""></form>



          <div className="login-container">
          <div className="login-content">
            <h2 className="login-title">Login</h2>
            <div className="social-login">
                <a className="btn btn-block social-btn google" href = "https://accounts.google.com/">
                    <img src={googleLogo} alt="Google" /> Log in with Google</a>
                <a className="btn btn-block social-btn facebook" href = "https://www.facebook.com/" >
                    <img src={fbLogo} alt="Facebook" /> Log in with Facebook</a>
                <a className="btn btn-block social-btn github" href = "https://github.com/">
                    <img src={githubLogo} alt="Github" /> Log in with Github</a>
            </div>
            <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-item">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter User Name"
                  name="username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="form-item">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="form-item">
                <span>              
                  <button className="btn btn-primary btn-block">Login</button>
                  <button className="btn btn-primary btn-block" onClick = {() => handleBack()}>Back</button>
                </span>

              </div>
              
            </form>
          </div>
        </div>
        </div>
     );
}

export default Login;