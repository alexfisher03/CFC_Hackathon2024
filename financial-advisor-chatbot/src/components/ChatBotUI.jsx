import React, { useState } from "react";

const ChatBotUI = ({ formData }) => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    formData
      ? {
          text: `Hello ${formData.name}! I understand that you have a credit score of
          ${formData.creditScore}. It also looks like you have an income of ${formData.income},
          and expenses totaling ${formData.expenses}.
          Would you like to know more about: '${formData.goal}'?`,
          sender: "assistant",
        }
      : { text: "Hello! How can I assist you today?", sender: "assistant" },
  ]);
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSend = async () => {
    console.log("Send button clicked");
    if (!userInput.trim()) return;

    // Add the user's message to the conversation in the UI
    const newUserMessage = {
      text: userInput,
      sender: "user",
    };
    setMessages([...messages, newUserMessage]);

    setIsSending(true);
    try {
      // Prepare the payload for the API call
      const payload = {
        model: "gpt-3.5-turbo", // Specify the model ID
        messages: messages.concat(newUserMessage).map((msg) => ({
          role: msg.sender, // Map 'sender' to 'role'
          content: msg.text, // Use 'text' for 'content'
        })),
      };

      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("Response from server:", data);

      if (!data.error && data.choices && data.choices.length > 0) {
        // Handle successful API response
        const botResponse = {
          text: data.choices[0].message.content, // Assuming this is the structure of the response
          sender: "assistant", // Mark responses from the API as 'assistant'
        };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      } else {
        // Handle API error
        console.error("Error from API:", data.error.message);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSending(false);
      setUserInput(""); // Clear the input field
    }
  };

  return (
    <div className="bg-[#091824] w-full mx-auto fixed h-full">
      <div className=" bg-[#091824] rounded-lg overflow-hidden pt-13 pb-[200px] h-full">
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "user" ? "justify-end" : ""}`}
              >
                <div
                  className={`rounded-lg p-2 max-w-xs ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex p-4">
            <input
              type="text"
              placeholder="Type your message here..."
              className="flex-1 bg-gray-200 rounded-full p-2 focus:outline-none"
              value={userInput}
              onChange={handleInputChange}
              disabled={isSending}
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white rounded-full p-2 ml-2"
              disabled={isSending || !userInput.trim()}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBotUI;
