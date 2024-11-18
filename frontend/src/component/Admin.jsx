import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const adminUser = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post('http://localhost:8000/adminpage/login/', adminUser);
      
      if (response.data.success) {
        localStorage.setItem('admin_access_token', response.data.access_token);
        localStorage.setItem('refresh_token', response.data.refresh_token);

        navigate('/home'); 
      } else if (response.data.error) {
        setMessage(response.data.error); 
      }
    } catch (err) {
      setMessage('Login failed. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='login'>
          <div className='login_main'>
            <h2>login</h2>
          <input type='text' placeholder='Username' onChange={(e) => setUserName(e.target.value)} value={username} />
          <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} />
          <button type='submit'>Login</button>
          {message && <p style={{ color: 'red' }}>{message}</p>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Admin;
