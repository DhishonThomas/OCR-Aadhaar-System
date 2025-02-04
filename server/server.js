import express from 'express'
import cors from 'cors'
import router from './app/routes/uploadImages.js'
const app=express()
app.use(cors({ 
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}));
app.use("/api",router)
app.listen(2000,()=>{
console.log("port is running on ",2000)
})