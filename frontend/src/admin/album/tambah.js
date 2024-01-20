import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import '../style.css';

const Tambah = () => {
  const [albumData, setAlbumData] = useState({
    nama_album: '',
    deskripsi: '',
    tgl_dibuat: '',
    id_user: '',
  });

  const navigate = useNavigate(); // Use useNavigate

  const handleChange = (e) => {
    setAlbumData({
      ...albumData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/albums', albumData)
      .then(response => {
        console.log('Album created successfully: ', response.data);
        // Redirect back to album table after successful album creation
        navigate('/album');  // Use navigate instead of history.push
      })
      .catch(error => {
        console.error('Error creating album: ', error);
      });
  };

  return (
    <div className='tambah'>
      <h2>Create New Album</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Album Name:
          <input type="text" name="nama_album" value={albumData.nama_album} onChange={handleChange} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" name="deskripsi" value={albumData.deskripsi} onChange={handleChange} />
        </label>
        <br />
        <label>
          Created Date:
          <input type="text" name="tgl_dibuat" value={albumData.tgl_dibuat} onChange={handleChange} />
        </label>
        <br />
        <label>
          User ID:
          <input type="text" name="id_user" value={albumData.id_user} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Tambah Album</button>
      </form>
       
      <a href='/album'>
        <button>Kembali</button>
      </a>
    </div>
  );
};

export default Tambah;
