import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style.css';

const Tambah = () => {
  const [komentarData, setKomentarData] = useState({
    id_foto: '',
    id_user: '',
    isi_komentar: '',
    tgl_komentar: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setKomentarData({
      ...komentarData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/komentars', komentarData)
      .then(response => {
        console.log('Comment created successfully: ', response.data);
        navigate('/komentar'); // Redirect back to the komentar table after successful comment creation
      })
      .catch(error => {
        console.error('Error creating comment: ', error);
      });
  };

  return (
    <div className='tambah'>
      <h2>Tambah Komentar</h2>
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
          <input type="date" name="tgl_komentar" value={komentarData.tgl_komentar} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Tambah Komentar</button>
      </form>
      <a href='/komentar'>
        <button>Kembali</button>
      </a>
    </div>
  );
};

export default Tambah;
