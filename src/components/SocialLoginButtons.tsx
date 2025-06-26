import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Chrome } from "lucide-react";

const SocialLoginButtons: React.FC = () => {
  console.log('SocialLoginButtons loaded');

  const handleSocialLogin = (provider: 'google' | 'github') => {
    // In a real application, this would trigger the OAuth flow.
    // For now, we'll just log to the console.
    console.log(`Initiating ${provider} login...`);
  };

  return (
    <div className="flex w-full flex-col sm:flex-row gap-4">
      <Button variant="outline" className="w-full" onClick={() => handleSocialLogin('github')}>
        <Github className="mr-2 h-4 w-4" />
        GitHub
      </Button>
      <Button variant="outline" className="w-full" onClick={() => handleSocialLogin('google')}>
        <Chrome className="mr-2 h-4 w-4" />
        Google
      </Button>
    </div>
  );
};

export default SocialLoginButtons;