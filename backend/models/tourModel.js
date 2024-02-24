const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
});

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;