import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="container mt-8 flex flex-col items-center justify-between gap-4 py-8 text-xs text-muted-foreground md:flex-row">
      <p className="m-0">
        &copy;
        <span className="mr-1">
          {new Date().getFullYear()}
        </span>
        Aldo Aldiero. All rights reserved.
      </p>
      <nav className="flex items-center gap-4">
        <Link href="#" className="hover:underline" prefetch={false}>
          Privacy Policy
        </Link>
        <Link href="#" className="hover:underline" prefetch={false}>
          Terms of Service
        </Link>
        <Link href="#" className="hover:underline" prefetch={false}>
          Sitemap
        </Link>
      </nav>
    </footer>
  );
}
