// routes/application.js
import express from "express";
import { getApplications, createApplication, updateApplication } from "../controllers/application.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// GET all applications
router.get('/data', getApplications);

// POST new application
router.post('/', upload.fields([
  { name: 'profilePhoto', maxCount: 1 },
  { name: 'signaturePhoto', maxCount: 1 },
  { name: 'aadharCard', maxCount: 1 },
  { name: 'matriculationCertificate', maxCount: 1 },
  { name: 'intermediateCertificate', maxCount: 1 },
  { name: 'casteCertificate', maxCount: 1 },
  { name: 'incomeCertificate', maxCount: 1 },
  { name: 'other', maxCount: 1 }
]), createApplication);

// PUT update application
router.put('/:id', updateApplication);

export default router;