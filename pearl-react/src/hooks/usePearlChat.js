import { useState, useCallback } from 'react';
import { generateResponse } from '../services/pearlApi';

/**
 * Custom hook for managing PEARL chat state and interactions
 * @returns {Object} Chat state and methods
 */
export const usePearlChat = () => {
  const [messages, setMessages] = useState([{
    id: '1',
    role: 'assistant',
    content: "Hello! I'm PEARL, your personal AI medical companion. I can help explain medical terms, provide general health information, and suggest questions to ask your healthcare provider. How can I assist you today?\n\n*Remember: I am not a substitute for professional medical advice. Please consult licensed healthcare professionals for any medical concerns.*"
  }]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Send a message to the AI and update the chat
   * @param {string} userText - The user's message text
   */
  const sendMessage = useCallback(async (userText) => {
    if (!userText.trim() || isLoading) return;

    // Clear any previous error
    setError(null);

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: userText.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const aiResponse = await generateResponse(userText);

      // Add AI response
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponse
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Failed to get AI response:', err);
      setError(err.message);

      // Add error message as assistant message
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I apologize, but I'm currently unable to connect to my local AI assistant. Please make sure Ollama is running locally with the Llama 3 model. For now, try refreshing the page or check the console for more details.\n\n*Remember: This is not medical advice. Please consult a healthcare professional for any health concerns.*"
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  /**
   * Clear the chat and reset to initial state
   */
  const clearChat = useCallback(() => {
    setMessages([{
      id: '1',
      role: 'assistant',
      content: "Hello! I've reset our conversation. How can I assist you with general health information today?\n\n*Remember: I am not a substitute for professional medical advice.*"
    }]);
    setError(null);
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearChat
  };
};
