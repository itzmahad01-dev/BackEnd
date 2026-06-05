import {Product}  from "../models/Product.js";

export const addProduct = async (req, res) => {
    const product = await Product.create(req.body);
    res.json(product);
};

export const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

export const deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
};

export const updateProduct = async (req, res) => {
    const updated = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(updated);
};