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
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            განსხვავება{" "}
            <span className="text-green-400">ტრადიციული სწავლებისგან</span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-4 gap-6">
          {/* CARD 1 */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <AcademicCapIcon className="w-8 h-8 text-green-400 mb-4" />

            <h3 className="font-semibold text-base mb-2">
              რთული თემები სახალისო მაგალითებით
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              საკითხები იხსნება ყოველდღიური სიტუაციების და ვიზუალური მაგალითების
              საშუალებით ისე, რომ სწავლა იყოს მარტივი, სახალისო და გასაგები.
            </p>
          </div>

          {/* CARD 2 — HIGHLIGHTED */}
          <div className="p-5 rounded-2xl bg-green-400/90 text-black shadow-lg">
            <VideoCameraIcon className="w-8 h-8 mb-4" />

            <h3 className="font-semibold text-base mb-2">
              ვიდეო და აუდიო მასალები
            </h3>
            <p className="text-sm leading-relaxed">
              AI აგენერირებს ვიდეო და აუდიო მასალებს, რაც სწავლას უფრო
              საინტერესოს ხდის და ამარტივებს რთული საკითხების გაგებას.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <TrophyIcon className="w-8 h-8 text-green-400 mb-4" />

            <h3 className="font-semibold text-base mb-2">
              გეიმიფიკაცია და ლიდერბორდები
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              შეფასების სისტემა ზრდის მოტივაციას ჯილდოებით, პროგრესის ჩვენებით
              და პოზიტიური უკუკავშირით.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <UserGroupIcon className="w-8 h-8 text-green-400 mb-4" />

            <h3 className="font-semibold text-base mb-2">მშობლის პროფილი</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              მშობელი იღებს ყოველკვირეულ რეპორტს და მუდმივად აკვირდება შვილის
              პროგრესს ერთ სივრცეში.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
