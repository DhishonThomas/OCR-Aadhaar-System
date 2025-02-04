import multer from 'multer'
import path from 'path'

let fileName=""
let stack=[]

const storage=multer.diskStorage({
    destination:"./uploads",
    filename:(req,file,cb)=>{
fileName=file.fieldname+"-"+Date.now()+path.extname(file.originalname)
stack.push(fileName)
        cb(null,fileName)
    }
})

const upload=multer({storage}).fields([{name:"frontImage"},{name:"backImage"}])
export {upload,stack}