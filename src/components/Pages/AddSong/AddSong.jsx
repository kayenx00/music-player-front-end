import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_All } from '../../../apiUrl/API_URL';
function AddSong() {
    const navigate = useNavigate();
    const [src, setSrc] = useState(null)
    const [thumbnail, setThumbnail] = useState(null)
    const [name, setName] = useState("")
    const [author, setAuthor] = useState("")  
    const [genre, setGenre] = useState("")
    // const [song, setSong] = useState({
    //     src: "",
    //     thumbnail: "",
    //     name: "",
    //     author: "",
    //     genre: ""   
        
    // })

    const onSubmit = async (e) => {
        e.preventDefault();
        let s = API_All + 'upload'
        const formData = new FormData();
        formData.append("src", src)
        formData.append("thumbnail", thumbnail)
        formData.append("name", name)
        formData.append("author", author)
        formData.append("genre", genre)

        try { 
          let result = axios({
            method: 'post',
            url : s,
            data : formData
          })
        }catch{navigate('/add/Song')}
        // let s = API_All + 'upload?src=' +`${song.src}`+'&thumbnail=' +
        // `${song.thumbnail}` + '&name=' + `${song.name}`+ 
        // '&author=' + `${song.author}` + '&genre=' + `${song.genre}`
        // console.log(s)
        // try {
        // const result = await axios({
        //     method: 'post',
        //     url : API_All + 'upload?src=' +`${song.src}`+'&thumbnail=' +
        //      `${song.thumbnail}` + '&name=' + `${song.name}`+ 
        //      '&author=' + `${song.author}` + '&genre=' + `${song.genre}`
        // }) }catch{
        //     navigate('/add/user')
        // }
        navigate('/')
    }

    const handleBack= () => {
      navigate('/')
    }


    return (

        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add A User</h2>
            <button onClick = {() => handleBack()}>Back</button>
            <form onSubmit={e => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="file"
                  name="src"
                  value=""
                  onChange={e => setSrc(e.target.files[0])}
                />
              </div>
              <div className="form-group">
                <input
                  type="file"
                  name="thumbnail"
                  value=""
                  onChange={e => setThumbnail(e.target.files[0])}
                />
              </div>
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
                <button className="btn btn-primary btn-block">Add Song</button>
              </span>
            </form>
          </div>
        </div>
      );
}

export default AddSong;