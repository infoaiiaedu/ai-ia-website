"use client";
import { useState } from "react";

const navItems = [
  { id: "start-guide", label: "როგორ დავიწყოთ" },
  { id: "how-we-work", label: "როგორ ვმუშაობთ" },
  { id: "difference", label: "რატომ AI-IA" },
  { id: "faq", label: "კითხვები" },
  { id: "blog", label: "ბლოგი" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        <img src="/log.png" alt="AI IA" className="w-20" />

        <nav className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={`relative transition ${
                active === item.id
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-green-400 transition-all ${
                  active === item.id ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 px-6 py-3 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block text-gray-200 hover:text-green-400"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
