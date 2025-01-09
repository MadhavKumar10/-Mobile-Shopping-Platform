import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/CategoryPage.css';

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/products');
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Group products by category
  const groupedProducts = products.reduce((groups, product) => {
    if (!groups[product.category]) {
      groups[product.category] = [];
    }
    groups[product.category].push(product);
    return groups;
  }, {});

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="category-page">
      <h1>Categories</h1>
      {Object.keys(groupedProducts).map((category) => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="products-grid">
            {groupedProducts[category].map((product) => (
              <Link
                key={product._id}
                to={`/product/${product._id}`}
                className="product-item"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => (e.target.src = '/assets/placeholder.png')}
                />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
