import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Portofolio | Authorization Page",
  description: "Authenticate yourself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto w-full h-full min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
