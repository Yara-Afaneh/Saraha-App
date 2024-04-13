import  {Schema, model}  from 'mongoose';

const userSchema = new Schema({
       userName:{
        type:String,
        required: true,
       },
       email:{
        type:String,
        required: true,
       },
       password:{
        type:String,
        required: true,
       },
       age:Number,

       confirmEmail:{
        type:Boolean,
        default: false,
       },
       gender:{
        type:String,
        enum:['male','female'],
       }},
       {
       
       timestamps:true,
       
       })

  const userModel= model('USer',userSchema); 

  export default userModel;
