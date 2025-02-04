import axios from "axios";
import React, { useEffect, useRef, useState } from "react";


interface ImagePreview {
  frontPrev: string;
  backPrev: string;
}

interface Data {
  frontImage: File|null;
  backImage:File|null
}

const App = () => {

const [data,setData]=useState<Data|null>({
  frontImage:null,
  backImage:null
})
  let frontImage=useRef<any>(null)
let backImage=useRef<any>(null)
let [submitButton,setSubmitButton]=useState(true)

async function sendImages() {
  
if(data?.backImage&&data?.frontImage){
  const formData=new FormData()

  formData.append("frontImage",data?.frontImage)
  formData.append("backImage",data?.backImage)
  const response=await axios.post("http://localhost:2000/",formData,{
    headers:{
      'Content-Type': "multipart/form-data",
    }
  })
  if(response.data.status){
    alert("data reached server succssfully.")
  }
  console.log("responce",response.data)
}


  // setData(response.data)
}

const [imagePrev,setImagePrev]=useState<ImagePreview>({
  frontPrev:"",
  backPrev:""
})
useEffect(()=>{
  if(data?.backImage&&data.frontImage){
    setSubmitButton(false)
  }else{
    setSubmitButton(true)
  }
},[data])

const deleteFront=()=>{
  frontImage.current.value=""
  URL.revokeObjectURL(imagePrev.frontPrev)
  setData((perv:any)=>({...perv,frontImage:null}))
  setImagePrev((perv)=>({...perv,frontPrev:""}))
}
const deleteBack=()=>{
  backImage.current.value=""
  URL.revokeObjectURL(imagePrev.backPrev)
  setData((perv:any)=>({...perv,backImage:null}))
  setImagePrev((perv)=>({...perv,backPrev:""}))
}
const updateFront=async()=>{
  if(imagePrev.frontPrev){
    URL.revokeObjectURL(imagePrev.frontPrev)
  }
    setData((prev:any) => ({...prev,frontImage:frontImage.current.files[0]}));
    const prevImage = URL.createObjectURL(frontImage.current.files[0]);
    setImagePrev((prev)=>({...prev,frontPrev:prevImage}));
    console.log(prevImage);
}
const updateBack=async()=>{
  if(imagePrev.backPrev){
    URL.revokeObjectURL(imagePrev.backPrev)
  }
  setData((prev:any)=>({...prev,backImage:backImage.current.files[0]}))
  const prevImage=URL.createObjectURL(backImage.current.files[0])
  setImagePrev((prev)=>({...prev,backPrev:prevImage}))
}

  return (
    <div className="text-black-300 font-bold text-2xl bg-white min-h-screen">
      This is for ocr-aadhaar-system.
    
<input type="file" ref={frontImage}  onChange={updateFront}/>
<button className="border bg-red-300" onClick={deleteFront}>delete front</button>
  {
imagePrev.frontPrev&&  <img src={imagePrev.frontPrev} alt="Uploaded preview" style={{ maxWidth: '100%', height: 'auto' }} />

  }
    {
imagePrev.backPrev&&  <img src={imagePrev.backPrev} alt="Uploaded preview" style={{ maxWidth: '100%', height: 'auto' }} />

  }
  
<input type="file" onChange={updateBack} ref={backImage}/>
<button className="border bg-red-300 " onClick={deleteBack}>delete back</button>

<button disabled={submitButton} onClick={sendImages}>click me</button>
    </div>
  );
};

export default App;
