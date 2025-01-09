const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Adjust to your Product model location

// GET /api/products
router.get('/', async (req, res) => {
  try {
    const { category, search, minPrice, maxPrice } = req.query;

    const query = {};

    // Add category filter if provided
    if (category) {
      query.category = category;
    }

    // Add search filter if provided
    if (search) {
      query.name = { $regex: search, $options: 'i' }; // Case-insensitive search
    }

    // Add price range filter if provided
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product details', error });
  }
});


module.exports = router;
