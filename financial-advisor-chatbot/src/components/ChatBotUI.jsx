// Import React and useState, useEffect hooks if not already imported
import React, { useState, useEffect } from "react";

const ChatBotUI = ({ formData }) => {
  const [messages, setMessages] = useState([]);

  // Mock function simulating an API call
  const sendToChatGPTAPI = async (formData) => {
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          message: `Mock response based on form data: ${JSON.stringify(
            formData
          )}`,
        });
      }, 1000); // Simulate a 1 second delay
    });
  };

  useEffect(() => {
    const initConversation = async () => {
      const response = await sendToChatGPTAPI(formData);
      // Update state with the mock response
      setMessages((currentMessages) => [...currentMessages, response.message]);
    };
    initConversation();
  }, [formData]); // Dependency array ensures this effect runs when formData changes

  return (
    <div>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
};

export default ChatBotUI;
