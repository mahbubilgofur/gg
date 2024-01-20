import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Logout = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);

    useEffect(() => {
        // Periksa status autentikasi saat komponen dimount
        checkAuthenticationStatus();
    }, []);

    const checkAuthenticationStatus = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/check-auth', {
                withCredentials: true,
            });
            setIsLoggedIn(response.data.isLoggedIn);
        } catch (error) {
            console.error('Pengecekan autentikasi gagal:', error.response ? error.response.data.message : error.message);
        } finally {
            // Setelah pengecekan selesai, berhenti menampilkan pesan "Loading"
            setIsCheckingAuth(false);
        }
    };

    const handleLogout = async () => {
        try {
            setLoading(true);
            await axios.post('http://localhost:8000/api/logout', {}, {
                withCredentials: true,
            });
            // Redirect ke halaman login setelah logout berhasil
            navigate('/login');
        } catch (error) {
            console.error('Logout gagal:', error.response ? error.response.data.message : error.message);
        } finally {
            setLoading(false);
        }
    };

    if (isCheckingAuth) {
        // Menampilkan pesan "Loading" selama proses pengecekan autentikasi berlangsung
        return <p>Loading...</p>;
    }

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <p>Selamat datang! Anda sudah login.</p>
                    <button onClick={handleLogout} disabled={loading}>
                        Logout
                    </button>
                </div>
            ) : (
                <p>Anda belum login.</p>
            )}
        </div>
    );
};

export default Logout;

