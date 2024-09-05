// routes/applications.js
import express from "express";
const router = express.Router();
//const Application = require('../models/Application');
import Application from "../models/Application.js";
//const upload = require('../middleware/upload');
import upload from "../middleware/upload.js";
 // You'll need to create this middleware for file uploads

router.post('/', upload.single('supportingDocument'), async (req, res) => {
  try {
    const applicationData = req.body;
    if (req.file) {
      applicationData.supportingDocument = req.file.path;
    }

    const newApplication = new Application(applicationData);
    const savedApplication = await newApplication.save();

    res.status(201).json(savedApplication);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;