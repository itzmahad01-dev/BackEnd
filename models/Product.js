import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    date: String,
    day: String,
    price: Number,
    name: String
});

export const Product = mongoose.model("Product", productSchema);

