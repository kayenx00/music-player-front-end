import axios from "axios";
import React from "react";
import {useState, useEffect} from 'react'
import { API_UpdateSong } from "../apiUrl/API_URL";
import UpdateSong from "./UpdateSong";
function PlaySong(props){
return (
<div>
    <div>
        <audio controls>
            <source src={props.src} type="audio/mpeg" />
        </audio>
    </div>
    <UpdateSong />
</div> 

)
}
export default PlaySong;