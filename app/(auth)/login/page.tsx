import AuthCard from "@/components/auth/auth-card";
import React from "react";

export default function LoginPage() {
  return (
    <section className="w-full h-full">
      <AuthCard
        logo={{
          url: "www.google.com",
          src: "/assets/placeholder.svg",
          alt: "boilerplate",
        }}
        heading="Login"
        subheading="Login to your account"
        type="login"
      />
    </section>
  );
}
