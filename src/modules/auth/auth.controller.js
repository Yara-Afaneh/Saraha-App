
import userModel from './../../../DB/models/user.model.js';
import bcrypt from 'bcryptjs';
import  jwt from 'jsonwebtoken';
import sendMail from '../../utils/sendEmail.js';

export const register= async(req,res)=>{
    const {userName,email,password}=req.body;
    const user= await userModel.findOne({email});
    if(user){
        return res.status(409).json({message:'email already registered'});
    }
    const hashpassword =await bcrypt.hash(password,parseInt(process.env.SALTROUND));
    const newUser=await userModel.create({userName,email,password:hashpassword});
    if(!newUser){
        return res.status(500).json({message:'error creating user'})
    }

    const token=jwt.sign({email},process.env.confirmEmailsig,{expiresIn:60*1});
    const refreshToken=jwt.sign({email},process.env.confirmEmailsig,{expiresIn:60*60*24});
    const html=`<div>Saraha App</div>
                 <h2>Welcome to Saraha ${userName} </h2>
                 <a href='http://localhost:3000/auth/confirmEmail/${token}'>Confirm Email</a></br>
                 <a href='http://localhost:3000/auth/confirmEmail/${refreshToken}'>Resend Email</a>`

                
    await sendMail(email,'welcome message',html)
    return res.status(201).json({message:'user created successfully',newUser});
    
};
export const login= async(req,res)=>{
    const {email,password}=req.body;
    const user= await userModel.findOne({email}).select('userName password confirmEmail');
    if(!user){
        return res.status(404).json({message:'No such user'});
    }

    if(!user.confirmEmail){
        return res.status(404).json({message:'plz confirm email'});
    }
     const checkpassword = await bcrypt.compare(password,user.password);

    if(!checkpassword){
        return res.status(404).json({message:'password doesnot match'});
    }

    const token= jwt.sign({id:user.id},process.env.loginSignature)


    return res.status(201).json({message:'user logged in successfully',token});
    
};
export const confirmEmail=async(req,res)=>{
    const {token}=req.params;
    const decoded=jwt.verify(token,process.env.confirmEmailsig);
    const user=await userModel.updateOne({email:decoded.email},{confirmEmail:true},{new:true});
    if (user.modifiedCount >0){
        return res.status(201).redirect(process.env.FEURL)
    }
   
}