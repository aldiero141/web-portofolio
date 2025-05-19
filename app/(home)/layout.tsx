import type { Metadata } from "next";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Aldo Aldiero | Frontend Engineer",
  description: "Website Portoflio for Aldo Aldiero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        {children}
      </div>
      <Footer />
    </>
  );
}
