import React, {useState, useEffect} from 'react';
import axios from 'axios';
function SongsList(){
    const [songs, setSongs] = useState({songs :[]})
    useEffect(() => async () => {
        const result = await axios.get('http://localhost:8080/music/all');
        setSongs(result.data);
}, [])
    return(
        <div>
            <h2 className="text-center">Song List</h2>
            <div className = "rows">
                <div></div>                                            
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> Song's Name</th>
                            <th> Song's Author</th>
                            <th> Song's Genre</th>
                            <th> Play Song</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            songs.object.map(song => 
                                <tr key = {song.id}>
                                    <td>{song.name}</td>
                                    <td>{song.author.name}</td>
                                    <td>{song.genre.name}</td>
                                    <td>
                                        <audio controls autoPlay>
                                            <source src={song.src} type="audio/mpeg" />
                                        </audio>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
            }
export default SongsList;