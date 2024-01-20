import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User_add from './admin/user/tambah';
import User_edit from './admin/user/edit';
import Home from './asset/home';
import Dasboard from './admin/dasboard';
import User from './admin/user/user';
// 
import Album from './admin/album/album';
import Album_add from './admin/album/tambah';
import Album_edit from './admin/album/edit';
// 
import Foto from './admin/foto/foto';
import Foto_add from './admin/foto/tambah';
import Foto_edit from './admin/foto/edit';
// 
import Komentar from './admin/komentar/komentar';
import Komentar_add from './admin/komentar/tambah';
import Komentar_edit from './admin/komentar/edit';
// 
import Like from './admin/like/like';
import Like_add from './admin/like/tambah';
import Like_edit from './admin/like/edit';
// 




const App = () => {
  return (
    <Router>
      <Routes>
        {/* halamanadmin */}
        <Route path="/user" element={<User/>} />
        <Route path="/tambah_user" element={<User_add />} />
        <Route path="/edit_user/:id_user" element={<User_edit />} />
        {/*  */}
        <Route path="/album" element={<Album/>} />
        <Route path="/tambah_album" element={<Album_add />} />
        <Route path="/edit_album/:id_album" element={<Album_edit />} />
        {/*  */}
        <Route path="/foto" element={<Foto/>} />
        <Route path="/tambah_foto" element={<Foto_add />} />
        <Route path="/edit_foto/:id_foto" element={<Foto_edit />} />
        {/*  */}
        {/*  */}
        <Route path="/komentar" element={<Komentar/>} />
        <Route path="/tambah_komentar" element={<Komentar_add />} />
        <Route path="/edit_komentar/:id_komentar" element={<Komentar_edit />} />
        {/*  */}
        <Route path="/like" element={<Like/>} />
        <Route path="/tambah_like" element={<Like_add />} />
        <Route path="/edit_like/:id_like" element={<Like_edit />} />
        {/*  */}
        <Route path="/dasboard" element={<Dasboard/>} />
        {/* halmanhome */}
        <Route path="/" element={<Home/> } />

      </Routes>
    </Router>
  );
};

export default App;
