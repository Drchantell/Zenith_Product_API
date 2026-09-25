const mongoose = require("mongoose");

function validateMongoUri(mongoUri) {
  const trimmedUri = mongoUri?.trim();

  if (!trimmedUri) {
    throw new Error("MONGO_URI is not configured.");
  }

  const placeholderPatterns = [
    "PASTE_YOUR_",
    "YOUR_USERNAME",
    "YOUR_PASSWORD",
    "YOUR_CLUSTER",
    "your_username",
    "your_password",
    "your_cluster",
  ];

  if (placeholderPatterns.some((pattern) => trimmedUri.includes(pattern))) {
    throw new Error("MONGO_URI is not configured. Add a real MongoDB Atlas connection string.");
  }

  if (!trimmedUri.startsWith("mongodb://") && !trimmedUri.startsWith("mongodb+srv://")) {
    throw new Error("MONGO_URI must start with mongodb:// or mongodb+srv://.");
  }

  return trimmedUri;
}

async function connectDB() {
  const mongoUri = validateMongoUri(process.env.MONGO_URI);

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    throw error;
  }
}

module.exports = connectDB;
module.exports.validateMongoUri = validateMongoUri;
