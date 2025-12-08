import Image from "next/image";
import { blogs } from "../../../data/blogsData";

export default async function BlogPage({ params }) {
  const { id } = await params; // ⭐️ params არის Promise – უნდა გაეშალოს await-ით
  const blogId = parseInt(id);

  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return <div className="p-10 text-center">ბლოგი ვერ მოიძებნა</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

      <div className="w-full rounded-xl overflow-hidden mb-8">
        <Image
          src={blog.image}
          width={900}
          height={500}
          className="w-full h-auto"
          alt={blog.title}
        />
      </div>

      <article
        className="prose prose-invert prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
