import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthFormContainer from '@/components/AuthFormContainer';
import SocialLoginButtons from '@/components/SocialLoginButtons';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const LoginPage = () => {
  console.log('LoginPage loaded');
  const navigate = useNavigate();

  // Simulate login and redirect
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login form submitted. Redirecting to dashboard...');
    // In a real app, you would perform authentication here
    // before navigating.
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <AuthFormContainer
          title="Login to your account"
          description="Enter your email and password to access your dashboard."
          footerContent={
            <p>
              Don&apos;t have an account?{' '}
              <Link to="/sign-up" className="font-semibold text-primary hover:underline">
                Sign Up
              </Link>
            </p>
          }
        >
          <form onSubmit={handleLogin} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                autoComplete="email"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" required autoComplete="current-password" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember-me" />
              <Label htmlFor="remember-me" className="text-sm font-normal cursor-pointer">
                Remember me
              </Label>
            </div>
            <Button type="submit" className="w-full mt-2">
              Login
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          
          <SocialLoginButtons />
        </AuthFormContainer>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;