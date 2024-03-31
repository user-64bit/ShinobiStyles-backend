import cors from "cors";
import express from "express";
import posts from "./routes/posts.mjs";
import { config } from "dotenv";
import Razorpay from "razorpay";
import paymentRoute from "./routes/payment.mjs";
import product from "./routes/product.mjs";

config({ path: ".env" });
const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", posts);
app.use("/api", paymentRoute);
app.use("/", paymentRoute);
app.use("/", product);

app.get("/api/getkey", (req, res) => {
    res.status(200).json({ key: "rzp_test_rzJxEUddPf0TWa" });
});

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
});

// Wrap the Express app instance in a function
export default function handler(req, res) {
    // Handle the incoming request
    const path = req.url;
    const method = req.method;
    // ...
    // Handle other logic if needed

    // Pass the request and response objects to the Express app
    app(req, res);
}
