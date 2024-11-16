import mongoose from "mongoose";

const cloudDB =
  "mongodb+srv://sanskarsrivastava18:abc@cluster0.r1n1a.mongodb.net/";

const mongoURI = cloudDB;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error: ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
