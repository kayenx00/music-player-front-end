import React, { useState, useEffect } from 'react';
import SongTable from './SongTable';
import { API_All } from '../apiUrl/API_URL';
import axios from 'axios';
import SongsList from './SongList';
function ShowSongTable({details}) {
    const [searchField, setSearchField] = useState("")
    const songs = details
    const filteredSongs = songs.filter(
        song => {
          return (
            song
            .name
            .toLowerCase()
            .includes(searchField.toLowerCase()) ||
            song
            .author.name
            .toLowerCase()
            .includes(searchField.toLowerCase())
            ||
            song
            .genre.name
            .toLowerCase()
            .includes(searchField.toLowerCase())
          );
        }
      );
    const handleChange = (e) =>{
        setSearchField(e.target.value);
    }

    function searchList() {
        return (
         
            <SongsList filteredSongs={filteredSongs} />
  
        );
      }
    return ( 
        <div>
        
            <input 
            className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
            type = "search" 
            placeholder = "Search Song" 
            onChange = {handleChange}
            />
            {searchList()}
        </div>
    );
}

export default ShowSongTable;