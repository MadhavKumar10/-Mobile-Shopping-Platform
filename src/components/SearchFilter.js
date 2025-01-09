import React, { useState, useEffect } from 'react';
import '../styles/SearchFilter.css';

const SearchFilter = ({ products, setFilteredProducts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]); // Default range

  const categories = Array.from(new Set(products.map((product) => product.category)));

  // Apply filters when criteria change
  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, priceRange, products, setFilteredProducts]);

  return (
    <div className="search-filter">
      {/* Search Box */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Category Dropdown */}
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Featured</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Price Range */}
      <div className="price-range">
        <label>Price Range:</label>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[0]}
          onChange={(e) =>
            setPriceRange([parseInt(e.target.value), priceRange[1]])
          }
        />
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], parseInt(e.target.value)])
          }
        />
        <span>
          ${priceRange[0]} - ${priceRange[1]}
        </span>
      </div>
    </div>
  );
};

export default SearchFilter;
