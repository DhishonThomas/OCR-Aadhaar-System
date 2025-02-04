
import express from 'express'
import {upload,stack} from '../controller/multerController.js'
import { uploadImages } from '../controller/upload-images.js'

const router=express.Router()

router.post("/upload-images",upload,(req,res)=>{
    uploadImages(req,res,stack)
})

export default router