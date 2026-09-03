import express from "express"
import {dbConnect} from './config/dbConnect.js'
import authModel from "./model/auth.Schema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import  {Authentication}  from "./middleware/middleware.js";

const app = express();
await dbConnect();
dotenv.config();

app.use(express.json());

app.post("/api/auth/register", async (req,res)=>{
   const {email,name,password} = req.body;

   const user = await authModel.create({email,name, password})

   

   const token = jwt.sign(
    {
        id: user._id,
    },
    process.env.JWT_SECRET_KEY
   )

   res.status(201).json({
    message:"user registered successfully",
    data:user,
    token,

   })
   console.log("user created");
   
})


app.get("/api/auth/me",Authentication,(req,res)=>{
    console.log(req.user)
    res.status(201).json({
        user:req.user,
    })
})

app.post("/api/auth/login", async (req, res)=>{

    const {email,password} = req.body;

    const user = await authModel.findOne({email});

    const token = jwt.sign({
        id: user._id
    },
    process.env.JWT_SECRET_KEY
)
   
      res.status(201).json({
        message:"user logged In",
        data:user,
        token,
      })

})

export default app;