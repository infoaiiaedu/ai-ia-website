"use client";

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-14 max-w-4xl">
          რას გულისხმობს <br />
          <span className="text-green-400">პერსონალიზებული სწავლება?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-20 items-center relative">
          {/* LEFT — TEXT */}
          <div>
            {/* MAIN POINT */}
            <div className="flex items-start gap-4 mb-8">
              <span className="mt-1 text-green-400 text-xl">✔</span>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                რეგისტრაციისას მოსწავლე წერს ტესტს, რის საფუძველზეც AI ქმნის მის
                სასწავლო პროფილს.
              </p>
            </div>

            {/* LIST */}
            <ul className="space-y-5 text-sm md:text-base">
              <li className="flex items-start gap-4">
                <span className="mt-1 text-green-400">✔</span>
                <span className="text-gray-300 leading-relaxed">
                  AI პასუხობს კითხვებს რეალურ დროში და ეხმარება მოსწავლეს რთული
                  ამოცანების დაძლევაში.
                </span>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-1 text-green-400">✔</span>
                <span className="text-gray-300 leading-relaxed">
                  AI აკვირდება პროგრესს და სთავაზობს რეკომენდაციებსა და
                  დავალებებს რთული თემებისთვის.
                </span>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-1 text-green-400">✔</span>
                <span className="text-gray-300 leading-relaxed">
                  AI მოსწავლის მონაცემებზე დაყრდნობით უზრუნველყოფს მასალის
                  გამეორებას და გამოცდებისთვის მზადებას.
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="relative flex justify-center md:justify-end">
            {/* GLOW */}
            <div className="absolute -top-24 right-10 w-[420px] h-[420px] bg-green-500/15 blur-[120px] rounded-full -z-10" />

            {/* IMAGE */}
            <img
              src="/robot.png"
              alt="AI learning robot"
              className="
    w-[260px] sm:w-[320px] md:w-[380px]
    -mt-12 sm:-mt-20 md:-mt-32
    drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]
    animate-float
  "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
