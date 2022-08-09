import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import {API_All, API_getSong} from '../apiUrl/API_URL'
import PlaySong from './PlaySong';
import UpdateSong from './UpdateSong';
function SongSearchByName(){
    // const [editMode, isEditmode] = useState(false)
    // const [songToPlay, setSongToPlay] = useState()
    // const [checked, setChecked] = useState([])
    // const [song, setSong] = useState({object :[]})// ([])
    // const [name, setName] = useState("");
    // const [url, setUrl] = useState(
    //     API_All,
    //   );

    // //   useEffect(() => async () => {
    // //     console.log("2" +url);
    // //         const result = await axios({
    // //             method: 'get',
    // //             url: url});
            
    // //         setSong(result.data);
    // //     }, [url])

    // useEffect(() => {
    //     async function getSong() {
    //         const result = await axios({
    //             method: 'get',
    //             url: url});
    //             if(result.data.status === "Fail"){
    //                 setUrl(API_All)
    //             }
    //             else{setSong(result.data);}
    //     }
    //     getSong();
    //     console.log("2" +url);
    // }, [url])




    // const handleButton = () =>{
    //     console.log({ids : checked});
    // }

    // const handleCheckBox = (id) =>{
    //     setChecked(prev => {
    //         const isChecked = checked.includes(id);
    //         if(isChecked){
    //             return checked.filter(item => item !== id)
    //         } else {
    //             return [...prev, id]
    //         }
    //     })
    // }
    // const handlePlay = (s) => {
    //     isEditmode(true)
    //     setSongToPlay(s)
    //     console.log(editMode)
    // }

    // const handleBack = () => {
    //     console.log(editMode)
    //     isEditmode(false)
    //     console.log(isEditmode)
    // }
    // const handleClick = () => {
    //     let s = API_getSong + name;
    //     console.log("s is",s)
    //     setUrl(s)
    //     console.log("1" + url)
    // }
    // if(!editMode){
    // return(
    //     <div>
    //         <h2 className="text-center">Search Song</h2>
    //         <input type = "text" value = {name} onChange = {e => setName(e.target.value)}/>
    //         <button className = "text-center" type = "button" onClick = {() => handleClick()}>Search</button> 
    //         <div className = "rows">
    //             <div></div>                                            
    //             <table className = "table table-striped table-bordered">
    //                 <thead>
    //                     <tr>
    //                         <th> Select</th>
    //                         <th> Song's Name</th>
    //                         <th> Song's Author</th>
    //                         <th> Song's Genre</th>
    //                         <th> Play Song</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {
    //                         song.object.map(s => 
    //                             <tr key = {s.id}>
    //                                 <td><input type="checkbox" checked = {checked.includes(s.id)} 
    //                                 onChange = {() => handleCheckBox(s.id)}/></td>
    //                                 <td>{s.name}</td>
    //                                 <td>{s.author.name}</td>
    //                                 <td>{s.genre.name}</td>
    //                                 <td>
    //                                     <button onClick = {() => handlePlay(s)}>
    //                                         Play
    //                                     </button>
    //                                 </td>
    //                                 <td>
    //                                     <audio controls>
    //                                         <source src={s.src} type="audio/mpeg" />
    //                                     </audio>
    //                                 </td>
    //                             </tr>)
    //                         // Array.isArray(song.object) ? song.object.map(s => 
    //                         //     <tr key = {s.id}>
    //                         //         <td>{s.name}</td>
    //                         //         <td>{s.author.name}</td>
    //                         //         <td>{s.genre.name}</td>
    //                         //         <td>
    //                         //             <audio controls>
    //                         //                 <source src={s.src} type="audio/mpeg" />
    //                         //             </audio>
    //                         //         </td>
    //                         //     </tr>) : (<tr >
    //                         //         <td>{song.object.name}</td>
    //                         //         <td>{song.object.author.name}</td>
    //                         //         <td>{song.object.genre.name}</td>
    //                         //         <td>
    //                         //             <audio controls>
    //                         //                 <source src={song.object.src} type="audio/mpeg" />
    //                         //             </audio>
    //                         //         </td>
    //                         //     </tr>)
    //                     }
    //                     <tr>
    //                         <td></td>
    //                         <td>
    //                             <div>
    //                                 <button onClick = {handleButton}>
    //                                     Delete
    //                                 </button>
    //                             </div>
    //                         </td>
    //                     </tr>
    //                 </tbody>
    //             </table>
    //         </div>
    //     </div>
    // );} else {
    //     return (
    //     <div>
    //         <UpdateSong song = {songToPlay}/>
    //         <button onClick = {() => handleBack}>Back</button>
    //     </div> )
    // }
}
export default SongSearchByName;