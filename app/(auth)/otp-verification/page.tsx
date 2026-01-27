"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/home/xyz");
  };
  return (
    <div>
      <div className="flex flex-col gap-8 px-4 w-full md:max-w-md mx-auto mt-20">
        <h1 className="text-center text-4xl font-bold ">OTP Verification</h1>
        <form onSubmit={handleOtpSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="otp">Enter OTP</label>
            <Input
              type="text"
              placeholder="OTP"
              className="rounded-sm"
              required
            />
          </div>
          <Button type="submit" className="md:self-center">
            Verify OTP
          </Button>
        </form>
      </div>
    </div>
  );
}
