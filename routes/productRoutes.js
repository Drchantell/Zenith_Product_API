const express = require("express");
const mongoose = require("mongoose");
const Product = require("../models/Product");

const router = express.Router();

// POST /api/products
// Create a new product
router.post("/", async (req, res) => {
  try {
    if (!req.body || Array.isArray(req.body)) {
      return res.status(400).json({ message: "Request body must be a product object." });
    }

    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({
      message: "Unable to create product.",
      error: error.message,
    });
  }
});

// GET /api/products
// Get all products with optional filtering, sorting, and pagination
router.get("/", async (req, res) => {
  try {
    const {
      category,
      minPrice,
      maxPrice,
      sortBy,
      page = 1,
      limit = 10,
    } = req.query;

    const filter = {};

    // Filter by category
    if (category) {
      filter.category = category;
    }

    // Filter by minimum and/or maximum price
    if (minPrice !== undefined || maxPrice !== undefined) {
      filter.price = {};

      if (minPrice !== undefined) {
        const minimum = Number(minPrice);

        if (!Number.isFinite(minimum)) {
          return res.status(400).json({ message: "minPrice must be a number." });
        }

        filter.price.$gte = minimum;
      }

      if (maxPrice !== undefined) {
        const maximum = Number(maxPrice);

        if (!Number.isFinite(maximum)) {
          return res.status(400).json({ message: "maxPrice must be a number." });
        }

        filter.price.$lte = maximum;
      }

      if (
        filter.price.$gte !== undefined &&
        filter.price.$lte !== undefined &&
        filter.price.$gte > filter.price.$lte
      ) {
        return res.status(400).json({
          message: "minPrice cannot be greater than maxPrice.",
        });
      }
    }

    // Set up sorting
    const sortOptions = {};

    if (sortBy === "price_asc") {
      sortOptions.price = 1;
    } else if (sortBy === "price_desc") {
      sortOptions.price = -1;
    }

    // Set up pagination
    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    if (
      !Number.isInteger(pageNumber) ||
      !Number.isInteger(limitNumber) ||
      pageNumber < 1 ||
      limitNumber < 1 ||
      limitNumber > 100
    ) {
      return res.status(400).json({
        message: "page must be a positive integer and limit must be an integer from 1 to 100.",
      });
    }

    const skipAmount = (pageNumber - 1) * limitNumber;

    const products = await Product.find(filter)
      .sort(sortOptions)
      .skip(skipAmount)
      .limit(limitNumber);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Unable to retrieve products.",
      error: error.message,
    });
  }
});

// GET /api/products/:id
// Get one product by ID
router.get("/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid product ID." });
    }

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Unable to retrieve product.",
      error: error.message,
    });
  }
});

// PUT /api/products/:id
// Update one product by ID
router.put("/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid product ID." });
    }

    if (!req.body || Array.isArray(req.body) || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Request body must contain fields to update." });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({
      message: "Unable to update product.",
      error: error.message,
    });
  }
});

// DELETE /api/products/:id
// Delete one product by ID
router.delete("/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid product ID." });
    }

    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    res.status(500).json({
      message: "Unable to delete product.",
      error: error.message,
    });
  }
});

module.exports = router;
