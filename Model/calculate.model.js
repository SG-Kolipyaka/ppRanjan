const mongoose=require("mongoose")

const CalculateSchema=mongoose.Schema({
    instamount:{require:true,type:Number},
    instrate:{require:true,type:Number},
    years:{require:true,type:Number}

},{
    versionKey:false
})


const CalculateModel=mongoose.model("calculate",CalculateSchema)


module.exports={
    CalculateModel
}