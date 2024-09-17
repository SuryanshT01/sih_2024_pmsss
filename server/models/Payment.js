import mongoose from 'mongoose';

const PaymentSchema = mongoose.Schema({
    applicationID: { type: String, required: true },
    approvedAmount: { type: Number, required: true },
    receiverID: { type: String, required: true },
    senderID: { type: String, required: true },
    payerID: { type: String, required: true },
    razorpay_order_id: { type: String, required: true },
    razorpay_payment_id: { type: String, required: true },
    razorpay_signature: { type: String, required: true },
},
    { timestamps: true }
);

const Payments = mongoose.model('Payments', PaymentSchema);

export default Payments;