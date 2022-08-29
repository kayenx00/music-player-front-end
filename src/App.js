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
// import UpdateSongInfo from './components/Pages/ViewAndUpdateSong/UpdateSongInfo';
function App() {
  const token = localStorage.getItem('token')
  const [isLoggedin, setIsLoggedin] = useState(true ? token : false)
  console.log(isLoggedin)
  return (
    <div>
      <Router>
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
