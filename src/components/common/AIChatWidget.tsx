import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Minimize2 } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

export const AIChatWidget: React.FC<{ onBookMeeting: () => void }> = ({ onBookMeeting }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: `Hello! 👋 I'm **BalajiOne AI Assistant**. How can I help you transform your business today? Ask me about our AI solutions, Custom Software, ERP systems, or pricing!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (userQuery?: string) => {
    const textToSend = userQuery || input;
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!userQuery) setInput('');
    setIsTyping(true);

    // Simulate AI response logic with updated Imperial Gold & India details
    setTimeout(() => {
      let aiReply = "Thank you for reaching out! Our senior solution architects specialize in custom software, AI fine-tuning, GST ERP platforms, and cloud architecture. Would you like to schedule a 30-minute free consultation?";
      const lower = textToSend.toLowerCase();

      if (lower.includes('price') || lower.includes('cost') || lower.includes('pricing')) {
        aiReply = "Our fixed per-project plans start at ₹16,000 / project ($199) for Starter Growth, ₹40,000 / project ($479) for Professional Scale (includes custom apps & GST ERP/CRM), and ₹56,000 / project ($679) for Enterprise Global with dedicated AI pipelines. Custom tailored project quotes are also available!";
      } else if (lower.includes('ai') || lower.includes('gpt') || lower.includes('chatbot')) {
        aiReply = "BalajiOne builds fine-tuned GenAI LLM models, custom RAG vector databases, optical document OCR (PAN/Aadhaar extraction), and omnichannel multi-lingual AI chatbots (Hindi, English, Regional) integrated with WhatsApp Business API!";
      } else if (lower.includes('erp') || lower.includes('school') || lower.includes('invoice') || lower.includes('solar')) {
        aiReply = "We offer flagship SaaS products: BalajiOne Invoice & GST Cloud (with Razorpay/UPI), CampusOne School ERP (CBSE/ICSE boards), and SolarPulse CRM (PM Surya Ghar subsidy tracking). All include native Android & iOS mobile apps!";
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('location') || lower.includes('address')) {
        aiReply = `You can email us at ${COMPANY_INFO.contactEmail} or call/WhatsApp ${COMPANY_INFO.phone}. Our corporate HQ is located at ${COMPANY_INFO.address}!`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: aiReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const quickPrompts = [
    'Tell me about your AI Chatbot solution',
    'What are your pricing plans?',
    'Show solar CRM features',
    'How do I book a consultation?',
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[990]">
      {/* Floating Trigger Button in Imperial Gold Theme */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.6)] hover:scale-110 transition-all duration-300 border border-amber-300 cursor-pointer"
          title="Ask BalajiOne AI Assistant"
          aria-label="Ask BalajiOne AI Assistant"
        >
          <div className="relative flex items-center justify-center">
            <Bot className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform text-slate-950" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full ring-2 ring-[#070D22] animate-pulse" />
          </div>
        </button>
      )}

      {/* Chat Window Drawer in Deep Navy & Imperial Gold Theme */}
      {isOpen && (
        <div className="w-[calc(100vw-32px)] max-w-[380px] sm:max-w-[400px] h-[480px] sm:h-[520px] bg-[#070D22] border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col justify-between text-white animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="px-5 py-4 bg-white/[0.04] border-b border-amber-500/20 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 p-[2px]">
                <div className="w-full h-full bg-[#070D22] rounded-full flex items-center justify-center text-amber-400">
                  <Bot className="w-5 h-5" />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <h4 className="text-sm font-bold font-heading text-white">BalajiOne AI Assistant</h4>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <p className="text-[11px] text-amber-300 font-mono">24/7 Enterprise AI Agent</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex space-x-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-semibold rounded-br-none shadow-md'
                      : 'bg-white/5 border border-amber-500/20 text-slate-200 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <span className="block text-[9px] text-slate-400 mt-1 text-right">{msg.timestamp}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
                <Bot className="w-4 h-4 text-amber-400 animate-spin" />
                <span>BalajiOne AI is formulating response...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Prompts Carousel */}
          <div className="px-4 py-2 bg-white/[0.02] border-t border-amber-500/10 flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="whitespace-nowrap px-3 py-1 rounded-full bg-white/5 hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/40 text-[10px] text-slate-300 hover:text-amber-300 transition-all cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input & Action */}
          <div className="p-3 bg-white/[0.03] border-t border-amber-500/20 flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask anything about BalajiOne..."
                className="flex-1 bg-white/5 border border-amber-500/20 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-sans"
              />
              <button
                onClick={() => handleSend()}
                className="p-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-bold transition-all shadow-[0_0_10px_rgba(245,158,11,0.4)] cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                onBookMeeting();
              }}
              className="w-full py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 text-[11px] font-semibold text-amber-300 text-center transition-colors cursor-pointer"
            >
              📅 Schedule Direct Meeting with Architect
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
