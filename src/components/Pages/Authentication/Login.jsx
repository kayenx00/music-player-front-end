import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Login(params) {
  const navigate = new useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const handleClick= async () => {
    params.setIsLoggedin(true)
}
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
  console.log(response.data.object.token);
  localStorage.setItem('token', response.data.object.token)
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
            <form action=""></form>
            <Link to = "/songs">
                <button onClick={e => handleClick()}>
                    Login
                </button>
            </Link>

            <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter User Name"
                  name="username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <span>              
                <button className="btn btn-primary btn-block">Login</button>
                <button className="btn btn-primary btn-block" onClick = {() => handleBack()}>Back</button>
              </span>
            </form>
          </div>
        </div>
        </div>
     );
}

export default Login;