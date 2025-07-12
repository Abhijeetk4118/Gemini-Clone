export interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export interface ChatRequest {
  prompt: string;
}

export interface ChatResponse {
  reply: string;
}

export interface ChatError {
  message: string;
  status?: number;
} 