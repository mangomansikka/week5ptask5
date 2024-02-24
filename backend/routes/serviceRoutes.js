const express = require("express");

const {
    getServices,
    getService,
    createService,
    deleteService,
    patchService
} = require('../controllers/serviceController');

// express app
const app = express()

const serviceRoutes = () => {
    const router = express.Router();
    //Get all services
    router.get("/api/services", getServices);

    //Get a single service by ID
    router.get("/api/services/:id", getService);

    //Create a new service
    router.post("/api/services", createService);

    //Delete a service by ID
    router.delete("/api/services/:id", deleteService);

    //Update (Patch) a single service by ID
    router.patch("/api/services/:id", patchService);

    return router;
};

module.exports = serviceRoutes;
