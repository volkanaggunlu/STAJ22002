import OpenAI from 'openai';
import { Message, ChatRequest, ChatResponse } from './types';

// API key kontrolü
const apiKey = process.env.OPENAI_API_KEY;
const isTestMode = !apiKey || apiKey === 'sk-test-dummy-key-for-build';

const openai = isTestMode ? null : new OpenAI({
  apiKey: apiKey,
});

const SYSTEM_PROMPT = `Sen bir dijital dönüşüm uzmanısın. Görevin:

1. Firmaların dijital olgunluk seviyelerini değerlendirmek
2. Sektör bazlı dijital dönüşüm önerileri sunmak
3. Adım adım implementasyon rehberi hazırlamak
4. Eksik bilgiler için detaylı sorular sormak

Yaklaşımın:
- Profesyonel ve danışmanlık odaklı
- Pratik ve uygulanabilir çözümler
- Sektör spesifik öneriler
- Bütçe ve kaynak optimizasyonu

Her yanıtında:
- Mevcut durumu analiz et
- Somut öneriler sun
- Sonraki adımları belirt
- Gerekirse daha fazla bilgi iste

Türkçe yanıt ver ve teknik terimleri açıkla.`;

export async function sendChatMessage(request: ChatRequest): Promise<ChatResponse> {
  try {
    // Test modu kontrolü
    if (isTestMode) {
      return getMockResponse(request);
    }

    if (!openai) {
      throw new Error('OpenAI client başlatılamadı');
    }

    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...request.messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }))
    ];

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
      messages,
      temperature: 0.7,
      max_tokens: 1000,
      stream: false,
    });

    const assistantMessage: Message = {
      role: 'assistant',
      content: completion.choices[0]?.message?.content || 'Üzgünüm, şu anda yanıt veremiyorum.',
      timestamp: new Date(),
    };

    // Follow-up soruları için basit bir sistem
    const suggestions = generateSuggestions(request.messages);

    return {
      message: assistantMessage,
      suggestions,
      sessionId: request.sessionId,
    };
  } catch (error) {
    console.error('OpenAI API Error:', error);
    
    // Test modunda mock response döndür
    if (isTestMode) {
      return getMockResponse(request);
    }
    
    throw new Error('Chatbot yanıt verirken bir hata oluştu. Lütfen tekrar deneyin.');
  }
}

// Test modu için mock response
function getMockResponse(request: ChatRequest): ChatResponse {
  const lastMessage = request.messages[request.messages.length - 1];
  const content = lastMessage.content.toLowerCase();
  
  let mockResponse = '';
  
  if (content.includes('dijital olgunluk') || content.includes('olgunluk')) {
    mockResponse = `Dijital olgunluk seviyenizi değerlendirmek için öncelikle firmanızın mevcut durumunu analiz etmemiz gerekiyor. 

Şu anda kullandığınız teknolojiler, iş süreçleriniz ve dijital altyapınız hakkında bilgi verebilir misiniz? Bu bilgiler ışığında size detaylı bir değerlendirme sunabilirim.

Ayrıca, hangi sektörde faaliyet gösterdiğinizi ve firmanızın büyüklüğünü de öğrenmek isterim.`;
  } else if (content.includes('teknoloji') || content.includes('tech')) {
    mockResponse = `Teknoloji altyapınız hakkında daha detaylı bilgi alabilir miyim? 

Örneğin:
- Hangi yazılım sistemlerini kullanıyorsunuz?
- Bulut tabanlı çözümleriniz var mı?
- Veri yönetimi nasıl yapılıyor?
- IT ekibinizin büyüklüğü nedir?

Bu bilgiler ışığında size özel öneriler sunabilirim.`;
  } else if (content.includes('bütçe') || content.includes('maliyet')) {
    mockResponse = `Dijital dönüşüm için bütçe planlaması çok önemli. 

Size şu konularda yardımcı olabilirim:
- Öncelikli alanları belirleme
- ROI odaklı yatırım planlaması
- Aşamalı implementasyon stratejisi
- Maliyet optimizasyonu önerileri

Firmanızın mevcut bütçe durumu ve öncelikleri hakkında bilgi verebilir misiniz?`;
  } else {
    mockResponse = `Merhaba! Dijital dönüşüm danışmanınıza hoş geldiniz. 

Size yardımcı olabilmem için firmanız hakkında biraz bilgi alabilir miyim? Örneğin:
- Hangi sektörde faaliyet gösteriyorsunuz?
- Şu anda kullandığınız teknolojiler neler?
- Dijital dönüşüm konusunda hangi alanlarda zorluk yaşıyorsunuz?

Bu bilgiler ışığında size özel öneriler sunabilirim.`;
  }

  const assistantMessage: Message = {
    role: 'assistant',
    content: mockResponse,
    timestamp: new Date(),
  };

  const suggestions = generateSuggestions(request.messages);

  return {
    message: assistantMessage,
    suggestions,
    sessionId: request.sessionId,
  };
}

function generateSuggestions(messages: Message[]): string[] {
  const lastMessage = messages[messages.length - 1];
  const isFirstMessage = messages.length === 1;
  
  if (isFirstMessage) {
    return [
      "Firmanızın hangi sektörde faaliyet gösterdiğini öğrenebilir miyim?",
      "Şu anda kullandığınız teknoloji altyapısı hakkında bilgi verebilir misiniz?",
      "Firmanızın büyüklüğü (çalışan sayısı) nedir?"
    ];
  }

  // Basit keyword-based suggestion system
  const content = lastMessage.content.toLowerCase();
  
  if (content.includes('sektör') || content.includes('sector')) {
    return [
      "Bu sektörde dijital dönüşüm için öncelikli alanlar nelerdir?",
      "Rakip firmaların dijital uygulamaları hakkında bilginiz var mı?"
    ];
  }
  
  if (content.includes('teknoloji') || content.includes('tech')) {
    return [
      "Mevcut sistemleriniz arasında entegrasyon sorunları yaşıyor musunuz?",
      "IT ekibinizin büyüklüğü ve yetkinlikleri nasıl?"
    ];
  }

  return [
    "Dijital dönüşüm için bütçe planlamanız var mı?",
    "Hangi alanlarda en çok zorluk yaşıyorsunuz?",
    "Müşteri deneyimi kanallarınız nelerdir?"
  ];
} 