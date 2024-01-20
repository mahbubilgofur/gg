import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';  // Import useHistory
import '../style.css';
import { useNavigate } from 'react-router-dom';

const Tambah = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    email: '',
    nama_lengkap: '',
    alamat: '',
  });

  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/users', userData)
      .then(response => {
        console.log('successfully: ', response.data);
        // Redirect back to user table after successful user creation
        navigate('/user');  // Use navigate instead of history.push
      })
      .catch(error => {
        console.error('Error creating user: ', error);
      });
  };


  return (
    <div className='tambah'>
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={userData.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={userData.password} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={userData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Nama Lengkap:
          <input type="text" name="nama_lengkap" value={userData.nama_lengkap} onChange={handleChange} />
        </label>
        <br />
        <label>
          Alamat:
          <textarea name="alamat" value={userData.alamat} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Tambah User</button>
      </form>
       
        <a href='/user'>
        <button>Kembali</button>
        </a>
     
    </div>
  );
};

export default Tambah;
