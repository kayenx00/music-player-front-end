import axios from "axios";
import React from "react";
import {useState, useEffect} from 'react'
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