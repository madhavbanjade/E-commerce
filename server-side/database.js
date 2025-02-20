import mongoose from "mongoose";


const connectMongoDb = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/Softtech");
    console.log('Database Connected!!');
    
}

export default connectMongoDb;