"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

export default function RegisterForm() {
  return (
    <>
      <div className="grid gap-4">
        <Input type="email" placeholder="Enter your email" required />
        <div>
          <Input
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              className="border-muted-foreground"
            />
            <label
              htmlFor="remember"
              className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>
          <Link href="#" className="text-sm text-primary hover:underline">
            Forgot password
          </Link>
        </div>
        <Button type="submit" className="mt-2 w-full">
          Register
        </Button>
        <Button variant="outline" className="w-full">
          {/* <FcGoogle className="mr-2 size-5" /> */}
          Register with Google
        </Button>
      </div>
      <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
        <p>Already have an account?</p>
        <Link href="/login" className="font-medium text-primary">
          Sign in
        </Link>
      </div>
    </>
  );
}
