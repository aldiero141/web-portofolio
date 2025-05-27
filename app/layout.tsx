import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "@/styles/globals.css";

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aldo Aldiero | Web Developer",
  description: "Website Portoflio for Aldo Aldiero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${lexendDeca.variable}antialiased`}>
        <div className="container mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
