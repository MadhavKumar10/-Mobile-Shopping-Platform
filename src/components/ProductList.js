import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductList.css';

const ProductList = ({ products }) => {
  // Group products by category
  const groupedProducts = products.reduce((groups, product) => {
    if (!groups[product.category]) {
      groups[product.category] = [];
    }
    groups[product.category].push(product);
    return groups;
  }, {});

  return (
    <div className="product-list">
      {Object.keys(groupedProducts).map((category) => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="products-grid">
            {groupedProducts[category].map((product) => (
              <Link
                key={product._id} // Use `_id` for unique key
                to={`/product/${product._id}`} // Use `_id` for URL
                className="product-item"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => (e.target.src = '/assets/placeholder.png')} // Placeholder image
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

export default ProductList;
