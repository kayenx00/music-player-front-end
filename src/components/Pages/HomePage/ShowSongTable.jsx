import React, { useState} from 'react';
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
            .author
            .toLowerCase()
            .includes(searchField.toLowerCase())
            ||
            song
            .genre
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