import express from 'express'
import cors from 'cors'
import { createWorker } from 'tesseract.js';
import fs from 'fs'
import multer from 'multer';
import path from 'path';
import { Router } from 'express';
import router from './app/routes/uploadImages.js'
const app=express()
app.use(cors({ 
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}));



// app.post("/api",upload.fields([{name:"frontImage"},{name:"backImage"}]),async(req,res)=>{
// console.log(req.files)

// while (stack.length>0) {
//     let filePath=stack.pop()
//     fs.readFile('./uploads/'+filePath,(err,data)=>{
//         if(err){
//             console.log(err)
//         }else{
//             (
//                 async ()=>{
//                     const worker=await createWorker('eng')
//                     const ret=await worker.recognize(data)
//                     console.log(ret.data.text)

//                     await worker.terminate()

//                 }
//             )()

//             fs.unlink('./uploads/'+filePath,(err)=>{
//                 if(err){
//                     console.log(err)
//                 }else{
//                     console.log("File deleted succesfully")
//                 }
//             })
//         }
//     })
// }

// res.json({status:true,data:"data reached server"})
// })
app.use("/api",router)
app.listen(2000,()=>{
console.log("port is running on ",2000)
})