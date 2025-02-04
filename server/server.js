import express from 'express'
import cors from 'cors'
import { createWorker } from 'tesseract.js';
import fs from 'fs'
import multer from 'multer';
import path from 'path';

const app=express()

app.use(cors({ 
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}));
let fileName=""
let stack=[]
const storage=multer.diskStorage({
    destination:"./uploads",
    filename:(req,file,cb)=>{
fileName=file.fieldname+"-"+Date.now()+path.extname(file.originalname)
stack.push(fileName)
console.log(fileName)
        cb(null,fileName)
    }
})
const upload=multer({storage})
app.post("/",upload.fields([{name:"frontImage"},{name:"backImage"}]),async(req,res)=>{
console.log(req.files)
while (stack.length>0) {
    fs.readFile('./uploads/'+stack.pop(),(err,data)=>{
        if(err){
            console.log(err)
        }else{
            (
                async ()=>{
                    const worker=await createWorker('eng')
                    const ret=await worker.recognize(data)
                    console.log(ret.data.text)
                    
                    await worker.terminate()

                }
            )()
        }
    })
}

res.json({status:true,data:"data reached server"})
})

app.listen(2000,()=>{
console.log("port is running on ",2000)
})