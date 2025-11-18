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
    <section className="py-24 bg-black/20" id="faq">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          კითხვები & <span className="text-green-400">პასუხები</span>
        </h2>

        <div className="space-y-8">
          {faq.map((f, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="self-start bg-white/10 text-white p-4 rounded-2xl max-w-[80%]">
                ❓ {f.q}
              </div>

              <div className="self-end bg-green-500/20 border border-green-400/30 p-4 rounded-2xl backdrop-blur-xl max-w-[80%] text-green-300">
                🤖 {f.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
