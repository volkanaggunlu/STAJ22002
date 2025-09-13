export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: Date;
}

export interface ChatSession {
  id: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ChatRequest {
  messages: Message[];
  sessionId?: string;
}

export interface ChatResponse {
  message: Message;
  suggestions?: string[];
  sessionId?: string;
}

export interface CompanyInfo {
  name?: string;
  sector?: string;
  size?: 'small' | 'medium' | 'large';
  currentTechStack?: string[];
  digitalMaturity?: 'low' | 'medium' | 'high';
  budget?: 'low' | 'medium' | 'high';
}

export interface DigitalTransformationAssessment {
  currentMaturity: number; // 1-10 scale
  recommendations: string[];
  priorityAreas: string[];
  estimatedTimeline: string;
  estimatedBudget: string;
} 