const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Mongo connected'.bold.underline.green);
    }
    catch(err){
        console.log('MongoDB connection error'.bold.underline.red,err.message);
        process.exit(1);//Exit the procedure
    }
}

module.exports=connectDB