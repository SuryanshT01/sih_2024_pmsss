// models/Application.js
import mongoose from "mongoose";

const AcademicDetailSchema = new mongoose.Schema({
  exam: { type: String, required: true },
  schoolName: { type: String, required: true },
  yearOfPassing: { type: Number, required: true },
  percentage: { type: Number, required: true, min: 0, max: 100 },
});

const ApplicationSchema = new mongoose.Schema({
  candidateName: { type: String, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  reserveCategory: { type: Boolean, default: false },
  category: { type: String },
  email: { type: String, required: true },
  totalFamilyIncome: { type: Number, required: true },
  bankAccountNumber: { type: String, required: true },
  ifscCode: { type: String, required: true },
  branchName: { type: String, required: true },
  academicDetails: [AcademicDetailSchema],
  addressLine1: { type: String, required: true },
  addressLine2: { type: String },
  addressLine3: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  documents: {
    profilePhoto: { type: String },
    signaturePhoto: { type: String },
    aadharCard: { type: String },
    matriculationCertificate: { type: String },
    intermediateCertificate: { type: String },
    casteCertificate: { type: String },
    incomeCertificate: { type: String },
    other: { type: String },
  },
  applicationStatus: { type: String, default: 'Pending' },
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