import { instance } from "../app.mjs";
import crypto from "crypto";

export const checkout = async (req, res) => {
    const options = {
        amount: Number(req.body.billed_amount * 100),
        currency: "INR",
    };
    const response = await instance.orders.create(options);
    res.status(200).json({
        order_id: response.id,
        currency: response.currency,
        amount: response.amount,
    });
};

export const paymentVerification = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_SECRET)
        .update(body.toString())
        .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;
    if (isAuthentic) {
        res.redirect(
            `${process.env.FRONTEND_URL}/paymentsuccess?reference=${razorpay_payment_id}`
        );
    } else {
        res.status(400).json({
            mesage: "Payment is Invalid...",
        });
    }
};
