import React from 'react';
import { Message } from '../types/chat';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div className={`message ${message.isUser ? 'user-message' : 'bot-message'}`}>
      <div className="flex items-start gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
          message.isUser 
            ? 'bg-primary-700 text-white' 
            : 'bg-gray-200 text-gray-700'
        }`}>
          {message.isUser ? 'U' : 'AI'}
        </div>
        <div className="flex-1">
          <div className="text-sm text-gray-500 mb-1">
            {message.isUser ? 'You' : 'Gemini AI'} • {message.timestamp.toLocaleTimeString()}
          </div>
          <div className="whitespace-pre-wrap">{message.content}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage; 