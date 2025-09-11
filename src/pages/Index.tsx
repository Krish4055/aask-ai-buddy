import { useState } from "react";
import { VoiceAgentPlaceholder } from "@/components/VoiceAgentPlaceholder";
import FaceRecognitionPlaceholder from "@/components/FaceRecognitionPlaceholder";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mic, Camera, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"chat" | "voice" | "face">("chat");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto p-4 h-screen flex flex-col">
        {/* Header */}
        <header className="text-center py-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">
            Aask AI
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Are you feeling low? I am here for you whats on your mind
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-2 shadow-soft">
            <div className="flex gap-2">
              <Button
                variant={activeTab === "chat" ? "default" : "ghost"}
                onClick={() => setActiveTab("chat")}
                className={
                  activeTab === "chat"
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                }
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat Agent
              </Button>
              <Button
                variant={activeTab === "voice" ? "default" : "ghost"}
                onClick={() => setActiveTab("voice")}
                className={
                  activeTab === "voice"
                    ? "bg-gradient-accent text-accent-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                }
              >
                <Mic className="w-4 h-4 mr-2" />
                Voice Agent
              </Button>
              <Button
                variant={activeTab === "face" ? "default" : "ghost"}
                onClick={() => setActiveTab("face")}
                className={
                  activeTab === "face"
                    ? "bg-gradient-accent text-accent-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                }
              >
                <Camera className="w-4 h-4 mr-2" />
                Face Recognition
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl shadow-soft overflow-hidden">
          {activeTab === "chat" ? (
            <div className="flex flex-col items-center justify-center h-full max-w-2xl mx-auto text-center p-8">
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow animate-pulse-glow">
                  <MessageCircle className="w-12 h-12 text-primary-foreground" />
                </div>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                Chat with Aask
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md">
                Are you feeling low? I am here for you whats on your mind
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-lg mb-8">
                <div className="bg-card/50 border border-border/50 rounded-xl p-4">
                  <h3 className="font-semibold text-foreground mb-2">💬 Friendly Chat</h3>
                  <p className="text-sm text-muted-foreground">Natural conversations</p>
                </div>
                <div className="bg-card/50 border border-border/50 rounded-xl p-4">
                  <h3 className="font-semibold text-foreground mb-2">🤝 Empathetic</h3>
                  <p className="text-sm text-muted-foreground">Supportive listening</p>
                </div>
                <div className="bg-card/50 border border-border/50 rounded-xl p-4">
                  <h3 className="font-semibold text-foreground mb-2">🔒 Safe Space</h3>
                  <p className="text-sm text-muted-foreground">Judgment-free zone</p>
                </div>
              </div>
              <Button 
                onClick={() => navigate("/chat")}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg rounded-2xl group"
              >
                Start Conversation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="mt-6 text-sm text-muted-foreground">
                ✨ Click above to begin chatting with Aask in full screen
              </div>
            </div>
          ) : activeTab === "voice" ? (
            <VoiceAgentPlaceholder />
          ) : (
            <FaceRecognitionPlaceholder />
          )}
        </div>

      </div>
    </div>
  );
};

export default Index;
