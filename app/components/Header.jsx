"use client";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-black/30 backdrop-blur-xl border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* LOGO */}
        <a href="/" className="flex items-center cursor-pointer">
          <img
            src="/log.png"
            alt="AI IA Logo"
            className="w-24 object-contain drop-shadow-[0_0_8px_rgba(16,185,129,0.35)]"
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 text-gray-300 text-lg font-medium">
          <a href="#start-guide" className="hover:text-green-400 transition">
            დაწყება
          </a>
          <a href="#how-we-work" className="hover:text-green-400 transition">
            როგორ ვმუშაობთ
          </a>
          <a href="#blog" className="hover:text-green-400 transition">
            ბლოგი
          </a>
          <a href="#faq" className="hover:text-green-400 transition">
            კითხვები
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10 px-6 py-4 text-lg">
          <a
            href="#start-guide"
            className="block py-2 text-gray-200 hover:text-green-400 transition"
            onClick={() => setOpen(false)}
          >
            დაწყება
          </a>

          <a
            href="#how-we-work"
            className="block py-2 text-gray-200 hover:text-green-400 transition"
            onClick={() => setOpen(false)}
          >
            როგორ ვმუშაობთ
          </a>

          <a
            href="#blog"
            className="block py-2 text-gray-200 hover:text-green-400 transition"
            onClick={() => setOpen(false)}
          >
            ბლოგი
          </a>

          <a
            href="#faq"
            className="block py-2 text-gray-200 hover:text-green-400 transition"
            onClick={() => setOpen(false)}
          >
            კითხვები
          </a>
        </div>
      )}
    </header>
  );
}
