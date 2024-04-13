import connectDB from "../../DB/connection.js";
import authRouter from "./auth/auth.router.js";
 import messagesRouter from "./messages/messages.router.js";
import userRouter from "./users/users.router.js";

 export const initApp=(app,express)=>{   
    connectDB();
    app.use(express.json());
    app.use('/auth',authRouter)
    app.use('/messages',messagesRouter)
    app.use('/user',userRouter)
}