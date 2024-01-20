import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../login/style.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Data:', formData);

    axios.post('http://localhost:8000/api/login', formData)
      .then(response => {
        console.log('Response Data:', response.data);

        if (response.data.user) {
          console.log('Login successful');
          navigate('/dashboard');
        } else {
          console.error('Login failed:', 'Invalid user data received from the server.');
        }
      })
      .catch(error => {
        console.error('Login failed:', error.response?.data?.message || 'An error occurred during login');
      });
  };

  return (
    <div className='containerrr'>
      <div className='auth'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
        <div className='cnt'>Belum punya akun?{' '}
          <Link to="/register">Klik</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
