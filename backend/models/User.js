const mongoose=require('mongoose')

const utilityAccountSchema=new mongoose.Schema({
    electricityID:{type:String},
    waterId:{type:String},
    wifiId:{type:String},
    //more later
})

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:String,
    phone:String,
    address:String,
    esewaId:{type:String, required:true, unique:true},
    sessionToken:{type:String, required:true},
    UtilityAccounts:utilityAccountSchema,
}   ,{
    timestamps:true
    });

module.exports=mongoose.model('User',userSchema)