import { preprocessImage } from "../utils/sharp.js";
import { getStructuredData } from "../utils/ai.js";
import { ocrProcess } from "../utils/ocr.js";


export const uploadImages = async (req, res) => {
  try {
    const frontImageBuffer = req.files.frontImage[0].buffer;
    const backImageBuffer = req.files.backImage[0].buffer;

    const frontProcessedImage = await preprocessImage(frontImageBuffer);
    const backProcessedImage = await preprocessImage(backImageBuffer);

    const frontText = await ocrProcess(frontProcessedImage);
    const backText = await ocrProcess(backProcessedImage);

    const concatText = frontText + "\n" + backText;
    const result = await getStructuredData(concatText);
    
    res.json({
      status: true,
      message: "Data processed successfully",
      result,
    });
  } catch (error) {
    console.error("Error processing images:", error);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};
