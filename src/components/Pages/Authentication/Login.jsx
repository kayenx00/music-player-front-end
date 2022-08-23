import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Login(params) {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const handleClick= async () => {
    params.setIsLoggedin(true)
}
return ( 
        <div>
            <form action=""></form>
            <Link to = "/add/Song">
                <button onClick={e => handleClick()}>
                    Login
                </button>
            </Link>

            <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Song Name"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Song Author"
                  name="author"
                  value={author}
                  onChange={e => setAuthor(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Song Genre"
                  name="genre"
                  value={genre}
                  onChange={e => setGenre(e.target.value)}
                />
              </div>
              <span>              
                <button className="btn btn-primary btn-block">Update Song</button>
                <button className="btn btn-primary btn-block" onClick = {() => handleBack()}>Back</button>
              </span>
            </form>
          </div>
        </div>
        </div>
     );
}

export default Login;