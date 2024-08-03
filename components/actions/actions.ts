"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "pexels";

const client = createClient(process.env.PEXEL_API_KEY || ``);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const genWithAi = async (topic: string) => {
  try {
    const prompt1 = `Give 4 titles and 4 short descriptions for an advertisement banner. Make sure that it is catchy and non-offensive. Give a JSON array with each element being an object with keys "bannerTitle" and "bannerDescription" containing the title string and the description strings respectivley. Make sure it is plain JSON. Don't add any text decorators. Each title must have less than 7 words. The topic of the banner is : ${topic}`;
    const result1 = await model.generateContent(prompt1);
    const response = await result1.response;
    const text = response.text();
    return text;
  } catch (error) {
    return `Ai Err`;
  }
};

export const getPhotosPexels = async (topic: string) => {
  const query = topic;
  const response = await client.photos.search({ query, per_page: 7 });
  return response;
};
