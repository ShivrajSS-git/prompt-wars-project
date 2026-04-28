import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Bot, Loader2, Info } from 'lucide-react';
import { commonQuestions } from '../data/electionData';
import { GoogleGenerativeAI } from "@google/generative-ai";

const AssistantChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Welcome to IndiaElect. I'm your official digital guide. How can I assist you with the electoral process today?" }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text) => {
    // Sanitize input to prevent basic XSS or empty submissions
    const sanitizedText = text.trim().replace(/[<>]/g, '');
    if (!sanitizedText) return;

    const userMessage = { role: 'user', text: sanitizedText };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "DUMMY_KEY");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      const prompt = `You are a helpful Indian Election Assistant. 
      Answer questions about the Indian voting process, voter registration, EVMs, VVPAT, and citizen rights.
      Be concise, professional, and non-partisan.
      User Question: ${text}`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const botMessage = { role: 'bot', text: response.text() };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "I'm having trouble connecting to the network. Please use the handy questions below for immediate guidance." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuestion = (q) => {
    const predefined = commonQuestions.find(item => item.q === q);
    if (predefined) {
      setMessages(prev => [...prev, { role: 'user', text: q }, { role: 'bot', text: predefined.a }]);
    } else {
      handleSend(q);
    }
  };

  return (
    <>
      {/* Sidebar Trigger (Always Visible) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button
          id="assistant-chat-trigger"
          onClick={() => setIsOpen(true)}
          className="bg-saffron-600 text-white p-4 rounded-l-3xl shadow-2xl flex flex-col items-center gap-4 hover:pr-8 transition-all group"
          aria-label="Open Assistant Sidebar"
        >
          <Sparkles className="animate-pulse" size={24} />
          <span className="[writing-mode:vertical-lr] font-black uppercase tracking-widest text-[10px]">Assistant</span>
        </button>
      </div>

      {/* Sidebar Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-[1000]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-4 right-4 bottom-4 w-[480px] max-w-[calc(100vw-2rem)] bg-white dark:bg-slate-900 shadow-[0_0_80px_rgba(0,0,0,0.2)] z-[1001] rounded-[40px] flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800"
              role="dialog"
              aria-label="Election Assistant Sidebar"
            >
              {/* Header */}
              <div className="p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                    <Bot size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">IndiaElect AI</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Active Intelligence</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Close Sidebar"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div 
                      className={`max-w-[90%] p-6 text-sm font-medium leading-relaxed ${
                        msg.role === 'user' 
                          ? 'bg-blue-600 text-white rounded-[28px] rounded-tr-none shadow-xl shadow-blue-600/10' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-[28px] rounded-tl-none border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-[28px] rounded-tl-none border border-slate-200 dark:border-slate-700 flex gap-3 items-center">
                      <Loader2 size={20} className="animate-spin text-saffron-600" />
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Consulting Registry...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-8 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Info size={14} className="text-saffron-600" />
                    <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Handy Guidance</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {commonQuestions.slice(0, 3).map((item, i) => (
                      <button
                        key={i}
                        onClick={() => handleQuestion(item.q)}
                        className="text-[10px] bg-white dark:bg-slate-800 hover:border-saffron-500/50 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl text-slate-600 dark:text-slate-300 transition-all font-bold shadow-sm"
                      >
                        {item.q}
                      </button>
                    ))}
                  </div>
                </div>
                
                <form 
                  onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                  className="flex gap-4"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask our AI about voting..."
                    className="flex-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 transition-all shadow-inner"
                    aria-label="Message text"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="w-14 h-14 rounded-2xl bg-saffron-600 text-white flex items-center justify-center hover:bg-saffron-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xl shadow-saffron-600/20"
                    aria-label="Send message"
                  >
                    <Send size={24} />
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AssistantChat;
