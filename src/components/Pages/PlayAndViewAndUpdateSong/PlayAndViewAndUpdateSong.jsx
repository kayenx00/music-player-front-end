import React from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { useQuery } from 'react-query';
import { API_All } from '../../../apiUrl/API_URL';
import PlaySong from './PlaySong';
import ViewAndUpdateSong from './ViewAndUpdateSong';
function PlayAndViewAndUpdateSong() {
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
            <ViewAndUpdateSong song = {query.data.data.object}/>
        </div>
        : null}

        </div>
    );
}

export default PlayAndViewAndUpdateSong;