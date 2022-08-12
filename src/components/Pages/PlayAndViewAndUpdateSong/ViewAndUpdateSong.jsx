import React, { useState } from 'react';
import SongInfo from './SongInfo';
import UpdateSongInfo from './UpdateSongInfo';

function ViewAndUpdateSong(song) {
    const songToUpdate = song;
    const [edit, setEdit] = useState(false)
    console.log(songToUpdate)
    const songDetail = {
        name: songToUpdate.song.name,
        author: songToUpdate.song.author,
        genre: songToUpdate.song.genre,
        lastUpdate : songToUpdate.song.updateAt
    }

if (!edit){
    return (
        <div>
            <SongInfo setEdit = {setEdit}
                      song = {songDetail}/>
        </div>
    )
} else {
    return (
        <div>
            <UpdateSongInfo setEdit = {setEdit}
                            song = {songToUpdate} />
        </div>
    )
}
}

export default ViewAndUpdateSong;