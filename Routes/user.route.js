const {UserModel}=require("../Model/user.model")
const {Router}=require("express")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const userRouter=Router()

userRouter.post("/register",async(req,res)=>{
    const {email,password,name}=req.body
    try{
        const user=await UserModel.findOne({email})
        if(user){
            
            res.status(200).send({"msg":"User Already Registered"})
        }else{
            bcrypt.hash(password, 4, async(err, hash)=> {
               
                const user1=new UserModel({name,email,password:hash})
                await user1.save()
            });
          
           res.status(200).send({"msg":"User Registered Successfully"})
        }

    }catch(er){
        res.status(400).send({"msg":er.message})
    }
})



userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await UserModel.findOne({email})
       if(user){
        bcrypt.compare(password, user.password, (err, result)=> {
            // result == true
            if(result){
                const token = jwt.sign({ name:user.name,email:user.email }, "masai");
                res.send({"msg":"Login Successfully","token":token})
            }else{
                res.send({"msg":"Wrong Credensial"}) 
            }
        });
       }else{
        res.send({"msg":"Wrong Credensial"}) 
       }

    }catch(er){
        res.send({"msg":req.message}) 
    }
})





module.exports={
    userRouter
}
