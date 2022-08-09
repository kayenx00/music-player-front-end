import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_All } from '../../../apiUrl/API_URL';
function AddSong() {
    const navigate = useNavigate();
    const [song, setSong] = useState({
        src: "",
        thumbnail: "",
        name: "",
        author: "",
        genre: ""   
        
    })
    const {src, thumbnail, name, author, genre} = song;
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
        const result = await axios({
            method: 'post',
            url : API_All + 'upload?src=' +`${song.src}`+'?thumbnail=' +
             `${song.thumbnail}` + '?name=' + `${song.name}`+ 
             '?author=' + `${song.author}` + '?genre=' + `${song.genre}`
        }) }catch{
            navigate('/')
        }
        navigate('/')
    }


    const onInputChange = (e) => {
        setSong({ ...song, [e.target.name]: e.target.value })
    }

    return (
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add A User</h2>
            <form onSubmit={e => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="file"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Name"
                  name="src"
                  value={src}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="file"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Username"
                  name="thumbnail"
                  value={thumbnail}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Song Name"
                  name="name"
                  value={name}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Song Author"
                  name="author"
                  value={author}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Song Genre"
                  name="genre"
                  value={genre}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <button className="btn btn-primary btn-block">Add Song</button>
            </form>
          </div>
        </div>
      );
}

export default AddSong;