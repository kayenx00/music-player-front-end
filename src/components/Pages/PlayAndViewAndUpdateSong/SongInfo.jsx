import React from 'react';
import { Link } from 'react-router-dom';
const moment = require('moment');

function SongInfo(params) {
    const songToShow = params.song;
    console.log(songToShow);
    return ( 
        <div>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Song Detail</h2>
                    <p className="text-center mb-4">Song name: {songToShow.name}</p>
                    <p className="text-center mb-4">Song author: {songToShow.author}</p>
                    <p className="text-center mb-4">Song genre: {songToShow.genre}</p>
                    <p className="text-center mb-4">Last Update: {moment(songToShow.lastUpdate).format("YYYY-MM-DD")}</p>
                
                    <span>
                        <button className="btn btn-primary btn-block" onClick={(e => params.setEdit(true))}>
                            Update
                        </button>
                        <div>
                            <br />
                        </div>
                        <Link to = {"/"}>
                            <button className="btn btn-primary btn-block">
                                Back
                            </button>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
     );
}

export default SongInfo;