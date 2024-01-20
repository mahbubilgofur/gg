import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../style.css';

const Edit = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    email: '',
    nama_lengkap: '',
    alamat: '',
  });

  const { id_user } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/users/${id_user}`)
      .then(response => {
        setUserData(response.data.user);
      })
      .catch(error => {
        console.error('Error fetching user details: ', error);
      });
  }, [id_user]);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8000/api/users/${id_user}`, userData)
      .then(response => {
        console.log('User updated successfully: ', response.data);
        navigate('/user');
      })
      .catch(error => {
        console.error('Error updating user: ', error);
      });
  };

  return (
    <div className='edit'>
      <h2>Edit User</h2>
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
        <button type="submit">Update User</button>
     
      </form>
        <a href='/user'>
        <button>Kembali</button>
        </a>
    </div>
  );
};

export default Edit;
