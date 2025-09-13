import { NextRequest, NextResponse } from 'next/server';
import { sendChatMessage } from '@/lib/openai';
import { ChatRequest } from '@/lib/types';
import { validateChatRequest, sanitizeInput } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    // Content-Type kontrolü
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type must be application/json' },
        { status: 400 }
      );
    }

    // Request body'yi parse et
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON payload' },
        { status: 400 }
      );
    }

    // Input validation
    if (!validateChatRequest(body)) {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    // Mesajları sanitize et
    const sanitizedMessages = (body as ChatRequest).messages.map((msg) => ({
      ...msg,
      content: sanitizeInput(msg.content)
    }));

    const sanitizedRequest: ChatRequest = {
      ...(body as ChatRequest),
      messages: sanitizedMessages
    };

    // OpenAI API'ye istek gönder
    const response = await sendChatMessage(sanitizedRequest);

    return NextResponse.json(response);
  } catch (error) {
    console.error('Chat API Error:', error);
    
    // Güvenli hata mesajı
    const errorMessage = process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Chat API active' },
    { status: 200 }
  );
}

// OPTIONS request için CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN || 'http://localhost:3000',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  });
} 