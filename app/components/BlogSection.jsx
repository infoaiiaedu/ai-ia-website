"use client";
import Image from "next/image";
import { blogs } from "../../data/blogsData";

export default function BlogSection() {
  return (
    <section id="blog" className="py-28 bg-black/20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">
          ბლოგი <span className="text-green-400">AI IA</span>
        </h2>

        {/* 1 column mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((b) => (
            <a
              key={b.id}
              href={`/blog/${b.id}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 block hover:bg-white/10 transition"
            >
              <div className="w-full aspect-[16/7] rounded-xl overflow-hidden mb-4">
                <Image
                  src={b.image}
                  alt={b.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{b.shortDesc}</p>

              <span className="text-green-400 font-semibold hover:underline">
                ვრცლად →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
