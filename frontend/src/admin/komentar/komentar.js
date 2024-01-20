import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../asset/nav';
import '../style.css';

const Komentar = () => {
  const [komentars, setKomentars] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/komentars')
      .then(response => {
        setKomentars(response.data.komentars);
      })
      .catch(error => {
        console.error('Error fetching komentars: ', error);
      });
  }, []);

  const handleDelete = (id_komentar) => {
    const confirmDelete = window.confirm('Apakah yakin mau hapus komentar?');

    if (confirmDelete) {
      axios.delete(`http://localhost:8000/api/komentars/${id_komentar}`)
        .then(response => {
          setKomentars(komentars.filter(komentar => komentar.id_komentar !== id_komentar));
        })
        .catch(error => {
          console.error('Error deleting komentar: ', error);
        });
    }
  };

  return (
    <div className="containerr">
    <Nav/>
    <div className="content">
      <div className='the-content'>
        <h2>Tbl Komentar</h2>
        <div className='isi-content'>
          <div className='tombol'>
            <a href="/tambah_komentar">
              <button>Tambah</button>
            </a>
          </div>
          <div className='end-content'>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Foto ID</th>
                    <th>User ID</th>
                    <th>Comment</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(komentars) && komentars.map(komentar => (
                    <tr key={komentar.id_komentar}>
                      <td>{komentar.id_komentar}</td>
                      <td>{komentar.id_foto}</td>
                      <td>{komentar.id_user}</td>
                      <td>{komentar.isi_komentar}</td>
                      <td>{komentar.tgl_komentar}</td>
                      <td>
                        <a href={`/edit_komentar/${komentar.id_komentar}`}>
                          <button>Edit</button>
                        </a>
                        <button onClick={() => handleDelete(komentar.id_komentar)}>
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

export default Komentar;
