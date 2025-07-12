@echo off
echo 🚀 Setting up Gemini AI Chatbot...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

echo ✅ Node.js is installed

REM Install backend dependencies
echo 📦 Installing backend dependencies...
cd backend
call npm install

REM Check if .env file exists
if not exist .env (
    echo ⚠️  .env file not found. Creating from template...
    copy env.example .env
    echo 📝 Please edit backend/.env and add your Gemini API key
    echo    GEMINI_API_KEY=your_actual_api_key_here
)

cd ..

REM Install frontend dependencies
echo 📦 Installing frontend dependencies...
cd frontend
call npm install
cd ..

echo.
echo 🎉 Setup complete!
echo.
echo 📋 Next steps:
echo 1. Edit backend/.env and add your Gemini API key
echo 2. Start the backend: cd backend ^&^& npm run start:dev
echo 3. Start the frontend: cd frontend ^&^& npm run dev
echo 4. Open http://localhost:5173 in your browser
echo.
echo 🔑 Get your Gemini API key from: https://makersuite.google.com/app/apikey
pause 