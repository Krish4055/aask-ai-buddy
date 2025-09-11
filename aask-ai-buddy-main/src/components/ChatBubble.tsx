import { cn } from "@/lib/utils";

export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatBubbleProps {
  message: Message;
  className?: string;
}

export const ChatBubble = ({ message, className }: ChatBubbleProps) => {
  return (
    <div
      className={cn(
        "animate-fade-in flex w-full",
        message.isUser ? "justify-end" : "justify-start",
        className
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3 shadow-soft",
          message.isUser
            ? "bg-gradient-primary text-chat-user-foreground ml-12"
            : "bg-chat-ai text-chat-ai-foreground mr-12 border-2 border-chat-ai-accent/20"
        )}
      >
        {!message.isUser && (
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-chat-ai-accent animate-pulse-glow"></div>
            <span className="text-sm font-medium text-chat-ai-accent">Aask</span>
          </div>
        )}
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
        <div className="flex justify-end mt-2">
          <span className={cn(
            "text-xs opacity-60",
            message.isUser ? "text-chat-user-foreground/80" : "text-chat-ai-foreground/60"
          )}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
};