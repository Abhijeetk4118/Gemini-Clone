import { Test, TestingModule } from '@nestjs/testing';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';

describe('ChatController', () => {
  let controller: ChatController;
  let service: ChatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatController],
      providers: [
        {
          provide: ChatService,
          useValue: {
            generateResponse: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ChatController>(ChatController);
    service = module.get<ChatService>(ChatService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a response when given a valid prompt', async () => {
    const mockResponse = 'Hello! How can I help you today?';
    jest.spyOn(service, 'generateResponse').mockResolvedValue(mockResponse);

    const result = await controller.chat({ prompt: 'Hello' });

    expect(result).toEqual({ reply: mockResponse });
    expect(service.generateResponse).toHaveBeenCalledWith('Hello');
  });
}); 