import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/animated-background"
import { ModeToggle } from "@/components/mode-toggle"

export default function Portfolio() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("olajide@example.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <ModeToggle />
      </div>

      <main className="max-w-2xl w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Christopher Olajide Shittu</h1>
        <h2 className="text-2xl text-muted-foreground">Data Analyst</h2>
        
        <p className="text-lg text-muted-foreground">
          I transform complex data into actionable business insights.
        </p>
        
        <div className="pt-6">
          <Button onClick={copyEmail}>
            <Mail className="mr-2 h-4 w-4" />
            {emailCopied ? "Copied!" : "Email Me"}
          </Button>
        </div>
      </main>
    </div>
  );
}