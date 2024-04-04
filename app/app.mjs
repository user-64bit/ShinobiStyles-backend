import cors from "cors";
import express from "express";
import posts from "./routes/posts.mjs";
import { config } from "dotenv";
import Razorpay from "razorpay";
import paymentRoute from "./routes/payment.mjs";
import product from "./routes/product.mjs";

config({ path: ".env" });
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", posts);
app.use("/api", paymentRoute);
app.use("/", product);

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
});

export default function handler(req, res) {
    const path = req.url;
    const method = req.method;
    app(req, res);
}
