import { createWorker } from "tesseract.js";


export const ocrProcess = async (imageBuffer) => {
    try {
      const worker = await createWorker("eng");
      const ret = await worker.recognize(imageBuffer);
  
      await worker.terminate();
      return ret.data.text;
    } catch (error) {
      console.error("OCR process error:", error);
      throw error;
    }
  };