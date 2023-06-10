const {Router}=require("express")
const {CalculateModel}=require("../Model/calculate.model")


const calculateRouter=Router()


calculateRouter.post("/",async(req,res)=>{
    const {instamount,instrate,years}=req.body
let i=instrate/100
    let totalinv=instamount*years
    let totalmatur=instamount*((((1+i)**years)-1)/i)
   let totalInt=totalmatur-totalinv
res.send({"total_investmen":totalinv,"total_interest":totalInt,"total_maturity":totalmatur})
})


module.exports={
    calculateRouter
}