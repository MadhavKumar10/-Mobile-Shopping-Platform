import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {

  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };
  
  return (
    <header className="header">
      <h1>Zam Zam Electronics</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Categories">Categories</Link>
        <Link to="/ContactUs">ContactUs</Link>
        {token ? (
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
