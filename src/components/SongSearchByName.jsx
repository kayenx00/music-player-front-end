import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import {API_All, API_getSong} from '../apiUrl/API_URL'

function SongSearchByName(){
    const [song, setSong] = useState({object :[]})// ([])
    const [name, setName] = useState("");
   // const [nameFromButton, setNameFromButton] = useState("");
    const [url, setUrl] = useState(
        API_All,
      );

    //   useEffect(() => async () => {
    //     console.log("2" +url);
    //         const result = await axios({
    //             method: 'get',
    //             url: url});
            
    //         setSong(result.data);
    //     }, [url])

    useEffect(() => {
        async function getSong() {
        console.log("2" +url);
            const result = await axios({
                method: 'get',
                url: url});
                if(result.data.status === "Fail"){
                    setUrl(API_All)
                }
                // console.log("result is", result.data);
                else{setSong(result.data);}
                // setSong(result.data);
        }
        getSong();
    }, [url])


        
        
    
    // const fetchSongs = async () => {
    //     const res = axios({
    //         method: 'get',
    //         url: url});
    //     setSong(res);
    //     }
      
    const handleClick = () => {
        let s = API_getSong + name;
        console.log("s is",s)
        setUrl(s)
        console.log("1" + url)
    }

//     useEffect(() => async () => {
//         const result = await axios.get(`http://localhost:8080/music/getName?name=${nameFromButton}`);
//         setSong(result.data);
// }, [nameFromButton])

    return(
        <div>
            <h2 className="text-center">Search Song</h2>
            <input type = "text" value = {name} onChange = {e => setName(e.target.value)}/>
            <button className = "text-center" type = "button" onClick = {() => handleClick()}>Search</button> 
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
                                <tr key = {s.id}>
                                    <td>{s.name}</td>
                                    <td>{s.author.name}</td>
                                    <td>{s.genre.name}</td>
                                    <td>
                                        <audio controls>
                                            <source src={s.src} type="audio/mpeg" />
                                        </audio>
                                    </td>
                                </tr>)
                            // Array.isArray(song.object) ? song.object.map(s => 
                            //     <tr key = {s.id}>
                            //         <td>{s.name}</td>
                            //         <td>{s.author.name}</td>
                            //         <td>{s.genre.name}</td>
                            //         <td>
                            //             <audio controls>
                            //                 <source src={s.src} type="audio/mpeg" />
                            //             </audio>
                            //         </td>
                            //     </tr>) : (<tr >
                            //         <td>{song.object.name}</td>
                            //         <td>{song.object.author.name}</td>
                            //         <td>{song.object.genre.name}</td>
                            //         <td>
                            //             <audio controls>
                            //                 <source src={song.object.src} type="audio/mpeg" />
                            //             </audio>
                            //         </td>
                            //     </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default SongSearchByName;