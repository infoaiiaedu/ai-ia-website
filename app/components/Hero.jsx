export default function Hero() {
  return (
    <section className="pt-16 md:pt-20 pb-24 md:pb-32 bg-gradient-to-b from-blue-950 to-black">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* LEFT TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            შენი პირადი <span className="text-green-400">AI მასწავლებელი</span>{" "}
          </h1>

          <p className="text-gray-300 mt-4 text-base md:text-lg max-w-xl mx-auto md:mx-0">
            ვიზუალური, მარტივი და სახალისო მასალა მოსწავლეებისთვის.
          </p>

          <button className="mt-8 px-6 md:px-8 py-3 md:py-4 bg-green-500 rounded-xl text-black font-semibold hover:bg-green-400 transition">
            დაიწყე სწავლა
          </button>
        </div>

        {/* RIGHT – PHONE MOCKUP + ANIMATION */}
        <div className="flex justify-center relative mt-10 md:mt-0">
          <div className="relative w-[200px] sm:w-[240px] md:w-[300px] floating-phone hover:tilt-phone transition-transform">
            {/* Soft Glow */}
            <div className="absolute inset-0 blur-[50px] bg-green-500/20 -z-10"></div>

            {/* Frame image */}
            <img
              src="/hero-illustration.png"
              alt="iPhone frame"
              className="pointer-events-none select-none w-full relative z-10 drop-shadow-2xl"
            />

            {/* Placeholder for app preview */}
            <div className="absolute top-[11%] left-[9.5%] w-[81%] h-[78%] rounded-[20px] md:rounded-[24px] overflow-hidden shadow-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <div className="w-16 h-16 mx-auto mb-3 bg-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 5v10l8-5-8-5z" />
                  </svg>
                </div>
                <p className="text-sm font-medium">App Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
