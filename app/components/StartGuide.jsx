export default function StartGuide() {
  return (
    <section id="start-guide" className="py-28 bg-black/20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* LEFT */}
        <div>
          <h4 className="text-green-400 uppercase font-semibold mb-3">
            როგორ დავიწყოთ
          </h4>

          <h2 className="text-3xl font-bold mb-4 leading-tight">
            დაწყების მარტივი პროცესი{" "}
            <span className="text-green-400">4 სწრაფი ნაბიჯით</span>
          </h2>

          <p className="text-gray-300 mb-6">
            თქვენი შვილის საგანმანათლებლო მოგზაურობა სულ რამდენიმე წუთში იწყება.
          </p>

          <a className="px-5 py-3 bg-green-500 text-black font-semibold rounded-lg inline-block hover:bg-green-400 transition cursor-pointer">
            დაიწყეთ რეგისტრაცია
          </a>
        </div>

        {/* RIGHT – 4 STEPS */}
        <div className="flex flex-col gap-4">
          {[
            [
              "მშობლის ანგარიშის შექმნა",
              "გადმოწერეთ აპლიკაცია და შექმენით ანგარიში.",
            ],
            [
              "მოსწავლის რეგისტრაცია",
              "განახორციელეთ მოსწავლის დამატება: სახელი, გვარი, კლასი.",
            ],
            ["საგნის შეძენა", "აირჩიეთ სასურველი საგანი და გადაიხადეთ."],
            [
              "უნიკალური კოდი",
              "მოსწავლე შედის კოდით და ხედავს შეძენილ მასალას.",
            ],
          ].map(([title, desc], index) => (
            <div
              key={index}
              className="p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
            >
              {/* NUMBER + TITLE */}
              <div className="flex items-center gap-4 mb-2">
                <span className="text-green-400 font-bold text-2xl w-8">
                  {index + 1}
                </span>

                <h3 className="font-semibold text-lg">{title}</h3>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-sm pl-12">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
