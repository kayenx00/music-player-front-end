import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import FetchSong from './components/Pages/HomePage/FetchSong';
import PlayAndViewAndUpdateSong from './components/Pages/PlayAndViewAndUpdateSong/PlayAndViewAndUpdateSong';
import AddSong from './components/Pages/AddSong/AddSong';
// import UpdateSongInfo from './components/Pages/ViewAndUpdateSong/UpdateSongInfo';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path = "/" element = {<FetchSong />}/>
          <Route exact path = "/viewAndUpdate/:id" element = {<PlayAndViewAndUpdateSong/>} /> 
          <Route exact path = "/add/Song" element = {<AddSong/>} />
          {/* <Route exact path = "/update/Song/:id" element = {< UpdateSongInfo/>}/> */}
        </Routes>
      </Router>
    </div>
  )

};

export default App;
