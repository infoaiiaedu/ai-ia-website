export default function StartGuide() {
  return (
    <section id="start-guide" className="py-20 md:py-28 bg-black/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* LEFT SIDE – TEXT */}
        <div>
          <h4 className="text-green-400 uppercase font-semibold mb-3 text-sm md:text-base">
            როგორ დავიწყოთ
          </h4>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            დაწყების მარტივი პროცესი{" "}
            <span className="text-green-400">4 სწრაფი ნაბიჯით</span>
          </h2>

          <p className="text-gray-300 mb-6 text-sm md:text-base max-w-md">
            თქვენი შვილის საგანმანათლებლო მოგზაურობა სულ რამდენიმე წუთში იწყება.
          </p>

          <a className="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg inline-block hover:bg-green-400 transition cursor-pointer text-sm md:text-base">
            დაიწყეთ რეგისტრაცია
          </a>
        </div>

        {/* RIGHT SIDE – STEPS */}
        <div className="flex flex-col gap-5">
          {[
            [
              "მშობლის ანგარიშის შექმნა",
              "გადმოწერეთ აპლიკაცია და შექმნეთ ანგარიში.",
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
              className="p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                {/* NUMBER */}
                <span className="text-green-400 font-bold text-2xl md:text-3xl">
                  {index + 1}
                </span>

                {/* TITLE + DESCRIPTION */}
                <div>
                  <h3 className="font-semibold text-lg md:text-xl">{title}</h3>
                  <p className="text-gray-300 text-sm md:text-base mt-1">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
