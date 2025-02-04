import axios from "axios";
import { useEffect, useRef, useState } from "react";
import AadhaarResponse from "./componets/AadhaarResponse";
import AadhaarJson from "./componets/AadhaarJson";

interface ImagePreview {
  frontPrev: string;
  backPrev: string;
}

interface Data {
  frontImage: File | null;
  backImage: File | null;
}

const App = () => {
  const [data, setData] = useState<Data | null>({
    frontImage: null,
    backImage: null,
  });
  let frontImage = useRef<any>(null);
  let backImage = useRef<any>(null);
  let [submitButton, setSubmitButton] = useState(true);

  // //{
  //   "name": "Full Name",
  //   "dob": "DD/MM/YYYY",
  //   "gender": "Male/Female/Other",
  //   "uid": "1234 5678 9012",
  //   "address": "Extracted Address",
  //   "pincode": "6-digit Pincode"
  // }
  let [response, setResponse] = useState({
    name: "",
    dob: "",
    gender: "",
    uid: "",
    address: "",
    pincode: "",
  });
  async function sendImages() {
    if (data?.backImage && data?.frontImage) {
      const formData = new FormData();

      formData.append("frontImage", data?.frontImage);
      formData.append("backImage", data?.backImage);
      const response = await axios.post(
        "http://localhost:2000/api/upload-images",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.status) {
        alert("data reached server succssfully.");
      }

      setResponse((prev: any) => ({
        ...prev,
        name: response.data.name || "Not Found",
        dob: response.data.dob || "Not Found",
        gender: response.data.gender || "Not Found",
        uid: response.data.uid || "Not Found",
        address: response.data.address || "Not Found",
        pincode: response.data.pincode || "Not Found",
      }));

      console.log("responce", response.data);
    }

    // setData(response.data)
  }

  const [imagePrev, setImagePrev] = useState<ImagePreview>({
    frontPrev: "",
    backPrev: "",
  });
  useEffect(() => {
    if (data?.backImage && data.frontImage) {
      setSubmitButton(false);
    } else {
      setSubmitButton(true);
    }
  }, [data]);

  const deleteFront = () => {
    frontImage.current.value = "";
    URL.revokeObjectURL(imagePrev.frontPrev);
    setData((perv: any) => ({ ...perv, frontImage: null }));
    setImagePrev((perv) => ({ ...perv, frontPrev: "" }));
  };
  const deleteBack = () => {
    backImage.current.value = "";
    URL.revokeObjectURL(imagePrev.backPrev);
    setData((perv: any) => ({ ...perv, backImage: null }));
    setImagePrev((perv) => ({ ...perv, backPrev: "" }));
  };
  const updateFront = async () => {
    if (imagePrev.frontPrev) {
      URL.revokeObjectURL(imagePrev.frontPrev);
    }
    setData((prev: any) => ({
      ...prev,
      frontImage: frontImage.current.files[0],
    }));
    const prevImage = URL.createObjectURL(frontImage.current.files[0]);
    setImagePrev((prev) => ({ ...prev, frontPrev: prevImage }));
    console.log(prevImage);
  };
  const updateBack = async () => {
    if (imagePrev.backPrev) {
      URL.revokeObjectURL(imagePrev.backPrev);
    }
    setData((prev: any) => ({
      ...prev,
      backImage: backImage.current.files[0],
    }));
    const prevImage = URL.createObjectURL(backImage.current.files[0]);
    setImagePrev((prev) => ({ ...prev, backPrev: prevImage }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="w-1/2 p-6 bg-white border-r">
        <div className="bg-white rounded-lg p-4">
          <p className="text-gray-700 font-medium mb-2">Front Image</p>
          <input
            type="file"
            name="front-image"
            ref={frontImage}
            onChange={updateFront}
            accept=".png, .jpg, .jpeg"
            maxLength={1}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
          />
          <div className="mt-4 w-full h-48 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center bg-gray-50">
            {imagePrev.frontPrev ? (
              <img
                src={imagePrev.frontPrev}
                alt="Front Preview"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            ) : (
              <p className="text-gray-400">
                Front image preview will appear here
              </p>
            )}
          </div>
          {imagePrev.frontPrev && (
            <button
              className="border bg-red-500 rounded-md p-1 m-2 cursor-pointer"
              onClick={deleteFront}
            >
              delete front
            </button>
          )}
        </div>
        <div className="bg-white rounded-lg p-4">
          <p className="text-gray-700 font-medium mb-2">Back Image</p>
          <input
            type="file"
            name="back-image"
            onChange={updateBack}
            ref={backImage}
            accept=".png, .jpg, .jpeg"
            maxLength={1}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
          />
          <div className="mt-4 w-full h-48 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center bg-gray-50">
            {imagePrev.backPrev ? (
              <img
                src={imagePrev.backPrev}
                alt="Back Preview"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            ) : (
              <p className="text-gray-400">
                Back image preview will appear here
              </p>
            )}
          </div>
          {imagePrev.backPrev && (
            <button
              className="border bg-red-500 rounded-md p-1 m-2 "
              onClick={deleteBack}
            >
              delete back
            </button>
          )}
        </div>

        <div className="flex justify-center font-bold">
          <button
            className={`bg-blue-500 p-2 w-3xl rounded-md ${
              submitButton ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            disabled={submitButton}
            onClick={sendImages}
          >
            submit
          </button>
        </div>
      </div>

      <div className="w-1/2">
        <AadhaarResponse
          name={response.name}
          dob={response.dob}
          gender={response.gender}
          uid={response.uid}
          address={response.address}
          pincode={response.pincode}
        />

        <AadhaarJson />
        hai
      </div>
    </div>
  );
};

export default App;
