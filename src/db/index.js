import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
  const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
  console.log(`\n mongoDb conencted !! DB Host: ${connectionInstance.connection.host}`);

//   console.log(connectionInstance);

    // app.on("error", (error) => {
    //   console.log("ERRR", error);
    //   throw error;
    // });
  } catch (error) {
    console.log("MONGODB CONNECTION error", error);
    process.exit(1);
  }
};


export default connectDB