import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { API_All } from '../../../apiUrl/API_URL';
import { useNavigate} from "react-router-dom";
function SongList({filteredSongs}){
    let navigate = useNavigate()
    const filtered = filteredSongs
    const [dataLimit, setDataLimit] = useState(6)
    const numberOfSongs = filtered.length
    const pageLimit = Math.round(numberOfSongs/dataLimit)
    console.log(filtered)
    const [checked, setChecked] = useState([])
    const [pages] = useState(Math.round(numberOfSongs / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
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
    const deleteSongs = async () =>{

        // await axios.delete(API_All + '')
        const s = API_All + 'delete'
        const formData = new FormData();
        for(let i = 0; i < checked.length; i++){
            formData.append("id", checked[i])
        }
        // const result = axios({
        //         method:'delete',
        //         url: s,
        //         data: formData
        //     })
        // navigate('/add/Song')
        // window.location.reload()
        const config = {
            method: 'delete',
            url: s,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : formData
          };
          axios(config).then(function (response) {
            console.log(JSON.stringify(response.data));
            navigate('/')
            window.location.reload()
          })
          .catch(function (error) {
            console.log(error);
            alert('Something went wrong, please check your input')
          });
    }

    function goToNextPage() {

        setCurrentPage((page) => page + 1);

     }
   
     function goToPreviousPage() {

        setCurrentPage((page) => page - 1);

     }
   
     function changePage(event) {

        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);

     }
   
     const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return filtered.slice(startIndex, endIndex);
     };
   
     const getPaginationGroup = () => {

        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);

      };
    const handleDecreaseSongLimit = () => {
        setDataLimit( prevState => prevState - 1)
    }

    const handleIncreaseSongLimit = () => {
        setDataLimit( prevState => prevState + 1)
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
                        {/* {
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
                        } */}

{
                            getPaginatedData().map(f =>
                            
                                <tr key ={f.id}>
                                    <td>
                                        <input type="checkbox" 
                                        checked = {checked.includes(f.id)} 
                                        onChange = {() => handleCheckBox(f.id)}/>
                                    </td>
                                    <td>{f.name}</td>
                                    <td>{f.author}</td>
                                    <td>{f.genre}</td>
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
                                Number of result Song: {numberOfSongs}
                            </td>
                            <td>
                            <button
                                disabled = {(currentPage === 1)}
                                onClick={goToPreviousPage}
                                className={`prev ${currentPage === 1 ? 'disabled' : ''}`}>
                                    Prev
                            </button>
                            {getPaginationGroup().map((item, index) => (
                            <button
                                key={index}
                                onClick={changePage}
                                className={`paginationItem ${currentPage === item ? 'active' : null}`}>
                                <span>{item}</span>
                            </button>
                            
                            ))}
                            <button
                            disabled = {(currentPage === pageLimit)}
                            onClick={goToNextPage}
                            className={`next ${currentPage === pages ? 'disabled' : ''}`}>
                                Next
                            </button>
                            </td>
                            <td>
                                Set Song Record Limit: 
                                    <button disabled = {dataLimit === 1} onClick = {e => handleDecreaseSongLimit()}>
                                        -
                                    </button> 
                                    {dataLimit}
                                    <button disabled = {dataLimit === numberOfSongs} onClick = {e => handleIncreaseSongLimit()}>
                                        +
                                    </button> 
                            </td>
                            <td></td>
                            <td></td>
                        </tr>

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