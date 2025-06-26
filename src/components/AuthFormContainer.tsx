import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AuthFormContainerProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  footerContent: React.ReactNode;
}

const AuthFormContainer: React.FC<AuthFormContainerProps> = ({
  title,
  description,
  children,
  footerContent,
}) => {
  console.log("AuthFormContainer loaded");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold tracking-tight">{title}</CardTitle>
          {description && (
            <CardDescription className="pt-2">{description}</CardDescription>
          )}
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
        <CardFooter>
          <div className="w-full text-center text-sm text-gray-600">
            {footerContent}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthFormContainer;