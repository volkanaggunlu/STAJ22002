'use client';

import { useState, useEffect, useRef } from 'react';
import { Message, ChatRequest } from '@/lib/types';
import { generateSessionId, saveMessagesToLocalStorage, loadMessagesFromLocalStorage, clearChatHistory } from '@/utils/helpers';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Session ID oluştur ve localStorage'dan mesajları yükle
  useEffect(() => {
    const newSessionId = generateSessionId();
    setSessionId(newSessionId);
    
    const savedMessages = loadMessagesFromLocalStorage(newSessionId);
    if (savedMessages.length > 0) {
      setMessages(savedMessages);
    }
  }, []);

  // Mesajlar değiştiğinde sadece chat alanında scroll
  useEffect(() => {
    if (messagesContainerRef.current && messages.length > 0) {
      const container = messagesContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, isLoading]);

  // Mesajları localStorage'a kaydet
  useEffect(() => {
    if (sessionId && messages.length > 0) {
      saveMessagesToLocalStorage(sessionId, messages);
    }
  }, [messages, sessionId]);

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setSuggestions([]);

    try {
      const request: ChatRequest = {
        messages: [...messages, userMessage],
        sessionId,
      };

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error('API yanıt vermedi');
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message.content,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
      setSuggestions(data.suggestions || []);
    } catch (error) {
      console.error('Chat error:', error);
      
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputMessage);
  };

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion);
  };

  const handleClearChat = () => {
    setMessages([]);
    setSuggestions([]);
    if (sessionId) {
      clearChatHistory(sessionId);
    }
    const newSessionId = generateSessionId();
    setSessionId(newSessionId);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputMessage);
    }
  };

  return (
    <div className="flex flex-col h-[500px] sm:h-[600px] md:h-[640px] lg:h-[680px] bg-white/95 backdrop-blur rounded-xl sm:rounded-2xl border border-slate-200 shadow-xl" ref={chatContainerRef}>
      {/* Chat Header */}
      
      
      {/* Messages Container */}
      <div 
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 bg-white scroll-smooth chat-scrollbar text-slate-800"
      >
        {messages.length === 0 && (
          <div className="text-center py-6 sm:py-8 animate-fade-in max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto px-2 sm:px-4">
            
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-black mb-2 sm:mb-3 animate-fade-in [animation-delay:0.2s]">
              Hoş Geldiniz!
            </h3>
            <p className="text-slate-700 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto animate-fade-in [animation-delay:0.4s]">
              Kurumsal dijital dönüşüm süreçlerinizde size yardımcı olmak için buradayım. 
              Aşağıdaki örnek sorulardan birini seçerek başlayabilirsiniz.
            </p>
            <div className="mt-2 sm:mt-3 space-y-2 sm:space-y-3 animate-fade-in [animation-delay:0.6s]">
              <p className="text-[10px] sm:text-xs mb-1 sm:mb-2 font-semibold text-slate-600 uppercase tracking-wide">Örnek Sorular</p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 justify-center">
                {[
                  "Dijital olgunluk seviyemizi değerlendirin",
                  "Hangi teknolojileri kullanmalıyız?",
                  "Bütçe planlaması nasıl yapmalıyız?"
                ].map((suggestion, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm bg-white border border-slate-300 rounded-md sm:rounded-lg hover:bg-slate-50 transition-colors duration-200 shadow-sm font-medium text-black w-full sm:w-auto"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {messages.map((message, index) => (
          <MessageBubble
            key={index}
            message={message}
          />
        ))}
        
        <TypingIndicator isVisible={isLoading} />
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions */}
      {suggestions.length > 0 && !isLoading && messages.length === 0 && (
        <div className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-white border-t border-slate-200 animate-slide-up">
          <p className="text-[10px] sm:text-xs font-semibold text-slate-700 mb-1 sm:mb-2 md:mb-3 uppercase tracking-wide">Önerilen Sorular</p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1.5 sm:gap-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 text-[9px] sm:text-[11px] md:text-xs bg-slate-100 text-slate-800 border border-slate-300 rounded-md sm:rounded-lg hover:bg-slate-200 transition-colors duration-200 font-medium w-full sm:w-auto text-left sm:text-center"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Form */}
      <div className="bg-white border-t border-slate-200 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-end gap-2 sm:gap-2.5 md:gap-3">
          <div className="flex-1">
            <textarea
              ref={inputRef}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Mesajınızı yazın... (Enter ile gönder)"
              className="w-full px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent resize-none text-xs sm:text-sm bg-slate-50 placeholder:text-slate-400 focus:bg-white transition-colors duration-200 text-slate-900"
              rows={2}
              disabled={isLoading}
              style={{ minHeight: '40px', maxHeight: '100px' }}
            />
          </div>
          <button
            type="submit"
            disabled={!inputMessage.trim() || isLoading}
            className="px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-700)] active:bg-[var(--brand-primary-800)] text-white rounded-lg sm:rounded-xl disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors duration-200 font-semibold shadow-lg text-xs sm:text-sm"
          >
            {isLoading ? (
              <div className="w-4 sm:w-5 h-4 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
            ) : (
              'Gönder'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}