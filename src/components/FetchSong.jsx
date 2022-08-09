import { useQuery } from 'react-query';
import React, { useState, useEffect } from 'react';
import { API_All } from '../apiUrl/API_URL';
import ShowSongTable from './ShowSongTable';
import axios from 'axios';
function FetchSong() {

    const url = API_All + 'all'

    const fetchSongs = async () => {
        const fetchData = await axios({
            method: 'get',
            url: url
        })
        return fetchData;
    }
    const query = useQuery('songs', fetchSongs)
    return ( 
        <div>
        {query.isLoading
        ? 'Loading...'
        : query.isError
        ? 'Error!'
        : query.data
        ? <div>
            <ShowSongTable details = {query.data.data.object} />
            {/* <button onClick={handleClick} ></button> */}
        </div>
        : null}
        </div>
    );
}


export default FetchSong;