const express=require("express")
const app=express()
const {userRouter}=require("./Routes/user.route")
const {connection}=require("./db")
require('dotenv').config()
const {auth}=require("./Middleware/first.middel")
const {profileRoute}=require("./Routes/profile.route")
const {calculateRouter}=require("./Routes/calculate.route")

app.use(express.json())

app.use("/users",userRouter)


app.use(auth)
app.use("/profile",profileRoute)
app.use("/calculate",calculateRouter)

app.get("/",(req,res)=>{
    res.send("Home Route")
})





app.listen(process.env.PORT,async()=>{
    try{
await connection
        console.log("connected to DB")
    }catch(er){
        console.log(er)
    }
    console.log(`server is running at ${8080} port`)
})