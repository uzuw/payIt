const express=require('express');
const mongoose=require('mongoose');
const cors= require('cors');
const dotenv=require('dotenv');
require('colors')

dotenv.config();
const app=express();

//Middleware 
app.use(cors({
    origin: 'http://localhost:5173', // your frontend origin
    credentials: true,              // allow cookies to be sent
  }));
app.use(express.json());

// //Routes

//session
const session = require('express-session');

app.use(session({
  secret: 'your-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // true in production with HTTPS
    httpOnly: true,
    sameSite: 'lax'
  }
}));



//default route
app.get('/',(req,res)=>{
    res.send("Home Utility Payment api is running...")
});

//auth routes
const authRoutes=require('./routes/authRoutes') 
app.use('/api',authRoutes);

//payment route
const paymentRoutes = require('./routes/paymentRoutes');
app.use('/api/payments', paymentRoutes);

//email route
const contact = require("./routes/contact");
app.use("/api/contact", contact);


//MongoDB Connection 
const connectDB=require('./config/db');
connectDB();

//Start Server 
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>console.log(`server running port ${PORT}`));