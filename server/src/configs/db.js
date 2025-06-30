import mongoose from "mongoose";

const connectDB = async(req,res)=>{
    try{
        mongoose.connection.on('connected',()=>{console.log('Database connected')})
        await mongoose.connect('#');
    }catch(error){
        console.log('Database not connected');
    }
}

export default connectDB;