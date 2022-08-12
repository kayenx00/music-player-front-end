import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_All } from '../../../apiUrl/API_URL';
function AddSong() {
    const navigate = useNavigate();
    const [src, setSrc] = useState(null)
    const [thumbnail, setThumbnail] = useState(null)
    const [name, setName] = useState("")
    const [author, setAuthor] = useState("")  
    const [genre, setGenre] = useState("")
    const audioUploadString = 'Upload your audio file here'
    const imageUploadString = 'Upload your thumbnail file here'
    const [selectedAudioFileName, setSelectedAudioFileName] = useState("")
    const [selectedImageFileName, setSelectedImageFileName] = useState("")
    const onSubmit = async (e) => {
        e.preventDefault();
        let s = API_All + 'upload'
        const formData = new FormData();
        formData.append("src", src)
        formData.append("thumbnail", thumbnail)
        formData.append("name", name)
        formData.append("author", author)
        formData.append("genre", genre)
        

        const config = {
          method: 'post',
          url: s,
          headers: { 
            'Content-Type': 'application/json'
          },
          data : formData
        };
        axios(config).then(function (response) {
          console.log(JSON.stringify(response.data));
          navigate('/add/song')
        })
        .catch(function (error) {
          console.log(error);
          alert('Something went wrong, please check your input')
        console.log('Something went wrong, please check your input')    
        });

        navigate('/')
    }

    const handleBack= () => {
      navigate('/')
    }


    return (

        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add A Song</h2>
            <form onSubmit={e => onSubmit(e)}>
              <div className="form-group">
                {audioUploadString}
                <br />
                <input
                  type="file"
                  name="src"
                  value=""
                  accept=".mp3,audio/*"
                  onChange={e => {setSrc(e.target.files[0])
                                  setSelectedAudioFileName(e.target.files[0].name)}}
                />
                <p>{selectedAudioFileName}</p>
              </div>
              <div className="form-group">
              {imageUploadString}
                <br />
                <input
                  type="file"
                  name="thumbnail"
                  value=""
                  accept="image/*"
                  onChange={
                    e => 
                    {setThumbnail(e.target.files[0])
                      setSelectedImageFileName(e.target.files[0].name)
                  
                                  }}
                />
              <p>{selectedImageFileName}</p>
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
                <button className="btn btn-primary btn-block" onClick = {() => handleBack()}>Back</button>
              </span>
            </form>
          </div>
        </div>
      );
}

export default AddSong;