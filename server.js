import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import dns from "dns";
import productRoute from "./routes/productRoutes.js";

dns.setServers([
  "1.1.1.1",
  "8.8.8.8"
]);

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Root API
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend is Live 🚀"
  });
});

// Product Routes
app.use("/", productRoute);

const PORT = process.env.PORT || 5000;



export default app;
