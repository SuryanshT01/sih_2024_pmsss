
import express from 'express'
import { getAllApplications, updateApplicationStatus, processPayments, paymentVerification, getKey } from '../controllers/admin.js'
// import { verifyToken } from "../middleware/auth.js"/

const router = express.Router();

//Routes 
router.get('/admin/applications', getAllApplications);
router.patch('/admin/applications:id', updateApplicationStatus);
router.get('/admin/process-payment:id', processPayments);
router.post('/admin/verify', paymentVerification);
router.get('/admin/getKey', getKey);

export default router;