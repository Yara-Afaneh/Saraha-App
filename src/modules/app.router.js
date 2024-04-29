import connectDB from "../../DB/connection.js";
import authRouter from "./auth/auth.router.js";
 import messagesRouter from "./messages/messages.router.js";
import userRouter from "./users/users.router.js";

 export const initApp=(app,express)=>{   
    connectDB();
    app.use(express.json());
    app.get('/',(req,res)=>{
        return res.status(200).json({message:"welcome"});
    })
    app.use('/auth',authRouter)
    app.use('/messages',messagesRouter)
    app.use('/user',userRouter)
    app.get('*',(req,res)=>{
        return res.status(404).json({message:"page not found"});

    }); 
}