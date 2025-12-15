"use client";
import { useState } from "react";

const navItems = [
  { id: "start-guide", label: "დაწყება" },
  { id: "how-we-work", label: "როგორ ვმუშაობთ" },
  { id: "faq", label: "კითხვები" },
  { id: "blog", label: "ბლოგი" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(""); // click-ზე აქტიური

  const handleNavClick = (id) => {
    setActive(id);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/30">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* LOGO */}
        <a href="/" className="flex items-center cursor-pointer">
          <img
            src="/log.png"
            alt="AI IA Logo"
            className="w-24 object-contain drop-shadow-[0_0_8px_rgba(16,185,129,0.35)] transition-transform duration-300 hover:scale-[1.03]"
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`relative px-1 py-2 transition-colors duration-200 ${
                active === item.id
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}

              {/* underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-green-400 transition-all duration-300 ${
                  active === item.id ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden text-white text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10 px-6 py-4 text-lg">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`block rounded-lg px-3 py-2 transition ${
                active === item.id
                  ? "bg-green-400/10 text-green-400"
                  : "text-gray-200 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
