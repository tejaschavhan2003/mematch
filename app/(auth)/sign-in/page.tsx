"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  const handleSubmitSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/otp-verification");
  };

  return (
    <div>
      <div className="flex flex-col gap-8 px-4 w-full md:max-w-md mx-auto mt-20">
        <h1 className="text-center text-4xl font-bold ">Sign-In</h1>
        <form onSubmit={handleSubmitSignIn} className="flex flex-col gap-4">
          <div>
            <label htmlFor="username">Username/Email</label>
            <Input
              type="text"
              placeholder="username"
              className="rounded-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              placeholder="password"
              className="rounded-sm"
              required
            />
          </div>
          <div className="flex items-center">
            <Button type="submit" className="md:self-center">
              Sign Up
            </Button>
            <Link
              href="/sign-up"
              className="ml-4 text-sm text-blue-500 hover:underline"
            >
              Don't have an account? Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
