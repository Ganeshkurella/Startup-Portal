"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles } from "lucide-react";

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", content: "Hi! I'm the Hyderabad Intelligence Assistant. Want deep insight on startups, costs, or policies?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const predefinedPrompts = [
    "Why is Hyderabad growing?",
    "Top startup sectors?",
    "Cost of living?"
  ];

  const handleAsk = (query: string) => {
    if (!query.trim()) return;
    
    setMessages(prev => [...prev, { role: "user", content: query }]);
    setInput("");
    
    // Simple frontend AI brain mapping to local data insights
    setTimeout(() => {
      let response = "I don't have that exact metric, but Hyderabad boasts India's fastest-growing startup ecosystem right now.";
      
      const q = query.toLowerCase();
      if (q.includes("why") && q.includes("growing")) {
        response = "Growth is driven by a unique combo: proactive government policy (TS-iPASS), 30% lower burn rates compared to Bangalore, immense compute infrastructure like TGDeX, and 355+ Fortune GCCs providing enterprise talent.";
      } else if (q.includes("sector") || q.includes("top")) {
        response = "The top accelerating sectors are Enterprise SaaS (Darwinbox, HighRadius), DeepTech / SpaceTech (Skyroot Aerospace), and HealthTech (NephroPlus). Highly immune to late-stage funding winters.";
      } else if (q.includes("cost") || q.includes("living") || q.includes("rent")) {
        response = "Extremely competitive. A premium 1BHK in the core IT corridor (Kondapur/Madhapur) averages ₹18k-₹32k per month, which is Roughly 30% lower than Bangalore's equivalent zones. Great for runway optimization.";
      } else if (q.includes("policy") || q.includes("gov")) {
        response = "The government acts as the 'first customer'. Highlights include the AI4TG Grand Challenge (offering ₹15L grants + pilots) and the GCC Policy granting massive capital subsidies.";
      }

      setMessages(prev => [...prev, { role: "ai", content: response }]);
    }, 800);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-indigo-600 to-teal-500 text-white shadow-xl shadow-indigo-500/20 ${isOpen ? 'hidden' : 'block'}`}
      >
        <Sparkles className="w-6 h-6" />
      </motion.button>

      {/* Chat Windows (Modal) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", bounce: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] rounded-2xl glass-card flex flex-col overflow-hidden shadow-2xl border border-indigo-100 bg-white/90"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-indigo-600 to-teal-500 text-white flex justify-between items-center shadow-md">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                <span className="font-bold font-outfit">Intelligence AI</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="bg-black/10 hover:bg-black/20 p-1.5 rounded-full transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-3 rounded-2xl max-w-[85%] text-sm leading-relaxed ${msg.role === 'user' ? 'bg-indigo-100 text-indigo-900 rounded-br-sm' : 'bg-gray-100 text-gray-800 rounded-bl-sm'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Smart Chips */}
            <div className="px-4 pb-2 flex overflow-x-auto gap-2 no-scrollbar">
              {predefinedPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleAsk(prompt)}
                  className="shrink-0 text-xs px-3 py-1.5 rounded-full border border-gray-200 bg-white hover:border-indigo-300 hover:text-indigo-600 transition-colors shadow-sm"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-100 bg-white/80">
              <div className="flex bg-gray-50 border border-gray-200 rounded-full overflow-hidden focus-within:border-indigo-400 focus-within:ring-1 focus-within:ring-indigo-400 transition-all">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAsk(input)}
                  placeholder="Ask about the ecosystem..."
                  className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none"
                />
                <button
                  onClick={() => handleAsk(input)}
                  disabled={!input.trim()}
                  className="p-3 text-indigo-600 disabled:text-gray-300 hover:text-indigo-800 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
