export default function Hero() {
  return (
    <section className="pt-20 pb-32 bg-gradient-to-b from-blue-950 to-black">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT TEXT */}
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            სწავლა მარტივია <span className="text-green-400">აი იასთან</span>{" "}
            ერთად
          </h1>

          <p className="text-gray-300 mt-4 text-lg max-w-xl">
            ვიზუალური, მარტივი და სახალისო მასალა მოსწავლეებისთვის.
          </p>

          <button className="mt-8 px-8 py-4 bg-green-500 rounded-xl text-black font-semibold hover:bg-green-400 transition">
            დაიწყე სწავლა
          </button>
        </div>

        {/* RIGHT – PHONE MOCKUP + ANIMATION */}
        <div className="flex justify-center relative">
          <div className="relative w-[260px] md:w-[300px] floating-phone hover:tilt-phone transition-transform">
            {/* Soft Glow */}
            <div className="absolute inset-0 blur-[60px] bg-green-500/20 -z-10"></div>

            {/* iPhone frame */}
            <img
              src="/hero-illustration.png"
              alt="iPhone frame"
              className="pointer-events-none select-none w-full relative z-10 drop-shadow-2xl"
            />

            {/* Video inside screen */}
            <div className="absolute top-[11%] left-[9.5%] w-[81%] h-[78%] rounded-[24px] overflow-hidden shadow-xl">
              <video
                src="/videos/app-preview.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
