import axios from "axios";
import React from "react";
import {useState, useEffect} from 'react'
import { API_UpdateSong } from "../apiUrl/API_URL";
function UpdateSong(props){
    console.log(props.song)
    console.log(props.song.id)
    const [genre, setGenre] = useState()
    const [author, setAuthor] = useState()

    const handleAddGenreAndAuthor = () => {
        let requestBody = JSON.stringify({Song : {
            id: props.song.id,
            name: props.song.name,
            author: author,
            genre: genre,
        }})
        let request = axios({
            method: 'get',
            url: API_UpdateSong + requestBody,
            headers: {'Content-type' : 'application/json'}
        }
        ).catch(err => {
            alert('Name and/or are/is already used')
            setAuthor("")
            setGenre("")
        })
        
        }
return (
<div>
    <div>

    </div>
    <div>
        <input type = "text" value = {author} onChange ={ e => setAuthor(e.target.value)}/>
    </div>
    <div>
        <input type = "text" value = {genre} onChange ={ e => setGenre(e.target.value)}/>
    </div>

    <div>
        <button onClick={() => handleAddGenreAndAuthor}>Add</button>
    </div>
</div> 

)
}
export default UpdateSong;