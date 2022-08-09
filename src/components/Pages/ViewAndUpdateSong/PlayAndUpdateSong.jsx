import React, { useState} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from 'axios';
import { useQuery } from 'react-query';
import { API_All } from '../../../apiUrl/API_URL';
import PlaySong from './PlaySong';
import UpdateSong from './UpdateSong';
function PlayAndUpdateSong() {
    const url = API_All + 'get?id='
    console.log(url)
    const {id} = useParams();
    console.log(id)
    const loadSong = async () => {
        const fetchSong = await axios({
            method: 'get',
            url: url + `${id}`
        })
        return fetchSong;
    }

    const query = useQuery('song', loadSong)


    return ( 
        <div>
        {query.isLoading
        ? 'Loading...'
        : query.isError
        ? 'Error!'
        : query.data
        ? <div>
            <PlaySong song = {query.data.data.object}/>
            <UpdateSong song = {query.data.data.object}/>
            {/* <ShowSongTable details = {query.data.data.object} /> */}
            {/* <button onClick={handleClick} ></button> */}
        </div>
        : null}

        </div>
    );
}

export default PlayAndUpdateSong;