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
    content: "Hello! I'm PEARL, a calm AI medical companion. I'm here to help explain general health topics, decode medical jargon in simple terms, and suggest questions to prepare for your doctor's appointments. I'll never diagnose conditions or prescribe treatments—just provide caring, clear information to help you feel more confident about your health.\n\n*Please remember: I'm not a substitute for professional medical advice. For any health concerns, always consult licensed healthcare professionals.*"
  }]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasUserQueried, setHasUserQueried] = useState(() => {
    // Check sessionStorage for persistence
    return sessionStorage.getItem('pearl:hasUserQueried') === '1';
  });

  const updateHasUserQueried = useCallback((value) => {
    setHasUserQueried(value);
    if (value) {
      sessionStorage.setItem('pearl:hasUserQueried', '1');
    } else {
      sessionStorage.removeItem('pearl:hasUserQueried');
    }
  }, []);

  /**
   * Send a message to the AI and update the chat
   * @param {string} userText - The user's message text
   */
  const sendMessage = useCallback(async (userText) => {
    if (!userText.trim() || isLoading) return false;

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
      // Mark that user has sent their first successful query
      updateHasUserQueried(true);
      return true;
    } catch (err) {
      console.error('Failed to get AI response:', err);
      setError(err.message);

      // Add error message as assistant message
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I'm sorry, but I'm temporarily unable to connect to my local AI helper. Please ensure Ollama is running with the Llama 3 model on your device. Try refreshing this page or checking your local setup. This doesn't prevent you from using other health resources.\n\n*For any health concerns, please reach out to local healthcare providers or emergency services directly.*"
      };

      setMessages(prev => [...prev, errorMessage]);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, updateHasUserQueried]);

  /**
   * Clear the chat and reset to initial state
   */
  const clearChat = useCallback(() => {
    setMessages([{
      id: '1',
      role: 'assistant',
      content: "I've cleared our conversation. How can I help you understand general health information today?\n\n*Remember: I'm not a substitute for professional medical advice. Please connect licensed healthcare professionals for any health concerns.*"
    }]);
    setError(null);
  }, []);

  return {
    messages,
    isLoading,
    error,
    hasUserQueried,
    updateHasUserQueried,
    sendMessage,
    clearChat
  };
};
