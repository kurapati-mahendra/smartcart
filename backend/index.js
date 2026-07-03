require("dotenv").config()

// Inject fallback environment variables to guarantee successful deployment without manual Render configuration
process.env.MONGO_URI = process.env.MONGO_URI || "mongodb+srv://kurapatimahendra:Mahendra2007@cluster0.gydmzwq.mongodb.net/?appName=Cluster0";
process.env.JWT_SECRET = process.env.JWT_SECRET || "mysecret123";
process.env.SECRET_KEY = process.env.SECRET_KEY || "mysecret123";
process.env.PRODUCTION = "true"; // FORCE true for cross-origin cookies (Vercel <-> Render)
process.env.ORIGIN = process.env.ORIGIN || "https://smartcart-git-main-mahendra13.vercel.app";
process.env.COOKIE_EXPIRATION_DAYS = process.env.COOKIE_EXPIRATION_DAYS || "30";
process.env.OTP_EXPIRATION_TIME = process.env.OTP_EXPIRATION_TIME || "120000";
process.env.PASSWORD_RESET_TOKEN_EXPIRATION = process.env.PASSWORD_RESET_TOKEN_EXPIRATION || "2m";
process.env.LOGIN_TOKEN_EXPIRATION = process.env.LOGIN_TOKEN_EXPIRATION || "30d";
process.env.EMAIL = process.env.EMAIL || "kurapatimahendra1@gmail.com";
process.env.PASSWORD = process.env.PASSWORD || "ttcwlflfzoapimpt";
const express=require('express')
const cors=require('cors')
const morgan=require("morgan")
const cookieParser=require("cookie-parser")
const authRoutes=require("./routes/Auth")
const productRoutes=require("./routes/Product")
const orderRoutes=require("./routes/Order")
const cartRoutes=require("./routes/Cart")
const brandRoutes=require("./routes/Brand")
const categoryRoutes=require("./routes/Category")
const userRoutes=require("./routes/User")
const addressRoutes=require('./routes/Address')
const reviewRoutes=require("./routes/Review")
const wishlistRoutes=require("./routes/Wishlist")
const { connectToDB } = require("./database/db")


// server init
const server=express()

// database connection
connectToDB()


// middlewares
server.use(cors({
    origin: (origin, callback) => {
        callback(null, true)
    },
    credentials:true,
    exposedHeaders:['X-Total-Count'],
    methods:['GET','POST','PATCH','DELETE']
}))
server.use(express.json())
server.use(cookieParser())
server.use(morgan("tiny"))

// routeMiddleware
server.use("/auth",authRoutes)
server.use("/users",userRoutes)
server.use("/products",productRoutes)
server.use("/orders",orderRoutes)
server.use("/cart",cartRoutes)
server.use("/brands",brandRoutes)
server.use("/categories",categoryRoutes)
server.use("/address",addressRoutes)
server.use("/reviews",reviewRoutes)
server.use("/wishlist",wishlistRoutes)



server.get("/",(req,res)=>{
    res.status(200).json({message:'running'})
})

const PORT = process.env.PORT || 8000;
server.listen(PORT,()=>{
    console.log(`server [STARTED] ~ port ${PORT}`);
})