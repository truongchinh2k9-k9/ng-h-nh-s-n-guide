import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";

// Load .env
dotenv.config();

const PORT = process.env.PORT || 3001;

// Validate that the API key is set
if (!process.env.GEMINI_API_KEY) {
  console.warn("Warning: GEMINI_API_KEY is not set. The /api/gemini endpoint will fail until you set it.");
}

const app = express();
app.use(cors());
app.use(express.json());

// Initialize the Google Gen AI client. The client will read credentials from
// the environment. We instantiate with an empty config to match the
// example usage (`new GoogleGenAI({})`).
const ai = new GoogleGenAI({});

app.post("/api/gemini", async (req, res) => {
  const { prompt } = req.body || {};
  if (!prompt || typeof prompt !== "string") {
    return res.status(400).json({ error: "Missing or invalid 'prompt' in request body" });
  }

  try {
    // Call the Gemini model. Use the same shape as your example.
    const modelName = process.env.GEMINI_MODEL || "gemini-2.5-flash";
    console.log("Calling Gemini model:", modelName);

    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
    });

    // The GenAI client may return different shapes across versions.
    // Try a few common extraction paths to get a readable text reply.
    const text =
      response?.text ||
      response?.candidates?.[0]?.content?.[0]?.text ||
      response?.candidates?.[0]?.text ||
      (typeof response === "string" ? response : null) ||
      (response ? JSON.stringify(response) : null);

    if (!text) {
      return res.status(502).json({ error: "Empty response from LLM" });
    }

    return res.json({ text });
  } catch (err) {
    console.error("/api/gemini error:", err);
    return res.status(500).json({ error: "llm_error", details: String(err) });
  }
});

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.listen(PORT, () => {
  console.log(`Gemini proxy server listening on http://localhost:${PORT}`);
});
