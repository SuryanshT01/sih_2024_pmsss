import express from "express";
import { getApplications, createApplication, updateApplication } from "../controllers/application.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// GET all applications
router.get('/data', getApplications);

// POST new application
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

// PUT update application
router.put('/:id', updateApplication);

export default router;