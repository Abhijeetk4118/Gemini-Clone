import { render, screen } from '@testing-library/react'
import App from './App'

test('renders chat interface', () => {
  render(<App />)
  
  // Check if the main elements are rendered
  expect(screen.getByText('Gemini AI Chatbot')).toBeInTheDocument()
  expect(screen.getByText('Powered by Google Gemini Pro')).toBeInTheDocument()
  expect(screen.getByPlaceholderText('Type your message here...')).toBeInTheDocument()
  expect(screen.getByText('Send')).toBeInTheDocument()
})

test('shows welcome message when no messages', () => {
  render(<App />)
  
  expect(screen.getByText('Welcome to Gemini AI Chatbot')).toBeInTheDocument()
  expect(screen.getByText('Start a conversation by typing a message below.')).toBeInTheDocument()
}) 