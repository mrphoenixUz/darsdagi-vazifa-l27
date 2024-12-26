import React, { useState } from 'react';
import { useRegisterMutation } from '../features/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [register] = useRegisterMutation();
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData).unwrap();
      setTimeout(() => {
        navigate("/login")
      }, 3000);
      setMessage('Registration successful! You are being redirect to login page.');
    } catch (error) {
      setMessage(error?.data?.message || 'Registration failed!');
      console.error('Error:', error);
    }
  };

  return (
    <div className='p-6 max-w-md mx-auto'>
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="border p-2 mb-4 w-full"
          value={formData.name}
          onChange={handleChange}
          required
        />
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
          minLength={6}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Register</button>
      </form>
      <p className="mt-4 text-green-600">{message}</p>
    </div>
  );
};

export default Register;
