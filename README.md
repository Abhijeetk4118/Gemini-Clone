# Gemini AI Chatbot

A full-stack AI chatbot application powered by Google Gemini Pro, built with React (frontend) and NestJS (backend).

## 🚀 Features

- **Real-time AI Chat**: Interact with Google Gemini Pro AI
- **Modern UI**: Clean, responsive interface built with React and TailwindCSS
- **Type Safety**: Full TypeScript support for both frontend and backend
- **Error Handling**: Comprehensive error handling and user feedback
- **Loading States**: Smooth loading animations and user experience
- **RESTful API**: Clean API design with proper HTTP status codes

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **TailwindCSS** for styling
- **Axios** for API communication

### Backend
- **NestJS** with TypeScript
- **Google Generative AI** SDK
- **ConfigModule** for environment management
- **CORS** enabled for frontend communication

## 📁 Project Structure

```
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── services/        # API services
│   │   ├── types/          # TypeScript type definitions
│   │   └── App.tsx         # Main application component
│   ├── package.json
│   └── vite.config.ts
├── backend/                  # NestJS backend application
│   ├── src/
│   │   ├── chat/           # Chat module (controller & service)
│   │   ├── app.module.ts   # Main application module
│   │   └── main.ts         # Application entry point
│   ├── package.json
│   └── nest-cli.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API key

### 1. Get Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the API key for the next step

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp env.example .env

# Edit .env file and add your Gemini API key
# GEMINI_API_KEY=your_actual_api_key_here

# Start development server
npm run start:dev
```

The backend will run on `http://localhost:3001`

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will run on `http://localhost:5173`

### 4. Start Chatting!

Open your browser and navigate to `http://localhost:5173` to start chatting with the AI!

## 🔧 Configuration

### Backend Environment Variables

Create a `.env` file in the `backend/` directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3001
NODE_ENV=development
```

### Frontend Environment Variables

Create a `.env` file in the `frontend/` directory (optional):

```env
VITE_API_URL=http://localhost:3001
```

## 📡 API Endpoints

### POST /chat

Send a message to the AI and receive a response.

**Request:**
```json
{
  "prompt": "Hello, how are you?"
}
```

**Response:**
```json
{
  "reply": "Hello! I'm doing well, thank you for asking. How can I help you today?"
}
```

## 🎨 UI Features

- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Typing Indicators**: Shows when AI is thinking
- **Message History**: Scrollable chat history
- **Error Handling**: User-friendly error messages
- **Loading States**: Smooth animations during API calls
- **Auto-scroll**: Automatically scrolls to new messages

## 🛡️ Error Handling

The application includes comprehensive error handling:

- **Network Errors**: Connection issues and server unavailability
- **API Errors**: Invalid requests, rate limits, and server errors
- **Validation Errors**: Empty messages and invalid inputs
- **User Feedback**: Clear error messages and loading states

## 🚀 Deployment

### Backend Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Start production server:
   ```bash
   npm run start:prod
   ```

### Frontend Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Serve the `dist/` folder with your preferred web server.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

1. **"Cannot connect to server"**
   - Make sure the backend is running on port 3001
   - Check if the API URL is correct in the frontend

2. **"Invalid API key"**
   - Verify your Gemini API key is correct
   - Ensure the API key has proper permissions

3. **"Rate limit exceeded"**
   - Wait a moment before sending another message
   - Check your Gemini API quota

4. **CORS errors**
   - The backend is configured with open CORS policy
   - Make sure both frontend and backend are running

### Getting Help

If you encounter any issues:

1. Check the browser console for frontend errors
2. Check the terminal for backend errors
3. Verify your environment variables are set correctly
4. Ensure all dependencies are installed

## 🔮 Future Enhancements

- [ ] Message persistence with database
- [ ] User authentication
- [ ] Conversation history
- [ ] File upload support
- [ ] Voice input/output
- [ ] Multiple AI models support
- [ ] Chat export functionality 