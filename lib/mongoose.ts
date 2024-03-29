import mongoose from "mongoose";
// yes

let isConnected: boolean = false;

export const connectToDataBase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    console.log("Missing mongoDB URL");
  }

  if (isConnected) {
    console.log("MongoDB is already connected");
  }

  try {
    if (!process.env.MONGODB_URL) {
      throw new Error("MONGODB_URL environment variable is not set.");
    }
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "DevStackFlow",
    });

    isConnected = true;
  } catch (error) {
    console.log("error connecting to MongoDb", error);
  }
};
