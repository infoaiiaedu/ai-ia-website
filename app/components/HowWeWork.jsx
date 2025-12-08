"use client";

import { useEffect } from "react";

export default function HowWeWork() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section id="how-we-work" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* RIGHT (Mobile First) — TEXT BLOCK */}
        <div className="reveal slide-right order-1 md:order-2">
          <h4 className="text-green-400 uppercase font-semibold mb-3 text-sm md:text-base">
            ჩვენი ტექნოლოგია
          </h4>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            ინოვაციური სწავლება{" "}
            <span className="text-green-400">ექსპერტები + AI ტექნოლოგია</span>
          </h2>

          <p className="text-gray-300 mb-6 text-sm md:text-base max-w-lg">
            პლატფორმა აერთიანებს საგნის ექსპერტების ცოდნას და თანამედროვე AI
            ალგორითმებს, რათა სწავლა გახდეს პერსონალური, სწრაფი და ეფექტური.
          </p>

          <a className="px-5 py-3 border border-white/20 rounded-lg hover:border-green-400 hover:text-green-400 transition inline-block cursor-pointer text-sm md:text-base">
            გაიგე მეტი AI-ზე
          </a>
        </div>

        {/* LEFT — FEATURES */}
        <div className="flex flex-col gap-4 reveal slide-left order-2 md:order-1">
          {[
            [
              "🤖",
              "ექსპერტული მასალა",
              "თეორია, ვიდეოები და მაგალითები ინჟინრებისა და AI-ის მიერ.",
            ],
            [
              "🤖",
              "სადიაგნოსტიკო ტესტირება",
              "AI განსაზღვრავს მოსწავლის საწყის დონეს.",
            ],
            [
              "🤖",
              "AI ტუტორი",
              "24/7 დახმარება, ახსნა და ნაბიჯ-ნაბიჯ ამოხსნა.",
            ],
            [
              "🤖",
              "ადაპტური სწავლება",
              "სისტემა მუდმივად ერგება მოსწავლის ცოდნასა და პროგრესს.",
            ],
          ].map(([icon, title, desc], index) => (
            <div
              key={index}
              className="p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition cursor-default backdrop-blur-md shadow-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{icon}</span>
                <h3 className="font-semibold text-base md:text-lg">{title}</h3>
              </div>

              <p className="text-gray-300 text-sm md:text-base">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
