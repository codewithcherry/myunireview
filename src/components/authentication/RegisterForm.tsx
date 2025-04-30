'use client';

import { GalleryVerticalEnd, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { googleSignIn } from "@/lib/oauth/actions/auth"

interface PasswordStrength {
  score: number;
  message: string;
}

interface RegisterFormProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
}

export function RegisterForm({
  className,
  ...props
}: RegisterFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>({
    score: 0,
    message: ""
  });
  const [registerLoading, setRegisterLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    
    if (passwordStrength.score < 2) {
      setError("Please choose a stronger password");
      return;
    }

    try {
      setRegisterLoading(true);
      setError(null);
      
      const response = await axios.post("/api/register", { email, password }, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.data.success) {
        setEmail('');
        setPassword('');
        router.push("/login");
      } else {
        setError(response.data.message || "Registration failed");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "An error occurred during registration");
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setRegisterLoading(false);
    }
  };

  const checkPasswordStrength = (password: string): void => {
    let score = 0;
    const messages: string[] = [];

    // Check length
    if (password.length >= 8) score += 1;
    else messages.push("at least 8 characters");

    // Check for numbers
    if (/\d/.test(password)) score += 1;
    else messages.push("include a number");

    // Check for special chars
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;
    else messages.push("include a special character");

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) score += 1;
    else messages.push("include an uppercase letter");

    const strengthMessages = [
      "Very weak",
      "Weak",
      "Moderate",
      "Strong",
      "Very strong"
    ];

    const message = messages.length > 0 && score < 4
      ? `${strengthMessages[score]} (${messages.join(", ")})`
      : strengthMessages[score];

    setPasswordStrength({ score, message });
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  const getStrengthColor = (): string => {
    const colors = [
      "text-red-500",
      "text-red-500",
      "text-yellow-500",
      "text-blue-500",
      "text-green-500"
    ];
    return colors[passwordStrength.score] || "text-gray-500";
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleRegister} className="space-y-4">
        <div className="flex flex-col items-center gap-2">
          <a href="#" className="flex flex-col items-center gap-2 font-medium">
            <div className="flex h-8 w-8 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-6" />
            </div>
            <span className="sr-only">MyUniReview</span>
          </a>
          <h1 className="text-xl font-bold">Welcome to MyUniReview</h1>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <a href="/login" className="underline underline-offset-4 hover:text-primary">
              Login
            </a>
          </div>
        </div>

        {error && (
          <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
              required
              autoComplete="new-password"
            />
            {password && (
              <div className={`text-xs ${getStrengthColor()}`}>
                Password strength: {passwordStrength.message}
              </div>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={registerLoading}>
            {registerLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Registering...
              </>
            ) : "Register"}
          </Button>
        </div>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Button variant="outline" type="button" className="w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mr-2 h-4 w-4">
              <path
                d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                fill="currentColor"
              />
            </svg>
            Apple
          </Button>
          <Button 
            variant="outline" 
            type="button" 
            className="w-full"
            onClick={() => googleSignIn()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mr-2 h-4 w-4">
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                fill="currentColor"
              />
            </svg>
            Google
          </Button>
        </div>
      </form>

      <div className="text-balance text-center text-xs text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <a href="/terms" className="underline underline-offset-4 hover:text-primary">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy" className="underline underline-offset-4 hover:text-primary">
          Privacy Policy
        </a>.
      </div>
    </div>
  );
}