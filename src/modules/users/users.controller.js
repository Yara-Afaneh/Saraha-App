import userModel from "../../../DB/models/user.model.js";

export const getProfile=async(req,res,next)=>{
    const user = await userModel.findById(req.user._id)
    return res.status(201).json({message:'success',user});
}