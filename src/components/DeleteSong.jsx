import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { API_All, API_getSong, API_deleteSong, API_countSong } from '../apiUrl/API_URL';
function DeleteSong() {
    let unhandledId = [];
    const [idList, setIdList] = useState([])
    const [songAmount, setSongAmount] = useState({object:""})
    const [url,setUrl] = useState(
        API_countSong
    );
    const [error, isError] = useState(false)

    
    useEffect(() => {
        async function getSongAmount() {
            const count = await axios({
                method: 'get',
                url: API_countSong
            });
            console.log(count.data)
            setSongAmount(count.data)
                
        }
        getSongAmount();
    }, [API_countSong])

    async function deleteSong(id) {
        try {
            await axios({
                method: 'delete',
                url: API_deleteSong + id
            })
            }
        catch(error){
            unhandledId.push(id)
            }
    }

    const handleClick = () => {
        const ids = idList.split(' ')
        console.log(ids)
        for(let i =0; i < ids.length; i++){
            let id = ids[i];
            let s = API_deleteSong + id;
            console.log("s is",s)
            // console.log("1" + url)
            deleteSong(id);
        }
            printMessage()
    };

    const printMessage = () => {
        let errorMessage = " are/is not exists"
        let errorMsg = ""
        let successMessage = "Delete id(s) success"
        let msg =""
        let numberOfUnhandleId = unhandledId.length;
        console.log(numberOfUnhandleId)
        if (numberOfUnhandleId > 0) {
            for(let j = 0; j < unhandledId.length; j++){
                errorMsg = errorMsg + unhandledId[j] + ", ";
        }
        msg = errorMsg + errorMessage
        unhandledId = []
    }else{
        msg = successMessage
        }
        alert(msg)
        setUrl(url);
    }

    return(
        <div>
            <h2 className="text-center">Delete Song</h2>
            
            <div className = "rows">
                <div></div>                                            
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> Delete</th>
                            <th> 
                                <input type = "text" value = {idList} onChange = {e => setIdList(e.target.value)}/>
            <button className = "text-center" type = "button" onClick = {() => handleClick()}>Delete</button> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                                <tr>
                                    <><td>Songs amount</td><td>{songAmount.object}</td></>
                                </tr>

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DeleteSong;