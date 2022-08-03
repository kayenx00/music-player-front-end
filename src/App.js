import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SongsList from './components/SongsList';
import SongSearchByName from './components/SongSearchByName';
import DeleteSong from './components/DeleteSong';
function App() {
  return (
    <>    <SongSearchByName /> </>
  )
  // const[comp, setComp] = useState("");
  // const handleClick = (name) => {
  //   setComp(name)
  // }
  // if(comp === "SongsList"){
  //   return 
  //     <SongsList />}
  // else if (comp === "SongsListByName"){
  //   return 
  //     <SongSearchByName />
  // }
  // else{
  //   return (
  //     <div className="App">
  //       <button onlick = {handleClick("SongsList")}>Search Songs</button>
  //       <button onlick = {handleClick("SongsListByName")}>Search Song</button>
  //     </div>
  //   )
  // }
};

export default App;
