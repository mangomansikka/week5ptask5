const express = require("express");

const {
    getProduct,
    getProducts,
    createProduct,
    deleteProduct,
    patchProduct
} = require('../controllers/productController');



const productRoutes = () => {
    const router = express.Router();
    //Get all products
    router.get("/api/products", getProducts);

    //Get a single product by ID
    router.get("/api/products/:id", getProduct);

    //Create a new product
    router.post("/api/products", createProduct);

    //Delete a product by ID
    router.delete("/api/products/:id", deleteProduct);

    //Update (Patch) a single product by ID
    router.patch("/api/products/:id", patchProduct);

    return router;
}

module.exports = productRoutes;
