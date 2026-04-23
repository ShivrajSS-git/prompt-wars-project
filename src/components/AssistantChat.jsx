import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';
import { commonQuestions } from '../data/electionData';

const AssistantChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Namaste! I'm your Election Assistant. How can I help you understand the Indian voting process today?" }
  ]);

  const handleQuestion = (q, a) => {
    setMessages([...messages, { role: 'user', text: q }, { role: 'bot', text: a }]);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        id="assistant-chat-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-saffron-600 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 animate-float"
      >
        <MessageSquare size={28} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{ transformOrigin: "bottom right" }}
            className="fixed bottom-28 right-8 w-[380px] max-w-[calc(100vw-2rem)] h-[550px] max-h-[calc(100vh-8rem)] glass overflow-hidden z-40 flex flex-col shadow-2xl border border-white/10"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-blue-600/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <Bot size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Election Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-slate-800/80 text-slate-200 rounded-tl-none border border-white/5'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Suggested Questions */}
            <div className="p-4 bg-slate-900/50 border-t border-white/5">
              <span className="text-[10px] text-slate-500 uppercase font-bold mb-3 block">Quick Questions</span>
              <div className="flex flex-wrap gap-2">
                {commonQuestions.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuestion(item.q, item.a)}
                    className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-2 rounded-lg text-slate-300 transition-colors"
                  >
                    {item.q}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AssistantChat;
