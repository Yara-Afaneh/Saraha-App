import mongoose from 'mongoose';


const connectDB=()=>{
    return mongoose.connect(process.env.DB)
    .then(result=>{
        console.log('DB connected')
    }).catch(err=>{
        console.log('error connection',err);
    });
 
}

export default connectDB;