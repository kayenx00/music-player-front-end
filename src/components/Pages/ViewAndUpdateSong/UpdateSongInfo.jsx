import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import { API_All } from '../../../apiUrl/API_URL';

function UpdateSongInfo() {
    
    const [name, setName] = useState("")
    const [author, setAuthor] = useState("")
    const [genre, setGenre] = useState("")
    const {id} = useParams();
    let navigate = useNavigate()
    const handleBack = () => {
        navigate(`/viewAndUpdate/${id}`)
    }
    const onSubmit = async (e) => {
        try {
            const s = API_All + 'update'
            const formData = new FormData();
            formData.append("id", id);
            formData.append("name", name);
            formData.append("author", author);
            formData.append("genre", genre);
            const result = await axios({
                method: 'put',
                url: s,
                data : formData
            })
            navigate(`/viewAndUpdate/${id}`)

        } catch {
            alert('Something went wrong, please check your input')
            console.log('Something went wrong, please check your input')
        }
    }
    return ( 
    <div>
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Update a Song</h2>
            <button onClick={() => handleBack()}>
                Back
            </button>
            <button onClick = {() => handleBack()}>Back</button>
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
              </span>
            </form>
          </div>
        </div>
    </div> );
}

export default UpdateSongInfo;