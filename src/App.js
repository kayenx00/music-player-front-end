import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, withRouter } from 'react-router-dom';
import './App.css';
import FetchSong from './components/Pages/HomePage/FetchSong';
import PlayAndUpdateSong from './components/Pages/ViewAndUpdateSong/PlayAndUpdateSong';
import AddSong from './components/Pages/AddSong/AddSong';
import UpdateSongInfo from './components/Pages/ViewAndUpdateSong/UpdateSongInfo';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path = "/" element = {<FetchSong />}/>
          <Route exact path = "/viewAndUpdate/:id" element = {<PlayAndUpdateSong/>} /> 
          <Route exact path = "/add/Song" element = {<AddSong/>} />
          <Route exact path = "/update/Song/:id" element = {< UpdateSongInfo/>}/>
        </Routes>
      </Router>
    </div>
  )

};

export default App;
