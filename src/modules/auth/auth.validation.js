import joi from "joi";

export const registerSchema={
    body:joi.object({
        userName:joi.string().alphanum().min(3).max(20).required(),
        email:joi.string().email().min(8).max(50).required(),
        password:joi.string().min(8).max(20).required(),
        confirmPassword:joi.valid(joi.ref('password')).required(),
    }),
    query:joi.object({
        test:joi.boolean().required(),
    }),
}



export const loginSchema= {
    body:joi.object({
        email:joi.string().email().min(8).max(50).required(),
        password:joi.string().min(8).max(20).required(),
    })
}
