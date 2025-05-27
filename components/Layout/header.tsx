import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="container mx-auto w-full py-4 sticky top-0 z-50">
      <div className="w-full flex justify-center items-center">
        <nav className="flex justify-center items-center rounded-full border border-gray-200 py-2 px-8 w-fit bg-white">
          <div className="flex gap-8">
            <Button variant="ghost" className="rounded-full">
              <Link href="#home">Home</Link>
            </Button>
            <Button variant="ghost" className="rounded-full">
              <Link href="#about">About</Link>
            </Button>
            <div className="flex items-center">
              <Link href="/">
                <Image src="/icon/cat-icon.svg" alt="logo" width={24} height={24} />
              </Link>
            </div>
            <Button variant="ghost" className="rounded-full">
              <Link href="#projects">Projects</Link>
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
