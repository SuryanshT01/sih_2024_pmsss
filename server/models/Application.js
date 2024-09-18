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
  supportingDocument: { type: String }, // File path for supporting document
  signature: { type: String, required: true }, // File path for signature
  photo: { type: String, required: true }, // File path for photo
  aadharCard: { type: String, required: true }, // File path for Aadhar card
  tenthMarksheet: { type: String, required: true }, // File path for 10th marksheet
  twelfthMarksheet: { type: String, required: true }, // File path for 12th marksheet
  domicileCertificate: { type: String, required: true }, // File path for domicile certificate
  casteCertificate: { type: String, required: true }, // File path for caste certificate
  applicationStatus: { type: String, default: 'Pending' }, // Default application status
  createdAt: { type: Date, default: Date.now }, // Automatically set creation date
});

const Application = mongoose.model('Application', ApplicationSchema);
export default Application;
