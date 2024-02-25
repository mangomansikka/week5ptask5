const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
	price: {
        type: Number,
        required: true
    },
	inStock:{
        type: Boolean,
        required: true
    }
});

const Product = mongoose.model("Product", serviceSchema);
module.exports = Product;