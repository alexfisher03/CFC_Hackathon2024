import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import fetch from "node-fetch";

dotenv.config({ path: "/secret.env" });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
// Middleware to parse JSON bodies
app.use(express.json());

// Root route handler
app.get("/", (req, res) => {
  res.send("Welcome to the ChatBot API Proxy Server!");
});

// Proxy endpoint for the ChatGPT API
app.post("/api/chat", async (req, res) => {
  const response = await fetch("https://api.openai.com/v4/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify(req.body),
  });
  const data = await response.json();
  res.send(data);
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
