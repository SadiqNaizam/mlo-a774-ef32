import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormContainer from '@/components/AuthFormContainer';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from "@/components/ui/use-toast";

const ForgotPasswordPage: React.FC = () => {
  console.log('ForgotPasswordPage loaded');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Password reset requested for:', email);
    
    // Simulate API call and success response
    toast({
      title: "Check your email",
      description: `A password reset link has been sent to ${email}.`,
    });

    // Optionally redirect user after submission
    // navigate('/'); 
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <AuthFormContainer
          title="Forgot Your Password?"
          description="No problem. Enter your email below and we'll send you a link to reset it."
          footerContent={
            <>
              Remember your password?{' '}
              <Link to="/" className="font-semibold text-primary hover:underline">
                Log In
              </Link>
            </>
          }
        >
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
          </form>
        </AuthFormContainer>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;