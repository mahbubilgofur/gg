import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style.css';

const Tambah = () => {
  const [likeData, setLikeData] = useState({
    id_foto: '',
    id_user: '',
    tgl_like: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLikeData({
      ...likeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/likes', likeData)
      .then(response => {
        console.log('Like created successfully: ', response.data);
        navigate('/like'); // Redirect back to the like table after successful like creation
      })
      .catch(error => {
        console.error('Error creating like: ', error);
      });
  };

  return (
    <div className='tambah'>
      <h2>Add New Like</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Foto ID:
          <input type="text" name="id_foto" value={likeData.id_foto} onChange={handleChange} />
        </label>
        <br />
        <label>
          User ID:
          <input type="text" name="id_user" value={likeData.id_user} onChange={handleChange} />
        </label>
        <br />
        <label>
          Date Liked:
          <input type="date" name="tgl_like" value={likeData.tgl_like} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Add Like</button>
      </form>
      <a href='/like'>
        <button>Back to Like Table</button>
      </a>
    </div>
  );
};

export default Tambah;
