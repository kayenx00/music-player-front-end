import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { API_All } from '../../../apiUrl/API_URL';
import { useNavigate, useParams } from "react-router-dom";
import AddSong from '../AddSong/AddSong';
function SongList({filteredSongs}){
    let navigate = useNavigate()
    const filtered = filteredSongs
    const [checked, setChecked] = useState([])
    const handleCheckBox = (id) =>{
        setChecked(prev => {
            const isChecked = checked.includes(id);
            if(isChecked){
                return checked.filter(item => item !== id)
            } else {
                return [...prev, id]
            }
        })
    }
    const AddSong = () =>{
        navigate('/add/song')
    }
    const deleteSongs = async checked =>{
        // await axios.delete(API_All + '')
        navigate("/")
    }

    const handleClick = () => {
        console.log({ids : checked})
    }

    return (
        <div>
            <button onClick ={() => AddSong()}>
                Add Song
                </button>
            <div className = 'rows'>
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Song Name</th>
                            <th>Song Author</th>
                            <th>Song Genre</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filtered.map(f =>
                            
                                <tr key ={f.id}>
                                    <td>
                                        <input type="checkbox" 
                                        checked = {checked.includes(f.id)} 
                                        onChange = {() => handleCheckBox(f.id)}/>
                                    </td>
                                    <td>{f.name}</td>
                                    <td>{f.author.name}</td>
                                    <td>{f.genre.name}</td>
                                    <td>
                                        <Link  to={`/viewAndUpdate/${f.id}`}>
                                            View
                                        </Link>
                                    </td>

                                </tr>
                                
                            )
                        }
                        <tr>
                            <td>
                                <button onClick = {() => deleteSongs(checked)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default SongList;