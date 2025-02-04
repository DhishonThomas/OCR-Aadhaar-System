import express from 'express'
import cors from 'cors'
import Tesseract from 'tesseract.js';
import { createWorker } from 'tesseract.js';
import fs from 'fs'
import multer from 'multer';
import path from 'path';

const app=express()
const imagePath="./app/adhar.jpeg"
app.use(cors({ 
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}));


const storage=multer.diskStorage({
    destination:"./uploads",
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname))
    }
})

const upload=multer({storage})

app.post("/",upload.fields([{name:"frontImage"},{name:"backImage"}]),async(req,res)=>{

console.log(req.files)
res.json({status:true,data:"data reached server"})
//     fs.readFile(imagePath,(err,data)=>{

//     if(err){
//         console.error(err)
//     }else{
//         (async () => {
//             const worker = await createWorker('eng');
//             const ret = await worker.recognize(data);
//             console.log(ret.data.text);
//             await worker.terminate();
//           })();

//     }
// })
    
})

app.listen(2000,()=>{
console.log("port is running on ",2000)
})