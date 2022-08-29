import React, { useState, useEffect } from 'react';
import {useParams, useRouteMatch} from 'react-router-dom'
import axios from 'axios';
import { useQuery } from 'react-query';
import { API_All } from '../../../apiUrl/API_URL';
import PlaySong from './PlaySong';
import ViewAndUpdateSong from './ViewAndUpdateSong';
function PlayAndViewAndUpdateSong() {
    const [song, setSong] = useState({object : []})
    const url = API_All + 'get?id='
    console.log(url)
    const {id} = useParams();
    console.log(id)
    const token = localStorage.getItem('token')
    const loadSong = async () => {
        const fetchSong = await axios({
            method: 'get',
            url: url + `${id}`, 
            headers: {
                Authorization: `Bearer ${token}`

        }
        })
        return fetchSong;
    }

    // const loadSong2 = async () => {
    //     const fetchSong = await axios({
    //         method: 'get',
    //         url: url + `${id}`
    //     })
    //     setSong(fetchSong.data)
    // }

    // useEffect(()=>{
    //     loadSong2();
    // }, [])
    // console.log(song)

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