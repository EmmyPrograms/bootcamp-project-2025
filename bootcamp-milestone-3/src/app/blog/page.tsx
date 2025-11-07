/*
 Displays a list of blogs. 
 @author Amelia Harris
 @version 2.0
*/

import BlogPreview from "@/components/blogPreview";
import blogs from "@/app/blogData";

export default function BlogPage() {
  return (
    <div className=" flex flex-col items-center">
      <title>Blog</title>
      <h1>
        <u>Blogs</u>
      </h1>
      <div id="blog-content" className="gap-8 px-6 py-12 text-secondary">
        {blogs.map((blog) => (
          <BlogPreview
            key = {blog.title}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            date={blog.date}
            imageAlt={blog.imageAlt}
            slug={blog.slug}
          />
        ))}
      </div>
      <footer className="footer">
        © 2025 Amelia Harris | All Rights Reserved
      </footer>
    </div>
  );
}
