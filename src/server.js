import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  // 🔥 Replace with OpenAI / any LLM API
  const reply = "This is a demo AI response for: " + userMessage;

  res.json({ reply });
});

app.listen(5000, () => console.log("Server running on port 5000"));