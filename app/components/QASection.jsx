export default function FAQChat() {
  const faq = [
    {
      q: "როგორ მუშაობს პლატფორმა?",
      a: "ჩვენი AI ტუტორი განმარტავს ყველაფერს მარტივად, ანიმაციებით და ნაბიჯ-ნაბიჯ.",
    },
    {
      q: "როგორ დავრეგისტრირდე?",
      a: "მშობელი შედის აპში, ქმნის პროფილს და ამატებს ბავშვს ერთი კოდით.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-black/20" id="faq">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          კითხვები & <span className="text-green-400">პასუხები</span>
        </h2>

        {/* CHAT BUBBLES */}
        <div className="space-y-10">
          {faq.map((f, i) => (
            <div key={i} className="flex flex-col gap-4">
              {/* USER QUESTION */}
              <div className="self-start bg-white/10 text-white p-4 sm:p-5 rounded-2xl max-w-[90%] text-sm sm:text-base leading-relaxed">
                ❓ {f.q}
              </div>

              {/* AI ANSWER */}
              <div className="self-end bg-green-500/20 border border-green-400/30 p-4 sm:p-5 rounded-2xl backdrop-blur-xl max-w-[90%] text-green-300 text-sm sm:text-base leading-relaxed">
                🤖 {f.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
