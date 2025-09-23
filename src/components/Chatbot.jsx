import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";
import "./Chatbot.css";
import { NavBar } from "../Features/NavBar";
import { Footer } from "../Features/Footer";
const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I am your Krishi Sahayak AI. How can I assist you with farming today?",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // This effect runs after every render where `messages` has changed
  useEffect(() => {
    // This ensures icons are rendered after new elements are added
    feather.replace();
    // This scrolls to the bottom after the DOM has been updated
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const userMessage = {
      id: Date.now(), // Use a more unique key like timestamp
      text: inputValue,
      sender: "user",
    };

    // Add user message to the state
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue("");

    // Simulate bot response after 1.5 seconds
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1, // Ensure key is unique
        text: "Thank you for your query. I am analyzing it and will provide a response shortly.",
        sender: "bot",
      };
      // Use functional update to ensure we're adding to the latest state
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1500);
  };

  return (
    <div className="chatbot-wrapper">
      <div className="chatbot-page">
        <header className="chatbot-header">
          <Link to="/" className="back-button">
            {/* Feather icons are rendered by the script, keep the attributes */}
            <i data-feather="arrow-left"></i> Back to Home
          </Link>
          <h1>Krishi AI Assistant</h1>
        </header>

        <main className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message-bubble ${msg.sender}`}>
              {/* Using <p> tag is fine, or just the text directly */}
              {msg.text}
            </div>
          ))}
          {/* This empty div is the target for our scrolling */}
          <div ref={messagesEndRef} />
        </main>

        <footer className="chat-input-form">
          <form onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about crops, weather, or schemes..."
              autoComplete="off"
            />
            <button type="submit">
              <i data-feather="send"></i>
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default Chatbot;
