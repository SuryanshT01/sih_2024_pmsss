// models/Application.js
import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  nationality: { type: String, required: true },
  addressLine1: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  educationLevel: { type: String, required: true },
  institutionName: { type: String, required: true },
  courseOfStudy: { type: String, required: true },
  academicAchievements: { type: String },
  extraCurricularActivities: { type: String },
  familyIncome: { type: Number, required: true },
  supportingDocument: { type: String }, // This will store the file path
  // -------------------- Admin Use Only --------------------
  courseFees: { type: Number, required: true },
  approvedScholarshipAmount: { type: Number,default: 0 },
  applicationStatus: { type: String, enum: ['Pending', 'Viewed', 'Approved', 'Rejected'], default: 'Pending' }, 
  paymentStatus: { type: String, enum: ['Pending', 'Processed'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Application = mongoose.model('Application', ApplicationSchema);
export default Application;