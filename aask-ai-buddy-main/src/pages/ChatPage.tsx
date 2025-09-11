import { AaskChat } from "@/components/AaskChat";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChatPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Header with back button */}
      <header className="sticky top-0 z-10 bg-card/80 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Aask AI
            </h1>
            <p className="text-xs text-muted-foreground">Your empathetic companion</p>
          </div>
          
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Full-page chat */}
      <div className="container mx-auto p-4 h-[calc(100vh-80px)]">
        <div className="h-full bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl shadow-soft overflow-hidden">
          <AaskChat />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;