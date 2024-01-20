import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../asset/nav';
import '../style.css';

const Foto = () => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/fotos')
      .then(response => {
        setFotos(response.data.fotos);
      })
      .catch(error => {
        console.error('Error fetching fotos: ', error);
      });
  }, []);

  const handleDelete = (id_foto) => {
    const confirmDelete = window.confirm('apakah yakin mau hapus foto?');

    if (confirmDelete) {
      axios.delete(`http://localhost:8000/api/fotos/${id_foto}`)
        .then(response => {
          setFotos(fotos.filter(foto => foto.id_foto !== id_foto));
        })
        .catch(error => {
          console.error('Error deleting foto: ', error);
        });
    }
  };

  return (
    <div className="containerr">
    <Nav/>
    <div className="content">
      <div className='the-content'>
        <h2>Tbl Foto</h2>
        <div className='isi-content'>
          <div className='tombol'>
            <a href="/tambah_foto">
              <button>Tambah</button>
            </a>
          </div>
          <div className='end-content'>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Judul Foto</th>
                  <th>Deskripsi</th>
                  <th>Tanggal Unggah</th>
                  <th>Lokasi File</th>
                  <th>Id Album</th>
                  <th>Id User</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(fotos) && fotos.map(foto => (
                  <tr key={foto.id_foto}>
                    <td>{foto.id_foto}</td>
                    <td>{foto.judul_foto}</td>
                    <td>{foto.deskripsi_foto}</td>
                    <td>{foto.tgl_unggah}</td>
                    <td>{foto.lokasi_file}</td>
                    <td>{foto.id_album}</td>
                    <td>{foto.id_user}</td>
                    <td>
                      <a href={`/edit_foto/${foto.id_foto}`}>
                        <button>Edit</button>
                      </a>
                      <button onClick={() => handleDelete(foto.id_foto)}>
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

export default Foto;
