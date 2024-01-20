import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../style.css';

const Edit = () => {
  const [likeData, setLikeData] = useState({
    id_foto: '',
    id_user: '',
    tgl_like: '',
  });

  const { id_like } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/likes/${id_like}`)
      .then(response => {
        setLikeData(response.data.like);
      })
      .catch(error => {
        console.error('Error fetching like details: ', error);
      });
  }, [id_like]);

  const handleChange = (e) => {
    setLikeData({
      ...likeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8000/api/likes/${id_like}`, likeData)
      .then(response => {
        console.log('Like updated successfully: ', response.data);
        navigate('/like');
      })
      .catch(error => {
        console.error('Error updating like: ', error);
      });
  };

  return (
    <div className='edit'>
      <h2>Edit Like</h2>
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
        <button type="submit">Update Like</button>
      </form>
      <a href='/like'>
        <button>Back to Like Table</button>
      </a>
    </div>
  );
};

export default Edit;
