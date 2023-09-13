import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("connected to the database");
  } catch (e) {
    console.log(e);
  }
};
export default connectMongoDB;
