import express from "express";
import {
    checkout,
    paymentVerification,
} from "../controller/paymentController.mjs";

const router = express.Router();
router.use(express.json());

router.route("/checkout").post(checkout);
router.route("/paymentverification").post(paymentVerification);

export default router;
