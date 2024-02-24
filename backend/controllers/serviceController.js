const Service = require("../models/serviceModel");

// Create a new service
const createService = async (req, res) => {
  try {
    const {icon, title, text, category } = req.body;
    if (!icon || !title || !text || !category) {
      return res
        .status(400)
        .json({ error: "All fields (icon, title, category) are required" });
    }

    const newService = new Service({ icon, title, text, category });
    const savedService = await newService.save();

    res.status(201).json(savedService);
  } catch (err) {
    console.error('Error in getService:');
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET all services
const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    console.error('Error in getServices:');
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET a single service by ID
const getService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.json(service);
  } catch (err) {
    console.error('Error in getService:');
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DELETE a service by ID
const deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.json({ message: "Service deleted successfully" });
  } catch (err) {
    console.error('Error in deleteService:', error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update (Patch) a single service by ID
const patchService = async (req, res) => {
  try {
    const service = await Service.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.json(service);
  } catch (err) {
    console.error('Error in patchService:');
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Replace (Put) a single service by ID
const putService = async (req, res) => {
  try {
    const service = await Service.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }// To return the updated document
    );

    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.json(service);
  } catch (err) {
    console.error('Error in putService:');
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
    createService,
    getServices,
    getService,
    deleteService,
    patchService,
    putService,
};