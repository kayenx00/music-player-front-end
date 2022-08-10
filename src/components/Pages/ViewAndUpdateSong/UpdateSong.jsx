import axios from "axios";
import React from "react";
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
function UpdateSong(song){
const songToUpdate = song;
console.log(songToUpdate)
const songDetail = {
    name: songToUpdate.song.name,
    genre: songToUpdate.song.genre.name,
    lastUpdate : songToUpdate.song.updateAt
}
return (
<div>
    <div>
        <h2>Song Deatil</h2>
        <p>Song name: {songDetail.name}</p>
        <p>Song genre: {songDetail.genre}</p>
        <p>Last Update: {songDetail.lastUpdate}</p>
    </div>
    <Link to = {`/update/Song/${song.song.id}`}>
        <button>
            Update
        </button>
    </Link>
    <Link to = {"/"}>
        <button>
            Back
        </button>
    </Link>
    <div>
     
    </div>

    <div>
    </div>
</div> 

)
}
export default UpdateSong;