
"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
    const res = await fetch("/api/auth/callback/credentials", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ email, password })
    });
    if (res.ok) {
      router.push("/listings");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#A60000] font-montserrat">
            UCM CribConnect
          </h1>
          <p className="text-gray-500">Welcome back! Please sign in to your account.</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@ucmo.edu" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full cursor-pointer bg-[#A60000] text-white">Sign In</Button>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>
        <Button variant="outline" className="w-full cursor-pointer" type="button" onClick={() => signIn("google", { callbackUrl: "/listings" })}>Sign in with Google</Button>

        <div className="text-center pt-4 text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-[#A60000] font-semibold hover:underline">Sign up now</a>
        </div>
      </div>
    </div>
  );
}
