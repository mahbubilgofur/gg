import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../style.css';

const Edit = () => {
  const [fotoData, setFotoData] = useState({
    judul_foto: '',
    deskripsi_foto: '',
    tgl_unggah: '',
    lokasi_file: '',
    id_album: '',
    id_user: '',
  });

  const { id_foto } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/fotos/${id_foto}`)
      .then(response => {
        setFotoData(response.data.foto);
      })
      .catch(error => {
        console.error('Error fetching foto details: ', error);
      });
  }, [id_foto]);

  const handleChange = (e) => {
    setFotoData({
      ...fotoData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8000/api/fotos/${id_foto}`, fotoData)
      .then(response => {
        console.log('Foto updated successfully: ', response.data);
        navigate('/foto');
      })
      .catch(error => {
        console.error('Error updating foto: ', error);
      });
  };

  return (
    <div className='edit'>
      <h2>Edit Foto</h2>
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
          User ID:
          <input type="text" name="id_user" value={fotoData.id_user} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Update Foto</button>
      </form>
      <a href='/foto'>
        <button>Back to Foto Table</button>
      </a>
    </div>
  );
};

export default Edit;
