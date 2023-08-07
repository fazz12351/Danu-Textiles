const express=require("express")
const ejs=require("ejs")
const bodyParser=require("body-parser")
const app=express()
app.use(express.static("Public"))

app.set("view engine","ejs")
app.set(bodyParser)


app.get("/",(req,res)=>{
res.render("index")

})
app.listen(3000,()=>{
    console.log("we are running")
})