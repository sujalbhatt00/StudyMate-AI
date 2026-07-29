import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const models = [
    "gemini-2.0-flash",
    "gemini-2.0-flash-lite",
    "gemini-3.1-flash-lite",
    "gemini-3.5-flash",
];

for (const model of models) {
    try {
        console.log(`Testing ${model}...`);

        const res = await ai.models.generateContent({
            model,
            contents: "Hello",
        });

        console.log("SUCCESS:", model);
        console.log(res.text);
        break;
    } catch (e) {
        console.log("FAILED:", model);
        console.log(e.status, e.message);
    }
}