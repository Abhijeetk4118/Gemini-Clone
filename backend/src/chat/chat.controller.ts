import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { ChatService } from './chat.service';

export class ChatRequestDto {
  prompt: string;
}

export class ChatResponseDto {
  reply: string;
}

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async chat(@Body() chatRequest: ChatRequestDto): Promise<ChatResponseDto> {
    try {
      if (!chatRequest.prompt || chatRequest.prompt.trim() === '') {
        throw new HttpException('Prompt is required', HttpStatus.BAD_REQUEST);
      }

      const reply = await this.chatService.generateResponse(chatRequest.prompt);
      return { reply };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      
      console.error('Chat error:', error);
      throw new HttpException(
        'Failed to generate response',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
} 