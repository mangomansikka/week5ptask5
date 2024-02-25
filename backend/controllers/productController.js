const Product = require("../models/productModel");

// Create a new product
const createProduct = async (req, res) => {
  try {
    const {name, price, inStock} = req.body;
    if (!name || !price || inStock === undefined) {
      return res
        .status(400)
        .json({ error: "All fields (name, price, inStock) are required" });
    }

    const newProduct = new Product({ name, price, inStock });
    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (err) {
    console.error('Error in getProduct:');
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error('Error in getProducts:');
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET a single product by ID
const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    console.error('Error in getProduct:');
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DELETE a product by ID
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error('Error in deleteProduct:', error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update (Patch) a single product by ID
const patchProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    console.error('Error in patchProduct:');
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Replace (Put) a single product by ID
const putProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }// To return the updated document
    );

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    console.error('Error in putService:');
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    patchProduct,
    putProduct
};