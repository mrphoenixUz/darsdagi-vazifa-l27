import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Check token from localStorage
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
