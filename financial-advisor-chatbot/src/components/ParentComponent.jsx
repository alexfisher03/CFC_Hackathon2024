import React, { useState } from "react";
import InputField from "./InputField";
import ChatBotUI from "./ChatBotUI";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    creditScore: "",
    income: "",
    expenses: "",
    goal: "",
  });
  const [showChatBot, setShowChatBot] = useState(false);

  return (
    <div>
      {!showChatBot ? (
        <InputField setFormData={setFormData} setShowChatBot={setShowChatBot} />
      ) : (
        <ChatBotUI formData={formData} />
      )}
    </div>
  );
};

export default App;
