import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_All } from '../../../apiUrl/API_URL';

function UpdateSongInfo(params) {
    
    const [name, setName] = useState("")
    const [author, setAuthor] = useState("")
    const [genre, setGenre] = useState("")
    const id = params.song.song.id
    console.log(params.song)
    let navigate = useNavigate()
    const handleBack = () => {
        params.setEdit(false)
    }
    const onSubmit = async (e) => {
      
            const s = API_All + 'update'
            const data = JSON.stringify({
              "id": id,
              "name": name,
              "author": author,
              "genre": genre
            });
            
            const config = {
              method: 'put',
              url: s,
              headers: { 
                'Content-Type': 'application/json'
              },
              data : data
            };
            axios(config).then(function (response) {
              console.log(JSON.stringify(response.data));
              navigate(`/viewAndUpdate/${id}`)
            })
            .catch(function (error) {
              console.log(error);
              alert('Something went wrong, please check your input')
            console.log('Something went wrong, please check your input')    
            });
          }
    return ( 
    <div>
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Update a Song</h2>
            <form onSubmit={e => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Song Name"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Song Author"
                  name="author"
                  value={author}
                  onChange={e => setAuthor(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Song Genre"
                  name="genre"
                  value={genre}
                  onChange={e => setGenre(e.target.value)}
                />
              </div>
              <span>              
                <button className="btn btn-primary btn-block">Update Song</button>
                <button className="btn btn-primary btn-block" onClick = {() => handleBack()}>Back</button>
              </span>
            </form>
          </div>
        </div>
    </div> );
}

export default UpdateSongInfo;