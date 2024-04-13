const datamethod=['body','query','params','headers']
const validation =(schema)=>{
    return (req,res,next)=>{
        const validationArray=[];
        datamethod.forEach(key=>{
            if (schema[key]){
                const validationResult=schema[key].validate(req[key],{abortEarly:false});
                if (validationResult.error){
                    validationArray.push(validationResult.error);
                }
            }
        });
    
        if (validationArray.length>0){
            return res.status(400).json({message:'validation error',error:validationArray})
        
        }
        next();
    
}}

export default validation;