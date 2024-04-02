const express = require("express")
const app = express()
const mongoose = require("mongoose")
const router = require("./src/route")

mongoose.connect("mongodb://127.0.0.1:27017/")
.then(()=>{
    console.log("mongoDB connected")
}).catch((err)=> console.log(err))

app.use(express.json())

// app.get('/',(req,res)=>{
//     res.send("Welcome to our UrlShortner app");
// })
app.use("/",router)



app.listen(4000,()=>{
    console.log("server is running")
})