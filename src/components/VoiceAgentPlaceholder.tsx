import { Mic, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const VoiceAgentPlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-2xl mx-auto text-center p-8">
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-full bg-gradient-secondary flex items-center justify-center shadow-glow">
          <Mic className="w-12 h-12 text-secondary-foreground" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
          <Volume2 className="w-4 h-4 text-accent-foreground" />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-4">
        Voice Agent
      </h2>
      
      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        Coming soon! Voice conversations with Aask will let you talk naturally and hear empathetic responses.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md mb-8">
        <div className="bg-card/50 border border-border/50 rounded-xl p-4">
          <h3 className="font-semibold text-foreground mb-2">🎤 Voice Input</h3>
          <p className="text-sm text-muted-foreground">Speak naturally to Aask</p>
        </div>
        <div className="bg-card/50 border border-border/50 rounded-xl p-4">
          <h3 className="font-semibold text-foreground mb-2">🗣️ Voice Output</h3>
          <p className="text-sm text-muted-foreground">Hear Aask's caring responses</p>
        </div>
      </div>
      
      <Button 
        variant="outline" 
        disabled 
        className="bg-muted/50 border-border/50 text-muted-foreground cursor-not-allowed"
      >
        Coming Soon
      </Button>
      
      <div className="mt-6 text-xs text-muted-foreground">
        💡 For now, enjoy chatting with Aask in the Chat Agent!
      </div>
    </div>
  );
};