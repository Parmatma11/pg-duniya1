import mongoose from "mongoose";

const URI = "";

const connectDB = async () =>{
    await mongoose.connect(URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("DB Connected...");
}

export default connectDB;