"use client";

import {
  AcademicCapIcon,
  VideoCameraIcon,
  TrophyIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function DifferenceSection() {
  return (
    <section id="difference" className="py-20 md:py-28 bg-black/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            განსხვავება{" "}
            <span className="text-green-400">ტრადიციული სწავლებისგან</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div
            className="group p-5 rounded-2xl bg-white/5 border border-green-400/30
                          shadow-[0_0_18px_rgba(16,185,129,0.15)]
                          hover:shadow-[0_0_26px_rgba(16,185,129,0.35)]
                          hover:border-green-400/60 transition"
          >
            <AcademicCapIcon className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="font-semibold text-base mb-2">
              სახალისო მაგალითები
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              საკითხები იხსნება ყოველდღიური სიტუაციებისა და ვიზუალური ანალოგების
              გამოყენებით, რათა სწავლა იყოს მარტივი და გასაგები.
            </p>
          </div>

          {/* CARD */}
          <div
            className="group p-5 rounded-2xl bg-white/5 border border-green-400/30
                          shadow-[0_0_18px_rgba(16,185,129,0.15)]
                          hover:shadow-[0_0_26px_rgba(16,185,129,0.35)]
                          hover:border-green-400/60 transition"
          >
            <VideoCameraIcon className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="font-semibold text-base mb-2">
              ვიდეო და აუდიო მასალები
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              AI ქმნის ვიდეო და აუდიო მასალებს, რაც სწავლას უფრო საინტერესოს და
              მარტივად აღსაქმელს ხდის.
            </p>
          </div>

          <div
            className="group p-5 rounded-2xl bg-white/5 border border-green-400/30
                          shadow-[0_0_18px_rgba(16,185,129,0.15)]
                          hover:shadow-[0_0_26px_rgba(16,185,129,0.35)]
                          hover:border-green-400/60 transition"
          >
            <TrophyIcon className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="font-semibold text-base mb-2">
              თამაშის ელემენტები{" "}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              სწავლა წახალისებულია ჯილდოებით და ლიდერბორდებით, რაც მოსწავლეს
              მოტივაციას უზრდის.
            </p>
          </div>

          <div
            className="group p-5 rounded-2xl bg-white/5 border border-green-400/30
                          shadow-[0_0_18px_rgba(16,185,129,0.15)]
                          hover:shadow-[0_0_26px_rgba(16,185,129,0.35)]
                          hover:border-green-400/60 transition"
          >
            <UserGroupIcon className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="font-semibold text-base mb-2">მშობლის პროფილი</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              მშობელი იღებს პერიოდულ რეპორტებს და მუდმივად აკვირდება შვილის
              პროგრესს ერთ სივრცეში.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
