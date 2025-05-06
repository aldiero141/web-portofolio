import { Box } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="container mx-auto w-full py-4  ">
      <div className="w-full flex justify-center items-center">
        <nav className="flex justify-center items-center rounded-full border border-gray-200 py-2 px-8 w-fit">
          <div className="flex gap-8">
            <Button variant="ghost" className="rounded-full">
              <Link href="#home">Home</Link>
            </Button>
            <Button variant="ghost" className="rounded-full">
              <Link href="#about">About</Link>
            </Button>
            <div className="flex items-center">
              <Link href="/">
                <Box />
              </Link>
            </div>
            <Button variant="ghost" className="rounded-full">
              <Link href="#work">Works</Link>
            </Button>
            <Button variant="ghost" className="rounded-full">
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
