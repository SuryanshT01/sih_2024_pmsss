import express from "express";
import { getApplications, createApplication, updateApplication } from "../controllers/application.js";
import upload from "../middleware/upload.js";
import Application from "../models/Application.js"; // Ensure this import exists

const router = express.Router();

// GET all applications
router.get('/data', getApplications);

// POST new application with multiple file uploads
router.post(
  '/',
  upload.fields([
    { name: 'supportingDocument', maxCount: 1 },
    { name: 'signature', maxCount: 1 },
    { name: 'photo', maxCount: 1 },
    { name: 'aadharCard', maxCount: 1 },
    { name: 'tenthMarksheet', maxCount: 1 },
    { name: 'twelfthMarksheet', maxCount: 1 },
    { name: 'domicileCertificate', maxCount: 1 },
    { name: 'casteCertificate', maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const applicationData = req.body;

      // Attach file paths to corresponding fields
      if (req.files.supportingDocument) {
        applicationData.supportingDocument = req.files.supportingDocument[0].path;
      }
      if (req.files.signature) {
        applicationData.signature = req.files.signature[0].path;
      }
      if (req.files.photo) {
        applicationData.photo = req.files.photo[0].path;
      }
      if (req.files.aadharCard) {
        applicationData.aadharCard = req.files.aadharCard[0].path;
      }
      if (req.files.tenthMarksheet) {
        applicationData.tenthMarksheet = req.files.tenthMarksheet[0].path;
      }
      if (req.files.twelfthMarksheet) {
        applicationData.twelfthMarksheet = req.files.twelfthMarksheet[0].path;
      }
      if (req.files.domicileCertificate) {
        applicationData.domicileCertificate = req.files.domicileCertificate[0].path;
      }
      if (req.files.casteCertificate) {
        applicationData.casteCertificate = req.files.casteCertificate[0].path;
      }

      const newApplication = new Application(applicationData);
      const savedApplication = await newApplication.save();

      res.status(201).json(savedApplication);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

// PUT update application
router.put('/:id', updateApplication);

export default router;
