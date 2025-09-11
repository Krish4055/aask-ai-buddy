import { Camera, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FaceRecognitionPlaceholder = () => {
  return (
    <div className="text-center space-y-8">
      {/* Face Recognition Icons */}
      <div className="flex justify-center items-center space-x-6">
        <div className="p-6 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full backdrop-blur-sm border border-pink-200/30">
          <Camera className="w-12 h-12 text-pink-400" />
        </div>
        <div className="p-4 bg-gradient-to-br from-yellow-400/20 to-pink-400/20 rounded-full backdrop-blur-sm border border-yellow-200/30 animate-pulse">
          <Sparkles className="w-8 h-8 text-yellow-400" />
        </div>
      </div>

      {/* Title */}
      <div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
          Face Recognition
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Hey there, beautiful soul! 🌸 Soon, Aask will learn to recognize your lovely smile 😄 and bring even warmer, more personal conversations your way. Until then, let's keep chatting and spreading good vibes together! 💕
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-pink-50/50 to-purple-50/50 border-pink-200/30 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-pink-700">Smart Recognition</h3>
            <p className="text-sm text-muted-foreground">
              Personalized conversations based on your expressions and mood
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50/50 to-pink-50/50 border-purple-200/30 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-purple-700">Emotional Intelligence</h3>
            <p className="text-sm text-muted-foreground">
              Understanding your feelings through facial expressions
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Coming Soon Button */}
      <div className="space-y-4">
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-3 rounded-full shadow-lg disabled:opacity-50" 
          disabled
        >
          Coming Soon ✨
        </Button>
        <p className="text-sm text-muted-foreground">
          For now, try our <span className="text-primary font-medium">Chat Agent</span> for meaningful conversations!
        </p>
      </div>
    </div>
  );
};

export default FaceRecognitionPlaceholder;