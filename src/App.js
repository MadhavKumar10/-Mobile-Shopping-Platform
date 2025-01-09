// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import ContactUs from './pages/ContactUs';
import CategoryPage from './pages/CategoryPage';
import Login from './pages/Login';
import Signup from './pages/Signup';


const App = () => {
  return (
    <>
     <Header />
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
