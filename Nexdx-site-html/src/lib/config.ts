// Güvenlik konfigürasyonu
export const SECURITY_CONFIG = {
  // Rate limiting
  RATE_LIMIT_WINDOW: parseInt(process.env.RATE_LIMIT_WINDOW || '60000'), // 1 dakika
  RATE_LIMIT_MAX_REQUESTS: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '10'),
  
  // Input validation
  MAX_MESSAGE_LENGTH: 2000,
  MAX_MESSAGES_PER_REQUEST: 50,
  MAX_MESSAGES_IN_SESSION: 100,
  
  // Session
  SESSION_MAX_AGE: parseInt(process.env.SESSION_MAX_AGE || '3600000'), // 1 saat
  SESSION_SECRET: process.env.SESSION_SECRET || 'default-secret-change-in-production',
  
  // CORS
  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || 'http://localhost:3000',
  CORS_METHODS: process.env.CORS_METHODS || 'GET,POST,OPTIONS',
  CORS_HEADERS: process.env.CORS_HEADERS || 'Content-Type,Authorization',
  
  // OpenAI
  OPENAI_MODEL: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
  OPENAI_MAX_TOKENS: 1000,
  OPENAI_TEMPERATURE: 0.7,
  
  // Environment
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
} as const;

// Güvenlik headers
export const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
} as const;

// Error messages (production'da generic, development'da detaylı)
export const ERROR_MESSAGES = {
  INVALID_REQUEST: SECURITY_CONFIG.IS_PRODUCTION ? 'Invalid request' : 'Invalid request format',
  RATE_LIMIT_EXCEEDED: 'Rate limit exceeded. Please try again later.',
  INTERNAL_ERROR: SECURITY_CONFIG.IS_PRODUCTION ? 'Internal server error' : 'Internal server error occurred',
  UNAUTHORIZED: 'Unauthorized access',
  FORBIDDEN: 'Access forbidden',
} as const; 