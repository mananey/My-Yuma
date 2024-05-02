import React from 'react';
import './ChatWindow.css';

const ChatWindow = () => {
  return (
    <div className="chat-window">
      <div className="chat-header">Chat with Yuma</div>
      <div className="chat-input-container">
        <input type="text" className="chat-input" placeholder="Enter your prompt here" />
        <button className="chat-button"><div style={{ width: '20px', height: '20px', border: '2px solid white', marginRight: '100px', borderRadius: '4px' }}></div></button>
      </div>
    </div>
  );
};

export default ChatWindow;
