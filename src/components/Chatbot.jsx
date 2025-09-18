import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import feather from 'feather-icons';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I am your Krishi Sahayak AI. How can I assist you with farming today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Function to scroll to the bottom of the chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    feather.replace();
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
    };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thank you for your query. I am analyzing it and will provide a response shortly.",
        sender: 'bot',
      };
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1500);
  };

  return (
    <div className="chatbot-page">
      <header className="chatbot-header">
        <Link to="/" className="back-button">
          <i data-feather="arrow-left"></i> Back to Home
        </Link>
        <h1>Krishi AI Assistant</h1>
      </header>
      
      <main className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message-bubble ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </main>

      <footer className="chat-input-form">
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about crops, weather, or schemes..."
          />
          <button type="submit">
            <i data-feather="send"></i>
          </button>
        </form>
      </footer>
    </div>
  );
};

export default Chatbot;