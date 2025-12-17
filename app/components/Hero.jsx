export default function Hero() {
  return (
    <section className="pt-32 pb-36 bg-gradient-to-b from-blue-950 to-black text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          შენი პირადი
          <span className="block mt-4 text-green-400 tracking-[0.3em]">
            AI მასწავლებელი
          </span>
        </h1>

        {/* SUBTITLE */}
        <p className="mt-8 text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
          სწავლა, რომელიც შენს ტემპს ერგება — მარტივად, გასაგებად და ეფექტურად.
        </p>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center gap-6">
          {/* MAIN CTA */}
          <button
            className="px-12 py-4 bg-green-500 text-black font-semibold rounded-2xl
            shadow-[0_0_28px_rgba(34,197,94,0.45)]
            hover:scale-[1.03] transition"
          >
            გადმოწერე
          </button>

          {/* STORES */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3
              bg-white/10 border border-white/20 rounded-xl
              backdrop-blur-sm
              hover:border-green-400 hover:text-green-400
              hover:-translate-y-0.5 transition"
            >
              <img
                src="/appstore.svg"
                alt="App Store"
                className="w-6 h-6 brightness-0 invert"
              />
              <span className="text-sm font-medium">App Store</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3
              bg-white/10 border border-white/20 rounded-xl
              backdrop-blur-sm
              hover:border-green-400 hover:text-green-400
              hover:-translate-y-0.5 transition"
            >
              <img
                src="/playstore.svg"
                alt="Google Play"
                className="w-6 h-6 brightness-0 invert"
              />
              <span className="text-sm font-medium">Google Play</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
