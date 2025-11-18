"use client";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "როგორ ეხმარება AI ბავშვებს სწავლის პროცესში",
    image: "/slider.png",
    desc: "AI აძლიერებს მოსწავლის უნარებს და ერგება მათ დონეს.",
  },
  {
    id: 2,
    title: "რა არის პერსონალური სწავლება?",
    image: "/slider.png",
    desc: "ადაპტური სწავლება არის მომავალი განათლების.",
  },
  {
    id: 3,
    title: "რატომ სჭირდება მოსწავლეს AI ტუტორი?",
    image: "/slider.png",
    desc: "AI ტუტორი 24/7-ში აუხსნის ნებისმიერ თემას.",
  },
  {
    id: 4,
    title: "როგორ გავხადოთ მათემატიკა სახალისო?",
    image: "/slider.png",
    desc: "ვიზუალური მასალა + თამაშები = სასწაული შედეგი.",
  },
];

export default function BlogSection() {
  const [current, setCurrent] = useState(0);

  return (
    <section id="blog" className="py-28 bg-black/20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">
          ბლოგი <span className="text-green-400">AI IA</span>
        </h2>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {blogs.map((b) => (
                <div key={b.id} className="min-w-full p-6">
                  {/* Smaller Cover Image */}
                  <div className="w-full aspect-[16/5] max-h-[260px] rounded-xl overflow-hidden mb-6">
                    <img
                      src={b.image}
                      alt={b.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-semibold mb-2">{b.title}</h3>
                  <p className="text-gray-300 mb-6">{b.desc}</p>

                  <a
                    href={`/blog/${b.id}`}
                    className="text-green-400 font-semibold hover:underline"
                  >
                    ვრცლად →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {blogs.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition ${
                  current === i ? "bg-green-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
