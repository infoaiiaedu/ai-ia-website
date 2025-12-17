"use client";

import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* LEFT */}
          <span className="text-sm text-gray-400 uppercase tracking-wider">
            კონტაქტი
          </span>

          {/* RIGHT */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-400">
            <a
              href="mailto:info@ai-ia.ge"
              className="flex items-center gap-2 hover:text-green-400 transition"
            >
              <EnvelopeIcon className="w-4 h-4" />
              info@ai-ia.ge
            </a>

            <a
              href="tel:+995598000000"
              className="flex items-center gap-2 hover:text-green-400 transition"
            >
              <PhoneIcon className="w-4 h-4" />
              +995 598 00 00 00
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-8 border-t border-white/5" />

        {/* BOTTOM ROW */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span className="text-sm text-gray-400 uppercase tracking-wider">
            გადმოწერე
          </span>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-green-400 transition"
            >
              <img
                src="/appstore.svg"
                alt="App Store"
                className="w-4 h-4 brightness-0 invert opacity-70"
              />
              App Store
            </a>

            <a
              href="#"
              className="flex items-center gap-2 hover:text-green-400 transition"
            >
              <img
                src="/playstore.svg"
                alt="Google Play"
                className="w-4 h-4 brightness-0 invert opacity-70"
              />
              Google Play
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
