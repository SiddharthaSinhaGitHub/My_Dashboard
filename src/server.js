import express from "express";
import cors from "cors";
import twilio from "twilio";

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 Twilio credentials (replace with yours)
const accountSid = "YOUR_ACCOUNT_SID";
const authToken = "YOUR_AUTH_TOKEN";

const client = twilio(accountSid, authToken);

// Your WhatsApp number
const MY_NUMBER = "whatsapp:+919731227618";

// Twilio sandbox number
const FROM_NUMBER = "whatsapp:+14155238886";

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    // 📲 Send message to your WhatsApp
    await client.messages.create({
      body: `New Portfolio Message:\n${userMessage}`,
      from: FROM_NUMBER,
      to: MY_NUMBER
    });

    res.json({
      reply: "✅ Message sent! I’ll reply to you on WhatsApp."
    });

  } catch (error) {
    console.error(error);
    res.json({
      reply: "⚠️ Failed to send WhatsApp message"
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});