"use client";

import React from "react";
import { RegisterForm } from "@/components/authentication/RegisterForm";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

const RegisterPage = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <RegisterForm />
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<Loader2 className="w-4 h-4 animate-spin text-gray-500" />}>
      <RegisterPage />
    </Suspense>
  );
};

export default Page;
