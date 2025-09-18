import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import feather from 'feather-icons';
import './ChatbotButton.css';

const ChatbotButton = () => {
  // Initialize feather icons
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <Link to="/chatbot" className="chatbot-fab" aria-label="Open chatbot">
      <i data-feather="message-square" className="chatbot-icon"></i>
    </Link>
  );
};

export default ChatbotButton;