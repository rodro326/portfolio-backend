import dotenv from "dotenv";
import app from "./app";
import connectDB from "./config/db";

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Start Server
app.listen(PORT, () => {
  console.log(`Portfolio Backend running on port ${PORT}`);
});