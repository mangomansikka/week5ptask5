const express = require("express");
const connectDB = require("../config/db");

const {
    getTours,
    getTour,
    createTour,
    deleteTour,
    patchTour
} = require('../controllers/tourController');

// express app
const app = express()
app.use(express.json());

const tourRoutes = () => {
    const router = express.Router();
    //Get all tours
    router.get("/api/tours", getTours);
  
    //Get a single tour by ID
    router.get("/api/tours/:id", getTour);
  
    //Create a new tour
    router.post("/api/tours", createTour);
  
    //Delete a tour by ID
    router.delete("/api/tours/:id", deleteTour);
  
    //Update (Patch) a single tour by ID
    router.patch("/api/tours/:id", patchTour);
  
    return router;
  };

module.exports = tourRoutes;

