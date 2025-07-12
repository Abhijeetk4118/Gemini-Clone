import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for frontend communication
  app.enableCors({
    origin: [
      'http://localhost:5173', 
      'http://localhost:3000',
      'https://gemini-chatbot-frontend.vercel.app',
      'https://gemini-chatbot-frontend-git-main.vercel.app',
      'https://gemini-chatbot-frontend-git-develop.vercel.app'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`🚀 Gemini Chatbot Backend running on port ${port}`);
}
bootstrap(); 