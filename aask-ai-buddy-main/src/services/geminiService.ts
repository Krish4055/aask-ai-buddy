// Gemini API integration
const GEMINI_API_KEY = "AIzaSyBEXqRbvALldUd1A7mu0zWCvkk9AQtCJcc";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent";

export interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
}

export const generateAaskResponse = async (userMessage: string): Promise<string> => {
  try {
    const systemPrompt = `You are Aask, a friendly and empathetic AI companion. Your role is to:

1. Be a supportive listener and conversational friend
2. Respond with warmth, empathy, and genuine interest
3. Ask thoughtful follow-up questions to encourage conversation
4. Avoid giving direct medical advice or diagnosing conditions
5. If someone seems distressed, gently suggest professional help while being supportive
6. Keep responses concise but meaningful (2-4 sentences typically)
7. Use a casual, friendly tone like you're talking to a close friend
8. Show curiosity about the person's thoughts, feelings, and experiences

Remember: You're not a therapist, but a caring friend who listens without judgment. Be authentic, warm, and encouraging.

User message: ${userMessage}`;

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: systemPrompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 200,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      }),
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data: GeminiResponse = await response.json();
    
    if (!data.candidates || data.candidates.length === 0) {
      throw new Error("No response from Gemini API");
    }

    const responseText = data.candidates[0]?.content?.parts?.[0]?.text;
    
    if (!responseText) {
      throw new Error("Invalid response format from Gemini API");
    }

    return responseText.trim();
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    
    // Fallback responses for different scenarios
    const fallbackResponses = [
      "I'm here to listen. How are you feeling today?",
      "That sounds interesting! Can you tell me more about what's on your mind?",
      "I appreciate you sharing that with me. What's been the most important thing to you lately?",
      "Thanks for opening up. Sometimes it helps just to talk things through, doesn't it?",
    ];
    
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  }
};