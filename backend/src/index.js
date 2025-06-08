import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import songRoutes from "./routes/songRoutes.js";
import albumRoutes from "./routes/albumRoutes.js";
import statsRoutes from "./routes/statsRouts.js";
import { connectDB } from "./lib/db.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5001;

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statsRoutes);


app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
    connectDB();
});