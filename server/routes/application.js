// routes/applications.js
const express = require('express');
const router = express.Router();
const Application = require('../models/Application');
const upload = require('../middleware/upload'); // You'll need to create this middleware for file uploads

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

module.exports = router;