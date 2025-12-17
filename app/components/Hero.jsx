export default function Hero() {
  return (
    <section className="pt-20 md:pt-24 pb-28 md:pb-32 bg-gradient-to-b from-blue-950 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 md:gap-16 items-center">
        {/* LEFT – TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            შენი პირადი
            <span className="block text-green-400 mt-2">AI მასწავლებელი</span>
          </h1>

          <p className="mt-6 text-gray-300 text-base md:text-lg max-w-xl mx-auto md:mx-0">
            სწავლა, რომელიც შენს ტემპს ერგება — მარტივად, გასაგებად და
            ეფექტურად.
          </p>
          {/* CTA BLOCK */}
          <div className="mt-12 flex items-center justify-center md:justify-start gap-6 relative">
            {/* App Store */}
            <a
              href="#"
              className="flex items-center justify-center gap-3
             w-[210px] h-[56px]
             bg-white/10
             border border-green-400/60
             rounded-xl backdrop-blur-sm
             shadow-[0_0_22px_rgba(16,185,129,0.35)]
             transition"
            >
              <img
                src="/appstore.svg"
                alt="App Store"
                className="w-6 h-6 brightness-0 invert"
              />
              <span className="text-sm font-semibold tracking-wide whitespace-nowrap">
                App Store
              </span>
            </a>

            {/* CENTER CTA */}
            <div className="relative flex items-center">
              {/* LEFT ARROW */}
              <span className="absolute -left-6 text-green-400 text-2xl animate-pulse select-none">
                ←
              </span>

              <button
                className="w-[200px] h-[56px]
               bg-green-500/80 text-black
               border border-green-400/70
               rounded-xl font-semibold
               hover:bg-green-500 hover:border-green-400
               transition
               shadow-[0_0_16px_rgba(16,185,129,0.35)]"
              >
                დაიწყე სწავლა
              </button>

              {/* RIGHT ARROW */}
              <span className="absolute -right-6 text-green-400 text-2xl animate-pulse select-none">
                →
              </span>
            </div>

            {/* Google Play */}
            <a
              href="#"
              className="flex items-center justify-center gap-3
             w-[210px] h-[56px]
             bg-white/10
             border border-green-400/60
             rounded-xl backdrop-blur-sm
             shadow-[0_0_22px_rgba(16,185,129,0.35)]
             transition"
            >
              <img
                src="/playstore.svg"
                alt="App Store"
                className="w-6 h-6 brightness-0 invert"
              />
              <span className="text-sm font-semibold tracking-wide whitespace-nowrap">
                Google Play
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT – PHONE MOCKUP */}
        <div className="flex justify-center mt-12 md:mt-0">
          <div className="relative w-[220px] sm:w-[260px] md:w-[320px]">
            {/* Soft glow */}
            <div className="absolute inset-0 blur-[60px] bg-green-500/20 -z-10"></div>

            <img
              src="/mockup2.png"
              alt="AI IA App Preview"
              className="w-full relative z-10 drop-shadow-2xl pointer-events-none select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
