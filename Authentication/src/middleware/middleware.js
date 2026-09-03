import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import authModel from '../model/auth.Schema.js';

dotenv.config()

export const Authentication = async (req,res,next)=>{

    const token = req.headers.authorization

    
    

    if(!token){
      return  res.status(401).json(
            {message:"invalid token"}
        )
    }

    const data = jwt.verify(token,process.env.JWT_SECRET_KEY);

    const user =  await authModel.findById(data.id);

    console.log(user)

    req.user =user;
    next();

}

