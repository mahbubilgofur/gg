import '../style.css';
import Nav from '../asset/nav';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Album = () => {const [albums, setAlbums] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8000/api/albums')
        .then(response => {
          setAlbums(response.data.albums);
        })
        .catch(error => {
          console.error('Error fetching albums: ', error);
        });
    }, []);
  
    const handleDelete = (albumId) => {
      const confirmDelete = window.confirm('apakah yakin mau hapus album?');
      
      if (confirmDelete) {
        axios.delete(`http://localhost:8000/api/albums/${albumId}`)
          .then(response => {
            setAlbums(albums.filter(album => album.id_album !== albumId));
          })
          .catch(error => {
            console.error('Error deleting album: ', error);
          });
      }
    };
  

  return (
    <div className="containerr">
    <Nav/>
    <div className="content">
      <div className='the-content'>
        <h2>Tbl Album</h2>
        <div className='isi-content'>
          <div className='tombol'>
            <a href="/tambah_album">
              <button>Tambah</button>
            </a>
          </div>
          <div className='end-content'>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nama Album</th>
                  <th>Deskripsi</th>
                  <th>Tgl Dibuat</th>
                  <th>Id User</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(albums) && albums.map(album => (
                  <tr key={album.id_album}>
                    <td>{album.id_album}</td>
                    <td>{album.nama_album}</td>
                    <td>{album.deskripsi}</td>
                    <td>{album.tgl_dibuat}</td>
                    <td>{album.id_user}</td>
                    {/* Add other columns as needed */}
                    <td>
                      <a href={`/edit_album/${album.id_album}`}>
                        <button>Edit</button>
                      </a>
                      <button onClick={() => handleDelete(album.id_album)}>
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

export default Album;
