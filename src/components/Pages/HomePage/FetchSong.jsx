import { useQuery } from 'react-query';
import React from 'react';
import { API_All } from '../../../apiUrl/API_URL';
import ReactLoading from 'react-loading'
import ShowSongTable from './ShowSongTable';
import axios from 'axios';
import FetchingError from '../Error/FetchingError';
function FetchSong() {
    const token = localStorage.getItem('token');
    const url = API_All + 'all'

    const fetchSongs = async () => {
        const fetchData = await axios({
            method: 'get',
            url: url,
            headers: {
                Authorization: `Bearer ${token}`

        }})
        return fetchData;
    }
    const query = useQuery('songs', fetchSongs)
    return ( 
        <div>
        {query.isLoading
        ? <ReactLoading type="spin" color="#0000FF"
        height={100} width={50}/>
        : query.isError
        ? <FetchingError />
        : query.data
        ? <div>
            <ShowSongTable details = {query.data.data.object} />
        </div>
        : null}
        </div>
    );
}


export default FetchSong;