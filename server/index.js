import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import dcmRoutes from "./routes/dcm.js";
import clientRoutes from "./routes/client.js";
import authRoutes from "./routes/auth.js";
import caseRoutes from "./routes/case.js";
import salesRoutes from "./routes/sales.js";
import nlpRoutes from "./routes/nlp.js";
import applicationRoutes from "./routes/application.js"; // New import
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { createCase } from "./controllers/case.js";
import { createApplication } from "./controllers/application.js"; // New import
import webPush from "web-push";
import Razorpay from "razorpay";
import fs from "fs";

//data imports
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import OverallStat from "./models/OverallStat.js";
import Application from "./models/Application.js"; // New import
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data/index.js";

//Configurations

dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));


//Mongoose Setup

const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connection successful!");
    app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`));
    //User.insertMany(dataUser)
    //Product.insertMany(dataProduct);
    //ProductStat.insertMany(dataProductStat);
    //OverallStat.insertMany(dataOverallStat);
  })
  .catch((err) => {
    console.error(`MongoDB connection error: ${err.message}`);
    process.exit(1);
  });


// Razorpay payment integration
export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

//File Storage

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

//Routes with File
app.post("/casecreate", createCase);
app.post("/application", upload.single("supportingDocument"), createApplication); // New route

// PUSHER

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;
webPush.setVapidDetails(
  "mailto:test@test.com",
  publicVapidKey,
  privateVapidKey
);
app.post("/subscribe", (req, res) => {
  const { subscription, title, message } = req.body;
  const payload = JSON.stringify({ title, message });
  webPush
    .sendNotification(subscription, payload)
    .catch((err) => console.error("err", err));
  res.status(200).json({ success: true });
});

//Routes

app.use("/dcm", dcmRoutes);
app.use("/client", clientRoutes);
app.use("/auth", authRoutes);
app.use("/case", caseRoutes);
app.use("/sales", salesRoutes);
app.use("/nlp", nlpRoutes);
app.use("/applications", applicationRoutes); // New route

