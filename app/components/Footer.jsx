export default function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/10 pt-16 pb-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-gray-300">
        {/* LEFT — DOWNLOAD SECTION */}
        <div>
          <h3 className="text-white font-semibold mb-6">გადმოწერე</h3>

          {/* SVG logos in a row */}
          <div className="flex items-center gap-4 mt-2">
            <a href="https://apps.apple.com" target="_blank">
              <img
                src="/appstore.svg"
                alt="App Store"
                className="w-10 h-auto filter invert brightness-200 contrast-200 hover:opacity-80 transition"
              />
            </a>

            <a href="https://play.google.com" target="_blank">
              <img
                src="/playstore.svg"
                alt="Google Play"
                className="w-10 h-auto filter invert brightness-200 contrast-200 hover:opacity-80 transition"
              />
            </a>
          </div>
        </div>

        {/* CENTER — NAVIGATION */}
        <div>
          <h3 className="text-white font-semibold mb-4">ნავიგაცია</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a
                href="#start-guide"
                className="hover:text-green-400 transition"
              >
                დაწყების გზამკვლევი
              </a>
            </li>
            <li>
              <a
                href="#how-we-work"
                className="hover:text-green-400 transition"
              >
                როგორ ვმუშაობთ
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-green-400 transition">
                ბლოგი
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-green-400 transition">
                კითხვები
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT — CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">კონტაქტი</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-green-400 transition cursor-pointer">
              info@ai-ia.ge
            </li>
            <li className="hover:text-green-400 transition cursor-pointer">
              +995 598 00 00 00
            </li>
            <li className="hover:text-green-400 transition cursor-pointer">
              რამეს ჩავწერთ
            </li>
            <li>თბილისი, საქართველო</li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        AI IA — შექმნილია Astarta-ს მიერ.
      </div>
    </footer>
  );
}
