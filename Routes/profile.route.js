const {Router}=require("express")


const profileRoute=Router()

profileRoute.get("/",async(req,res)=>{
    try{
        res.send({"name":req.name,"email":req.email})

    }catch(er){
        res.send(er.message)
    }
})




module.exports={
    profileRoute
}