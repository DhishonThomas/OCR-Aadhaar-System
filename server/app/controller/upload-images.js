
import fs from 'fs'
import {createWorker} from 'tesseract.js'

export const uploadImages=async(req,res,stack)=>{
    try {
console.log(req.files)

while (stack.length>0) {
    let filePath=stack.pop()
    fs.readFile('./uploads/'+filePath,(err,data)=>{
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

            fs.unlink('./uploads/'+filePath,(err)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log("File deleted succesfully")
                }
            })
        }
    })
}

res.json({status:true,data:"data reached server"})
        
    } catch (error) {
        
    }
}

