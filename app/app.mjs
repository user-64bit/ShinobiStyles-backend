import cors from "cors";
import express from "express";
import posts from "./routes/posts.mjs";
import { config } from "dotenv";
import Razorpay from "razorpay";
import paymentRoute from "./routes/payment.mjs";
config({ path: ".env" });

const PORT = 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", posts);
app.use("/api", paymentRoute);

app.get("/api/getkey", (req, res) => {
    res.status(200).json({ key: "rzp_test_rzJxEUddPf0TWa" });
});

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
});

// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
