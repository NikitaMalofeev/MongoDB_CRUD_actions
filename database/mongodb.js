import mongoose from "mongoose";

const connectDB = () => {

  if (mongoose.connections[0].readyState) {
    console.log("Already connected.");
    return;
  }

  mongoose
    .connect(process.env.MONGODB_URL, {
      
    }) 
    .then(() => console.log("Connected to MongoDB."))
    .catch((error) => console.log(error.message));
};

export default connectDB;
