"use client";

import { LoginForm } from "@/components/authentication/LoginForm";
import { GalleryVerticalEnd } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
              <span className=" transition-transform duration-200 inline-block">My</span>
              <span className=" transition-transform duration-200 inline-block">Uni</span>
              <span className=" transition-transform duration-200 inline-block">Review</span>
            </h1>
          </div>
        </a>
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
