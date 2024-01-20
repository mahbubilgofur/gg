import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../style.css';

const Edit = () => {
  const [komentarData, setKomentarData] = useState({
    id_foto: '',
    id_user: '',
    isi_komentar: '',
    tgl_komentar: '',
  });

  const { id_komentar } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/komentars/${id_komentar}`)
      .then(response => {
        if (response.data.komentar) {
          setKomentarData(response.data.komentar);
        }
      })
      .catch(error => {
        console.error('Error fetching komentar details: ', error);
      });
  }, [id_komentar]);

  const handleChange = (e) => {
    setKomentarData({
      ...komentarData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8000/api/komentars/${id_komentar}`, komentarData)
      .then(response => {
        console.log('Komentar updated successfully: ', response.data);
        navigate('/komentar');
      })
      .catch(error => {
        console.error('Error updating komentar: ', error);
      });
  };

  return (
    <div className='edit'>
      <h2>Edit Comment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Foto ID:
          <input type="text" name="id_foto" value={komentarData.id_foto} onChange={handleChange} />
        </label>
        <br />
        <label>
          User ID:
          <input type="text" name="id_user" value={komentarData.id_user} onChange={handleChange} />
        </label>
        <br />
        <label>
          Comment:
          <input type="text" name="isi_komentar" value={komentarData.isi_komentar} onChange={handleChange} />
        </label>
        <br />
        <label>
          Date:
          <input type="text" name="tgl_komentar" value={komentarData.tgl_komentar} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Update Comment</button>
      </form>
      <a href='/komentar'>
        <button>Back to Comment Table</button>
      </a>
    </div>
  );
};

export default Edit;
