const express=require('express');
const router=express.Router();


const {registerUser,getCurrentUser,loginUser}=require('../controllers/authController')
const sessionAuth = require('../middleware/sessionAuth');


//POST /api/resgister
router.post('/register',registerUser);

// POST /api/login
router.post('/login', loginUser);

// GET /api/me
router.post('/me', sessionAuth, getCurrentUser);


module.exports=router;
