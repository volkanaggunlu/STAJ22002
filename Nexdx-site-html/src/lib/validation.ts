import { Message, ChatRequest } from './types';

// XSS koruması için HTML karakterlerini escape et
export function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Input sanitization
export function sanitizeInput(input: string): string {
  if (!input || typeof input !== 'string') {
    return '';
  }

  // HTML tag'lerini kaldır
  let sanitized = input.replace(/<[^>]*>/g, '');
  
  // Tehlikeli karakterleri escape et
  sanitized = sanitized
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');

  // Maksimum uzunluk kontrolü
  const MAX_LENGTH = 2000;
  if (sanitized.length > MAX_LENGTH) {
    sanitized = sanitized.substring(0, MAX_LENGTH);
  }

  return sanitized.trim();
}

// Message validation
export function validateMessage(message: unknown): message is Message {
  if (!message || typeof message !== 'object') {
    return false;
  }

  const msg = message as Record<string, unknown>;

  if (msg.role !== 'user' && msg.role !== 'assistant') {
    return false;
  }

  if (!msg.content || typeof msg.content !== 'string') {
    return false;
  }

  if (msg.content.length === 0 || msg.content.length > 2000) {
    return false;
  }

  return true;
}

// ChatRequest validation
export function validateChatRequest(request: unknown): request is ChatRequest {
  if (!request || typeof request !== 'object') {
    return false;
  }

  const req = request as Record<string, unknown>;

  if (!req.messages || !Array.isArray(req.messages)) {
    return false;
  }

  if (req.messages.length === 0 || req.messages.length > 50) {
    return false;
  }

  // Her mesajı validate et
  for (const message of req.messages) {
    if (!validateMessage(message)) {
      return false;
    }
  }

  if (req.sessionId && typeof req.sessionId !== 'string') {
    return false;
  }

  return true;
}

// Session ID validation
export function validateSessionId(sessionId: string): boolean {
  if (!sessionId || typeof sessionId !== 'string') {
    return false;
  }

  // Session ID format kontrolü
  const sessionIdPattern = /^session_\d+_[a-z0-9]{9}$/;
  return sessionIdPattern.test(sessionId);
}

// Rate limiting için IP validation
export function validateIP(ip: string): boolean {
  if (!ip || typeof ip !== 'string') {
    return false;
  }

  // IPv4 ve IPv6 format kontrolü
  const ipv4Pattern = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  const ipv6Pattern = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  
  return ipv4Pattern.test(ip) || ipv6Pattern.test(ip) || ip === 'unknown';
} 