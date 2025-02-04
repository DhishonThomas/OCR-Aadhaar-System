import express from 'express'

const app=express()

app.get("/",(req,res)=>{
    res.send("Hello i am dhishon")
})


app.listen(2000,()=>{
console.log("port is running on ",2000)
})