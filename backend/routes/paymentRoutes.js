const express=require('express');
const router=express.Router()
const Payment=require('../models/Payment')
const sessionAuth=require('../middleware/sessionAuth');

//@route POST /api/payments

router.post('/',sessionAuth, async(req,res)=>{
    const {utilityType, utilityId, amount, transactionId}= req.body;

    try{
        const payment=new Payment({
            user:req.user._id,
            utilityType,
            utilityId,
            amount,
            transactionId,
            status:'success'})
        await payment.save();
        res.status(201).json({
            message:'Payment Recorded',
            payment
        });
    }
    catch(err){
        res.status(500).json({
            error:err.message
        })
    }
});


//@route GET /api/payments
router.get('/',sessionAuth,async(req,res)=>{
    try{
        const payments= await Payment.find({user:req.user._id}).sort({paidAt:-1});
        res.json(payments);
    }
    catch(err){
        res.status(500).json({
            error:err.message
        });
    }
})

module.exports=router;