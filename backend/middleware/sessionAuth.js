const User=require('../models/User');

const sessionAuth=async (req,res,next ) =>{
    try{
        const token=req.headers['x-session-token'];
        if(!token){
            return res.status(401).json({
                message:'No session token provided'
            })
        }

        const user=await User.findOne({sessionToken:token});

        if(!user){
            return res.status(401).json({
                message:'Invalid or expired session token'
            })
        }

        req.user=user;//attach user to the request object
        next();//continue to route

    }
    catch(err){
        res.status(500).json({error:'Server error in session authentication'})
    }

};

module.exports =sessionAuth;