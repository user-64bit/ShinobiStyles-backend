import express from "express";
import db from "../db/conn.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
    res.send({
        Error: "Can't Fetch Anything because there isn't anything bitch...",
    });
});

// Get a list of 50 posts
router.get("/products", async (req, res) => {
    let collection = db.collection("clothing_cards");
    let results = await collection.find({}).limit(50).toArray();
    res.send(results);
});
export default router;
