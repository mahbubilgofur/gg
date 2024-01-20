import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style.css';

const Tambah = () => {
  const [fotoData, setFotoData] = useState({
    judul_foto: '',
    deskripsi_foto: '',
    tgl_unggah: '',
    lokasi_file: '',
    id_album: '',
    id_user: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFotoData({
      ...fotoData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/fotos', fotoData)
      .then(response => {
        console.log('Foto created successfully: ', response.data);
        navigate('/foto'); // Redirect back to the foto table after successful foto creation
      })
      .catch(error => {
        console.error('Error creating foto: ', error);
      });
  };

  return (
    <div className='tambah'>
      <h2>Create New Foto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Judul Foto:
          <input type="text" name="judul_foto" value={fotoData.judul_foto} onChange={handleChange} />
        </label>
        <br />
        <label>
          Deskripsi Foto:
          <input type="text" name="deskripsi_foto" value={fotoData.deskripsi_foto} onChange={handleChange} />
        </label>
        <br />
        <label>
          Tanggal Unggah:
          <input type="text" name="tgl_unggah" value={fotoData.tgl_unggah} onChange={handleChange} />
        </label>
        <br />
        <label>
          Lokasi File:
          <input type="text" name="lokasi_file" value={fotoData.lokasi_file} onChange={handleChange} />
        </label>
        <br />
        <label>
          Album ID:
          <input type="text" name="id_album" value={fotoData.id_album} onChange={handleChange} />
        </label>
        <br />
        <label>
         Id_user:
          <input type="text" name="id_user" value={fotoData.id_user} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Create Foto</button>
      </form>
      <a href='/foto'>
        <button>Back to Foto Table</button>
      </a>
    </div>
  );
};

export default Tambah;
