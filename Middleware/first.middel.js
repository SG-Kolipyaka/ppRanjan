const jwt = require('jsonwebtoken');


const auth=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
try{
   const decoded = jwt.verify(token, 'masai');
   if(decoded){
    req.name=decoded.name
    req.email=decoded.email
    next()
   }else{
    res.send("Please Login")
   }
}catch(er){
    res.send(er.message)
}
    }else{
        res.send("Please Login")
    }
}


module.exports={
    auth
}