import Application from "../models/Application.js";
import { processPayment } from "../controllers/processPayment.js";
import Payments from "../models/Payment";
import crypto from "crypto";



export const getAllApplications = async (req, res) => {
    try {
        const applications = await Application.find();
        res.status(200).json(applications);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateApplicationStatus = async (req, res) => {
    const { id } = req.params;
    const { applicationStatus } = req.body;

    if (!['Viewed', 'Approved', 'Rejected'].includes(applicationStatus)) {
        return res.status(400).json({ error: 'Invalid status' });
    }

    try {
        const application = await Application.findByIdAndUpdate(id, { applicationStatus }, { new: true });

        if (!application) {
            return res.status(404).json({ error: 'Application not found' });
        }

        res.json(application);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update application status' });
    }
}

export const processPayments = async (req, res) => {
    const { id } = req.params;

    try {
        const application = await Application.findById(id);

        if (!application) {
            return res.status(404).json({ error: 'Application Not Found' });
        }

        if (application.applicationStatus !== 'Approved') {
            return res.status(400).json({ error: 'Application is not approved' });
        }

        //Will Integrate payment gateway here thode time baad
        const paymentResult = await processPayment(application);

        if (paymentResult.success) {
            application.paymentStatus = 'Completed';
            await application.save();
            res.json({ message: 'Payment successful' });
        } else {
            res.status(500).json({ error: 'Payment failed' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Payment processing failed' });
    }
}


export const paymentVerification = async (req, res) => {
    const { applicationID, approvedScholarshipAmount, receiverID, senderID, payerID, razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
        .update(body.toString())
        .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {

        await Payments.create({
            applicationID,
            approvedScholarshipAmount,
            receiverID,
            senderID,
            payerID,
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        });

        return res.redirect(
            `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
        );
    } else {
        return res.status(400).json({
            success: false,
        });
    }
};


export const getKey = async (req, res) => {
    try {
        return res.status(200).json({ key: process.env.RAZORPAY_KEY });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to get key' });
    }
}