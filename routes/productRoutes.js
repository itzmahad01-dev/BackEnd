import express from "express";

import {
    addProduct,
    getProducts,
    deleteProduct,
    updateProduct
} from "../controllers/productControllers.js";

const router = express.Router();

router.post("/product", addProduct);
router.get("/products", getProducts);
router.delete("/product/:id", deleteProduct);
router.put("/product/:id", updateProduct);

export default router;