import axios, { AxiosError } from 'axios';
import { ChatRequest, ChatResponse } from '../types/chat';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const chatService = {
  async sendMessage(prompt: string): Promise<string> {
    try {
      const request: ChatRequest = { prompt };
      const response = await api.post<ChatResponse>('/chat', request);
      return response.data.reply;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        
        if (axiosError.response?.status === 400) {
          throw new Error('Please enter a valid message');
        }
        
        if (axiosError.response?.status === 429) {
          throw new Error('Rate limit exceeded. Please try again later.');
        }
        
        if (axiosError.response?.status === 500) {
          throw new Error('Server error. Please check your API key configuration.');
        }
        
        if (axiosError.code === 'ECONNREFUSED') {
          throw new Error('Cannot connect to server. Please make sure the backend is running.');
        }
        
        throw new Error('Failed to send message. Please try again.');
      }
      
      throw new Error('An unexpected error occurred.');
    }
  },
}; 