const mongoose=require('mongoose');

const paymentSchema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    utilityType: { type: String, enum: ['electricity', 'water', 'wifi', 'other'] },
    utilityId:String,
    amount:Number,
    status:{type:String, default:'pending'},
    transactionId:String,
    paidAt:{type:Date, default:Date.now}
});

module.exports=mongoose.model('Payment',paymentSchema);