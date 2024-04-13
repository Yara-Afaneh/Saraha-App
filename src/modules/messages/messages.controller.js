import userModel from "../../../DB/models/user.model.js";
import messageModel from './../../../DB/models/message.model.js';

export const getmessages =async(req,res)=>{
    const messages= await messageModel.find({recieverID:req.user._id})
    return res.status(201).json({message:'success',messages});
}
export const sendMessage=async(req,res)=>{
    const {content}=req.body;
    const {recieverID}=req.params;
    const user = await userModel.findById(recieverID);
    if(!user){
        return res.status(404).json({message:'user not found'});
     }
    const createmessage = await messageModel.create({content,recieverID})
    return res.status(201).json({message:'success',createmessage});
}