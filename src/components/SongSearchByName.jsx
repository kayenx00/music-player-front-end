import React, {useState, useEffect} from 'react';
import axios from 'axios';
function SongSearchByName(){
    const [song, setSong] = useState({object :[]})
    const [name, setName] = useState("");
    const [nameFromButton, setNameFromButton] = useState("");
    const handleClick = () => {
        setNameFromButton(name)
    }
    useEffect(() => async () => {
        const result = await axios.get(`http://localhost:8080/api/music/get?name=${nameFromButton}`);
        setSong(result.data);
}, [nameFromButton])


    return(
        <div>
            <h2 className="text-center">Song List</h2>
            <input type = "text" value = {name} onChange = {e => setName(e.target.value)}/>
            <button type = "button" onClick = {handleClick}>Search</button> 
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
                            
                            song.object.map(s => 
                                <tr>
                                    <td>{s.name}</td>
                                    <td>{s.author.name}</td>
                                    <td>{s.genre.name}</td>
                                    <td>
                                        <audio controls autoplay>
                                            <source src={s.src} type="audio/mpeg" />
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
export default SongSearchByName;