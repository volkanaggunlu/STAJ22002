import { Message } from '@/lib/types';
import { validateSessionId } from '@/lib/validation';

// Güvenli session ID generation
export function generateSessionId(): string {
  const timestamp = Date.now();
  const randomPart = Math.random().toString(36).substr(2, 9);
  const sessionId = `session_${timestamp}_${randomPart}`;
  
  // Session ID'yi validate et
  if (!validateSessionId(sessionId)) {
    throw new Error('Invalid session ID generated');
  }
  
  return sessionId;
}

export function formatTimestamp(date: Date): string {
  return new Intl.DateTimeFormat('tr-TR', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function truncateText(text: string, maxLength: number = 100): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

// Güvenli localStorage işlemleri
export function saveMessagesToLocalStorage(sessionId: string, messages: Message[]): void {
  if (typeof window !== 'undefined') {
    try {
      // Session ID'yi validate et
      if (!validateSessionId(sessionId)) {
        console.error('Invalid session ID for localStorage save');
        return;
      }

      // Mesajları validate et
      if (!Array.isArray(messages) || messages.length === 0) {
        console.error('Invalid messages for localStorage save');
        return;
      }

      // Maksimum mesaj sayısı kontrolü
      const MAX_MESSAGES = 100;
      if (messages.length > MAX_MESSAGES) {
        messages = messages.slice(-MAX_MESSAGES);
      }

      const key = `chat_${sessionId}`;
      const data = JSON.stringify(messages);
      
      // localStorage quota kontrolü
      if (data.length > 5 * 1024 * 1024) { // 5MB limit
        console.error('LocalStorage quota exceeded');
        return;
      }

      localStorage.setItem(key, data);
    } catch (error) {
      console.error('LocalStorage save error:', error);
    }
  }
}

export function loadMessagesFromLocalStorage(sessionId: string): Message[] {
  if (typeof window !== 'undefined') {
    try {
      // Session ID'yi validate et
      if (!validateSessionId(sessionId)) {
        console.error('Invalid session ID for localStorage load');
        return [];
      }

      const key = `chat_${sessionId}`;
      const stored = localStorage.getItem(key);
      
      if (stored) {
        const messages = JSON.parse(stored);
        
        // Mesaj formatını validate et
        if (!Array.isArray(messages)) {
          console.error('Invalid message format in localStorage');
          return [];
        }

        // Timestamp'leri Date objesine çevir ve validate et
        return messages.map((msg: { role: string; content: string; timestamp?: string }) => {
          if (msg.role !== 'user' && msg.role !== 'assistant') {
            console.error('Invalid message role');
            return null;
          }

          if (!msg.content || typeof msg.content !== 'string') {
            console.error('Invalid message content');
            return null;
          }

          return {
            ...msg,
            timestamp: msg.timestamp ? new Date(msg.timestamp) : new Date(),
          };
        }).filter(Boolean) as Message[];
      }
    } catch (error) {
      console.error('LocalStorage load error:', error);
    }
  }
  return [];
}

export function clearChatHistory(sessionId: string): void {
  if (typeof window !== 'undefined') {
    try {
      // Session ID'yi validate et
      if (!validateSessionId(sessionId)) {
        console.error('Invalid session ID for localStorage clear');
        return;
      }

      const key = `chat_${sessionId}`;
      localStorage.removeItem(key);
    } catch (error) {
      console.error('LocalStorage clear error:', error);
    }
  }
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Güvenlik için ek utility fonksiyonları
export function sanitizeLocalStorageKey(key: string): string {
  // Sadece alfanumerik karakterler ve alt çizgi
  return key.replace(/[^a-zA-Z0-9_]/g, '');
}

export function validateLocalStorageData(data: unknown): boolean {
  try {
    const stringified = JSON.stringify(data);
    return stringified.length <= 5 * 1024 * 1024; // 5MB limit
  } catch {
    return false;
  }
} 