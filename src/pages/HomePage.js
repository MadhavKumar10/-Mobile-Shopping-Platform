// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from '../components/Banner';
import SearchFilter from '../components/SearchFilter';
import ProductList from '../components/ProductList';


const HomePage = () => {
  // Filter or select featured products
  const [products, setProducts] = useState([]); // All products from backend
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products to display

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/products');
        setProducts(data);
        setFilteredProducts(data); // Initialize filtered products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <div>
      <Banner /> 
      <SearchFilter
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default HomePage;
