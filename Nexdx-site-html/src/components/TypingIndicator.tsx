'use client';

interface TypingIndicatorProps {
  isVisible: boolean;
}

export default function TypingIndicator({ isVisible }: TypingIndicatorProps) {
  if (!isVisible) return null;

  return (
    <div className="flex justify-start mb-4 sm:mb-6 animate-typing-in">
      <div className="order-2">
        <div className="bg-white text-black border border-slate-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 shadow-md">
          <div className="flex items-center gap-1.5">
            <span className="sr-only">Yazıyor...</span>
            <div className="w-2 h-2 bg-[var(--brand-primary)]/60 rounded-full animate-[typing_1.2s_infinite]" />
            <div className="w-2 h-2 bg-[var(--brand-primary)]/60 rounded-full animate-[typing_1.2s_infinite]" style={{ animationDelay: '0.12s' }} />
            <div className="w-2 h-2 bg-[var(--brand-primary)]/60 rounded-full animate-[typing_1.2s_infinite]" style={{ animationDelay: '0.24s' }} />
          </div>
        </div>
      </div>

      {/* Bot Avatar */}
      <div className="hidden sm:flex w-10 h-10 rounded-xl items-center justify-center mx-3 order-1 bg-slate-300 shadow-md transform hover:scale-105 transition-transform duration-200">
        <span className="text-slate-600 text-lg">🤖</span>
      </div>
    </div>
  );
} 