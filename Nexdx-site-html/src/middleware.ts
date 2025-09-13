import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rate limiting için basit in-memory store
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limiting konfigürasyonu
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 dakika
const RATE_LIMIT_MAX_REQUESTS = 10; // 1 dakikada maksimum 10 istek

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Security Headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // CORS Headers
  response.headers.set('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || 'http://localhost:3000');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Max-Age', '86400');

  // API rate limiting
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown';

    const now = Date.now();
    const clientData = rateLimitStore.get(clientIP);

    if (!clientData || now > clientData.resetTime) {
      // Yeni rate limit window
      const newClientData = {
        count: 1,
        resetTime: now + RATE_LIMIT_WINDOW
      };
      rateLimitStore.set(clientIP, newClientData);

      // Rate limit headers
      response.headers.set('X-RateLimit-Limit', RATE_LIMIT_MAX_REQUESTS.toString());
      response.headers.set('X-RateLimit-Remaining', (RATE_LIMIT_MAX_REQUESTS - newClientData.count).toString());
      response.headers.set('X-RateLimit-Reset', new Date(newClientData.resetTime).toISOString());
    } else if (clientData.count >= RATE_LIMIT_MAX_REQUESTS) {
      // Rate limit aşıldı
      return new NextResponse(
        JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
        { 
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': '60'
          }
        }
      );
    } else {
      // İstek sayısını artır
      clientData.count++;
      rateLimitStore.set(clientIP, clientData);

      // Rate limit headers
      response.headers.set('X-RateLimit-Limit', RATE_LIMIT_MAX_REQUESTS.toString());
      response.headers.set('X-RateLimit-Remaining', (RATE_LIMIT_MAX_REQUESTS - clientData.count).toString());
      response.headers.set('X-RateLimit-Reset', new Date(clientData.resetTime).toISOString());
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}; 