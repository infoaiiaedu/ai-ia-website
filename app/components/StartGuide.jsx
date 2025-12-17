export default function StartGuide() {
  return (
    <section
      id="start-guide" // ✅ ეს აკლდა
      className="py-20 md:py-28 bg-black/20 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT — TITLE */}
        <div className="md:pt-6">
          {/* Small label */}
          <h4 className="text-green-400 uppercase font-semibold mb-3 text-sm">
            როგორ დავიწყოთ
          </h4>

          {/* Main title */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            აღმოაჩინეთ სწავლის ახალი მეთოდი{" "}
            <span className="text-green-400">4 ნაბიჯით</span>
          </h2>

          <p className="text-gray-300 mt-4 max-w-md text-sm md:text-base">
            თქვენი შვილის საგანმანათლებლო მოგზაურობა სულ რამდენიმე წუთში იწყება.
          </p>
        </div>

        {/* RIGHT — TIMELINE */}
        <div className="relative border-l border-white/10 pl-8 space-y-8">
          {[
            {
              title: "მშობლის პროფილის შექმნა",
              desc: "გადმოწერეთ აპლიკაცია და გაიარეთ ავტორიზაცია.",
            },
            {
              title: "მოსწავლის რეგისტრაცია",
              desc: "დაარეგისტრირეთ თქვენი შვილი თქვენივე აპლიკაციიდან როგორც მოსწავლე.",
            },
            {
              title: "საგნის შერჩევა",
              desc: "შეარჩიეთ სასურველი საგანი და გადაიხადეთ.",
            },
            {
              title: "მოსწავლის ავტორიზაცია",
              desc: "მოსწავლე ავტორიზაციას შეძლებს თქვენი უნიკალური კოდით და შეძენილი საგნები ავტომატურად დახვდება.",
            },
          ].map((step, i) => (
            <div key={i} className="relative">
              {/* STEP DOT */}
              <span className="absolute -left-11 w-8 h-8 rounded-full bg-green-500 text-black font-bold flex items-center justify-center">
                {i + 1}
              </span>

              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-gray-300 text-sm mt-1 max-w-md">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
