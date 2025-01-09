const Product = require('../models/Product');

// Get all products
exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// Get product by ID
exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
};

// Create new product
exports.createProduct = async (req, res) => {
  const { name, image, price, description, category } = req.body;

  const product = new Product({
    name,
    image,
    price,
    description,
    category,
  });

  await product.save();
  res.status(201).json(product);
};

// Update product
exports.updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  Object.assign(product, req.body);
  await product.save();
  res.json(product);
};

// Delete product
exports.deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  await product.remove();
  res.json({ message: 'Product deleted' });
};
