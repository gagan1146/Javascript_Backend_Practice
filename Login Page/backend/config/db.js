import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const URI = process.env.MONGODB_URI;
    console.log(URI);
    await mongoose.connect(URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
