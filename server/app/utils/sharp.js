import sharp from "sharp";


export const preprocessImage = async (imageBuffer) => {
  try {
    return await sharp(imageBuffer)
      .grayscale()
      .resize(1200)
      .normalize()
      .toBuffer();
  } catch (error) {
    console.error("Image processing error:", error);
    throw error;
  }
};