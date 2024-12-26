import React, { useState } from 'react';
import { useLoginMutation } from '../features/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [login] = useLoginMutation();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData).unwrap();
      console.log("resss", response)
      localStorage.setItem('token', response.token);
      // localStorage.setItem('userId', response.user.id);
      navigate('/');
    } catch (error) {
      setMessage(error?.data?.message || 'Login failed!');
    }
  };
  
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 mb-4 w-full"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 mb-4 w-full"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
      <p className="mt-4 text-red-500">{message}</p>
    </div>
  );
};

export default Login;
