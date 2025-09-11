import { useState, useRef, useEffect } from "react";
import { ChatBubble, Message } from "@/components/ChatBubble";
import { ChatInput } from "@/components/ChatInput";
import { generateAaskResponse } from "@/services/geminiService";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";

export const AaskChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Are you feeling low? I am here for you whats on your mind",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (messageText: string) => {
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: messageText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Get AI response
      const aiResponseText = await generateAaskResponse(messageText);
      
      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        text: aiResponseText,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      toast({
        title: "Connection Issue",
        description: "I'm having trouble connecting right now. Let's try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex-shrink-0 p-6 text-center border-b border-border/50">
        <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
          Chat with Aask
        </h1>
        <p className="text-sm text-muted-foreground">
          Your friendly AI companion
        </p>
      </div>

      {/* Chat Messages */}
      <ScrollArea ref={scrollAreaRef} className="flex-1 p-6">
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatBubble key={message.id} message={message} />
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-chat-ai text-chat-ai-foreground rounded-2xl px-4 py-3 mr-12 border-2 border-chat-ai-accent/20 shadow-soft animate-fade-in">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-chat-ai-accent animate-pulse-glow"></div>
                  <span className="text-sm font-medium text-chat-ai-accent">Aask</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-chat-ai-accent animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-chat-ai-accent animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 rounded-full bg-chat-ai-accent animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="flex-shrink-0 p-6 border-t border-border/50">
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
};