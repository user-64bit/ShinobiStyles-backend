import crypto from "crypto";

export const generateProductId = async (req, res) => {
    const title = req.body.title;
    const productId = crypto
        .createHmac("sha256", "Shinoby_Styles")
        .update(title.toString())
        .digest("hex");
    res.status(200).json({
        success: true,
        productId,
    });
};
