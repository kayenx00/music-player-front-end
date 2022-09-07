import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import FetchSong from './components/Pages/HomePage/FetchSong';
import PlayAndViewAndUpdateSong from './components/Pages/PlayAndViewAndUpdateSong/PlayAndViewAndUpdateSong';
import AddSong from './components/Pages/AddSong/AddSong';
import NotFoundError from './components/Pages/Error/NotFoundError';
import Login from './components/Pages/Authentication/Login';
import ProtectedRoutes from './components/Pages/Authentication/ProtectedRoutes';
import Logout from './components/Pages/Authentication/Logout';
import NavBar from './components/Pages/NavBar/NavBar';
// import UpdateSongInfo from './components/Pages/ViewAndUpdateSong/UpdateSongInfo';
function App() {
  const token = localStorage.getItem('token')
  const [isLoggedin, setIsLoggedin] = useState(token ? true : false)
  if(token != null){
    const current = new Date();
    const currentToMilliseconds = current.getTime();
    const previous = localStorage.getItem('DateOfLastLogin')
    const previousDate = Date.parse(previous);
    // const a = previousDate.getTime();
    console.log("Previous " + previousDate);
    console.log("Current " + currentToMilliseconds);
    console.log(currentToMilliseconds - previousDate);
    const checkDuration = currentToMilliseconds - previousDate;
    if(checkDuration >= 5000){
      localStorage.removeItem('token');
      setIsLoggedin(false);
    }
  }

  console.log(isLoggedin)
  return (
    <div>
      <Router>
      <NavBar isAuth = {isLoggedin}
              setIsLoggedin = {setIsLoggedin}/>
        <Routes>
          {/* <Route exact path = "/" element = {<FetchSong />}/>
          <Route exact path = "/viewAndUpdate/:id" element = {<PlayAndViewAndUpdateSong/>} /> 
          <Route exact path = "/add/Song" element = {<AddSong/>} /> */}
          <Route exact path = "/" element = {<Login setIsLoggedin = {setIsLoggedin}/>}/>
          <Route element = {<ProtectedRoutes isLoggedin={isLoggedin}/>}>
            <Route exact path = "/songs" element = {<FetchSong />}/>
            <Route exact path = "/viewAndUpdate/:id" element = {<PlayAndViewAndUpdateSong/>} /> 
            <Route exact path = "/add/Song" element = {<AddSong/>} />
          </Route>
          <Route path = "*" element = {<NotFoundError/> } />
          {/* <Route exact path = "/update/Song/:id" element = {< UpdateSongInfo/>}/> */}
        </Routes>
      </Router>
    </div>
  )

};

export default App;
