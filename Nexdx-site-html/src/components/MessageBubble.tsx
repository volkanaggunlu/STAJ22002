'use client';

import { Message } from '@/lib/types';
import { formatTimestamp } from '@/utils/helpers';

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';
  const timestamp = message.timestamp ? formatTimestamp(message.timestamp) : '';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 sm:mb-6 animate-message-in`}>
      <div className={`max-w-[86%] sm:max-w-[80%] ${isUser ? 'order-2' : 'order-1'} transform hover:scale-[1.01] transition-transform duration-200`}>
        <div
          className={`rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 shadow-sm ring-1 ring-inset ${
            isUser
              ? 'bg-[var(--brand-primary)] text-white ring-[var(--brand-primary-800)]'
              : 'bg-slate-50 text-slate-800 ring-slate-200 shadow-md'
          }`}
        >
          <div className="whitespace-pre-wrap break-words leading-7 text-sm sm:text-[15px]">
            {message.content}
          </div>
        </div>
        {timestamp && (
          <div
            className={`text-[11px] sm:text-xs text-slate-500 mt-1.5 sm:mt-2 ${
              isUser ? 'text-right' : 'text-left'
            }`}
          >
            {timestamp}
          </div>
        )}
      </div>
      
      {/* Avatar */}
      <div className={`hidden sm:flex w-10 h-10 rounded-xl items-center justify-center mx-3 ${
        isUser ? 'order-1 bg-slate-800 shadow-lg' : 'order-2 bg-slate-300 shadow-md'
      } transform hover:scale-105 transition-transform duration-200`}>
        {isUser ? (
          <span className="text-white text-sm font-bold">S</span>
        ) : (
          <span className="text-slate-600 text-lg">🤖</span>
        )}
      </div>
    </div>
  );
} 