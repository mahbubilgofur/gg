import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../style.css';

const EditAlbum = () => {
  const [albumData, setAlbumData] = useState({
    nama_album: '',
    deskripsi: '',
    tgl_dibuat: '',
    id_user: '',
  });

  const { id_album } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/albums/${id_album}`)
      .then(response => {
        setAlbumData(response.data.album);
      })
      .catch(error => {
        console.error('Error fetching album details: ', error);
      });
  }, [id_album]);

  const handleChange = (e) => {
    setAlbumData({
      ...albumData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8000/api/albums/${id_album}`, albumData)
      .then(response => {
        console.log('Album updated successfully: ', response.data);
        navigate('/album');
      })
      .catch(error => {
        console.error('Error updating album: ', error);
      });
  };

  return (
    <div className='edit'>
      <h2>Edit Album</h2>
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
        <button type="submit">Update Album</button>
      </form>
     
      <a href='/album'>
        <button>Kembali</button>
      </a>
    </div>
  );
};

export default EditAlbum;
