import axios from "axios";
import React from "react";
import {useState, useEffect} from 'react'
import { API_UpdateSong } from "../../../apiUrl/API_URL";
import UpdateSong from "../../UpdateSong";
function PlaySong(song){
const songToUpdate = song;
console.log(songToUpdate)
console.log(songToUpdate.song.src)
return (
<div>
    {<div>
        <audio controls autoPlay>
            <source src={songToUpdate.song.src} type="audio/mpeg" />
        </audio>
    </div> }

</div> 

)
}
export default PlaySong;