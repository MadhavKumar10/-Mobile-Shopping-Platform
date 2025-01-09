import axios from 'axios';

export const fetchProducts = async ({ category = '', search = '', minPrice = '', maxPrice = '' } = {}) => {
  try {
    const queryParams = new URLSearchParams();

    if (category) queryParams.append('category', category);
    if (search) queryParams.append('search', search);
    if (minPrice) queryParams.append('minPrice', minPrice);
    if (maxPrice) queryParams.append('maxPrice', maxPrice);

    const response = await axios.get(`/api/products?${queryParams.toString()}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
