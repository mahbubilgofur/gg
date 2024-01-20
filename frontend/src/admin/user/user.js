import Nav from '../asset/nav';
import '../style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/users')
      .then(response => {
        setUsers(response.data.users);
        console.log(response.data.users);
      })
      .catch(error => {
        console.error('Error fetching users: ', error);
      });
  }, []);

  const handleDelete = (userId) => {
    // Konfirmasi sebelum menghapus
    const confirmDelete = window.confirm('apakah yakin mau hapus user?');
    
    if (confirmDelete) {
      // Panggil API untuk menghapus user
      axios.delete(`http://localhost:8000/api/users/${userId}`)
        .then(response => {
          // Jika penghapusan berhasil, perbarui state users
          setUsers(users.filter(user => user.id_user !== userId));
        })
        .catch(error => {
          console.error('Error deleting user: ', error);
        });
    }
  };
    return (
        <div className="containerr">
<Nav/>
<div className="content">
        <div className='the-content'>
        <h2>Tbl User</h2>
        <div className='isi-content'>
        <div className='tombol'>
        <a href="/tambah_user">
        <button>Tambah</button>
      </a>
        </div>
        <div className='end-content'>
        <table>
            <thead>
                <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Nama Lengkap</th>
            <th>Alamat</th>
            <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
            {Array.isArray(users) && users.map(user => (
            <tr key={user.id_user}>
              <td>{user.id_user}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>{user.nama_lengkap}</td>
              <td>{user.alamat}</td>
              <td>
                <a href={`/edit_user/${user.id_user}`}>
                  <button>Edit</button>
                </a>
                <button onClick={() => handleDelete(user.id_user)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
            </tbody>
        </table>
        </div>
        </div>
        </div>
    </div>
        </div>

      
    )};
    export default User;