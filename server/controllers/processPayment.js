import Payments from "../models/Payment";
import { instance } from "../index.js";
import crypto from "crypto";
import Application from "../models/Application.js"; 

 



export const checkout = async (application) => {
    const Slab1 = 30000;
    const Slab2 = 125000;
    const Slab3 = 300000;
    const MaxAmount = 300000;

    let payableAmount;

    // Calculate payable amount based on course fees and slabs
    if (application.courseFees <= Slab1) {
        payableAmount = Math.max(application.courseFees, Slab1);
    } else if (application.courseFees <= Slab2) {
        payableAmount = Math.max(application.courseFees, Slab2);
    } else if (application.courseFees <= Slab3) {
        payableAmount = Math.max(application.courseFees, Slab3);
    } else {
        payableAmount = application.courseFees;
    }

    payableAmount = Math.min(payableAmount, MaxAmount);


    try {
        await Application.findByIdAndUpdate(application._id,
            { approvedScholarshipAmount: payableAmount }
        );

        const options = {
            amount: Number(payableAmount),
            currency: "INR",
        };

        const order = await instance.orders.create(options);

        return res.status(200).json({
            success: true,
            order,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to process the order and update the scholarship",
            error: error.message,
        });
    }
};

