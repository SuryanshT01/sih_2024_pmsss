// controllers/application.js
import Application from "../models/Application.js";

export const getApplications = async (req, res) => {
  try {
    const applications = await Application.find();
    res.status(200).json(applications);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createApplication = async (req, res) => {
  const applicationData = req.body;
  
  // Handle file uploads
  if (req.files) {
    Object.keys(req.files).forEach(key => {
      applicationData.documents[key] = req.files[key][0].path;
    });
  }

  const newApplication = new Application(applicationData);

  try {
    await newApplication.save();
    res.status(201).json(newApplication);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateApplication = async (req, res) => {
  const { id } = req.params;
  const application = req.body;

  try {
    const updatedApplication = await Application.findByIdAndUpdate(id, application, { new: true });
    if (!updatedApplication) {
      return res.status(404).json({ message: "Application not found" });
    }
    res.status(200).json(updatedApplication);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};