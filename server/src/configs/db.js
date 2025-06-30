import mongoose from "mongoose";

const connectDB = async(req,res)=>{
    try{
        mongoose.connection.on('connected',()=>{console.log('Database connected')})
        await mongoose.connect('mongodb+srv://cargo:Admincargo@cluster0.iwyfwdu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    }catch(error){
        console.log('Database not connected');
    }
}

export default connectDB;