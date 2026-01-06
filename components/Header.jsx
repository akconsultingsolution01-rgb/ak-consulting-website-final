"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1c2645]/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-10 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-white font-semibold text-xl">
          AK Consulting Solution
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex gap-8 text-gray-200">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <Link href="/services" className="hover:text-cyan-400">Services</Link>
          <Link href="/solutions" className="hover:text-cyan-400">Solutions</Link>
          <Link href="/industries" className="hover:text-cyan-400">Industries</Link>
          <Link href="/company" className="hover:text-cyan-400">Company</Link>
          <Link href="/contact" className="hover:text-cyan-400">Contact Us</Link>
        </nav>

      </div>
    </header>
  );
}
