import { useState } from "react";
import { AaskChat } from "@/components/AaskChat";
import { VoiceAgentPlaceholder } from "@/components/VoiceAgentPlaceholder";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mic } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"chat" | "voice">("chat");

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto p-4 h-screen flex flex-col">
        {/* Header */}
        <header className="text-center py-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">
            Aask AI
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your empathetic AI companion for meaningful conversations and emotional support
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
                    ? "bg-gradient-secondary text-secondary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                }
              >
                <Mic className="w-4 h-4 mr-2" />
                Voice Agent
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl shadow-soft overflow-hidden">
          {activeTab === "chat" ? <AaskChat /> : <VoiceAgentPlaceholder />}
        </div>

        {/* Footer */}
        <footer className="text-center py-6">
          <p className="text-sm text-muted-foreground">
            ⚠️ Aask AI is not a substitute for professional medical or mental health care
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
