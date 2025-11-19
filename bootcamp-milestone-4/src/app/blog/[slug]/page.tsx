import connectDB from "@/database/db";
import BlogPage from "@/components/blog";


type Props = {
  params: Promise<{ slug: string }>;
};

async function getBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function Blog({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return (
      <div className=" flex flex-col items-center text-primary">
        Blog not found.
      </div>
    );
  }

  return (
    <div className=" flex flex-col items-center">
      <title>{blog.title}</title>
      <h1>
        <u>{blog.title}</u>
      </h1>
      <div id="blog-content" className="gap-8 px-6 py-12 text-secondary">
        <BlogPage
          title={blog.title}
          description={blog.content}
          image={blog.image}
          date={blog.date}
          imageAlt={blog.imageAlt}
          slug={slug}
          content={blog.content}
          comments={blog.comments}
        />
      </div>
      
      <footer className="footer">
        © 2025 Amelia Harris | All Rights Reserved
      </footer>
    </div>
  );
}
