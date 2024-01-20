import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../asset/nav';
import '../style.css';

const Like = () => {
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/likes')
      .then(response => {
        setLikes(response.data.likes);
      })
      .catch(error => {
        console.error('Error fetching likes: ', error);
      });
  }, []);

  const handleDelete = (likeId) => {
    const confirmDelete = window.confirm('apakah yakin untuk hapus like?');

    if (confirmDelete) {
      axios.delete(`http://localhost:8000/api/likes/${likeId}`)
        .then(response => {
          setLikes(likes.filter(like => like.id_like !== likeId));
        })
        .catch(error => {
          console.error('Error deleting like: ', error);
        });
    }
  };

  return (
    <div className="containerr">
      <Nav />
      <div className="content">
        <div className='the-content'>
          <h2>Tbl Like</h2>
          <div className='isi-content'>
            <div className='tombol'>
              <a href="/tambah_like">
                <button>Add Like</button>
              </a>
            </div>
            <div className='end-content'>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Foto ID</th>
                    <th>User ID</th>
                    <th>Date Liked</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(likes) && likes.map(like => (
                    <tr key={like.id_like}>
                      <td>{like.id_like}</td>
                      <td>{like.id_foto}</td>
                      <td>{like.id_user}</td>
                      <td>{like.tgl_like}</td>
                      <td>
                        <a href={`/edit_like/${like.id_like}`}>
                          <button>Edit</button>
                        </a>
                        <button onClick={() => handleDelete(like.id_like)}>
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
  );
};

export default Like;
