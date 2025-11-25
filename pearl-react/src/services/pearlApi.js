// API service for interacting with local Ollama Llama 3
import { SYSTEM_PROMPT, MODEL, TEMPERATURE, MAX_TOKENS } from '../constants';

const OLLAMA_URL = 'http://localhost:11434/api/generate';

/**
 * Generate a response from the local Llama 3 model via Ollama
 * @param {string} userMessage - The user's message
 * @returns {Promise<string>} - The AI response as markdown text
 */
export const generateResponse = async (userMessage) => {
  try {
    const prompt = `${SYSTEM_PROMPT}\n\nUser: ${userMessage}\n\nPEARL:`;

    const requestBody = {
      model: MODEL,
      prompt: prompt,
      stream: false,
      options: {
        temperature: TEMPERATURE,
        num_predict: MAX_TOKENS
      }
    };

    const response = await fetch(OLLAMA_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Ollama typically returns the response in 'response' field
    // But let's make it robust to handle variations
    const aiResponse = data.response || data.message || data.content || '';

    // Clean up the response
    return aiResponse.trim();
  } catch (error) {
    console.error('Error generating AI response:', error);
    throw error;
  }
};
