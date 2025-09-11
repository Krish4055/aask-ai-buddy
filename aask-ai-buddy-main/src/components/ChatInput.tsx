import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
  className?: string;
}

export const ChatInput = ({ onSendMessage, isLoading = false, className }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex gap-3 p-4 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-soft",
        className
      )}
    >
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message to Aask..."
        disabled={isLoading}
        className="flex-1 border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
      />
      <Button
        type="submit"
        disabled={!message.trim() || isLoading}
        className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-6 rounded-xl"
      >
        {isLoading ? (
          <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
      </Button>
    </form>
  );
};