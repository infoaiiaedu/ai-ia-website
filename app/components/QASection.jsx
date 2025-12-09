"use client";
import { useState } from "react";

export default function FAQChat() {
  const [openIndex, setOpenIndex] = useState(null);

  const faq = [
    {
      q: "როგორ უზრუნველყოფს AI IA მასალის სიზუსტეს და ხარისხს?",
      a: "მასალები ექსპერტების მიერაა შექმნილი, ხოლო AI მხოლოდ ამარტივებს ახსნას — შეცდომას არ ქმნის.",
    },
    {
      q: "ბავშვი მარტო შეძლებს სწავლას?",
      a: "დიახ, მას აქვს ვიდეო ახსნები, AI ტუტორი, ტესტები და ნაბიჯ-ნაბიჯ ინსტრუქციები.",
    },
    {
      q: "რა ასაკისთვისაა განკუთვნილი პლატფორმა?",
      a: "პლატფორმა ძირითადად განკუთვნილია V–X კლასის მოსწავლეებისთვის",
    },
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-black/20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          კითხვები & <span className="text-green-400">პასუხები</span>
        </h2>

        <div className="space-y-6">
          {faq.map((item, i) => (
            <div key={i} className="border-b border-white/10 pb-4">
              <button
                onClick={() => toggle(i)}
                className="w-full text-left flex justify-between items-center text-white text-lg font-semibold hover:text-green-400 transition"
              >
                <span>❓ {item.q}</span>
                <span className="text-green-400 text-xl">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <div className="self-end bg-green-500/20 border border-green-400/30 p-4 sm:p-5 rounded-2xl backdrop-blur-xl max-w-[85%] text-green-300 text-sm sm:text-base leading-relaxed animate-fade-slide">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-fade-slide {
          animation: fadeSlide 0.35s ease forwards;
        }

        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
