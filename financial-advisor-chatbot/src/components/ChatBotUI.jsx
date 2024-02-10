import React, { useState, useEffect } from "react";

const ChatBotUI = ({ formData }) => {
  const [messages, setMessages] = useState([]);

  const sendToChatGPTAPI = async (formData) => {
    const prompt = `Please provide financial advice based on the following user inputs: ${JSON.stringify(
      formData
    )}`;

    try {
      const response = await fetch("https://api.openai.com/v4/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "text-davinci-003", // Or whichever model you're using
          prompt: prompt,
          temperature: 0.7,
          max_tokens: 150,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        }),
      });

      const data = await response.json();
      return { message: data.choices[0].text.trim() };
    } catch (error) {
      console.error("Error calling the ChatGPT API:", error);
      return {
        message: "Sorry, I couldn't fetch a response. Please try again later.",
      };
    }
  };

  useEffect(() => {
    const initConversation = async () => {
      const response = await sendToChatGPTAPI(formData);
      setMessages((currentMessages) => [...currentMessages, response.message]);
    };
    if (Object.keys(formData).length > 0) {
      // Ensure formData is not empty
      initConversation();
    }
  }, [formData]);

  useEffect(() => {
    console.log("ChatBotUI mounted.");
  }, []);

  return (
    <div>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
};

export default ChatBotUI;
