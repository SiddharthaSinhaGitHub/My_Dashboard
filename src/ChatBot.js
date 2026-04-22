import React, { useState } from "react";
import "./ChatBot.css";
import responses from "./chatResponses.json";

export default function ChatBot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "bot", text: "Hi 👋 I'm your AI assistant. How can I help?" }
    ]);
    const [input, setInput] = useState("");

    const getBotReply = (userInput) => {
        const input = userInput.toLowerCase();

        if (input.includes("hi") || input.includes("hello") || input.includes("hey")) {
            return responses["hi"];
        }

        return responses["default"];
    };

    const sendMessage = () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", text: input };

        const botReply = getBotReply(input);

        setMessages((prev) => [
            ...prev,
            userMessage,
            { role: "bot", text: botReply }
        ]);

        setInput("");
    };

    return (
        <div className="chatbot-container">
            {open && (
                <div className="chat-window">
                    <div className="chat-header">
                        AI Assistant
                        <button onClick={() => setOpen(false)}>X</button>
                    </div>

                    <div className="chat-body">
                        {messages.map((msg, i) => (
                            <div key={i} className={`msg ${msg.role}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <div className="chat-input">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask something..."
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            )}

            <button className="chat-toggle" onClick={() => setOpen(!open)}>
                💬
            </button>
        </div>
    );
}