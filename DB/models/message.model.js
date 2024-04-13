import  {Schema, Types, model}  from 'mongoose';

const messageSchema = new Schema({
       content:{
        type:String,
        required: true,
       },
       recieverID:{
        type:Types.ObjectId,
        required: true,
       }},{
       timestamp:true,
  })

  const messageModel= model('Messages',messageSchema); 

  export default messageModel;