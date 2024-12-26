import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';
import AddBookForm from './components/AddBookForm';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/login';
import Register from './pages/register';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/add-book"
          element={
            <PrivateRoute>
              <AddBookForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
