const User=require('../models/User')
const {v4:uuidv4} =require('uuid')

const registerUser=async(req,res)=>{
    try{
        const {name, email, phone, address, esewaId, utilityAccounts}=req.body;


        //if user already exists
        const existing =await User.findOne({esewaId});
        if(existing) return res.status(404).json({error:'User already exists'});

        const sessionToken= uuidv4();

        const user=new User({
            name,
            email,
            phone,
            address,
            esewaId,
            sessionToken,
            utilityAccounts,
        });
        
        await user.save();

        res.status(201).json({
            message:'User resistered',
            sessionToken,
            userId:user._id,
        });
    }catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const getCurrentUser=async (req,res) =>{
    res.json(req.user);
}

const loginUser = async (req, res) => {
  const { esewaId } = req.body;

  if (!esewaId) {
    return res.status(400).json({ message: "eSewa ID is required" });
  }

  try {
    const user = await User.findOne({ esewaId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate a new session token
    const sessionToken = uuidv4();
    user.sessionToken = sessionToken;
    await user.save();

    // Return the session token
    res.json({ sessionToken });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error during login" });
  }
};

module.exports={
    registerUser,
    getCurrentUser,
    loginUser,
};