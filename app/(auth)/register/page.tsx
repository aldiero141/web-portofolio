import AuthCard from "@/components/auth/auth-card";
import React from "react";

export default function RegisterPage() {
  return (
    <section className="w-full h-full">
      <AuthCard
        logo={{
          url: "www.google.com",
          src: "/assets/placeholder.svg",
          alt: "boilerplate",
        }}
        heading="Register"
        subheading="Register to your account"
        type="register"
      />
    </section>
  );
}
