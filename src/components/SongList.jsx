import React, {useState, useEffect} from 'react';
import axios from 'axios';
function SongList({filteredSongs}){
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

    const handleClick = () => {
        console.log({ids : checked})
    }

    return (
        <div>
            <div className = 'rows'>
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th></th>
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

                                </tr>
                                
                            )
                        }
                        <tr>
                        <td>
                                        <button onClick={()=> handleClick()} >
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