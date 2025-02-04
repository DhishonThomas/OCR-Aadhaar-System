
import { GoogleGenerativeAI } from "@google/generative-ai";
import { prompt_text } from "../utils/utils.js";
import dotenv from 'dotenv'
dotenv.config()

const genAI = new GoogleGenerativeAI(process.env.AI_KEY);
const model = genAI.getGenerativeModel({ model: process.env.MODEL});

export const getStructuredData = async (extractedText) => {
  try {
    const prompt = prompt_text(extractedText);
    const result = await model.generateContent(prompt);
    const rawResponse = await result.response.text();


    const cleanedResponse = rawResponse.replace(/```json|```/g, "").trim();

    return JSON.parse(cleanedResponse);
  } catch (error) {
    console.log(error);
  }
};
