import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const URL = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error Connecting MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
