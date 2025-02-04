import multer from 'multer'
import sharp from 'sharp'


// const storage=multer.diskStorage({
//     destination:"./uploads",
//     filename:async(req,file,cb)=>{
// fileName=file.fieldname+"-"+Date.now()+path.extname(file.originalname)
//         stack.push(fileName)
//         cb(null,fileName)
//         const processedPath = `./processed/${fileName}`;
//         const ospath="./uploads/" + fileName
//         await preprocessImage(ospath, processedPath);
//     }
// })
const storage=multer.memoryStorage()
const upload=multer({storage}).fields([{name:"frontImage"},{name:"backImage"}])
export {upload}