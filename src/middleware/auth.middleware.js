import jwt from 'jsonwebtoken';
import userModel from '../../DB/models/user.model.js';

 const auth=async(req,res,next)=>{

    const {authorization}=req.headers;
    if (!authorization.startsWith(process.env.BearerKey))
       return res.json({message:'invalid Bearer token'})
    const token = authorization.split(process.env.BearerKey)[1]
    const decoded= await jwt.verify(token,process.env.loginSignature)
    const authUser=await userModel.findById(decoded.id).select('userName')
    req.user=authUser;
    
    next();
 }

 export default auth;