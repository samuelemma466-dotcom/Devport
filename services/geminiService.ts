import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiResponse = async (
  prompt: string, 
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: "You are the AI assistant for a Senior React Engineer's portfolio. You are helpful, professional, and knowledgeable about web development, React, TypeScript, and UI/UX. Answer visitor's questions about the developer's skills or general tech questions concisely.",
      },
      history: history,
    });

    const result = await chat.sendMessage({ message: prompt });
    return result.text || "I apologize, but I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to communicate with the AI assistant.");
  }
};