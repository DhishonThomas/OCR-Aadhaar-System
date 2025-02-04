import express from 'express'
import cors from 'cors'
import router from './app/routes/uploadImages.js'
import dotenv from 'dotenv'

dotenv.config()
const app=express()
const PORT=process.env.PORT||2000
app.use(cors({ 
    origin: [process.env.CLIENT_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}));
app.use("/api",router)

app.listen(PORT,()=>{
    
console.log("port is running on ",PORT)
})