// ChatInterface.tsx

import React, { useState } from 'react';
import { MessageSquare, Send, User, Moon, Sun } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I am your AI assistant. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState<string>('');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      role: 'user',
      content: input.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = {
        role: 'assistant',
        content: 'Missing Backend Connection: Front-end is not linked to a backend server.'
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className={`hidden md:flex w-64 flex-col p-4 border-r ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="flex items-center gap-2 px-4 py-3 rounded-lg mb-4 cursor-pointer hover:bg-gray-700">
            <MessageSquare className="w-5 h-5 text-gray-400" />
            <span className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>New Chat</span>
          </div>
          <div className="flex-1"></div>
          <div className="border-t border-gray-700 pt-4">
            <div className="flex items-center justify-between px-4">
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Amna Osama Hamed
              </span>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-gray-700"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-gray-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className={`flex items-center justify-between p-4 border-b ${
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <h1 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              AI Chat Assistant
            </h1>
            <div className="md:hidden">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-gray-700"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-gray-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>
          </header>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`py-8 ${
                  isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                }`}
              >
                <div className="max-w-3xl mx-auto px-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === 'assistant' 
                        ? (isDarkMode ? 'bg-green-600' : 'bg-green-500') 
                        : (isDarkMode ? 'bg-gray-600' : 'bg-gray-200')
                    }`}>
                      {message.role === 'assistant' ? (
                        <MessageSquare className="w-5 h-5 text-white" />
                      ) : (
                        <User className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <div className={`flex-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {message.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t p-4 mx-auto w-full max-w-3xl">
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                value={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                placeholder="Type your message..."
                className={`w-full p-4 pr-12 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 text-gray-200 focus:border-gray-600' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-gray-400'
                } focus:outline-none focus:ring-0`}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
            <p className={`text-xs mt-2 text-center ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              AI Assistant by Amina Osama Hamed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;