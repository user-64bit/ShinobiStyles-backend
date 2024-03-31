import express from "express";
import { generateProductId } from "../controller/generateProductId.mjs";

const router = express.Router();
router.use(express.json());

router.route("/product_id").post(generateProductId);
export default router;
